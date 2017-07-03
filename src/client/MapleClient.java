/*
 * ArcStory Project
 * 최주원 sch2307@naver.com
 * 이준 junny_adm@naver.com
 * 우지훈 raccoonfox69@gmail.com
 * 강정규 ku3135@nate.com
 * 김진홍 designer@inerve.kr
 */

package client;

import client.stats.BuffStats;
import client.stats.BuffStatsValueHolder;
import community.*;
import constants.ServerConstants;
import constants.programs.ControlUnit;
import database.MYSQL;
import database.MYSQLException;
import java.awt.Point;
import launch.CashShopServer;
import launch.ChannelServer;
import launch.LoginServer;
import launch.world.WorldBroadcasting;
import launch.world.WorldCommunity;
import packet.creators.LoginPacket;
import packet.creators.MainPacketCreator;
import packet.crypto.MapleCrypto;
import packet.transfer.write.Packet;
import scripting.NPCScriptManager;
import server.shops.IMapleCharacterShop;
import tools.Timer.PingTimer;
import java.sql.*;
import java.text.SimpleDateFormat;
import java.util.*;
import java.util.concurrent.ScheduledFuture;
import java.util.concurrent.locks.Lock;
import java.util.concurrent.locks.ReentrantLock;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.script.ScriptEngine;
import launch.holder.MapleBuffValueHolder;
import org.apache.mina.core.session.IoSession;
import packet.creators.AntiHackPacket;
import packet.creators.PlayerShopPacket;
import server.maps.MapleMap;
import server.maps.MaplePortal;
import tools.RandomStream.Randomizer;

public class MapleClient  {

    public static final transient byte LOGIN_NOTLOGGEDIN = 0,
	    LOGIN_SERVER_TRANSITION = 1,
	    LOGIN_LOGGEDIN = 2,
	    LOGIN_WAITING = 3,
	    CASH_SHOP_TRANSITION = 4,
	    LOGIN_CS_LOGGEDIN = 5,
	    CHANGE_CHANNEL = 6;
    public static final int DEFAULT_CHARSLOT = 15;
    public static final String CLIENT_KEY = "CLIENT";
     private transient MapleCrypto send, receive;
    private transient IoSession session;
    private MapleCharacter player;
    private MapleCharacterStat playerstat;
    private int channel = 1, accId = 1, world;
    private boolean loggedIn = false, serverTransition = false;
    private transient Calendar tempban = null;
    private String accountName;
    private transient long lastPong, lastPing;
    private boolean gm;
    private byte greason = 1, gender = -1;
    private int charslots = DEFAULT_CHARSLOT;
    public transient short loginAttempt = 0;
    public boolean pinged = false, isCS = false, allowLoggin = false;
    private transient List<Integer> allowedChar = new LinkedList<Integer>();
    private transient Set<String> macs = new HashSet<String>();
    private transient Map<String, ScriptEngine> engines = new HashMap<String, ScriptEngine>();
    private transient ScheduledFuture<?> idleTask = null;
        private transient ScheduledFuture<?> processTask = null;
        private transient String OTPUserToken;
    private boolean usingOTP = false;
    private transient String secondPassword;// To be used only on login
    private boolean usingSecondPassword = false;
    private final transient Lock mutex = new ReentrantLock(true);
    private final transient Lock npc_mutex = new ReentrantLock();
    private int idcode1, idcode2;
    private long lastNpcClick = 0;
    private int chrslot;
    public Timer processTimer;
    
   public MapleClient(MapleCrypto send, MapleCrypto receive, IoSession session) {
        this.send = send;
        this.receive = receive;
        this.session = session;
    }

    public void send(Packet p) {
        getSession().write(p);
    }
    
    public final MapleCrypto getReceiveCrypto() {
	return receive;
    }

    public final MapleCrypto getSendCrypto() {
	return send;
    }
    
    public void addChrSlot(int i,int id) {
        chrslot += i;
        setChrSlot(id);
    }
    
    public int getChrSlot() {
	Connection con = MYSQL.getConnection();
	PreparedStatement ps;
        try {
            ps = con.prepareStatement("SELECT * FROM accounts WHERE id = ?");
            ps.setInt(1, accId);
	    ResultSet rs = ps.executeQuery();
            if (rs.next()) {
                chrslot = rs.getInt("chrslot");
            }
            rs.close();
            ps.close();
        } catch (SQLException ex) {
            
        }
        return chrslot;
    }

    public final void setChrSlot(int id) {
        try {
            PreparedStatement ps = MYSQL.getConnection().prepareStatement("UPDATE accounts SET chrslot = ? WHERE id = ?");
            ps.setInt(1, (getChrSlot() + 1));
            ps.setInt(2, id);
            ps.executeUpdate();
            ps.close();
        } catch (SQLException e) {
            System.out.println(e);
        }
    }
    

    public final IoSession getSession() {
	return session;
    }

    public final Lock getLock() {
	return mutex;
    }
    
    public final Lock getNPCLock() {
        return npc_mutex;
    }

    public MapleCharacter getPlayer() {
	return player;
    }
    
    public MapleCharacterStat getPlayerStat() {
	return playerstat;
    }
    
