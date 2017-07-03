package client.skills;

import constants.GameConstants;
import client.MapleCharacter;
import client.items.ISkill;
import constants.ServerConstants;
import provider.MapleData;
import provider.MapleDataProviderFactory;
import provider.MapleDataTool;
import server.life.Element;
import tools.StringUtil;
import java.util.ArrayList;
import java.util.List;

public class Skill implements ISkill {

    public static final int[] skills = new int[] {4311003, 4321000, 4331002, 4331005, 4341004, 4341007};
    private int id;
    private final List<SkillStatEffect> effects = new ArrayList<SkillStatEffect>();
    private Element element;
    private byte level;
    private int animationTime, requiredSkill, masterLevel;
    private boolean action;
    private boolean invisible;
    private boolean chargeskill;
    private boolean hyper = false;
    private boolean combatOrdered = false;

    Skill(final int id) {
        super();
        this.id = id;
    }

    @Override
    public int getId() {
        return id;
    }

    public static final Skill loadFromData(final int id, final MapleData data) {
        Skill ret = new Skill(id);
        try {
            boolean isBuff = false;
            final int skillType = MapleDataTool.getInt("skillType", data, -1);
            final String elem = MapleDataTool.getString("elemAttr", data, null);
            if (elem != null) {
                ret.element = Element.getFromChar(elem.charAt(0));
            } else {
                ret.element = Element.NEUTRAL;
            }
            ret.invisible = MapleDataTool.getInt("invisible", data, 0) > 0;
            ret.masterLevel = MapleDataTool.getInt("masterLevel", data, 0);
            ret.combatOrdered = MapleDataTool.getInt("combatOrders", data, 0) > 0;
            ret.hyper = (data.getChildByPath("hyper") != null);
            // unfortunatly this is only set for a few skills so we have to do some more to figure out if it's a buff
            final MapleData effect = data.getChildByPath("effect");
            if (skillType != -1) {
                if (skillType == 2) {
                    isBuff = true;
                }
            } else {
                final MapleData action_ = data.getChildByPath("action");
                final MapleData hit = data.getChildByPath("hit");
                final MapleData ball = data.getChildByPath("ball");

                boolean action = false;
                if (action_ == null) {
                    if (data.getChildByPath("prepare/action") != null) {
                        action = true;
                    } else {
                        switch (id) {
                            case 5201001: //매그넘 샷
                            case 5221009: //마인드 컨트롤
                                action = true;
                                break;
                        }
                    }
                } else {
                    action = true;
                }
                ret.action = action;
                isBuff = effect != null && hit == null && ball == null;
                isBuff |= action_ != null && MapleDataTool.getString("0", action_, "").equals("alert2");
                switch (id) {
                    case 2301002: //힐
                    case 2111003: //포이즌 미스트
                    case 4121015: //퍼지 에어리어
                    case 22161003://리커버리 오로라
                    case 32121006://쉘터
                    case 2111002: //익스플로젼
                    case 4211001: //차크라
                    case 2121001: //빅뱅
                    case 2221001: //빅뱅
                    case 1076: //오즈의 플레임 기어
                        isBuff = false;
                        break;
                    case 80001427: //신속의 룬
                    case 80001428: //재생의 룬
                    case 80001429: //붕괴의 룬 공격
                    case 80001430: //붕괴의 룬 버프
                    case 80001431: //파멸의 룬 공격
                    case 80001432: //파멸의 룬 버프
                    case 2321001: //비숍 빅뱅  
                    case 3111011:
                    case 3210013: //데미지 리버싱
                    case 13110026: //세컨드 윈드
                    case 3211012:
                    case 1004: //몬스터 라이딩
                    case 10001004: //몬스터 라이딩
                    case 20001004: //몬스터 라이딩
                    case 20011004: //몬스터 라이딩
                    case 80001000: //몬스터 라이딩
                    case 93: //잠재 개방(모험가)
                    case 10000093: //잠재 개방(시그너스 기사단)
                    case 20000093: //잠재 개방(영웅)
                    case 20010093: //잠재 개방(영웅)
                    case 20020093: //잠재 개방(영웅)
                    case 30000093: //잠재 개방(레지스탕스)
                    case 30010093: //잠재 개방(레지스탕스)
                    case 1101013: //콤보
                    case 1310016:
                    case 1311013:
                    case 3101009:
                    case 4211003: //픽파킷
                    case 4111001: //메소업
                    case 1203: //슈퍼 트랜스폼
                    case 15111002: //트랜스폼
                    case 5111005: //트랜스폼
                    case 5121003: //슈퍼 트랜스폼
                    case 13111005: //알바트로스
                    case 21000000: //아란 콤보
                    case 21101003: //바디프레셔
                    case 5211001: //옥토퍼스[Summon] -해적
                    case 5211002: //가비오타
                    case 5220002: //서포트 옥토퍼스
                    case 5001005: //대쉬
                    case 15001003:
                    case 5211006: //homing beacon
                    case 5220011: //bullseye
                    case 5100015: //energy charge
                    case 15100004:
                    case 5121009: //speed infusion
                    case 15111005:
                    case 8006: // decent speed infusion
                    case 3101004:
                    case 3201004:
                    case 22121001: //element reset
                    case 22131001: //magic shield
                    case 22141002: //magic booster
                    case 22151002: //killer wing
                    case 22151003: //magic resist
                    case 22161002: //imprint
                    case 22171000: //maple warrior
                    case 22171004: //hero will
                    case 22181000: //onyx blessing	
                    case 22181004:
                    case 22161004:
                    case 22181003: //soul stone
                    case 2111008:
                    case 2211008:
                    case 12101005:
                    case 22131002:
                    case 4331003: //owl spirit
                    case 15101006: //spark
                    case 15111006: //spark
                    case 4321000: //tornado spin
                    case 1320009: //beholder's buff.. passive
                    case 35120000:
                    case 35001002: //TEMP. mech
                    case 9001004: // hide
                    case 4341002:
                    case 4341052:
                    case 4341054:
                    case 4330009:
                    case 4221054:
                    case 32001003: //dark aura
                    case 32120000:
                    case 32101002: //blue aura
                    case 32110000:
                    case 32101003: //yellow aura
                    case 32120001:
                    case 35101007: //perfect armor
                    case 35121006: //satellite safety
                    case 35001001: //flame
                    case 35101009:
                    case 35121005: //missile
                    case 35121054:
                    case 35121013:
                    case 35111004: //siege
                    case 33111003: //puppet ?
                    case 1211009:
                    case 1111007:
                    case 1311007: //magic,armor,atk crash
                    //   case 32121003: //twister
                    case 5111007:
                    case 5211007:
                    case 35111013:
                    case 35120014: //double lucky
                    case 5311005:
                    case 5320007:
                    case 32111006:
                    case 5120011:
                    case 5220012:
                    case 1210016:
                    case 11101022: //polling moon
                    case 11111022:
                    case 33101006: //jaguar oshi
                    case 32110007:
                    case 32110008:
                    case 32110009:
                    case 32111005:
                    case 32121005:
                    case 35121003:
                    case 35121009:
                    case 35121010:
                    case 35111005:
                    case 35111001:
                    case 35111010:
                    case 35111009:
                    case 35111011:
                    case 35111002:
                    case 3120006:
                    case 3220005:
                    case 2321052: //헤븐즈 도어
                    case 2121009: //마스터 매직
                    case 2120010: //아케인 에임
                    case 2221009: //마스터 매직
                    case 2220010: //아케인 에임
                    case 2321010: //마스터 매직
                    case 2320011: //아케인 에임
                    case 5321003: //마그네틱 앵커
                    case 5321004: //서포트 몽키 트윈스
                    //Soaring
                    case 1026: // Soaring
                    case 10001026: // Soaring
                    case 20001026: // Soaring
                    case 20011026: // Soaring
                    case 20021026:
                    case 20031026:
                    case 20041026:
                    case 30001026:
                    case 30011026:
                    case 50001026:
                    case 60001026:
                    case 60011026:
                    /* 은월 */ 
                    case 20050286:
                    case 25111209:
                    case 25111211:
                    case 25121209:
                    /* 루미너스 */ 
                    case 20040216: // 선파이어
                    case 20040217: // 이클립스
                    case 20040219: // 이퀄리브리엄
                    case 20040220: // 이퀄리브리엄
                    case 27001004: // 익스텐드 마나
                    case 27100003: // 블레스 오브 다크니스
                    case 27101202: // 보이드 프레셔
                    case 27111004: // 안티 매직쉘
                    case 27111005: // 라이트쉐도우 가드
                    case 27111006: // 포틱 메디테이션
                    case 27110007: // 라이프 타이달
                    case 27121006: // 다크니스 소서리
                    case 27111202: // 녹스피어
                    case 27121202: // 아포칼립스
                    case 27101100: // 실피드 랜서
                    case 27111100: // 스펙트럴 라이트
                    case 27121100: // 라이트 리플렉션
                    case 27111303: // 데스 사이드
                    case 27121303: // 앱솔루트 킬
                    case 27121005: // 다크 크레센도
                    case 27121054: // 메모라이즈
                    case 21121054: // 콤보 언리미티드 (아란)
                    // 카이저
                    case 60001216: // 리셔플스위치 : 방어모드
                    case 60001217: // 리셔플스위치 : 공격모드
                    case 61101002: // 윌 오브 소드
                    case 61110211: // 윌 오브 소드 (트랜스피규레이션)
                    case 61120007: // 어드밴스드 윌 오브 소드
                    case 61121217: // 어드밴스드 윌 오브 소드 (트랜스피규레이션)
                    case 61121009: // 로버스트 아머
                    case 61111002: // 페트리파이드
                    case 2311011:
                    case 61111003: // 리게인 스트랭스
                    case 61111004: // 카탈라이즈
                    case 61121014: // 노바의 용사
                    case 61111008: // 파이널 피규레이션 (3차)
                    case 61120008: // 파이널 피규레이션 (4차)
                    // 엔젤릭 버스터
                    case 60011216: // 석세서
                    case 60011219: // 소울 컨트랙트
                    case 65000003: // 어피니티 1
                    case 65100005: // 어피니티 2
                    case 65110006: // 어피니티 3
                    case 65120006: // 어피니티 4
                    case 65001002: // 리리컬 크로스
                    case 65101002: // 파워 트랜스퍼
                    case 65101006: // 스팅 익스플로전 (폭발)
                    case 65101100: // 스팅 익스플로전
                    case 65111003: // 콜 오브 에인션트
                    case 65111004: // 아이언 로터스
                    case 65111100: // 소울 시커
                    case 65111007: // 소울 시커
                    case 65121004: // 소울 게이즈
                    case 65121009: // 노바의 용사
                    case 31011000:
                    case 31201000:
                    case 31211000:
                    case 31221000:
                    case 5321054:
                    case 15121004:
                    case 15121054:
                    case 61121054:
                    case 1121054:
                    case 1321054:
                    case 2121054:
                    case 1221054:
                    case 31121054:
                    case 2221054:
                    case 2321054:
                    case 15111022:
                    case 15120003:
                    case 2201009:
                    case 33111011: // 드로우백
                    case 100000276: //래피드 타임
                    case 100000277: //래피드 타임
                    case 101120109: //이뮨 배리어
                        isBuff = true;
                        break;
                }
            }
            ret.chargeskill = data.getChildByPath("keydown") != null;
            if (data.getChildByPath("level") != null) {
                int i = 1;
                for (MapleData level : data.getChildByPath("level")) {
                    ret.effects.add(SkillStatEffect.loadSkillEffectFromData(level, id, isBuff, i));
                    i++;
                }
            } else if (data.getChildByPath("common") != null) {
                int maxlevel = MapleDataTool.getIntConvert("maxLevel", data.getChildByPath("common"));
                for (int i = 1; i <= maxlevel; i++) {
                    ret.effects.add(SkillStatEffect.loadSkillEffectFromData(data.getChildByPath("common"), id, isBuff, i));
                }
            }
            final MapleData reqDataRoot = data.getChildByPath("req");
            ret.animationTime = 0;
            if (effect != null) {
                for (final MapleData effectEntry : effect) {
                    ret.animationTime += MapleDataTool.getIntConvert("delay", effectEntry, 0);
                }
            }
        } catch (Exception ex) {
            if (ServerConstants.realese) {
                ex.printStackTrace();
            }
        }
        return ret;
    }

