package server.shops;

import client.MapleCharacter;
import client.MapleClient;
import java.util.List;
import packet.transfer.write.Packet;
import tools.Pair;

public abstract interface IMapleCharacterShop
{
    public final static byte HIRED_MERCHANT = 1;
    public final static byte PLAYER_SHOP = 2;
    public final static byte OMOK = 3;
    public final static byte MATCH_CARD = 4;

  public abstract String getOwnerName();

  public abstract String getDescription();

  public abstract List<Pair<Byte, MapleCharacter>> getVisitors();

  public abstract List<MapleCharacterShopItem> getItems();

  public abstract boolean isOpen();

  public abstract boolean removeItem(int paramInt);

  public abstract boolean isOwner(MapleCharacter paramMapleCharacter);

  public abstract byte getShopType();

  public abstract byte getVisitorSlot(MapleCharacter paramMapleCharacter);

  public abstract byte getFreeSlot();

  public abstract int getGameType();

  public abstract int getItemId();

  public abstract int getMeso();

  public abstract int getOwnerId();

  public abstract int getOwnerAccId();

  public abstract void setOpen(boolean paramBoolean);

  public abstract void setMeso(int paramInt);

  public abstract void addItem(MapleCharacterShopItem paramMapleCharacterShopItem);

  public abstract void removeFromSlot(int paramInt);

  public abstract void broadcastToVisitors(Packet paramPacket);

  public abstract void addVisitor(MapleCharacter paramMapleCharacter);

  public abstract void removeVisitor(MapleCharacter paramMapleCharacter);

  public abstract void removeAllVisitors(int paramInt1, int paramInt2);

  public abstract void buy(MapleClient paramMapleClient, int paramInt, short paramShort);

  public abstract void closeShop(boolean paramBoolean1, boolean paramBoolean2);

  public abstract int getMaxSize();

  public abstract int getSize();

  public abstract List<AbstractPlayerStore.BoughtItem> getBoughtItems();

  public abstract void setPassword(String paramString);

  public abstract String getPassword();

  public abstract List<Pair<String, Byte>> getMessages();
  public abstract String send();
}