    public void setPlayer(MapleCharacter player) {
	this.player = player;
    }

    public void createdChar(final int id) {
	allowedChar.add(id);
    }

    public final boolean login_Auth(final int id) {
	return allowedChar.contains(id);
    }

    public final List<MapleCharacter> loadCharacters() { // TODO make this less costly zZz
	final List<MapleCharacter> chars = new LinkedList<MapleCharacter>();

	for (final CharNameAndId cni : loadCharactersInternal()) {
	    final MapleCharacter chr = MapleCharacter.loadCharFromDB(cni.id, this, false);
	    chars.add(chr);
	    allowedChar.add(chr.getId());
	}
	return chars;
    }

    public List<String> loadCharacterNames() {
	List<String> chars = new LinkedList<String>();
	for (CharNameAndId cni : loadCharactersInternal()) {
	    chars.add(cni.name);
	}
	return chars;
    }

    private List<CharNameAndId> loadCharactersInternal() {
        long t= System.currentTimeMillis();
	List<CharNameAndId> chars = new LinkedList<CharNameAndId>();
	try {
	    Connection con = MYSQL.getConnection();
	    PreparedStatement ps = con.prepareStatement("SELECT id, name FROM characters WHERE accountid = ?");
	    ps.setInt(1, accId);

	    ResultSet rs = ps.executeQuery();
	    while (rs.next()) {
		chars.add(new CharNameAndId(rs.getString("name"), rs.getInt("id")));
	    }
	    rs.close();
	    ps.close();
	} catch (SQLException e) {
	    System.err.println("error loading characters internal" + e);
	}
        if (ServerConstants.isLocal) {
            System.out.println("Load Characters Internal time : "+(System.currentTimeMillis() - t)+"ms");
        }
	return chars;
    }

    public boolean isLoggedIn() {
	return loggedIn;
    }

    private Calendar getTempBanCalendar(ResultSet rs) throws SQLException {
	Calendar lTempban = Calendar.getInstance();
	if (rs.getLong("tempban") == 0) { // basically if timestamp in db is 0000-00-00
	    lTempban.setTimeInMillis(0);
	    return lTempban;
	}
	Calendar today = Calendar.getInstance();
	lTempban.setTimeInMillis(rs.getTimestamp("tempban").getTime());
	if (today.getTimeInMillis() < lTempban.getTimeInMillis()) {
	    return lTempban;
	}

	lTempban.setTimeInMillis(0);
	return lTempban;
    }

    public Calendar getTempBanCalendar() {
	return tempban;
    }

    public byte getBanReason() {
	return greason;
    }

    public boolean hasBannedIP() {
	boolean ret = false;
	try {
	    Connection con = MYSQL.getConnection();
	    PreparedStatement ps = con.prepareStatement("SELECT COUNT(*) FROM ipbans WHERE ? LIKE CONCAT(ip, '%')");
	    ps.setString(1, session.getRemoteAddress().toString());
	    ResultSet rs = ps.executeQuery();
	    rs.next();
	    if (rs.getInt(1) > 0) {
		ret = true;
	    }
	    rs.close();
	    ps.close();
	} catch (SQLException ex) {
	    System.err.println("Error checking ip bans" + ex);
	}
	return ret;
    }

    public boolean hasBannedMac() {
	if (macs.isEmpty()) {
	    return false;
	}
	boolean ret = false;
	int i = 0;
	try {
	    Connection con = MYSQL.getConnection();
	    StringBuilder sql = new StringBuilder("SELECT COUNT(*) FROM macbans WHERE mac IN (");
	    for (i = 0; i < macs.size(); i++) {
		sql.append("?");
		if (i != macs.size() - 1) {
		    sql.append(", ");
		}
	    }
	    sql.append(")");
	    PreparedStatement ps = con.prepareStatement(sql.toString());
	    i = 0;
	    for (String mac : macs) {
		i++;
		ps.setString(i, mac);
	    }
	    ResultSet rs = ps.executeQuery();
	    rs.next();
	    if (rs.getInt(1) > 0) {
		ret = true;
	    }
	    rs.close();
	    ps.close();
	} catch (SQLException ex) {
	    System.err.println("Error checking mac bans" + ex);
	}
	return ret;
    }

    private void loadMacsIfNescessary() throws SQLException {
	if (macs.isEmpty()) {
	    Connection con = MYSQL.getConnection();
	    PreparedStatement ps = con.prepareStatement("SELECT macs FROM accounts WHERE id = ?");
	    ps.setInt(1, accId);
	    ResultSet rs = ps.executeQuery();
	    if (rs.next()) {
		String[] macData = rs.getString("macs").split(", ");
		for (String mac : macData) {
		    if (!mac.equals("")) {
			macs.add(mac);
		    }
		}
	    } else {
		throw new RuntimeException("No valid account associated with this client.");
	    }
	    rs.close();
	    ps.close();
	}
    }

