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

/**
 *
 * @author Matze
 */
public interface MapleDataDirectoryEntry extends MapleDataEntry {
	public List<MapleDataDirectoryEntry> getSubdirectories();
	public List<MapleDataFileEntry> getFiles();
	public MapleDataEntry getEntry(String name);
}
