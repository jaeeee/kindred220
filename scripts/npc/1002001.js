/* 
 * @Author 바이러스(v_Ir_us@nate.com)
 * MYSQL과 SystemSQL은 연동하는 곳이 다릅니다 ~.~
 */

importPackage(java.lang);
importPackage(java.sql);
importPackage(Packages.database);
importPackage(Packages.client.items);
importPackage(Packages.server.items);
importPackage(Packages.tools);
importPackage(Packages.provider);
importPackage(java.io);

var threedays = 1000 * 60 * 60 * 24 * 3; // 3일
var star = "#fUI/UIToolTip.img/Item/Equip/Star/Star#";

function start() {
        if (!haveAuction()) {
            createAuction();
        }
	equip = null;
	status = -1;
	cm.sendSimple("안녕하세요? 경매 시스템을 운영하고 있는 #b레아#k입니다. 등록하신 아이템은 등록한 기간부터 3일까지 저장되며, 그 이후에는 아이템을 다시 가져가야 합니다. 무엇을 도와드릴까요?\r\n#b#L1#아이템 등록하기\r\n#L2#등록된 아이템 보기\r\n#L3#등록된 아이템 조회\r\n#L4#메소 찾기");
}

function action(m,t,s) {
	if (m == 1) {
	status++;
}
	if (m == -1 || m == 0) {
	cm.dispose();
	return;
}
	if (status == 0) {
	if (s == 1) {
	getList();
	} else if (s == 2) {
	getAuctionList();
	} else if (s == 3) {
	cm.sendGetText("찾으시고자 하는 아이템 이름을 입력해주세요.");
	} else if (s == 4) {
            if (getAuctionMeso(cm.getPlayer().getName()) == 0) {
                cm.sendOk("찾을 메소가 없습니다.");
            } else {
                cm.sendYesNo("현재 #h #님께 들어온 돈은 #b"+getAuctionMeso(cm.getPlayer().getName())+" 메소#k입니다. 메소를 받으시겠습니까?");
            }
}
	selected = s;

	} else if (status == 1) {
	if (selected == 1) {
	position = s;
	equip = cm.getEquip(s);
	uniqueid = equip.getUniqueId();
	name = ItemInformation.getInstance().getName(equip.getItemId());
	cm.sendGetText("최저 낙찰가를 입력해주세요.");
	} else if (selected == 2) {
	uni = s;
	getItemOption(s,getInvId(s),id);
	} else if (selected == 3) {
	rname = cm.getText();
	searchItem(rname);
    } else if (selected == 4) {
        cm.gainMeso(getAuctionMeso(cm.getPlayer().getName()));
        var upd = SystemSQL.getConnection().prepareStatement("UPDATE auctionmeso SET meso = ? WHERE name = ?");
        upd.setLong(1,0);
        upd.setString(2,cm.getPlayer().getName());
        upd.executeUpdate();
        cm.sendOk("메소를 찾았습니다.");
        cm.dispose();
	}

	} else if (status == 2) {
	if (selected == 1) {
	price = cm.getText();
	if (price > 9999999999 || price <= 0) {
	cm.sendOk("#r최소 1원, 최대 99억 메소#k를 등록할 수 있습니다.");
	cm.dispose();
	} else if (!isNumber(price)) {
	cm.sendOk("숫자만 입력할 수 있습니다. 다시 입력해 주세요.");
	cm.dispose();
	} else {
	cm.sendYesNo("정말 #b#i"+equip.getItemId()+"##t"+equip.getItemId()+"##k를 #r"+price+" 메소#k에 등록하시겠습니까?");
}
	} else if (selected == 2) {
            if (getOwner(myUniqueid) == cm.getPlayer().getName() && getBuyer(myUniqueid) == "없음") {
                getMine(myUniqueid);
            } else if (getBuyer(myUniqueid) == cm.getPlayer().getName()) {
                gainAuctionItem(cm.getMeso(), myUniqueid);
            } else {
	buymeso = cm.getText();
	if (buymeso > 9999999999 || buymeso <= 0) {
	cm.sendOk("#r최소 1원, 최대 99억 메소#k를 등록할 수 있습니다.");
	cm.dispose();
	} else if (!isNumber(buymeso)) {
	cm.sendOk("숫자만 입력할 수 있습니다. 다시 입력해 주세요.");
	cm.dispose();
	} else {
	cm.sendYesNo("#b"+buymeso+" 메소#k : 입찰하시겠습니까?\r\n#r(낙찰가 : "+getPrice(uni)+" 메소 + "+buymeso+" 메소)");
}
            }
	} else if (selected == 3) {
	getItemOption(s,getInvId(s),id);
}

	} else if (status == 3) {
	if (selected == 1) {
	saveAuctionItem(cm.getPlayer().getName(),uniqueid,name,price,(System.currentTimeMillis() + threedays),"없음");
	cm.getPlayer().getInventory(MapleInventoryType.EQUIP).removeSlot(position);
	cm.getPlayer().getClient().getSession().write(Packages.packet.creators.MainPacketCreator.dropInventoryItem(MapleInventoryType.EQUIP,position));
	cm.sendOk("성공적으로 아이템이 등록되었습니다.");
	cm.dispose();
    } else if (selected == 2) {
        buymeso = Long.parseLong(buymeso);
        buymeso += getPrice(uni);
        updateItem(buymeso,cm.getPlayer().getName(),uni);
	}
}
}

