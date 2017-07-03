/*
 * ArcStory Project
 * 최주원 sch2307@naver.com
 * 이준 junny_adm@naver.com
 * 우지훈 raccoonfox69@gmail.com
 * 강정규 ku3135@nate.com
 * 김진홍 designer@inerve.kr
 */

package launch;

import client.MapleClient;
import client.MapleCharacter;
import community.MapleAlliance;
import community.MapleGuild;
import community.MapleGuildCharacter;
import community.MapleGuildContents;
import community.MapleParty;
import community.MaplePartyCharacter;
import community.MapleSquadLegacy;
import community.BuddyList;
import community.BuddyList.BuddyOperation;
import community.BuddylistEntry;
import constants.ServerConstants;
import constants.subclasses.PlayerData;
import constants.subclasses.ServerType;
import database.MYSQL;
import handler.MapleServerHandler;
import packet.creators.MainPacketCreator;
import packet.crypto.EncryptionFactory;
import packet.transfer.write.Packet;
import scripting.EventScriptManager;
import server.shops.HiredMerchant;
import tools.CollectionUtil;
import tools.Timer;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.LineNumberReader;
import java.net.InetSocketAddress;
import java.net.URL;
import java.rmi.registry.LocateRegistry;
import java.rmi.registry.Registry;
import java.sql.SQLException;
import java.util.*;
import java.util.concurrent.locks.Lock;
import java.util.concurrent.locks.ReentrantLock;
import javax.rmi.ssl.SslRMIClientSocketFactory;
import launch.helpers.ChracterTransfer;
import launch.helpers.ShutdownServer;
import launch.holder.MapleBuffValueHolder;
import launch.holder.MapleCoolDownValueHolder;
import launch.holder.MapleDiseaseValueHolder;
import launch.holder.MaplePlayerHolder;
import launch.holder.WideObjectHolder;
import launch.rmi.ChannelLoginInterface;
import launch.rmi.ChannelLoginInterfaceImpl;
import launch.rmi.LoginRegistry;
import launch.rmi.LoginRegistryImpl;
import org.apache.mina.core.buffer.IoBuffer;
import org.apache.mina.core.service.IoAcceptor;
import org.apache.mina.core.buffer.SimpleBufferAllocator;
import org.apache.mina.filter.codec.ProtocolCodecFilter;
import org.apache.mina.transport.socket.nio.NioSocketAcceptor;
import server.maps.MapleWorldMapProvider;
import server.maps.PotSystem;

public class ChannelServer {

    private int expRate, mesoRate, dropRate, flag;
    private short port = (short) ServerConstants.basePorts;
    private int channel, running_MerchantID = 0;
    private String serverMessage, ip, name, recommendedMessage, eventMessage;
    private boolean shutdown = false, finishedShutdown = false, MegaphoneMuteState = false;
    private static InetSocketAddress InetSocketadd;
    private MaplePlayerHolder players;
    private Properties props = new Properties();
    private IoAcceptor acceptor;
    private final MapleWorldMapProvider mapFactory = new MapleWorldMapProvider();
    private static final Map<Integer, ChannelServer> instances = new HashMap<Integer, ChannelServer>();
    private final Map<Integer, MapleGuildContents> gsStore = new HashMap<Integer, MapleGuildContents>();
    private final Map<String, MapleSquadLegacy> mapleSquads = new HashMap<String, MapleSquadLegacy>();
    private final Map<Integer, HiredMerchant> merchants = new HashMap<Integer, HiredMerchant>();
    private final Lock merchant_mutex = new ReentrantLock();
    private EventScriptManager eventManager;
    private boolean smegaMuted = false;
    public boolean isBurning = false;
    public byte burningType = 0;
    private int world;
    private ChannelLoginInterface cli;
    private static LoginRegistry loginRegistry;
    public boolean is얼리기 = false;
    private boolean isforce = true;
    private boolean isOp = false;
    
