/*
 * ArcStory Project
 * ���ֿ� sch2307@naver.com
 * ���� junny_adm@naver.com
 * ������ raccoonfox69@gmail.com
 * ������ ku3135@nate.com
 * ����ȫ designer@inerve.kr
 */

package client;

import java.util.HashMap;
import java.util.Map;

/**
 *
 * @author 4����
 */
public class MapleSaveItemPot { // �Ʒ��� ������ �����ϸ� ��� ������ �����
        protected Map <Integer, MapleItempot> imphold = new HashMap<Integer, MapleItempot>();
      
        public void putImp(MapleItempot imp) { // ���������� �ش罽�Կ� �߰�
            imphold.put(imp.getSlot(), imp);
        }
        
        public MapleItempot getImpInSlot(int slot) { // Ư�����Կ� ���������� �ҷ���
            return imphold.get(slot);
        }
        
        public void removeImpInSlot(int slot) { // ���������� �ش罽�Կ��� ����
            imphold.remove(slot);
        }
}
