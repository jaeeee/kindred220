/*
 * ArcStory Project
 * ���ֿ� sch2307@naver.com
 * ���� junny_adm@naver.com
 * ������ raccoonfox69@gmail.com
 * ������ ku3135@nate.com
 * ����ȫ designer@inerve.kr
 */

package provider;

/**
 *
 * @author Matze
 */
public interface MapleDataEntry extends MapleDataEntity {
	public String getName();
	public int getSize();
	public int getChecksum();
	public int getOffset();
}