function updateItem(newmeso,name,uniqueid) {
    var upd = SystemSQL.getConnection().prepareStatement("UPDATE auction SET price = ? WHERE uniqueid = ?");
    var upd1 = SystemSQL.getConnection().prepareStatement("UPDATE auction SET buyer = ? WHERE uniqueid = ?");
    upd.setLong(1,newmeso);
    upd.setInt(2,uniqueid);
    upd.executeUpdate();
    upd1.setString(1,name);
    upd1.setInt(2,uniqueid);
    upd1.executeUpdate();
    cm.sendOk("입찰이 완료되었습니다.");
    cm.dispose();
}

function isNumber(num) {
	var isNum = false;
	if (num.contains("1") || num.contains("2") || num.contains("3") || num.contains("4") || num.contains("5")
                || num.contains("6") || num.contains("7") || num.contains("8") || num.contains("9") || num.contains("0")) {
            isNum = true;
                } else {
                    isNum = false;
                }
                return isNum;
        }

function searchItem(name) {
	var ps = SystemSQL.getConnection().prepareStatement("SELECT * FROM auction WHERE name LIKE CONCAT('%',?,'%')");
	ps.setString(1,name);
	var rs = ps.executeQuery();
	var i = 0;
	while (rs.next()) {
	i++;
	name = rs.getString("name");
	}
	return getAuctionListByName(name);
} 