    public SkillStatEffect makeIncreasedEffect(final int skillid, final int levels) {
        MapleData data = MapleDataProviderFactory.getDataProvider(MapleDataProviderFactory.fileInWZPath("Skill.wz")).getData(StringUtil.getLeftPaddedStr(String.valueOf(skillid / 10000), '0', 3) + ".img").getChildByPath("skill/" + StringUtil.getLeftPaddedStr(String.valueOf(skillid), '0', 7));
        Skill ret = new Skill(id);
        boolean isBuff = false;
        final int skillType = MapleDataTool.getInt("skillType", data, -1);
        final String elem = MapleDataTool.getString("elemAttr", data, null);
        if (elem != null) {
            ret.element = Element.getFromChar(elem.charAt(0));
        } else {
            ret.element = Element.NEUTRAL;
        }
        ret.invisible = MapleDataTool.getInt("invisible", data, 0) > 0;
        ret.masterLevel = MapleDataTool.getInt("masterLevel", data, 0);

        // unfortunatly this is only set for a few skills so we have to do some more to figure out if it's a buff
        final MapleData effect = data.getChildByPath("effect");
        if (skillType != -1) {
            if (skillType == 2) {
                isBuff = true;
            }
        } else {
            final MapleData action_ = data.getChildByPath("action");
            final MapleData hit = data.getChildByPath("hit");
            final MapleData ball = data.getChildByPath("ball");

            boolean action = false;
            if (action_ == null) {
                if (data.getChildByPath("prepare/action") != null) {
                    action = true;
                } else {
                    switch (id) {
                        case 5201001:
                        case 5221009:
                            action = true;
                            break;
                    }
                }
            } else {
                action = true;
            }
            ret.action = action;
            isBuff = effect != null && hit == null && ball == null;
            isBuff |= action_ != null && MapleDataTool.getString("0", action_, "").equals("alert2");
            switch (id) {
                case 2301002: // heal is alert2 but not overtime...
                case 2111003:
                case 4121015: //퍼지 에어리어
                case 22161003:
                case 32121006:
                case 11076:
                case 2111002: // explosion
                case 4211001: // chakra
                case 2121001: // Big bang
                case 2221001: // Big bang
                case 1076:
                    isBuff = false;
                    break;
                case 80001427: //신속의 룬
                case 80001428: //재생의 룬
                case 80001429: //붕괴의 룬1
                case 80001430: //붕괴의 룬2
                case 80001431: //파멸의 룬1
                case 80001432: //파멸의 룬2
                case 2321052: // 헤븐즈 도어 
                case 2321001: // 비숍 빅뱅
                case 3210013: //데미지 리버싱
                case 13110026: //세컨드 윈드
                case 1004: // monster riding
                case 10001004:
                case 20001004:
                case 20011004:
                case 80001000:
                case 93:
                case 10000093:
                case 20000093:
                case 20010093:
                case 20020093:
                case 30000093:
                case 30010093:
                case 1101013: // combo
                case 1310016:
                case 1311013:
                case 3101009:
                case 4211003: // pickpocket
                case 4111001: // mesoup
                case 15111002: // Super Transformation
                case 5111005: // Transformation
                case 5121003: // Super Transformation
                case 13111005: // Alabtross
                case 21000000: // Aran Combo
                case 21101003: // Body Pressure
                case 5211001: // Pirate octopus summon
                case 5211002:
                case 5220002: // wrath of the octopi
                case 5001005: //dash
                case 15001003:
                case 5211006: //homing beacon
                case 5220011: //bullseye
                case 5100015: //energy charge
                case 15100004:
                case 5121009: //speed infusion
                case 15111005:
                case 8006: // decent speed infusion 
                case 3101004:
                case 3201004:
                case 3111011:
                case 3211012:
                case 2111008:
                case 2211008:
                case 12101005:
                case 22131002:
                case 22121001: //element reset
                case 22131001: //magic shield
                case 22141002: //magic booster
                case 22151002: //killer wing
                case 22151003: //magic resist
                case 22161002: //imprint
                case 22171000: //maple warrior
                case 22171004: //hero will
                case 22181000: //onyx blessing
                case 22181004:
                case 22161004:
                case 22181003: //soul stone
                //case 22121000:
                //case 22141003:
                //case 22151001:
                //case 22161002:
                case 4331003: //owl spirit
                case 15101006: //spark
                case 15111006: //spark
                case 4321000: //tornado spin
                case 1320009: //beholder's buff.. passive
                case 35120000:
                case 35001002: //TEMP. mech
                case 9001004: // hide
                case 4341002:

                case 32001003: //dark aura
                case 32120000:
                case 32101002: //blue aura
                case 32110000:
                case 32101003: //yellow aura
                case 32120001:
                case 35101007: //perfect armor
                case 35121006: //satellite safety
                case 35001001: //flame
                case 35101009:
                case 35121005: //missile
                case 35121054:
                case 35121013:
                case 35111004: //siege
                case 33111003: //puppet ?
                case 1211009:
                case 1111007:
                case 1311007: //magic,armor,atk crash
                // case 32121003: //twister
                case 5111007:
                case 5211007:
                case 5311005:
                case 5320007:
                case 35111013: //dice
                case 35120014: //double lucky
                case 32111006:
                case 5120011:
                case 5220012:
                case 1210016:
                case 11101022: //폴링 문
                case 11111022: //라이징 선
                case 33101006: //jaguar oshi
                case 32110007:
                case 32110008:
                case 32110009:
                case 32111005:
                case 32121005:

                case 35121003:
                case 35121009:
                case 35121010:
                case 35111005:
                case 35111001:
                case 35111010:
                case 35111009:
                case 35111011:
                case 35111002:
                case 21121054:
                case 3120006:
                case 3220005:

                case 2121009:
                case 2120010:
                case 2221009:
                case 2220010:
                case 2321010:
                case 2320011:
                case 5321003:
                case 5321004:
                case 80001089:

                case 13120007:
                case 13111024:

                //Soaring
                case 1026: // Soaring
                case 10001026: // Soaring
                case 20001026: // Soaring
                case 20011026: // Soaring
                case 20021026:
                case 20031026:
                case 20041026:
                case 30001026:
                case 30011026:
                case 50001026:
                case 60001026:
                case 60011026:

                // 은월
                case 20050286:
                case 25111209:
                case 25111211:
                case 25121209:

                // 루미너스
                case 20040216: // 선파이어
                case 20040217: // 이클립스
                case 20040219: // 이퀄리브리엄
                case 20040220: // 이퀄리브리엄
                case 27001004: // 익스텐드 마나
                case 27100003: // 블레스 오브 다크니스
                case 27101202: // 보이드 프레셔
                case 27111004: // 안티 매직쉘
                case 27111005: // 라이트쉐도우 가드
                case 27111006: // 포틱 메디테이션
                case 27110007: // 라이프 타이달
                case 27121006: // 다크니스 소서리
                case 27111202: // 녹스피어
                case 27121202: // 아포칼립스
                case 27101100: // 실피드 랜서
                case 27111100: // 스펙트럴 라이트
                case 27121100: // 라이트 리플렉션
                case 27111303: // 데스 사이드
                case 27121303: // 앱솔루트 킬
                case 27121054: // 메모라이즈
                // 카이저
                case 60001216: // 리셔플스위치 : 방어모드
                case 60001217: // 리셔플스위치 : 공격모드
                case 61101002: // 윌 오브 소드
                case 61110211: // 윌 오브 소드 (트랜스피규레이션)
                case 61120007: // 어드밴스드 윌 오브 소드
                case 61121217: // 어드밴스드 윌 오브 소드 (트랜스피규레이션)
                case 61121009: // 로버스트 아머
                case 61111002: // 페트리파이드
                case 2311011:
                case 3221014:
                case 61111003: // 리게인 스트랭스
                case 61111004: // 카탈라이즈
                case 61121014: // 노바의 용사
                case 61111008: // 파이널 피규레이션 (3차)
                case 61120008: // 파이널 피규레이션 (4차)
                // 엔젤릭 버스터
                case 60011216: // 석세서
                case 60011219: // 소울 컨트랙트
                case 65000003: // 어피니티 1
                case 65100005: // 어피니티 2
                case 65110006: // 어피니티 3
                case 65120006: // 어피니티 4
                case 65001002: // 리리컬 크로스
                case 65101002: // 파워 트랜스퍼
                case 65101006: // 스팅 익스플로전 (폭발)
                case 65101100: // 스팅 익스플로전
                case 65111003: // 콜 오브 에인션트
                case 65111004: // 아이언 로터스
                case 65111100: // 소울 시커
                case 65111007: // 소울 시커
                case 65121004: // 소울 게이즈
                case 65121009: // 노바의 용사
                case 2201009:
                case 33111011: // 드로우백
                case 100000276: //래피드 타임
                case 100000277: //래피드 타임
                case 101120109: //이뮨 배리어
                    isBuff = true;
                    break;
            }
        }
        return SkillStatEffect.loadSkillEffectFromData(data.getChildByPath("common"), id, isBuff, levels);

    }

