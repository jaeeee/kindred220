/** 
 * 
 * @author Daniel
 * Universal warper for Kindred.
 * @version 1.0
 */


var maps = [100000000, 0, 310070000, 240000000, 101050020, 102000000, 101000000, 103000000, 105000000, 104000000, 230000000, 130000000, 310000000, 261000000, 105200000, 100040300,  120041600, 102040500, 105010000, 105030500, 200010302, 260020600, 220011000, 251010402, 271030100, 271030600, 273060300, 310070460, 270020500, 211060830, 273000000, 240030000, 220020600, 261020300]; 
var status = 0; 

function start() { 
    cm.sendSimple(" Did you want to go somewhere? \r\n"
    		+ "#L0# Henesys \r\n"
//    		+ "#L1# Black Map\r\n"
    		+ "#L2# Haven \r\n"
    		+ "#L3# Leafre \r\n"
    		+ "#L5# Perion \r\n"
    		+ "#L6# Ellinia \r\n"
    		+ "#L7# Kerning City \r\n"
    		+ "#L8# Sleepywood \r\n"
    		+ "#L9# Lith Harbor \r\n"
    		+ "#L10# Aquarium \r\n"
    		+ "#L11# Ereve \r\n"
    		+ "#L12# Edelstein \r\n"
    		+ "#L13# Magatia \r\n"
    		+ "#L14# Root Abyss \r\n"
    		+ "#L4# Fairy Fountain #k #l\r\n \r\n"
    		+ "#b Recommended Training Maps #k \r\n"
    		+ "#L15# Golem's Temple - Golem's Temple 4 \r\n"
    		+ "#L16# Gold Beach - Softwave Beach 1 \r\n"
    		+ "#L17# Excavation Site - Closed Area \r\n"
    		+ "#L18# Swamp - Silent Swamp \r\n"
    		+ "#L19# Cursed Temple - Forbidden Altar \r\n"
    		+ "#L20# Orbis - Garden of Darkness II \r\n"
    		+ "#L33# Alcadno Research Institute - Lab - Area C-1\r\n"
    		+ "#L21# Sunset Road - Sahel 2 \r\n" 
    		+ "#L31# Leafre - Entrance to Dragon Forest \r\n"
    		+ "#L29# Lion King's Castle - Very Tall Castle Walls \r\n"
    		+ "#L22# Ludibrium - Sky Terrace<5> \r\n"
    		+ "#L32# Ludibrium - Toy Factory <Apparatus Room> \r\n"
    		+ "#L23# Herb Town - Red-Nose Pirate Den 2 \r\n"
    		+ "#L28# Time Lane - Road of Regrets 5 \r\n"
    		+ "#L24# Knight Stronghold - Outside of Drill Hall 2 \r\n"
    		+ "#L25# Knight Stronghold - Hall of Honor \r\n"
    		+ "#L30# Twilight Perion - Twilight Perion \r\n"
    		+ "#L26# Twilight Perion - Warrior Grounds \r\n"
    		+ "#L27# Black Heaven - Black Heaven Maze 5"
    		); 
} 

function action(mode, type, selection) { 
    if (mode < 1) { 
        cm.sendOk("Ok, see you next time!"); 
        cm.dispose(); 
        return; 
    } else { 
        status++; 
    } 
    		cm.warp(maps[selection]);
            cm.dispose(); 
    }