    public ChannelServer serverStart(int channelid) {
        this.channel = channelid;
        expRate = ServerConstants.defaultExpRate;
        mesoRate = ServerConstants.defaultMesoRate;
        dropRate = ServerConstants.defaultDropRate;
        serverMessage = ServerConstants.serverMessage;
        eventManager = new EventScriptManager(this, ServerConstants.events.split(" "));
        name = ServerConstants.serverName;
        recommendedMessage = ServerConstants.recommendMessage;
        eventMessage = ServerConstants.eventMessage;
        flag = ServerConstants.defaultFlag;

        port = (short) (ServerConstants.basePorts + getChannel());

        IoBuffer.setUseDirectBuffer(false);
        IoBuffer.setAllocator(new SimpleBufferAllocator());

        acceptor = new NioSocketAcceptor();    
        acceptor.getFilterChain().addLast("codec", new ProtocolCodecFilter(new EncryptionFactory()));
 
        players = new MaplePlayerHolder();
        mapFactory.setChannel(this.channel);

        try {
            InetSocketadd = new InetSocketAddress(port);
            acceptor.setHandler(new MapleServerHandler(ServerType.CHANNEL, channel));
            acceptor.bind(InetSocketadd);
            System.out.println("[System] 채널 " + (getChannel() == 0 ? 1 : getChannel() == 1 ? "20세이상" 
                    : getChannel()) + " 서버가 " + port + " 포트 개방.");
            eventManager.init();
        } catch (IOException e) {
            System.out.println("[System] 채널서버가 " + port + " 포트 개방 실패.");
            if (!ServerConstants.realese) {
                e.printStackTrace();
            }
        }
        Runtime.getRuntime().addShutdownHook(new Thread(new ShutDownListener()));
        return this;
    }

    public final void shutdown() {
        shutdown = true;
        System.out.println("[System] " + channel + " 채널 서버 종료");
        System.out.println("[System] " + channel + " 채널 서버 고용상점을 저장");
        closeAllMerchant();
        System.out.println("[System] " + channel + " 채널 서버  길드분재를 저장하는 중입니다.");
        PotSystem.SaveToDB();
        System.out.println("[System] " + channel + " 채널 서버에서 캐릭터를 저장하는중 입니다.");
        players.disconnectAll();
        finishedShutdown = true;
        cli = null;
    }

    public final void unbind() {
        acceptor.unbind(InetSocketadd);
    }

    public final boolean hasFinishedShutdown() {
        return finishedShutdown;
    }

    public final MapleWorldMapProvider getMapFactory(int world) {
        return mapFactory;
    }

    public final MapleWorldMapProvider getMapFactory() {
        return mapFactory;
    }

    public static ChannelServer getInstance(final int channel) {
        return instances.get(channel);
    }

    public final void addPlayer(final MapleCharacter chr) {
        players.registerPlayer(chr);
    }

    public final MaplePlayerHolder getPlayerStorage() {
        return players;
    }

    public final void removePlayer(final MapleCharacter chr) {
        if (chr != null) {
            players.deregisterPlayer(chr);
        }
    }

    public final String getServerMessage() {
        return serverMessage;
    }

    public final void setServerMessage(final String newMessage) {
        serverMessage = newMessage;
        broadcastPacket(MainPacketCreator.serverMessage(serverMessage));
    }

    public final void broadcastPacket(final Packet data) {
        players.broadcastPacket(data);
    }

    public final void broadcastSmegaPacket(final Packet data) {
        players.broadcastSmegaPacket(data);
    }

    public final void broadcastGMPacket(final Packet data) {
        players.broadcastGMPacket(data);
    }

    public final int getExpRate() {
        return expRate;
    }

    public final void setExpRate(final int expRate) {
        this.expRate = expRate;
    }

    public final int getChannel() {
        return channel;
    }

    public final void setChannel(final int channel) {
        if (instances.containsKey(channel)) {
            instances.remove(channel);
        }

        instances.put(channel, this);
        this.channel = channel;
        mapFactory.setChannel(channel);
    }

