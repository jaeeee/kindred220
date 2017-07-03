/*
 * ArcStory Project
 * 최주원 sch2307@naver.com
 * 이준 junny_adm@naver.com
 * 우지훈 raccoonfox69@gmail.com
 * 강정규 ku3135@nate.com
 * 김진홍 designer@inerve.kr
 */

package tools;

import java.io.*;
import java.util.*;

public class IniFileProcess {

    private Hashtable table;
    private IniFileProcess.InnerData inner;

    public IniFileProcess(File file) {
        this.table = new Hashtable();
        this.table.clear();
        try {
            String line, section;
            int index;
            //TODO : ini 한글깨짐 수정 - 최용재
            BufferedReader input = new BufferedReader(new InputStreamReader(new FileInputStream(file), "EUC-KR"));
            this.inner = new IniFileProcess.InnerData();
            while ((line = input.readLine()) != null) {
                line = line.trim();
                if (line.startsWith("[") && line.endsWith("]")) {
                    this.inner = new IniFileProcess.InnerData();
                    section = line.substring(1, line.length() - 1);
                    this.table.put(section, this.inner);
                } else if (line.startsWith(";")) {
                    // 주석
                } else {
                    index = line.indexOf('=');
                    if (index != -1) {
                        String attribute = line.substring(0, index);
                        attribute.trim();
                        String value = line.substring(index + 1, line.length());
                        value.trim();
                        this.inner.add(attribute, value);
                    }
                }
            }
            input.close();
        } catch (FileNotFoundException error) {
            error.printStackTrace();
        } catch (IOException error) {
            error.printStackTrace();
        }
    }

    public String getString(String section, String attribute) {
        IniFileProcess.InnerData inner = (IniFileProcess.InnerData) this.table.get(section.trim());
        if (inner != null) {
            attribute.trim();
            return inner.get(attribute);
        }
        return null;
    }

    private class InnerData {

        private Hashtable hashtable;

        public InnerData() {
            this.hashtable = new Hashtable();
        }

        public void add(String attribute, String value) {
            this.hashtable.put(attribute, value);
        }

        public String get(String attribute) {
            return (String) this.hashtable.get(attribute);
        }
    }
}
