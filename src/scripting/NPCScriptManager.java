/*
 * ArcStory Project
 * √÷¡÷ø¯ sch2307@naver.com
 * ¿Ã¡ÿ junny_adm@naver.com
 * øÏ¡ˆ»∆ raccoonfox69@gmail.com
 * ∞≠¡§±‘ ku3135@nate.com
 * ±Ë¡¯»´ designer@inerve.kr
 */

package scripting;

import client.MapleClient;
import server.quest.MapleQuest;
import java.util.Map;
import java.util.WeakHashMap;
import java.util.concurrent.locks.ReentrantLock;
import javax.script.Invocable;
import javax.script.ScriptEngine;
import tools.ScriptTool;

public class NPCScriptManager extends AbstractScriptManager {

	private final Map<MapleClient, NPCConversationManager> cms = new WeakHashMap<MapleClient, NPCConversationManager>();
	private final Map<MapleClient, Invocable> scripts = new WeakHashMap<MapleClient, Invocable>();
	private static final NPCScriptManager instance = new NPCScriptManager();
	private static ReentrantLock lock = new ReentrantLock();

	public static final NPCScriptManager getInstance() {
		return instance;
	}

	public final void start(final MapleClient c, final int npc) {
//		c.getPlayer().ea();
		start(c, npc, null);
		System.out.println(c.getPlayer().getName() + " just opened: " + npc);
	}

	public final void start(final MapleClient c, final int npc, final String script) {
		lock.lock();
		try {
			if (!(cms.containsKey(c) && scripts.containsKey(c))) {
				String scriptpath = null;
				Invocable iv;
				if (script == null) {
					// iv = getInvocable("npc/" + npc + ".js", c);
					scriptpath = ScriptTool.findScript(String.valueOf(npc), "npc");
					iv = getInvocable("npc/" + scriptpath, c);
				} else {
					scriptpath = ScriptTool.findScript(script, "item");
					iv = getInvocable("item/" + scriptpath, c);
				}
				if (iv == null && script != null) {
					scriptpath = ScriptTool.findScript(script, "npc");
					iv = getInvocable("npc/" + scriptpath, c);
				}
				if (iv == null) {
					iv = getInvocable("npc/npcAutoWriter.js", c);
				}
				final ScriptEngine scriptengine = (ScriptEngine) iv;
				final NPCConversationManager cm = new NPCConversationManager(c, npc, -1, (byte) -1);
				if (scriptpath != null)
					cm.setPath(scriptpath);
				cms.put(c, cm);
				scriptengine.put("cm", cm);

				c.getPlayer().setConversation(1);

				scripts.put(c, iv);

				try {
					iv.invokeFunction("start"); // Temporary until I've removed
												// all of start
				} catch (NoSuchMethodException nsme) {
					iv.invokeFunction("action", (byte) 1, (byte) 0, 0);
				}
			}
		} catch (final Exception e) {
			// if (!AboutMaple.realese) e.printStackTrace();
			if (script == null) {
				System.err.println("Error executing NPC script, NPC ID : " + npc + "." + e);
			} else {
				System.err.println("Error executing NPC script, NPC ID : " + npc + "." + e);
			}
			dispose(c);
		} finally {
			lock.unlock();
		}
	}

	public final void action(final MapleClient c, final byte mode, final byte type, final int selection) {
		if (mode != -1) {
			try {
				if (cms.get(c).pendingDisposal) {
					dispose(c);
				} else {
					scripts.get(c).invokeFunction("action", mode, type, selection);
				}
			} catch (final Exception e) {
				// e.printStackTrace();
				System.err
						.println("Error executing NPC script : " + ((NPCConversationManager) this.cms.get(c)).getNpc());
				dispose(c);
			}
		}
	}