    public static final Collection<ChannelServer> getAllInstances() {
        return Collections.unmodifiableCollection(instances.values());
    }

    public final String getIP() {
        return ip;
    }

    public final String getProperty(final String name) {
        return props.getProperty(name);
    }

    public final boolean isShutdown() {
        return shutdown;
    }

    public final int getLoadedMaps(int world) {
        return getMapFactory(world).getLoadedMaps();
    }

    public final EventScriptManager getEventSM() {
        return eventManager;
    }

    public final void reloadEvents() {
        eventManager.cancel();
        eventManager = new EventScriptManager(this, ServerConstants.events.split(" "));
        eventManager.init();

    }

    public final int getMesoRate() {
        return mesoRate;
    }

    public final void setMesoRate(final byte mesoRate) {
        this.mesoRate = mesoRate;
    }

    public final int getDropRate() {
        return dropRate;
    }

    public final void setDropRate(final int dropRate) {
        this.dropRate = dropRate;
    }

    public final MapleGuild getGuild(final MapleGuildCharacter mgc) {
        final int gid = mgc.getGuildId();
        MapleGuild g = null;
        g = WideObjectHolder.getInstance().getGuild(gid);
        if (gsStore.get(gid) == null) {
            gsStore.put(gid, new MapleGuildContents(g));
        }
        return g;
    }

    public final MapleGuildContents getGuildSummary(final int gid) {
        if (gsStore.containsKey(gid)) {
            return gsStore.get(gid);
        }
        //this shouldn't happen much, if ever, but if we're caught
        //without the summary, we'll have to do a worldop
        final MapleGuild g = WideObjectHolder.getInstance().getGuild(gid);
        if (g != null) {
            gsStore.put(gid, new MapleGuildContents(g));
        }
        return gsStore.get(gid);	//if g is null, we will end up returning null
    }

    public final void updateGuildSummary(final int gid, final MapleGuildContents mgs) {
        gsStore.put(gid, mgs);
    }

    public static final void startServer() {
	try {
	    for (int i = 0; i <= ServerConstants.serverCount; i++) {
		instances.put(i, new ChannelServer().serverStart(i));
	    }
	} catch (Exception e) {
	    System.out.println("[System] 채널 서버 오픈이 실패했습니다.");
            if (!ServerConstants.realese) {
                e.printStackTrace();
            }
	}
    }

    public final List<HiredMerchant> searchMerchant(final int itemSearch) {
        final List<HiredMerchant> list = new LinkedList<HiredMerchant>();
        merchant_mutex.lock();
        try {
            final Iterator itr = merchants.values().iterator();

            while (itr.hasNext()) {
                HiredMerchant hm = (HiredMerchant) itr.next();
                if (hm.searchItem(itemSearch).size() > 0) {
                    list.add(hm);
                }
            }
        } finally {
            merchant_mutex.unlock();
        }
        return list;
    }

    private final class ShutDownListener implements Runnable {
        public void run() {
            shutdown = true;
            closeAllMerchant();
            players.disconnectAll();
            acceptor.unbind(InetSocketadd);
            finishedShutdown = true;
            cli = null;
        }
    }

    public final MapleSquadLegacy getMapleSquad(final String type) {
        return mapleSquads.get(type);
    }

    public final boolean addMapleSquad(final MapleSquadLegacy squad, final String type) {
        if (mapleSquads.get(type) == null) {
            mapleSquads.remove(type);
            mapleSquads.put(type, squad);
            return true;
        }
        return false;
    }

    public final boolean removeMapleSquad(final String type) {
        if (mapleSquads.containsKey(type)) {
            mapleSquads.remove(type);
            return true;
        }
        return false;
    }

    public final void saveAllMerchant() {
        final Iterator<HiredMerchant> merchants_ = merchants.values().iterator();
        while (merchants_.hasNext()) {
            HiredMerchant merch = merchants_.next();
            merch.saveItems(merch);
        }
    }

