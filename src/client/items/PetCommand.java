/*
 * ArcStory Project
 * ���ֿ� sch2307@naver.com
 * ���� junny_adm@naver.com
 * ������ raccoonfox69@gmail.com
 * ������ ku3135@nate.com
 * ����ȫ designer@inerve.kr
 */

package client.items;

/**
 *
 * @author Danny (Leifde)
 */
public class PetCommand {
	private int petId;
	private int skillId;
	private int prob;
	private int inc;
	
	public PetCommand(int petId, int skillId, int prob, int inc) {
		this.petId = petId;
		this.skillId = skillId;
		this.prob = prob;
		this.inc = inc;
	}
	
	public int getPetId() {
		return petId;
	}
	
	public int getSkillId() {
		return skillId;
	}
	
	public int getProbability() {
		return prob;
	}
	
	public int getIncrease() {
		return inc;
	}
}
