/*
 * ArcStory Project
 * ���ֿ� sch2307@naver.com
 * ���� junny_adm@naver.com
 * ������ raccoonfox69@gmail.com
 * ������ ku3135@nate.com
 * ����ȫ designer@inerve.kr
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