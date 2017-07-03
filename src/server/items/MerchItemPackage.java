/*
 * ArcStory Project
 * ÃÖÁÖ¿ø sch2307@naver.com
 * ÀÌÁØ junny_adm@naver.com
 * ¿ìÁöÈÆ raccoonfox69@gmail.com
 * °­Á¤±Ô ku3135@nate.com
 * ±èÁøÈ« designer@inerve.kr
 */

package server.items;

import client.items.IItem;
import java.util.ArrayList;
import java.util.List;

public class MerchItemPackage {

    private long sentTime;
    private int mesos = 0, packageid;
    private List<IItem> items = new ArrayList<IItem>();

    public void setItems(List<IItem> items) {
	this.items = items;
    }

    public List<IItem> getItems() {
        return items;
    }

    public void setSentTime(long sentTime) {
	this.sentTime = sentTime;
    }

    public long getSentTime() {
	return sentTime;
    }

    public int getMesos() {
        return mesos;
    }

    public void setMesos(int set) {
        mesos = set;
    }

    public int getPackageid() {
        return packageid;
    }

    public void setPackageid(int packageid) {
        this.packageid = packageid;
    }
}
