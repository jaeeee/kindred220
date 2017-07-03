/*
 * ArcStory Project
 * ÃÖÁÖ¿ø sch2307@naver.com
 * ÀÌÁØ junny_adm@naver.com
 * ¿ìÁöÈÆ raccoonfox69@gmail.com
 * °­Á¤±Ô ku3135@nate.com
 * ±èÁøÈ« designer@inerve.kr
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
