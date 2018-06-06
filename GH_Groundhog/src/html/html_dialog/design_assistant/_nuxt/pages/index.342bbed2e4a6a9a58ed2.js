webpackJsonp([0],{"+ptz":function(a,e,t){"use strict";var i=function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("div",{directives:[{name:"fluid",rawName:"v-fluid"}]},[t("a-sidenav",[t("a-sidenav-item",{directives:[{name:"selected",rawName:"v-selected"}],nativeOn:{click:function(e){a.selectedTab="location"}}},[t("i",{staticClass:"material-icons"},[a._v("location_on")]),t("span",[a._v("Location")])]),t("a-sidenav-item",{nativeOn:{click:function(e){a.selectedTab="materials"}}},[t("i",{staticClass:"material-icons"},[a._v("format_paint")]),t("span",[a._v("Materials")])]),t("a-sidenav-item",{nativeOn:{click:function(e){a.selectedTab="tasks"}}},[t("i",{staticClass:"material-icons"},[a._v("brightness_low")]),t("span",[a._v("Tasks")])]),t("a-sidenav-item",{nativeOn:{click:function(e){a.selectedTab="luminaires"}}},[t("i",{staticClass:"material-icons"},[a._v("lightbulb_outline")]),t("span",[a._v("Luminaires")])]),t("a-sidenav-item",{nativeOn:{click:function(e){a.selectedTab="calculate"}}},[t("i",{staticClass:"material-icons"},[a._v("play_arrow")]),t("span",[a._v("Calculate")])]),t("a-sidenav-item",{nativeOn:{click:function(e){a.selectedTab="report"}}},[t("i",{staticClass:"material-icons"},[a._v("poll")]),t("span",[a._v("Report")])])],1),t("location",{directives:[{name:"show",rawName:"v-show",value:"location"===a.selectedTab,expression:"selectedTab === 'location'"}]}),t("materials",{directives:[{name:"show",rawName:"v-show",value:"materials"===a.selectedTab,expression:"selectedTab === 'materials'"}]}),t("tasks",{directives:[{name:"show",rawName:"v-show",value:"tasks"===a.selectedTab,expression:"selectedTab === 'tasks'"}]}),t("luminaires",{directives:[{name:"show",rawName:"v-show",value:"luminaires"===a.selectedTab,expression:"selectedTab === 'luminaires'"}]}),t("calculate",{directives:[{name:"show",rawName:"v-show",value:"calculate"===a.selectedTab,expression:"selectedTab === 'calculate'"}]}),t("report",{directives:[{name:"show",rawName:"v-show",value:"report"===a.selectedTab,expression:"selectedTab === 'report'"}]})],1)};i._withStripped=!0;var o={render:i,staticRenderFns:[]};e.a=o},"/TYz":function(a,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=t("A+xb"),o=t("+ptz"),n=!1;var r=function(a){n||t("gtIY")},s=t("VU/8")(i.a,o.a,!1,r,null,null);s.options.__file="pages/index.vue",e.default=s.exports},"1Bpo":function(a,e,t){t("Zjzr")?project_location={country:"Chile",city:"Santiago",latitude:-33,longitude:-73,timezone:-4,albedo:.2}:project_location={}},"6ssh":function(a,e,t){"use strict";var i=function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("div",{directives:[{name:"container",rawName:"v-container"},{name:"with-sidenav",rawName:"v-with-sidenav"}]},[t("a-navbar",{attrs:{fixed:"",variant:"primary"}},[t("i",{staticClass:"material-icons",attrs:{slot:"toggle-icon"},slot:"toggle-icon"},[a._v("menu")]),t("a-input",{attrs:{label:"Filter",type:"text"}}),t("a-button",{attrs:{variant:"primary"},nativeOn:{click:function(e){a.$refs.createDialog.show()}}},[a._v("Create material")])],1),t("span",{directives:[{name:"show",rawName:"v-show",value:!a.materials||0==a.materials.length,expression:"!materials || materials.length == 0"}]},[a._v("There are no materials in your model")]),t("a-table",{directives:[{name:"show",rawName:"v-show",value:a.materials.length>0,expression:"materials.length > 0"}],staticClass:"selectable-row"},[t("thead",[t("tr",[a._l(a.fields,function(e){return t("th",{key:e.key},[a._v(a._s(e.label))])}),t("th",[a._v("Color")]),t("th")],2)]),t("tbody",a._l(a.materials,function(e){return t("tr",{key:e.name,staticClass:"selectable"},[a._l(a.fields,function(i){return t("td",{key:i.key,on:{click:function(t){a.use(e.name)}}},[a._v(a._s(e[i.key]))])}),t("color-cell",{attrs:{color:e.color},nativeOn:{click:function(t){a.use(e.name)}}}),t("td",{staticClass:"actions"},[t("i",{staticClass:"material-icons",on:{click:function(t){a.edit(e.name)}}},[a._v("mode_edit")]),t("i",{staticClass:"material-icons",on:{click:function(t){a.remove(e.name)}}},[a._v("delete")])])],2)}))]),t("a-dialog",{ref:"createDialog",attrs:{actions:a.dialogActions,title:"Material editor"},on:{close:function(e){a.onCloseDialog()}}},[t("form",[t("a-input",{attrs:{disabled:a.editing,label:"Name"},model:{value:a.selectedMaterial.name,callback:function(e){a.$set(a.selectedMaterial,"name",e)},expression:"selectedMaterial.name"}}),t("a-select",{attrs:{options:Object.keys(a.materialProps)},model:{value:a.selectedMaterial.class,callback:function(e){a.$set(a.selectedMaterial,"class",e)},expression:"selectedMaterial.class"}}),t("a-hsv-color-pick",{model:{value:a.selectedMaterial.color,callback:function(e){a.$set(a.selectedMaterial,"color",e)},expression:"selectedMaterial.color"}}),a._l(a.materialProps[a.selectedMaterial.class],function(e,i){return t("a-input",{key:i,attrs:{type:"number",required:!0,max:e.max,min:e.min,label:i},model:{value:a.selectedMaterial[i],callback:function(e){a.$set(a.selectedMaterial,i,e)},expression:"selectedMaterial[index]"}})})],2)]),t("a-toast",{ref:"materialUpdated"},[a._v("Material list updated")])],1)};i._withStripped=!0;var o={render:i,staticRenderFns:[]};e.a=o},"7Ga8":function(a,e,t){"use strict";var i=t("LIrc"),o=t("z0EK"),n=t("VU/8")(i.a,o.a,!1,null,null,null);n.options.__file="components/location.vue",e.a=n.exports},"8fw+":function(a,e){a.exports={inserted:function(a,e){a.placeholder="Not Set...";var t=document.createElement("i");t.classList.add("material-icons");var i=document.createTextNode("mode_edit");t.appendChild(i),t.style.fontSize="inherit",a.parentNode.insertBefore(t,a.nextSibling)}}},"A+xb":function(a,e,t){"use strict";var i=t("7Ga8"),o=t("JiM7"),n=t("kRQz"),r=t("oJKR"),s=t("pLur"),l=t("MUhK");e.a={components:{Location:i.a,Materials:o.a,Tasks:n.a,Luminaires:r.a,Calculate:s.a,Report:l.a},methods:{},data:function(){return{selectedTab:"location"}}}},JiM7:function(a,e,t){"use strict";var i=t("e4A+"),o=t("6ssh"),n=t("VU/8")(i.a,o.a,!1,null,null,null);n.options.__file="components/materials.vue",e.a=n.exports},LIrc:function(a,e,t){"use strict";var i=t("1Bpo"),o=(t.n(i),t("8fw+")),n=t.n(o),r=t("TY++"),s=t.n(r);e.a={directives:{editable:n.a},methods:{updateLocation:function(){this.skp.call_action("update_model_location","")}},data:function(){return{test:!1,location:project_location,skp:s.a}}}},LVUn:function(a,e,t){"use strict";var i=function(){var a=this.$createElement,e=this._self._c||a;return e("td",[e("div",{style:this.bck})])};i._withStripped=!0;var o={render:i,staticRenderFns:[]};e.a=o},MTS6:function(a,e,t){var i=t("Xkz1");"string"==typeof i&&(i=[[a.i,i,""]]),i.locals&&(a.exports=i.locals);t("rjj0")("05f4796f",i,!1,{sourceMap:!1})},MUhK:function(a,e,t){"use strict";var i=t("UjXD"),o=t("VU/8")(null,i.a,!1,null,null,null);o.options.__file="components/report.vue",e.a=o.exports},MenF:function(a,e,t){"use strict";var i=function(){var a=this.$createElement;return(this._self._c||a)("div",{directives:[{name:"container",rawName:"v-container"},{name:"with-sidenav",rawName:"v-with-sidenav"}]},[this._v("  \n  Luminaires!\n")])};i._withStripped=!0;var o={render:i,staticRenderFns:[]};e.a=o},Snp1:function(a,e,t){t("Zjzr")?materials=[{name:"Plastic 1",class:"Plastic",color:{r:12,g:132,b:221},specularity:0,roughness:.01},{name:"Metal 1",class:"Metal",color:{r:121,g:232,b:121},specularity:.95,roughness:.01}]:materials=[]},"TY++":function(module,exports,__webpack_require__){var isDev=__webpack_require__("Zjzr"),skpVersion=__webpack_require__("uD1z");module.exports={call_action:function call_action(actionName,args){isDev?console.log("SKP >>>>> calling "+actionName+'("'+args+'");'):"html_dialog"===skpVersion?eval("sketchup."+actionName+'("'+args+'");'):"web_dialog"===skpVersion?window.location="skp:"+actionName+"@"+args:alert("Unkown SketchUp UI version '"+skpVersion+"'")}}},UjXD:function(a,e,t){"use strict";var i=function(){var a=this.$createElement;return(this._self._c||a)("div",{directives:[{name:"container",rawName:"v-container"},{name:"with-sidenav",rawName:"v-with-sidenav"}]},[this._v("  \n  Report!\n")])};i._withStripped=!0;var o={render:i,staticRenderFns:[]};e.a=o},Xkz1:function(a,e,t){(a.exports=t("FZ+f")(!1)).push([a.i,"div[data-v-1025200d]{width:30px;height:30px;border-radius:50%}",""])},Zjzr:function(a,e){a.exports=!1},"e4A+":function(a,e,t){"use strict";var i=t("fZjL"),o=t.n(i),n=t("Snp1"),r=(t.n(n),t("TY++")),s=t.n(r),l=t("eXc3"),c={Plastic:{specularity:{default:.05,min:0,max:1},roughness:{default:0,min:0,max:1}},Metal:{specularity:{default:.95,min:0,max:1},roughness:{default:0,min:0,max:1}},Dielectric:{refraction_index:{default:1.52},hartmann_constant:{default:0}}};e.a={methods:{onCloseDialog:function(){this.selectedMaterial={class:o()(c)[0],color:{r:.6,g:.6,b:.6}},this.editing=!1},use:function(a){this.skp.call_action("use_material",a)},edit:function(a){var e=materials.find(function(e){return e.name===a});this.selectedMaterial=e,this.$refs.createDialog.show(),this.editing=!0},remove:function(a){var e=materials.findIndex(function(e){return e.name===a});e>-1&&materials.splice(e,1),this.skp.call_action("delete_material",a)},create:function(){var a=this.selectedMaterial,e=o()(this.materialProps[a.class]),t={};if(t.name=a.name,t.class=a.class,t.color=a.color,e.forEach(function(e){t[e]=a[e]}),this.editing){var i=materials.findIndex(function(a){return a.name===t.name});materials[i]=t,this.skp.call_action("edit_material",t)}else materials.push(t),this.skp.call_action("create_material",t);this.$refs.createDialog.show(),this.$refs.materialUpdated.show(),this.editing=!1}},components:{ColorCell:l.a},data:function(){return{materials:materials,fields:[{key:"name",label:"Name"},{key:"class",label:"Class"}],skp:s.a,selectedMaterial:{class:o()(c)[0],color:{r:.6,g:.6,b:.6}},editing:!1,materialProps:c,dialogActions:{Accept:this.create}}}}},eXc3:function(a,e,t){"use strict";var i=t("wo9U"),o=t("LVUn"),n=!1;var r=function(a){n||t("MTS6")},s=t("VU/8")(i.a,o.a,!1,r,"data-v-1025200d",null);s.options.__file="components/others/color-cell.vue",e.a=s.exports},gtIY:function(a,e,t){var i=t("uzTe");"string"==typeof i&&(i=[[a.i,i,""]]),i.locals&&(a.exports=i.locals);t("rjj0")("9cb1a990",i,!1,{sourceMap:!1})},kRQz:function(a,e,t){"use strict";var i=t("xIPO"),o=t("opgy"),n=t("VU/8")(i.a,o.a,!1,null,null,null);n.options.__file="components/tasks.vue",e.a=n.exports},oJKR:function(a,e,t){"use strict";var i=t("MenF"),o=t("VU/8")(null,i.a,!1,null,null,null);o.options.__file="components/luminaires.vue",e.a=o.exports},opgy:function(a,e,t){"use strict";var i=function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("div",{directives:[{name:"container",rawName:"v-container"},{name:"with-sidenav",rawName:"v-with-sidenav"}]},[t("a-navbar",{attrs:{fixed:"",variant:"primary"}},[t("a-input",{attrs:{label:"Filter",type:"text"}}),t("a-button",{attrs:{variant:"primary"}},[a._v("Create task")])],1),t("span",{directives:[{name:"show",rawName:"v-show",value:!a.tasks||0==a.tasks.length,expression:"!tasks || tasks.length == 0"}],staticClass:"sorry"},[a._v("There are no tasks in your model")]),t("a-check-table",{attrs:{rows:a.taskNames},model:{value:a.workplanes,callback:function(e){a.workplanes=e},expression:"workplanes"}})],1)};i._withStripped=!0;var o={render:i,staticRenderFns:[]};e.a=o},pLur:function(a,e,t){"use strict";var i=t("vnoH"),o=t("VU/8")(null,i.a,!1,null,null,null);o.options.__file="components/calculate.vue",e.a=o.exports},uD1z:function(a,e){a.exports="html_dialog"},uzTe:function(a,e,t){(e=a.exports=t("FZ+f")(!1)).push([a.i,"@import url(https://fonts.googleapis.com/css?family=Montserrat);",""]),e.push([a.i,"@import url(https://fonts.googleapis.com/icon?family=Material+Icons);",""]),e.push([a.i,"@import url(https://fonts.googleapis.com/css?family=Source+Code+Pro);",""]),e.push([a.i,'.a-container{width:100vw;min-height:100vh;-webkit-box-sizing:border-box;box-sizing:border-box;padding:.5in 15px;margin-right:auto;margin-left:auto}.a-container.with-a-sidenav{padding-left:.8in}@media only screen and (max-width:420px){.a-container.with-a-sidenav{padding-left:.6in}}.a-fluid{width:100%;padding-right:15px;padding-left:15px;margin-right:auto;margin-left:auto}.a-fluid,.a-row{-webkit-box-sizing:border-box;box-sizing:border-box}.a-row{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;margin-right:-15px;margin-left:-15px}textarea.a-verbatim{width:100%;min-height:10em;overflow-y:hidden;overflow-x:scroll;border:1px solid gray;outline:none;resize:none;color:inherit;background-color:transparent;font-family:monospace}div.a-sidenav{z-index:9;width:auto;position:fixed;height:100vh;left:0;top:0;background-color:#16253c}div.a-sidenav div.wrap{left:0;position:relative;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%)}div.a-sidenav div.wrap div.a-sidenav-item{position:relative;-webkit-box-sizing:border-box;box-sizing:border-box;padding:5px;cursor:pointer;height:auto;width:100%;display:block;-webkit-transition:width .2s;transition:width .2s;color:#f5f5f5;background-color:#16253c}div.a-sidenav div.wrap div.a-sidenav-item *{display:block;text-align:center}div.a-sidenav div.wrap div.a-sidenav-item i{vertical-align:middle;font-size:.3in}div.a-sidenav div.wrap div.a-sidenav-item span{font-size:.13in}div.a-sidenav div.wrap div.a-sidenav-item.a-selected{background-color:#cc7212}@media only screen and (max-width:420px){div.a-sidenav div.wrap div.a-sidenav-item span{display:none}div.a-sidenav div.wrap div.a-sidenav-item i{padding:5px}}div.a-navbar{position:fixed;top:0;z-index:100;left:70px;right:0;display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-ms-flex-pack:justify;-ms-flex-line-pack:end;align-content:flex-end;text-align:right;background-color:#f5f5f5;vertical-align:middle;-ms-flex-line-pack:right;align-content:right}div.a-navbar div.a-actions{float:right;width:100%;-webkit-transition:-webkit-transform .35s ease;transition:-webkit-transform .35s ease;transition:transform .35s ease;transition:transform .35s ease,-webkit-transform .35s ease;-webkit-transform:translateX(0);transform:translateX(0)}div.a-navbar div.a-actions span{-webkit-box-sizing:border-box;box-sizing:border-box;margin:5px;height:.325in}div.a-navbar div.a-actions div.a-input{display:inline-block}div.a-navbar div.a-actions div.a-input label{color:gray;font-size:90%;font-weight:400;position:absolute;pointer-events:none;left:5px;line-height:.323in}div.a-navbar div.a-actions div.a-input.non-pristine input~label,div.a-navbar div.a-actions div.a-input input:focus~label{display:none}div.a-navbar div.a-actions div.a-input input{margin-top:0;height:.323in}div.a-navbar .a-close-navbar{display:none}div.a-navbar button.a-open-navbar{display:none;position:fixed;top:5px;right:5px}div.a-navbar div.a-curtain{display:none;position:fixed;top:0;left:0;width:100vw;height:100vh;background-color:rgba(0,0,0,.4);z-index:90}@media only screen and (max-width:420px){div.a-navbar{position:fixed;height:100vh;left:auto;width:auto}div.a-navbar a{text-decoration:none}div.a-navbar .a-close-navbar,div.a-navbar button.a-open-navbar,div.a-navbar div.a-shown~div.a-curtain{display:inline}div.a-navbar div.a-actions{-webkit-box-shadow:0 3px 5px -1px rgba(0,0,0,.2),0 5px 8px 0 rgba(0,0,0,.14),0 1px 14px 0 rgba(0,0,0,.12);box-shadow:0 3px 5px -1px rgba(0,0,0,.2),0 5px 8px 0 rgba(0,0,0,.14),0 1px 14px 0 rgba(0,0,0,.12);background-color:#f5f5f5;width:auto;position:fixed;right:0;z-index:99;padding:4px;height:100vh;top:0;-webkit-transform:translateX(110%);transform:translateX(110%)}div.a-navbar div.a-actions.a-shown{-webkit-transform:translateX(0);transform:translateX(0)}div.a-navbar div.a-actions button{display:block;margin:4px 0;width:100%}}button{border:1px solid transparent;margin:.025in;padding:0 .1in;height:.325in;min-width:.55in;border-radius:.0125in;font-size:14px;overflow:visible;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;cursor:pointer}button *{vertical-align:middle}button.a-common{background-color:#f5f5f5;background-position:50%}button.a-common:hover{-webkit-transition:background .2s;transition:background .2s}button.a-common:active{-webkit-transition:background 0s;transition:background 0s}button.a-common.primary{color:#16253c;border:1px solid #16253c}button.a-common.primary:active{background-color:#a1b9dd;background-size:100%}button.a-common.accent{color:#cc7212;border:1px solid #cc7212}button.a-common.accent:active{background-color:#f8d5b0;background-size:100%}button.a-common.warn{color:#f44336;border:1px solid #f44336}button.a-common.warn:active{background-color:#fcc7c3;background-size:100%}button.a-common.basic{color:#000;border:1px solid #000}button.a-common.basic:active{background-color:#b3b3b3;background-size:100%}button.a-common.disabled{color:#bbb;cursor:default}button.a-flat{color:#fff;background-position:50%}button.a-flat:hover{-webkit-transition:background .2s;transition:background .2s}button.a-flat:active{-webkit-transition:background 0s;transition:background 0s}button.a-flat.primary{background-color:transparent;color:#16253c}button.a-flat.primary:active{background-color:#a1b9dd;background-size:100%}button.a-flat.accent{background-color:transparent;color:#cc7212}button.a-flat.accent:active{background-color:#f8d5b0;background-size:100%}button.a-flat.warn{background-color:transparent;color:#f44336}button.a-flat.warn:active{background-color:#fcc7c3;background-size:100%}button.a-flat.basic{background-color:transparent;color:#000;background-color:#fff}button.a-flat.basic:active{background-color:#b3b3b3;background-size:100%}button.a-flat.disabled{color:#adadad}button.a-raised{background-position:50%}button.a-raised:hover{-webkit-transition:background .2s;transition:background .2s}button.a-raised:active{-webkit-transition:background 0s;transition:background 0s}button.a-raised.primary{background-color:#16253c;color:#f5f5f5;-webkit-box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12);box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}button.a-raised.primary:active{background-color:#a1b9dd;background-size:100%}button.a-raised.accent{background-color:#cc7212;color:#f5f5f5;-webkit-box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12);box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}button.a-raised.accent:active{background-color:#f8d5b0;background-size:100%}button.a-raised.warn{background-color:#f44336;color:#f5f5f5;-webkit-box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12);box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}button.a-raised.warn:active{background-color:#fcc7c3;background-size:100%}button.a-raised.basic{background-color:#000;color:#f5f5f5;-webkit-box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12);box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}button.a-raised.basic:active{background-color:#b3b3b3;background-size:100%}button.a-raised.disabled{color:#bbb;cursor:default}div.a-input{position:relative;margin-bottom:15px;border-radius:0}div.a-input i{display:inline}div.a-input *{background-color:transparent}div.a-input input{border:none;border-bottom:1px solid #16253c;font-size:inherit;display:block;border-color:#16253c;-webkit-box-shadow:none;box-shadow:none;margin-top:25px}div.a-input input:focus{outline:none;border-width:2px;border-color:#16253c}div.a-input label{height:100%;color:gray;font-size:90%;font-weight:400;position:absolute;pointer-events:none;left:5px;bottom:0;transition:all .2s ease;-moz-transition:.2s ease all;-webkit-transition:all .2s ease}div.a-input.non-pristine input~label,div.a-input input:focus~label{bottom:100%;font-size:70%;color:#16253c;height:auto}div.a-input input:disabled{background:rgba(26,26,26,.1);border:none}div.a-input.invalid.non-pristine input~label,div.a-input.invalid input:focus~label,div.a-input.invalid label{color:#f44336}div.a-input.invalid.non-pristine input~label:before,div.a-input.invalid input:focus~label:before,div.a-input.invalid label:before{content:" * "}div.a-input.invalid input{border-color:#f44336;border-right:solid #f44336;border-width:2px}div.a-color-pick{display:inline;cursor:pointer;text-align:center;vertical-align:middle}div.a-color-pick input[type=range]{-moz-appearance:none;appearance:none;-webkit-appearance:none;width:100%;background:transparent}div.a-color-pick input[type=range]::-webkit-slider-thumb{appearance:none}div.a-color-pick input[type=range]:focus{outline:none}div.a-color-pick input[type=range]::-ms-track{width:100%;cursor:pointer;background:transparent;border-color:transparent;color:transparent}div.a-color-pick input[type=range]::-webkit-slider-thumb{-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-appearance:none;border:1px solid #6e6e6e;height:20px;width:15px;border-radius:3px;background:#fff;cursor:pointer;margin-top:-14px;-webkit-box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12);box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}div.a-color-pick input[type=range]::-moz-range-thumb{box-sizing:border-box;-webkit-appearance:none;border:1px solid #6e6e6e;height:20px;width:15px;border-radius:3px;background:#fff;cursor:pointer;margin-top:-14px;box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}div.a-color-pick input[type=range]::-ms-thumb{box-sizing:border-box;-webkit-appearance:none;border:1px solid #6e6e6e;height:20px;width:15px;border-radius:3px;background:#fff;cursor:pointer;margin-top:-14px;box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}div.a-color-pick div.colours{background-color:#f5f5f5;border-radius:0;-webkit-box-shadow:0 6px 6px -3px rgba(0,0,0,.2),0 10px 14px 1px rgba(0,0,0,.14),0 4px 18px 3px rgba(0,0,0,.12);box-shadow:0 6px 6px -3px rgba(0,0,0,.2),0 10px 14px 1px rgba(0,0,0,.14),0 4px 18px 3px rgba(0,0,0,.12);text-align:center;position:absolute;z-index:9999999999;border:none}div.a-color-pick i.material-icons{-webkit-box-shadow:0 3px 5px -1px rgba(0,0,0,.2),0 5px 8px 0 rgba(0,0,0,.14),0 1px 14px 0 rgba(0,0,0,.12);box-shadow:0 3px 5px -1px rgba(0,0,0,.2),0 5px 8px 0 rgba(0,0,0,.14),0 1px 14px 0 rgba(0,0,0,.12);vertical-align:middle;border-radius:50%;border:5px solid gray;padding:8px}#hue,#saturation,#value{display:block;width:2in;height:.2in;background-color:red;margin:5px;border:1px solid #000}#hue{background:-webkit-gradient(linear,left top,right top,from(red),color-stop(#ff0),color-stop(lime),color-stop(cyan),color-stop(blue),color-stop(#f0f),to(red));background:linear-gradient(90deg,red,#ff0,lime,cyan,blue,#f0f,red)}.a-dialog-outer{position:fixed;top:0;left:0;width:100vw;height:100vh;z-index:9999999;background-color:rgba(0,0,0,.4);font-size:.16in;display:none}.a-dialog-outer.open{display:block}.a-dialog-footer{text-align:right;position:absolute;bottom:.2in;right:.2in}.a-dialog-inter{-webkit-box-shadow:0 11px 15px -7px rgba(0,0,0,.2),0 24px 38px 3px rgba(0,0,0,.14),0 9px 46px 8px rgba(0,0,0,.12);box-shadow:0 11px 15px -7px rgba(0,0,0,.2),0 24px 38px 3px rgba(0,0,0,.14),0 9px 46px 8px rgba(0,0,0,.12);position:fixed;background-color:#f5f5f5;color:#000;top:.25in;left:.5in;bottom:.25in;right:.5in;padding:.25in;z-index:9999999}.a-dialog-inter .a-dialog-body{margin-top:.1in}.a-dialog-inter .a-dialog-title{top:0;min-height:.2in}.a-dialog-inter .a-dialog-title *{display:inline}.a-dialog-inter .a-dialog-title h2{font-size:20px;font-size:1.25rem;-webkit-box-flex:1;-ms-flex:1;flex:1;line-height:32px;line-height:2rem;text-align:left;font-weight:700}.a-dialog-inter .a-dialog-title i{position:absolute;right:15px;top:15px;cursor:pointer}@media only screen and (max-width:420px){.a-dialog-inter{-webkit-box-shadow:0 11px 15px -7px rgba(0,0,0,.2),0 24px 38px 3px rgba(0,0,0,.14),0 9px 46px 8px rgba(0,0,0,.12);box-shadow:0 11px 15px -7px rgba(0,0,0,.2),0 24px 38px 3px rgba(0,0,0,.14),0 9px 46px 8px rgba(0,0,0,.12);position:fixed;background-color:#fff;color:#000;top:.15in;left:.15in;bottom:.15in;right:.15in;padding:.25in}}span.a-link{cursor:pointer;border:1px solid transparent;font-size:inherit;font-weight:700;color:#16253c;padding:2px}span.a-link:hover{color:#cc7212;border:1px solid #cc7212}div.a-select{display:inline-block;margin:.2in}div.a-select div.a-selected{cursor:pointer;color:#16253c;background-color:#f5f5f5;border:1px solid #16253c;padding:.05in .12in;padding-right:0}div.a-select div.a-selected *{vertical-align:middle}div.a-select div.a-selected i{font-size:150%;display:inline;padding:5px}div.a-select div.items{-webkit-box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12);box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12);position:absolute;z-index:9}div.a-select div.items span{display:block;padding:.05in .12in;cursor:pointer;background-color:#f5f5f5;border:1px solid transparent}div.a-select div.items span:hover{color:#16253c;border-color:#16253c}table.a-table{border-collapse:collapse;font-size:90%;margin:15px auto}table.a-table td.editable-cell *{vertical-align:middle}table.a-table td.editable-cell div.values i{font-size:inherit;float:right;margin-left:5px;cursor:pointer;border-radius:50%;padding:4px}table.a-table td.editable-cell div.values i:hover{-webkit-box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12);box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}table.a-table td.editable-cell div.values span{width:100%;height:100%}table.a-table td.editable-cell div.editor{cursor:default;background-color:#f5f5f5;-webkit-transform:translateY(-50%);transform:translateY(-50%);padding:.6em;z-index:999999999;position:absolute;-webkit-box-shadow:0 3px 5px -1px rgba(0,0,0,.2),0 5px 8px 0 rgba(0,0,0,.14),0 1px 14px 0 rgba(0,0,0,.12);box-shadow:0 3px 5px -1px rgba(0,0,0,.2),0 5px 8px 0 rgba(0,0,0,.14),0 1px 14px 0 rgba(0,0,0,.12)}table.a-table td.editable-cell div.editor input{outline:none;border:1px solid #d4d4d4;padding:.5em;border-radius:0}table.a-table td.editable-cell div.editor *{display:block}table.a-table td.editable-cell div.editor button{margin-top:10px;float:right}table.a-table td.editable-cell div.editor i{font-size:inherit;cursor:pointer;padding:5px}table.a-table .selectable{cursor:pointer}table.a-table .selectable:hover{background-color:#e3e3e3}table.a-table td{border-bottom:1px solid rgba(26,26,26,.12);padding:.7em .9em;text-align:center}table.a-table thead{color:rgba(26,26,26,.6);font-size:85%}table.a-table tbody{color:#1a1a1a}table.a-table.a-double-entry td:first-child{color:rgba(26,26,26,.6);font-size:85%;border-right:1px solid rgba(26,26,26,.12);text-align:left}table.a-table.a-double-entry td.check-cell{padding:0}table.a-table.a-double-entry td.check-cell i{font-size:150%}p.a-toast{position:fixed;border-radius:.1in;font-size:.15in;background-color:rgba(0,0,0,.77);color:#f5f5f5;padding:.5em 2em;left:50%;-webkit-transform:translate(-50%);transform:translate(-50%);bottom:-6em;-webkit-transition:bottom .3s ease;transition:bottom .3s ease;text-align:center;margin:0;z-index:9999999999}p.a-toast.showing{bottom:3em}@media only screen and (max-width:420px){p.a-toast{-webkit-transition:bottom .2s ease;transition:bottom .2s ease;background-color:rgba(0,0,0,.87);width:100vw;border-radius:0}p.a-toast.showing{bottom:0}}code{font-size:100%;font-family:Source Code Pro,monospace;background-color:rgba(26,26,26,.2);padding:1em;margin:.5em}*{font-family:Montserrat,"sans-serif"}body,html{background-color:#f5f5f5;color:#1a1a1a;padding:0;margin:0}@media only screen and (min-width:420px){div.a-navbar{left:150px}}div.a-container{text-align:center}form{text-align:left}',""])},v2Hs:function(a,e,t){t("Zjzr")?(tasks=[{name:"Task 1"},{name:"Task 2"}],workplanes={WP1:["Task 2"],WP2:["Task 1"]}):(workplanes=[],tasks=[])},vnoH:function(a,e,t){"use strict";var i=function(){var a=this.$createElement;return(this._self._c||a)("div",{directives:[{name:"container",rawName:"v-container"},{name:"with-sidenav",rawName:"v-with-sidenav"}]},[this._v(" \n  Calculate!\n")])};i._withStripped=!0;var o={render:i,staticRenderFns:[]};e.a=o},wo9U:function(a,e,t){"use strict";e.a={props:["color"],computed:{bck:function(){return"background-color: rgb("+this.color.r+","+this.color.g+","+this.color.b+")"}}}},xIPO:function(a,e,t){"use strict";var i=t("v2Hs"),o=(t.n(i),t("TY++")),n=t.n(o);e.a={computed:{taskNames:function(){return this.tasks.map(function(a){return a.name})}},data:function(){return{tasks:tasks,workplanes:workplanes,skp:n.a}}}},z0EK:function(a,e,t){"use strict";var i=function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("div",{directives:[{name:"container",rawName:"v-container"},{name:"with-sidenav",rawName:"v-with-sidenav"}]},[t("a-navbar",{attrs:{fixed:"",variant:"primary"}},[t("a-button",{attrs:{variant:"primary"},nativeOn:{click:function(e){a.skp.call_action("set_weather_file","")}}},[a._v("Set weather file")]),t("a-button",{attrs:{variant:"primary"},nativeOn:{click:function(e){a.skp.call_action("follow_link","http://www.energyplus.net/weather")}}},[a._v("Find more weather files")])],1),t("a-double-entry-table",[t("thead"),t("tbody",[t("tr",[t("td",[a._v("Country")]),t("a-editable-cell",{on:{submit:function(e){a.updateLocation()}},model:{value:a.location.country,callback:function(e){a.$set(a.location,"country",e)},expression:"location.country"}})],1),t("tr",[t("td",[a._v("City")]),t("a-editable-cell",{on:{submit:function(e){a.updateLocation()}},model:{value:a.location.city,callback:function(e){a.$set(a.location,"city",e)},expression:"location.city"}})],1),t("tr",[t("td",[a._v("Latitude")]),t("a-editable-cell",{on:{submit:function(e){a.updateLocation()}},model:{value:a.location.latitude,callback:function(e){a.$set(a.location,"latitude",e)},expression:"location.latitude"}})],1),t("tr",[t("td",[a._v("Longitude")]),t("a-editable-cell",{on:{submit:function(e){a.updateLocation()}},model:{value:a.location.longitude,callback:function(e){a.$set(a.location,"longitude",e)},expression:"location.longitude"}})],1),t("tr",[t("td",[a._v("Time Zone (GMT)")]),t("a-editable-cell",{on:{submit:function(e){a.updateLocation()}},model:{value:a.location.timezone,callback:function(e){a.$set(a.location,"timezone",e)},expression:"location.timezone"}})],1),t("tr",[t("td",[a._v("Albedo (%)")]),t("a-editable-cell",{on:{submit:function(e){a.updateLocation()}},model:{value:a.location.albedo,callback:function(e){a.$set(a.location,"albedo",e)},expression:"location.albedo"}})],1)])])],1)};i._withStripped=!0;var o={render:i,staticRenderFns:[]};e.a=o}});