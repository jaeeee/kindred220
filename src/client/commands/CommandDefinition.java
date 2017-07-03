/*
 * ArcStory Project
 * 최주원 sch2307@naver.com
 * 이준 junny_adm@naver.com
 * 배지훈 raccoonfox69@gmail.com
 * 강정규 ku3135@nate.com
 * 김진홍 designer@inerve.kr
 */

package client.commands;

public class CommandDefinition {
    private String command;
    private String parameterDescription;
    private String help;
    private int requiredLevel; // gm level

    public CommandDefinition(String command, String parameterDescription, String help, int requiredLevel) {
	this.command = command;
	this.help = help;
	this.parameterDescription = parameterDescription;
	this.requiredLevel = requiredLevel;
    }

    public String getCommand() {
	return command;
    }

    public String getHelp() {
	return help;
    }

    public String getParameterDescription() {
	return parameterDescription;
    }

    public int getRequiredLevel() {
	return requiredLevel;
    }
}