    public final void closeAllMerchant() {
        final Iterator<HiredMerchant> merchants_ = merchants.values().iterator();
        while (merchants_.hasNext()) {
            merchants_.next().closeShop(true, false);
            merchants_.remove();
        }
    }

    public final int addMerchant(final HiredMerchant hMerchant) {
        merchant_mutex.lock();

        int runningmer = 0;
        try {
            runningmer = running_MerchantID;
            merchants.put(running_MerchantID, hMerchant);
            running_MerchantID++;
        } finally {
            merchant_mutex.unlock();
        }
        return runningmer;
    }

    public final void removeMerchant(final HiredMerchant hMerchant) {
        merchant_mutex.lock();

        try {
            merchants.remove(hMerchant.getStoreId());
        } finally {
            merchant_mutex.unlock();
        }
    }

    public final boolean constainsMerchant(final int accid) {
        boolean contains = false;

        merchant_mutex.lock();
        try {
            final Iterator itr = merchants.values().iterator();

            while (itr.hasNext()) {
                if (((HiredMerchant) itr.next()).getOwnerAccId() == accid) {
                    contains = true;
                    break;
                }
            }
        } finally {
            merchant_mutex.unlock();
        }
        return contains;
    }

    public final int getMapMerchant(final int accid) {
        int map = -1;

        merchant_mutex.lock();
        try {
            final Iterator itr = merchants.values().iterator();

            while (itr.hasNext()) {
                HiredMerchant d = (HiredMerchant) itr.next();
                if ((d).getOwnerAccId() == accid) {
                    map = d.getMap().getId();
                    break;
                }
            }
        } finally {
            merchant_mutex.unlock();
        }
        return map;
    }

    public final void toggleMegaponeMuteState() {
        this.MegaphoneMuteState = !this.MegaphoneMuteState;
    }

    public final boolean getMegaphoneMuteState() {
        return MegaphoneMuteState;
    }

    public final List<MapleCharacter> getPartyMembers(final MapleParty party) {
        List<MapleCharacter> partym = new LinkedList<MapleCharacter>();
        for (final MaplePartyCharacter partychar : party.getMembers()) {
            if (partychar.getChannel() == getChannel()) { // Make sure the thing doesn't get duplicate plays due to ccing bug.
                MapleCharacter chr = getPlayerStorage().getCharacterByName(partychar.getName());
                if (chr != null) {
                    partym.add(chr);
                }
            }
        }
        return partym;
    }

    public void whisper(String sender, String target, int channel, String message) {

        if (isMyChannelConnected(target)) {
            getPlayerStorage().getCharacterByName(target).getClient().getSession().write(MainPacketCreator.getWhisper(sender, channel, message));
        }

    }

    public boolean isMyChannelConnected(String charName) {
        if (getPlayerStorage().getCharacterByName(charName) != null) {
            return true;
        }

        return false;
    }

    public boolean isMyChannelConnected(int id) {
        if (getPlayerStorage().getCharacterById(id) != null) {
            return true;
        }

        return false;
    }

    public boolean isMyChannelCharacterListConnected(List<String> charName) {
        for (final String c : charName) {
            if (getPlayerStorage().getCharacterByName(c) != null) {
                return true;
            }
        }
        return false;
    }

    public static boolean isCharacterListConnected(List<String> charName, boolean isLogin) {
        for (ChannelServer cserv : ChannelServer.getAllInstances()) {
            for (final String c : charName) {
                if (cserv.getPlayerStorage().getCharacterByName(c) != null) {
                    if (isLogin) {
                        //      cserv.getPlayerStorage().getCharacterByName(c).getClient().disconnect(true, false);
                    }
                    return true;
                }
            }
        }
        return false;
    }

    public static boolean isConnected(int cid) {
        for (ChannelServer cserv : ChannelServer.getAllInstances()) {
            if (cserv.getPlayerStorage().getCharacterById(cid) != null) return true;
        }
	return false;
    }