function getAuctionListByName(name) {
	var ps = SystemSQL.getConnection().prepareStatement("SELECT * FROM auction WHERE name = ?");
	ps.setString(1,name);
	var rs = ps.executeQuery();
	var string = new StringBuilder();
	var i = 0;
	while (rs.next()) {
	i++;
	uniqueid = rs.getInt("uniqueid");
	price = rs.getLong("price");
	time = rs.getLong("expiration");
	time -= System.currentTimeMillis(); // 저장된 시간에서 현재 시간을 뺌
	time /= 1000; // 뺀 시간을 초로 환산 (밀리세컨드는 초 x 1000 이므로)

	/* 본격 스크립트 용량 늘리기 :: 가격대 표시 (간격 맞춤) */
	price = price < 10 ? "#Cgray#000000000#b"+price+"" : 
		price >= 10 && price < 100 ? "#Cgray#00000000#b"+price+"" :
		price >= 100 && price < 1000 ? "#Cgray#0000000#b"+price+"" :
		price >= 1000 && price < 10000 ? "#Cgray#000000#b"+price+"" : 
		price >= 10000 && price < 100000 ? "#Cgray#00000#b"+price+"" : 
		price >= 100000 && price < 1000000 ? "#Cgray#0000#b"+price+"" : 
		price >= 1000000 && price < 10000000 ? "#Cgray#000#b"+price+"" : 
		price >= 10000000 && price < 100000000 ? "#Cgray#00#b"+price+"" :
		price >= 100000000 && price < 1000000000 ? "#Cgray#0#b"+price+"" :
		price >= 1000000000 && price < 10000000000 ? "#Cgray##b"+price+"" : "#b"+price+"";

	/* 본격 스크립트 용량 늘리기 :: 시간대 표시 (역시 간격) */
	var sec = time % 60; // 초
	var total = (time - sec); // 초로 환산 한 상태에서 초 값만 뺌
	var min = (total / 60) % 60; // 분
	var hour = Math.floor((total - (sec + min)) / 3600); // 시간
	hour = hour % 24;
	var day = Math.floor(time / (60 * 60 * 24));
	if (hour < 10) {
	hour = "0"+hour; }
	if (min < 10) {
	min = "0"+min; }
	var expiration = time > 0 ? "#r"+day+"일 "+hour+"시간 "+min+"분" : "  #Cgray#종료된 경매";
	
	var item = MYSQL.getConnection().prepareStatement("SELECT * FROM inventoryitems WHERE uniqueid = ?");
	item.setInt(1,uniqueid); 
	var eq = item.executeQuery(); 
	eq.next();
	itemid = eq.getInt("itemid");

	invid = eq.getInt("inventoryitemid");
	var inv = MYSQL.getConnection().prepareStatement("SELECT * FROM inventoryequipment WHERE inventoryitemid = ?");
	inv.setInt(1,invid); 
	var invv = inv.executeQuery();
	invv.next();

	string.append("#L"+uniqueid+"##b("+i+")          #i"+itemid+"#        "+price+"      "+expiration+"\r\n#k");
	}
	if (i != 0) {
	cm.sendSimple("검색결과에 따른 아이템 리스트입니다.\r\n\r\n#e [번호]      [아이템]       [가격]        [남은 시간]\r\n#n"+string.toString());
	id = itemid;
	} else{
	cm.sendOk("아이템을 찾을 수 없습니다.");
        cm.dispose();
}
}

function getAuctionMeso(name) {
    var ps = SystemSQL.getConnection().prepareStatement("SELECT * FROM auctionmeso WHERE name = ?");
    ps.setString(1,name);
    var rs = ps.executeQuery();
    rs.next();
    return rs.getLong("meso");
}

function getExpiration(uniqueid) {
    var ps = SystemSQL.getConnection().prepareStatement("SELECT * FROM auction WHERE uniqueid = ?");
    ps.setInt(1,uniqueid);
    var rs = ps.executeQuery();
    rs.next();
    var time = rs.getLong("expiration");
    time -= System.currentTimeMillis();
    time /= 1000;
    return time;
 }
 
function getAuctionList() {
	var ps = SystemSQL.getConnection().prepareStatement("SELECT * FROM auction");
	var rs = ps.executeQuery(); 
	var i = 0;
	var string = new StringBuilder();
	while (rs.next()) {
	i++;
	uniqueid = rs.getInt("uniqueid");
	price = rs.getLong("price");
	time = rs.getLong("expiration");
	time -= System.currentTimeMillis(); // 저장된 시간에서 현재 시간을 뺌
	time /= 1000; // 뺀 시간을 초로 환산 (밀리세컨드는 초 x 1000 이므로)

	/* 본격 스크립트 용량 늘리기 :: 가격대 표시 (간격 맞춤) */
	price = price < 10 ? "#Cgray#000000000#b"+price+"" : 
		price >= 10 && price < 100 ? "#Cgray#00000000#b"+price+"" :
		price >= 100 && price < 1000 ? "#Cgray#0000000#b"+price+"" :
		price >= 1000 && price < 10000 ? "#Cgray#000000#b"+price+"" : 
		price >= 10000 && price < 100000 ? "#Cgray#00000#b"+price+"" : 
		price >= 100000 && price < 1000000 ? "#Cgray#0000#b"+price+"" : 
		price >= 1000000 && price < 10000000 ? "#Cgray#000#b"+price+"" : 
		price >= 10000000 && price < 100000000 ? "#Cgray#00#b"+price+"" :
		price >= 100000000 && price < 1000000000 ? "#Cgray#0#b"+price+"" :
		price >= 1000000000 && price < 10000000000 ? "#Cgray##b"+price+"" : "#b"+price+"";

	/* 본격 스크립트 용량 늘리기 :: 시간대 표시 (역시 간격) */
	var sec = time % 60; // 초
	var total = (time - sec); // 초로 환산 한 상태에서 초 값만 뺌
	var min = (total / 60) % 60; // 분
	var hour = Math.floor((total - (sec + min)) / 3600); // 시간
	hour = hour % 24;
	var day = Math.floor(time / (60 * 60 * 24));
	if (hour < 10) {
	hour = "0"+hour; }
	if (min < 10) {
	min = "0"+min; }
	var expiration = time > 0 ? "#r"+day+"일 "+hour+"시간 "+min+"분" : "  #Cgray#종료된 경매";
	
	var item = MYSQL.getConnection().prepareStatement("SELECT * FROM inventoryitems WHERE uniqueid = ?");
	item.setInt(1,uniqueid); 
	var eq = item.executeQuery(); 
	eq.next();
	itemid = eq.getInt("itemid");

	invid = eq.getInt("inventoryitemid");
	var inv = MYSQL.getConnection().prepareStatement("SELECT * FROM inventoryequipment WHERE inventoryitemid = ?");
	inv.setInt(1,invid); 
	var invv = inv.executeQuery();
	invv.next();
	string.append("#L"+uniqueid+"##b("+i+")          #i"+itemid+"#        "+price+"      "+expiration+"\r\n#k");
	}
	if (i != 0) {
	cm.sendSimple("현재 등록된 아이템 리스트입니다.\r\n\r\n#e [번호]      [아이템]       [가격]        [남은 시간]\r\n#n"+string.toString());
	id = itemid;
	} else {
	cm.sendOk("등록된 아이템이 없습니다.");	
cm.dispose();
}
}

