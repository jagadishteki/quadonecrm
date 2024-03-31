import{a as g}from"./chunk-2VH7T43J.js";import{c as u}from"./chunk-53OBTSWP.js";import{p as m}from"./chunk-F3V7552A.js";import{Bb as l,Jb as b,Na as n,Oa as c,aa as p,cb as s,jb as o,kb as e,lb as h}from"./chunk-62ILBLXH.js";import"./chunk-CWTPBX7D.js";var y=(()=>{let r=class r{constructor(t){this.dataService=t,this.chart=[],this.data=[],this.users=[],this.labelData=[],this.realData=[],this.colorData=[]}ngOnInit(){this.dataService.getUsers().subscribe({next:t=>{this.users=t},complete:()=>{this.users.forEach(t=>{this.labelData.includes(t.speciality)||this.labelData.push(t.speciality)}),this.labelData.forEach(t=>{let i=0;this.users.forEach(a=>{t==a.speciality&&i++}),this.realData.push(i)}),this.barChartData={labels:this.labelData,datasets:[{data:this.realData,label:"Leads Speciality-Wise",backgroundColor:["rgba(255, 99, 132, 0.2)","rgba(255, 159, 64, 0.2)","rgba(255, 205, 86, 0.2)","rgba(75, 192, 192, 0.2)","rgba(54, 162, 235, 0.2)","rgba(153, 102, 255, 0.2)","rgba(201, 203, 207, 0.2)"],borderColor:["rgb(255, 99, 132)","rgb(255, 159, 64)","rgb(255, 205, 86)","rgb(75, 192, 192)","rgb(54, 162, 235)","rgb(153, 102, 255)","rgb(201, 203, 207)"],borderWidth:1}]}}})}};r.\u0275fac=function(i){return new(i||r)(c(g))},r.\u0275cmp=p({type:r,selectors:[["app-dashboard"]],standalone:!0,features:[b],decls:17,vars:12,consts:[[1,"row"],[1,"col-md-6","chart-box"],["width","600","height","400","baseChart","",3,"data","options","type"]],template:function(i,a){i&1&&(o(0,"div",0)(1,"div",1)(2,"h2"),l(3,"Bar Chart"),e(),h(4,"canvas",2),e(),o(5,"div",1)(6,"h2"),l(7,"Bar Chart"),e(),h(8,"canvas",2),e(),o(9,"div",1)(10,"h2"),l(11,"Bar Chart"),e(),h(12,"canvas",2),e(),o(13,"div",1)(14,"h2"),l(15,"Bar Chart"),e(),h(16,"canvas",2),e()()),i&2&&(n(4),s("data",a.barChartData)("options",a.barChartOptions)("type","bar"),n(4),s("data",a.barChartData)("options",a.barChartOptions)("type","pie"),n(4),s("data",a.barChartData)("options",a.barChartOptions)("type","doughnut"),n(4),s("data",a.barChartData)("options",a.barChartOptions)("type","polarArea"))},dependencies:[m,u],styles:[".chart-box[_ngcontent-%COMP%]{padding:25px;height:350px}.chart[_ngcontent-%COMP%]{margin:auto}"]});let d=r;return d})();export{y as DashboardComponent};