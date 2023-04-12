package members.db_con;

import java.sql.Connection;
import java.sql.DriverManager;
//import java.sql.ResultSet;
import java.sql.SQLException;
//import java.sql.Statement;

public class DbConnection {

	private static Connection con;
	
//	public static void main(String[] args) {
//		Statement st=null ;
//		int res=0;
//		System.out.println(res);
//		try {
//			DbConnection.getConnection();
//			st = con.createStatement();
//			ResultSet resultSet = st.executeQuery("select * from members");
//			while(resultSet.next()) {
//				System.out.println(resultSet.getString(2));
//			}
//		}
//		catch(Exception e) {
//			e.printStackTrace();
//		}
//	}
	
	public static Connection getConnection() throws ClassNotFoundException, SQLException {
		Class.forName("com.mysql.jdbc.Driver");
		if(con == null)
		con = DriverManager.getConnection("jdbc:mysql://localhost:3306/swiftkanban","root1","password");
		return con;
	}
	
	public static void close() {
		try {
			con.close();
		} catch (SQLException e) {
			e.printStackTrace();
		}
	}
	
}
