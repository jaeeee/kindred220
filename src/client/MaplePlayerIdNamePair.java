/*
 * ArcStory Project
 * ���ֿ� sch2307@naver.com
 * ���� junny_adm@naver.com
 * ������ raccoonfox69@gmail.com
 * ������ ku3135@nate.com
 * ����ȫ designer@inerve.kr
 */

package client;

public class MaplePlayerIdNamePair {

    private int id, level, job;
    private String name;

    public MaplePlayerIdNamePair(int id, String name, int level, int job) {
        super();
        this.id = id;
        this.name = name;
	this.level = level;
	this.job = job;
    }
    

    public int getId() {
        return id;
    }

    public String getName() {
        return name;
    }

	public int getLevel() {
		return level;
	}

	public int getJob() {
		return job;
	}
}
