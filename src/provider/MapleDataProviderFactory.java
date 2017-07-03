/*
 * ArcStory Project
 * 최주원 sch2307@naver.com
 * 이준 junny_adm@naver.com
 * 우지훈 raccoonfox69@gmail.com
 * 강정규 ku3135@nate.com
 * 김진홍 designer@inerve.kr
 */

package provider;

import java.io.File;
import provider.WzXML.XMLWZFile;

public class MapleDataProviderFactory {

    private final static String wzPath = "wz/";

    private static MapleDataProvider getWZ(Object in, boolean provideImages) {
	if (in instanceof File) {
	    File fileIn = (File) in;

	    return new XMLWZFile(fileIn);
	}
	throw new IllegalArgumentException("Can't create data provider for input " + in);
    }

    public static MapleDataProvider getDataProvider(Object in) {
	return getWZ(in, false);
    }

    public static MapleDataProvider getImageProvidingDataProvider(Object in) {
	return getWZ(in, true);
    }

    public static File fileInWZPath(String filename) {
	return new File(wzPath, filename);
    }
}
