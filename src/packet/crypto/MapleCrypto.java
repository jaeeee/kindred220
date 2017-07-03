/*
 * ArcStory Project
 * ÃÖÁÖ¿ø sch2307@naver.com
 * ÀÌÁØ junny_adm@naver.com
 * ¿ìÁöÈÆ raccoonfox69@gmail.com
 * °­Á¤±Ô ku3135@nate.com
 * ±èÁøÈ« designer@inerve.kr
 */

package packet.crypto;

import tools.HexTool;
public class MapleCrypto {

    private byte iv[];
    private short mapleVersion;
    
    public MapleCrypto(byte key[], byte iv[], short mapleVersion) {
	this.setIv(iv);
	this.mapleVersion = (short) (((mapleVersion >> 8) & 0xFF) | ((mapleVersion << 8) & 0xFF00));
    }
    
    private void setIv(byte[] iv) {
	this.iv = iv;
    }
    
    public byte[] getIv() {
	return this.iv;
    }
    
    private void updateIv() {
	this.iv = MapleCryptoLibrary.getNewIv(this.iv);
    }
    
    public byte[] getPacketHeader(int length) {
	int iiv = (iv[3]) & 0xFF;
	iiv |= (iv[2] << 8) & 0xFF00;

	iiv ^= mapleVersion;
	int mlength = ((length << 8) & 0xFF00) | (length >>> 8);
	int xoredIv = iiv ^ mlength;

	byte[] ret = new byte[4];
	ret[0] = (byte) ((iiv >>> 8) & 0xFF);
	ret[1] = (byte) (iiv & 0xFF);
	ret[2] = (byte) ((xoredIv >>> 8) & 0xFF);
	ret[3] = (byte) (xoredIv & 0xFF);
	return ret;
    }
    
    public boolean checkPacket(byte[] packet) {
	return ((((packet[0] ^ iv[2]) & 0xFF) == ((mapleVersion >> 8) & 0xFF)) && (((packet[1] ^ iv[3]) & 0xFF) == (mapleVersion & 0xFF)));
    }
    
    public boolean checkPacket(int packetHeader) {
	byte packetHeaderBuf[] = new byte[2];
	packetHeaderBuf[0] = (byte) ((packetHeader >> 24) & 0xFF);
	packetHeaderBuf[1] = (byte) ((packetHeader >> 16) & 0xFF);
	return checkPacket(packetHeaderBuf);
    }
    
    public byte[] encrypt(byte[] data) { 
        byte[] tempiv = this.iv; 
        updateIv(); 
        for (int i = 0; i<data.length;i++) { 
            int input = data[i] & 0xFF; 
            int crypted = (MapleCryptoLibrary.getIVKeys()[tempiv[0] & 0xFF] ^ (((0x10 * input | (input >> 4)) >> 1) & 0x55 | 2 * ((0x10 * input | (input >> 4)) & 0xD5))) & 0xFF; 
            data[i] = (byte) crypted; 
            MapleCryptoLibrary.shuffleIV((byte) input, tempiv); 
        }
        return data; 
    } 

    public byte[] decrypt(byte[] ddata) { 
         byte[] ivtemp = this.iv; 
         updateIv(); 
         for (int i=0;i<ddata.length;i++) { 
            int first = ((ddata[i] & 0xFF) ^ MapleCryptoLibrary.getIVKeys()[(ivtemp[0] & 0xFF)]) & 0xFF; 
            int second = (((first >> 1) & 0x55) | ((first & 0xD5) << 1)) & 0xFF; 
            int finals = ((second << 4) | (second >> 4)) & 0xFF; 
            ddata[i] = (byte) finals; 
            MapleCryptoLibrary.shuffleIV(ddata[i], ivtemp); 
         } 
         return ddata; 
    }  
    
    @Override
    public String toString() {
	return "IV: " + HexTool.toString(this.iv);
    }
    
}
