package remotefetch;

import java.io.IOException;
import java.net.HttpURLConnection;
import java.net.MalformedURLException;
import java.net.URL;
import java.util.Scanner;

/**
 *
 * @author Alexander W. Hørsted-Andersen <awha86@gmail.com>
 */
public class Test {

    public String test() throws MalformedURLException, IOException {

        URL url = new URL("https://swapi.co/api/people/1");
        HttpURLConnection conn = (HttpURLConnection) url.openConnection();

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
        Test test = new Test();
        String res = test.test();
        System.out.println(res);
    }
}
