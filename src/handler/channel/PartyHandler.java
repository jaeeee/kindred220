/*
 * ArcStory Project
 * 최주원 sch2307@naver.com
 * 이준 junny_adm@naver.com
 * 우지훈 raccoonfox69@gmail.com
 * 강정규 ku3135@nate.com
 * 김진홍 designer@inerve.kr
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
						c.getSession().write(MainPacketCreator.serverNotice(5, "해당 파티는 이미 파티원이 꽉 찼습니다."));
			    		}
				} else if (action == 0x25) { //1.2.220+ (+1)
					final MapleCharacter cfrom = c.getChannelServer().getPlayerStorage().getCharacterById(party.getLeader().getId());
					if (cfrom != null) {
					    cfrom.getClient().getSession().write(MainPacketCreator.serverNotice(5, c.getPlayer().getName()+" 님이 파티 초대를 거절하였습니다."));
					}
				}
			} else {
			    c.getPlayer().dropMessage(5, "이미 파티가 존재하지 않습니다.");
			}
	} else {
	    c.getPlayer().dropMessage(5, "이미 파티에 가입되어 있어 파티에 가입할 수 없습니다.");
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
		    c.getPlayer().dropMessage(5, "파티에 이미 가입되어 있어 파티를 만들 수 없습니다.");
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
				c.getPlayer().dropMessage(5, "해당 파티는 이미 파티원이 꽉 찼습니다.");
			    }
			} else {
			    c.getPlayer().dropMessage(5, "가입하려는 파티는 이미 존재하지 않습니다.");
			}
		} else {
		    c.getPlayer().dropMessage(5, "이미 파티에 가입되어 있어 파티에 가입할 수 없습니다.");
		}
		break;
	    case 4: // invite
		final MapleCharacter invited = c.getChannelServer().getPlayerStorage().getCharacterByName(rh.readMapleAsciiString());
		if (invited != null) {
		    if (invited.getParty() == null) {
			if (party.getMembers().size() < 6) {
			    c.getPlayer().dropMessage(1, invited.getName()+"님을 파티에 초대했습니다.");
			    invited.getClient().getSession().write(MainPacketCreator.partyInvite(c.getPlayer()));
			} else {
			    c.getPlayer().dropMessage(5, "이미 파티원이 최대로 가득 찬 상태입니다.");
			}
		    } else {
			c.getPlayer().dropMessage(5, "이미 파티에 가입되어 있는 대상입니다.");
		    }
		} else {
		    c.getPlayer().dropMessage(5, "대상을 찾지 못했습니다.");
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
                    c.getPlayer().message(1, "원정대에 가입된 상태로는 파티장을 줄 수 없습니다.");
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
                    c.getPlayer().message(1, "한 글자 이상의 변경할 파티명을 입력해주십시오.");
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
            case 78: //원정대 등록
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
		    c.getPlayer().dropMessage(5, "파티에 이미 가입되어 있어 파티를 만들 수 없습니다.");
                }
                break;
            case 79: { //원정대 초대
                    MapleCharacter hp = null;
                    String target = rh.readMapleAsciiString();
                    hp = c.getChannelServer().getPlayerStorage().getCharacterByName(target);
                    if (hp == null) {
                        c.getPlayer().message(1, "현재 채널에서 대상을 발견하지 못했습니다.");
                    } else {
                        MapleExpeditionType type = c.getPlayer().getParty().getExpedition().getType();
                        if (hp.getLevel() < type.minlv || hp.getLevel() > type.maxlv) {
                            c.getPlayer().message(1, "대상은 이 원정대에 가입할 수 있는 레벨이 아닙니다.");
                        } else if (c.getPlayer().getParty().getExpedition().getAllMemberSize() >= type.maxplayer) {
                            c.getPlayer().message(1, "원정대의 최대 인원수가 꽉 찼습니다.");
                        } else if (hp.getParty() != null) {
                            c.getPlayer().message(1, "대상은 이미 파티에 가입되어 있습니다.");
                        } else {
                            hp.send(MainPacketCreator.inviteExpedition(c.getPlayer().getParty().getExpedition().getType(), c.getPlayer()));
                        }
                    }
                }
                break;
            case 80: { //초대확인
                    MapleCharacter hp = null;
                    String origin = rh.readMapleAsciiString();
                    rh.skip(4);
                    int subAction = rh.readInt();
                    if (subAction == 0x07) { //초대가 왔슴당
                        hp = c.getChannelServer().getPlayerStorage().getCharacterByName(origin);
                        if (hp == null) {
                            c.getPlayer().message(1, "현재 채널에 초대한 대상이 없습니다.");
                        } else {
                            hp.send(MainPacketCreator.serverNotice(1, c.getPlayer().getName()+"님을 원정대에 초대했습니다."));
                        }
                    } else if (subAction == 0x09) { //초대 거절
                        hp = c.getChannelServer().getPlayerStorage().getCharacterByName(origin);
                        if (hp == null) {
                            c.getPlayer().message(1, "현재 채널에 초대한 대상이 없습니다.");
                        } else {
                            hp.send(MainPacketCreator.serverNotice(5, c.getPlayer().getName()+"님이 원정대 초대를 사양하였습니다."));
                        }
                    } else if (subAction == 0x08) { //초대 수락
                        hp = c.getChannelServer().getPlayerStorage().getCharacterByName(origin);
                        if (hp == null) {
                            c.getPlayer().message(1, "현재 채널에 초대한 대상이 없습니다.");
                        } else {
                            MapleExpedition exp = hp.getParty().getExpedition();
                            if (exp == null) {
                                c.getPlayer().message(1, "초대한 대상이 현재 원정대에 가입되어 있지 않습니다.");
                                return;
                            }
                            if (exp.getAllMemberSize() < exp.getType().maxplayer) {
                                WideObjectHolder.getInstance().joinExpedition(exp, c.getPlayer());
                            } else {
                                c.getPlayer().message(1, "이미 해당 원정대는 최대 인원으로 가득찼습니다.");
                            }
                        }
                    }
                    break;
                }
            case 81: {//원정대 탈퇴
                if (c.getPlayer().getParty() == null) {
                    c.getPlayer().dropMessage(5, "가입된 파티가 없습니다.");
                } else if (c.getPlayer().getParty().getExpedition() == null) {
                    c.getPlayer().dropMessage(5, "가입된 원정대가 없습니다.");
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
            case 82: { //원정대 추방
                int target = rh.readInt();
                MapleParty party = c.getPlayer().getParty();
                if (party == null) {
                    c.getPlayer().message(1, "원정대에 없습니다.");
                    return;
                } else if (party.getExpedition() == null) {
                    c.getPlayer().message(1, "원정대에 없습니다.");
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
                        c.getPlayer().message(1, "대상이 원정대에 없습니다.");
                        return;
                    }
                    WideObjectHolder.getInstance().expelExpedition(exp, hpcParty, found);
                    if (c.getPlayer().getEventInstance() != null) {
                        c.getPlayer().getEventInstance().disbandParty();
                    }
                }
                break;
            }
            case 83: {//원정대장 주기
                int target = rh.readInt();
                MapleParty party = c.getPlayer().getParty();
                if (party == null) {
                    c.getPlayer().message(1, "원정대에 없습니다.");
                    return;
                } else if (party.getExpedition() == null) {
                    c.getPlayer().message(1, "원정대에 없습니다.");
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
                        c.getPlayer().message(1, "대상이 원정대에 없습니다.");
                        return;
                    }
                    WideObjectHolder.getInstance().changeLeaderExpedition(exp, hpcParty, found);
                }
                break;
            }
            case 84: {//원정대 파티장 주기
                int target = rh.readInt();
                MapleParty party = c.getPlayer().getParty();
                if (party == null) {
                    c.getPlayer().message(1, "원정대에 없습니다.");
                    return;
                } else if (party.getExpedition() == null) {
                    c.getPlayer().message(1, "원정대에 없습니다.");
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
                        c.getPlayer().message(1, "대상이 원정대에 없습니다.");
                        return;
                    }
                    WideObjectHolder.getInstance().changeLeaderPartyInExpedition(exp, hpcParty, found);
                }
                break;
            }
            case 85: {//원정대 파티 이동
                int index = rh.readInt();
                int target = rh.readInt();
                MapleParty party = c.getPlayer().getParty();
                if (party == null) {
                    c.getPlayer().message(1, "원정대에 없습니다.");
                    return;
                } else if (party.getExpedition() == null) {
                    c.getPlayer().message(1, "원정대에 없습니다.");
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
                        c.getPlayer().message(1, "옮길 대상이 게임에 접속중이 아닙니다.");
                        return;
                    }
                    WideObjectHolder.getInstance().movePlayerExpedition(exp, targetchr.getParty(), index, targetchr);
                }
                break;
            }
        }
    }
}
