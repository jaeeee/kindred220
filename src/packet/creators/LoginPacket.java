/*
 * ArcStory Project
 * ���ֿ� sch2307@naver.com
 * ���� junny_adm@naver.com
 * ������ raccoonfox69@gmail.com
 * ������ ku3135@nate.com
 * ����ȫ designer@inerve.kr
 */

package packet.creators;

import java.util.List;
import java.util.Map;
import java.util.Set;

import client.MapleClient;
import client.MapleCharacter;
import packet.transfer.write.Packet;
import packet.opcode.SendPacketOpcode;
import constants.ServerConstants;
import constants.GameConstants;
import java.rmi.RemoteException;
import java.util.LinkedList;
import launch.ChannelServer;
import launch.LoginServer;
import launch.rmi.LoginRegistryImpl;
import packet.transfer.write.WritingPacket;
import tools.HexTool;
import tools.Pair;
import tools.RandomStream.Randomizer;

public class LoginPacket {

    public static final Packet initializeConnection(final short mapleVersion, final byte[] sendIv, final byte[] recvIv, final boolean ingame) {
	final WritingPacket w = new WritingPacket();
        int ret = 0; 
        byte[] bytes = HexTool.getByteArrayFromHexString("0A 00 00 10 40 00 00 00 40 00 00 10 80 00 00 00 40 00 00 10 C0 00 00 00 40 00 00 10 00 01 00 00 40 00 00 10 40 01 C0 5F 06 00 3A 70 46 01 0F 6C 00 00 D8 DC 46 01 85 7D 00 00 62 5A 47 01 03 41 00 00 BF 9B 47 01 41 DC 1F 00 60 D1 70 01 F0 B8 0F 00");
        ret ^= (mapleVersion & 0x7FFF); 
        ret ^= (ServerConstants.check << 15); 
        ret ^= ((ServerConstants.subVersion & 0xFF) << 16); 
        String version = String.valueOf(ret);
        int packetsize = 0;
        if(ingame) {
            packetsize = 13 + bytes.length + version.length();
        } else {
            packetsize = 14 + version.length(); //1.2.220+
        }
	w.writeShort(packetsize);
        w.writeShort(291); //KMS Static
        w.writeMapleAsciiString(version);
	w.write(recvIv);
	w.write(sendIv);
	w.write(1);
        if(ingame) {
            w.write(bytes);
        } else {
            w.write(0); //1.2.220+
        }
	return w.getPacket();
    }

    public static final Packet getPing() {
	final WritingPacket w = new WritingPacket();
	w.writeShort(SendPacketOpcode.PING.getValue());
	return w.getPacket();
    }

    /*
         * �α��� �޼��� �ڵ�
         * 
         * 0 : ����
         * 3 : �������ų� ���� ������ ���̵� �Դϴ�.
         * 4 : ��й�ȣ�� ��ġ���� �ʽ��ϴ�.
         * 5 : ��ϵ��� ���� ���̵� �Դϴ�.
         * 6 : �ý��� ������ ������ �� �����ϴ�.
         * 7 : ���� �������� ���̵� �Դϴ�.
         * 8 : �ý��� ������ ������ �� �����ϴ�.
         * 9 : �ý��� ������ ������ �� �����ϴ�.
         * 10 : ���� ������ ���ӿ�û�� ���� ó������ ���߽��ϴ�.
         * 11 : 20�� �̻� ������ �� �ֽ��ϴ�. �ٸ� ������ ������ �ּ���.
         * 17 : U-OTP ��ȣ�� �Է����ּ���.
         * 18 : OTP ��ȣ�� Ʋ���ϴ�.
     */
    public static final Packet getLoginFailed(final int reason) {
	final WritingPacket w = new WritingPacket(16);
	w.writeShort(SendPacketOpcode.LOGIN_STATUS.getValue());
	w.writeInt(reason);
	w.writeShort(0);
        
	return w.getPacket();
    }

    public static final Packet getPermBan(final byte reason) {
	final WritingPacket w = new WritingPacket(16);

	w.writeShort(SendPacketOpcode.LOGIN_STATUS.getValue());
	w.writeShort(2); // Account is banned
	w.write(0);
	w.write(reason);
	w.write(HexTool.getByteArrayFromHexString("01 01 01 01 00"));

	return w.getPacket();
    }