    public static void allToggleMegaphoneMuteState() {
        for (ChannelServer cserv : ChannelServer.getAllInstances()) {
            cserv.toggleMegaphoneMuteState();
        }
    }

    public void toggleMegaphoneMuteState() {
        smegaMuted = !smegaMuted;
    }

    public void shutdownLogin() {
        LoginServer.getInstance().shutdown();
    }

    public void updateBuddies(int characterId, int channel, int[] buddies, boolean offline) {
        final MaplePlayerHolder playerStorage = getPlayerStorage();
        for (int buddy : buddies) {
            final MapleCharacter chr = playerStorage.getCharacterById(buddy);
            if (chr != null) {
                final BuddylistEntry ble = chr.getBuddylist().get(characterId);
                if (ble != null && ble.isVisible()) {
                    int mcChannel;
                    if (offline) {
                        ble.setChannel(-1);
                        mcChannel = -1;
                    } else {
                        ble.setChannel(channel);
                        mcChannel = channel;
                    }
                    chr.getBuddylist().put(ble);
                    chr.getClient().getSession().write(MainPacketCreator.updateBuddyChannel(ble.getCharacterId(), mcChannel, ble.getName()));
                }
            }
        }
    }

    public void buddyChanged(int cid, int cidFrom, String name, int channel, BuddyOperation operation, int level, int job) {
        final MapleCharacter addChar = getPlayerStorage().getCharacterById(cid);
        if (addChar != null) {
            final BuddyList buddylist = addChar.getBuddylist();
            switch (operation) {
                case ADDED:
                    if (buddylist.contains(cidFrom)) {
                        buddylist.put(new BuddylistEntry(name, cidFrom, "그룹 미지정", channel, true, level, job));
                        addChar.getClient().getSession().write(MainPacketCreator.updateBuddyChannel(cidFrom, channel, name));
                    }
                    break;
                case DELETED:
                    if (buddylist.contains(cidFrom)) {
                        buddylist.put(new BuddylistEntry(name, cidFrom, "그룹 미지정", -1, buddylist.get(cidFrom).isVisible(), level, job));
                        addChar.getClient().getSession().write(MainPacketCreator.updateBuddyChannel(cidFrom, -1, name));
                    }
                    break;
            }
        }
    }

    public int[] multiBuddyFindMain(int charIdFrom, int[] characterIds) {
        List<Integer> ret = new ArrayList<Integer>(characterIds.length);
        final MaplePlayerHolder playerStorage = getPlayerStorage();
        for (int characterId : characterIds) {
            MapleCharacter chr = playerStorage.getCharacterById(characterId);
            if (chr != null) {
                if (chr.getBuddylist().containsVisible(charIdFrom)) {
                    ret.add(characterId);
                }
            }
        }
        int[] retArr = new int[ret.size()];
        int pos = 0;
        for (Integer i : ret) {
            retArr[pos++] = i.intValue();
        }
        return retArr;
    }

    public boolean isAvailable() {
        return true;
    }

    public static void sendPacket(List<Integer> targetIds, Packet packet, int exception) {
        MapleCharacter c;
        for (int i : targetIds) {
            if (i == exception) {
                continue;
            }
            for (ChannelServer cserv : ChannelServer.getAllInstances()) {
                c = cserv.getPlayerStorage().getCharacterById(i);
                if (c != null) {
                    c.getClient().getSession().write(packet);
                }
            }
        }
    }

    public static void setGuildAndRank(List<Integer> cids, int guildid, int rank, int exception) {
        for (int cid : cids) {
            if (cid != exception) {
                setGuildAndRank(cid, guildid, rank, -1);
            }
        }
    }

