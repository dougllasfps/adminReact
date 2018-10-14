package org.dougllasfps.application.util;

public interface Asserts {

    static boolean invalidString(String string){
        return string == null || "".equals(string.trim());
    }

    static boolean notNullButEmpty(String string){
        return string != null && string.trim().isEmpty();
    }
}
