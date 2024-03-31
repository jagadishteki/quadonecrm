import{a as re,b as le,c as me,d as pe,e as se,f as de}from"./chunk-FMVIKD26.js";import{a as ce,b as ge}from"./chunk-52VLVOWY.js";import{b as z,c as y,d as H,e as J,f as R,h as K,i as Q,j as X,k as Y,l as Z,m as ee,n as te,r as ne,s as ie,t as ae}from"./chunk-XFYNGJME.js";import"./chunk-7J7IUAIY.js";import{a as oe}from"./chunk-KFPL6XVG.js";import{k as j,l as $,m as U,p as P,u as B}from"./chunk-GZ6HARBR.js";import{Cb as M,Db as s,Eb as A,Fb as I,Hb as F,Ib as w,Jb as E,Kb as k,Lb as q,Mb as N,Na as m,Oa as b,Ob as L,Pb as W,Qb as G,U as V,Y as S,Z as x,ca as D,cb as _,eb as p,lb as a,ma as O,mb as o,nb as f,ob as h,pb as v,rb as T,ub as C,vb as d}from"./chunk-2YNPUMYV.js";import"./chunk-CWTPBX7D.js";var _e=(()=>{let l=class l{constructor(){this.http=O(B)}getCampaigns(){return this.http.get("https://web-api-cu1b.onrender.com/campaigns/")}addCampaign(n){return this.http.post("https://web-api-cu1b.onrender.com/campaigns/",n)}updateCampaign(n){return this.http.put("https://web-api-cu1b.onrender.com/campaigns/"+n.id,n)}deleteCampaign(n){return this.http.delete("https://web-api-cu1b.onrender.com/campaigns/"+n)}};l.\u0275fac=function(r){return new(r||l)},l.\u0275prov=D({token:l,factory:l.\u0275fac,providedIn:"root"});let t=l;return t})();function he(t,l){if(t&1&&(a(0,"option",62),s(1),o()),t&2){let e=l.$implicit;p("value",e.autoId),m(),A(e.name)}}function ve(t,l){t&1&&f(0,"i",67)}function Se(t,l){t&1&&f(0,"i",68)}function xe(t,l){if(t&1){let e=T();h(0),a(1,"th"),s(2),a(3,"a",64),C("click",function(){S(e);let r=d().$implicit,i=d();return x(i.sortAsc(r.field))}),_(4,ve,1,0,"i",65),o(),a(5,"a",64),C("click",function(){S(e);let r=d().$implicit,i=d();return x(i.sortDsc(r.field))}),_(6,Se,1,0,"i",66),o()(),v()}if(t&2){let e=d().$implicit;m(2),I("",e.header," "),m(2),p("ngIf",e.iconDisplay),m(2),p("ngIf",!e.iconDisplay)}}function ye(t,l){if(t&1&&(h(0),_(1,xe,7,3,"ng-container",63),v()),t&2){let e=l.$implicit;m(),p("ngIf",e.displayField)}}function Te(t,l){if(t&1){let e=T();h(0),a(1,"input",69),C("input",function(r){S(e);let i=d(2).$implicit,g=d();return x(g.inputSearch(r,i.field))}),o(),v()}}function Ie(t,l){if(t&1){let e=T();h(0),a(1,"ng-multiselect-dropdown",70),E("ngModelChange",function(r){S(e);let i=d(4);return w(i.selectedItemsFilter,r)||(i.selectedItemsFilter=r),x(r)}),C("ngModelChange",function(){S(e);let r=d(3).$implicit,i=d();return x(i.inputSearchFilter(i.selectedItemsFilter,r.field))}),o(),v()}if(t&2){let e=d(4);m(),p("settings",e.dropdownSettingsFilter)("data",e.dropdownListFilter),F("ngModel",e.selectedItemsFilter)}}function Fe(t,l){if(t&1&&(h(0),_(1,Ie,2,3,"ng-container",63),v()),t&2){let e=d(2).$implicit;m(),p("ngIf",e.id==2)}}function we(t,l){if(t&1&&(a(0,"option",62),s(1),o()),t&2){let e=l.$implicit;p("value",e.autoId),m(),I("",e.name," ")}}function Ee(t,l){if(t&1){let e=T();h(0),a(1,"select",71),C("change",function(r){S(e);let i=d(3).$implicit,g=d();return x(g.inputSearch(r,i.field))}),a(2,"option",11),s(3,"Any"),o(),_(4,we,2,2,"option",12),o(),v()}if(t&2){let e=d(4);m(),p("ngModel",-1),m(3),p("ngForOf",e.businessUnits)}}function be(t,l){if(t&1&&(h(0),_(1,Ee,5,2,"ng-container",63),v()),t&2){let e=d(2).$implicit;m(),p("ngIf",e.id==5)}}function Me(t,l){if(t&1){let e=T();h(0),a(1,"select",71),C("change",function(r){S(e);let i=d(2).$implicit,g=d();return x(g.inputSearch(r,i.field))}),a(2,"option",11),s(3,"Any"),o(),a(4,"option",23),s(5,"Approved"),o(),a(6,"option",72),s(7,"Not Approved"),o()(),v()}t&2&&(m(),p("ngModel",-1))}function Ae(t,l){if(t&1){let e=T();h(0),a(1,"select",71),C("change",function(r){S(e);let i=d(2).$implicit,g=d();return x(g.inputSearch(r,i.field))}),a(2,"option",11),s(3,"Any"),o(),a(4,"option",23),s(5,"Active"),o(),a(6,"option",72),s(7,"Inactive"),o()(),v()}t&2&&(m(),p("ngModel",-1))}function Ne(t,l){if(t&1&&(a(0,"td"),_(1,Te,2,0,"ng-container",63)(2,Fe,2,1,"ng-container",63)(3,be,2,1,"ng-container",63)(4,Me,8,1,"ng-container",63)(5,Ae,8,1,"ng-container",63),o()),t&2){let e=d().$implicit,n=d();m(),p("ngIf",!n.dropdowns.includes(e.id)),m(),p("ngIf",n.dropdowns.includes(e.id)),m(),p("ngIf",n.dropdowns.includes(e.id)),m(),p("ngIf",e.id==6),m(),p("ngIf",e.id==7)}}function Ve(t,l){if(t&1&&(h(0),_(1,Ne,6,5,"td",63),v()),t&2){let e=l.$implicit;m(),p("ngIf",e.displayField)}}function De(t,l){if(t&1&&(h(0),s(1),v()),t&2){let e=d(2).$implicit,n=d().$implicit;m(),I(" ",n[e.field]," ")}}function Oe(t,l){if(t&1&&(h(0),s(1),v()),t&2){let e=d(3).$implicit,n=d().$implicit,r=d();m(),I(" ",r.campaignTypes(n[e.field])," ")}}function ke(t,l){if(t&1&&(h(0),s(1),v()),t&2){let e=d(3).$implicit,n=d().$implicit,r=d();m(),I(" ",r.campaignGroups(n[e.field])," ")}}function qe(t,l){if(t&1&&(h(0),s(1),v()),t&2){let e=d().$implicit;m(),I(" ",e.name," ")}}function Le(t,l){if(t&1&&(h(0),_(1,qe,2,1,"ng-container",63),v()),t&2){let e=l.$implicit,n=d(4).$implicit,r=d().$implicit;m(),p("ngIf",e.autoId==r[n.field])}}function We(t,l){if(t&1&&(h(0),_(1,Le,2,1,"ng-container",33),v()),t&2){let e=d(5);m(),p("ngForOf",e.businessUnits)}}function Ge(t,l){if(t&1&&(h(0),s(1),v()),t&2){let e=d(3).$implicit,n=d().$implicit;m(),I(" ",n[e.field]==1?"Approved":"Not Approved"," ")}}function je(t,l){if(t&1&&(h(0),s(1),v()),t&2){let e=d(3).$implicit,n=d().$implicit;m(),I(" ",n[e.field]==1?"Active":"Inactive"," ")}}function $e(t,l){if(t&1&&(h(0),_(1,Oe,2,1,"ng-container",63)(2,ke,2,1,"ng-container",63)(3,We,2,1,"ng-container",63)(4,Ge,2,1,"ng-container",63)(5,je,2,1,"ng-container",63),v()),t&2){let e=d(2).$implicit;m(),p("ngIf",e.id==2),m(),p("ngIf",e.id==3),m(),p("ngIf",e.id==5),m(),p("ngIf",e.id==6),m(),p("ngIf",e.id==7)}}function Ue(t,l){if(t&1&&(a(0,"td"),_(1,De,2,1,"ng-container",63)(2,$e,6,5,"ng-container",63),o()),t&2){let e=d().$implicit,n=d(2);m(),p("ngIf",!n.dropdowns.includes(e.id)),m(),p("ngIf",n.dropdowns.includes(e.id))}}function Pe(t,l){if(t&1&&(h(0),_(1,Ue,3,2,"td",63),v()),t&2){let e=l.$implicit;m(),p("ngIf",e.displayField)}}function Be(t,l){if(t&1){let e=T();a(0,"i",77),C("click",function(){S(e);let r=d().$implicit,i=d();return x(i.campaignStatus(r.id,0))}),o()}}function ze(t,l){if(t&1){let e=T();a(0,"i",78),C("click",function(){S(e);let r=d().$implicit,i=d();return x(i.campaignStatus(r.id,1))}),o()}}function He(t,l){if(t&1){let e=T();a(0,"tr"),_(1,Pe,2,1,"ng-container",33),a(2,"td")(3,"i",73),C("click",function(){let i=S(e).$implicit,g=d();return x(g.editCampaign(i))}),o(),_(4,Be,1,0,"i",74)(5,ze,1,0,"i",75),a(6,"i",76),C("click",function(){let i=S(e).$implicit,g=d();return x(g.deleteCampaign(i.id))}),o()()()}if(t&2){let e=l.$implicit,n=d();m(),p("ngForOf",n.headers),m(3),p("ngIf",e.campStatus==1),m(),p("ngIf",e.campStatus==0)}}function Je(t,l){if(t&1&&(a(0,"div",79),s(1),o()),t&2){let e=d();p("ngClass",e.messageType=="success"?"alert alert-success":"alert alert-danger"),m(),I(" ",e.message,"")}}function Re(t,l){t&1&&(a(0,"div"),s(1," Name is required. "),o())}function Ke(t,l){if(t&1&&(a(0,"div",80),_(1,Re,2,0,"div",63),o()),t&2){let e=d();m(),p("ngIf",e.campaignForm.controls.name==null||e.campaignForm.controls.name.errors==null?null:e.campaignForm.controls.name.errors.required)}}function Qe(t,l){t&1&&(a(0,"div",80),s(1," Select Group "),o())}function Xe(t,l){t&1&&(a(0,"div"),s(1," Date is required. "),o())}function Ye(t,l){if(t&1&&(a(0,"div",80),_(1,Xe,2,0,"div",63),o()),t&2){let e=d();m(),p("ngIf",e.campaignForm.controls.date==null||e.campaignForm.controls.date.errors==null?null:e.campaignForm.controls.date.errors.required)}}function Ze(t,l){t&1&&(a(0,"div"),s(1," Date is required. "),o())}function et(t,l){if(t&1&&(a(0,"div",80),_(1,Ze,2,0,"div",63),o()),t&2){let e=d();m(),p("ngIf",e.campaignForm.controls.date==null||e.campaignForm.controls.date.errors==null?null:e.campaignForm.controls.date.errors.required)}}function tt(t,l){if(t&1&&(a(0,"option",62),s(1),o()),t&2){let e=l.$implicit;p("value",e.autoId),m(),A(e.name)}}function nt(t,l){t&1&&(a(0,"div",80),s(1," Select Campaign "),o())}function it(t,l){t&1&&(a(0,"div",80),s(1," DLT Id is required. "),o())}function at(t,l){t&1&&(a(0,"div",80),s(1," Sender Id is required. "),o())}function ot(t,l){t&1&&(a(0,"div"),s(1," SMS Template is required. "),o())}function rt(t,l){if(t&1&&(a(0,"div",80),_(1,ot,2,0,"div",63),o()),t&2){let e=d(2);m(),p("ngIf",e.campaignForm.controls.smsTemplate==null||e.campaignForm.controls.smsTemplate.errors==null?null:e.campaignForm.controls.smsTemplate.errors.required)}}function lt(t,l){if(t&1&&(a(0,"div",81)(1,"h5",82),s(2,"SMS Template"),o(),a(3,"div",19)(4,"div",28)(5,"div",19)(6,"div",83)(7,"label",84),s(8,"DLT ID"),a(9,"sup"),s(10,"*"),o()()(),a(11,"div",85),f(12,"input",86),o(),f(13,"div",45),a(14,"div",85),_(15,it,2,0,"div",49),o()()(),a(16,"div",28)(17,"div",19)(18,"div",83)(19,"label",87),s(20,"Sender ID"),a(21,"sup"),s(22,"*"),o()()(),a(23,"div",85),f(24,"input",88),o(),f(25,"div",45),a(26,"div",85),_(27,at,2,0,"div",49),o()()()(),a(28,"div",89)(29,"label",90),s(30,"SMS Template "),a(31,"sup"),s(32,"*"),o()(),f(33,"textarea",91),_(34,rt,2,1,"div",49),o()()),t&2){let e=d();m(15),p("ngIf",e.dropdownListType[0].validation&&(e.campaignForm.controls.dltId==null?null:e.campaignForm.controls.dltId.invalid)&&((e.campaignForm.controls.dltId==null?null:e.campaignForm.controls.dltId.dirty)||(e.campaignForm.controls.dltId==null?null:e.campaignForm.controls.dltId.touched))),m(12),p("ngIf",e.dropdownListType[0].validation&&(e.campaignForm.controls.senderId==null?null:e.campaignForm.controls.senderId.invalid)&&((e.campaignForm.controls.senderId==null?null:e.campaignForm.controls.senderId.dirty)||(e.campaignForm.controls.senderId==null?null:e.campaignForm.controls.senderId.touched))),m(7),p("ngIf",(e.campaignForm.controls.smsTemplate==null?null:e.campaignForm.controls.smsTemplate.invalid)&&((e.campaignForm.controls.smsTemplate==null?null:e.campaignForm.controls.smsTemplate.dirty)||(e.campaignForm.controls.smsTemplate==null?null:e.campaignForm.controls.smsTemplate.touched)))}}function mt(t,l){t&1&&(a(0,"div"),s(1," From Name is required. "),o())}function pt(t,l){if(t&1&&(a(0,"div",80),_(1,mt,2,0,"div",63),o()),t&2){let e=d(2);m(),p("ngIf",e.campaignForm.controls.fromName==null||e.campaignForm.controls.fromName.errors==null?null:e.campaignForm.controls.fromName.errors.required)}}function st(t,l){t&1&&(a(0,"div"),s(1," From Email is required. "),o())}function dt(t,l){if(t&1&&(a(0,"div",80),_(1,st,2,0,"div",63),o()),t&2){let e=d(2);m(),p("ngIf",e.campaignForm.controls.fromEmail==null||e.campaignForm.controls.fromEmail.errors==null?null:e.campaignForm.controls.fromEmail.errors.required)}}function ct(t,l){t&1&&(a(0,"div"),s(1," Email Subject is required. "),o())}function gt(t,l){if(t&1&&(a(0,"div",80),_(1,ct,2,0,"div",63),o()),t&2){let e=d(2);m(),p("ngIf",e.campaignForm.controls.emailSubject==null||e.campaignForm.controls.emailSubject.errors==null?null:e.campaignForm.controls.emailSubject.errors.required)}}function _t(t,l){t&1&&(a(0,"div"),s(1," Email Content is required. "),o())}function ut(t,l){if(t&1&&(a(0,"div",80),_(1,_t,2,0,"div",63),o()),t&2){let e=d(2);m(),p("ngIf",e.campaignForm.controls.emailTemplate==null||e.campaignForm.controls.emailTemplate.errors==null?null:e.campaignForm.controls.emailTemplate.errors.required)}}function ft(t,l){if(t&1&&(a(0,"div",92)(1,"h5",82),s(2,"Email Template"),o(),a(3,"div",93)(4,"label",94),s(5,"From Name"),o(),a(6,"div",95),f(7,"input",96),o(),_(8,pt,2,1,"div",49),o(),a(9,"div",93)(10,"label",97),s(11,"From Email"),o(),a(12,"div",95),f(13,"input",98),o(),_(14,dt,2,1,"div",49),o(),a(15,"div",93)(16,"label",99),s(17,"Email Subject"),o(),a(18,"div",95),f(19,"input",100),o(),_(20,gt,2,1,"div",49),o(),a(21,"div",101),f(22,"angular-editor",102),_(23,ut,2,1,"div",49),o()()),t&2){let e=d();m(8),p("ngIf",e.dropdownListType[1].validation&&(e.campaignForm.controls.fromName==null?null:e.campaignForm.controls.fromName.invalid)&&((e.campaignForm.controls.fromName==null?null:e.campaignForm.controls.fromName.dirty)||(e.campaignForm.controls.fromName==null?null:e.campaignForm.controls.fromName.touched))),m(6),p("ngIf",e.dropdownListType[1].validation&&(e.campaignForm.controls.fromEmail==null?null:e.campaignForm.controls.fromEmail.invalid)&&((e.campaignForm.controls.fromEmail==null?null:e.campaignForm.controls.fromEmail.dirty)||(e.campaignForm.controls.fromEmail==null?null:e.campaignForm.controls.fromEmail.touched))),m(6),p("ngIf",e.dropdownListType[1].validation&&(e.campaignForm.controls.emailSubject==null?null:e.campaignForm.controls.emailSubject.invalid)&&((e.campaignForm.controls.emailSubject==null?null:e.campaignForm.controls.emailSubject.dirty)||(e.campaignForm.controls.emailSubject==null?null:e.campaignForm.controls.emailSubject.touched))),m(2),p("config",e.config),m(),p("ngIf",e.dropdownListType[1].validation&&(e.campaignForm.controls.emailTemplate==null?null:e.campaignForm.controls.emailTemplate.invalid)&&((e.campaignForm.controls.emailTemplate==null?null:e.campaignForm.controls.emailTemplate.dirty)||(e.campaignForm.controls.emailTemplate==null?null:e.campaignForm.controls.emailTemplate.touched)))}}function Ct(t,l){t&1&&(a(0,"div"),s(1," WhatsApp Id is required. "),o())}function ht(t,l){if(t&1&&(a(0,"div",80),_(1,Ct,2,0,"div",63),o()),t&2){let e=d(2);m(),p("ngIf",e.campaignForm.controls.WhatsAppId==null||e.campaignForm.controls.WhatsAppId.errors==null?null:e.campaignForm.controls.WhatsAppId.errors.required)}}function vt(t,l){t&1&&(a(0,"div"),s(1," WhatsApp Sender Id is required. "),o())}function St(t,l){if(t&1&&(a(0,"div",80),_(1,vt,2,0,"div",63),o()),t&2){let e=d(2);m(),p("ngIf",e.campaignForm.controls.WhatsAppSenderId==null||e.campaignForm.controls.WhatsAppSenderId.errors==null?null:e.campaignForm.controls.WhatsAppSenderId.errors.required)}}function xt(t,l){t&1&&(a(0,"div"),s(1," WhatsApp Content is required. "),o())}function yt(t,l){if(t&1&&(a(0,"div",80),_(1,xt,2,0,"div",63),o()),t&2){let e=d(2);m(),p("ngIf",e.campaignForm.controls.whatsAppTemplate==null||e.campaignForm.controls.whatsAppTemplate.errors==null?null:e.campaignForm.controls.whatsAppTemplate.errors.required)}}function Tt(t,l){if(t&1&&(a(0,"div",103)(1,"h5",82),s(2,"WhatsApp Template"),o(),a(3,"div",19)(4,"div",28)(5,"div",19)(6,"div",83)(7,"label",104),s(8,"WhatsApp ID"),a(9,"sup"),s(10,"*"),o()()(),a(11,"div",85),f(12,"input",105),o(),f(13,"div",45),a(14,"div",85),_(15,ht,2,1,"div",49),o()()(),a(16,"div",28)(17,"div",19)(18,"div",83)(19,"label",106),s(20,"Sender ID"),a(21,"sup"),s(22,"*"),o()()(),a(23,"div",85),f(24,"input",107),o(),f(25,"div",45),a(26,"div",85),_(27,St,2,1,"div",49),o()()()(),a(28,"div",101),f(29,"angular-editor",108),_(30,yt,2,1,"div",49),o()()),t&2){let e=d();m(15),p("ngIf",e.dropdownListType[2].validation&&(e.campaignForm.controls.WhatsAppId==null?null:e.campaignForm.controls.WhatsAppId.invalid)&&((e.campaignForm.controls.WhatsAppId==null?null:e.campaignForm.controls.WhatsAppId.dirty)||(e.campaignForm.controls.WhatsAppId==null?null:e.campaignForm.controls.WhatsAppId.touched))),m(12),p("ngIf",e.dropdownListType[2].validation&&(e.campaignForm.controls.whatsAppSenderId==null?null:e.campaignForm.controls.whatsAppSenderId.invalid)&&((e.campaignForm.controls.whatsAppSenderId==null?null:e.campaignForm.controls.whatsAppSenderId.dirty)||(e.campaignForm.controls.whatsAppSenderId==null?null:e.campaignForm.controls.whatsAppSenderId.touched))),m(2),p("config",e.config),m(),p("ngIf",e.dropdownListType[2].validation&&(e.campaignForm.controls.whatsAppTemplate==null?null:e.campaignForm.controls.whatsAppTemplate.invalid)&&((e.campaignForm.controls.whatsAppTemplate==null?null:e.campaignForm.controls.whatsAppTemplate.dirty)||(e.campaignForm.controls.whatsAppTemplate==null?null:e.campaignForm.controls.whatsAppTemplate.touched)))}}function It(t,l){if(t&1){let e=T();a(0,"button",109),C("click",function(){S(e);let r=d(),i=M(70);return x(r.submitCampaign(r.campaignForm.value,i))}),s(1,"Submit"),o()}}function Ft(t,l){if(t&1){let e=T();a(0,"button",109),C("click",function(){S(e);let r=d();return x(r.updateCampaign())}),s(1,"Update"),o()}}var wt=(t,l)=>({itemsPerPage:t,currentPage:l}),ue=()=>({standalone:!0}),Ut=(()=>{let l=class l{constructor(n,r,i,g){this.dataService=n,this.contactService=r,this.campaignService=i,this.formBuilder=g,this.config={editable:!0,spellcheck:!0,height:"20rem",minHeight:"5rem",placeholder:"Enter text here...",translate:"no",defaultParagraphSeparator:"p",defaultFontName:"Arial"},this.campaigns=[],this.p=1,this.ipp=2,this.headers=[{id:1,field:"campaignName",displayField:!0,header:"Campaign",iconDisplay:!0},{id:2,field:"campaignIds",displayField:!0,header:"Campaign Type",iconDisplay:!0},{id:3,field:"groupIds",displayField:!0,header:"Contact Group",iconDisplay:!0},{id:4,field:"scheduledOn",displayField:!0,header:"Scheduled",iconDisplay:!0},{id:5,field:"unitId",displayField:!0,header:"Unit Name",iconDisplay:!0},{id:6,field:"approved",displayField:!0,header:"Approved",iconDisplay:!0},{id:7,field:"campStatus",displayField:!0,header:"Camp Status",iconDisplay:!0},{id:8,field:"createdOn",displayField:!0,header:"Created",iconDisplay:!0}],this.dropdowns=[2,3,5,6,7],this.dropdownList=this.headers,this.dropdownListFilter=[{id:1,campaignType:"SMS"},{id:2,campaignType:"Email"},{id:3,campaignType:"WhatsApp"}],this.dropdownListType=[{id:1,campaignType:"SMS",validation:!1},{id:2,campaignType:"Email",validation:!1},{id:3,campaignType:"WhatsApp",validation:!1}],this.dropdownListGroup=[],this.dropdownSettings={singleSelection:!1,idField:"id",textField:"header",selectAllText:"Select All",unSelectAllText:"UnSelect All",itemsShowLimit:10,allowSearchFilter:!0},this.dropdownSettingsFilter={singleSelection:!1,idField:"id",textField:"campaignType",selectAllText:"Select All",unSelectAllText:"UnSelect All",itemsShowLimit:3},this.dropdownSettingsType={singleSelection:!1,idField:"id",textField:"campaignType",selectAllText:"Select All",unSelectAllText:"UnSelect All",itemsShowLimit:10,allowSearchFilter:!0},this.dropdownSettingsGroup={singleSelection:!1,idField:"id",textField:"name",enableCheckAll:!1,unSelectAllText:"UnSelect All",itemsShowLimit:10,allowSearchFilter:!0},this.selectedItemsFilter=[],this.selectedItems=[{id:1,header:"Campaign"},{id:2,header:"Campaign Type"},{id:3,header:"Contact Group"},{id:4,header:"Scheduled"},{id:5,header:"Unit Name"},{id:6,header:"Approved"},{id:7,header:"Camp Status"},{id:8,header:"Scheduled"}],this.selectedItemsType=[],this.selectedItemsGroup=[],this.smsTemplate=!1,this.emailTemplate=!1,this.whatsAppTemplate=!1}ngOnInit(){this.getCampaigns(),this.getAllBusinessUnits(),this.getGroups(),this.createCampaign()}updateValidation(){this.dropdownListType.forEach(n=>{n.validation=!1}),this.selectedItemsType.forEach(n=>{this.dropdownListType.forEach(r=>{n.id==r.id&&(r.validation=!0)})})}createCampaign(){this.campaignForm=this.formBuilder.group({name:["",y.required],date:["",y.required],time:[""],businessUnit:["-1",y.required],dltId:["",y.required],senderId:["",y.required],smsTemplate:["Hi {PatientName}, Write SMS Body Here",y.required],fromName:["",y.required],fromEmail:["",y.required],emailSubject:["",y.required],emailTemplate:["",y.required],whatsAppId:["",y.required],whatsAppSenderId:["",y.required],whatsAppTemplate:["",y.required]})}getGroups(){this.contactService.getGroups().subscribe({next:n=>{this.dropdownListGroup=n}})}submitCampaign(n,r){let i=this.selectedItemsType.map(c=>c.id),g=this.selectedItemsGroup.map(c=>c.id),u={campaignName:n.name,campaignIds:i,dltId:n.dltId,senderId:n.senderId,smsTemplate:n.smsTemplate,fromName:n.fromName,fromEmail:n.fromEmail,emailSubject:n.emailSubject,emailTemplate:n.emailTemplate,whatsAppId:n.whatsAppId,whatsAppSenderId:n.whatsAppSenderId,whatsAppTemplate:n.whatsAppTemplate,groupIds:g,scheduledOn:n.date+" "+n.time,createdOn:new Date().toISOString().split(".")[0].replace("T"," "),unitId:n.businessUnit,approved:0,campStatus:1};console.log(u),this.campaignService.addCampaign(u).subscribe({next:c=>{console.log(c),this.message="Contact Added Successfully",this.messageType="success",this.createCampaign(),r.submitted=!1,this.selectedItemsType=[],this.selectedItemsGroup=[],setTimeout(()=>{this.message="",this.messageType=""},3e3),this.getCampaigns()},error:c=>{this.message=c.error.error,this.messageType="error",setTimeout(()=>{this.message="",this.messageType=""},3e3)}})}modalOpen(n){let r=document.getElementById(n);r&&(r.style.display="block")}modalClose(n){let r=document.getElementById(n);r&&(r.style.display="none")}addCampaign(){this.formType="add";let n=document.getElementById("form-title");n&&(n.innerText="Add Campaign"),this.modalOpen("campaign")}editCampaign(n){this.editCampaignId=n.id,this.formType="edit";let r=document.getElementById("form-title");r&&(r.innerText="Edit Campaign");let i=n.scheduledOn.split(" ")[0],g=n.scheduledOn.split(" ")[1]?n.scheduledOn.split(" ")[1]:"00:00";this.campaignForm.setValue({name:n.campaignName,date:i,time:g,businessUnit:n.unitId,dltId:n.dltId,senderId:n.senderId,smsTemplate:n.smsTemplate,fromName:n.fromName,fromEmail:n.fromEmail,emailSubject:n.emailSubject,emailTemplate:n.emailTemplate,whatsAppId:n.whatsAppId,whatsAppSenderId:n.whatsAppSenderId,whatsAppTemplate:n.whatsAppTemplate}),n.campaignIds.forEach(u=>{this.dropdownListType.forEach(c=>{u==c.id&&this.selectedItemsType.push({id:c.id,campaignType:c.campaignType})})}),this.selectedItemsType=[...this.selectedItemsType],this.getGroups(),n.groupIds.forEach(u=>{this.dropdownListGroup.forEach(c=>{u==c.id&&this.selectedItemsGroup.push({id:c.id,name:c.name})})}),this.selectedItemsGroup=[...this.selectedItemsGroup],this.modalOpen("campaign")}updateCampaign(){let n=this.selectedItemsType.map(g=>g.id),r=this.selectedItemsGroup.map(g=>g.id),i={id:this.editCampaignId,campaignName:this.campaignForm.controls.name.value,campaignIds:n,dltId:this.campaignForm.controls.dltId.value,senderId:this.campaignForm.controls.senderId.value,smsTemplate:this.campaignForm.controls.smsTemplate.value,fromName:this.campaignForm.controls.fromName.value,fromEmail:this.campaignForm.controls.fromEmail.value,emailSubject:this.campaignForm.controls.emailSubject.value,emailTemplate:this.campaignForm.controls.emailTemplate.value,whatsAppId:this.campaignForm.controls.whatsAppId.value,whatsAppSenderId:this.campaignForm.controls.whatsAppSenderId.value,whatsAppTemplate:this.campaignForm.controls.whatsAppTemplate.value,groupIds:r,scheduledOn:this.campaignForm.controls.date.value+" "+this.campaignForm.controls.time.value,unitId:this.campaignForm.controls.businessUnit.value};console.log(i),this.campaignService.updateCampaign(i).subscribe({next:g=>{console.log(g),this.message="Campaign Updated Successfully",this.messageType="success",this.filteredCampaigns.forEach(u=>{u.id==i.id&&(u.name=i.campaignName,u.campaignIds=i.campaignIds,u.groupIds=i.groupIds,u.scheduledOn=i.scheduledOn,u.unitId=i.unitId)}),setTimeout(()=>{this.message="",this.messageType=""},3e3),this.modalClose("campaign")},error:g=>{this.message=g.error.error,this.messageType="error",setTimeout(()=>{this.message="",this.messageType=""},3e3),this.modalClose("campaign")}})}campaignStatus(n,r){}deleteCampaign(n){this.campaignService.deleteCampaign(n).subscribe({next:r=>{this.filteredCampaigns=this.filteredCampaigns.filter(i=>i.id!=n)}})}inputSearchFilter(n,r){let i=n.map(g=>g.id);this.filteredCampaigns=this.campaigns.filter(g=>JSON.stringify(i)=="[]"?!0:JSON.stringify(g[r].sort((u,c)=>u-c))==JSON.stringify(i.sort((u,c)=>u-c)))}inputSearch(n,r){this.p=1;let i=n.target.value;this.filteredCampaigns=this.campaigns.filter(g=>Number.isInteger(g[r])?i==-1?!0:g[r]==Number(i):g[r].toLowerCase().includes(i.toLowerCase()))}getCampaigns(){this.campaignService.getCampaigns().subscribe({next:n=>{this.campaigns=n,this.filteredCampaigns=this.campaigns}})}sortAsc(n){this.headers.filter(r=>{r.field==n&&(r.iconDisplay=!1)}),this.filteredCampaigns=this.filteredCampaigns.sort((r,i)=>r[n]>i[n]?1:-1)}sortDsc(n){this.headers.filter(r=>{r.field==n&&(r.iconDisplay=!0)}),this.filteredCampaigns=this.filteredCampaigns.sort((r,i)=>i[n]>r[n]?1:-1)}onItemSelect(n){this.headers.forEach(r=>{n.id==r.id&&(r.displayField=!0)})}onItemSelect2(n){}onItemDeSelect(n){this.headers.forEach(r=>{n.id==r.id&&(r.displayField=!1)})}onSelectAll(n){}onSelectAll2(n){}searchStatus(n){this.p=1;let r=n.fromDate||"2000-01-01",i=n.toDate||"9999-12-31",g=Number(n.businessUnit);console.log(r,i,g),this.filteredCampaigns=this.campaigns.filter(u=>u.createdOn>r&&u.createdOn<i&&(g!==-1?u.unitName==g:u.unitName!==g))}getAllBusinessUnits(){this.dataService.getAllBussinessUnits().subscribe({next:n=>{this.businessUnits=n.response}})}campaignTypes(n){let r=[];return n.forEach(i=>{this.dropdownListType.forEach(g=>{i==g.id&&r.push(g.campaignType)})}),r}campaignGroups(n){let r=[];return n.forEach(i=>{this.dropdownListGroup.forEach(g=>{i==g.id&&r.push(g.name)})}),r}records(n){console.log(n.target.value),this.ipp=n.target.value}};l.\u0275fac=function(r){return new(r||l)(b(oe),b(de),b(_e),b(ne))},l.\u0275cmp=V({type:l,selectors:[["app-manage-campaigns"]],standalone:!0,features:[k([]),q],decls:123,vars:38,consts:[[1,"container-fluid"],[1,"d-flex"],[1,"ms-3"],["type","button",1,"btn","btn-success","btn-sm","ms-3",3,"click"],[1,"bi","bi-file-earmark-plus","me-2"],[1,"mt-3","row",3,"ngSubmit"],["searchForm","ngForm"],[1,"col-md-3"],["type","text","name","fromDate","ngModel","","onfocus","(this.type='date')","onblur","(this.type='text')","placeholder","From Date",1,"form-control","form-control-sm"],["type","text","name","toDate","ngModel","","onfocus","(this.type='date')","onblur","(this.type='text')","placeholder","To Date",1,"form-control","form-control-sm"],["name","businessUnit","aria-label","Default select example",1,"form-select","form-select-sm",3,"ngModel"],["value","-1"],[3,"value",4,"ngFor","ngForOf"],["type","submit",1,"btn","btn-sm","btn-success","px-3","w-50"],["type","button",1,"btn","btn-sm","btn-warning","px-3","w-50",3,"click"],[1,"row","mt-3"],[1,"col-md-12","text-end"],[3,"settings","data","ngModel","ngModelChange","onSelect","onDeSelect","onSelectAll"],[1,"mt-3"],[1,"row"],[1,"col-md-6","d-flex","align-items-center"],[1,"label"],[1,"form-select","form-select-sm","w-25","mx-3",3,"ngModel","ngModelChange","change"],["value","1"],["value","2"],["value","3"],["value","4"],["value","5"],[1,"col-md-6"],[1,"float-end"],[3,"pageChange"],[1,"table","table-striped","table-bordered"],[1,"table-success"],[4,"ngFor","ngForOf"],["width","15%"],["tabindex","-1","id","campaign",1,"modal","modal-backdrop"],[1,"modal-dialog","group"],[1,"modal-content"],[3,"ngClass",4,"ngIf"],[1,"modal-header"],["id","form-title",1,"modal-title"],["type","button",1,"btn-close",3,"click"],[1,"modal-body"],[1,"row","form-horizontal",3,"formGroup"],["campaignTemplate","ngForm"],[1,"col-md-4"],[1,"mb-3"],["for","name"],["type","text","id","name","placeholder","Enter Campaign Name","formControlName","name",1,"form-control"],["class","alert alert-danger",4,"ngIf"],["name","campaingGroup",3,"settings","data","ngModel","ngModelOptions","ngModelChange"],["for","date"],["type","date","id","date","formControlName","date","placeholder","Select Date",1,"form-control","form-control-sm"],["for","time"],["type","time","id","time","formControlName","time",1,"form-control","form-control-sm"],["formControlName","businessUnit",1,"form-select"],[1,"col-md-8","template"],["name","campaingType",3,"settings","data","ngModel","ngModelOptions","ngModelChange"],["class","sms-template",4,"ngIf"],["class","email-template",4,"ngIf"],["class","whatsApp-template",4,"ngIf"],["class","btn btn-success w-100",3,"click",4,"ngIf"],[3,"value"],[4,"ngIf"],[3,"click"],["class","bi bi-sort-down-alt",4,"ngIf"],["class","bi bi-sort-up",4,"ngIf"],[1,"bi","bi-sort-down-alt"],[1,"bi","bi-sort-up"],["type","text",1,"form-control","form-control-sm",3,"input"],[3,"settings","data","ngModel","ngModelChange"],["aria-label","Default select example",1,"form-select","form-select-sm",3,"ngModel","change"],["value","0"],[1,"bi","bi-pencil-square","fs-20",3,"click"],["class","bi bi-check-square-fill fs-20",3,"click",4,"ngIf"],["class","bi bi-x-square-fill fs-20",3,"click",4,"ngIf"],[1,"bi","bi-trash","fs-20",3,"click"],[1,"bi","bi-check-square-fill","fs-20",3,"click"],[1,"bi","bi-x-square-fill","fs-20",3,"click"],[3,"ngClass"],[1,"alert","alert-danger"],[1,"sms-template"],[1,"text-success"],[1,"col-md-4","d-flex","align-items-center"],["for","dltId"],[1,"col-md-8"],["type","text","id","dltId","placeholder","Enter DLT Id","formControlName","dltId",1,"form-control","form-control-sm"],["for","senderId"],["type","text","id","senderId","placeholder","Enter Sender Id","formControlName","senderId",1,"form-control","form-control-sm"],[1,"mt-2","mb-3"],["for","smsTemplate",1,"form-label"],["id","smsTemplate","formControlName","smsTemplate","placeholder","Enter SMS Template","rows","4",1,"form-control"],[1,"email-template"],[1,"mb-1","row"],["for","fromName",1,"col-sm-3","col-form-label"],[1,"col-sm-9"],["type","text","id","fromName","formControlName","fromName",1,"form-control","form-control-sm"],["for","fromEmail",1,"col-sm-3","col-form-label"],["type","text","id","fromEmail","formControlName","fromEmail",1,"form-control","form-control-sm"],["for","emailSubject",1,"col-sm-3","col-form-label"],["type","text","id","emailSubject","formControlName","emailSubject",1,"form-control","form-control-sm"],[1,"mb-3","row"],["id","editorEmail","formControlName","emailTemplate",3,"config"],[1,"whatsApp-template"],["for","whatsAppId"],["type","text","id","whatsAppId","placeholder","Enter WhatsApp Id","formControlName","whatsAppId",1,"form-control","form-control-sm"],["for","whatsAppSenderId"],["type","text","id","whatsAppSenderId","placeholder","Enter WhatsApp Sender Id","formControlName","whatsAppSenderId",1,"form-control","form-control-sm"],["id","editorWhatsApp","formControlName","whatsAppTemplate",3,"config"],[1,"btn","btn-success","w-100",3,"click"]],template:function(r,i){if(r&1){let g=T();a(0,"div",0)(1,"div",1)(2,"div")(3,"h3"),s(4,"Manage Campaigns"),o()(),a(5,"div",2)(6,"button",3),C("click",function(){return i.addCampaign()}),f(7,"i",4),s(8,"Add Campaign "),o()()(),a(9,"form",5,6),C("ngSubmit",function(){S(g);let c=M(10);return x(i.searchStatus(c.value))}),a(11,"div",7),f(12,"input",8),o(),a(13,"div",7),f(14,"input",9),o(),a(15,"div",7)(16,"select",10)(17,"option",11),s(18,"Any Business Unit"),o(),_(19,he,2,2,"option",12),o()(),a(20,"div",7)(21,"button",13),s(22,"Search"),o(),a(23,"button",14),C("click",function(){S(g);let c=M(10);return x(c.reset())}),s(24,"Reset"),o()()(),a(25,"div",15)(26,"div",16)(27,"ng-multiselect-dropdown",17),E("ngModelChange",function(c){return w(i.selectedItems,c)||(i.selectedItems=c),c}),C("onSelect",function(c){return i.onItemSelect(c)})("onDeSelect",function(c){return i.onItemDeSelect(c)})("onSelectAll",function(c){return i.onSelectAll(c)}),o()()(),a(28,"div",18)(29,"div",19)(30,"div",20)(31,"span",21),s(32," Records Per Page "),o(),a(33,"select",22),E("ngModelChange",function(c){return w(i.ipp,c)||(i.ipp=c),c}),C("change",function(c){return i.records(c)}),a(34,"option",23),s(35,"1"),o(),a(36,"option",24),s(37,"2"),o(),a(38,"option",25),s(39,"3"),o(),a(40,"option",26),s(41,"4"),o(),a(42,"option",27),s(43,"5"),o()()(),a(44,"div",28)(45,"div",29)(46,"pagination-controls",30),C("pageChange",function(c){return i.p=c}),o()()()(),a(47,"table",31)(48,"thead")(49,"tr",32),_(50,ye,2,1,"ng-container",33),a(51,"th"),s(52,"Actions"),o()()(),a(53,"tbody")(54,"tr"),_(55,Ve,2,1,"ng-container",33),f(56,"td",34),o(),_(57,He,7,3,"tr",33),W(58,"paginate"),o()(),a(59,"div",29)(60,"pagination-controls",30),C("pageChange",function(c){return i.p=c}),o()()(),a(61,"div",35)(62,"div",36)(63,"div",37),_(64,Je,2,2,"div",38),a(65,"div",39),f(66,"h5",40),a(67,"button",41),C("click",function(){return i.modalClose("campaign")}),o()(),a(68,"div",42)(69,"form",43,44)(71,"div",45)(72,"div",46)(73,"label",47),s(74,"Campaign Name "),a(75,"sup"),s(76,"*"),o()(),f(77,"input",48),_(78,Ke,2,1,"div",49),o(),a(79,"div",46)(80,"label"),s(81,"Groups"),a(82,"sup"),s(83,"*"),o()(),a(84,"ng-multiselect-dropdown",50),E("ngModelChange",function(c){return w(i.selectedItemsGroup,c)||(i.selectedItemsGroup=c),c}),o(),_(85,Qe,2,0,"div",49),o(),a(86,"div",46)(87,"label",51),s(88,"Date"),a(89,"sup"),s(90,"*"),o()(),f(91,"input",52),_(92,Ye,2,1,"div",49),o(),a(93,"div",46)(94,"label",53),s(95,"Time"),a(96,"sup"),s(97,"*"),o()(),f(98,"input",54),_(99,et,2,1,"div",49),o(),a(100,"div",46)(101,"label",47),s(102,"Business Unit"),a(103,"sup"),s(104,"*"),o()(),a(105,"select",55)(106,"option",11),s(107,"Select Business Unit"),o(),_(108,tt,2,2,"option",12),o()()(),a(109,"div",56)(110,"div",46)(111,"label",47),s(112,"Campaign Type"),a(113,"sup"),s(114,"*"),o()(),a(115,"ng-multiselect-dropdown",57),E("ngModelChange",function(c){return w(i.selectedItemsType,c)||(i.selectedItemsType=c),c}),C("ngModelChange",function(){return i.updateValidation()}),o(),_(116,nt,2,0,"div",49),o(),_(117,lt,35,3,"div",58)(118,ft,24,5,"div",59)(119,Tt,31,4,"div",60),o(),a(120,"div",45),_(121,It,2,0,"button",61)(122,Ft,2,0,"button",61),o()()()()()()()}if(r&2){let g=M(70);m(16),p("ngModel",-1),m(3),p("ngForOf",i.businessUnits),m(8),p("settings",i.dropdownSettings)("data",i.dropdownList),F("ngModel",i.selectedItems),m(6),F("ngModel",i.ipp),m(17),p("ngForOf",i.headers),m(5),p("ngForOf",i.headers),m(2),p("ngForOf",G(58,30,i.filteredCampaigns,L(33,wt,i.ipp,i.p))),m(7),p("ngIf",i.message),m(5),p("formGroup",i.campaignForm),m(9),p("ngIf",(i.campaignForm.controls.name==null?null:i.campaignForm.controls.name.invalid)&&((i.campaignForm.controls.name==null?null:i.campaignForm.controls.name.dirty)||(i.campaignForm.controls.name==null?null:i.campaignForm.controls.name.touched))),m(6),p("settings",i.dropdownSettingsGroup)("data",i.dropdownListGroup),F("ngModel",i.selectedItemsGroup),p("ngModelOptions",N(36,ue)),m(),p("ngIf",g.submitted&&!i.selectedItemsGroup.length),m(7),p("ngIf",(i.campaignForm.controls.date==null?null:i.campaignForm.controls.date.invalid)&&((i.campaignForm.controls.date==null?null:i.campaignForm.controls.date.dirty)||(i.campaignForm.controls.date==null?null:i.campaignForm.controls.date.touched))),m(7),p("ngIf",(i.campaignForm.controls.time==null?null:i.campaignForm.controls.time.invalid)&&((i.campaignForm.controls.date==null?null:i.campaignForm.controls.date.dirty)||(i.campaignForm.controls.date==null?null:i.campaignForm.controls.date.touched))),m(9),p("ngForOf",i.businessUnits),m(7),p("settings",i.dropdownSettingsType)("data",i.dropdownListType),F("ngModel",i.selectedItemsType),p("ngModelOptions",N(37,ue)),m(),p("ngIf",g.submitted&&!i.selectedItemsType.length),m(),p("ngIf",i.dropdownListType[0].validation),m(),p("ngIf",i.dropdownListType[1].validation),m(),p("ngIf",i.dropdownListType[2].validation),m(2),p("ngIf",i.formType=="add"),m(),p("ngIf",i.formType=="edit")}},dependencies:[P,j,$,U,ie,Q,ee,te,z,Z,H,J,K,R,ae,X,Y,se,pe,me,re,le,ge,ce],styles:[".fs-20[_ngcontent-%COMP%]{font-size:20px;margin-right:5px}table[_ngcontent-%COMP%]{font-size:13px}th[_ngcontent-%COMP%]{vertical-align:top}.modal-dialog.group[_ngcontent-%COMP%]{max-width:75%}.template[_ngcontent-%COMP%]{max-height:75vh;overflow-y:auto;font-size:14px}.alert[_ngcontent-%COMP%]{padding:5px 10px}"]});let t=l;return t})();export{Ut as ManageCampaignsComponent};
