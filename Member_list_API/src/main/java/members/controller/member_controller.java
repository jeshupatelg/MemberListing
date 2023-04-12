package members.controller;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import members.dao.Memberdao;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.PrintWriter;

import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;

/**
 * Servlet implementation class member_controller
 */
public class member_controller extends HttpServlet {
	private static final long serialVersionUID = 1L;
	private Memberdao dao;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public member_controller() {
        super();
        dao = new Memberdao();
    }

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {//insert
		response.setContentType("application/json");
		String team_member_name="",login_id="",employee_type="",role="";
		StringBuilder sb = new StringBuilder();
	    BufferedReader reader = request.getReader();
	    try {
	        String line;
	        while ((line = reader.readLine()) != null) {    // reading data -> forming json ->  get the attributes
	            sb.append(line);
	        }
	    } finally {
	        reader.close();
	    }
	    JSONObject obj=null;
	    try {
			obj = (JSONObject)(new JSONParser().parse(sb.toString()));
		} catch (ParseException e) {
			e.printStackTrace();
			response.setStatus(HttpServletResponse.SC_BAD_REQUEST);
			return;
		}
		team_member_name = obj.get("team_member_name").toString();
		//joining_date = obj.get("joining_date").toString();
		login_id = obj.get("login_id").toString();
		employee_type = obj.get("employee_type").toString();
		role = obj.get("role").toString();
		JSONObject res = dao.inserting_row(team_member_name, login_id, employee_type, role);
		//response.addHeader("Access-Control-Allow-Origin", "*");
		if(res == null) {
			response.setStatus(HttpServletResponse.SC_CONFLICT);
		}
		else {
			response.setStatus(HttpServletResponse.SC_OK);
		}
		PrintWriter out = response.getWriter();
		out.println(res.toJSONString());
		
	}

	@Override
	protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {//fetch entire list
		resp.setContentType("application/json");
		PrintWriter out = resp.getWriter();
		JSONObject list = dao.getting_list();
		if(list == null) {
			resp.setStatus(HttpServletResponse.SC_INTERNAL_SERVER_ERROR);
			return;
		}
		resp.setStatus(HttpServletResponse.SC_OK);
		out.println(list.toJSONString());
		//resp.addHeader("Access-Control-Allow-Origin", "*");

	}

	@Override
	protected void doDelete(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {//delete
		StringBuilder sb = new StringBuilder();
		response.setContentType("text/plain");
		//response.addHeader("Access-Control-Allow-Origin", "*");
	    BufferedReader reader = request.getReader();
	    try {
	        String line;
	        while ((line = reader.readLine()) != null) {
	            sb.append(line);
	        }
	    } finally {
	        reader.close();
	    }
	    JSONObject obj=null;
	    try {
			obj = (JSONObject)(new JSONParser().parse(sb.toString()));
		} catch (ParseException e) {
			e.printStackTrace();
			response.setStatus(HttpServletResponse.SC_BAD_REQUEST);
			return;
		}
	    boolean res = dao.delete_id(Integer.parseInt(obj.get("id").toString()));
	    if(res) {
	    	response.setStatus(HttpServletResponse.SC_OK);
	    	JSONObject obj1 = new JSONObject();
	    	obj1.put("Status","Deleted Successfully");
	    	PrintWriter out = response.getWriter();
			out.println(obj1.toJSONString());
	    }
	    else {
	    	response.setStatus(HttpServletResponse.SC_NOT_FOUND);
	    }
	}

	@Override
	protected void doPut(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {//update -> generally use patch
		response.setContentType("text/plain");
		//response.addHeader("Access-Control-Allow-Origin", "*");
		StringBuilder sb = new StringBuilder();
	    BufferedReader reader = request.getReader();
	    try {
	        String line;
	        while ((line = reader.readLine()) != null) {
	            sb.append(line);
	        }
	    } finally {
	        reader.close();
	    }
	    JSONObject obj=null;
	    try {
			obj = (JSONObject)(new JSONParser().parse(sb.toString()));
		} catch (ParseException e) {
			e.printStackTrace();
			response.setStatus(HttpServletResponse.SC_BAD_REQUEST);
			return;
		}
		boolean res = dao.update_member(obj);
		if(res) {
	    	response.setStatus(HttpServletResponse.SC_OK);
	    	JSONObject obj1 = new JSONObject();
	    	obj1.put("Status","Updated Successfully");
	    	PrintWriter out = response.getWriter();
			out.println(obj1.toJSONString());
	    }
	    else {
	    	response.setStatus(HttpServletResponse.SC_NOT_FOUND);
	    }
	}
	

}