    public void banMacs() {
	Connection con = MYSQL.getConnection();
	try {
	    loadMacsIfNescessary();
	    List<String> filtered = new LinkedList<String>();
	    PreparedStatement ps = con.prepareStatement("SELECT filter FROM macfilters");
	    ResultSet rs = ps.executeQuery();
	    while (rs.next()) {
		filtered.add(rs.getString("filter"));
	    }
	    rs.close();
	    ps.close();

	    ps = con.prepareStatement("INSERT INTO macbans (mac) VALUES (?)");
	    for (String mac : macs) {
		boolean matched = false;
		for (String filter : filtered) {
		    if (mac.matches(filter)) {
			matched = true;
			break;
		    }
		}
		if (!matched) {
		    ps.setString(1, mac);
		    try {
			ps.executeUpdate();
		    } catch (SQLException e) {
			// can fail because of UNIQUE key, we dont care
		    }
		}
	    }
	    ps.close();
	} catch (SQLException e) {
	    System.err.println("Error banning MACs" + e);
	}
    }

    /**
     * Returns 0 on success, a state to be used for
     * {@link MaplePacketCreator#getLoginFailed(int)} otherwise.
     *
     * @param success
     * @return The state of the login.
     */
    public int finishLogin() {
	synchronized (MapleClient.class) {
	    final byte state = getLoginState();
	    if (state > MapleClient.LOGIN_NOTLOGGEDIN && state != MapleClient.LOGIN_WAITING) { // already loggedin
		loggedIn = false;
		return 7;
	    }
	    updateLoginState(MapleClient.LOGIN_LOGGEDIN, null);
	}
	return 0;
    }
    
    public void loadAuthData() {
        try {
	    Connection con = MYSQL.getConnection();
	    PreparedStatement ps = con.prepareStatement("SELECT idcode1, idcode2, 2ndpassword, using2ndpassword FROM accounts WHERE id = ?");
	    ps.setInt(1, this.accId);
	    ResultSet rs = ps.executeQuery();
            if (rs.next()) {
                idcode1 = rs.getInt("idcode1");
                idcode2 = rs.getInt("idcode2");
		secondPassword = rs.getString("2ndpassword");
                usingSecondPassword = rs.getByte("using2ndpassword") == 1;
            }
        } catch (Exception e) {
            if (!ServerConstants.realese) e.printStackTrace();
        }
    }

    public int login(String login, String pwd, boolean ipMacBanned) {
	int loginok = 5;
	try {
	    Connection con = MYSQL.getConnection();
	    PreparedStatement ps = con.prepareStatement("SELECT * FROM accounts WHERE name = ?");
	    ps.setString(1, login);
	    ResultSet rs = ps.executeQuery();

	    if (rs.next()) {
		final int banned = rs.getInt("banned");
		final String password = rs.getString("password");

		accId = rs.getInt("id");
		secondPassword = rs.getString("2ndpassword");
		gm = rs.getInt("gm") > 0;
		greason = rs.getByte("greason");
		tempban = getTempBanCalendar(rs);
		gender = rs.getByte("gender");
                idcode1 = rs.getInt("idcode1");
                idcode2 = rs.getInt("idcode2");
                chrslot = rs.getInt("chrslot");
                usingSecondPassword = rs.getByte("using2ndpassword") == 1;
		ps.close();

		if (banned > 0) {
		    loginok = 3;
		} else {
		    if (banned == -1) {
			unban();
		    }
		    byte loginstate = getLoginState();
		    if (loginstate > MapleClient.LOGIN_NOTLOGGEDIN) { // already loggedin
			loggedIn = false;
			loginok = 7;
		    } else {
			if (pwd.equals(password)) {
			    loginok = 0;
                            SimpleDateFormat sdf = new SimpleDateFormat("yyyyMMddHH");
                            updateLastConnection(sdf.format(Calendar.getInstance().getTime()));
                        } else {
			    loggedIn = false;
			    loginok = 4;
			}
		    }
		}
	    }
	    rs.close();
	    ps.close();
	} catch (SQLException e) {
	    System.err.println("ERROR" + e);
	}
	return loginok;
    }

    public boolean CheckSecondPassword(String in) {
	boolean allow = false;

	if (in.equals(secondPassword)) {
	    allow = true;
	}
	return allow;
    }

    /**
     * Gets the special server IP if the client matches a certain subnet.
     *
     * @param subnetInfo A <code>Properties</code> instance containing all the subnet info.
     * @param clientIPAddress The IP address of the client as a dotted quad.
     * @param channel The requested channel to match with the subnet.
     * @return <code>0.0.0.0</code> if no subnet matched, or the IP if the subnet matched.
     */
    public static String getChannelServerIPFromSubnet(String clientIPAddress, int channel) {
	return ServerConstants.Host;
    }

    private void unban() {
	try {
	    Connection con = MYSQL.getConnection();
	    PreparedStatement ps = con.prepareStatement("UPDATE accounts SET banned = 0 and banreason = '' WHERE id = ?");
	    ps.setInt(1, accId);
	    ps.executeUpdate();
	    ps.close();
	} catch (SQLException e) {
	    System.err.println("Error while unbanning" + e);
	}
    }