    public static final Packet getTempBan(final long timestampTill, final byte reason) {
	final WritingPacket w = new WritingPacket(17);

	w.writeShort(SendPacketOpcode.LOGIN_STATUS.getValue());
	w.write(2);
	w.write(HexTool.getByteArrayFromHexString("00 00 00 00 00"));
	w.write(reason);
	w.writeLong(timestampTill); // Tempban date is handled as a 64-bit long, number of 100NS intervals since 1/1/1601. Lulz.

	return w.getPacket();
    }
    
    public static final Packet getAuthSuccessRequest(final MapleClient client) {
        final WritingPacket w = new WritingPacket();
        w.writeShort(SendPacketOpcode.LOGIN_STATUS.getValue());
        w.write(0);
        w.writeInt(client.getAccID());
        w.write(client.getGender());
        w.write(client.isGm() ? 1 : 0); // Admin byte
        w.write0(23);
        w.writeMapleAsciiString(client.getAccountName());
        w.write0(3);
        w.write(1);
        w.write(14); //1.2.220+
        for (int i = 0; i < 17; i++) { //Character Open Packet
            w.write(1);
            w.writeShort(1);
        }
        w.write0(5); //1.2.220+ ��Ÿ�÷��� ���� ��Ŷ ����.
        
        return w.getPacket();
    }
    
    public static final Packet deleteCharResponse(final int cid, final int state) {
	final WritingPacket w = new WritingPacket();

	w.writeShort(SendPacketOpcode.DELETE_CHAR_RESPONSE.getValue());
	w.writeInt(cid);
	w.write(state);

	return w.getPacket();
    }

    public static final Packet secondPwError(final byte mode) {
	final WritingPacket w = new WritingPacket(3);

	/*	 
	 * 14 - Invalid password
	 * 15 - Second password is incorrect
	 */
	w.writeShort(SendPacketOpcode.SECONDPW_ERROR.getValue());
	w.write(mode);

	return w.getPacket();
    }

    public static final Packet getServerList(final int serverId, final Map<Integer, Integer> channelLoad) {
	final WritingPacket w = new WritingPacket();
	w.writeShort(SendPacketOpcode.SERVERLIST.getValue());
	w.write(serverId);
	w.writeMapleAsciiString(LoginServer.getInstance().getServerName());
	w.write(LoginServer.getInstance().getFlag());
        String msg = "";
        if (GameConstants.isServerReady()) { 
            /* ������ �����Ͱ� ������ �ε��Ǿ��� ��� */
            msg = LoginServer.getInstance().getEventMessage();
        } else { 
            /* ������ �����Ͱ� ������ �ε����� �ʾ��� ��� */
            msg = "������ �غ���� �ʾҽ��ϴ�.\r\n\r\n�ʿ��� �����͸� ��� \r\n�ҷ��� �� ���� ��ø� \r\n��ٷ� �ֽñ� �ٶ��ϴ�.";
        }
	w.writeMapleAsciiString(msg);
        w.write(0x64);
	w.write(0);
	w.write(0x64);
	w.write(0);

	int lastChannel = ServerConstants.serverCount;
	Set<Integer> channels = channelLoad.keySet();
	for (int i = 30; i > 0; i--) {
	    if (channels.contains(i)) {
		lastChannel = i;
		break;
	    }
	}
	w.write(lastChannel);

	int load;
	for (int i = 0; i < lastChannel; i++) {
	    if (channels.contains(i)) {
		load = (ChannelServer.getInstance(i).getPlayerStorage().getConnectedClients());
	    } else {
		load = 50;
	    }
	    w.writeMapleAsciiString(LoginServer.getInstance().getServerName() + "-" + (i == 1 ? i : (i == 2 ? ("20���̻�") : (i))));
	    w.writeInt(load == 0 ? 1 : load >= 50 ? 50 : load);
	    w.write(serverId);
	    w.writeShort(i);
	}
	w.write0(11); //1.2.220+ ��Ÿ�÷��� ���� ��Ŷ ����.
        
	return w.getPacket();
    }
    
