package tools;

import java.io.File;

public class ScriptTool
{
  public static final String findScript(String code, String type)
  {
    String findFile = code + ".js";
    File directory = new File("scripts/" + type);
    File[] fileList = directory.listFiles();
    for (File f : fileList) {
      if (!f.isDirectory()) {
        if (findFile.equals(f.getName()))
          return f.getName();
      }
      else {
        for (File child : f.listFiles()) {
          if ((f.getName().indexOf("backup-") == -1) && 
            (findFile.equals(child.getName()))) {
            return f.getName() + "\\" + child.getName();
          }
        }
      }
    }

    return code + ".js";
  }
}