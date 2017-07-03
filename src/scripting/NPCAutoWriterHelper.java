/*
 * ArcStory Project
 * ���ֿ� sch2307@naver.com
 * ���� junny_adm@naver.com
 * ������ raccoonfox69@gmail.com
 * ������ ku3135@nate.com
 * ����ȫ designer@inerve.kr
 */

package scripting;

import constants.ServerConstants;
import client.MapleClient;
import provider.MapleData;
import provider.MapleDataProviderFactory;
import provider.MapleDataTool;
import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.nio.charset.Charset;

/**
 *
 * @author Ƽ��
 *
 * since 2012. 2. 19
 */
public class NPCAutoWriterHelper {
    
    private int npcID;
    private MapleClient ha;
    private FileOutputStream out = null;
    public NPCAutoWriterHelper(int id, MapleClient ha) {
        this.npcID = id;
        this.ha = ha;
    }
    
    public final boolean checkFileExist() {
        try {
            if (new File("Scripts/npc/"+npcID+".js").exists()) { // �̹� ��ũ��Ʈ�� �����ϴ� ���
                return true;
            }
        } catch (Exception e) {
            if (!ServerConstants.realese) e.printStackTrace();
        }
        return false;
    }
    
    public static final String getNPCName(int id) {
                return MapleDataTool.getString(id+"/name", MapleDataProviderFactory.getDataProvider(new File("wz/String.wz")).getData("Npc.img"), "MISSINGNO");
    }
    
    public static final String getNPCFunc(int id) {
                return MapleDataTool.getString(id+"/func", MapleDataProviderFactory.getDataProvider(new File("wz/String.wz")).getData("Npc.img"), "MISSINGNO");
    }
    
    public final String getNpcName() {
        return MapleDataTool.getString(npcID+"/name", MapleDataProviderFactory.getDataProvider(new File("wz/String.wz")).getData("Npc.img"), "MISSINGNO");
    }
    
    public final String getNpcFunc() {
                return MapleDataTool.getString(npcID+"/func", MapleDataProviderFactory.getDataProvider(new File("wz/String.wz")).getData("Npc.img"), "MISSINGNO");
    }
    
    public final String addInfo(int id) {
        String a = "#d";
        a += "���ǽ� �̸� : "+getNPCName(id);
        a += "\r\n#r";
        if (!"MISSINGNO".equals(getNPCFunc(id))) {
            a += "���ǽ� ���� : "+getNPCFunc(id)+"\r\n";
        }
        a += "\r\n#k";
        for (MapleData d : MapleDataProviderFactory.getDataProvider(new File("wz/String.wz")).getData("Npc.img").getChildByPath(id+"").getChildren()) {
            if (!d.getName().equals("name") && !d.getName().equals("func"))
                a += d.getName() + " : " + (String) d.getData()+"\r\n";
        }
        return a;
    }
    
    
    public final void doMain() {
        try {
            if (checkFileExist()) { // �̹� ��ũ��Ʈ�� �����ϴ� ���
                return;
            }
            out = new FileOutputStream("Scripts/npc/"+npcID+".js");
        } catch (FileNotFoundException fe) {
            dropMessage("������ �ۼ��ϴµ� �����߽��ϴ�. �������α׷��� ���� ���� ������ �ִ��� Ȯ���� �ּ���.");
            if (!ServerConstants.realese) fe.printStackTrace();
        } catch (NullPointerException ne) {
            dropMessage("������ �ۼ��ϴµ� �����߽��ϴ�. �� ������ ������ �߻��߽��ϴ�.");
            if (!ServerConstants.realese) ne.printStackTrace();
        } catch (Exception e) {
            if (!ServerConstants.realese) e.printStackTrace();
        }
    }
    
    public final void dropMessage(String text) {
        ha.getPlayer().dropMessage(1, text);
    }
    
    public final void writeLine(String text) {
        if (out != null) {
            try {
                out.write(text.getBytes(Charset.forName("euc-kr")));
            } catch (Exception e) {
                if (!ServerConstants.realese) e.printStackTrace();
            }
        }
    }
    
    public final void newLine() {
        if (out != null) {
            try {
                out.write(System.getProperty("line.separator").getBytes());
            } catch (Exception e) {
                if (!ServerConstants.realese) e.printStackTrace();
            }
        }
    }
    
    public final void closeFile() {
        try {
            out.close();
        } catch (Exception e) {
                if (!ServerConstants.realese) e.printStackTrace();
        }
    }
    
}