    @Override
    public SkillStatEffect getEffect(final int level) {
        if (effects.size() < level) {
            return makeIncreasedEffect(id, level);
        }
        return effects.get(level - 1);
    }

    @Override
    public SkillStatEffect getEffect(final MapleCharacter chr, final int level) {
        if (effects.size() < level) {
            return makeIncreasedEffect(id, level);
        }
        return effects.get(level - 1);
    }

    @Override
    public boolean canCombatOrdered() {
        return combatOrdered;
    }

    @Override
    public boolean getAction() {
        return action;
    }

    @Override
    public boolean isChargeSkill() {
        return chargeskill;
    }

    @Override
    public boolean isInvisible() {
        return invisible;
    }

    @Override
    public boolean hasRequiredSkill() {
        return level > 0;
    }

    @Override
    public int getRequiredSkillLevel() {
        return level;
    }

    @Override
    public int getRequiredSkillId() {
        return requiredSkill;
    }

    @Override
    public byte getMaxLevel() {
        return (byte) effects.size();
    }

    @Override
    public Element getElement() {
        return element;
    }

    @Override
    public int getAnimationTime() {
        return animationTime;
    }

    @Override
    public int getMasterLevel() {
        return masterLevel;
    }

    @Override
    public boolean isBeginnerSkill() {
        if (id >= 10000000 || id <= 999999) {
            if (id / 10000 == 1000 || id / 10000 == 2000 || id / 10000 == 2001 || id / 10000 == 2002 || id / 10000 == 2003 || id / 10000 == 3000 || id / 10000 == 3001 || id / 10000 == 3002 || id / 10000 == 5000 || id / 10000 == 2004 || id / 10000 == 6000 || id / 10000 == 6001) {
                return true;
            }
        }
        return false;
    }
   