function getPrice(uniqueid) {
	var ps = SystemSQL.getConnection().prepareStatement("SELECT * FROM auction WHERE uniqueid = ?");
	ps.setInt(1,uniqueid);
	var rs = ps.executeQuery();
	rs.next();
	return rs.getLong("price");
}

function getOwner(uniqueid) {
	var ps = SystemSQL.getConnection().prepareStatement("SELECT * FROM auction WHERE uniqueid = ?");
	ps.setInt(1,uniqueid);
	var rs = ps.executeQuery();
	rs.next();
	return rs.getString("owner");
}

function getBuyer(uniqueid) {
	var ps = SystemSQL.getConnection().prepareStatement("SELECT * FROM auction WHERE uniqueid = ?");
	ps.setInt(1,uniqueid);
	var rs = ps.executeQuery();
	rs.next();
	return rs.getString("buyer");
}

function getItemOption(uniqueid, invid,id) {
	var ps = MYSQL.getConnection().prepareStatement("SELECT * FROM inventoryequipment WHERE inventoryitemid = ?");
	ps.setInt(1,invid);
	var eq = ps.executeQuery();
	eq.next();
	var string = new StringBuilder();
	p1 = eq.getInt("potential1");
	p2 = eq.getInt("potential2");
	p3 = eq.getInt("potential3");
	p4 = eq.getInt("potential4");
	p5 = eq.getInt("potential5");
	p6 = eq.getInt("potential6");
	state = eq.getInt("state");
        string.append("(잠재능력 옵션 관련 : 증가량이 실제와 다를 수 있습니다.)\r\n");
        string.append("#e강화 : #n");
        if (eq.getInt("enhance") == 0) {
            string.append("없음");
        } else {
        for (var en = 0; en < eq.getInt("enhance"); en++) {
            string.append(star);
        }
    }
    string.append("\r\n");
	string.append("#e힘 · 덱스 · 인트 · 럭 : #n"+eq.getInt("str")+" / "+eq.getInt("dex")+" / "+eq.getInt("int")+" / "+eq.getInt("luk")+"\r\n");
	string.append("#e공격력 · 마력 : #n"+eq.getInt("watk")+" / "+eq.getInt("matk")+"\r\n");
	var grade = "";
	switch (state) {
	case 17 : grade = "#b레어#k"; break;
	case 18 : grade = "#d에픽#k"; break;
	case 19 : grade = "#Cyellow#유니크#k"; break;
	case 20 : grade = "#g레전드리#k"; break;
	case 4 : grade = "#r미확인#k"; break;
	default: grade = "#r없음#k"; break; }
	string.append("#e잠재능력 : #n"+grade+"\r\n");
	string.append("(첫 번째) "+getPotentialById(p1,id)+"");
	string.append("\r\n#n(두 번째) "+getPotentialById(p2,id)+"");
	string.append("\r\n#n(세 번째) "+getPotentialById(p3,id)+"\r\n");
        if (p4 > 0) {
	string.append("#b(에디셔널) #k"+getPotentialById(p4,id)+"\r\n");
	string.append("#b(에디셔널) #k"+getPotentialById(p5,id)+"\r\n");
	string.append("#b(에디셔널) #k"+getPotentialById(p6,id)+"\r\n");
    }
	string.append("#e황금망치 제련 여부 : #n");
	string.append(eq.getByte("ViciousHammer") == 1 ? "예\r\n" : "아니오\r\n");
	string.append("#e업그레이드 가능 횟수 : #n"+eq.getByte("upgradeslots")+"\r\n\r\n");
	string.append("#e현재 최저 낙찰가 : #n"+getPrice(uniqueid)+" 메소\r\n");
	string.append("#e현재 입찰자 : #n").append(getBuyer(uniqueid)).append("\r\n");
	string.append("얼마에 낙찰하시겠습니까?");
        
        if (getExpiration(uniqueid) <= 0) {
            var buyer = getBuyer(uniqueid);
            var owner = getOwner(uniqueid);
            var name = cm.getPlayer().getName();
            var none = "없음";
            if (buyer == none && owner == name) {
                cm.sendYesNo("입찰자가 없습니다. 도로 되찾아가시겠습니까?");
            } else if (buyer != name && buyer != none) { 
                cm.sendOk("입찰자가 아닙니다.\r\n#b(입찰자 : "+getBuyer(uniqueid)+")");
                cm.dispose();
            } else if (buyer == none && owner != name) {
                cm.sendOk("종료된 경매 아이템입니다.");
                cm.dispose();
            } else if (buyer == name) {
                cm.sendYesNo("#b"+getPrice(uniqueid)+" 메소#k에 낙찰되었습니다.\r\n아이템을 가져가시겠습니까?");
            }
            } else {
                cm.sendGetText(string.toString());
        }
        myUniqueid = uniqueid;
    }

