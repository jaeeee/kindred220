/*
 * ArcStory Project
 * ���ֿ� sch2307@naver.com
 * ���� junny_adm@naver.com
 * ������ raccoonfox69@gmail.com
 * ������ ku3135@nate.com
 * ����ȫ designer@inerve.kr
 */

package handler.channel;


import client.MapleClient;
import client.MapleCharacter;
import community.*;
import java.util.HashSet;
import launch.ChannelServer;
import launch.holder.WideObjectHolder;
import launch.world.WorldCommunity;
import packet.creators.MainPacketCreator;
import packet.transfer.read.ReadingMaple;



public class PartyHandler {
    public static void DenyPartyRequest(final ReadingMaple rh, final MapleClient c) {
	final int action = rh.readByte();
	final int partyid = rh.readInt();
	if (c.getPlayer().getParty() == null) {
			MapleParty party = WideObjectHolder.getInstance().getParty(partyid);
			if (party != null) {
				if (action == 0x26) { //Accept 1.2.220+ (+1)
			    		if (party.getMembers().size() < 6) {
						WorldCommunity.updateParty(partyid, MaplePartyOperation.JOIN, new MaplePartyCharacter(c.getPlayer()));
						c.getPlayer().receivePartyMemberHP();
						c.getPlayer().updatePartyMemberHP();
				    	} else {
						c.getSession().write(MainPacketCreator.serverNotice(5, "�ش� ��Ƽ�� �̹� ��Ƽ���� �� á���ϴ�."));
			    		}
				} else if (action == 0x25) { //1.2.220+ (+1)
					final MapleCharacter cfrom = c.getChannelServer().getPlayerStorage().getCharacterById(party.getLeader().getId());
					if (cfrom != null) {
					    cfrom.getClient().getSession().write(MainPacketCreator.serverNotice(5, c.getPlayer().getName()+" ���� ��Ƽ �ʴ븦 �����Ͽ����ϴ�."));
					}
				}
			} else {
			    c.getPlayer().dropMessage(5, "�̹� ��Ƽ�� �������� �ʽ��ϴ�.");
			}
	} else {
	    c.getPlayer().dropMessage(5, "�̹� ��Ƽ�� ���ԵǾ� �־� ��Ƽ�� ������ �� �����ϴ�.");
	}
    }

