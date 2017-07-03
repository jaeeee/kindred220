/*
 * ArcStory Project
 * 최주원 sch2307@naver.com
 * 이준 junny_adm@naver.com
 * 우지훈 raccoonfox69@gmail.com
 * 강정규 ku3135@nate.com
 * 김진홍 designer@inerve.kr
 */

package provider;

import java.util.List;

import provider.WzXML.MapleDataType;

public interface MapleData extends MapleDataEntity, Iterable<MapleData> {
	public String getName();
	public MapleDataType getType();
	public List<MapleData> getChildren();
	public MapleData getChildByPath(String path);
	public Object getData();
}