	public final void startQuest(final MapleClient c, final int npc, final int quest) {
		if (!MapleQuest.getInstance(quest).canStart(c.getPlayer(), null)) {
			return;
		}
		lock.lock();
		try {
			if (!(cms.containsKey(c) && scripts.containsKey(c))) {
				final Invocable iv = getInvocable("quest/" + quest + ".js", c);
				final ScriptEngine scriptengine = (ScriptEngine) iv;
				if (iv == null) {
					if (MapleQuest.getInstance(quest).getMedalItem() > 0
							&& MapleQuest.getInstance(quest).getMedalItem() != 1142249) {
						c.getPlayer().gainMedalReward(MapleQuest.getInstance(quest).getMedalItem());
						MapleQuest.getInstance(quest).forceComplete(c.getPlayer(), quest);
						return;
					}
					return;
				}
				final NPCConversationManager cm = new NPCConversationManager(c, npc, quest, (byte) 0);
				cms.put(c, cm);
				scriptengine.put("qm", cm);

				c.getPlayer().setConversation(1);

				scripts.put(c, iv);

				iv.invokeFunction("start", (byte) 1, (byte) 0, 0); // start it
																	// off as
																	// something
			}
		} catch (final Exception e) {
			System.err.println("Error executing NPC script, NPC ID : " + npc + "." + e);
			dispose(c);
		} finally {
			lock.unlock();
		}
	}

	public final void startQuest(final MapleClient c, final byte mode, final byte type, final int selection) {
		try {
			if (cms.get(c).pendingDisposal) {
				dispose(c);
			} else {
				scripts.get(c).invokeFunction("start", mode, type, selection);
			}
		} catch (Exception e) {
			System.err.println("Error executing NPC script, NPC ID : " + "." + e);
			dispose(c);
		}
	}

	public final void endQuest(final MapleClient c, final int npc, final int quest, final boolean customEnd) {
		if (!customEnd && !MapleQuest.getInstance(quest).canComplete(c.getPlayer(), null)) {
			return;
		}
		lock.lock();
		try {
			if (!(cms.containsKey(c) && scripts.containsKey(c))) {
				final Invocable iv = getInvocable("quest/" + quest + ".js", c);
				final ScriptEngine scriptengine = (ScriptEngine) iv;
				if (iv == null) {
					dispose(c);
					return;
				}
				final NPCConversationManager cm = new NPCConversationManager(c, npc, quest, (byte) 1);
				cms.put(c, cm);
				scriptengine.put("qm", cm);

				c.getPlayer().setConversation(1);

				scripts.put(c, iv);

				iv.invokeFunction("end", (byte) 1, (byte) 0, 0); // start it off
																	// as
																	// something
			}
		} catch (Exception e) {
			// System.err.println("Error executing Quest script. (" + quest +
			// ")" + e);
			dispose(c);
		} finally {
			lock.unlock();
		}
	}

	public final void endQuest(final MapleClient c, final byte mode, final byte type, final int selection) {
		try {
			if (cms.get(c).pendingDisposal) {
				dispose(c);
			} else {
				scripts.get(c).invokeFunction("end", mode, type, selection);
			}
		} catch (Exception e) {
			// System.err.println("Error executing Quest script. (" +
			// c.getQM().getQuestId() + ")" + e);
			dispose(c);
		}
	}

	public final void dispose(final MapleClient c) {
		final NPCConversationManager npccm = cms.get(c);
		if (npccm != null) {
			cms.remove(npccm.getC());
			scripts.remove(npccm.getC());

			if (npccm.getType() == -1) {
				c.removeScriptEngine("Scripts/npc/" + npccm.getNpc() + ".js");
			} else {
				c.removeScriptEngine("Scripts/quest/" + npccm.getQuest() + ".js");
			}
		}
		if (c.getPlayer().getConversation() == 1) {
			c.getPlayer().setConversation(0);
		}
	}

	public final NPCConversationManager getCM(final MapleClient c) {
		return cms.get(c);
	}

	public final void clearScript() {
		cms.clear();
		scripts.clear();
	}
}
