/*
 * ArcStory Project
 * ���ֿ� sch2307@naver.com
 * ���� junny_adm@naver.com
 * ������ raccoonfox69@gmail.com
 * ������ ku3135@nate.com
 * ����ȫ designer@inerve.kr
 */

package launch.helpers;

import java.io.Externalizable;
import java.io.IOException;
import java.io.ObjectInput;
import java.io.ObjectOutput;

public class MaplePlayerIdChannelPair implements Externalizable {

    private int charid = 0;
    private int channel = 1;

    /**
     * only for externalisation
     */
    public MaplePlayerIdChannelPair() {
    }

    public MaplePlayerIdChannelPair(int charid, int channel) {
	super();
	this.charid = charid;
	this.channel = channel;
    }

    public int getCharacterId() {
	return charid;
    }

    public int getChannel() {
	return channel;
    }

    @Override
    public void readExternal(ObjectInput in) throws IOException, ClassNotFoundException {
	charid = in.readInt();
	channel = in.readByte();
    }

    @Override
    public void writeExternal(ObjectOutput out) throws IOException {
	out.writeInt(charid);
	out.writeByte(channel);
    }
}
