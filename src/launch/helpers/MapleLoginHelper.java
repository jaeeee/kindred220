/*
 * ArcStory Project
 * √÷¡÷ø¯ sch2307@naver.com
 * ¿Ã¡ÿ junny_adm@naver.com
 * øÏ¡ˆ»∆ raccoonfox69@gmail.com
 * ∞≠¡§±‘ ku3135@nate.com
 * ±Ë¡¯»´ designer@inerve.kr
 */

package launch.helpers;

import java.io.File;
import java.util.List;
import java.util.ArrayList;

import java.util.HashMap;
import java.util.Map;
import provider.MapleData;
import provider.MapleDataProvider;
import provider.MapleDataProviderFactory;
import provider.MapleDataTool;
import provider.WzXML.MapleDataType;
import tools.Triple;


public class MapleLoginHelper {

    private final static MapleLoginHelper instance = new MapleLoginHelper();
    protected final List<String> ForbiddenName = new ArrayList<String>();
    protected final List<Integer> makeCharInfo = new ArrayList<Integer>();
 //   protected final Map<Triple<Integer, Integer, Integer>, List<Integer>> makeCharInfo = new HashMap<Triple<Integer, Integer, Integer>, List<Integer>>();
    public static MapleLoginHelper getInstance() {
	return instance;
    }

    protected MapleLoginHelper() {
        final MapleDataProvider prov = MapleDataProviderFactory.getDataProvider(new File("wz/Etc.wz"));
        MapleData nameData = prov.getData("ForbiddenName.img");
	for (final MapleData data : nameData.getChildren()) {
	    ForbiddenName.add(MapleDataTool.getString(data));
	}
        final MapleData infoData = prov.getData("MakeCharInfo.img");
        final MapleData data = infoData.getChildByPath("Info");
        for (MapleData dat : infoData) {
            try {
                final int type = 0;
                for (MapleData d : dat) {
                    int val;
                    if (d.getName().endsWith("male") || d.getName().endsWith("male0")) {
                        val = 0;
                    } else if (d.getName().endsWith("female") || d.getName().endsWith("female0")) {
                        val = 1;
                    } else {
                        continue;
                    }
                    for (MapleData da : d) {
                        for (MapleData dd : da) {
                            if (dd.getType() != MapleDataType.STRING) {
                                if (MapleDataTool.getInt(dd, -1) > 1000000) {
                                    makeCharInfo.add(MapleDataTool.getInt(dd, -1));
                                }
                            }
                        }
                    }
                }
            } catch (NumberFormatException e) {
            }
        }
        
        final MapleData uA = infoData.getChildByPath("UltimateAdventurer");
        for (MapleData dat : uA) {
            for (MapleData d : dat) {
                makeCharInfo.add(MapleDataTool.getInt(d, -1));
            }
        }
    }

    public final boolean isForbiddenName(final String in) {
	for (final String name : ForbiddenName) {
	    if (in.contains(name)) {
		return true;
	    }
	}
	return false;
    }
    
    public final boolean isEligibleItem(final int item) {
        if (item < 0) {
            return false;
        }
        if (item == 0) {
            return true;
        }
        return makeCharInfo.contains(item);
    }
}