    public boolean haveMasterLevel() {
        MapleData data = MapleDataProviderFactory.getDataProvider(MapleDataProviderFactory.fileInWZPath("Skill.wz")).getData(StringUtil.getLeftPaddedStr(String.valueOf(id / 10000 == 1 ? id : id / 10000), '0', 3) + ".img").getChildByPath("skill/" + StringUtil.getLeftPaddedStr(String.valueOf(id), '0', 7));
        final int masterLevel = MapleDataTool.getInt("masterLevel", data, 0);
        if (masterLevel > 0) {
            return true;
        } else {
            return false;
        }
    }

    @Override
    public boolean canBeLearnedBy(int job) {
        int jid = job;
        int skillForJob = id / 10000;
        if (skillForJob == 2001 && GameConstants.isEvan(job)) {
            return true; //special exception for evan -.-
        }
        if (job < 1000) {
            if (jid / 100 != skillForJob / 100 && skillForJob / 100 != 0) { // wrong job
                return false;
            }
        } else {
            if (jid / 1000 != skillForJob / 1000 && skillForJob / 1000 != 0) { // wrong job
                return false;
            }
        }
        if (GameConstants.isAdventurer(skillForJob) && !GameConstants.isAdventurer(job)) {
            return false;
        } else if (GameConstants.isKOC(skillForJob) && !GameConstants.isKOC(job)) {
            return false;
        } else if (GameConstants.isAran(skillForJob) && !GameConstants.isAran(job)) {
            return false;
        } else if (GameConstants.isEvan(skillForJob) && !GameConstants.isEvan(job)) {
            return false;
        }
        if ((skillForJob / 10) % 10 > (jid / 10) % 10) { // wrong 2nd job
            return false;
        }
        if (skillForJob % 10 > jid % 10) { // wrong 3rd/4th job
            return false;
        }
        return true;
    }

