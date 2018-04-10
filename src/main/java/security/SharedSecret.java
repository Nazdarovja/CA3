/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package security;

import java.security.SecureRandom;

/**
 *
 * @author Orchi
 */
/* This generates a secure random per execution of the server
 * A server restart, will generate a new key, making all existing tokens invalid
 * For production (and if a load-balancer is used) come up with a persistent key strategy */
public class SharedSecret {
    private static byte[] secret;
    public static byte[] getSharedKey() {
        System.out.println("******************* IMPORTANT ******************'");
        System.out.println("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
        System.out.println("**** REMOVE FIXED SECRET BEFORE PRODUCTION ******");
        System.out.println("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
        System.out.println("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
        //REMOVE BEFORE PRODUCTION
        if(true){
            return "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA".getBytes();
        }
        
        if (secret == null) {
            secret = new byte[32];
            new SecureRandom().nextBytes(secret);
        }
        return secret;
    }
}

/*
    What is the advantages of having a Token with the provided information?
    On the client?
    - the user's username and password dont need to be hashed every time the user needs to be authenticated. 
    The token will be the authentication tool after the first "authentication".
    On the server?
    - You dont need to store any data about the users login information nor the hashed version of the user's password.
    Why is it not possible for hackers to create a similar Token, and use with our system?
    - ?..(Another because) Because the signature has the hashed version of the header and payload - which means if any1 tampers with either header or payload
    the token will be invalid. 
    How should Tokens “always” be transported?
    - with the 2 dots formation - encoded, - header,payload,signature

    What is the advantage (if any) for a REST-based API of using JWT’s compared to session Cookies
    - JSON Web Tokens (JWTs) are lightweight and can easily be used across platforms and languages.
    They are a clever way to authenticate & authorize without sessions.
    What is the disadvantage (if any) with the implemented JWT-solution
    What will a client (Single Page WEB, Mobile App, etc.) have to do in order to use this API

    pros and cons jwt token:

    Pros

    No Database Table : 

    - This implies fewer DB queries, which implies faster response time. 
    In case you are using paid services like DynamoDb that charge per query basis, JWT might reduce the costs marginally.
    But these can be resolved using tools like Redis in case of sessions

    Simpler to use if careful : 

    - If your architecture doesn’t user client Sessions and your security basics are clear,
    the development time in case of JWT is faster using the existing libraries.

    Used across services : 

    - You can have one authorization server that deals with the Login/Registration and generates the token,
    all the subsequent requests will need not have to go to the authorization server as the only the Auth-server
    will have have the private key, and rest of the severs will have the public-key to verify the signature. 
    This is really useful in case of corporate systems where in the authorization server is in a secure environment.
    e.g. a user needs to be connected to the intranet to login but once done, the public servers can verify and proceed on.
    Similar setup can be used for OAuth implementation.
    The best part is that there is no connection between the the auth-server and the rest of the 
    servers other than the pre-defined public key.

    Cons
    
    Compromised Secret Key : 

    - The best and the worst thing about JWT is that it relies on just one Key. 
    Consider that the Key is leaked by a careless or a rogue developer/administrator, the whole system is compromised! 
    The attacker(who has access to the Key) can easily access all user data if he has the user-id which can be easily acquired.
    The only way to recover from this point is to generate a new Key(Key-pair) that will be used across systems here on.
    This would me all the existing client tokens are invalidated and each user would have to login again. 
    Image one day 100% of Facebook users will be logged out. 
    Well you might wonder, why is the same not possible if the developer/administrator leaks the Session table? 
    It is possible, but it is related to the practicality of the situation. Remember, most of the online breaches are 
    done with social engineering than complicated technical hacks.
    a) Practically it is really difficult to leak the whole table. In case of a single key, the admin just has 
    pretend to take a photo of his friend in the office aaaaand the secret is on Reddit the next morning you fire him. 
    b) As well consider the OpenSSL Heartbleed bug. It is really easy to extract the secret key from just a couple 
    of memory dumps with a simple string match script.

    Cannot manage client from the server: 

    - We had several cases where we wanted the users at HelpTap to logout by cleaning up the cookies,
    but we cannot ask them to do so every time. 
    As well consider the case that a user’s mobile is stolen, 
    and he wants to logout of all existing sessions(e.g. Gmail’s logout other sessions feature). 
    Well its not possible in case of JWT.
    In our case it used to be rogue users. We needed to log them out. Well, in case of of HelpTap it was 
    quite easy as we just had to delete the session tokens. There was no way to do the same in case of 
    Bottr cause we used JWT in that case. 
    You might argue, why not just delete the existing user-id from the table… 
    But doing so means to create multiple dangling pointers and no one likes dangling pointers in a No-SQL database.

    Cannot push Messages to clients (Identifying clients from server) : 

    - As we have no record about the logged-in clients on the DB end, we cannot push messages to all the clients.
    In HelpTap we implemented a chatting platform wherein the client polls the server for new messages. 
    Each client has an AWS SQS queue to itself where we push any new messages. 
    In case of JWT this would not have been possible as identifying each client per user is not possible.
    One can use the device ID but not all clients have a device ID, as well that would mean creating 
    another table that is parallel to the Session table
    This point overlaps point 2

    Crypto-algo can be deprecated: 

    - JWT relies completely on the Signing algorithm. Now, though it is not frequent, 
    but in the past many Encryption/Signing algorithms have been deprecated. 
    This article shows how you can crack the Wifi password of a WEP Encrypted 
    Wifi which was the most common type of encryption not more than a year ago. 
    The hack was based on the weakness of the crypto algorithm. So, in case of JWT, 
    if such a thing happens, yet again, every user on the platform will have to login again.
    Yet again one will have to wait till all the JWT libraries update with the latest crypto-algo.

    Data Overhead : 

    - The size of the JWT token will be more than that of a normal Session token. 
    The more data you add in the JWT token, the longer it gets linearly. Remember, 
    each request needs the token in it for request verification. So say, a 1 KB JWT token implies 
    each request will have 1KB over-head upload which is really bad in cases of low speed net connectivity. 
    In case of bad developer, some one might put more data in the JSON and that would increase the length. 
    The length of the sessions tokens can be as small it can be and still be secure. e.g. the possible 
    combinations for just a 5 letter alphanumeric session string is almost 1 billion combinations (62⁵)

    Complicated to understand: 

    - JWT uses cryptographic Signature algorithms to verify the data and get the 
    user-id from the token. Understanding the Signing Algo in itself requires basics of cryptography. 
    So, in case if the developer is not completely educated s/he might introduce security loopholes in the system. 
    My co-worker was surprised when I decoded the JWT token without using the secret key. 
    He expected that the whole token was an encrypted one.
    I came across a website that stored the whole user object in the JWT token. This included the user’s password hash. 
    Sessions tokens are pretty straightforward to understand and such issues can be easily avoided.
    As JWT is a fairly new concept, one might not find the libraries in all the languages out there. 
    Adding to it, neither JWT nor Sessions solve the CSRF or XSS issues, as it completely depends on how you send the data.

    TLDR; JWT is fast(development) though less customizable, risky, slightly complicated to understand


*/