    public static final void PartyOperatopn(final ReadingMaple rh, final MapleClient c) {
	final int operation = rh.readByte();
        MapleParty party = c.getPlayer().getParty();
	MaplePartyCharacter partyplayer = new MaplePartyCharacter(c.getPlayer());
        if (operation != 1 && operation != 4 && operation != 6 && operation != 7) {
            party.setVisible(rh.readByte());
        }
	switch (operation) {
	    case 1: // create
		if (c.getPlayer().getParty() == null) {
                    party = WorldCommunity.createParty(partyplayer);
                    c.getPlayer().setParty(party);
                    party.setVisible(rh.readByte());
                    party.setPartyTitle(rh.readMapleAsciiString());
		    c.getSession().write(MainPacketCreator.partyCreated(party));
		} else {
		    c.getPlayer().dropMessage(5, "��Ƽ�� �̹� ���ԵǾ� �־� ��Ƽ�� ���� �� �����ϴ�.");
                    return;
		}
		break;
	    case 2: // leave
		if (party != null) { //are we in a party? o.O"
			if (partyplayer.equals(party.getLeader())) {
                             if (party.getExpedition() == null) { // disband
                                WorldCommunity.updateParty(party.getId(), MaplePartyOperation.DISBAND, partyplayer);
                            } else {
                                if (party.getExpedition().getLeader() == partyplayer.getId()) {
                                    WideObjectHolder.getInstance().disbandExpedition(party.getExpedition(), partyplayer);
                                } else {
                                    WideObjectHolder.getInstance().leftExpedition(party.getExpedition(), party, partyplayer);
                                    if (c.getPlayer().getEventInstance() != null) {
                                        c.getPlayer().getEventInstance().leftParty(c.getPlayer());
                                    }
                                    c.getPlayer().setParty(null);
                                    return;
                                }
                            }
                            if (c.getPlayer().getEventInstance() != null) {
                                c.getPlayer().getEventInstance().disbandParty();
                            }
			} else {
                            if (party.getExpedition() == null) {
                                WorldCommunity.updateParty(party.getId(), MaplePartyOperation.LEAVE, partyplayer);
                            } else {
                                WideObjectHolder.getInstance().leftExpedition(party.getExpedition(), party, partyplayer);
                            }
			    if (c.getPlayer().getEventInstance() != null) {
				c.getPlayer().getEventInstance().leftParty(c.getPlayer());
			    }
                          c.getPlayer().setParty(null);
                        }
                    } 
		break;
	    case 3: // accept invitation
		final int partyid = rh.readInt();
		if (c.getPlayer().getParty() == null) {
			party = WorldCommunity.getParty(partyid);
			if (party != null) {
			    if (party.getMembers().size() < 6) {
				WorldCommunity.updateParty(party.getId(), MaplePartyOperation.JOIN, partyplayer);
				c.getPlayer().receivePartyMemberHP();
				c.getPlayer().updatePartyMemberHP();
			    } else {
				c.getPlayer().dropMessage(5, "�ش� ��Ƽ�� �̹� ��Ƽ���� �� á���ϴ�.");
			    }
			} else {
			    c.getPlayer().dropMessage(5, "�����Ϸ��� ��Ƽ�� �̹� �������� �ʽ��ϴ�.");
			}
		} else {
		    c.getPlayer().dropMessage(5, "�̹� ��Ƽ�� ���ԵǾ� �־� ��Ƽ�� ������ �� �����ϴ�.");
		}
		break;
	    case 4: // invite
		final MapleCharacter invited = c.getChannelServer().getPlayerStorage().getCharacterByName(rh.readMapleAsciiString());
		if (invited != null) {
		    if (invited.getParty() == null) {
			if (party.getMembers().size() < 6) {
			    c.getPlayer().dropMessage(1, invited.getName()+"���� ��Ƽ�� �ʴ��߽��ϴ�.");
			    invited.getClient().getSession().write(MainPacketCreator.partyInvite(c.getPlayer()));
			} else {
			    c.getPlayer().dropMessage(5, "�̹� ��Ƽ���� �ִ�� ���� �� �����Դϴ�.");
			}
		    } else {
			c.getPlayer().dropMessage(5, "�̹� ��Ƽ�� ���ԵǾ� �ִ� ����Դϴ�.");
		    }
		} else {
		    c.getPlayer().dropMessage(5, "����� ã�� ���߽��ϴ�.");
		}
		break;
	    case 6: // expel
		    final MaplePartyCharacter expelled = party.getMemberById(rh.readInt());
		    if (expelled != null) {
			    WorldCommunity.updateParty(party.getId(), MaplePartyOperation.EXPEL, expelled);
			    if (c.getPlayer().getEventInstance() != null) {
				if (expelled.isOnline()) {
				    c.getPlayer().getEventInstance().disbandParty();
				}
			    }
                        }
		break;
	    case 7: // change leader
                if (party.getExpedition() != null) {
                    c.getPlayer().message(1, "�����뿡 ���Ե� ���·δ� ��Ƽ���� �� �� �����ϴ�.");
                    return;
                }
		final MaplePartyCharacter newleader = party.getMemberById(rh.readInt());
		    WorldCommunity.updateParty(party.getId(), MaplePartyOperation.CHANGE_LEADER, newleader);
		break;
            case 13: // change party title
                final String newTitle = rh.readMapleAsciiString();
                if (newTitle.length() > 0) {
                    party.setPartyTitle(newTitle);
                    c.send(MainPacketCreator.updateParty(c.getChannel(), party, MaplePartyOperation.CHANGE_PARTY_TITLE, partyplayer));
                } else {
                    c.getPlayer().message(1, "�� ���� �̻��� ������ ��Ƽ���� �Է����ֽʽÿ�.");
                    return;
                }
                break;
	    default:
		System.out.println("Unhandled Party function." + operation + "");
		break;
	}
    }
    
