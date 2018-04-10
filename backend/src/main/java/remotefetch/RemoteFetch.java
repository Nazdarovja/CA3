package remotefetch;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.google.gson.JsonElement;
import com.google.gson.JsonParser;
import java.io.IOException;
import java.net.HttpURLConnection;
import java.net.MalformedURLException;
import java.net.URL;
import java.util.Scanner;

/**
 *
 * @author Alexander W. Hørsted-Andersen <awha86@gmail.com>
 */
public class RemoteFetch {

    public String prettyPrintJSON(String uglyJSONString) {
        Gson gson = new GsonBuilder().setPrettyPrinting().create();
        JsonParser jp = new JsonParser();
        JsonElement je = jp.parse(uglyJSONString);
        return gson.toJson(je);
    }

    public String fetch(String url) throws MalformedURLException, IOException {

        //https://swapi.co/api/people/1
        URL address = new URL(url);
        HttpURLConnection conn = (HttpURLConnection) address.openConnection();

        conn.setRequestMethod("GET");
        conn.setRequestProperty("Accept", "application/json");
        conn.setRequestProperty("User-Agent", "");

        Scanner scan = new Scanner(conn.getInputStream());
        String jsonStr = null;
        if (scan.hasNext()) {
            jsonStr = scan.nextLine();
        }
        scan.close();
        return jsonStr;
    }

    public static void main(String[] args) throws IOException {
        RemoteFetch test = new RemoteFetch();

        String url = "https://swapi.co/api/";
        String res = test.fetch(url);
        String pretty = test.prettyPrintJSON(res);
        System.out.println(pretty);
    }
}
