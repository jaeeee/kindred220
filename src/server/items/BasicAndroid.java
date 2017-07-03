/*
 * ArcStory Project
 * 최주원 sch2307@naver.com
 * 이준 junny_adm@naver.com
 * 우지훈 raccoonfox69@gmail.com
 * 강정규 ku3135@nate.com
 * 김진홍 designer@inerve.kr
 */

package server.items;

import java.util.List;

/**
 *
 * @author 에반테이르
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
