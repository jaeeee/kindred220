/*
 * ArcStory Project
 * ���ֿ� sch2307@naver.com
 * ���� junny_adm@naver.com
 * ������ raccoonfox69@gmail.com
 * ������ ku3135@nate.com
 * ����ȫ designer@inerve.kr
 */

package server.items;

import java.util.List;

/**
 *
 * @author �������̸�
 */
public class BasicAndroid {
    private List<Integer> hairs;
    private List<Integer> faces;
    private int gender;
    
    public BasicAndroid (List<Integer> h, List<Integer> f, int g) {
        this.hairs = h;
        this.faces = f;
        this.gender = g;
    }
    
    public int getRandomHair() {
        return hairs.get((int) Math.floor(Math.random() * hairs.size()));
    }
    
    public int getRandomFace() {
        return faces.get((int) Math.floor(Math.random() * faces.size()));
    }
    
    public int getGender() {
        return gender;
    }
}