    public static void processExpeditionRequest(ReadingMaple rh, MapleClient c) {
        byte action = rh.readByte();
        switch (action) {
            case 78: //������ ���
		if (c.getPlayer().getParty() == null) {
                    final String partytitle = rh.readMapleAsciiString();
                    MaplePartyCharacter partyplayer = new MaplePartyCharacter(c.getPlayer());
                    MapleParty party = WorldCommunity.createParty(partyplayer);
                    c.getPlayer().setParty(party);
                    party.setPartyTitle(partytitle);
		    c.getSession().write(MainPacketCreator.partyCreated(party));
                    WideObjectHolder.getInstance().createExpedition(MapleExpeditionType.getById(rh.readInt()), party);
                    c.send(MainPacketCreator.updateExpedition(false, c.getPlayer().getParty().getExpedition()));
		} else {
		    c.getPlayer().dropMessage(5, "��Ƽ�� �̹� ���ԵǾ� �־� ��Ƽ�� ���� �� �����ϴ�.");
                }
                break;
            case 79: { //������ �ʴ�
                    MapleCharacter hp = null;
                    String target = rh.readMapleAsciiString();
                    hp = c.getChannelServer().getPlayerStorage().getCharacterByName(target);
                    if (hp == null) {
                        c.getPlayer().message(1, "���� ä�ο��� ����� �߰����� ���߽��ϴ�.");
                    } else {
                        MapleExpeditionType type = c.getPlayer().getParty().getExpedition().getType();
                        if (hp.getLevel() < type.minlv || hp.getLevel() > type.maxlv) {
                            c.getPlayer().message(1, "����� �� �����뿡 ������ �� �ִ� ������ �ƴմϴ�.");
                        } else if (c.getPlayer().getParty().getExpedition().getAllMemberSize() >= type.maxplayer) {
                            c.getPlayer().message(1, "�������� �ִ� �ο����� �� á���ϴ�.");
                        } else if (hp.getParty() != null) {
                            c.getPlayer().message(1, "����� �̹� ��Ƽ�� ���ԵǾ� �ֽ��ϴ�.");
                        } else {
                            hp.send(MainPacketCreator.inviteExpedition(c.getPlayer().getParty().getExpedition().getType(), c.getPlayer()));
                        }
                    }
                }
                break;
            case 80: { //�ʴ�Ȯ��
                    MapleCharacter hp = null;
                    String origin = rh.readMapleAsciiString();
                    rh.skip(4);
                    int subAction = rh.readInt();
                    if (subAction == 0x07) { //�ʴ밡 �Խ���
                        hp = c.getChannelServer().getPlayerStorage().getCharacterByName(origin);
                        if (hp == null) {
                            c.getPlayer().message(1, "���� ä�ο� �ʴ��� ����� �����ϴ�.");
                        } else {
                            hp.send(MainPacketCreator.serverNotice(1, c.getPlayer().getName()+"���� �����뿡 �ʴ��߽��ϴ�."));
                        }
                    } else if (subAction == 0x09) { //�ʴ� ����
                        hp = c.getChannelServer().getPlayerStorage().getCharacterByName(origin);
                        if (hp == null) {
                            c.getPlayer().message(1, "���� ä�ο� �ʴ��� ����� �����ϴ�.");
                        } else {
                            hp.send(MainPacketCreator.serverNotice(5, c.getPlayer().getName()+"���� ������ �ʴ븦 ����Ͽ����ϴ�."));
                        }
                    } else if (subAction == 0x08) { //�ʴ� ����
                        hp = c.getChannelServer().getPlayerStorage().getCharacterByName(origin);
                        if (hp == null) {
                            c.getPlayer().message(1, "���� ä�ο� �ʴ��� ����� �����ϴ�.");
                        } else {
                            MapleExpedition exp = hp.getParty().getExpedition();
                            if (exp == null) {
                                c.getPlayer().message(1, "�ʴ��� ����� ���� �����뿡 ���ԵǾ� ���� �ʽ��ϴ�.");
                                return;
                            }
                            if (exp.getAllMemberSize() < exp.getType().maxplayer) {
                                WideObjectHolder.getInstance().joinExpedition(exp, c.getPlayer());
                            } else {
                                c.getPlayer().message(1, "�̹� �ش� ������� �ִ� �ο����� ����á���ϴ�.");
                            }
                        }
                    }
                    break;
                }
            case 81: {//������ Ż��
                if (c.getPlayer().getParty() == null) {
                    c.getPlayer().dropMessage(5, "���Ե� ��Ƽ�� �����ϴ�.");
                } else if (c.getPlayer().getParty().getExpedition() == null) {
                    c.getPlayer().dropMessage(5, "���Ե� �����밡 �����ϴ�.");
                } else {
                    MapleParty party = c.getPlayer().getParty();
                    MaplePartyCharacter partyplayer = new MaplePartyCharacter(c.getPlayer());
                    if (party.getExpedition().getLeader() == party.getLeader().getId()) { // disband
                        WideObjectHolder.getInstance().disbandExpedition(party.getExpedition(), partyplayer);
                        if (c.getPlayer().getEventInstance() != null) {
                            c.getPlayer().getEventInstance().disbandParty();
                        }
                    } else {
                        WideObjectHolder.getInstance().leftExpedition(party.getExpedition(), party, partyplayer);
                        if (c.getPlayer().getEventInstance() != null) {
                            c.getPlayer().getEventInstance().leftParty(c.getPlayer());
                        }
                    }
                    c.getPlayer().setParty(null);
                }
                break;
            }
            case 82: { //������ �߹�
                int target = rh.readInt();
                MapleParty party = c.getPlayer().getParty();
                if (party == null) {
                    c.getPlayer().message(1, "�����뿡 �����ϴ�.");
                    return;
                } else if (party.getExpedition() == null) {
                    c.getPlayer().message(1, "�����뿡 �����ϴ�.");
                    return;
                }
                MapleExpedition exp = party.getExpedition();
                if (exp.getLeader() == c.getPlayer().getId()) {
                    MaplePartyCharacter found = null;
                    MapleParty hpcParty = null;
                    for (MapleParty partyzz : party.getExpedition().getPartys()) {
                        for (MaplePartyCharacter hpc : partyzz.getMembers()) {
                            if (hpc.getId() == target) {
                                found = hpc;
                                hpcParty = partyzz;
                                break;
                            }
                        }
                    }
                    if (found == null) {
                        c.getPlayer().message(1, "����� �����뿡 �����ϴ�.");
                        return;
                    }
                    WideObjectHolder.getInstance().expelExpedition(exp, hpcParty, found);
                    if (c.getPlayer().getEventInstance() != null) {
                        c.getPlayer().getEventInstance().disbandParty();
                    }
                }
                break;
            }
            case 83: {//�������� �ֱ�
                int target = rh.readInt();
                MapleParty party = c.getPlayer().getParty();
                if (party == null) {
                    c.getPlayer().message(1, "�����뿡 �����ϴ�.");
                    return;
                } else if (party.getExpedition() == null) {
                    c.getPlayer().message(1, "�����뿡 �����ϴ�.");
                    return;
                }
                MapleExpedition exp = party.getExpedition();
                if (exp.getLeader() == c.getPlayer().getId()) {
                    MaplePartyCharacter found = null;
                    MapleParty hpcParty = null;
                    for (MapleParty partyzz : party.getExpedition().getPartys()) {
                        for (MaplePartyCharacter hpc : partyzz.getMembers()) {
                            if (hpc.getId() == target) {
                                found = hpc;
                                hpcParty = partyzz;
                                break;
                            }
                        }
                    }
                    if (found == null) {
                        c.getPlayer().message(1, "����� �����뿡 �����ϴ�.");
                        return;
                    }
                    WideObjectHolder.getInstance().changeLeaderExpedition(exp, hpcParty, found);
                }
                break;
            }
            case 84: {//������ ��Ƽ�� �ֱ�
                int target = rh.readInt();
                MapleParty party = c.getPlayer().getParty();
                if (party == null) {
                    c.getPlayer().message(1, "�����뿡 �����ϴ�.");
                    return;
                } else if (party.getExpedition() == null) {
                    c.getPlayer().message(1, "�����뿡 �����ϴ�.");
                    return;
                }
                MapleExpedition exp = party.getExpedition();
                if (exp.getLeader() == c.getPlayer().getId()) {
                    MaplePartyCharacter found = null;
                    MapleParty hpcParty = null;
                    for (MapleParty partyzz : party.getExpedition().getPartys()) {
                        for (MaplePartyCharacter hpc : partyzz.getMembers()) {
                            if (hpc.getId() == target) {
                                found = hpc;
                                hpcParty = partyzz;
                                break;
                            }
                        }
                    }
                    if (found == null) {
                        c.getPlayer().message(1, "����� �����뿡 �����ϴ�.");
                        return;
                    }
                    WideObjectHolder.getInstance().changeLeaderPartyInExpedition(exp, hpcParty, found);
                }
                break;
            }
            case 85: {//������ ��Ƽ �̵�
                int index = rh.readInt();
                int target = rh.readInt();
                MapleParty party = c.getPlayer().getParty();
                if (party == null) {
                    c.getPlayer().message(1, "�����뿡 �����ϴ�.");
                    return;
                } else if (party.getExpedition() == null) {
                    c.getPlayer().message(1, "�����뿡 �����ϴ�.");
                    return;
                }
                MapleExpedition exp = party.getExpedition();
                if (exp.getLeader() == c.getPlayer().getId()) {
                    MapleCharacter targetchr = null;
                    for (ChannelServer cserv : ChannelServer.getAllInstances()) {
                        if (cserv.getPlayerStorage().getCharacterById(target) != null) {
                            targetchr = cserv.getPlayerStorage().getCharacterById(target);
                            break;
                        }
                    }
                    if (targetchr == null) {
                        c.getPlayer().message(1, "�ű� ����� ���ӿ� �������� �ƴմϴ�.");
                        return;
                    }
                    WideObjectHolder.getInstance().movePlayerExpedition(exp, targetchr.getParty(), index, targetchr);
                }
                break;
            }
        }
    }
}
