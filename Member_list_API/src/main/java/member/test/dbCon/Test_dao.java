package member.test.dbCon;

import static org.junit.jupiter.api.Assertions.*;

import java.sql.Connection;
import java.sql.SQLException;

import org.json.simple.JSONObject;
import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import members.dao.Memberdao;
import members.db_con.DbConnection;

class Test_dao {

//	@BeforeAll
//	static void setUpBeforeClass() throws Exception {
//		
//	}
//
//	@AfterAll
//	static void tearDownAfterClass() throws Exception {
//		DbConnection.close();
//	}
//
	Memberdao dao;
	@BeforeEach
	void setUp() throws Exception {
		dao = new Memberdao();
	}

	@AfterEach
	void tearDown() throws Exception {
	}

	@Test
	void testInserting_row() {
		//fail("Not yet implemented");
		JSONObject obj = dao.inserting_row("Rishikesh", "raushan.rishikesh@gmail.com", "Full-Time", "Full-Stack");
		if(obj == null) {
			fail("JSONObject not returned");
		}
		assertEquals(obj.get("rows"), 1);
	}

	@Test
	void testGetting_list() {
		fail("Not yet implemented");
	}

	@Test
	void testDelete_id() {
		fail("Not yet implemented");
	}

	@Test
	void testUpdate_member() {
		fail("Not yet implemented");
	}

}
