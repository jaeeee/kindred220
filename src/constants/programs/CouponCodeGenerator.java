/*
 * ArcStory Project
 * ���ֿ� sch2307@naver.com
 * ���� junny_adm@naver.com
 * ������ raccoonfox69@gmail.com
 * ������ ku3135@nate.com
 * ����ȫ designer@inerve.kr
 */

package constants.programs;

import database.MYSQL;
import tools.RandomStream.Randomizer;
import java.io.Console;
import java.io.FileOutputStream;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;

public class CouponCodeGenerator {

    public static void main(String[] args) {
        Connection con = MYSQL.getConnection();
        Console c = System.console();

        String temp = "Maple";
        do {
            System.out.println("���� Ÿ�� : 1 - �ؽ� ĳ��, 2 - ������ ����Ʈ, 3 - �޼�");
            temp = c.readLine("���� Ÿ��? = ");
            if (!(temp.equals("1") || temp.equals("2") || temp.equals("3"))) continue;
        } while (hasNumberFormatException(temp));
        final int type = Integer.parseInt(temp);

        temp = "Maple";
        do {
            temp = c.readLine("�� ����? = ");
        } while (hasNumberFormatException(temp));
        final int amount = Integer.parseInt(temp);

        temp = "Maple";
        do {
            temp = c.readLine("���� ����? = ");
        } while (hasNumberFormatException(temp));
        final int howMany = Integer.parseInt(temp);

        temp = "Maple";
        do {
            temp = c.readLine("�ߺ� ���� Ƚ�� = ");
        } while (hasNumberFormatException(temp));
        final int canValid = Integer.parseInt(temp);

        final String format = String.format("%d�� Ÿ���� ĳ�ø� %d�� �����ϴ� %dȸ �ߺ� ������ ������ %d�� ����ϴ�. �½��ϱ�?", type, amount, canValid, howMany);
        if (!c.readLine(format + " (y/n) = ").equals("n")) {
            int number = howMany;
            PreparedStatement ps = null;
            while (number > 0) {
                String code = randCouponCode();
                try {
                    ps = con.prepareStatement("INSERT INTO nxcode (`code`, valid, `type`, `item`) VALUES (?, ?, ?, ?)");
                    ps.setString(1, code);
                    ps.setInt(2, canValid);
                    ps.setInt(3, type);
                    ps.setInt(4, amount);
                    ps.executeUpdate();
                    printCouponInfo(code, amount, type, canValid, null);
                    number--;
                    System.out.println(code);
                } catch (SQLException ex) {
                    System.err.println("[����] " + code + " : " + ex);
                    continue;
                }
            }
        } else main(args);
    }

    private static String randCouponCode() {
        final String part = "12345QWERTYUIOPASDFGHJKLZXCVBNM67890";
        StringBuilder sb = new StringBuilder();
        while (sb.length() < 30) {
            sb.append(Character.toString(part.charAt(Randomizer.nextInt(part.length()))));
        }
        return sb.toString();
    }

    public static String printCouponInfo(String code, int item, int type, int valid, String user) {
        try {
            StringBuilder sb = new StringBuilder();
            sb.append(code).append(" | ");
            sb.append(item).append(" ").append(type == 1 ? "�ؽ� ĳ��" : type == 2 ? "������ ����Ʈ" : "�޼�").append(" | ");
            sb.append(valid).append("ȸ ��� ����");
            sb.append("\r\n");
            FileOutputStream out = new FileOutputStream("���� �ڵ�.txt", true);
            out.write(sb.toString().getBytes());
            out.close();
            return sb.toString();
        } catch (Exception ex) {    }
        return "������ �������� ����";
    }

    private static boolean hasNumberFormatException(String str) {
        try {
            Integer.parseInt(str);
            return false;
        } catch (NumberFormatException nfe) {
            return true;
        }
    }
}