    public static void setGuildAndRank(int cid, int guildid, int rank, int alliancerank) {
        MapleCharacter mc = null;
        for (ChannelServer cserv : ChannelServer.getAllInstances()) {
            mc = cserv.getPlayerStorage().getCharacterById(cid);
            if (mc != null) {
                break;
            }
        }
        if (mc == null) {
            return;
        }
        boolean bDifferentGuild;
        if (guildid == -1 && rank == -1) { //just need a respawn
            bDifferentGuild = true;
        } else {
            bDifferentGuild = guildid != mc.getGuildId();
            mc.setGuildId(guildid);
            mc.setGuildRank(rank);
            mc.setAllianceRank(alliancerank);
            mc.saveGuildStatus();
        }
        if (bDifferentGuild) {
            mc.getMap().broadcastMessage(mc, MainPacketCreator.removePlayerFromMap(cid), false);
            mc.getMap().broadcastMessage(mc, MainPacketCreator.spawnPlayerMapobject(mc), false);
        }
        mc = null;
    }

    public static void setOfflineGuildStatus(int guildid, byte guildrank, int cid) {
        try {
            java.sql.Connection con = MYSQL.getConnection();
            java.sql.PreparedStatement ps = con.prepareStatement("UPDATE characters SET guildid = ?, guildrank = ? WHERE id = ?");
            ps.setInt(1, guildid);
            ps.setInt(2, guildrank);
            ps.setInt(3, cid);
            ps.execute();
            ps.close();
        } catch (SQLException se) {
            //Sytem.out.println("SQLException: " + se.getLocalizedMessage() + se);
        }
    }

    public static void changeEmblem(int gid, List<Integer> affectedPlayers, MapleGuildContents mgs) {
        for (ChannelServer cserv : ChannelServer.getAllInstances()) {
            cserv.updateGuildSummary(gid, mgs);
        }
        sendPacket(affectedPlayers, MainPacketCreator.guildEmblemChange(gid, mgs.getLogoBG(), mgs.getLogoBGColor(), mgs.getLogo(), mgs.getLogoColor()), -1);
        setGuildAndRank(affectedPlayers, -1, -1, -1);	//respawn player
    }

    public static void ChannelChange_Data(ChracterTransfer Data, int characterid, int toChannel) {
        if (toChannel != -10) {
            for (ChannelServer cserv : ChannelServer.getAllInstances()) {
                if (cserv.getChannel() == toChannel) {
                    ChannelServer.getInstance(toChannel).getPlayerStorage().registerPendingPlayer(Data, characterid);
                }
            }
        } else {
            CashShopServer.getInstance().ChannelChange_Data(Data, characterid);
        }
    }

    public static MapleGuild getGuild(int id) {
        return WideObjectHolder.getInstance().getGuild(id);
    }

    public static void setGuildMemberOnline(MapleGuildCharacter mgc, boolean bOnline, int channel) {
        WideObjectHolder.getInstance().setGuildMemberOnline(mgc, bOnline, channel);
    }

    public static int addGuildMember(MapleGuildCharacter mgc, MapleClient c) {
	return WideObjectHolder.getInstance().addGuildMember(mgc, c);
    }

    public static void guildChat(int gid, String name, int cid, String msg) {
        WideObjectHolder.getInstance().guildChat(gid, name, cid, msg);
    }

    public static void leaveGuild(MapleGuildCharacter mgc) {
        WideObjectHolder.getInstance().leaveGuild(mgc);
    }

    public static void changeRank(int gid, int cid, int newRank) {
        WideObjectHolder.getInstance().changeRank(gid, cid, newRank);
    }

    public static void expelMember(MapleGuildCharacter initiator, String name, int cid) {
        WideObjectHolder.getInstance().expelMember(initiator, name, cid);
    }

    public static void setGuildNotice(int gid, String notice) {
        WideObjectHolder.getInstance().setGuildNotice(gid, notice);
    }

    public static void setGuildLeader(int gid, int cid) {
        WideObjectHolder.getInstance().setGuildLeader(gid, cid);
    }

    public static int getSkillLevel(int gid, int sid) {
        return WideObjectHolder.getInstance().getSkillLevel(gid, sid);
    }