    public byte unban(String charname) {
	try {
	    Connection con = MYSQL.getConnection();
	    PreparedStatement ps = con.prepareStatement("SELECT accountid from characters where name = ?");
	    ps.setString(1, charname);

	    ResultSet rs = ps.executeQuery();
	    if (!rs.next()) {
		return -1;
	    }
	    final int accid = rs.getInt(1);
	    rs.close();
	    ps.close();

	    ps = con.prepareStatement("UPDATE accounts SET banned = 0 and banreason = '' WHERE id = ?");
	    ps.setInt(1, accid);
	    ps.executeUpdate();
	    ps.close();
	} catch (SQLException e) {
	    System.err.println("Error while unbanning" + e);
	    return -2;
	}
	return 0;
    }

    public void updateMacs(String macData) {
        macs.addAll(Arrays.asList(macData.split(", ")));
	StringBuilder newMacData = new StringBuilder();
	Iterator<String> iter = macs.iterator();
	while (iter.hasNext()) {
	    newMacData.append(iter.next());
	    if (iter.hasNext()) {
		newMacData.append(", ");
	    }
	}
	try {
	    Connection con = MYSQL.getConnection();
	    PreparedStatement ps = con.prepareStatement("UPDATE accounts SET macs = ? WHERE id = ?");
	    ps.setString(1, newMacData.toString());
	    ps.setInt(2, accId);
	    ps.executeUpdate();
	    ps.close();
	} catch (SQLException e) {
	    System.err.println("Error saving MACs" + e);
	}
    }

    public void setAccID(int id) {
	this.accId = id;
    }

    public int getAccID() {
	return this.accId;
    }

    public final void updateLoginState(final int newstate, final String SessionID) { // TODO hide?
	try {
	    Connection con = MYSQL.getConnection();
	    PreparedStatement ps = con.prepareStatement("UPDATE accounts SET loggedin = ?, SessionIP = ?, lastlogin = ? WHERE id = ?");
	    ps.setInt(1, newstate);
	    ps.setString(2, SessionID);
            ps.setTimestamp(3, new Timestamp(System.currentTimeMillis()));
	    ps.setInt(4, getAccID());
	    ps.executeUpdate();
	    ps.close();
	} catch (SQLException e) {
	    System.err.println("error updating login state" + e);
	}
	if (newstate == MapleClient.LOGIN_NOTLOGGEDIN || newstate == MapleClient.LOGIN_WAITING) {
	    loggedIn = false;
	    serverTransition = false;
	} else {
	    serverTransition = (newstate == MapleClient.LOGIN_SERVER_TRANSITION || newstate == MapleClient.CHANGE_CHANNEL);
	    loggedIn = !serverTransition;
	}
    }
    
    public final void updateLastConnection(String time) {
        try {
	    Connection con = MYSQL.getConnection();

	    PreparedStatement ps = con.prepareStatement("UPDATE accounts SET lastconnect = ? WHERE id = ?");
	    ps.setString(1, time);
	    ps.setInt(2, accId);
	    ps.executeUpdate();
	    ps.close();

	} catch (SQLException e) {
	    if (!ServerConstants.realese) e.printStackTrace();
	}
    }
    
    public final int getLastConnection() {
        final Connection connect = MYSQL.getConnection();
        PreparedStatement query = null;
        ResultSet result = null;
        try {
            query = connect.prepareStatement("SELECT lastconnect FROM accounts WHERE id = ?");
            query.setInt(1, accId);
            result = query.executeQuery();
            if (result.next()) {
                return Integer.parseInt(result.getString("lastconnect"));
            }
	} catch (SQLException e) {
	    if (!ServerConstants.realese) e.printStackTrace();
	} finally {
            try {
                if (query != null) {
                    query.close();
                }
                if (result != null) {
                    result.close();
                }
            } catch (SQLException e) {
            } 
        }
        return 2012010101;
    }

    public final void updateSecondPassword() {
	try {
	    final Connection con = MYSQL.getConnection();

	    PreparedStatement ps = con.prepareStatement("UPDATE `accounts` SET `2ndpassword` = ?, `using2ndpassword` = ? WHERE id = ?");
	    ps.setString(1, secondPassword);
            ps.setByte(2, (byte) (usingSecondPassword ? 1 : 0));
	    ps.setInt(3, accId);
	    ps.executeUpdate();
	    ps.close();
	} catch (SQLException e) {
	    System.err.println("error updating login state" + e);
	}
    }
    
    public void updateIDCodes(int id1, int id2) {
	try {
	    final Connection con = MYSQL.getConnection();

	    PreparedStatement ps = con.prepareStatement("UPDATE accounts SET idcode1 = ?, idcode2 = ? WHERE id = ?");
	    ps.setInt(1, id1);
            ps.setInt(2, id2);
	    ps.setInt(3, accId);
	    ps.executeUpdate();
	    ps.close();

	} catch (SQLException e) {
	    if (!ServerConstants.realese) e.printStackTrace();
	}
    }
    
    public boolean isUsing2ndPassword() {
        return usingSecondPassword;
    }
    
    public int getIDCode1() {
        return idcode1;
    }
    
    public int getIDCode2() {
        return idcode2;
    }

