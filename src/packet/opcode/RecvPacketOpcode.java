/*
 * ArcStory Project
 * 최주원 sch2307@naver.com
 * 이준 junny_adm@naver.com
 * 우지훈 raccoonfox69@gmail.com
 * 강정규 ku3135@nate.com
 * 김진홍 designer@inerve.kr
 */

package packet.opcode;

import tools.IniFileProcess;
import java.io.File;
import static packet.opcode.SendPacketOpcode.values;

public enum RecvPacketOpcode {
    // 퐁
    PONG(false),
    
    // 로그인
    LOGIN_PASSWORD(false),
    SERVERLIST_REQUEST,
    CHARLIST_REQUEST,
    SERVERSTATUS_REQUEST,
    CHECK_CHAR_NAME,
    CREATE_CHAR,
    SET_FREE_JOB,
    CLIENT_ERROR,
    DELETE_CHAR(false),
    CHAR_SELECT,
    AUTH_LOGIN,
    AUTH_LOGIN_WITH_SPW,
    ONLY_REG_SECOND_PASSWORD,
    REGISTER_IDCODE,
    REG_SECOND_PASSWORD,
    AUTH_SECOND_PASSWORD,
    RSA_KEY(false),
    REGISTER_IDCODE1,
    REGISTER_IDCODE2,
    NEW_CONNECTION(false),
    
    // 채널
    PLAYER_LOGGEDIN(false),
    CHANGE_MAP,
    CHANGE_CHANNEL,
    DRESSUP_TIME,
    ENTER_CASH_SHOP,
    ENTER_ASWAN_FIELD,
    ENTER_ASWAN,
    MOVE_PLAYER,
    CANCEL_CHAIR,
    USE_CHAIR,
    CLOSE_RANGE_ATTACK,
    RANGED_ATTACK,
    MAGIC_ATTACK,
    PASSIVE_ENERGY,
    TAKE_DAMAGE,
    GENERAL_CHAT,
    CLOSE_CHALKBOARD,
    FACE_EXPRESSION,
    USE_ITEMEFFECT,
    WHEEL_OF_FORTUNE,
    MONSTER_BOOK_COVER,
    NPC_TALK,
    NPC_TALK_MORE,
    NPC_SHOP,
    STORAGE,
    USE_HIRED_MERCHANT,
    QUICK_SLOT,
    MERCH_ITEM_STORE,
    DUEY_ACTION,
    ITEM_SORT,
    ITEM_GATHER,
    ITEM_MOVE,
    USE_ITEM,
    CANCEL_ITEM_EFFECT,
    USE_SUMMON_BAG,
    MOVE_BAG,
    SWITCH_BAG,
    PET_FOOD,
    USE_MOUNT_FOOD,
    USE_SCRIPTED_NPC_ITEM,
    USE_CASH_ITEM,
    USE_EDITIONAL_SCROLL,
    USE_PET_LOOT,
    USE_CATCH_ITEM,
    USE_SKILL_BOOK,
    USE_RETURN_SCROLL,
    USE_MAGNIFY_GLASS,
    USE_UPGRADE_SCROLL,
    USE_STAMP,
    USE_EDITIONAL_STAMP,
    USE_BAG,
    USE_SOUL_SCROLL,
    USE_SOUL_ENCHANTER,
    DISTRIBUTE_AP,
    ROOM_CHANGE,
    DF_COMBO,
    HYPER_RECV,
    ZERO_TAG,
    ZERO_OPEN,
    WEAPON_ZERO,
    ZERO_SHOCKWAVE,
    WILL_OF_SOWRD_COMBO,
    AUTO_ASSIGN_AP,
    HEAL_OVER_TIME,
    HEAL_OVER_TIME_FROM_POT,
    DISTRIBUTE_SP,
    SPECIAL_SKILL,
    CANCEL_BUFF,
    SKILL_EFFECT,
    MESO_DROP,
    GIVE_FAME,
    CHAR_INFO_REQUEST,
    SPAWN_PET,
    REGISTER_PET_BUFF,
    CHANGE_MAP_SPECIAL,
    USE_INNER_PORTAL,
    TROCK_ADD_MAP,
    QUEST_ACTION,
    SKILL_MACRO,
    SUB_SUMMON_ACTION,
    MYSTERY_BOOK,
    REWARD_ITEM,
    MAKER_SKILL,
    USE_TREASUER_CHEST,
    PARTYCHAT,
    WHISPER,
    MESSENGER,
    PLAYER_INTERACTION,
    PARTY_OPERATION,
    DENY_PARTY_REQUEST,
    GUILD_OPERATION,
    DENY_GUILD_REQUEST,
    BUDDYLIST_MODIFY,
    NOTE_ACTION,
    USE_DOOR,
    USE_MECH_DOOR,
    CHANGE_KEYMAP,
    ENTER_MTS,
    ALLIANCE_OPERATION,
    DENY_ALLIANCE_REQUEST,
    CYGNUS_SUMMON,
    ARAN_GAIN_COMBO,
    ARAN_LOSE_COMBO,
    BLESS_OF_DARKNES,
    BBS_OPERATION,
    TRANSFORM_PLAYER,
    MOVE_PET,
    PET_CHAT,
    PET_COMMAND,
    PET_LOOT,
    PET_AUTO_POT,
    MOVE_SUMMON,
    SUMMON_ATTACK,
    DAMAGE_SUMMON,
    SUB_SUMMON,
    REMOVE_SUMMON,
    MOVE_LIFE,
    AUTO_AGGRO,
    FRIENDLY_DAMAGE,
    MONSTER_BOMB,
    HYPNOTIZE_DMG,
    NPC_ACTION,
    ITEM_PICKUP,
    DAMAGE_REACTOR,
    SNOWBALL,
    LEFT_KNOCK_BACK,
    COCONUT,
    CS_UPDATE,
    BUY_CS_ITEM,
    COUPON_CODE,
    MAPLETV,
    MOVE_DRAGON,
    USE_SPECIAL_SCROLL,
    USE_EQUIP_SCROLL,
    USE_POTENTIAL_SCROLL,
    USE_MAGNIFYING_GLASS,
    USE_REBIRTH_SCROLL,
    USE_MEMORIAL_CUBE,
    USE_SILVER_KARMA,
    GOLDEN_HAMMER,
    HAMMER_EFFECT,
    EQUIPPED_SKILL,
    STEEL_SKILL,
    STEEL_SKILL_CHECK,
    HEAD_TITLE,
    MEMBERSHOP,
    START_GATHER,
    END_GATHER,
    ITEMPOT_PUT,
    ITEMPOT_REMOVE,
    ITEMPOT_FEED,
    ITEMPOT_CURE,
    PROFESSIONINFO_REQUEST,
    PROFESSION_MAKE,
    PROFESSION_MAKE_EFFECT,
    PROFESSION_MAKE_SOMETHING,
    SPAWN_EXTRACTOR,EXPEDITION_OPERATION,
    USE_RECIPE,
    DISCONNECT,
    NEW_CONNECT,
    INNER_CIRCULATOR,
    VOYD_PRESSURE,
    MOVE_ANDROID,
    ANDROID_FACE_EXPRESSION,
    SHIP_REQUEST,
    AGI_BUFF,
    MECH_CANCEL,
    MAGNETIC_DAMAGE,
    REQUEST_ASWAN_DEAD,
    FOLLOW_REQUEST,
    FOLLOW_REPLY,
    AUTO_FOLLOW_REPLY,
    WARP_TO_STARPLANET,
    RETRACE_MECH,
    SOUL_ENCHANTER,
    ZERO_WEAPONINFO,
    ZERO_UPGRADE,
    ZERO_CHAT,
    USE_BLACK_CUBE,
    ZERO_CLOTHES,
    ZERO_SCROLL,
    ZERO_SCROLL_START,
    MAPLE_GUIDE,
    NEXON_LOGIN,
    USE_SOUL_WEAPON,USE_SOUL,
    ARROW_FLATTER_ACTION,
    ORBITAL_FLAME,
    CHILLING_STEP,
    DMG_FLAME,
    ASURA_DMG,
    STARDUST,
    DUEY_HANDLER,
    MAPLE_CHAT,
    THE_SID_ITEM,
    FISHING,
    INNER_CHANGE,
    CROSS_CHAPTER,
    GAME_END,
    크리티아스,
    HOLLY,
    DRESS_UP,
    AUCTION,
    RUNE_TOUCH,
    RUNE_USE,
    EQUIP_UPGRADE_SYSTEM,
    PROCESS_CHECK,
    EVOLVING_ACTION,
    STAR_PLANET_RANK;