    public static boolean purchaseSkill(int gid, int sid, String name, int cid) {
        return WideObjectHolder.getInstance().purchaseSkill(gid, sid, name, cid);
    }

    public static boolean activateSkill(int gid, int sid, String name) {
        return WideObjectHolder.getInstance().activateSkill(gid, sid, name);
    }

    public static void memberLevelJobUpdate(MapleGuildCharacter mgc) {
        WideObjectHolder.getInstance().memberLevelJobUpdate(mgc);
    }

    public static void changeRankTitle(int gid, String[] ranks) {
        WideObjectHolder.getInstance().changeRankTitle(gid, ranks);
    }

    public static int createGuild(int leaderId, String name) {
        return WideObjectHolder.getInstance().createGuild(leaderId, name);
    }

    public static void setGuildEmblem(int gid, short bg, byte bgcolor, short logo, byte logocolor) {
        WideObjectHolder.getInstance().setGuildEmblem(gid, bg, bgcolor, logo, logocolor);
    }

    public static void disbandGuild(int gid) {
        WideObjectHolder.getInstance().disbandGuild(gid);
    }

    public static boolean increaseGuildCapacity(int gid) {
        return WideObjectHolder.getInstance().increaseGuildCapacity(gid);
    }

    public static void gainGP(int gid, int amount) {
        WideObjectHolder.getInstance().gainGP(gid, amount);
    }

    public static int getInvitedId(final int gid) {
        return WideObjectHolder.getInstance().getInvitedId(gid);
    }

    public static void setInvitedId(final int gid, final int inviteid) {
        WideObjectHolder.getInstance().setInvitedId(gid, inviteid);
    }

    public static int getGuildLeader(final int guildName) {
        return WideObjectHolder.getInstance().getGuildLeader(guildName);
    }

    public static int getGuildLeader(final String guildName) {
        return WideObjectHolder.getInstance().getGuildLeader(guildName);
    }

    public static MapleAlliance getAlliance(final int allianceid) {
        return WideObjectHolder.getInstance().getAlliance(allianceid);
    }

    public static int getAllianceLeader(final int allianceid) {
        return WideObjectHolder.getInstance().getAllianceLeader(allianceid);
    }

    public static void updateAllianceRanks(final int allianceid, final String[] ranks) {
        WideObjectHolder.getInstance().updateAllianceRanks(allianceid, ranks);
    }

    public static void updateAllianceNotice(final int allianceid, final String notice) {
        WideObjectHolder.getInstance().updateAllianceNotice(allianceid, notice);
    }

    public static boolean canInvite(final int allianceid) {
        return WideObjectHolder.getInstance().canInvite(allianceid);
    }

    public static boolean changeAllianceLeader(final int allianceid, final int cid) {
        return WideObjectHolder.getInstance().changeAllianceLeader(allianceid, cid);
    }

    public static boolean changeAllianceLeader(final int allianceid, final int cid, final boolean sameGuild) {
        return WideObjectHolder.getInstance().changeAllianceLeader(allianceid, cid, sameGuild);
    }

    public static boolean changeAllianceRank(final int allianceid, final int cid, final int change) {
        return WideObjectHolder.getInstance().changeAllianceRank(allianceid, cid, change);
    }

    public static boolean changeAllianceCapacity(final int allianceid) {
        return WideObjectHolder.getInstance().changeAllianceCapacity(allianceid);
    }

    public static boolean disbandAlliance(final int allianceid) {
        return WideObjectHolder.getInstance().disbandAlliance(allianceid);
    }

    public static boolean addGuildToAlliance(final int allianceid, final int gid) {
        return WideObjectHolder.getInstance().addGuildToAlliance(allianceid, gid);
    }

    public static boolean removeGuildFromAlliance(final int allianceid, final int gid, final boolean expelled) {
        return WideObjectHolder.getInstance().removeGuildFromAlliance(allianceid, gid, expelled);
    }