function getItemId(uniqueid) {
    var ps = MYSQL.getConnection().prepareStatement("SELECT * FROM inventoryitems WHERE uniqueid = ?");
    ps.setInt(1,uniqueid);
    var eq = ps.executeQuery();
    eq.next(); return eq.getInt("itemid");
}

function getInvId(uniqueid) {
	var ps = MYSQL.getConnection().prepareStatement("SELECT * FROM inventoryitems WHERE uniqueid = ?");
	ps.setInt(1,uniqueid);
	var eq = ps.executeQuery();
	eq.next(); return eq.getInt("inventoryitemid");
}

function getPotentialById(potential,id) {
	var itemData = VrDataProviderFactory.getDataProvider(new File("wz/Item.wz"));
	var potentialData = itemData.getData("ItemOption.img");

	var pid = "0"+potential; // ItemOption.img - 잠재옵션 값 (40041 -> 040041)

	/* 아이템 레벨에 따라 잠재 증가량 달라짐 */
	var reqlev = ItemInformation.getInstance().getReqLevel(id); // 아이템 요구레벨
	var level = reqlev >= 0 && reqlev < 40 ? 3 : reqlev >= 40 && reqlev < 80 ? 7 : 20; // 증가량
	
	/* 잠재 이름 불러오기 */
	var root = potentialData.getChildByPath(pid);
	if (root == null) {
	return "없음";
	} else {
	var string = VrDataTool.getString("info/string",root);
	
	var root1 = root.getChildByPath("level/"+level+"");
	var option = root1.getChildren().get(0).getName();
	option = VrDataTool.getString(option,root1);

	/* 이름 팅 방지 */
	if (string.contains("#incSpeed")) {
	string = string.replace("#incSpeed",option);
}
	if (string.contains("#incJump")) {
	string = string.replace("#incJump",option);
}
	if (string.contains("prop")) {
	string = string.replace("#prop",option);
}
	if (string.contains("time")) {
	string = string.replace("#time",option);
}
	if (string.contains("#incCr")) {
	string = string.replace("#incCr",option);
}
	if (string.contains("#incDAMr")) {
	string = string.replace("#incDAMr",option);
}
	if (string.contains("#RecoveryHP")) {
	string = string.replace("#RecoveryHP",option);
}
	if (string.contains("#RecoveryMP")) {
	string = string.replace("#RecoveryMP",option);
}
	if (string.contains("#HP")) {
	string = string.replace("#HP",option);
}
	if (string.contains("#MP")) {
	string = string.replace("#MP",option);
}
	if (string.contains("#level")) {
	string = string.replace("#level",option);
}
	if (string.contains("#ignoreTargetDEF")) {
	string = string.replace("#ignoreTargetDEF",option);
}
	if (string.contains("#ignoreDAM")) {
	string = string.replace("#ignoreDAM",option);
}
	if (string.contains("#DAMreflect")) {
	string = string.replace("#DAMreflect",option);
}
	if (string.contains("#mpconReduce")) {
	string = string.replace("#mpconReduce",option);
}
	if (string.contains("#mpRestore")) {
	string = string.replace("#mpRestore",option);
}
	if (string.contains("#incMesoProp")) {
	string = string.replace("#incMesoProp",option);
}
	if (string.contains("#incRewardProp")) {
	string = string.replace("#incRewardProp",option);
}
	if (string.contains("#incAllskill")) {
	string = string.replace("#incAllskill",option);
}
	if (string.contains("#ignoreDAMr")) {
	string = string.replace("#ignoreDAMr",option);
}
	if (string.contains("#RecoveryUP")) {
	string = string.replace("#RecoveryUP",option);
}
	if (string.contains("#incSTR")) {
	if (string.contains("r")) {
		string = string.replace("#incSTRr",option);
	}
	string = string.replace("#incSTR",option);
}
	
	if (string.contains("#incDEX")) {
	if (string.contains("r")) {
		string = string.replace("#incDEXr",option);
	}
	string = string.replace("#incDEX",option);
}

	if (string.contains("#incINT")) {
	if (string.contains("r")) {
		string = string.replace("#incINTr",option);
	}
	string = string.replace("#incINT",option);
}

	if (string.contains("#incLUK")) {
	if (string.contains("r")) {
		string = string.replace("#incLUKr",option);
	}
	string = string.replace("#incLUK",option);
}

	if (string.contains("#incMHP")) {
	if (string.contains("r")) {
		string = string.replace("#incMHPr",option);
	}
	string = string.replace("#incMHP",option);
}
	
	if (string.contains("#incMMP")) {
	if (string.contains("r")) {
		string = string.replace("#incMMPr",option);
	}
	string = string.replace("#incMMP",option);
}
	
	if (string.contains("#incACC")) {
	if (string.contains("r")) {
		string = string.replace("#incACCr",option);
	}
	string = string.replace("#incACC",option);
}

	if (string.contains("#incEVA")) {
	if (string.contains("r")) {
		string = string.replace("#incEVAr",option);
	}
	string = string.replace("#incEVA",option);
}

	if (string.contains("#incPAD")) {
	if (string.contains("r")) {
		string = string.replace("#incPADr",option);
	}
	string = string.replace("#incPAD",option);
}
	
	if (string.contains("#incMAD")) {
	if (string.contains("r")) {
		string = string.replace("#incMADr",option);
	}
	string = string.replace("#incMAD",option);
}

		if (string.contains("#incPDD")) {
	if (string.contains("r")) {
		string = string.replace("#incPDDr",option);
	}
	string = string.replace("#incPDD",option);
}
	
	if (string.contains("#incMDD")) {
	if (string.contains("r")) {
		string = string.replace("#incMDDr",option);
	}
	string = string.replace("#incMDD",option);
}

	return string;
}
}

