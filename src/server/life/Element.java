/*
 * ArcStory Project
 * 최주원 sch2307@naver.com
 * 이준 junny_adm@naver.com
 * 우지훈 raccoonfox69@gmail.com
 * 강정규 ku3135@nate.com
 * 김진홍 designer@inerve.kr
 */

package server.life;

public enum Element {
    NEUTRAL, PHYSICAL, FIRE, ICE, LIGHTING, POISON, HOLY, DARKNESS;

    public static Element getFromChar(char c) {
	switch (Character.toUpperCase(c)) {
	    case 'F':
		return FIRE;
	    case 'I':
		return ICE;
	    case 'L':
		return LIGHTING;
	    case 'S':
		return POISON;
	    case 'H':
		return HOLY;
	    case 'P':
		return PHYSICAL;
	    case 'D': // Added on v.92 MSEA
		return DARKNESS;
	}
	throw new IllegalArgumentException("unknown elemnt char " + c);
    }
}