    public final byte getLoginState() { // TODO hide?
	Connection con = MYSQL.getConnection();
	try {
	    PreparedStatement ps;
	    ps = con.prepareStatement("SELECT loggedin, lastlogin FROM accounts WHERE id = ?");
	    ps.setInt(1, getAccID());
	    ResultSet rs = ps.executeQuery();
	    if (!rs.next()) {
		ps.close();
		throw new MYSQLException("Everything sucks 아이디 : " + getAccID());
	    }
	    byte state = rs.getByte("loggedin");

	    if (state == MapleClient.LOGIN_SERVER_TRANSITION || state == MapleClient.CHANGE_CHANNEL) {
		if (rs.getTimestamp("lastlogin").getTime() + 20000 < System.currentTimeMillis()) { // connecting to chanserver timeout
		    state = MapleClient.LOGIN_NOTLOGGEDIN;
		    updateLoginState(state, null);
		}
	    }
	    rs.close();
	    ps.close();
	    if (state == MapleClient.LOGIN_LOGGEDIN) {
		loggedIn = true;
	    } else {
		loggedIn = false;
	    }
	    return state;
	} catch (SQLException e) {
	    loggedIn = false;
	    throw new MYSQLException("error getting login state", e);
	}
    }

    public static int isValidAccount(String name) {
	Connection con = MYSQL.getConnection();
	try {
	    PreparedStatement ps;
	    ps = con.prepareStatement("SELECT day FROM accounts WHERE name = ?");
	    ps.setString(1, name);
	    ResultSet rs = ps.executeQuery();
	    if (!rs.next()) {
		return 0;
	    }
	    int state = rs.getInt("day");
	    rs.close();
	    ps.close();
	    return state;
	} catch (SQLException e) {
	    throw new MYSQLException("쿼리 오류. 사용 가능 일수를 불러올 수 없습니다.", e);
	}
    }


    public final void removalTask() {
	try {
	    if (!player.getAllBuffs().isEmpty()) {
		player.cancelAllBuffs_();
	    }
	    if (!player.getAllDiseases().isEmpty()) {
		player.cancelAllDebuffs();
	    }
	    if (player.getTrade() != null) {
		MapleUserTrade.cancelTrade(player.getTrade());
	    }
	    NPCScriptManager.getInstance().dispose(this);

	    final IMapleCharacterShop shop = player.getPlayerShop();
	    if (shop != null) {
		shop.removeVisitor(player);
		if (shop.isOwner(player)) {
		    shop.setOpen(true);
		}
	    }
	    if (player.getMap() != null) {
		player.getMap().removePlayer(player);
	    }
	    if (player.getEventInstance() != null) {
		player.getEventInstance().playerDisconnected(player);
	    }
            this.processTimer.cancel();
	} catch (final Throwable e) {
	}
    }

    public final void disconnect(final boolean RemoveInChannelServer, final boolean fromCS) {
	if (player != null && isLoggedIn()) {
	    removalTask();
	    player.saveToDB(true, fromCS);
            ControlUnit.동접제거(player.getName());
            ControlUnit.접속자수.setText(String.valueOf((int)(Integer.parseInt(ControlUnit.접속자수.getText()) - 1)));
	    if (!fromCS) {
		final ChannelServer ch = ChannelServer.getInstance(channel);
		try {
		    if (player.getMessenger() != null) {
			WorldCommunity.leaveMessenger(player.getMessenger().getId(), new MapleMultiChatCharacter(player));
			player.setMessenger(null);
		    }
		    if (player.getParty() != null) {
			final MaplePartyCharacter chrp = new MaplePartyCharacter(player);
			chrp.setOnline(false);
                        if (player.getParty().getExpedition() != null) {
                            player.getParty().getExpedition().broadcastMessage(MainPacketCreator.updateExpedition(true, player.getParty().getExpedition()));
                        }
			WorldCommunity.updateParty(player.getParty().getId(), MaplePartyOperation.LOG_ONOFF, chrp);
		    }
		    if (!serverTransition && isLoggedIn()) {
			WorldBroadcasting.loggedOff(player.getName(), player.getId(), channel, player.getBuddylist().getBuddyIds());
		    } else { // Change channel
			WorldBroadcasting.loggedOn(player.getName(), player.getId(), channel, player.getBuddylist().getBuddyIds());
		    }
		    if (player.getGuildId() > 0) {
			ChannelServer.setGuildMemberOnline(player.getMGC(), false, -1);
		    }
                    if (player.getSummons() != null) {
                        player.cancelBuffStats(-1, BuffStats.SUMMON, BuffStats.PUPPET, BuffStats.DUMMY_EFFECT);
                    }
                    for (BuffStatsValueHolder mbsvh : player.getAllBuffs_()) {
                        if (mbsvh.schedule != null) {
                            mbsvh.schedule.cancel(false);
                            mbsvh.schedule = null;
                        }
                    }
		} catch (final Exception e) {
                    if (player != null) {
                        player.setMessenger(null);
                    }
		    if (!ServerConstants.realese) e.printStackTrace();
		    System.err.println(getLogMessage(this, "ERROR") + e);
		} finally {
		    if (RemoveInChannelServer && ch != null) {
                        SimpleDateFormat sdf = new SimpleDateFormat("yyyyMMddHH");
                        updateLastConnection(sdf.format(Calendar.getInstance().getTime()));
			ch.removePlayer(player);
             //           ch.getPlayerStorage().deregisterPendingPlayer(player.getId());
		    }
		    player = null;
		}
	    } else {
		final CashShopServer cs = CashShopServer.getInstance();
		try {
		    if (player.getParty() != null) {
			final MaplePartyCharacter chrp = new MaplePartyCharacter(player);
			chrp.setOnline(false);
			WorldCommunity.updateParty(player.getParty().getId(), MaplePartyOperation.LOG_ONOFF, chrp);
		    }
		    if (!serverTransition && isLoggedIn()) {
			WorldBroadcasting.loggedOff(player.getName(), player.getId(), channel, player.getBuddylist().getBuddyIds());
		    } else { // Change channel
			WorldBroadcasting.loggedOn(player.getName(), player.getId(), channel, player.getBuddylist().getBuddyIds());
		    }
		    if (player.getGuildId() > 0) {
			ChannelServer.setGuildMemberOnline(player.getMGC(), false, -1);
		    }

		} catch (final Exception e) {
		    player.setMessenger(null);
		    if (!ServerConstants.realese) e.printStackTrace();
		    System.err.println(getLogMessage(this, "ERROR") + e);
		} finally {
		    if (RemoveInChannelServer && cs != null) {
			cs.getPlayerStorage().deregisterPlayer(player);
		    }
		    player = null;
		}
	    }
	}
	if (!serverTransition && isLoggedIn()) {
	    updateLoginState(MapleClient.LOGIN_NOTLOGGEDIN, null);
	}
//        System.out.println(this.accountName+" disconnected!");
        /*
        try {
            Connection con = MYSQL.getConnection();
            PreparedStatement del = con.prepareStatement("DELETE FROM acceptip WHERE ip = ?");
            del.setString(1, getSession().getRemoteAddress().toString().split(":")[0]);
            del.executeUpdate();
            del.close();
        } catch (SQLException ex) {
            ex.printStackTrace();
        }
         * 
         */
        
    }

