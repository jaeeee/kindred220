/*
 * ArcStory Project
 * ���ֿ� sch2307@naver.com
 * ���� junny_adm@naver.com
 * ������ raccoonfox69@gmail.com
 * ������ ku3135@nate.com
 * ����ȫ designer@inerve.kr
 */

package server.movement;

import java.awt.Point;

public interface LifeMovement extends LifeMovementFragment {

    @Override
    Point getPosition();

    int getNewstate();

    int getDuration();

    int getType();
}
