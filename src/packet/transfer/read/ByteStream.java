/*
 * ArcStory Project
 * ���ֿ� sch2307@naver.com
 * ���� junny_adm@naver.com
 * ������ raccoonfox69@gmail.com
 * ������ ku3135@nate.com
 * ����ȫ designer@inerve.kr
 */

package packet.transfer.read;

import tools.HexTool;
import java.io.IOException;
public class ByteStream {

    private int pos = 0;
    private long bytesRead = 0;
    private byte[] arr;

    public ByteStream(byte[] arr) {
	this.arr = arr;
    }
    public long getPosition() {
	return pos;
    }
    public void seek(long offset) throws IOException {
	pos = (int) offset;
    }
    public long getBytesRead() {
	return bytesRead;
    }
    public int readByte() {
	bytesRead++;
	return ((int) arr[pos++]) & 0xFF;
    }
    public String toString() {
	String nows = "";
	if (arr.length - pos > 0) {
	    byte[] now = new byte[arr.length - pos];
	    System.arraycopy(arr, pos, now, 0, arr.length - pos);
	    nows = HexTool.toString(now);
	}
	return "���ú� ������ : " + nows;
    }
    
    public String toString(final boolean b) {
        String nows = "";
        if (arr.length - pos > 0) {
            byte[] now = new byte[arr.length - pos];
            System.arraycopy(arr, pos, now, 0, arr.length - pos);
            nows = HexTool.toString(now);
        }
            return "All: " + HexTool.toString(arr) + "\nNow: " + nows;
    }
    public long available() {
	return arr.length - pos;
    }
}
