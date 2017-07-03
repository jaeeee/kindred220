/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

package constants.programs;

import database.MYSQL;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

/**
 *
 * @author ±è½ÂÇö
 */
public class SpiritDel {
    public static void main(String args[]) {
        try {
          ResultSet sql = MYSQL.getConnection().prepareStatement("SELECT * FROM accounts").executeQuery();
          PreparedStatement ps = MYSQL.getConnection().prepareStatement("DELETE FROM accounts WHERE id = ?");
            while(sql.next()) {
                if (!CheckChar(sql.getInt("id"))) {
                    ps.setInt(1, sql.getInt("id"));
                    ps.executeUpdate();
                    System.out.println(sql.getString("name") + "°èÁ¤ »èÁ¦");
                }
            }
            ps.close();
            sql.close();
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }
    
    public static boolean CheckChar(int i) {
        try {
          ResultSet sql = MYSQL.getConnection().prepareStatement("SELECT * FROM characters WHERE accountid =" + i).executeQuery();
            if (sql.next()) {
               return true; 
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return false;
    }
}
