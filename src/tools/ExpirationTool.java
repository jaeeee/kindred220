/*
 * ArcStory Project
 * ���ֿ� sch2307@naver.com
 * ���� junny_adm@naver.com
 * ������ raccoonfox69@gmail.com
 * ������ ku3135@nate.com
 * ����ȫ designer@inerve.kr
 */

package tools;

import java.util.Calendar;

public class ExpirationTool {
    private static Calendar cal = Calendar.getInstance();

    /**
     * ���� �ð��� <code>minute</code>�� ��ŭ�� �ð��� ���մϴ�.
     *
     * @param minute ���� ��
     * @return ������ �ð�
     */
    public static long getExpirationM(long minute) {
        return System.currentTimeMillis() + (minute * 60 * 1000);
    }

    /**
     * ���� �ð��� <code>hour</code>�ð� ��ŭ�� �ð��� ���մϴ�.
     *
     * @param hour ���� �ð�
     * @return ������ �ð�
     */
    public static long getExpirationH(long hour) {
        return getExpirationH(hour, false);
    }

    /**
     * ���� �ð��� <code>hour</code>�ð� ��ŭ�� �ð��� ���ϰ� <code>deafults</code>�� true�� ���
     * �� ������ �ð��� �ʱ�ȭ �մϴ�.
     * <br>
     * ���� ��� hour�� 2�� ���
     * �ʱ�ȭ �� : 2010/2/12 12:52:48
     * �ʱ�ȭ �� : 2010/2/12 14:00:00
     * </br>
     *
     * @param hour ���� �ð�
     * @param deafults �ʱ�ȭ ����
     * @return ������ �ð�
     */
    public static long getExpirationH(long hour, boolean deafults) {
        return deafults ? (System.currentTimeMillis() + hour * 60 * 60 * 1000) - (((60 * cal.get(Calendar.MINUTE)) + cal.get(Calendar.SECOND)) * 1000) : System.currentTimeMillis() + hour * 60 * 60 * 1000;
    }

    /**
     * ���� �ð��� <code>day</code>�� ��ŭ�� �ð��� ���մϴ�.
     *
     * @param day ���� ��
     * @return ������ �ð�
     */
    public static long getExpirationD(long day) {
        return getExpirationD(day, false);
    }


    /**
     * ���� �ð��� <code>day</code>�� ��ŭ�� �ð��� ���ϰ� <code>deafults</code>�� true�� ���
     * �� ������ �ð��� �ʱ�ȭ �մϴ�.
     * <br>
     * ���� ��� day�� 1�� ���
     * �ʱ�ȭ �� : 2010/2/12 12:52:48
     * �ʱ�ȭ �� : 2010/2/13 00:00:00
     * </br>
     *
     * @param hour ���� �ð�
     * @param deafults �ʱ�ȭ ����
     * @return ������ �ð�
     */
    public static long getExpirationD(long day, boolean deafults) {
        return deafults ? (System.currentTimeMillis() + day * 24 * 60 * 60 * 1000) - (((60 * 60 * cal.get(Calendar.HOUR_OF_DAY)) + (60 * cal.get(Calendar.MINUTE)) + (cal.get(Calendar.SECOND))) * 1000) : System.currentTimeMillis() + (day * (24 * 60 * 60 * 1000));
    }

    /**
     * ���� �ð��� <code>hour</code>�ð� <code>minute</code>�� ��ŭ�� �ð��� ���մϴ�.
     * ��, �ʱ�ȭ�� �� �� �����ϴ�.
     *
     * @param hour ���� �ð�
     * @param minute ���� ��
     * @return ������ �ð�
     * @see getExpirationH
     */
    public static long getExpirationHM(long hour, long minute) {
        return System.currentTimeMillis() + ((60 * hour + minute) * 60 * 1000);
    }

    /**
     * ���� �ð��� <code>day</code>�� <code>hour</code>�ð� ��ŭ�� �ð��� ���մϴ�.
     * ��, �ʱ�ȭ�� �� �� �����ϴ�.
     *
     * @param day ���� �ð�
     * @param hour ���� ��
     * @return ������ �ð�
     * @see getExpirationD
     */
    public static long getExpirationDH(long day, long hour) {
        return System.currentTimeMillis() + ((24 * 60 * day + 60 * hour) * 60 * 1000);
    }

    /**
     * ���� �ð��� <code>day</code>�� <code>hour</code>�ð� <code>minute</code>�� ��ŭ�� �ð��� ���մϴ�.
     * ��, �ʱ�ȭ�� �� �� �����ϴ�.
     * @param day ���� ��
     * @param hour ���� �ð�
     * @param minute ���� ��
     * @return ������ �ð�
     * @see getExpirationD
     */
    public static long getExpirationDHM(long day, long hour, long minute) {
        return System.currentTimeMillis() + ((24 * 60 * day + 60 * hour + minute) * 60 * 1000);
    }
}