function saveAuctionItem(owner,uniqueid,name,price,expiration,buyer) {
	var ps = SystemSQL.getConnection().prepareStatement("INSERT INTO auction(owner,uniqueid,name,price,expiration,buyer) VALUES(?,?,?,?,?,?)");
	ps.setString(1,owner);
	ps.setInt(2,uniqueid);
	ps.setString(3,name);
	ps.setLong(4,price);
	ps.setLong(5,expiration);
	ps.setString(6,buyer);
	ps.executeUpdate();
	var pse = MYSQL.getConnection().prepareStatement("UPDATE inventoryitems SET issale = 1 WHERE uniqueid = ?");
	pse.setInt(1,uniqueid);
	pse.executeUpdate();
}

function getList() {
	var list = "";
	var ok = false;
	for (var i = 1; i < 97; i++) {
	if (cm.getEquip(i)) {
	ok = true;
	list += "#L"+i+"##b#i"+cm.getEquip(i).getItemId()+"# #t"+cm.getEquip(i).getItemId()+"#\r\n";
	}
}
	if (ok) {
	cm.sendSimple("어떤 아이템을 등록하시겠습니까?\r\n"+list);
	} else {
	list = "아이템을 가지고 있는 지 다시 한 번 확인해주세요.";
	cm.sendOk(list); cm.dispose();
    }
}
	