    public static void sendGuild(final int allianceid) {
        WideObjectHolder.getInstance().sendGuild(allianceid);
    }

    public static void sendGuild(final Packet packet, final int exceptionId, final int allianceid) {
        WideObjectHolder.getInstance().sendGuild(packet, exceptionId, allianceid);
    }

    public static boolean createAlliance(final String alliancename, final int cid, final int cid2, final int gid, final int gid2) {
        return WideObjectHolder.getInstance().createAlliance(alliancename, cid, cid2, gid, gid2);
    }

    public static void allianceChat(final int gid, final String name, final int cid, final String msg) {
        WideObjectHolder.getInstance().allianceChat(gid, name, cid, msg);
    }

    public static void setNewAlliance(final int gid, final int allianceid) {
        WideObjectHolder.getInstance().setNewAlliance(gid, allianceid);
    }

    public static void setOldAlliance(final int gid, final boolean expelled, final int allianceid) {
        WideObjectHolder.getInstance().setOldAlliance(gid, expelled, allianceid);
    }

    public static List<Packet> getAllianceInfo(final int allianceid, final boolean start) {
        return WideObjectHolder.getInstance().getAllianceInfo(allianceid, start);
    }

    public static void addBuffsToStorage(int playerId, List<MapleBuffValueHolder> toStore) {
        WideObjectHolder.getInstance().getPlayerBuffStorage().addBuffsToStorage(playerId, toStore);
    }

    public static List<MapleBuffValueHolder> getBuffsFromStorage(int playerId) {
        return WideObjectHolder.getInstance().getPlayerBuffStorage().getBuffsFromStorage(playerId);
    }

    public static void addCooldownsToStorage(int playerId, List<MapleCoolDownValueHolder> toStore) {
        WideObjectHolder.getInstance().getPlayerBuffStorage().addCooldownsToStorage(playerId, toStore);
    }

    public static List<MapleCoolDownValueHolder> getCooldownsFromStorage(int playerId) {
        return WideObjectHolder.getInstance().getPlayerBuffStorage().getCooldownsFromStorage(playerId);
    }

    public static void addDiseaseToStorage(int playerId, List<MapleDiseaseValueHolder> toStore) {
        WideObjectHolder.getInstance().getPlayerBuffStorage().addDiseaseToStorage(playerId, toStore);
    }

    public static List<MapleDiseaseValueHolder> getDiseaseFromStorage(int playerId) {
        return WideObjectHolder.getInstance().getPlayerBuffStorage().getDiseaseFromStorage(playerId);
    }

    public static void shutdown(int time) {
        System.out.println("[System] 로그인서버를 닫는중입니다.");
        LoginServer.getInstance().shutdown();
        for (ChannelServer cserv : ChannelServer.getAllInstances()) {
            Timer.WorldTimer.getInstance().schedule(new ShutdownServer(cserv.getChannel()), time);
        }
    }

    public int getChannelCount() {
        return ServerConstants.serverCount;
    }

    public String getServerName() {
        return name;
    }

    public String getRecommendedMessage() {
        return recommendedMessage;
    }

    public int getFlag() {
        return flag;
    }

    public String getEventMessage() {
        return this.eventMessage;
    }
    
    public boolean 얼리기() {
        return this.is얼리기;
    }
    
    public void 얼리기(boolean a) {
        this.is얼리기 = a;
    }
     public boolean isforce() {
        return isforce;
    }

    public void setforce(boolean a) {
        isforce = a;
    }
    
        public void setOpen(boolean a) {
        this.isOp = a;
    }
    
    public boolean getOpen() {
        return isOp;
    }

    public int getConnectedClients() {
        return getPlayerStorage().getConnectedClients();
    }
    
        public static Map<Integer, Integer> getChannelLoad() {
        Map<Integer, Integer> ret = new HashMap<Integer, Integer>();
        for (ChannelServer cs : instances.values()) {
            ret.put(cs.getChannel(), cs.getConnectedClients());
        }
        return ret;
    }
}
