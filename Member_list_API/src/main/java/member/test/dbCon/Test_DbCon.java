/**
 * 
 */
package member.test.dbCon;

import static org.junit.jupiter.api.Assertions.*;

import java.sql.Connection;
import java.sql.SQLException;

import org.junit.jupiter.api.Test;

import members.db_con.DbConnection;

/**
 * @author DIGITE\jeshu.patel
 *
 */
class Test_DbCon {

	/**
	 * Test method for {@link members.db_con.DbConnection#getConnection()}.
	 */
	@Test
	void testGetConnection() {
		Connection con = null;
		try {
			con = DbConnection.getConnection();
		}
		catch(ClassNotFoundException e) {
			fail("Failed due to --> "+e.getMessage());
		}
		catch(SQLException e) {
			fail("Failed due to --> "+e.getMessage());
		}
		if(con == null)fail("Connection was not made");
		DbConnection.close();
	}

	/**
	 * Test method for {@link members.db_con.DbConnection#close()}.
	 */
	@Test
	void testClose() {
		Connection con = null;
		try {
			con = DbConnection.getConnection();
			if(con == null)fail("Connection was not made");
			DbConnection.close();
			if(!con.isClosed())fail("Connection was not closed");
		}
		catch(ClassNotFoundException e) {
			fail("Failed due to --> "+e.getMessage());
		}
		catch(SQLException e) {
			fail("Failed due to --> "+e.getMessage());
		}
		
	}

}
