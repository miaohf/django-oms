webpackJsonp([5,21,22],{"0ihh":function(e,t,a){var r=a("uysG");"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);a("rjj0")("c7f3c6ba",r,!0)},P4wq:function(e,t,a){t=e.exports=a("FZ+f")(!1),t.push([e.i,"",""])},Vt6Z:function(e,t,a){"use strict";function r(e){a("0ihh")}Object.defineProperty(t,"__esModule",{value:!0});var s=a("Dd8w"),o=a.n(s),l=a("vMJZ"),i=a("QmSG"),n=a("vadm"),u=a("r1eV"),c=a("NYxO"),m={components:{addUser:n.default,editUser:u.default},data:function(){return{tableData:[],tabletotal:0,searchdata:"",currentPage:1,limit:i.LIMIT,offset:"",pagesize:[10,25,50,100],addForm:!1,editForm:!1,rowdata:{},selectId:[],butstatus:!0}},created:function(){this.fetchData(),console.log(this.username)},computed:o()({},Object(c.b)(["username"])),methods:{fetchData:function(){var e=this,t={id__gt:1,limit:this.limit,offset:this.offset,username__contains:this.searchdata};Object(l.f)(t).then(function(t){e.tableData=t.data.results,e.tabletotal=t.data.count})},getDialogStatus:function(e){this.editForm=e,this.addForm=e,setTimeout(this.fetchData,3e3)},handleEdit:function(e){this.editForm=!0,this.rowdata=e,setTimeout(this.fetchData,1e3)},handleSelectionChange:function(e){this.selectId=[];for(var t=0,a=e.length;t<a;t++)this.selectId.push(e[t].id);this.selectId.length>0?this.butstatus=!1:this.butstatus=!0},searchClick:function(){this.fetchData()},handleSizeChange:function(e){this.limit=e,this.fetchData()},handleCurrentChange:function(e){this.offset=(e-1)*i.LIMIT,this.fetchData()},deleteForm:function(){for(var e=this,t=0,a=this.selectId.length;t<a;t++)Object(l.c)(this.selectId[t]).then(function(a){delete e.selectId[t]});setTimeout(this.fetchData,3e3)}}},d=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"components-container",staticStyle:{height:"100vh"}},[a("el-card",[a("div",{staticClass:"head-lavel"},[a("div",{staticClass:"table-button"},[a("el-button",{attrs:{type:"primary",icon:"el-icon-plus",disabled:""},on:{click:function(t){e.addForm=!0}}},[e._v("新建用户")])],1),e._v(" "),a("div",{staticClass:"table-search"},[a("el-input",{attrs:{placeholder:"搜索 ..."},nativeOn:{keyup:function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13,t.key))return null;e.searchClick(t)}},model:{value:e.searchdata,callback:function(t){e.searchdata=t},expression:"searchdata"}},[a("i",{staticClass:"el-icon-search el-input__icon",attrs:{slot:"suffix"},on:{click:e.searchClick},slot:"suffix"})])],1)]),e._v(" "),a("div",[a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData,border:""},on:{"selection-change":e.handleSelectionChange}},[a("el-table-column",{attrs:{type:"selection"}}),e._v(" "),a("el-table-column",{attrs:{prop:"username",label:"用户名",sortable:""}}),e._v(" "),a("el-table-column",{attrs:{prop:"email",label:"Email"}}),e._v(" "),a("el-table-column",{attrs:{prop:"skype",label:"Skype"}}),e._v(" "),a("el-table-column",{attrs:{prop:"groups",label:"所在组",sortable:""},scopedSlots:e._u([{key:"default",fn:function(t){return[a("div",{staticClass:"name-wrapper",staticStyle:{"text-align":"center"},attrs:{slot:"reference"},slot:"reference"},e._l(t.row.groups,function(t){return a("el-tag",{key:t,attrs:{type:"success"}},[e._v(e._s(t))])}))]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"roles",label:"角色",sortable:""}})],1)],1),e._v(" "),a("div",{staticClass:"table-footer"},[a("div",{staticClass:"table-button"},[a("el-button",{attrs:{type:"danger",icon:"delete",disabled:e.butstatus},on:{click:e.deleteForm}},[e._v("删除用户")])],1),e._v(" "),a("div",{staticClass:"table-pagination"},[a("el-pagination",{attrs:{"current-page":e.currentPage,"page-sizes":e.pagesize,"page-size":e.limit,layout:"prev, pager, next, sizes",total:e.tabletotal},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange,"update:currentPage":function(t){e.currentPage=t}}})],1)])]),e._v(" "),a("el-dialog",{attrs:{visible:e.addForm},on:{"update:visible":function(t){e.addForm=t}}},[a("add-user",{on:{DialogStatus:e.getDialogStatus}})],1),e._v(" "),a("el-dialog",{attrs:{visible:e.editForm},on:{"update:visible":function(t){e.editForm=t}}},[a("edit-user",{attrs:{rowdata:e.rowdata},on:{DialogStatus:e.getDialogStatus}})],1)],1)},p=[],f={render:d,staticRenderFns:p},h=f,g=a("VU/8"),b=r,v=g(m,h,!1,b,null,null);t.default=v.exports},YQ5s:function(e,t,a){var r=a("smPP");"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);a("rjj0")("91147cac",r,!0)},ZZ37:function(e,t,a){var r=a("P4wq");"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);a("rjj0")("e511906c",r,!0)},r1eV:function(e,t,a){"use strict";function r(e){a("YQ5s")}Object.defineProperty(t,"__esModule",{value:!0});var s=a("vMJZ"),o={components:{},props:["rowdata"],data:function(){return{changePass:!1,rules:{username:[{required:!0,message:"请输入用户名",trigger:"blur"}],email:[{required:!0,type:"email",message:"请输入正确的Email地址",trigger:"blur"}],skype:[{required:!0,message:"请输入正确的Skype地址",trigger:"blur"}],group:[{required:!0,type:"array",message:"请选择用户分组",trigger:"change"}],roles:[{required:!0,message:"请选择用户角色",trigger:"blur"}]},groups:"",roles:""}},created:function(){this.getGroups(),this.getRoles()},methods:{postForm:function(e){var t=this;this.$refs[e].validate(function(e){if(!e)return console.log("error submit!!"),!1;t.rowdata.password="qwert@12345",Object(s.g)(t.rowdata.id,t.rowdata).then(function(e){"ok"===e.statusText&&t.$message({type:"success",message:"恭喜你，更新成功"})}).catch(function(e){t.$message.error("更新失败"),console.log(e)})}),this.$emit("DialogStatus",!1)},getHosts:function(e){this.rowdata.hosts=e},getGroups:function(){var e=this;Object(s.d)().then(function(t){e.groups=t.data.results})},getRoles:function(){var e=this;Object(s.e)().then(function(t){e.roles=t.data.results})},setPasswd:function(){this.rowdata.password=Math.random().toString(35).slice(2),console.log(this.rowdata.password)}}},l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm",attrs:{model:e.rowdata,rules:e.rules,"label-width":"100px"}},[a("el-form-item",{attrs:{label:"用户名",prop:"username"}},[a("el-input",{model:{value:e.rowdata.username,callback:function(t){e.$set(e.rowdata,"username",t)},expression:"rowdata.username"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"Email",prop:"email"}},[a("el-input",{model:{value:e.rowdata.email,callback:function(t){e.$set(e.rowdata,"email",t)},expression:"rowdata.email"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"Skype",prop:"email"}},[a("el-input",{model:{value:e.rowdata.skype,callback:function(t){e.$set(e.rowdata,"skype",t)},expression:"rowdata.skype"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"用户分组",prop:"group"}},[a("el-select",{attrs:{multiple:"",placeholder:"请选择用户分组"},model:{value:e.rowdata.group,callback:function(t){e.$set(e.rowdata,"group",t)},expression:"rowdata.group"}},e._l(e.groups,function(e){return a("el-option",{key:e.name,attrs:{value:e.name}})}))],1),e._v(" "),a("el-form-item",{attrs:{label:"是否激活",prop:"is_active"}},[a("el-switch",{attrs:{"on-text":"oo","off-text":"xx"},model:{value:e.rowdata.is_active,callback:function(t){e.$set(e.rowdata,"is_active",t)},expression:"rowdata.is_active"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"角色",prop:"group"}},[a("el-select",{attrs:{placeholder:"请选择用户角色"},model:{value:e.rowdata.roles,callback:function(t){e.$set(e.rowdata,"roles",t)},expression:"rowdata.roles"}},e._l(e.roles,function(e){return a("el-option",{key:e.name,attrs:{value:e.name}})}))],1),e._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.postForm("ruleForm")}}},[e._v("提交")])],1)],1)},i=[],n={render:l,staticRenderFns:i},u=n,c=a("VU/8"),m=r,d=c(o,u,!1,m,null,null);t.default=d.exports},smPP:function(e,t,a){t=e.exports=a("FZ+f")(!1),t.push([e.i,"",""])},uysG:function(e,t,a){t=e.exports=a("FZ+f")(!1),t.push([e.i,".head-lavel{padding-bottom:50px}.table-button{padding:10px 0;float:left}.table-pagination,.table-search{float:right;padding:10px 0}",""])},vadm:function(e,t,a){"use strict";function r(e){a("ZZ37")}Object.defineProperty(t,"__esModule",{value:!0});var s=a("vMJZ"),o={components:{},data:function(){return{ruleForm:{username:"",email:"",skype:"",is_active:"",group:"",roles:"",password:"qwert@12345"},rules:{username:[{required:!0,message:"请输入用户名",trigger:"blur"}],email:[{required:!0,type:"email",message:"请输入正确的Email地址",trigger:"blur"}],skype:[{required:!0,message:"请输入正确的Skype地址",trigger:"blur"}],group:[{required:!0,message:"请选择用户分组",trigger:"change"}],roles:[{required:!0,message:"请选择用户角色",trigger:"blur"}]},groups:"",roles:""}},created:function(){this.getGroups(),this.getRoles()},methods:{postForm:function(e){var t=this;this.$refs[e].validate(function(e){if(!e)return console.log("error submit!!"),!1;Object(s.j)(t.ruleForm).then(function(e){"ok"===e.statusText&&t.$message({type:"success",message:"恭喜你，新建成功"})}).catch(function(e){t.$message.error("新建失败"),console.log(e)})}),this.$emit("DialogStatus",!1)},resetForm:function(e){this.ruleForm.hosts=[],this.$refs[e].resetFields()},getHosts:function(e){this.ruleForm.hosts=e},getGroups:function(){var e=this;Object(s.d)().then(function(t){e.groups=t.data.results})},getRoles:function(){var e=this;Object(s.e)().then(function(t){e.roles=t.data.results})},setPasswd:function(){this.ruleForm.password=Math.random().toString(35).slice(2)}}},l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm",attrs:{model:e.ruleForm,rules:e.rules,"label-width":"100px"}},[a("el-form-item",{attrs:{label:"用户名",prop:"username"}},[a("el-input",{model:{value:e.ruleForm.username,callback:function(t){e.$set(e.ruleForm,"username",t)},expression:"ruleForm.username"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"Email",prop:"email"}},[a("el-input",{model:{value:e.ruleForm.email,callback:function(t){e.$set(e.ruleForm,"email",t)},expression:"ruleForm.email"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"Skype",prop:"email"}},[a("el-input",{model:{value:e.ruleForm.skype,callback:function(t){e.$set(e.ruleForm,"skype",t)},expression:"ruleForm.skype"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"用户分组",prop:"group"}},[a("el-select",{attrs:{placeholder:"请选择用户分组"},model:{value:e.ruleForm.group,callback:function(t){e.$set(e.ruleForm,"group",t)},expression:"ruleForm.group"}},e._l(e.groups,function(e){return a("el-option",{key:e.name,attrs:{value:e.name}})}))],1),e._v(" "),a("el-form-item",{attrs:{label:"是否激活",prop:"is_active"}},[a("el-switch",{attrs:{"on-text":"oo","off-text":"xx"},model:{value:e.ruleForm.is_active,callback:function(t){e.$set(e.ruleForm,"is_active",t)},expression:"ruleForm.is_active"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"角色",prop:"group"}},[a("el-select",{attrs:{placeholder:"请选择用户角色"},model:{value:e.ruleForm.roles,callback:function(t){e.$set(e.ruleForm,"roles",t)},expression:"ruleForm.roles"}},e._l(e.roles,function(e){return a("el-option",{key:e.name,attrs:{value:e.name}})}))],1),e._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.postForm("ruleForm")}}},[e._v("提交")]),e._v(" "),a("el-button",{attrs:{type:"danger"},on:{click:function(t){e.resetForm("ruleForm")}}},[e._v("清空")])],1)],1)},i=[],n={render:l,staticRenderFns:i},u=n,c=a("VU/8"),m=r,d=c(o,u,!1,m,null,null);t.default=d.exports}});