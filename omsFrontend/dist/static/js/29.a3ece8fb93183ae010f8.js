webpackJsonp([29],{DQwc:function(e,r,l){"use strict";function t(e){l("w7EE")}Object.defineProperty(r,"__esModule",{value:!0});var a=l("Zk8K"),o=l("vMJZ"),u={data:function(){return{ruleForm:{platform:"",merchant:"",type:"",m_md5key:"",m_public_key:"",m_private_key:"",p_public_key:"",level:0,m_backurl:"",m_forwardurl:"",m_submiturl:"",action_user:""},rules:{platform:[{required:!0,message:"请输入正确的内容",trigger:"change"}],merchant:[{required:!0,message:"请输入正确的内容",trigger:"change"}],type:[{required:!0,message:"请输入正确的内容",trigger:"change"}],m_id:[{required:!0,message:"请输入正确的内容",trigger:"blur"}],m_md5key:[{required:!0,message:"请输入正确的内容",trigger:"blur"}],m_public_key:[{required:!0,message:"请输入正确的内容",trigger:"blur"}],m_private_key:[{required:!0,message:"请输入正确的内容",trigger:"blur"}],p_public_key:[{required:!0,message:"请输入正确的内容",trigger:"blur"}],level:[{required:!0,type:"number",message:"请输入正确的内容",trigger:"blur"}],m_backurl:[{required:!0,message:"请输入正确的内容",trigger:"blur"}],m_forwardurl:[{required:!0,message:"请输入正确的内容",trigger:"blur"}],m_submiturl:[{required:!0,message:"请输入正确的内容",trigger:"blur"}],action_user:[{required:!0,message:"请输入正确的内容",trigger:"blur"}]},platforms:[],merchants:[],paychannelnames:[],users:[]}},created:function(){this.getPlatforms(),this.getPayChannelNames(),this.getTicketUsers()},methods:{submitForm:function(e){var r=this;this.$refs[e].validate(function(l){if(!l)return console.log("error submit!!"),!1;Object(a.j)(r.ruleForm).then(function(l){r.$emit("formdata",l.data),r.$refs[e].resetFields()})})},resetForm:function(e){this.$refs[e].resetFields()},getPlatforms:function(){var e=this;Object(a.h)().then(function(r){e.platforms=r.data})},getMerchants:function(){var e=this,r={platform__name:this.ruleForm.platform};Object(a.e)(r).then(function(r){e.merchants=r.data})},getPayChannelNames:function(){var e=this;Object(a.g)().then(function(r){e.paychannelnames=r.data})},getTicketUsers:function(){var e=this;Object(o.f)().then(function(r){e.users=r.data})}}},m=function(){var e=this,r=e.$createElement,l=e._self._c||r;return l("el-form",{ref:"ruleForm",attrs:{model:e.ruleForm,rules:e.rules,"label-width":"100px"}},[l("el-form-item",{attrs:{label:"平台",prop:"platform"}},[l("el-select",{attrs:{filterable:"",placeholder:"请选择平台"},on:{change:e.getMerchants},model:{value:e.ruleForm.platform,callback:function(r){e.$set(e.ruleForm,"platform",r)},expression:"ruleForm.platform"}},e._l(e.platforms,function(e){return l("el-option",{key:e.id,attrs:{value:e.name}})}))],1),e._v(" "),l("el-form-item",{attrs:{label:"商户",prop:"merchant"}},[l("el-select",{attrs:{filterable:"",placeholder:"请选择商户"},model:{value:e.ruleForm.merchant,callback:function(r){e.$set(e.ruleForm,"merchant",r)},expression:"ruleForm.merchant"}},e._l(e.merchants,function(e){return l("el-option",{key:e.id,attrs:{value:e.name}})}))],1),e._v(" "),l("el-form-item",{attrs:{label:"类型",prop:"type"}},[l("el-select",{attrs:{filterable:"",placeholder:"请选择通道类型"},model:{value:e.ruleForm.type,callback:function(r){e.$set(e.ruleForm,"type",r)},expression:"ruleForm.type"}},e._l(e.paychannelnames,function(e){return l("el-option",{key:e.id,attrs:{value:e.name}})}))],1),e._v(" "),l("el-form-item",{attrs:{label:"MD5KEY",prop:"m_md5key"}},[l("el-input",{model:{value:e.ruleForm.m_md5key,callback:function(r){e.$set(e.ruleForm,"m_md5key",r)},expression:"ruleForm.m_md5key"}})],1),e._v(" "),l("el-form-item",{attrs:{label:"商户公钥",prop:"m_public_key"}},[l("el-input",{model:{value:e.ruleForm.m_public_key,callback:function(r){e.$set(e.ruleForm,"m_public_key",r)},expression:"ruleForm.m_public_key"}})],1),e._v(" "),l("el-form-item",{attrs:{label:"商户私钥",prop:"m_private_key"}},[l("el-input",{model:{value:e.ruleForm.m_private_key,callback:function(r){e.$set(e.ruleForm,"m_private_key",r)},expression:"ruleForm.m_private_key"}})],1),e._v(" "),l("el-form-item",{attrs:{label:"平台公钥",prop:"p_public_key"}},[l("el-input",{model:{value:e.ruleForm.p_public_key,callback:function(r){e.$set(e.ruleForm,"p_public_key",r)},expression:"ruleForm.p_public_key"}})],1),e._v(" "),l("el-form-item",{attrs:{label:"紧急度",prop:"m_backurl"}},[l("el-rate",{attrs:{colors:["#99A9BF","#F7BA2A","#ff1425"],"show-text":"",texts:["E","D","C","B","A"]},model:{value:e.ruleForm.level,callback:function(r){e.$set(e.ruleForm,"level",r)},expression:"ruleForm.level"}}),e._v(" "),l("a",{staticClass:"tips"},[e._v("Tip：星数代表问题紧急程度，星数越多，代表越紧急")])],1),e._v(" "),l("el-form-item",{attrs:{label:"回调域名",prop:"m_backurl"}},[l("el-input",{model:{value:e.ruleForm.m_backurl,callback:function(r){e.$set(e.ruleForm,"m_backurl",r)},expression:"ruleForm.m_backurl"}})],1),e._v(" "),l("el-form-item",{attrs:{label:"转发域名",prop:"m_forwardurl"}},[l("el-input",{model:{value:e.ruleForm.m_forwardurl,callback:function(r){e.$set(e.ruleForm,"m_forwardurl",r)},expression:"ruleForm.m_forwardurl"}})],1),e._v(" "),l("el-form-item",{attrs:{label:"提交域名",prop:"m_submiturl"}},[l("el-input",{model:{value:e.ruleForm.m_submiturl,callback:function(r){e.$set(e.ruleForm,"m_submiturl",r)},expression:"ruleForm.m_submiturl"}})],1),e._v(" "),l("el-form-item",{attrs:{label:"通知人",prop:"action_user"}},[l("el-select",{attrs:{filterable:"",placeholder:"请选择通知人"},model:{value:e.ruleForm.action_user,callback:function(r){e.$set(e.ruleForm,"action_user",r)},expression:"ruleForm.action_user"}},e._l(e.users,function(e){return l("el-option",{key:e.id,attrs:{value:e.username}})}))],1),e._v(" "),l("el-form-item",[l("el-button",{attrs:{type:"primary"},on:{click:function(r){e.submitForm("ruleForm")}}},[e._v("立即创建")]),e._v(" "),l("el-button",{on:{click:function(r){e.resetForm("ruleForm")}}},[e._v("重置")])],1)],1)},s=[],i={render:m,staticRenderFns:s},n=i,c=l("VU/8"),p=t,_=c(u,n,!1,p,null,null);r.default=_.exports},LBDP:function(e,r,l){r=e.exports=l("FZ+f")(!1),r.push([e.i,".heng{margin:20px 0;height:1px;border:0;background-color:rgba(174,127,255,.38);color:#29e11c}.tips{color:hsla(0,0%,50%,.82)}",""])},w7EE:function(e,r,l){var t=l("LBDP");"string"==typeof t&&(t=[[e.i,t,""]]),t.locals&&(e.exports=t.locals);l("rjj0")("42d6efee",t,!0)}});