    public final String getSessionIPAddress() {
	return session.getRemoteAddress().toString().split(":")[0];
    }

    public final boolean CheckIPAddress() {
	try {
	    final PreparedStatement ps = MYSQL.getConnection().prepareStatement("SELECT SessionIP FROM accounts WHERE id = ?");
	    ps.setInt(1, this.accId);
	    final ResultSet rs = ps.executeQuery();

	    boolean canlogin = false;

	    if (rs.next()) {
		final String sessionIP = rs.getString("SessionIP");

		if (sessionIP != null) { // Probably a login proced skipper?
		    canlogin = getSessionIPAddress().equals(sessionIP.split(":")[0]);
		}
	    }
	    rs.close();
	    ps.close();

	    return canlogin;
	} catch (final SQLException e) {
	    System.out.println("Failed in checking IP address for client.");
	}
	return false;
    }

    public final int getChannel() {
	return channel;
    }
    
    public void sendProcessCheck() {
        this.session.write(AntiHackPacket.sendProcessRequest());
    }
    
    public void checkProcess() {
        this.processTimer = new Timer();
        this.processTimer.schedule(new TimerTask() {
          public void run() {
            MapleClient.this.sendProcessCheck();
          }
        }
        , 0L, 20000L);
    }
    
    public final ChannelServer getChannelServer() {
	return ChannelServer.getInstance(channel);
    }

