import{a as re,b as oe,c as se}from"./chunk-CNFXN6DM.js";import{a as te,b as ie,c as ne,d as le,e as ae,f as ce}from"./chunk-MH25Y5YS.js";import{b as B,c as w,d as L,e as W,g as I,h as j,i as z,j as H,k as Q,l as R,m as Y,n as J,r as K,s as X,t as Z}from"./chunk-ZGD7ZSFZ.js";import{a as ee}from"./chunk-2VH7T43J.js";import{k as N,l as D,m as $,p as q}from"./chunk-F3V7552A.js";import{Bb as l,Cb as h,Db as v,Fb as E,Gb as y,Hb as T,Jb as U,Lb as V,Na as a,Nb as P,Oa as x,Ob as A,aa as k,ab as g,cb as m,jb as n,ka as f,kb as r,la as C,lb as b,pb as S,sb as u,tb as _,xb as F,yb as M,zb as O}from"./chunk-62ILBLXH.js";import"./chunk-FK6H3RFT.js";import"./chunk-CWTPBX7D.js";var pe=["tableGroup"],ue=s=>({itemsPerPage:2,currentPage:s});function de(s,d){s&1&&b(0,"i",62)}function me(s,d){s&1&&b(0,"i",63)}function _e(s,d){if(s&1){let o=S();n(0,"th"),l(1),n(2,"a",59),u("click",function(){let i=f(o).$implicit,e=_();return C(e.sortAsc(i.field))}),g(3,de,1,0,"i",60),r(),n(4,"a",59),u("click",function(){let i=f(o).$implicit,e=_();return C(e.sortDsc(i.field))}),g(5,me,1,0,"i",61),r()()}if(s&2){let o=d.$implicit;a(),v("",o.header," "),a(2),m("ngIf",o.sortIcon),a(2),m("ngIf",!o.sortIcon)}}function ge(s,d){if(s&1){let o=S();n(0,"i",70),u("click",function(){f(o);let i=_().$implicit,e=_();return C(e.groupStatus(i.id,0))}),r()}}function he(s,d){if(s&1){let o=S();n(0,"i",71),u("click",function(){f(o);let i=_().$implicit,e=_();return C(e.groupStatus(i.id,1))}),r()}}function fe(s,d){if(s&1){let o=S();n(0,"tr")(1,"td"),l(2),r(),n(3,"td"),l(4),r(),n(5,"td"),l(6),r(),n(7,"td"),l(8),r(),n(9,"td")(10,"i",64),u("click",function(){let i=f(o).$implicit,e=_();return C(e.editGroup(i))}),r(),g(11,ge,1,0,"i",65)(12,he,1,0,"i",66),n(13,"i",67),u("click",function(){let i=f(o).$implicit,e=_();return C(e.assign(i))}),r(),n(14,"i",68),u("click",function(){let i=f(o).$implicit,e=_();return C(e.groupUsersFun(i))}),r(),n(15,"i",69),u("click",function(){let i=f(o).$implicit,e=_();return C(e.deleteGroup(i.id))}),r()()()}if(s&2){let o=d.$implicit;a(2),h(o.name),a(2),h(o.description),a(2),h(o.status==1?"Active":"Deactive"),a(2),h(o.created),a(3),m("ngIf",o.status=="1"),a(),m("ngIf",o.status=="0")}}function Ce(s,d){if(s&1&&(n(0,"th"),l(1),r()),s&2){let o=d.$implicit;a(),h(o.header)}}function be(s,d){if(s&1&&(n(0,"tr",75)(1,"td"),l(2),r(),n(3,"td"),l(4),r(),n(5,"td"),l(6),r(),n(7,"td"),l(8),r(),b(9,"td"),r()),s&2){let o=d.$implicit;a(2),h(o.name),a(2),h(o.description),a(2),h(o.status),a(2),h(o.created)}}function Se(s,d){if(s&1&&(n(0,"table",72,0)(2,"tr",73),g(3,Ce,2,1,"th",10),r(),g(4,be,10,4,"tr",74),r()),s&2){let o=_();a(3),m("ngForOf",o.headers),a(),m("ngForOf",o.filteredGroups)}}function Ge(s,d){if(s&1&&(n(0,"div",76),l(1),r()),s&2){let o=_();m("ngClass",o.messageType=="success"?"alert alert-success":"alert alert-danger"),a(),v(" ",o.message,"")}}function ve(s,d){s&1&&(n(0,"div"),l(1," Name is required. "),r())}function xe(s,d){if(s&1&&(n(0,"div",77),g(1,ve,2,0,"div",78),r()),s&2){let o=_();a(),m("ngIf",o.contactGroup.controls.name==null||o.contactGroup.controls.name.errors==null?null:o.contactGroup.controls.name.errors.required)}}function Ee(s,d){s&1&&(n(0,"div"),l(1," Description is required. "),r())}function ye(s,d){if(s&1&&(n(0,"div",77),g(1,Ee,2,0,"div",78),r()),s&2){let o=_();a(),m("ngIf",o.contactGroup.controls.description==null||o.contactGroup.controls.description.errors==null?null:o.contactGroup.controls.description.errors.required)}}function Te(s,d){if(s&1){let o=S();n(0,"button",79),u("click",function(){f(o);let i=_();return C(i.onSubmit(i.contactGroup.value))}),l(1,"Add"),r()}}function we(s,d){if(s&1){let o=S();n(0,"button",79),u("click",function(){f(o);let i=_();return C(i.updateGroup())}),l(1,"Update"),r()}}function Ie(s,d){if(s&1){let o=S();n(0,"tr")(1,"td")(2,"input",80),u("change",function(i){f(o);let e=_();return C(e.addContact(i))}),r()(),n(3,"td"),l(4),r(),n(5,"td"),l(6),r(),n(7,"td"),l(8),r(),n(9,"td"),l(10),r(),n(11,"td"),l(12),r()()}if(s&2){let o=d.$implicit,t=_();a(2),m("checked",t.assignCheck)("value",o.id),a(2),h(o.groupName),a(2),h(o.name),a(2),h(o.phone),a(2),h(o.email),a(2),h(o.speciality)}}function ke(s,d){s&1&&b(0,"i",62)}function Fe(s,d){s&1&&b(0,"i",63)}function Me(s,d){if(s&1){let o=S();n(0,"th",81),l(1),n(2,"a",59),u("click",function(){let i=f(o).$implicit,e=_();return C(e.sortUserAsc(i.field))}),g(3,ke,1,0,"i",60),r(),n(4,"a",59),u("click",function(){let i=f(o).$implicit,e=_();return C(e.sortUserDsc(i.field))}),g(5,Fe,1,0,"i",61),r()()}if(s&2){let o=d.$implicit;a(),v("",o.header," "),a(2),m("ngIf",o.sortIcon),a(2),m("ngIf",!o.sortIcon)}}function Oe(s,d){if(s&1&&(n(0,"tr")(1,"td"),l(2),r(),n(3,"td"),l(4),r(),n(5,"td"),l(6),r(),n(7,"td"),l(8),r()()),s&2){let o=d.$implicit;a(2),h(o.name),a(2),h(o.phone),a(2),h(o.email),a(2),h(o.speciality)}}var He=(()=>{let d=class d{constructor(t,i,e){this.formBuilder=t,this.contactService=i,this.dataService=e,this.headers=[{header:"Group Name",sortIcon:!0,field:"name"},{header:"Description",sortIcon:!0,field:"description"},{header:"Group Status",sortIcon:!0,field:"status"},{header:"Created On",sortIcon:!0,field:"created"}],this.userHeaders=[{header:"Name",sortIcon:!0,field:"name"},{header:"Mobile",sortIcon:!0,field:"phone"},{header:"Email",sortIcon:!0,field:"email"},{header:"Speciality",sortIcon:!0,field:"speciality"}],this.p=1,this.exportTable=!1,this.specialityId=0,this.assigned="",this.gu=1,this.dropdownList=[],this.selectedItems=[],this.dropdownSettings={}}ngOnInit(){this.getGroups(),this.groupForm(),this.getSpecialities(),this.assignForm(),this.dropdownList=this.specialities,this.dropdownSettings={singleSelection:!1,idField:"specalityId",textField:"specalityName",selectAllText:"Select All",unSelectAllText:"UnSelect All",itemsShowLimit:3,allowSearchFilter:!0}}onItemSelect(t){console.log(this.selectedItems)}onSelectAll(t){console.log(t)}assign(t){this.group=t,this.modalOpen("assign"),this.getUsers()}groupUsersFun(t){this.group=t,this.modalOpen("groupUsers"),this.getGroupUsers(t.id)}assignForm(){this.assignFormGroup=this.formBuilder.group({contacts:this.formBuilder.array([])})}addContact(t){let i=this.assignFormGroup.get("contacts");t.target.checked?i.push(new I(t.target.value)):i.controls.forEach((e,c,p)=>{if(e.value==t.target.value){i.removeAt(c);return}})}selectToggle(t){let i=this.assignFormGroup.get("contacts");t.target.checked?(this.filteredUsers.forEach(e=>{i.push(new I(e.id.toString()))}),this.assignCheck=!0):(this.assignForm(),this.assignCheck=!1)}assignSubmit(){this.users.forEach(t=>{if((this.assignFormGroup.get("contacts")?.value).includes(t.id.toString())){let i={id:t.id,groupId:this.group.id,groupName:this.group.name};this.contactService.assignContacts(i).subscribe({next:e=>{this.users.forEach(c=>{(this.assignFormGroup.get("contacts")?.value).includes(c.id.toString())&&(c.groupId=this.group.id,c.groupName=this.group.name)}),this.assignForm(),this.assignCheck=!1}})}}),this.getUsers()}getSpecialities(){this.dataService.getSpecialities().subscribe(t=>{this.specialities=t.response})}getUsers(){this.dataService.getUsers().subscribe({next:t=>{this.users=t,this.filteredUsers=this.users}})}getGroupUsers(t){this.dataService.getUsers().subscribe({next:i=>{this.users=i,this.groupUsers=this.users.filter(e=>e.groupId==t),this.filteredGroupUsers=this.groupUsers}})}searchContacts(){this.selectedIds=this.selectedItems.map(t=>t.specalityId),this.filteredUsers=this.users.filter(t=>this.selectedIds?this.selectedIds.includes(t.specialityId):!0).filter(t=>this.assigned?t.groupId==this.assigned:!0)}getGroups(){this.contactService.getGroups().subscribe({next:t=>{this.groups=t,this.filteredGroups=this.groups}})}groupForm(){this.contactGroup=this.formBuilder.group({name:["",w.required],description:["",w.required]})}get cg(){return this.contactGroup.controls}modalOpen(t){let i=document.getElementById(t);i&&(i.style.display="block")}modalClose(t){(t=="assign"||t=="groupUsers")&&this.getGroups();let i=document.getElementById(t);i&&(i.style.display="none")}sortAsc(t){this.headers.filter(i=>{i.field==t&&(i.sortIcon=!1)}),this.filteredGroups=this.filteredGroups.sort((i,e)=>i[t]>e[t]?1:-1)}sortUserAsc(t){this.userHeaders.filter(i=>{i.field==t&&(i.sortIcon=!1)}),this.filteredGroupUsers=this.filteredGroupUsers.sort((i,e)=>i[t]>e[t]?1:-1)}sortDsc(t){this.headers.filter(i=>{i.field==t&&(i.sortIcon=!0)}),this.filteredGroups=this.filteredGroups.sort((i,e)=>i[t]<e[t]?1:-1)}sortUserDsc(t){this.userHeaders.filter(i=>{i.field==t&&(i.sortIcon=!0)}),this.filteredGroupUsers=this.filteredGroupUsers.sort((i,e)=>i[t]<e[t]?1:-1)}inputSearch(t,i){let e=["status"];this.p=1;let c=t.target.value,p=e.some(G=>G==i);this.filteredGroups=this.groups.filter(G=>p?c?G[i]==c:!0:G[i].toLowerCase().includes(c.toLowerCase()))}inputUserSearch(t,i){let e=t.target.value;this.filteredGroupUsers=this.groupUsers.filter(c=>c[i].toLowerCase().includes(e.toLowerCase()))}onSubmit(t){let i=this.contactGroup.controls;if(this.contactGroup.invalid){for(let e in i)i[e].invalid&&i[e].markAsTouched();return}else{let e={name:this.cg.name.value,description:this.cg.description.value,status:"1",created:new Date().toISOString().split("T")[0]};this.contactService.addGroup(e).subscribe({next:c=>{this.message="Contact Added Successfully",this.messageType="success",setTimeout(()=>{this.message="",this.messageType=""},3e3),this.modalClose("group"),this.getGroups()},error:c=>{this.message=c.error.error,this.messageType="error",setTimeout(()=>{this.message="",this.messageType=""},3e3)}})}}addGroup(){this.formType="add";let t=document.getElementById("form-title");t&&(t.innerText="Add Group"),this.groupForm(),this.modalOpen("group")}editGroup(t){this.editGroupId=t.id,this.formType="edit";let i=document.getElementById("form-title");i&&(i.innerText="Edit Group"),this.contactGroup.setValue({name:t.name,description:t.description}),this.modalOpen("group")}updateGroup(){let t={id:this.editGroupId,name:this.cg.name.value,description:this.cg.description.value};this.contactService.updateGroup(t).subscribe({next:i=>{this.groupForm(),this.message="Group Updated Successfully",this.messageType="success",this.formType="",setTimeout(()=>{this.message="",this.messageType="",this.modalClose("group"),this.getGroups()},3e3),this.filteredGroups.forEach(e=>{e.id==t.id&&(e.name=t.name,e.description=t.description)})},error:i=>{this.message=i.error.error,this.messageType="error",setTimeout(()=>{this.message="",this.messageType="",this.modalClose("group")},3e3)}})}groupStatus(t,i){let e={id:t,status:i},c;return i==1?c="Active":c="Deactive",window.confirm(`Are you Sure You want to make it ${c}?`)?this.contactService.groupStatus(e).subscribe({next:p=>{this.filteredGroups.forEach(G=>{G.id==t&&(G.status=i)})}}):!1}deleteGroup(t){this.contactService.deleteGroup(t).subscribe({next:i=>{this.updateFilterGroups(t)}})}updateFilterGroups(t){this.filteredGroups=this.filteredGroups.filter(i=>i.id!=t)}getExcelFile(){this.exportTable=!0,setTimeout(()=>{let t=oe.table_to_book(this.tableGroup.nativeElement);re(t,"user-contacts.xlsx"),this.exportTable=!1},0)}getPdfFile(){this.exportTable=!0,setTimeout(()=>{new se({orientation:"landscape",unit:"mm",format:"a4"}).html(this.tableGroup.nativeElement,{callback:function(i){i.save("users-contact.pdf")},x:25,y:10,width:262,windowWidth:1e3}),this.exportTable=!1},0)}};d.\u0275fac=function(i){return new(i||d)(x(K),x(ce),x(ee))},d.\u0275cmp=k({type:d,selectors:[["app-contact-groups"]],viewQuery:function(i,e){if(i&1&&F(pe,5),i&2){let c;M(c=O())&&(e.tableGroup=c.first)}},standalone:!0,features:[U],decls:147,vars:25,consts:[["tableGroup",""],[1,"container-fluid"],[1,"d-flex"],["type","button",1,"btn","btn-success","btn-sm","ms-3",3,"click"],[1,"bi","bi-file-earmark-plus","me-2"],[1,"ms-auto"],[3,"pageChange"],[1,"search-result","mt-1"],[1,"table","table-striped","table-bordered"],[1,"table-success"],[4,"ngFor","ngForOf"],["width","20%"],["type","text",1,"form-control","form-control-sm",3,"input"],["width","30%"],["width","15%"],[1,"form-select","form-select-sm",3,"change"],["value",""],["value","1"],["value","0"],["class","table export-table",4,"ngIf"],[1,"float-end"],[1,"btn-group"],["type","button","data-bs-toggle","dropdown","aria-expanded","false",1,"btn","btn-danger","btn-sm","dropdown-toggle","px-3"],[1,"dropdown-menu"],[1,"dropdown-item",3,"click"],["tabindex","-1","id","group",1,"modal","modal-backdrop"],[1,"modal-dialog"],[1,"modal-content"],[3,"ngClass",4,"ngIf"],[1,"modal-header"],["id","form-title",1,"modal-title"],["type","button",1,"btn-close",3,"click"],[1,"modal-body"],[1,"form-horizontal",3,"formGroup"],[1,"mb-3"],["for","name"],["type","text","placeholder","Enter Group Name","formControlName","name",1,"form-control"],["class","alert alert-danger",4,"ngIf"],["for","description",1,"form-label"],["id","description","formControlName","description","placeholder","Enter Description","rows","4",1,"form-control"],["class","btn btn-success px-5",3,"click",4,"ngIf"],["type","button",1,"btn","btn-danger","px-5","ms-3",3,"click"],["tabindex","-1","id","assign",1,"modal","modal-backdrop","overflow-scroll"],[1,"modal-dialog","group"],[1,"modal-title"],[1,"row"],[1,"col-md-4"],[3,"ngModelChange","onSelect","onSelectAll","settings","data","ngModel"],[1,"col-md-2"],[1,"form-select",3,"ngModelChange","ngModel"],["type","button",1,"btn","btn-success","w-100",3,"click"],[1,"form-horizontal","mt-3",3,"ngSubmit","formGroup"],[1,"contacts"],["type","checkbox",1,"form-check",3,"change","checked"],[1,"row","mt-3"],["type","submit",1,"btn","btn-success","w-100"],["tabindex","-1","id","groupUsers",1,"modal","modal-backdrop"],["class","bg-success text-light",4,"ngFor","ngForOf"],["width","25%"],[3,"click"],["class","bi bi-sort-down-alt",4,"ngIf"],["class","bi bi-sort-up",4,"ngIf"],[1,"bi","bi-sort-down-alt"],[1,"bi","bi-sort-up"],[1,"bi","bi-pencil-square","fs-20",3,"click"],["class","bi bi-check-square-fill fs-20",3,"click",4,"ngIf"],["class","bi bi-x-square-fill fs-20",3,"click",4,"ngIf"],[1,"bi","bi-person-fill-add","fs-20",3,"click"],[1,"bi","bi-people-fill","fs-20",3,"click"],[1,"bi","bi-trash","fs-20",3,"click"],[1,"bi","bi-check-square-fill","fs-20",3,"click"],[1,"bi","bi-x-square-fill","fs-20",3,"click"],[1,"table","export-table"],[1,"thead"],["class","tbody",4,"ngFor","ngForOf"],[1,"tbody"],[3,"ngClass"],[1,"alert","alert-danger"],[4,"ngIf"],[1,"btn","btn-success","px-5",3,"click"],["type","checkbox",1,"form-check",3,"change","checked","value"],[1,"bg-success","text-light"]],template:function(i,e){i&1&&(n(0,"div",1)(1,"div",2)(2,"div")(3,"h3"),l(4,"Manage Contact Groups"),r()(),n(5,"div")(6,"button",3),u("click",function(){return e.addGroup()}),b(7,"i",4),l(8,"Add Group "),r()(),n(9,"div",5)(10,"pagination-controls",6),u("pageChange",function(p){return e.p=p}),r()()(),n(11,"div",7)(12,"table",8)(13,"thead")(14,"tr",9),g(15,_e,6,3,"th",10),n(16,"th"),l(17,"Actions"),r()()(),n(18,"tbody")(19,"tr")(20,"td",11)(21,"input",12),u("input",function(p){return e.inputSearch(p,"name")}),r()(),n(22,"td",13)(23,"input",12),u("input",function(p){return e.inputSearch(p,"description")}),r()(),n(24,"td",14)(25,"select",15),u("change",function(p){return e.inputSearch(p,"status")}),n(26,"option",16),l(27,"Active / Deactive"),r(),n(28,"option",17),l(29,"Active"),r(),n(30,"option",18),l(31,"Deactive"),r()()(),n(32,"td",14)(33,"input",12),u("input",function(p){return e.inputSearch(p,"created")}),r()(),b(34,"td"),r(),g(35,fe,16,6,"tr",10),P(36,"paginate"),r()(),g(37,Se,5,2,"table",19),n(38,"div",20)(39,"pagination-controls",6),u("pageChange",function(p){return e.p=p}),r()(),n(40,"div",21)(41,"button",22),l(42," Export "),r(),n(43,"ul",23)(44,"li")(45,"button",24),u("click",function(){return e.getExcelFile()}),l(46,"Excel"),r()(),n(47,"li")(48,"button",24),u("click",function(){return e.getPdfFile()}),l(49,"PDF"),r()()()()()(),n(50,"div",25)(51,"div",26)(52,"div",27),g(53,Ge,2,2,"div",28),n(54,"div",29),b(55,"h5",30),n(56,"button",31),u("click",function(){return e.modalClose("group")}),r()(),n(57,"div",32)(58,"form",33)(59,"div",34)(60,"label",35),l(61,"Name "),n(62,"sup"),l(63,"*"),r()(),b(64,"input",36),g(65,xe,2,1,"div",37),r(),n(66,"div",34)(67,"label",38),l(68,"Description "),n(69,"sup"),l(70,"*"),r()(),b(71,"textarea",39),g(72,ye,2,1,"div",37),r(),n(73,"div",34),g(74,Te,2,0,"button",40)(75,we,2,0,"button",40),n(76,"button",41),u("click",function(){return e.groupForm()}),l(77,"Reset"),r()()()()()()(),n(78,"div",42)(79,"div",43)(80,"div",27)(81,"div",29)(82,"h5",44),l(83),r(),n(84,"button",31),u("click",function(){return e.modalClose("assign")}),r()(),n(85,"div",32)(86,"div",45)(87,"div",46)(88,"ng-multiselect-dropdown",47),T("ngModelChange",function(p){return y(e.selectedItems,p)||(e.selectedItems=p),p}),u("onSelect",function(p){return e.onItemSelect(p)})("onSelectAll",function(p){return e.onSelectAll(p)}),r()(),n(89,"div",48)(90,"select",49),T("ngModelChange",function(p){return y(e.assigned,p)||(e.assigned=p),p}),n(91,"option",16),l(92,"All"),r(),n(93,"option",18),l(94,"Not Assianed"),r(),n(95,"option",17),l(96,"Assigned"),r()()(),n(97,"div",48)(98,"button",50),u("click",function(){return e.searchContacts()}),l(99,"Search Contacts"),r()()(),n(100,"form",51),u("ngSubmit",function(){return e.assignSubmit()}),n(101,"div",52)(102,"table",8)(103,"thead")(104,"tr",9)(105,"th")(106,"input",53),u("change",function(p){return e.selectToggle(p)}),r()(),n(107,"th"),l(108,"Group Name"),r(),n(109,"th"),l(110,"Name"),r(),n(111,"th"),l(112,"Phone"),r(),n(113,"th"),l(114,"E-mail"),r(),n(115,"th"),l(116,"Speciality"),r()()(),n(117,"tbody"),g(118,Ie,13,7,"tr",10),r()()(),n(119,"div",54)(120,"div",46)(121,"button",55),l(122,"ASSIGN TO GROUP"),r()()()()()()()(),n(123,"div",56)(124,"div",43)(125,"div",27)(126,"div",29)(127,"h5",44),l(128),r(),n(129,"button",31),u("click",function(){return e.modalClose("groupUsers")}),r()(),n(130,"div",32)(131,"div",52)(132,"table",8)(133,"thead")(134,"tr",9),g(135,Me,6,3,"th",57),r()(),n(136,"tbody")(137,"tr")(138,"td",58)(139,"input",12),u("input",function(p){return e.inputUserSearch(p,"name")}),r()(),n(140,"td",14)(141,"input",12),u("input",function(p){return e.inputUserSearch(p,"phone")}),r()(),n(142,"td",58)(143,"input",12),u("input",function(p){return e.inputUserSearch(p,"email")}),r()(),n(144,"td",13)(145,"input",12),u("input",function(p){return e.inputUserSearch(p,"speciality")}),r()()(),g(146,Oe,9,4,"tr",10),r()()()()()()()),i&2&&(a(15),m("ngForOf",e.headers),a(20),m("ngForOf",A(36,20,e.filteredGroups,V(23,ue,e.p))),a(2),m("ngIf",e.exportTable),a(16),m("ngIf",e.message),a(5),m("formGroup",e.contactGroup),a(7),m("ngIf",(e.contactGroup.controls.name==null?null:e.contactGroup.controls.name.invalid)&&((e.contactGroup.controls.name==null?null:e.contactGroup.controls.name.dirty)||(e.contactGroup.controls.name==null?null:e.contactGroup.controls.name.touched))),a(7),m("ngIf",(e.contactGroup.controls.description==null?null:e.contactGroup.controls.description.invalid)&&((e.contactGroup.controls.description==null?null:e.contactGroup.controls.description.dirty)||(e.contactGroup.controls.description==null?null:e.contactGroup.controls.description.touched))),a(2),m("ngIf",e.formType=="add"),a(),m("ngIf",e.formType=="edit"),a(8),v("Add Contacts to ",e.group==null?null:e.group.name,""),a(5),m("settings",e.dropdownSettings)("data",e.dropdownList),E("ngModel",e.selectedItems),a(2),E("ngModel",e.assigned),a(10),m("formGroup",e.assignFormGroup),a(6),m("checked",e.assignCheck),a(12),m("ngForOf",e.filteredUsers),a(10),v("",e.group==null?null:e.group.name," Users"),a(7),m("ngForOf",e.userHeaders),a(11),m("ngForOf",e.filteredGroupUsers))},dependencies:[q,N,D,$,Z,z,Y,J,B,R,L,W,H,Q,ne,te,ie,X,j,ae,le],styles:["table[_ngcontent-%COMP%]{font-size:13px}.alert[_ngcontent-%COMP%]{padding-top:5px;padding-bottom:5px}.export-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(2n){background-color:#f2f2f2}.thead[_ngcontent-%COMP%]{background-color:#adff2f}.thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .thead[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{border-bottom:1px solid black;padding:5px}.modal-backdrop[_ngcontent-%COMP%]{background-color:#00000080!important}.fs-20[_ngcontent-%COMP%]{font-size:20px;margin-left:10px}.modal-dialog.group[_ngcontent-%COMP%]{max-width:75%}.contacts[_ngcontent-%COMP%]{max-height:50vh;overflow-y:scroll}.contacts[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{position:sticky;top:0}.form-check[_ngcontent-%COMP%]{width:1.5em;height:1.5em}"]});let s=d;return s})();export{He as ContactGroupsComponent};
