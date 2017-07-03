/*
 * ArcStory Project
 * 최주원 sch2307@naver.com
 * 이준 junny_adm@naver.com
 * 배지훈 raccoonfox69@gmail.com
 * 강정규 ku3135@nate.com
 * 김진홍 designer@inerve.kr
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