    public final boolean deleteCharacter(final int cid) {
	try {
	    final Connection con = MYSQL.getConnection();
	    PreparedStatement ps = con.prepareStatement("SELECT id, guildid, guildrank, name, alliancerank FROM characters WHERE id = ? AND accountid = ?");
	    ps.setInt(1, cid);
	    ps.setInt(2, accId);
	    ResultSet rs = ps.executeQuery();

	    if (!rs.next()) {
		rs.close();
		ps.close();
		return false;
	    }
	    if (rs.getInt("guildid") > 0) { // is in a guild when deleted
		final MapleGuildCharacter mgc = new MapleGuildCharacter(cid, (short) 0, rs.getString("name"), (byte) -1, 0, rs.getInt("guildrank"), rs.getInt("guildid"), false, rs.getInt("alliancerank"));
		    LoginServer.getInstance().deleteGuildCharacter(mgc);
	    }
	    rs.close();
	    ps.close();

	    ps = con.prepareStatement("DELETE FROM characters WHERE id = ?");
	    ps.setInt(1, cid);
	    ps.executeUpdate();
	    ps.close();
            
	    ps = con.prepareStatement("DELETE FROM skills WHERE characterid = ?");
	    ps.setInt(1, cid);
	    ps.executeUpdate();
	    ps.close();
            
	    ps = con.prepareStatement("DELETE FROM hiredmerch WHERE characterid = ?");
	    ps.setInt(1, cid);
	    ps.executeUpdate();
	    ps.close();

	    ps = con.prepareStatement("DELETE FROM mountdata WHERE characterid = ?");
	    ps.setInt(1, cid);
	    ps.executeUpdate();
	    ps.close();

	    ps = con.prepareStatement("DELETE FROM monsterbook WHERE charid = ?");
	    ps.setInt(1, cid);
	    ps.executeUpdate();
	    ps.close();
            
	    ps = con.prepareStatement("DELETE FROM keyvalue WHERE cid = ?");
	    ps.setInt(1, cid);
	    ps.executeUpdate();
	    ps.close();
            
	    ps = con.prepareStatement("DELETE FROM keyvalue2 WHERE cid = ?");
	    ps.setInt(1, cid);
	    ps.executeUpdate();
	    ps.close();
            
	    ps = con.prepareStatement("DELETE FROM inventoryitems WHERE characterid = ?");
	    ps.setInt(1, cid);
	    ps.executeUpdate();
	    ps.close();
            
            ps = con.prepareStatement("DELETE FROM `inner_ability_skills` WHERE player_id = ?");
            ps.setInt(1, cid);
            ps.executeUpdate();
            ps.close();
            
            ps = con.prepareStatement("DELETE FROM `inventoryslot` WHERE characterid = ?");
            ps.setInt(1, cid);
            ps.executeUpdate();
            ps.close();
            
            ps = con.prepareStatement("DELETE FROM `keymap` WHERE characterid = ?");
            ps.setInt(1, cid);
            ps.executeUpdate();
            ps.close();
            
            ps = con.prepareStatement("DELETE FROM `questinfo` WHERE characterid = ?");
            ps.setInt(1, cid);
            ps.executeUpdate();
            ps.close();
            
            ps = con.prepareStatement("DELETE FROM `queststatus` WHERE characterid = ?");
            ps.setInt(1, cid);
            ps.executeUpdate();
            ps.close();
            
            ps = con.prepareStatement("DELETE FROM `quickslot` WHERE cid = ?");
            ps.setInt(1, cid);
            ps.executeUpdate();
            ps.close();
            
            ps = con.prepareStatement("DELETE FROM `skillmacros` WHERE characterid = ?");
            ps.setInt(1, cid);
            ps.executeUpdate();
            ps.close();
            
            ps = con.prepareStatement("DELETE FROM `skills_cooldowns` WHERE charid = ?");
            ps.setInt(1, cid);
            ps.executeUpdate();
            ps.close();
            
            ps = con.prepareStatement("DELETE FROM `steelskills` WHERE cid = ?");
            ps.setInt(1, cid);
            ps.executeUpdate();
            ps.close();
            
            ps = con.prepareStatement("DELETE FROM `trocklocations` WHERE characterid = ?");
            ps.setInt(1, cid);
            ps.executeUpdate();
            ps.close();
	    return true;
	} catch (final SQLException e) {
	    System.err.println("DeleteChar error" + e);
	}
	return false;
    }
    
    public void setGender(byte i) {
       final Connection con = MYSQL.getConnection();
       try {
           PreparedStatement ps = con.prepareStatement("UPDATE accounts SET gender = ? WHERE id = ?");
           ps.setInt(1, i);
           ps.setInt(2, accId);
           ps.executeUpdate();
           ps.close();
       } catch (SQLException ex) {
           ex.printStackTrace();
       }
    }

    public final byte getGender() {
	return gender == -1 ? 0 : gender;
    }
    
    public final byte getRGender() {
	return gender;
    }

    public final String getSecondPassword() {
	return secondPassword;
    }

    public final void setSecondPassword(final String secondPassword) {
	this.secondPassword = secondPassword;
        this.usingSecondPassword = secondPassword != null;
        this.updateSecondPassword();
    }

    public final String getAccountName() {
	return accountName;
    }

    public final void setAccountName(final String accountName) {
	this.accountName = accountName;
    }

    public final void setChannel(final int channel) {
	this.channel = channel;
    }

    public final int getWorld() {
	return world;
    }

    public final void setWorld(final int world) {
	this.world = world;
    }

    public final long getLastPong() {
	return lastPong;
    }

    public final void pongReceived() {
	lastPong = System.currentTimeMillis();
    }
    
  //  public final void sendPing() {
//	lastPing = System.currentTimeMillis();
//	session.write(LoginPacket.getIngamePing());
 //   }

    public void updateCharCard(Map<Integer, Integer> cid) {
        try {
            PreparedStatement ps = MYSQL.getConnection().prepareStatement("SELECT * FROM 'char_card'");
            ResultSet rs = ps.executeQuery();
        } catch (Exception e) {
            try {
                // 테이블 없음
                PreparedStatement ps = MYSQL.getConnection().prepareStatement("create database char_card(accid int not null, worldid int not null default 0, charid int not null default 0, position int no null)");
                ps.executeQuery();
            } catch (SQLException ex) {
                // SKIP
            }
        }
        
        try {
            Connection con = MYSQL.getConnection();
            PreparedStatement ps = con.prepareStatement("");
        } catch (Exception e) {
            
        }
    }
/*
    public class PingRunner implements Runnable {
        @Override
        public void run() {
            if (getLantency() >= 20000 || getLantency() < 0) {
                System.out.println(MapleAccount.this.accountName+" ping timed out");
              //  disconnect(true, false);
               // if (getSession() != null) {
               //     getSession().close();
               // }
            }
            sendPing();
        }
    }
    
    public void checkPing() {
        sendPing();
        if (getIdleTask() == null) {
            setIdleTask(PingTimer.getInstance().schedule(new PingRunner(), 3000000L));
        }
    }
    

    public final int getLantency() {
        return (int) (lastPong - lastPing);
    }
     * 
     */
    public static final String getLogMessage(final MapleClient cfor, final String message) {
	return getLogMessage(cfor, message, new Object[0]);
    }

