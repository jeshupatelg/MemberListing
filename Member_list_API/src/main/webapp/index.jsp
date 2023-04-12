<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
<!-- <input type="submit" value="Insert" href="http://localhost:8080/Member_list_API/insert.jsp"> -->
<button class="jpg" 
onclick="window.location.href = 'http://localhost:8080/Member_list_API/insert.jsp';">Insert New Member</button>
<!-- <a href="insert.jsp">Insert2</a> -->

<form method=get action=member_controller>
<input type="submit" value="Show All Members">
</form>

<!-- <form method=delete action=member_controller>
<input type="submit" value="Delete by Name">

</form> -->

<!-- <script type="text/javascript">
window.location.href("http://localhost:8080/Member_list_API/insert.jsp")
</script> -->
</body>
</html>