function gainAuctionItem(meso, uniqueid) {
    var price = getPrice(uniqueid);
    if (meso < getPrice(uniqueid)) {
        cm.sendOk("메소가 부족합니다. 다시 한 번 확인해주세요.");
        cm.dispose();
    } else {
    var equip = ItemInformation.getInstance().getEquipById(getItemId(uniqueid));
    var ps = MYSQL.getConnection().prepareStatement("SELECT * FROM inventoryequipment WHERE inventoryitemid = ?");
    ps.setInt(1,getInvId(uniqueid));
    var rs = ps.executeQuery();
    var item = "";
    rs.next();
    var option = new Array("upgradeslots","level","str","dex","int","luk","hp","mp","watk","matk","wdef","mdef","acc","avoid","hands","speed","jump","ringid","ViciousHammer","itemLevel","itemEXP","durability","enhance","state","lines","potential1",
"potential2","potential3","potential4","potential5","potential6","anvil","hpR","mpR","potential7","fire","downlevel","bossdmg","alldmgp","allstatp","IgnoreWdef");
    
    for (var i = 0; i < option.length; i++) {
        item += rs.getInt(option[i])+",";
    }
    var name = getOwner(uniqueid);
    item = item.split(",");
    equip.setUpgradeSlots(item[0]);        equip.setLevel(item[1]);
        equip.setStr(item[2]);        equip.setDex(item[3]);        equip.setInt(item[4]);        equip.setLuk(item[5]);
        equip.setHp(item[6]);        equip.setMp(item[7]);        equip.setWatk(item[8]);        equip.setMatk(item[9]);
        equip.setWdef(item[10]);        equip.setMdef(item[11]);        equip.setAcc(item[12]);        equip.setAvoid(item[13]);
        equip.setHands(item[14]);        equip.setSpeed(item[15]);        equip.setJump(item[16]);        equip.setRingId(item[17]);
        equip.setViciousHammer(item[18]);        equip.setItemLevel(item[19]);          equip.setItemEXP(item[20]);
        equip.setDurability(item[21]);        equip.setEnhance(item[22]);        equip.setState(item[23]);          equip.setLines(item[24])
        equip.setPotential1(item[25]);        equip.setPotential2(item[26]);        equip.setPotential3(item[27]);
        equip.setPotential4(item[28]);        equip.setPotential5(item[29]);        equip.setPotential6(item[30]);
        equip.setanvil(item[31]);        equip.setHpR(item[32]);        equip.setMpR(item[33]);         equip.setPotential7(item[34]);
        equip.setFire(item[35]);        equip.setDownLevel(item[36]);        equip.setBossDamage(item[37]);
        equip.setAllDamageP(item[38]);      equip.setAllStatP(item[39]);          equip.setIgnoreWdef(item[40]);
        InventoryManipulator.addFromDrop(cm.getC(), equip, false);
        cm.gainMeso(-price);
        price += getAuctionMeso(name);
        deleteAuction(uniqueid);
        updateMeso(price,name);
        cm.sendOk("성공적으로 낙찰하였습니다. 인벤토리를 확인해주세요.");
        cm.dispose();
    }
}