    private int value;
    private boolean checkState;
    private static boolean loaded = false;

    static {
        loadOpcode();
    }
    
    public static void loadOpcode() {
        if (!loaded) {
            try {
                IniFileProcess storage = new IniFileProcess(new File("Settings/Packet/RecvPacket.ini"));
                for (RecvPacketOpcode packet : RecvPacketOpcode.values()) {
                    int value = -2;
                    try {
                        if (storage.getString("Receive", packet.name()) != null) {
                            value = Integer.parseInt(storage.getString("Receive", packet.name()));
                        }
                    } catch (NumberFormatException error) {
                        error.printStackTrace();
                    }
                    packet.setValue(value);
                }
            } catch (Exception error) {
                error.printStackTrace();
            } finally {
                loaded = true;
            }
        }
    }
    
    public static void reloadOpcode() {
        loaded = false;
        loadOpcode();
    }
    
    private RecvPacketOpcode() {
        this.checkState = true;
    }
    
    private RecvPacketOpcode(boolean state) {
        this.checkState = state;
    }

    public void setValue(int value) {
        this.value = value;
    }

    public int getValue() {
        return value;
    }
    
    public static String getOpcodeName(int value) {

        for (RecvPacketOpcode opcode : values()) {
            if (opcode.getValue() == value) {
                return opcode.name();
            }
        }
        return "UNKNOWN";
    }
    
    public boolean isNeedChecking() {
        return checkState;
    }
}