/*
 * ArcStory Project
 * 최주원 sch2307@naver.com
 * 이준 junny_adm@naver.com
 * 우지훈 raccoonfox69@gmail.com
 * 강정규 ku3135@nate.com
 * 김진홍 designer@inerve.kr
 */

package server.maps;

import java.awt.Point;

import client.MapleClient;

public interface MaplePortal {
	public static final int MAP_PORTAL = 2;
	public static final int DOOR_PORTAL = 6;
	
	int getType();
	int getId();
	Point getPosition();
	String getName();
	String getTarget();
	String getScriptName();
	void setScriptName(String newName);
	int getTargetMapId();
	void enterPortal(MapleClient c);
}