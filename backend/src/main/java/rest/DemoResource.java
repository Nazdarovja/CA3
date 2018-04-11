package rest;

import javax.annotation.security.RolesAllowed;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.UriInfo;
import javax.ws.rs.Consumes;
import javax.ws.rs.Produces;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PUT;
import javax.ws.rs.PathParam;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.SecurityContext;
import remotefetch.RemoteFetch;

/**
 * REST Web Service
 *
 * @author lam@cphbusiness.dk
 */
@Path("info")
public class DemoResource {

    @Context
    private UriInfo context;
    
    @Context
    SecurityContext securityContext;

    
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    @Path("user")
    @RolesAllowed("user")
    public String getFromUser(){
        String user = securityContext.getUserPrincipal().getName();
        return "\"This message if from the server (requires the user role): Hello from USER: "+ user+"\"";
    }
    
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    @Path("admin")
    @RolesAllowed("admin")
    public String getFromAdmin() {
        String admin = securityContext.getUserPrincipal().getName();
        return "\"This message if from the server (requires the admin role):Hello from ADMIN"+ admin+"\"";
    }
    
    
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    @Path("/swapi/{category}")
    @RolesAllowed("admin")
    public String getFromSwapiCategory(@PathParam("category") String category) throws Exception {
        RemoteFetch rf = new RemoteFetch();
        return rf.get(category);
    }
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    @Path("/swapi/{category}/{ID}")
    @RolesAllowed("admin")
    public String getFromSwapiCategoryAndID(@PathParam("category") String category, @PathParam("ID")int ID) throws Exception {
        RemoteFetch rf = new RemoteFetch();
        return rf.get(category, ID);
    }
}
