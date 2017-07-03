/*
 * ArcStory Project
 * 최주원 sch2307@naver.com
 * 이준 junny_adm@naver.com
 * 우지훈 raccoonfox69@gmail.com
 * 강정규 ku3135@nate.com
 * 김진홍 designer@inerve.kr
 */

package tools;

import java.util.ArrayList;
import java.util.List;

/**
 * Provides utilities for manipulating collections of objects.
 * 
 * @author Frz
 * @version 1.0
 * @since Revision 701
 */
public class CollectionUtil {

    /**
     * Static class dummy constructor
     */
    private CollectionUtil() {
	// mhwaha
	// -Insert evil laugh here-
    }

    /**
     * Copies <code>count</code> items off of list, starting from the beginning.
     * @param <T> The type of the list.
     * @param list The list to copy from.
     * @param count The number of items to copy.
     * @return The copied list.
     */
    public static <T> List<T> copyFirst(List<T> list, int count) {
	List<T> ret = new ArrayList<T>(list.size() < count ? list.size() : count);
	int i = 0;
	for (T elem : list) {
	    ret.add(elem);
	    if (i++ > count) {
		break;
	    }
	}
	return ret;
    }
}
