/*
 * ArcStory Project
 * ���ֿ� sch2307@naver.com
 * ���� junny_adm@naver.com
 * ������ raccoonfox69@gmail.com
 * ������ ku3135@nate.com
 * ����ȫ designer@inerve.kr
 */

package database;

public class MYSQLException extends RuntimeException {

    public MYSQLException(String msg) {
	super(msg);
    }

    public MYSQLException(String message, Throwable cause) {
	super(message, cause);
    }
}
