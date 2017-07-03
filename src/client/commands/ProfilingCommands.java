/*
 * ArcStory Project
 * ���ֿ� sch2307@naver.com
 * ���� junny_adm@naver.com
 * ������ raccoonfox69@gmail.com
 * ������ ku3135@nate.com
 * ����ȫ designer@inerve.kr
 */

package client.commands;

import java.io.File;
import java.io.FileWriter;
import java.io.IOException;

import client.MapleClient;
import tools.CPUSampler;

public class ProfilingCommands implements Command {

    @Override
    public CommandDefinition[] getDefinition() {
	return new CommandDefinition[]{
		    new CommandDefinition("���ý���", "", "�������Ϸ��� CPU ���ø� �����մϴ�.", 6),
		    new CommandDefinition("��������", "<�����̸�>", "�������Ϸ��� CPU ���ø� �����ϰ� �ش� �����̸����� ����� �����մϴ�.", 6)
	};
    }

    @Override
    public void execute(MapleClient c, String[] splitted) {

	if (splitted[0].equals("!���ý���")) {
	    CPUSampler sampler = CPUSampler.getInstance();
	    sampler.addIncluded("Maplenewhandler");
            sampler.addIncluded("anticheat");
            sampler.addIncluded("client");
            sampler.addIncluded("commands");
            sampler.addIncluded("community");
            sampler.addIncluded("constants");
            sampler.addIncluded("database");
            sampler.addIncluded("handler");
            sampler.addIncluded("launch");
            sampler.addIncluded("packet");
            sampler.addIncluded("provier");
            sampler.addIncluded("scripting");
            sampler.addIncluded("server");
            sampler.addIncluded("tools");
	    sampler.start();

	} else if (splitted[0].equals("!��������")) {
	    CPUSampler sampler = CPUSampler.getInstance();
	    try {
		String filename = "odinprofile.txt";
		if (splitted.length > 1) {
		    filename = splitted[1];
		}
		File file = new File(filename);
		if (file.exists()) {
		    c.getPlayer().dropMessage(6, "�Է��� ������ �̹� �����մϴ�. �ٸ� �̸��� ����� �ּ���.");
		    return;
		}
		sampler.stop();
		FileWriter fw = new FileWriter(file);
		sampler.save(fw, 1, 10);
		fw.close();
	    } catch (IOException e) {
		System.err.println("Error saving profile" + e);
	    }
	    sampler.reset();
	}
    }
}