    @Override
    public boolean isFourthJob() {
        //정리할 필요 있음
        switch (id) {
            case 1120012:
            case 1210016:
            case 1320011:
            case 2121009:
            case 2221009:
            case 2321010:
            case 3120010:
            case 3120011:
            case 3220009:
            case 3120012:
            case 3220010:
            case 3220012:
            case 5120011:
            case 5220012:
            case 5120012:
            case 5220014:
            case 4311003:
            case 4321002:
            case 4321004:
            case 4320005:
            case 4331000:
            case 4330001:
            case 4331006:
            case 4330007:
            case 4330008:
            case 4340010:
            case 4340012:
            case 33121005:
            case 33120010:
            case 21120011:
            case 23120011:
            case 22181004:
            case 22161001:
            case 22160000:
            case 22161002:
            case 22161003:
            case 22161004:
            case 22161005:
            case 22151002:
            case 22150004:
            case 22151001:
            case 22151003:
            case 22140000:
            case 22141001:
            case 22141002:
            case 22141004:
            case 22131002:
            case 22131000:
            case 22131001:
            case 22120001:
            case 22120002:
            case 22121000:
            case 51120000:
                return false;
        }
        if (id >= 90000000 && id <= 99999999) {
            return true;
        }
        if (isBeginnerSkill()) {
            return false;
        }
        if ((getMaxLevel() <= 15 && !invisible && getMasterLevel() <= 0)) {
            return false;
        }
        if (((id % 100000) / 10000) >= 2 && ((id % 100000) / 10000) <= 8) {
            return true;
        }
        switch (id) {
            case 101000101:
            case 101100201:
            case 101110200:
            case 101110102:
            case 101100101:
            case 101120202:
            case 101110203:
            case 101120204:
            case 101120109:
            case 101120104:
            case 101120110:
            case 101120102:
            case 101120207:
                return true;
        }
        return false;
    }
    
