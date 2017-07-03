/*
 * ArcStory Project
 * 최주원 sch2307@naver.com
 * 이준 junny_adm@naver.com
 * 우지훈 raccoonfox69@gmail.com
 * 강정규 ku3135@nate.com
 * 김진홍 designer@inerve.kr
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
