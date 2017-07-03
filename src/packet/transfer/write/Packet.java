/*
 * ArcStory Project
 * ���ֿ� sch2307@naver.com
 * ���� junny_adm@naver.com
 * ������ raccoonfox69@gmail.com
 * ������ ku3135@nate.com
 * ����ȫ designer@inerve.kr
 */

package packet.transfer.write;

import tools.HexTool;

public class Packet {

    private byte[] data;
    private Runnable onSend;

    public Packet(final byte[] data) {
        this.data = data;
    }

    public final byte[] getBytes() {
        //System.out.println("S : "+toString());
        return data;
    }

    public final Runnable getOnSend() {
        return onSend;
    }

    public void setOnSend(final Runnable onSend) {
        this.onSend = onSend;
    }

    @Override
    public String toString() {
        return HexTool.toString(data);
    }
}
