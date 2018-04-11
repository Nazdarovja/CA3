/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package test;

import javax.persistence.Persistence;
import remotefetch.RemoteFetch;

/**
 *
 * @author Orchi
 */
public class Tester {

    public static void generateSchema() {
//        Persistence.generateSchema("pu", null);
    }

    public static void main(String[] args) throws Exception {
//        generateSchema();

        RemoteFetch data = new RemoteFetch();

        //FETCH SPECIFIC
        String category = "species";
        int ID = 1;
        String res = data.get(category, ID);
        System.out.println(data.prettyPrintJSON(res));
        System.out.println("---------------------------------------------------------------");
        System.out.println("---------------------------------------------------------------");
        System.out.println("---------------------------------------------------------------");
        //FETCH ALL
        String res2 = data.get(category);
        System.out.println(data.prettyPrintJSON(res2));

    }

}
