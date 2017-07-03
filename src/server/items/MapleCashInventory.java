/*
 * ArcStory Project
 * ���ֿ� sch2307@naver.com
 * ���� junny_adm@naver.com
 * ������ raccoonfox69@gmail.com
 * ������ ku3135@nate.com
 * ����ȫ designer@inerve.kr
 */

package server.items;

import client.MapleClient;
import client.items.IItem;
import client.items.Item;
import client.items.ItemFactory;
import constants.GameConstants;
import java.util.ArrayList;
import java.util.List;
import packet.creators.CashPacket;

/**
 *
 * @author T-Sun
 * 
 *   This file was written by T-Sun (doomgate17@naver.com)
 *
 *
 *
 */
public class MapleCashInventory {
    private List<IItem> inventory = new ArrayList<IItem>();
    private int accid;
    public MapleCashInventory(int accid) {
        this.accid = accid;
    }
    
    public List<IItem> getInventory() {
        return inventory;
    }
    
    public int getAccId() {
        return accid;
    }
    
    public void addItem(IItem item) {
        inventory.add(item);
    }
    
    public IItem findByCashId(int id) {
        for (IItem item : inventory) {
            if (item.getUniqueId() == id) {
                return item;
            }
        }
        return null;
    }
    
    public void removeItemByCashId(int id) {
        int index = -1;
        for (IItem item : inventory) {
            index++;
            if (item.getUniqueId() == id) {
                break;
            }
        }
        if (index!=-1) {
            inventory.remove(index);
        } else {
            System.err.println("[����] ĳ�þ������� �߰����� ���� �������� ���߽��ϴ�.");
        }
    }
    
    public void loadFromDB() {
        ItemFactory.loadItemsFromCashShopInventory(this);
    }
    
    public void saveToDB() {
        ItemFactory.saveItemsFromCashShop(this);
    }
    
    public void removeFromInventory(IItem item) {
        inventory.remove(item);
    }
    
    public void checkExpire(MapleClient c) {
        List<IItem> toberemove = new ArrayList<IItem>();
        for (IItem item : inventory) {
            if (item != null && !GameConstants.isPet(item.getItemId()) && item.getExpiration() > 0 && item.getExpiration() < System.currentTimeMillis()) {
                toberemove.add(item);
            }
        }
        if (toberemove.size() > 0) {
            for (IItem item : toberemove) {
                removeFromInventory(item);
                c.getSession().write(CashPacket.itemExpired(item.getUniqueId()));
            }
            toberemove.clear();
        }
    }
}