webpackJsonp([13],{AtRg:function(e,t,n){var a=n("L79g");"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);n("rjj0")("524220d8",a,!0)},L79g:function(e,t,n){t=e.exports=n("FZ+f")(!1),t.push([e.i,".card-title{padding-right:30px}.head-lavel{padding-bottom:50px}.table-button{float:left}.table-search{float:right}.table-pagination{padding:10px 0;float:right}",""])},V309:function(e,t,n){"use strict";function a(e){n("AtRg")}Object.defineProperty(t,"__esModule",{value:!0});var o=n("Dd8w"),r=n.n(o),i=n("bUp0"),s=n("NYxO"),l=n("QmSG"),c={components:{},data:function(){return{firstData:[],secondData:[],props:{label:"title",children:""},formEdit:!0,formAdd:!0,formStatus:"",showElement:!1,menuManager_btn_add:!0,menuManager_btn_edit:!0,menuManager_btn_del:!0,menuform:{parent:void 0,title:void 0,name:void 0,path:void 0,component:void 0,icon:void 0,redirect:void 0,hidden:void 0},is_second:!0,tabletotal:0,searchdata:"",currentPage:1,limit:l.LIMIT,offset:"",pagesize:[10,25,50,100],elementData:[],add_element:!1,elementform:{parent:"",name:"",code:""}}},computed:r()({},Object(s.b)(["elements"])),created:function(){this.fetchFirstData(),this.fetchSecondData(),this.fetchElementData()},methods:{fetchFirstData:function(){var e=this;Object(i.a)().then(function(t){e.firstData=t.data})},fetchNodeData:function(e,t){if(0===e.level)return t([{name:"region"}]);if(e.level>1)return t([]);var n={parent__title:e.data.title};Object(i.c)(n).then(function(e){var n=e.data;setTimeout(function(){t(n)},500)})},fetchSecondData:function(){var e=this,t={parent__title:void 0};Object(i.c)(t).then(function(t){e.secondData=t.data})},fetchElementData:function(){var e=this,t={parent__title:void 0};Object(i.b)(t).then(function(t){e.elementData=t.data})},handleNodeClick:function(e,t){this.is_second=t.isLeaf,this.formEdit=!0,this.menuform=e},handlerEdit:function(){this.formEdit=!1,this.formStatus="update"},handlerAdd:function(){this.resetForm(),this.formEdit=!1,this.formStatus="create"},handleDelete:function(){this.resetForm()},handleClick:function(e,t){console.log(e,t)},onCancel:function(){this.formEdit=!0,this.formStatus=""},resetForm:function(){this.menuform={parent:void 0,title:void 0,name:void 0,path:void 0,component:void 0,icon:void 0,redirect:void 0,hidden:void 0}},searchClick:function(){this.fetchElementData()},handleSizeChange:function(e){this.limit=e,this.fetchElementData()},handleCurrentChange:function(e){this.offset=e-1,this.fetchElementData()},postFirstFormSubmit:function(){var e=this;Object(i.d)(this.menuform).then(function(t){e.$message({message:"恭喜你，添加成功",type:"success"}),e.fetchFirstData()}).catch(function(t){e.$message.error("添加失败"),console.log(t)})},putFirstFormSubmit:function(e){var t=this;Object(i.g)(e,this.menuform).then(function(e){t.$message({message:"恭喜你，更新成功",type:"success"}),t.fetchFirstData()}).catch(function(e){t.$message.error("更新失败"),console.log(e)})},postSecondFormSubmit:function(){var e=this;Object(i.f)(this.menuform).then(function(t){e.$message({message:"恭喜你，添加成功",type:"success"}),e.fetchFirstData(),e.fetchSecondData()}).catch(function(t){e.$message.error("添加失败"),console.log(t)})},putSecondFormSubmit:function(e){var t=this;Object(i.i)(e,this.menuform).then(function(e){t.$message({message:"恭喜你，更新成功",type:"success"}),t.fetchFirstData(),t.fetchSecondData()}).catch(function(e){t.$message.error("更新失败"),console.log(e)})},postElementFormSubmit:function(){var e=this;Object(i.e)(this.elementform).then(function(t){e.$message({message:"恭喜你，添加成功",type:"success"}),e.add_element=!1,e.fetchFirstData(),e.fetchElementData()}).catch(function(t){e.$message.error("添加失败"),console.log(t)})},putElementFormSubmit:function(e){var t=this;Object(i.h)(e,this.elementform).then(function(e){t.$message({message:"恭喜你，更新成功",type:"success"}),t.fetchFirstData(),t.fetchElementData()}).catch(function(e){t.$message.error("更新失败"),console.log(e)})},resetElementForm:function(e){this.$refs[e].resetFields()}}},m=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"components-container",staticStyle:{height:"100vh"}},[n("el-row",{attrs:{gutter:20}},[n("el-col",{attrs:{span:8}},[n("el-card",[n("div",{attrs:{slot:"header"},slot:"header"},[n("span",{staticClass:"card-title"},[e._v("菜单列表")]),e._v(" "),n("el-button-group",[e.menuManager_btn_add?n("el-button",{attrs:{type:"success",plain:"",size:"mini",icon:"plus"},on:{click:e.handlerAdd}},[e._v("\n              添加\n            ")]):e._e(),e._v(" "),e.menuManager_btn_edit?n("el-button",{attrs:{type:"primary",plain:"",size:"mini",icon:"edit"},on:{click:e.handlerEdit}},[e._v("\n              编辑\n            ")]):e._e(),e._v(" "),e.menuManager_btn_del?n("el-button",{attrs:{type:"danger",plain:"",size:"mini",icon:"delete",disabled:""},on:{click:e.handleDelete}},[e._v("\n              删除\n            ")]):e._e()],1)],1),e._v(" "),n("el-tree",{attrs:{data:e.firstData,props:e.props,load:e.fetchNodeData,accordion:"",lazy:""},on:{"node-click":e.handleNodeClick}})],1)],1),e._v(" "),n("el-col",{attrs:{span:8}},[n("el-card",{staticClass:"box-card"},[n("div",{attrs:{slot:"header"},slot:"header"},[n("span",{staticClass:"card-title"},[e._v("菜单表单")]),e._v(" "),n("el-switch",{attrs:{"active-text":"子菜单","inactive-text":"父菜单"},on:{change:e.resetForm},model:{value:e.is_second,callback:function(t){e.is_second=t},expression:"is_second"}})],1),e._v(" "),n("el-form",{ref:"menuform",attrs:{"label-width":"80px",model:e.menuform}},[e.is_second?n("el-form-item",{attrs:{label:"父级菜单",prop:"parent"}},[n("el-select",{attrs:{placeholder:"请选择父级菜单"},model:{value:e.menuform.parent,callback:function(t){e.$set(e.menuform,"parent",t)},expression:"menuform.parent"}},e._l(e.firstData,function(e){return n("el-option",{key:e.id,attrs:{value:e.title}})}))],1):e._e(),e._v(" "),n("el-form-item",{attrs:{label:"菜单标题",prop:"title"}},[n("el-input",{attrs:{disabled:e.formEdit,placeholder:"请输入title"},model:{value:e.menuform.title,callback:function(t){e.$set(e.menuform,"title",t)},expression:"menuform.title"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"菜单编码",prop:"name"}},[n("el-input",{attrs:{disabled:e.formEdit,placeholder:"请输入name"},model:{value:e.menuform.name,callback:function(t){e.$set(e.menuform,"name",t)},expression:"menuform.name"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"url路径",prop:"path"}},[n("el-input",{attrs:{disabled:e.formEdit,placeholder:"请输入path"},model:{value:e.menuform.path,callback:function(t){e.$set(e.menuform,"path",t)},expression:"menuform.path"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"前端组件",prop:"component"}},[n("el-input",{attrs:{disabled:e.formEdit,placeholder:"请输入component"},model:{value:e.menuform.component,callback:function(t){e.$set(e.menuform,"component",t)},expression:"menuform.component"}})],1),e._v(" "),e.is_second?e._e():n("el-form-item",{attrs:{label:"图标",prop:"icon"}},[n("el-input",{attrs:{disabled:e.formEdit,placeholder:"请输入icon"},model:{value:e.menuform.icon,callback:function(t){e.$set(e.menuform,"icon",t)},expression:"menuform.icon"}})],1),e._v(" "),e.is_second?e._e():n("el-form-item",{attrs:{label:"redirect",prop:"redirect"}},[n("el-input",{attrs:{disabled:e.formEdit,placeholder:"请输入redirect"},model:{value:e.menuform.redirect,callback:function(t){e.$set(e.menuform,"redirect",t)},expression:"menuform.redirect"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"是否隐藏",prop:"hidden"}},[n("el-switch",{attrs:{"active-color":"#13ce66","inactive-color":"#ff4949"},model:{value:e.menuform.hidden,callback:function(t){e.$set(e.menuform,"hidden",t)},expression:"menuform.hidden"}})],1),e._v(" "),"update"!=e.formStatus||e.is_second?e._e():n("el-form-item",[n("el-button",{attrs:{type:"primary"},on:{click:function(t){e.putFirstFormSubmit(e.menuform.id)}}},[e._v("更新")]),e._v(" "),n("el-button",{on:{click:e.onCancel}},[e._v("取消")])],1),e._v(" "),"update"==e.formStatus&&e.is_second?n("el-form-item",[n("el-button",{attrs:{type:"primary"},on:{click:function(t){e.putSecondFormSubmit(e.menuform.id)}}},[e._v("更新")]),e._v(" "),n("el-button",{on:{click:e.onCancel}},[e._v("取消")])],1):e._e(),e._v(" "),"create"!=e.formStatus||e.is_second?e._e():n("el-form-item",[n("el-button",{attrs:{type:"primary"},on:{click:e.postFirstFormSubmit}},[e._v("保存")]),e._v(" "),n("el-button",{on:{click:e.onCancel}},[e._v("取消")])],1),e._v(" "),"create"==e.formStatus&&e.is_second?n("el-form-item",[n("el-button",{attrs:{type:"primary"},on:{click:e.postSecondFormSubmit}},[e._v("保存")]),e._v(" "),n("el-button",{on:{click:e.onCancel}},[e._v("取消")])],1):e._e()],1)],1)],1),e._v(" "),n("el-col",{attrs:{span:8}},[e.is_second?n("el-card",{staticClass:"box-card"},[n("div",{attrs:{slot:"header"},slot:"header"},[n("span",{staticClass:"card-title"},[e._v("资源按钮列表")])]),e._v(" "),n("div",{staticClass:"head-lavel"},[n("div",{staticClass:"table-button"},[n("el-button",{attrs:{type:"primary",plain:"",size:"mini",icon:"el-icon-plus"},on:{click:function(t){e.add_element=!0}}},[e._v("新建")])],1),e._v(" "),n("div",{staticClass:"table-search"},[n("el-input",{attrs:{placeholder:"搜索 ..."},nativeOn:{keyup:function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13,t.key))return null;e.searchClick(t)}},model:{value:e.searchdata,callback:function(t){e.searchdata=t},expression:"searchdata"}},[n("i",{staticClass:"el-icon-search el-input__icon",attrs:{slot:"suffix"},on:{click:e.searchClick},slot:"suffix"})])],1)]),e._v(" "),n("div",[n("el-table",{staticStyle:{width:"100%"},attrs:{data:e.elementData,border:""}},[n("el-table-column",{attrs:{prop:"name",label:"资源名",sortable:"custom"}}),e._v(" "),n("el-table-column",{attrs:{prop:"code",label:"资源代码"}}),e._v(" "),n("el-table-column",{attrs:{label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-button",{attrs:{type:"success",plain:"",size:"mini",icon:"el-icon-edit"}},[e._v("修改")]),e._v(" "),n("el-button",{attrs:{type:"danger",plain:"",size:"mini",icon:"el-icon-close"}},[e._v("删除")])]}}])})],1)],1),e._v(" "),n("div",{staticClass:"table-pagination"},[n("el-pagination",{attrs:{"current-page":e.currentPage,"page-sizes":e.pagesize,"page-size":e.limit,layout:"prev, pager, next, sizes",total:e.tabletotal},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange,"update:currentPage":function(t){e.currentPage=t}}})],1)]):e._e()],1)],1),e._v(" "),n("el-dialog",{attrs:{visible:e.add_element},on:{"update:visible":function(t){e.add_element=t}}},[n("el-form",{ref:"elementform",attrs:{model:e.elementform,"label-width":"100px"}},[n("el-form-item",{attrs:{label:"二级菜单",prop:"parent"}},[n("el-select",{attrs:{placeholder:"请选择二级菜单"},model:{value:e.elementform.parent,callback:function(t){e.$set(e.elementform,"parent",t)},expression:"elementform.parent"}},e._l(e.secondData,function(e){return n("el-option",{key:e.name,attrs:{value:e.title}})}))],1),e._v(" "),n("el-form-item",{attrs:{label:"菜单元素",prop:"name"}},[n("el-input",{model:{value:e.elementform.name,callback:function(t){e.$set(e.elementform,"name",t)},expression:"elementform.name"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"元素code",prop:"code"}},[n("el-input",{model:{value:e.elementform.code,callback:function(t){e.$set(e.elementform,"code",t)},expression:"elementform.code"}})],1),e._v(" "),n("el-form-item",[n("el-button",{attrs:{type:"primary"},on:{click:function(t){e.postElementFormSubmit("elementform")}}},[e._v("立即创建")]),e._v(" "),n("el-button",{on:{click:function(t){e.resetElementForm("elementform")}}},[e._v("重置")])],1)],1)],1)],1)},u=[],d={render:m,staticRenderFns:u},f=d,p=n("VU/8"),h=a,v=p(c,f,!1,h,null,null);t.default=v.exports},bUp0:function(e,t,n){"use strict";function a(e){return Object(d.a)({url:p.a.firstmenus,method:"post",data:e})}function o(e,t){return Object(d.a)({url:t?p.a.firstmenus+t+"/":p.a.firstmenus,method:"get",params:e})}function r(e,t){return Object(d.a)({url:p.a.firstmenus+e+"/",method:"put",data:t})}function i(e){return Object(d.a)({url:p.a.secondmenus,method:"post",data:e})}function s(e,t){return Object(d.a)({url:t?p.a.secondmenus+t+"/":p.a.secondmenus,method:"get",params:e})}function l(e,t){return Object(d.a)({url:p.a.secondmenus+e+"/",method:"put",data:t})}function c(e){return console.log(e),Object(d.a)({url:p.a.menumetas,method:"post",data:e})}function m(e,t){return Object(d.a)({url:t?p.a.menumetas+t+"/":p.a.menumetas,method:"get",params:e})}function u(e,t){return Object(d.a)({url:p.a.menumetas+e+"/",method:"put",data:t})}t.d=a,t.a=o,t.g=r,t.f=i,t.c=s,t.i=l,t.e=c,t.b=m,t.h=u;var d=n("vLgD"),f=n("QmSG"),p=n.n(f)}});