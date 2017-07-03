/*
 * ArcStory Project
 * ÃÖÁÖ¿ø sch2307@naver.com
 * ÀÌÁØ junny_adm@naver.com
 * ¿ìÁöÈÆ raccoonfox69@gmail.com
 * °­Á¤±Ô ku3135@nate.com
 * ±èÁøÈ« designer@inerve.kr
 */

package launch.holder;

import client.stats.DiseaseStats;

public class MapleDiseaseValueHolder {

    public int diseaseid;
    public long startTime;
    public long length;
    public DiseaseStats disease;

    public MapleDiseaseValueHolder(final DiseaseStats disease, final long startTime, final long length) {
	this.disease = disease;
	this.startTime = startTime;
	this.length = length;
    }
}