function haveAuction() {
    var ps = SystemSQL.getConnection().prepareStatement("SELECT * FROM auctionmeso WHERE name = ?");
    ps.setString(1,cm.getPlayer().getName());
    var rs = ps.executeQuery();
    var isExist = false;
    while (rs.next()) {
        isExist = true;
    }
    return isExist;
}

function createAuction() {
    var ins = SystemSQL.getConnection().prepareStatement("INSERT INTO auctionmeso(name,meso) VALUES(?,?)");
    ins.setString(1,cm.getPlayer().getName());
    ins.setLong(2,0);
    ins.executeUpdate();
}

function updateMeso(meso,name) {
    var ps = SystemSQL.getConnection().prepareStatement("SELECT * FROM auctionmeso WHERE name = ?");
    ps.setString(1,name);
    var rs = ps.executeQuery();
    rs.next();
        var upd = SystemSQL.getConnection().prepareStatement("UPDATE auctionmeso SET meso = ? WHERE name = ?");
        upd.setLong(1,meso);
        upd.setString(2,name);
        upd.executeUpdate();
}

function getMine(uniqueid) {
    var equip = ItemInformation.getInstance().getEquipById(getItemId(uniqueid));
    var ps = MYSQL.getConnection().prepareStatement("SELECT * FROM inventoryequipment WHERE inventoryitemid = ?");
    ps.setInt(1,getInvId(uniqueid));
    var rs = ps.executeQuery();
    var item = "";
    rs.next();
    var option = new Array("upgradeslots","level","str","dex","int","luk","hp","mp","watk","matk","wdef","mdef","acc","avoid","hands","speed","jump","ringid","ViciousHammer","itemLevel","itemEXP","durability","enhance","state","lines","potential1",
"potential2","potential3","potential4","potential5","potential6","anvil","hpR","mpR","potential7","fire","downlevel","bossdmg","alldmgp","allstatp","IgnoreWdef");
    
    for (var i = 0; i < option.length; i++) {
        item += rs.getInt(option[i])+",";
    }
    item = item.split(",");
        equip.setUpgradeSlots(item[0]);        equip.setLevel(item[1]);
        equip.setStr(item[2]);        equip.setDex(item[3]);        equip.setInt(item[4]);        equip.setLuk(item[5]);
        equip.setHp(item[6]);        equip.setMp(item[7]);        equip.setWatk(item[8]);        equip.setMatk(item[9]);
        equip.setWdef(item[10]);        equip.setMdef(item[11]);        equip.setAcc(item[12]);        equip.setAvoid(item[13]);
        equip.setHands(item[14]);        equip.setSpeed(item[15]);        equip.setJump(item[16]);        equip.setRingId(item[17]);
        equip.setViciousHammer(item[18]);        equip.setItemLevel(item[19]);          equip.setItemEXP(item[20]);
        equip.setDurability(item[21]);        equip.setEnhance(item[22]);        equip.setState(item[23]);          equip.setLines(item[24])
        equip.setPotential1(item[25]);        equip.setPotential2(item[26]);        equip.setPotential3(item[27]);
        equip.setPotential4(item[28]);        equip.setPotential5(item[29]);        equip.setPotential6(item[30]);
        equip.setanvil(item[31]);        equip.setHpR(item[32]);        equip.setMpR(item[33]);         equip.setPotential7(item[34]);
        equip.setFire(item[35]);        equip.setDownLevel(item[36]);        equip.setBossDamage(item[37]);
        equip.setAllDamageP(item[38]);      equip.setAllStatP(item[39]);          equip.setIgnoreWdef(item[40]);
        InventoryManipulator.addFromDrop(cm.getC(), equip, false);
        deleteAuction(uniqueid);
        cm.sendOk("아이템을 찾았습니다.");
        cm.dispose();
}

function deleteAuction(uniqueid) {
    var del = SystemSQL.getConnection().prepareStatement("DELETE FROM auction WHERE uniqueid = ?");
    var upd = MYSQL.getConnection().prepareStatement("UPDATE inventoryitems SET issale = 0 WHERE uniqueid = ?");
    del.setInt(1,uniqueid);
    del.executeUpdate();
    upd.setInt(1,uniqueid);
    upd.executeUpdate();
}
