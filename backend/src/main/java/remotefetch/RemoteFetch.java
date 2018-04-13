package remotefetch;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.google.gson.JsonElement;
import com.google.gson.JsonParser;
import exceptions.NotFoundException;
import java.io.IOException;
import java.net.HttpURLConnection;
import java.net.MalformedURLException;
import java.net.ProtocolException;
import java.net.URL;
import java.util.Scanner;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.swing.text.html.HTML;

/**
 *
 * @author Alexander W. Hørsted-Andersen <awha86@gmail.com>
 */
public class RemoteFetch {

    String baseUrl = "https://swapi.co/api/";

    public String prettyPrintJSON(String uglyJSONString) {
        Gson gson = new GsonBuilder().setPrettyPrinting().create();
        JsonParser jp = new JsonParser();
        JsonElement je = jp.parse(uglyJSONString);
        return gson.toJson(je);
    }

    private String fetch(String url) {

        //https://swapi.co/api/people/1
        //testing in Tester.java
        URL address;
        try {
            address = new URL(url);
        } catch (MalformedURLException ex) {
            throw new NotFoundException("URL not found");
        }
        HttpURLConnection conn;
        try {
            conn = (HttpURLConnection) address.openConnection();
        } catch (IOException ex) {
            throw new NotFoundException("Unable to connect");
        }

        try {
            conn.setRequestMethod("GET");
        } catch (ProtocolException ex) {
            throw new NotFoundException("");
        }
        conn.setRequestProperty("Accept", "application/json");
        conn.setRequestProperty("User-Agent", "server");

        Scanner scan = new Scanner(conn.getInputStream());
        String jsonStr = null;
        if (scan.hasNext()) {
            jsonStr = scan.nextLine();
        }
        scan.close();
        return jsonStr;
    }

    /**
     * 
     * @param category
     * @return
     */
    public String get(String category) {
        String URL = baseUrl + category.toLowerCase();
        return fetch(URL);
    }
    
    /**
     * 
     * @param category
     * @param ID
     * @return
     */
    public String get(String category, int ID){
        String URL = baseUrl + category.toLowerCase() + "/" + ID;
        return fetch(URL);
    }

}