    public static final boolean isMasterSkill(final int skill) {
        for (int i : skills) {
            if (i == skill) {
                return true;
            }
        }
        return false;
    }

    public int HyperReq() {
        MapleData data = MapleDataProviderFactory.getDataProvider(MapleDataProviderFactory.fileInWZPath("Skill.wz")).getData(StringUtil.getLeftPaddedStr(String.valueOf(id / 10000 == 1 ? id : id / 10000), '0', 3) + ".img").getChildByPath("skill/" + StringUtil.getLeftPaddedStr(String.valueOf(id), '0', 7));
        final int reqLev = MapleDataTool.getInt("reqLev", data, 0);
        return reqLev;
    }
    
    @Override
    public boolean CheckMasterLevel() {
        switch (id) {
            case 1120012:
            case 1320011:
            case 4340010:
            case 4340012:
            case 5120011:
            case 5120012:
            case 5220012: 
            case 5220014:
            case 5320007:
            case 5321004:
            case 5321006:
            case 21120011:
            case 21120014:
            case 22171004:
            case 23121008:
            case 33120010:
                return false;
            case 5321003:
                return true;
        }
        if (ishyper() || haveMasterLevel()) {
            return true;
        } 
        return false;
    }
    
    public boolean ishyper() {
        return hyper;
    }
}
