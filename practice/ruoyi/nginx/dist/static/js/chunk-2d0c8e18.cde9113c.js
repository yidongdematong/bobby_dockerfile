(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0c8e18"],{5788:function(e,t,s){"use strict";s.r(t);var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"app-container"},[s("el-form",{directives:[{name:"show",rawName:"v-show",value:e.showSearch,expression:"showSearch"}],ref:"queryForm",attrs:{model:e.queryParams,size:"small",inline:!0,"label-width":"68px"}},[s("el-form-item",{attrs:{label:"岗位编码",prop:"postCode"}},[s("el-input",{attrs:{placeholder:"请输入岗位编码",clearable:""},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleQuery(t)}},model:{value:e.queryParams.postCode,callback:function(t){e.$set(e.queryParams,"postCode",t)},expression:"queryParams.postCode"}})],1),s("el-form-item",{attrs:{label:"岗位名称",prop:"postName"}},[s("el-input",{attrs:{placeholder:"请输入岗位名称",clearable:""},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleQuery(t)}},model:{value:e.queryParams.postName,callback:function(t){e.$set(e.queryParams,"postName",t)},expression:"queryParams.postName"}})],1),s("el-form-item",{attrs:{label:"状态",prop:"status"}},[s("el-select",{attrs:{placeholder:"岗位状态",clearable:""},model:{value:e.queryParams.status,callback:function(t){e.$set(e.queryParams,"status",t)},expression:"queryParams.status"}},e._l(e.dict.type.sys_normal_disable,(function(e){return s("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),s("el-form-item",[s("el-button",{attrs:{type:"primary",icon:"el-icon-search",size:"mini"},on:{click:e.handleQuery}},[e._v("搜索")]),s("el-button",{attrs:{icon:"el-icon-refresh",size:"mini"},on:{click:e.resetQuery}},[e._v("重置")])],1)],1),s("el-row",{staticClass:"mb8",attrs:{gutter:10}},[s("el-col",{attrs:{span:1.5}},[s("el-button",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["system:post:add"],expression:"['system:post:add']"}],attrs:{type:"primary",plain:"",icon:"el-icon-plus",size:"mini"},on:{click:e.handleAdd}},[e._v("新增")])],1),s("el-col",{attrs:{span:1.5}},[s("el-button",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["system:post:edit"],expression:"['system:post:edit']"}],attrs:{type:"success",plain:"",icon:"el-icon-edit",size:"mini",disabled:e.single},on:{click:e.handleUpdate}},[e._v("修改")])],1),s("el-col",{attrs:{span:1.5}},[s("el-button",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["system:post:remove"],expression:"['system:post:remove']"}],attrs:{type:"danger",plain:"",icon:"el-icon-delete",size:"mini",disabled:e.multiple},on:{click:e.handleDelete}},[e._v("删除")])],1),s("el-col",{attrs:{span:1.5}},[s("el-button",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["system:post:export"],expression:"['system:post:export']"}],attrs:{type:"warning",plain:"",icon:"el-icon-download",size:"mini"},on:{click:e.handleExport}},[e._v("导出")])],1),s("right-toolbar",{attrs:{showSearch:e.showSearch},on:{"update:showSearch":function(t){e.showSearch=t},"update:show-search":function(t){e.showSearch=t},queryTable:e.getList}})],1),s("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],attrs:{data:e.postList},on:{"selection-change":e.handleSelectionChange}},[s("el-table-column",{attrs:{type:"selection",width:"55",align:"center"}}),s("el-table-column",{attrs:{label:"岗位编号",align:"center",prop:"postId"}}),s("el-table-column",{attrs:{label:"岗位编码",align:"center",prop:"postCode"}}),s("el-table-column",{attrs:{label:"岗位名称",align:"center",prop:"postName"}}),s("el-table-column",{attrs:{label:"岗位排序",align:"center",prop:"postSort"}}),s("el-table-column",{attrs:{label:"状态",align:"center",prop:"status"},scopedSlots:e._u([{key:"default",fn:function(t){return[s("dict-tag",{attrs:{options:e.dict.type.sys_normal_disable,value:t.row.status}})]}}])}),s("el-table-column",{attrs:{label:"创建时间",align:"center",prop:"createTime",width:"180"},scopedSlots:e._u([{key:"default",fn:function(t){return[s("span",[e._v(e._s(e.parseTime(t.row.createTime)))])]}}])}),s("el-table-column",{attrs:{label:"操作",align:"center","class-name":"small-padding fixed-width"},scopedSlots:e._u([{key:"default",fn:function(t){return[s("el-button",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["system:post:edit"],expression:"['system:post:edit']"}],attrs:{size:"mini",type:"text",icon:"el-icon-edit"},on:{click:function(s){return e.handleUpdate(t.row)}}},[e._v("修改")]),s("el-button",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["system:post:remove"],expression:"['system:post:remove']"}],attrs:{size:"mini",type:"text",icon:"el-icon-delete"},on:{click:function(s){return e.handleDelete(t.row)}}},[e._v("删除")])]}}])})],1),s("pagination",{directives:[{name:"show",rawName:"v-show",value:e.total>0,expression:"total>0"}],attrs:{total:e.total,page:e.queryParams.pageNum,limit:e.queryParams.pageSize},on:{"update:page":function(t){return e.$set(e.queryParams,"pageNum",t)},"update:limit":function(t){return e.$set(e.queryParams,"pageSize",t)},pagination:e.getList}}),s("el-dialog",{attrs:{title:e.title,visible:e.open,width:"500px","append-to-body":""},on:{"update:visible":function(t){e.open=t}}},[s("el-form",{ref:"form",attrs:{model:e.form,rules:e.rules,"label-width":"80px"}},[s("el-form-item",{attrs:{label:"岗位名称",prop:"postName"}},[s("el-input",{attrs:{placeholder:"请输入岗位名称"},model:{value:e.form.postName,callback:function(t){e.$set(e.form,"postName",t)},expression:"form.postName"}})],1),s("el-form-item",{attrs:{label:"岗位编码",prop:"postCode"}},[s("el-input",{attrs:{placeholder:"请输入编码名称"},model:{value:e.form.postCode,callback:function(t){e.$set(e.form,"postCode",t)},expression:"form.postCode"}})],1),s("el-form-item",{attrs:{label:"岗位顺序",prop:"postSort"}},[s("el-input-number",{attrs:{"controls-position":"right",min:0},model:{value:e.form.postSort,callback:function(t){e.$set(e.form,"postSort",t)},expression:"form.postSort"}})],1),s("el-form-item",{attrs:{label:"岗位状态",prop:"status"}},[s("el-radio-group",{model:{value:e.form.status,callback:function(t){e.$set(e.form,"status",t)},expression:"form.status"}},e._l(e.dict.type.sys_normal_disable,(function(t){return s("el-radio",{key:t.value,attrs:{label:t.value}},[e._v(e._s(t.label))])})),1)],1),s("el-form-item",{attrs:{label:"备注",prop:"remark"}},[s("el-input",{attrs:{type:"textarea",placeholder:"请输入内容"},model:{value:e.form.remark,callback:function(t){e.$set(e.form,"remark",t)},expression:"form.remark"}})],1)],1),s("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[s("el-button",{attrs:{type:"primary"},on:{click:e.submitForm}},[e._v("确 定")]),s("el-button",{on:{click:e.cancel}},[e._v("取 消")])],1)],1)],1)},o=[],r=s("5530"),n=(s("d81d"),s("a573"),s("b775"));function l(e){return Object(n["a"])({url:"/system/post/list",method:"get",params:e})}function i(e){return Object(n["a"])({url:"/system/post/"+e,method:"get"})}function m(e){return Object(n["a"])({url:"/system/post",method:"post",data:e})}function u(e){return Object(n["a"])({url:"/system/post",method:"put",data:e})}function p(e){return Object(n["a"])({url:"/system/post/"+e,method:"delete"})}var c={name:"Post",dicts:["sys_normal_disable"],data:function(){return{loading:!0,ids:[],single:!0,multiple:!0,showSearch:!0,total:0,postList:[],title:"",open:!1,queryParams:{pageNum:1,pageSize:10,postCode:void 0,postName:void 0,status:void 0},form:{},rules:{postName:[{required:!0,message:"岗位名称不能为空",trigger:"blur"}],postCode:[{required:!0,message:"岗位编码不能为空",trigger:"blur"}],postSort:[{required:!0,message:"岗位顺序不能为空",trigger:"blur"}]}}},created:function(){this.getList()},methods:{getList:function(){var e=this;this.loading=!0,l(this.queryParams).then((function(t){e.postList=t.rows,e.total=t.total,e.loading=!1}))},cancel:function(){this.open=!1,this.reset()},reset:function(){this.form={postId:void 0,postCode:void 0,postName:void 0,postSort:0,status:"0",remark:void 0},this.resetForm("form")},handleQuery:function(){this.queryParams.pageNum=1,this.getList()},resetQuery:function(){this.resetForm("queryForm"),this.handleQuery()},handleSelectionChange:function(e){this.ids=e.map((function(e){return e.postId})),this.single=1!=e.length,this.multiple=!e.length},handleAdd:function(){this.reset(),this.open=!0,this.title="添加岗位"},handleUpdate:function(e){var t=this;this.reset();var s=e.postId||this.ids;i(s).then((function(e){t.form=e.data,t.open=!0,t.title="修改岗位"}))},submitForm:function(){var e=this;this.$refs["form"].validate((function(t){t&&(void 0!=e.form.postId?u(e.form).then((function(t){e.$modal.msgSuccess("修改成功"),e.open=!1,e.getList()})):m(e.form).then((function(t){e.$modal.msgSuccess("新增成功"),e.open=!1,e.getList()})))}))},handleDelete:function(e){var t=this,s=e.postId||this.ids;this.$modal.confirm('是否确认删除岗位编号为"'+s+'"的数据项？').then((function(){return p(s)})).then((function(){t.getList(),t.$modal.msgSuccess("删除成功")})).catch((function(){}))},handleExport:function(){this.download("system/post/export",Object(r["a"])({},this.queryParams),"post_".concat((new Date).getTime(),".xlsx"))}}},d=c,h=s("2877"),f=Object(h["a"])(d,a,o,!1,null,null,null);t["default"]=f.exports}}]);