/*
 * ArcStory Project
 * ���ֿ� sch2307@naver.com
 * ���� junny_adm@naver.com
 * ������ raccoonfox69@gmail.com
 * ������ ku3135@nate.com
 * ����ȫ designer@inerve.kr
 */

package tools.RandomStream;

import constants.GameConstants;
import client.MapleCharacter;
import java.util.Random;

public class Randomizer {

    private static Random rand = new Random();

    public static int nextInt() {
	return rand.nextInt();
    }
    
    public static int nextByte() {
	return rand.nextInt();
    }

    public static int nextInt(int arg0) {
	return rand.nextInt(arg0);
    }

    public static void nextBytes(byte[] bytes) {
	rand.nextBytes(bytes);
    }

    public static boolean nextBoolean() {
	return rand.nextBoolean();
    }

    public static double nextDouble() {
	return rand.nextDouble();
    }

    public static float nextFloat() {
	return rand.nextFloat();
    }

    public static long nextLong() {
	return rand.nextLong();
    }

    public static int rand(int lbound, int ubound) {
	return (int) ((rand.nextDouble() * (ubound - lbound + 1)) + lbound);
    }
    
    public static int ScrollRand(int min, int max) {
        int a = 0;
        do {
            a = nextInt(max + 1);
        } while (a >= min);
        return a;
    }
    
    public static boolean isSuccess(int rate) {
        return rate > nextInt(100);
    }
    
    public static boolean isSuccess(int rate, MapleCharacter chr) {
        double rates = (double) rate;
        if (GameConstants.getTraitLevel(chr.getStat().getDiligence()) >= 5) {
            rates += Math.floor(GameConstants.getTraitLevel(chr.getStat().getDiligence()) / 5) * 0.5D;
        }
        return rates > ((double) nextInt(100));
    }
    
    public static boolean isSuccess(int rate, int max) {
        return rate > nextInt(max);
    }
}