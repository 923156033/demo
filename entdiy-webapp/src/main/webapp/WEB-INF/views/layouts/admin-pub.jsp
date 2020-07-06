<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<c:set var="systemName" value="<%=com.entdiy.core.web.AppContextHolder.getSystemName()%>"/>
<c:set var="buildVersion" value="<%=com.entdiy.core.web.AppContextHolder.getBuildVersion()%>"/>
<!DOCTYPE html>
<!--[if IE 8]> <html lang="en" class="ie8 no-js"> <![endif]-->
<!--[if IE 9]> <html lang="en" class="ie9 no-js"> <![endif]-->
<!--[if !IE]><!-->
<html lang="en" class="no-js">
<!--<![endif]-->
<!-- BEGIN HEAD -->
<head>
    <meta charset="utf-8"/>
    <base href="${applicationScope.ctx}/admin"/>
    <%@include file="/WEB-INF/views/layouts/include-header.jsp" %>
    <title><sitemesh:write property='title'/> : ${systemName}</title>
    <link href="assets/pages/admin/css/pub.css" rel="stylesheet" type="text/css"/>
    <link rel="shortcut icon" href="assets/pages/img/favicon.ico"/>
    <sitemesh:write property='head'/>
</head>
<!-- END HEAD -->
<!-- BEGIN BODY -->
<body class="pub <sitemesh:write property='body.class' />">
<!-- BEGIN LOGIN -->
<div class="row hidden-xs hidden-sm" style="margin: 0px">
    <div class="col-md-12" style="margin: 0px">
        <div style="padding: 30px"></div>
    </div>
</div>
<div class="form-group" style="margin: 0px">
    <div class="col-md-3"></div>
    <div class="col-md-6" style="padding: 0px">
        <div class="content" style="width: 100%;">
            <div class="row">
                <div class="col-md-3">
                    <span style="float: left;margin-right: 10px">
                        <img src="assets/pages/img/logo.png"/>
                    </span>
                </div>
                <div class="col-md-9">
                    <span style="color: #555555;font-size: 35px;display:inline-block;">
                        ${systemName}
                    </span>
                </div>
            </div>
            <hr/>
            <sitemesh:write property='body'/>

            <!-- BEGIN COPYRIGHT -->
            <div class="row">
                <div class="col-md-12">
                    <div class="copyright pull-right">
                            <span title="${buildVersion}|<%= request.getLocalAddr()  %>:<%=request.getLocalPort()%>]"
                                  style="display: inline-block;">
                                &copy; EntDIY.com 2017 All Rights Reserved.
                                <%=request.getServerName()%></span>
                        <c:if test="${devMode}">
                            <span>V${buildVersion}</span>
                        </c:if>
                    </div>
                </div>
            </div>
            <!-- END COPYRIGHT -->
        </div>
    </div>
    <div class="col-md-3"></div>
</div>
<%@include file="/WEB-INF/views/layouts/include-footer.jsp" %>

<!-- BEGIN PAGE LEVEL SCRIPTS -->
<script>
    $(function () {
        // console.profile('Profile Sttart');
        //App.init();
        Util.init();
        Global.init();
        App.unblockUI();
        //console.profileEnd();
    });
</script>
<script src="assets/pages/admin/scripts/pub.js"></script>
<!-- END PAGE LEVEL SCRIPTS -->
</body>
<!-- END BODY -->
</html>