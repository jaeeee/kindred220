/*
 * ArcStory Project
 * √÷¡÷ø¯ sch2307@naver.com
 * ¿Ã¡ÿ junny_adm@naver.com
 * øÏ¡ˆ»∆ raccoonfox69@gmail.com
 * ∞≠¡§±‘ ku3135@nate.com
 * ±Ë¡¯»´ designer@inerve.kr
 */

package client.stats;

public enum DiseaseStats implements GlobalBuffStat {
    NULL(0x0L),
    STUN(0x100000000L, -1),
    POISON(0x80000000L, 0),
    SEAL(0x40000000L, 0),
    DARKNESS(0x20000000L, 0),
    WEAKEN(0x100000L, 0),
    CURSE(0x80000L, 0),
    SLOW(0x40000L, 0),
    MORPH(0x2L, 4),
    SEDUCE(0x800L, 0),
    ZOMBIFY(0x200000000L, 4),
    REVERSE_DIRECTION(0x8000000000000000L, 0),
    POTION(0x40000000000L, 0),
    SHADOW(0x100000000000L, 3),
    BLIND(0x10000000000L, 0),
    FREEZE(0x8000000000000L, 3),
    DISABLE_POTENTIAL(0x400000000L, 3),
    TORNADO(0x40000000L, 3),
    FLAG(0x2L, 2),
    TELEPORT(0x1L, 3);
    
    private long i;
    private byte index;

    private DiseaseStats(long i) {
        this.i = i;
        this.index = 1;
    }

    private DiseaseStats(long i, boolean first) {
        this.i = i;
        this.index = 1;
    }

    private DiseaseStats(long i, int ii) {
        this.i = i;
        this.index = (byte) ii;
    }

    public boolean isFirst() {
        return index == 1;
    }

    @Override
    public int getIndex() {
        return index;
    }

    @Override
    public long getValue() {
        return i;
    }
}
