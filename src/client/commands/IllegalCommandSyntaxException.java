/*
 * ArcStory Project
 * ���ֿ� sch2307@naver.com
 * ���� junny_adm@naver.com
 * ������ raccoonfox69@gmail.com
 * ������ ku3135@nate.com
 * ����ȫ designer@inerve.kr
 */

package client.commands;

public class IllegalCommandSyntaxException extends Exception {


    public IllegalCommandSyntaxException() {
	super();
    }

    public IllegalCommandSyntaxException(String message) {
	super(message);
    }

    public IllegalCommandSyntaxException(int expectedArguments) {
	super("Expected at least " + expectedArguments + " arguments");
    }
}
