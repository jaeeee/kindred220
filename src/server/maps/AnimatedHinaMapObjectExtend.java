/*
 * ArcStory Project
 * ���ֿ� sch2307@naver.com
 * ���� junny_adm@naver.com
 * ������ raccoonfox69@gmail.com
 * ������ ku3135@nate.com
 * ����ȫ designer@inerve.kr
 */

package server.maps;

public abstract class AnimatedHinaMapObjectExtend extends AbstractHinaMapObject implements AnimatedHinaMapObject {
    private int stance;

    @Override
    public int getStance() {
	return stance;
    }

    @Override
    public void setStance(int stance) {
	this.stance = stance;
    }

    @Override
    public boolean isFacingLeft() {
	return getStance() % 2 == 1;
    }

    public int getFacingDirection() {
	return getStance() % 2;
    }
}
