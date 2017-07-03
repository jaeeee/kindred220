/*
 * ArcStory Project
 * ���ֿ� sch2307@naver.com
 * ���� junny_adm@naver.com
 * ������ raccoonfox69@gmail.com
 * ������ ku3135@nate.com
 * ����ȫ designer@inerve.kr
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
