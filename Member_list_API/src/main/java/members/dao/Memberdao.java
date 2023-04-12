package members.dao;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.text.SimpleDateFormat;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;

import members.db_con.DbConnection;

public class Memberdao {

	private Connection con;
	private String table = "members";



	public JSONObject inserting_row(String team_member_name, String login_id, String employee_type, String role) {
		int res=0,id=-1;
		String joining_date= new SimpleDateFormat("yyyy-MM-dd").format(new java.util.Date()).toString();
		//joining_date = Date.
		String query = "insert into "+table+"(team_member_name,joining_date,login_id,employee_type,role) values("
		+"'"+team_member_name+"','"+joining_date+"','"+login_id+"','"+employee_type+"','"+role+"')";
		String last_record = "select last_insert_id()";
		try {
			this.con = DbConnection.getConnection();
			Statement st = con.createStatement();
			res = st.executeUpdate(query);
			ResultSet temp = st.executeQuery(last_record);
			temp.next();
			id = temp.getInt(1);
			st.close();
		} catch (SQLException | NullPointerException |ClassNotFoundException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			return null;
		}
		JSONObject obj = new JSONObject();
		obj.put("rows", res);
		obj.put("id",id);
		obj.put("joining_date",joining_date);
		return obj;
	}
	
	public JSONObject getting_list() {
		ResultSet res=null;
		String query = "select * from "+table;
		JSONObject send_list=new JSONObject();
		JSONArray result = null;
		try {
			this.con = DbConnection.getConnection();
			Statement st = con.createStatement();
			res = st.executeQuery(query);
			result = new JSONArray();
			while(res.next()) {
				JSONObject obj = new JSONObject();
				obj.put("id",res.getInt(1));
				obj.put("team_member_name", res.getString(2));
				obj.put("joining_date", res.getString(3));
				obj.put("login_id", res.getString(4));
				obj.put("employee_type", res.getString(5));
				obj.put("role", res.getString(6));
				result.add(obj);
			}
			send_list.put("team_member_data", result);
			st.close();
		} catch (SQLException | NullPointerException |ClassNotFoundException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			return null;
		}
		return send_list;
	}

	@Override
	protected void finalize() throws Throwable {
		// TODO Auto-generated method stub
		DbConnection.close();
	}

	public boolean delete_id(int id) {
		String query = "delete from "+table+" where id = "+id;
		int res=0;
		try {
			this.con = DbConnection.getConnection();
			Statement st = con.createStatement();
			res = st.executeUpdate(query);
		} catch (ClassNotFoundException | SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			return false;
		}
		if(res !=1)return false;
		return true;
	}

	public boolean update_member(JSONObject obj) {
		boolean first=false;
		StringBuilder sb = new StringBuilder();
		if(obj.containsKey("team_member_name")) {sb.append("team_member_name='"+obj.get("team_member_name").toString()+"'"); first=true;}
		//System.out.print(sb.toString());
		if(obj.containsKey("joining_date")) {
			if(first)sb.append(",");
			sb.append("joining_date='"+obj.get("joining_date").toString()+"'");
			first=true;
		}
		//System.out.print(sb.toString());
		if(obj.containsKey("login_id")) {
			if(first)sb.append(",");
			sb.append("login_id='"+obj.get("login_id").toString()+"'");
			first = true;
		}
		//System.out.print(sb.toString());
		if(obj.containsKey("employee_type")) {
			if(first)sb.append(",");
			sb.append("employee_type='"+obj.get("employee_type").toString()+"'");
			first=true;
		}
		//System.out.print(sb.toString());
		if(obj.containsKey("role")) {
			if(first)sb.append(",");
			sb.append("role='"+obj.get("role").toString()+"'");
			first=true;
		}
		//System.out.print(sb.toString());
		int id=Integer.parseInt(obj.get("id").toString());
		String query = "update "+table+" set "+sb.toString()+" where id="+id;
		//System.out.print(query);
		int res=0;
		try {
			this.con = DbConnection.getConnection();
			Statement st = con.createStatement();
			res = st.executeUpdate(query);
		} catch (ClassNotFoundException | SQLException e) {
			e.printStackTrace();
			return false;
		}
		if(res !=1)return false;
		return true;
	}
	
}