    public static Packet getLastWorld() {
        WritingPacket w = new WritingPacket();
        w.writeShort(SendPacketOpcode.LAST_WORLD.getValue());
        w.writeInt(0);
        
        return w.getPacket();
    }
    
    public static Packet recommendWorld(boolean RMI) throws RemoteException {
        WritingPacket w = new WritingPacket();
        w.writeShort(SendPacketOpcode.RECOMMEND_WORLD.getValue());
        w.write(1);
        w.writeInt(0);
        w.writeMapleAsciiString(ServerConstants.recommendMessage);
        
        return w.getPacket();
    }
    
    public static Packet getSecondPasswordConfirm(boolean success) {
        WritingPacket w = new WritingPacket();
        w.writeShort(SendPacketOpcode.AUTH_STATUS_WITH_SPW.getValue());
        w.write(success ? 0 : 0x14);
        w.write(1);
        w.write(14);
        for (int i = 0; i < 17; i++) { //Character Open Packet
            w.write(1);
            w.writeShort(1);
        }
        return w.getPacket();
    }
    
    public static Packet getSecondPasswordResult(boolean success) {
        WritingPacket w = new WritingPacket();
        w.writeShort(SendPacketOpcode.AUTH_STATUS_WITH_SPW_RESULT.getValue());
        w.write(success ? 0 : 0x14);
        return w.getPacket();
    }
    
    public static Packet getSecondPasswordCheck(boolean enable, boolean picwrong, boolean success) {
        WritingPacket w = new WritingPacket();
        w.writeShort(SendPacketOpcode.SECONDPW_RESULT.getValue());
        w.write(enable ? 1 : 0);
        w.write(success ? 0 : picwrong ? 0x14 : 0x10);
        
        return w.getPacket();
    }

    public static final Packet getEndOfServerList() {
	final WritingPacket w = new WritingPacket();

	w.writeShort(SendPacketOpcode.SERVERLIST.getValue());
	w.writeShort(0xFF);

	return w.getPacket();
    }

    /*	 
     * 0 - Normal
     * 1 - Highly populated
     * 2 - Full
     */
    public static final Packet getServerStatus(final int status) {
	final WritingPacket w = new WritingPacket();

	w.writeShort(SendPacketOpcode.SERVERSTATUS.getValue());
	w.writeShort(status);

	return w.getPacket();
    }

    public static final Packet charlist(MapleClient c, final boolean secondpw, final List<MapleCharacter> chars) {
	final WritingPacket w = new WritingPacket();
	w.writeShort(SendPacketOpcode.CHARLIST.getValue());
	w.write0(5); //1.2.220+
        w.writeLong(PacketProvider.getKoreanTimestamp(System.currentTimeMillis())); //1.2.220+
        w.write(chars.size()); /* 1 */
        for (final MapleCharacter chr : chars) {
            addPlayerEntry(w, chr);
            w.writeShort(0);
        }
        w.write(secondpw ? 1 : 2);
        w.write(1);
        w.writeInt(c.getChrSlot());
        w.writeInt(0);
        w.writeInt(0xFF);
        w.writeLong(PacketProvider.getKoreanTimestamp(System.currentTimeMillis()));
        w.write(0);
        
        return w.getPacket();
    }

    public static final Packet addNewCharacterEntry(final MapleCharacter chr, final boolean worked) {
	final WritingPacket w = new WritingPacket();
	w.writeShort(SendPacketOpcode.ADD_NEW_CHAR_ENTRY.getValue());
	w.write(worked ? 0 : 1);
	addPlayerEntry(w, chr);

	return w.getPacket();
    }


    public static final Packet charNameResponse(final String charname, final boolean nameUsed) {
	final WritingPacket w = new WritingPacket();

	w.writeShort(SendPacketOpcode.CHAR_NAME_RESPONSE.getValue());
	w.writeMapleAsciiString(charname);
	w.write(nameUsed ? 1 : 0);

	return w.getPacket();
    }

    private static final void addPlayerEntry(final WritingPacket w, final MapleCharacter chr) {
	PacketProvider.addPlayerStats(w, chr, false);
	PacketProvider.addPlayerLooks(w, chr, true);
        if (GameConstants.isZero(chr.getJob())) {
            PacketProvider.addPlayerLooksZero(w, chr, true);
        } 
    }     
}