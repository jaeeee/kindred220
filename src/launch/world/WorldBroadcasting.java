/*
 * ArcStory Project
 * ���ֿ� sch2307@naver.com
 * ���� junny_adm@naver.com
 * ������ raccoonfox69@gmail.com
 * ������ ku3135@nate.com
 * ����ȫ designer@inerve.kr
 */

package launch.world;

import launch.ChannelServer;
import packet.transfer.write.Packet;

/** ��� ä�ο� ��Ŷ�� ����ϴ� ��� ����.
 *
 * 
 * @author Ƽ��
 *
 * since 2012. 2. 24
     * 
     * @since Revision 25
 */
public class WorldBroadcasting {
    
    /** ��� ä�ο� ����Ʈ ������ ��Ŷ�� ������.
     * 
     * @param <byte[]> ����Ʈ�迭
     * 
     * @since Revision 25
     */
    public static void broadcastMessage(byte[] data) {
        broadcast(data);
    }
    /** ��� ä�ο� ��������Ŷ ������ ��Ŷ�� ������.
     * 
     * @param <Packet> ��������Ŷ
     * 
     * @since Revision 25
     */
    public static void broadcastMessage(Packet data) {
        broadcast(data);
    }
    /** ��� ä�ο� ��������Ŷ ������ ��Ŷ�� ������.
     * 
     * @param <Packet> ��������Ŷ
     * 
     * @since Revision 25
     */
    public static void broadcast(Packet data) {
        for (ChannelServer cserv : ChannelServer.getAllInstances()) {
            cserv.broadcastPacket(data);
        }
    }
    /** ��� ä�ο� ����Ʈ ������ ��Ŷ�� ������.
     * 
     * @param <byte[]> ����Ʈ�迭
     * 
     * @since Revision 25
     */
    public static void broadcast(byte[] data) {
        for (ChannelServer cserv : ChannelServer.getAllInstances()) {
            cserv.broadcastPacket(new Packet(data));
        }
    }
    /** ��� ä�ο� Ȯ���⸦ �����ϴ� ������ �� �� �ִ� ��Ŷ�� ������.
     * 
     * @param <byte[]> ����Ʈ�迭
     * 
     * @since Revision 25
     */
    public static void broadcastSmega(byte[] data) {
        for (ChannelServer cserv : ChannelServer.getAllInstances()) {
            cserv.broadcastSmegaPacket(new Packet(data));
        }
    }
    /** ��� ä�ο� GM�� ���� �� �ִ� ��Ŷ�� ������.
     * 
     * @param <byte[]> ����Ʈ�迭
     * 
     * @since Revision 25
     */
    public static void broadcastGM(byte[] data) {
        for (ChannelServer cserv : ChannelServer.getAllInstances()) {
            cserv.broadcastGMPacket(new Packet(data));
        }
    }
    
    
    /** ��� ä�ο� ģ�� �α׿��� ��Ŷ�� ������.
     * 
     * @param <String> ������Ʈĳ���� 
     * @param <int> ������Ʈĳ��ID 
     * @param <int> ä�� 
     * @param <int[]> ��Ŷ���۴��ģ��ID���
     * 
     * @since Revision 25
     */
    public static void loggedOff(String name, int characterId, int channel, int[] buddies) {
        for (ChannelServer cserv : ChannelServer.getAllInstances())
            cserv.updateBuddies(characterId, channel, buddies, true);
    }
    
    /** ��� ä�ο� ģ�� �α׿� ��Ŷ�� ������.
     * 
     * @param <String> ������Ʈĳ���� 
     * @param <int> ������Ʈĳ��ID 
     * @param <int> ä�� 
     * @param <int[]> ��Ŷ���۴��ģ��ID���
     * 
     * @since Revision 25
     */
    public static void loggedOn(String name, int characterId, int channel, int buddies[]) {
        for (ChannelServer cserv : ChannelServer.getAllInstances())
            cserv.updateBuddies(characterId, channel, buddies, false);
    }

    public static class broadcastMessage {

        public broadcastMessage() {
        }
    }
}
