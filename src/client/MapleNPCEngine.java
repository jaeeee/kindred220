/*
 * ArcStory Project
 * √÷¡÷ø¯ sch2307@naver.com
 * ¿Ã¡ÿ junny_adm@naver.com
 * øÏ¡ˆ»∆ raccoonfox69@gmail.com
 * ∞≠¡§±‘ ku3135@nate.com
 * ±Ë¡¯»´ designer@inerve.kr
 */

package client;

import java.util.Map;
import java.util.HashMap;

import packet.transfer.write.Packet;
import packet.opcode.SendPacketOpcode;
import packet.transfer.write.WritingPacket;

public class MapleNPCEngine {

    private short state;
    private byte senddialogue;
    private int npcid;
    private String text;
    private Boolean ready;
    private Map<Byte, String> previous = new HashMap<Byte, String>();
    private Map<Byte, String> pending = new HashMap<Byte, String>();

    protected MapleNPCEngine() {
	resetContents();
    }

    public void addText(String text) {
	this.text += text;
    }

    public void setNPC(final int npc) {
	npcid = npc;
    }

    public int getNPCVar() {
	return npcid;
    }

    public byte getSentDialogue() {
	return senddialogue;
    }

    public void resetContents() {
	npcid = 0;
	state = -1;
	senddialogue = -1;
	text = "";
	ready = false;
    }

    private Packet npcPacket(byte senddialogue) {
	this.senddialogue = senddialogue;

	WritingPacket mplew = new WritingPacket();
	mplew.writeShort(SendPacketOpcode.NPC_TALK.getValue());
	mplew.write(4);
	mplew.writeInt(npcid);
	mplew.write(senddialogue);
	mplew.writeMapleAsciiString(text);

	text = "";

	return mplew.getPacket();
    }

    public void proceedNext() {
	state++;
	waitClient();
	if (state < previous.size()) {
	    // sent here, just an example.
	    // I may not be using stateless NPC script since there is
	    // 500 scripts to convery x_X
	}
    }

    public void messageRecieved() {
	synchronized (ready) {
	    ready.notifyAll();
	}
    }

    private void waitClient() {
	synchronized (ready) {
	    while (!ready) {
		try {
		    ready.wait();
		} catch (InterruptedException e) {
		}
	    }
	    ready = false;
	}
    }
}