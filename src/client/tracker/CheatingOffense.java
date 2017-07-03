package client.tracker;

public enum CheatingOffense {

    FAST_HP_MP_REGEN((byte) 5, 20000, 10, (byte) 2),
    REGEN_HIGH_HP((byte) 1, 30000, 1000, (byte) 2),
    REGEN_HIGH_MP((byte) 1, 30000, 1000, (byte) 2),
    USING_FARAWAY_PORTAL((byte) 1, 60000, 100, (byte) 0),
    ETC_EXPLOSION((byte) 1, 300000),
    ATTACKING_WHILE_DEAD((byte) 1, 300000),
    USING_UNAVAILABLE_ITEM((byte) 1, 300000);

    private final byte points;
    private final long validityDuration;
    private final int autobancount;
    private byte bantype = 0; // 0 = Disabled, 1 = Enabled, 2 = DC

    public final byte getPoints() {
	return points;
    }

    public final long getValidityDuration() {
	return validityDuration;
    }

    public final boolean shouldAutoban(final int count) {
	if (autobancount == -1) {
	    return false;
	}
	return count >= autobancount;
    }

    public final byte getBanType() {
	return bantype;
    }

    public final void setEnabled(final boolean enabled) {
	bantype = (byte) (enabled ? 1 : 0);
    }

    public final boolean isEnabled() {
	return bantype >= 1;
    }

    private CheatingOffense(final byte points, final long validityDuration) {
	this(points, validityDuration, -1, (byte) 1);
    }

    private CheatingOffense(final byte points, final long validityDuration, final int autobancount) {
	this(points, validityDuration, autobancount, (byte) 1);
    }

    private CheatingOffense(final byte points, final long validityDuration, final int autobancount, final byte bantype) {
	this.points = points;
	this.validityDuration = validityDuration;
	this.autobancount = autobancount;
	this.bantype = bantype;
    }
}