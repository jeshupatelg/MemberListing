(this.webpackJsonpteam2=this.webpackJsonpteam2||[]).push([[0],{130:function(e){e.exports=JSON.parse('{"save":"SAVE","emptyMandatoryError":"Value must be set for the mandatory fields","ok":"OK","error":"Error","confirmation":"Confirmation","success":"Success","warning":"Warning","info":"Info","DontShowAgainMesg":"Do not show this message again.","zeroRecordSelctionError":"Select at least one record.","cannotSelectMoreThanOne":"You can not select more than one card as parent card.","noDataText":"No data to display.","itemTitle_SE":"Name","itemTitle":"Title","boadName_SE":"Project","boadName":"Board"}')},131:function(e){e.exports=JSON.parse('{"save":"SAVE","emptyMandatoryError":"Value must be set for the mandatory fields","ok":"OK","error":"Error","confirmation":"Confirmation","success":"Success","warning":"Warning","info":"Info","DontShowAgainMesg":"Do not show this message again.","zeroRecordSelctionError":"Select at least one record.","cannotSelectMoreThanOne":"You can not select more than one card as parent card.","noDataText":"No data to display.","itemTitle_SE":"Name","itemTitle":"Title","boadName_SE":"Project","boadName":"Board"}')},132:function(e){e.exports=JSON.parse('{"save":"SAVE","emptyMandatoryError":"Value must be set for the mandatory fields","ok":"OK","error":"Error","confirmation":"Confirmation","success":"Success","warning":"Warning","info":"Info","DontShowAgainMesg":"Do not show this message again.","zeroRecordSelctionError":"Select at least one record.","cannotSelectMoreThanOne":"You can not select more than one card as parent card.","noDataText":"No data to display.","itemTitle_SE":"Name","itemTitle":"Title","boadName_SE":"Project","boadName":"Board"}')},133:function(e){e.exports=JSON.parse('{"save":"SAVE","emptyMandatoryError":"Value must be set for the mandatory fields","ok":"OK","error":"Error","confirmation":"Confirmation","success":"Success","warning":"Warning","info":"Info","DontShowAgainMesg":"Do not show this message again.","zeroRecordSelctionError":"Select at least one record.","cannotSelectMoreThanOne":"You can not select more than one card as parent card.","noDataText":"No data to display.","itemTitle_SE":"Name","itemTitle":"Title","boadName_SE":"Project","boadName":"Board"}')},134:function(e){e.exports=JSON.parse('{"save":"SAVE","emptyMandatoryError":"Value must be set for the mandatory fields","ok":"OK","error":"Error","confirmation":"Confirmation","success":"Success","warning":"Warning","info":"Info","DontShowAgainMesg":"Do not show this message again.","zeroRecordSelctionError":"Select at least one record.","cannotSelectMoreThanOne":"You can not select more than one card as parent card.","noDataText":"No data to display.","itemTitle_SE":"Name","itemTitle":"Title","boadName_SE":"Project","boadName":"Board"}')},14:function(e,t,a){e.exports&&(e.exports=function(){var e,t,a={};return{getLoggedInUser:function(){return e.userData},getParamData:function(e){return a[e]},setParamData:function(e){a=e},initConfig:function(t){e=t},getAppData:function(t){return e?e[t]:void 0},setAppData:function(t,a){e&&(e[t]=a)},getUserAction:function(t){return e&&e.actions?e.actions[t]:void 0},setUserAction:function(t,a){e.actions[t]=a},setAppAppAuthToken:function(e){t=e},getAppAppAuthToken:function(){return t},setParamMap:function(e){var t;e?a=e:""!==(t=-1!==window.location.href.indexOf("?")?window.location.href.slice(window.location.href.indexOf("?")+1,window.location.href.length):window.location.href.slice(window.location.href.indexOf("&")+1,window.location.href.length))&&t.split("&").forEach((function(e){var t=e.split("=");a[t[0]]=t[1]}))},loadCustomCSSFiles:function(e){e.forEach((function(e){var t=document.createElement("link");t.href=e,t.rel="stylesheet",t.type="text/css",document.head.appendChild(t)}))}}}())},145:function(e,t,a){e.exports=a(256)},255:function(e,t,a){},256:function(e,t,a){"use strict";a.r(t);var n={};a.r(n),a.d(n,"getConfigPostData",(function(){return Te}));var o={};a.r(o),a.d(o,"getConfigPostData",(function(){return Ne}));var r=a(0),s=a.n(r),i=a(51),c=a(39),l=a.n(c),d=a(16),m=a(17),u=a(30),p=a(21),h=a(20),f="INIT_MESSAGE",g="SHOW_MESSAGE",b="HIDE_MESSAGE",E="error",v="success",y="confirmation",O="warning",M="info",_=a(122),D=a.n(_),w=a(80),S=a(94),j=a(129),A={en:{translation:a(130)},de:{translation:a(131)},fr:{translation:a(132)},zh:{translation:a(133)},pt:{translation:a(134)}};S.a.use(j.a).use(w.b).init({resources:A,lng:"en",fallbackLng:"en",keySeparator:!1,interpolation:{escapeValue:!1}});var T,N=S.a,C=a(14),k=a.n(C),I=function(e){return s.a.createElement(w.a,null,function(e){var t="_"+k.a.getAppData("sourceType"),a=N.t(e+t);return a.endsWith(t)&&(a=N.t(e)),a}(e))},x=function(e){Object(p.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(d.a)(this,a),(n=t.call(this,e)).state={},n.hideMessage=n.hideMessage.bind(Object(u.a)(n)),n}return Object(m.a)(a,[{key:"componentDidMount",value:function(){this.props.initMessageComp()}},{key:"render",value:function(){if(0===Object.keys(this.props).length||!this.props.messageData||!this.props.messageData.show)return!1;var e=this.props.messageData,t=e.type,a=t===E,n=t===v,o=t===O,r=t===M,i=t===y,c={header:e.headerText,message:e.message,actionLabels:e.actionLabels,dontShowMeAgain:e.dontShowMeAgain,dialogHeaderIcon:a?"icon-Error":r?"icon-info":n?"icon-success":o||i?"icon-Warning":"",showMainBox:e.showMainBox,htmlMessage:e.htmlMessage,noHeaderIcon:e.noHeaderIcon,type:t};return s.a.createElement(D.a,{config:c,onSelection:this.hideMessage,getI18NMessage:I})}},{key:"hideMessage",value:function(e,t){var a;this.props.messageData.onConfirmFn&&this.props.messageData.type!==y&&this.props.messageData.onConfirmFn(),this.props.store.dispatch({type:b,config:a}),e&&this.props.messageData.onConfirmFn?this.props.messageData.onConfirmFn(t):this.props.messageData.onCancelFn&&this.props.messageData.onCancelFn(t)}}]),a}(s.a.Component),L=Object(i.b)((function(e,t){return{messageData:e.messageData.messageData,store:t.store}}),(function(e){return{initMessageComp:function(){e({type:f})}}}))(x),P=27,R=13,U=112,F="SE",H={},z={configURL:void 0,isIntegrated:!1,baseURL:""},B=z,W=a(12),J=a(18),K="INIT_APP",V="SHOW_LOADING",G="HIDE_LOADING",Y=a(135),X=a.n(Y),q={ajaxCounter:0,ajax:function(e,t,a,n,o,r){var s=!(arguments.length>6&&void 0!==arguments[6])||arguments[6],i=this;s&&(this.ajaxCounter++,i.showHideAppMask());var c={headers:{Accept:"application/json","Content-Type":"application/json"},credentials:"include"},l=k.a.getParamData("secureId");if(l&&(c.headers.secureId=l),k.a.getAppAppAuthToken()&&(c.headers.Authorization=k.a.getAppAppAuthToken()),t&&B.isIntegrated&&(c.body=JSON.stringify(t),c.method="POST"),r)for(var d in r)if("headers"===d)for(var m in r.headers)c.headers[m]=r.headers[m];else c[d]=r[d];fetch(e,c).then((function(e){return e&&!o?e.json():e})).then((function(e){s&&(i.ajaxCounter--,i.showHideAppMask()),a&&a(e)})).catch((function(e){s&&(i.ajaxCounter--,i.showHideAppMask()),n&&n(e)})),B.isIntegrated&&B.isELKEnabled&&setTimeout(q.logtoELK,0,e,Object(W.a)({},t),Object(W.a)({},c))},logtoELK:function(e,t,a){var n=Object.entries(H).find((function(t){return-1!==e.indexOf(t[1])}));if(n){var o={baseURL:B.url,path:n[1],action:n[0],method:a?a.method:"GET",loginid:k.a.getAppData("user_data")&&k.a.getAppData("user_data").loginid,firstname:k.a.getAppData("user_data")&&k.a.getAppData("user_data").firstname,lastname:k.a.getAppData("user_data")&&k.a.getAppData("user_data").lastname,email:k.a.getAppData("user_data")&&k.a.getAppData("user_data").email,timezone:k.a.getAppData("user_data")&&k.a.getAppData("user_data").timezone,password:null};fetch(B.ELKURL,{method:"POST",body:JSON.stringify(o)})}},showHideAppMask:function(){T&&(0===this.ajaxCounter?T.dispatch({type:G}):T.dispatch({type:V}))},getErrorMessage:function(e){if(e.m_errorList){var t=e.m_errorList[0];T.dispatch((a={type:E,message:this.processErrorMessage(t)},{type:g,config:a}))}var a;return!e.m_errorList},processErrorMessage:function(e){var t=[],a="",n={};try{var o=e.substring(e.indexOf("{"),e.lastIndexOf("}")+1);(n=JSON.parse(o)).Response&&"error"===n.Response.messageView.type?(X()(n.Response.details,(function(e){t=[].concat(Object(J.a)(t),Object(J.a)(e.map((function(e){return e.responseMsg}))))})),a=t.length?t.join("\n"):n.Response.messageView.message.join("\n")):n.message&&n.message.Error&&-1!==n.message.Error.indexOf('"Error":{')?a=JSON.parse(n.message.Error).Error[""].trim():n.message&&n.message.error&&-1!==n.message.error.indexOf('"error":')?a=JSON.parse(n.message.error).error.trim():n.message&&n.message.error&&-1!==n.message.error.indexOf("<Errors>")?a=n.message.error.substring(n.message.error.indexOf("<Error code='25'>")+17,n.message.error.indexOf("</Error>")).trim():n.message&&n.message.Error&&(a=n.message.Error.trim())}catch(r){a="There seems to be an error !"}return a}},Q=q,Z="GET_TEAM_MEMBER_DATA",$="ADD_TEM_MEMBER_DATA",ee="DELETE_TEAM_MEMBER_DATA",te="EDIT_TEAM_MEMBER_DATA",ae="http://localhost:8080/Member_list_API/member_controller",ne=function(e){return console.log(e),{type:Z,payload:e}},oe=function(e,t){console.log("data",t);var a=e.joining_date,n=e.id;return{type:$,payload:Object(W.a)(Object(W.a)({},t),{},{joining_date:a,id:n})}},re=function(e){return{type:ee,payload:e}},se=function(e){return{type:te,payload:e}},ie=function(e){Object(p.a)(a,e);var t=Object(h.a)(a);function a(){return Object(d.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){var e=this;return s.a.createElement("table",{className:this.props.className},s.a.createElement("thead",null,s.a.createElement("tr",null,this.props.headData.map((function(e,t){return s.a.createElement("th",{key:e},e)})))),s.a.createElement("tbody",null,this.props.bodyData.map((function(t,a){return s.a.createElement("tr",{key:a},s.a.createElement(s.a.Fragment,null,s.a.createElement("td",null,a+1),s.a.createElement("td",null,t.team_member_name),s.a.createElement("td",null,t.joining_date),s.a.createElement("td",null,t.login_id),s.a.createElement("td",null,t.employee_type),s.a.createElement("td",null,t.role),s.a.createElement("td",null,s.a.createElement("button",{onClick:function(){e.props.setData(t),e.props.openModal()},className:"edit-button"},"Edit"),s.a.createElement("button",{onClick:function(){e.props.delAction(t.id)},className:"delete-button"},"X"))))}))))}}]),a}(s.a.Component),ce=function(e){Object(p.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(d.a)(this,a),(n=t.call(this,e)).state={showModal:!1},n}return Object(m.a)(a,[{key:"render",value:function(){return this.props.isModalOpen?s.a.createElement("div",{className:"modal"},s.a.createElement("div",{className:"modal-content"},s.a.createElement("div",{className:"modal-header"},s.a.createElement("h4",{className:"modal-title"},this.props.title)),s.a.createElement("div",{className:"modal-body"},this.props.type),s.a.createElement("div",{className:"modal-footer"},s.a.createElement("button",{onClick:this.props.closeModal,className:"close-button"},"Close"),s.a.createElement("button",{form:"modal-form",type:"submit",className:"submit-button"},"Submit")))):null}}]),a}(s.a.Component),le=a(7),de=function(e){Object(p.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(d.a)(this,a),(n=t.call(this,e)).state={name:"",joiningDate:"",loginId:"",employeeType:"",role:""},n.handleChange=n.handleChange.bind(Object(u.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(u.a)(n)),n}return Object(m.a)(a,[{key:"handleChange",value:function(e){this.setState(Object(le.a)({},e.target.name,e.target.value))}},{key:"handleSubmit",value:function(e){alert("Your Data is Added for name : "+this.state.name);var t={team_member_name:this.state.name,login_id:this.state.loginId,employee_type:this.state.employeeType,role:this.state.role};console.log(t),this.props.submitAction(t),this.props.closeModal(),e.preventDefault()}},{key:"render",value:function(){return s.a.createElement("form",{id:"modal-form",onSubmit:this.handleSubmit},s.a.createElement("label",{className:"form-label"},"Full Name:",s.a.createElement("input",{className:"form-input",type:"text",name:"name",value:this.state.name,onChange:this.handleChange})),s.a.createElement("label",{className:"form-label"},"Login Id :",s.a.createElement("input",{className:"form-input",type:"text",name:"loginId",value:this.state.loginId,onChange:this.handleChange})),s.a.createElement("label",{className:"form-label"},"Employee Type :",s.a.createElement("input",{className:"form-input",type:"text",name:"employeeType",value:this.state.employeeType,onChange:this.handleChange})),s.a.createElement("label",{className:"form-label"},"Role :",s.a.createElement("input",{className:"form-input",type:"text",name:"role",value:this.state.role,onChange:this.handleChange})))}}]),a}(s.a.Component),me=function(e){Object(p.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(d.a)(this,a),(n=t.call(this,e)).state=Object(W.a)({},e.data),console.log(e.data),n.handleChange=n.handleChange.bind(Object(u.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(u.a)(n)),n}return Object(m.a)(a,[{key:"handleChange",value:function(e){this.setState(Object(le.a)({},e.target.name,e.target.value))}},{key:"handleSubmit",value:function(e){alert("Edited Details for id",this.state.id);var t={team_member_name:this.state.team_member_name,login_id:this.state.login_id,employee_type:this.state.employee_type,role:this.state.role,id:this.state.id};console.log(t),this.props.submitAction(t),this.props.closeModal(),e.preventDefault()}},{key:"render",value:function(){return s.a.createElement("form",{id:"modal-form",onSubmit:this.handleSubmit},s.a.createElement("label",{className:"form-label"},"Full Name:",s.a.createElement("input",{className:"form-input",type:"text",name:"team_member_name",value:this.state.team_member_name,onChange:this.handleChange})),s.a.createElement("label",{className:"form-label"},"Login Id :",s.a.createElement("input",{className:"form-input",type:"text",name:"login_id",value:this.state.login_id,onChange:this.handleChange})),s.a.createElement("label",{className:"form-label"},"Employee Type :",s.a.createElement("input",{className:"form-input",type:"text",name:"employee_type",value:this.state.employee_type,onChange:this.handleChange})),s.a.createElement("label",{className:"form-label"},"Role :",s.a.createElement("input",{className:"form-input",type:"text",name:"role",value:this.state.role,onChange:this.handleChange})))}}]),a}(s.a.Component),ue=function(e){Object(p.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(d.a)(this,a),(n=t.call(this,e)).source=n.props.source,n.state={isModalOpen:!1},n}return Object(m.a)(a,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return s.a.createElement("nav",null,s.a.createElement("span",{className:"pageHeading"},"TEAM  MEMBER"),s.a.createElement("button",{className:"add-button",onClick:this.props.openModal},"Add +"))}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keydown",this._handleKeyDown),document.removeEventListener("click",this._handleClickEvents),window.removeEventListener("resize",this._handleWindowResize)}}]),a}(s.a.Component),pe=function(e){Object(p.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(d.a)(this,a),(n=t.call(this,e)).state={isAddModalOpen:!1,isEditModalOpen:!1,data:{}},n.source=n.props.source,n}return Object(m.a)(a,[{key:"componentDidMount",value:function(){this.props.fetchTeamMemberList()}},{key:"render",value:function(){var e=this,t=s.a.createElement(de,{closeModal:function(){return e.setState({isAddModalOpen:!1})},submitAction:this.props.addNewTeamMemberData}),a=s.a.createElement(me,{data:this.state.data,closeModal:function(){return e.setState({isEditModalOpen:!1})},submitAction:this.props.editTeamMemberData});return s.a.createElement("div",{className:"team-member-container"},s.a.createElement(ue,{openModal:function(){return e.setState({isAddModalOpen:!0})}}),s.a.createElement(ie,{headData:["#","TEAM MEMBER NAME","JOINING DATE","LOGIN ID","EMPLOYEE TYPE","ROLE","ACTIONS"],bodyData:this.props.data,setData:function(t){return e.setState({data:t})},delAction:this.props.deleteTeamMemberData,className:"member-table",openModal:function(){return e.setState({isEditModalOpen:!0})},closeModal:function(){return e.setState({isAddModalOpen:!1})}}),s.a.createElement(ce,{title:"ADD TEAM MEMBER",isModalOpen:this.state.isAddModalOpen,closeModal:function(){return e.setState({isAddModalOpen:!1})},type:t}),s.a.createElement(ce,{title:"EDIT TEAM MEMBER DATA",isModalOpen:this.state.isEditModalOpen,openModal:function(){return e.setState({isEditModalOpen:!0})},closeModal:function(){return e.setState({isEditModalOpen:!1})},type:a}))}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keydown",this._handleKeyDown),document.removeEventListener("click",this._handleClickEvents),window.removeEventListener("resize",this._handleWindowResize)}}]),a}(s.a.Component),he=Object(i.b)((function(e,t){return{data:e.teamMemberData.data,store:t.state}}),(function(e){return{fetchTeamMemberList:function(){e((function(e){Q.ajax(ae,null,(function(t){console.log(t),e(ne(t.team_member_data))}))}))},addNewTeamMemberData:function(t){e(function(e){return console.log("Form Data",e),function(t){Q.ajax("http://localhost:8080/Member_list_API/member_controller",null,(function(a){console.log("Sucessful Fetch"),t(oe(a,e))}),void 0,!1,{body:JSON.stringify(e),method:"POST"})}}(t))},deleteTeamMemberData:function(t){e(function(e){console.log(typeof e);var t=JSON.stringify({id:e});return function(a){Q.ajax("http://localhost:8080/Member_list_API/member_controller",null,(function(t){console.log(" Delete Sucessful"),a(re(e))}),(function(e){console.log("fail")}),!1,{body:t,method:"DELETE"})}}(t))},editTeamMemberData:function(t){e(function(e){return function(t){Q.ajax("http://localhost:8080/Member_list_API/member_controller",null,(function(a){console.log(" Edit Sucessful"),console.log("Object ",e),t(se(e))}),(function(e){console.log("Edit fail")}),!1,{body:JSON.stringify(e),method:"PUT"})}}(t))}}}))(pe),fe=function(e){Object(p.a)(a,e);var t=Object(h.a)(a);function a(e){var n,o;return Object(d.a)(this,a),(n=t.call(this,e)).state={selectedMenuText:void 0,dependencyTabIndex:0,selectedMenuType:"",selectedCard:{}},n.source=n.props.source,n._handleKeyDown=n._handleKeyDown.bind(Object(u.a)(n)),n._handleClickEvents=n._handleClickEvents.bind(Object(u.a)(n)),n._handleWindowResize=n._handleWindowResize.bind(Object(u.a)(n)),document.addEventListener("keydown",n._handleKeyDown),document.addEventListener("click",n._handleClickEvents),window.addEventListener("resize",n._handleWindowResize),o=navigator.language||navigator.userLanguage,N.changeLanguage(o),n}return Object(m.a)(a,[{key:"componentDidMount",value:function(){this.props.initAppComp()}},{key:"render",value:function(){var e=this.props.appData,t=B.baseURL+(F===B.sourceType?"images/loading.gif":"svg/loading.svg");return s.a.createElement("div",{id:"mf-cnt"},s.a.createElement(he,{store:this.props.store,source:this.source}),s.a.createElement(L,{store:this.props.store,source:this.source}),e&&e.showMask&&s.a.createElement("div",{id:"loadDiv",className:"loadingDiv",align:"center"},s.a.createElement("div",{className:"loadingImage",style:{backgroundImage:"url(".concat(t,")")}})))}},{key:"_handleKeyDown",value:function(e){switch(e.keyCode){case P:case R:break;case U:k.a.getAppData("helpURL")&&window.open(k.a.getAppData("helpURL"),"Help","width="+window.screen.availWidth+"px,height="+window.screen.availHeight+"px,top=0,left=0")}}},{key:"_handleClickEvents",value:function(){}},{key:"_handleWindowResize",value:function(){}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keydown",this._handleKeyDown),document.removeEventListener("click",this._handleClickEvents),window.removeEventListener("resize",this._handleWindowResize)}}]),a}(s.a.Component),ge=Object(i.b)((function(e,t){return{appData:e.appData.appData,store:t.store}}),(function(e){return{initAppComp:function(){e({type:K})}}}))(fe),be=function(e){Object(p.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(d.a)(this,a),(n=t.call(this,e)).state={},n}return Object(m.a)(a,[{key:"render",value:function(){return s.a.createElement("div",{className:"message_cnt pos_abs full_height full_width"},s.a.createElement("div",{className:"pos_abs white_bg message_body message_error"},s.a.createElement("div",{className:"message_hdr full_width error_warning_bg"},s.a.createElement("svg",{className:"pos_abs"},s.a.createElement("path",{d:"M -35 190 q 150 -70 300 0",fill:"#ffffff"})),s.a.createElement("img",{src:"images/error-illustration.png",alt:"msg_illustratio"})),s.a.createElement("div",{className:"msg_text_cnt align_center color_black"},s.a.createElement("span",{className:"bold float_left full_width"}," Oh No..."),s.a.createElement("span",{dangerouslySetInnerHTML:{__html:this.props.dataHtml}}))))}}]),a}(s.a.Component),Ee=a(66),ve=a(136),ye={show:!1},Oe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ye,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case f:return Object(W.a)(Object(W.a)({},e),{},{messageData:{show:!1,type:void 0,message:void 0}});case g:return Object(W.a)(Object(W.a)({},e),{},{messageData:Object.assign({},e.messageData,{show:!0,type:t.config.type,message:t.config.message,onConfirmFn:t.config.onConfirmFn,onCancelFn:t.config.onCancelFn,headerText:t.config.headerText,actionLabels:t.config.actionLabels,dontShowMeAgain:t.config.dontShowMeAgain,showMainBox:t.config.showMainBox,htmlMessage:t.config.htmlMessage,noHeaderIcon:t.config.noHeaderIcon})});case b:return Object(W.a)(Object(W.a)({},e),{},{messageData:Object.assign({},e.messageData,{show:!1,type:void 0,message:void 0,headerText:void 0,actionLabels:void 0,onConfirmFn:void 0,dontShowMeAgain:!1,showMainBox:!1,onCancelFn:void 0,htmlMessage:void 0,noHeaderIcon:void 0})});default:return e}},Me={},_e=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Me,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case K:return Object(W.a)(Object(W.a)({},e),{},{appData:{showMask:!1}});case V:return Object(W.a)(Object(W.a)({},e),{},{appData:Object.assign({},e.appData,{showMask:!0})});case G:return Object(W.a)(Object(W.a)({},e),{},{appData:Object.assign({},e.appData,{showMask:!1})});default:return e}},De={data:[],isShown:!1},we=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:De,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Z:return console.log("Inside case"),Object(W.a)(Object(W.a)({},e),{},{isShown:!0,data:t.payload});case $:return console.log("payload",t.payload),Object(W.a)(Object(W.a)({},e),{},{data:[].concat(Object(J.a)(e.data),[t.payload])});case ee:console.log(t.payload);var a=function(e){return e.id!==t.payload},n=e.data;return Object(W.a)(Object(W.a)({},e),{},{data:n.filter(a)});case te:console.log(t.payload);var o=function(e,t){for(var a=0;a<e.length;a++)if(e[a].id===t)return console.log("Index",a),a},r=function(e,t){var a=o(e,t.id),n=Object(W.a)(Object(W.a)({},e[a]),t);return console.log("Index2",a),e.splice(a,1,n),console.log("data1",e),e};return Object(W.a)(Object(W.a)({},e),{},{data:Object(J.a)(r(e.data,t.payload))});default:return e}},Se=Object(Ee.b)({messageData:Oe,appData:_e,teamMemberData:we}),je=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||Ee.c,Ae=Object(Ee.d)(Se,je(Object(Ee.a)(ve.a))),Te=(a(255),function(){return{}}),Ne=function(){return{ownerType:k.a.getParamData("OwnerType"),ownerId:k.a.getParamData("OwnerID")}},Ce=function(e){return F===(k.a.getAppData("sourceType")||e)?o:n};!function(e){T=e}(Ae);var ke=window.location.pathname.substring(1,window.location.pathname.lastIndexOf("/")),Ie="",xe=B.isIntegrated?"/"+ke+Ie:"data/AppProps.json";"#CUSTOM_APP_PATH#".includes("CUSTOM_APP_PATH")||(xe="#CUSTOM_APP_PATH#"),k.a.setParamMap(),k.a.getParamData("appPropsURL")&&(ke="",Ie=k.a.getParamData("appPropsURL"),xe="/"+ke+Ie),Q.ajax(xe,void 0,(function(e){if(function(e){if(e)for(var t in e)z[t]=e[t]}(e),F===B.sourceType){var t=window.localStorage.getItem("staticAssetsPath")?window.localStorage.getItem("staticAssetsPath"):"";B.baseURL=t+B.baseURL}window.loadMF=function(e){var t="root";e&&(k.a.setParamMap(e.paramMap),t=e.containerId);var a=Ce(B.sourceType);F!==B.sourceType&&(ke="");var n=B.isIntegrated?"/"+ke+B.configURL:B.configURL;Q.ajax(n,a.getConfigPostData(),(function(e){e.error?l.a.render(s.a.createElement(be,{dataHtml:e.error}),document.getElementById("root")):(k.a.initConfig(e),function(e){if(e)for(var t in e)H[t]=e[t]}(e.URLs),e.customCSSFiles&&k.a.loadCustomCSSFiles(e.customCSSFiles),l.a.render(s.a.createElement(i.a,{store:Ae},s.a.createElement(ge,{store:Ae,source:a})),document.getElementById(t)))}),void 0,!1,B.isIntegrated?{method:"POST"}:void 0)},B.isIntegrated||window.loadMF()}))}},[[145,1,2]]]);
//# sourceMappingURL=main.e8eaa711.chunk.js.map