    public static final String getLogMessage(final MapleCharacter cfor, final String message) {
	return getLogMessage(cfor == null ? null : cfor.getClient(), message);
    }

    public static final String getLogMessage(final MapleCharacter cfor, final String message, final Object... parms) {
	return getLogMessage(cfor == null ? null : cfor.getClient(), message, parms);
    }

    public static final String getLogMessage(final MapleClient cfor, final String message, final Object... parms) {
	final StringBuilder builder = new StringBuilder();
	if (cfor != null) {
	    if (cfor.getPlayer() != null) {
		builder.append("<");
		builder.append(MapleCharacterUtil.makeMapleReadable(cfor.getPlayer().getName()));
		builder.append(" (캐릭터식별코드: ");
		builder.append(cfor.getPlayer().getId());
		builder.append(")> ");
	    }
	    if (cfor.getAccountName() != null) {
		builder.append("(계정: ");
		builder.append(cfor.getAccountName());
		builder.append(") ");
	    }
	}
	builder.append(message);
	int start;
	for (final Object parm : parms) {
	    start = builder.indexOf("{}");
	    builder.replace(start, start + 2, parm.toString());
	}
	return builder.toString();
    }

    public static final int findAccIdForCharacterName(final String charName) {
	try {
	    Connection con = MYSQL.getConnection();
	    PreparedStatement ps = con.prepareStatement("SELECT accountid FROM characters WHERE name = ?");
	    ps.setString(1, charName);
	    ResultSet rs = ps.executeQuery();

	    int ret = -1;
	    if (rs.next()) {
		ret = rs.getInt("accountid");
	    }
	    rs.close();
	    ps.close();

	    return ret;
	} catch (final SQLException e) {
	    System.err.println("findAccIdForCharacterName SQL error");
	}
	return -1;
    }

    public final Set<String> getMacs() {
	return Collections.unmodifiableSet(macs);
    }

    public final boolean isGm() {
	return gm;
    }

    public final void setScriptEngine(final String name, final ScriptEngine e) {
	engines.put(name, e);
    }

    public final ScriptEngine getScriptEngine(final String name) {
	return engines.get(name);
    }

    public final void removeScriptEngine(final String name) {
	engines.remove(name);
    }

    public final ScheduledFuture<?> getIdleTask() {
	return idleTask;
    }

    public final void setIdleTask(final ScheduledFuture<?> idleTask) {
	this.idleTask = idleTask;
    }
    
    public boolean canClickNPC() {
        return lastNpcClick + 500 < System.currentTimeMillis();
    }

    public void setClickedNPC() {
        lastNpcClick = System.currentTimeMillis();
    }

    public void removeClickedNPC() {
        lastNpcClick = 0;
    }

    protected static final class CharNameAndId {

	public final String name;
	public final int id;
   
        public CharNameAndId(final String name, final int id) {
	    super();
	    this.name = name;
	    this.id = id;
	}
    }

    public int getCharacterSlots() {
        if (isGm()) {
            return 15;
        }
        if (charslots != DEFAULT_CHARSLOT) {
            return charslots; //save a sql
        }
        try {
            Connection con = MYSQL.getConnection();
            PreparedStatement ps = con.prepareStatement("SELECT * FROM character_slots WHERE accid = ? AND worldid = ?");
            ps.setInt(1, accId);
            ps.setInt(2, world);
            ResultSet rs = ps.executeQuery();
            if (rs.next()) {
                charslots = rs.getInt("charslots");
            } else {
                PreparedStatement psu = con.prepareStatement("INSERT INTO character_slots (accid, worldid, charslots) VALUES (?, ?, ?)");
                psu.setInt(1, accId);
                psu.setInt(2, world);
                psu.setInt(3, charslots);
                psu.executeUpdate();
                psu.close();
            }
            rs.close();
            ps.close();
        } catch (SQLException sqlE) {
            sqlE.printStackTrace();
        }

        return charslots;
    }

    public boolean gainCharacterSlot() {
        if (getCharacterSlots() >= 15) {
            return false;
        }
        charslots++;

        try {
            Connection con = MYSQL.getConnection();
            PreparedStatement ps = con.prepareStatement("UPDATE character_slots SET charslots = ? WHERE worldid = ? AND accid = ?");
            ps.setInt(1, charslots);
            ps.setInt(2, world);
            ps.setInt(3, accId);
            ps.executeUpdate();
            ps.close();
        } catch (SQLException sqlE) {
            sqlE.printStackTrace();
            return false;
        }
        return true;
    }
}