/*
 * ArcStory Project
 * ���ֿ� sch2307@naver.com
 * ���� junny_adm@naver.com
 * ������ raccoonfox69@gmail.com
 * ������ ku3135@nate.com
 * ����ȫ designer@inerve.kr
 */

package server.items;

import tools.RandomStream.Randomizer;
import java.util.List;
import java.util.ArrayList;
import java.util.Collections;

import constants.GameConstants;

public class RandomRewards {

    private final static RandomRewards instance = new RandomRewards();
    private List<Integer> compiledGold = null;
    private List<Integer> compiledSilver = null;
    private List<Integer> compiledFishing = null;

    public static RandomRewards getInstance() {
	return instance;
    }

    protected RandomRewards() {
	System.out.println("[�˸�] ���� ������ ������ �޸𸮷� �о���̴� ���Դϴ�.");
	// Gold Box
	List<Integer> returnArray = new ArrayList<Integer>();

	processRewards(returnArray, GameConstants.goldrewards);

	compiledGold = returnArray;

	// Silver Box
	returnArray = new ArrayList<Integer>();

	processRewards(returnArray, GameConstants.silverrewards);

	compiledSilver = returnArray;

	// Fishing Rewards
	returnArray = new ArrayList<Integer>();

	processRewards(returnArray, GameConstants.fishingReward);

	compiledFishing = returnArray;
    }

    private final void processRewards(final List<Integer> returnArray, final int[] list) {
	int lastitem = 0;
	for (int i = 0; i < list.length; i++) {
	    if (i % 2 == 0) { // Even
		lastitem = list[i];
	    } else { // Odd
		for (int j = 0; j < list[i]; j++) {
		    returnArray.add(lastitem);
		}
	    }
	}
	Collections.shuffle(returnArray);
    }

    public final int getGoldBoxReward() {
	return compiledGold.get(Randomizer.nextInt(compiledGold.size()));
    }

    public final int getSilverBoxReward() {
	return compiledSilver.get(Randomizer.nextInt(compiledSilver.size()));
    }

    public final int getFishingReward() {
	return compiledFishing.get(Randomizer.nextInt(compiledFishing.size()));
    }
}
