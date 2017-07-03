/*
 * ArcStory Project
 * ÃÖÁÖ¿ø sch2307@naver.com
 * ÀÌÁØ junny_adm@naver.com
 * ¿ìÁöÈÆ raccoonfox69@gmail.com
 * °­Á¤±Ô ku3135@nate.com
 * ±èÁøÈ« designer@inerve.kr
 */

package provider.WzXML;

import provider.MapleDataEntity;
import provider.MapleDataFileEntry;

public class WZFileEntry extends WZEntry implements MapleDataFileEntry {

    private int offset;

    public WZFileEntry(String name, int size, int checksum, MapleDataEntity parent) {
	super(name, size, checksum, parent);
    }

    @Override
    public int getOffset() {
	return offset;
    }

    public void setOffset(int offset) {
	this.offset = offset;
    }
}
