(this.webpackJsonpnotes=this.webpackJsonpnotes||[]).push([[0],{16:function(e,t,n){e.exports=n(41)},40:function(e,t,n){},41:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(15),u=n.n(c),o=n(2),i=n.n(o),s=n(5),p=n(4),l=n(3),m=n.n(l);var f=function(){var e=Object(a.useState)([]),t=Object(p.a)(e,2),n=t[0],c=t[1],u=Object(a.useState)(),o=Object(p.a)(u,2),l=o[0],f=o[1],b=Object(a.useState)(),d=Object(p.a)(b,2),h=d[0],v=d[1],E=function(){var e=Object(s.a)(i.a.mark((function e(){var t,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.a.get("/api/persons");case 2:t=e.sent,n=t.data,c(n);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(a.useEffect)((function(){E()}),[]);var x=function(e){m.a.delete("/api/persons/".concat(e.target.id)),E()},j=function(){var e=Object(s.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t=n.find((function(e){return e.name===l})))){e.next=6;break}return e.next=4,m.a.put("/api/persons/".concat(t.id),{number:h});case 4:e.next=8;break;case 6:return e.next=8,m.a.post("/api/persons",{name:l,number:h});case 8:E();case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"App"},r.a.createElement("h1",null,"Phone Book"),r.a.createElement("ul",null,n.map((function(e){return r.a.createElement("li",null,e.name," ",e.number," ",r.a.createElement("button",{id:e.id,onClick:x},"delete"))}))),r.a.createElement("form",{onSubmit:j},r.a.createElement("input",{onChange:function(e){return f(e.target.value)},type:"text",placeholder:"name"}),r.a.createElement("input",{onChange:function(e){return v(e.target.value)},type:"text",placeholder:"number"}),r.a.createElement("button",{type:"submit"},"Submit")))};n(40);u.a.render(r.a.createElement(f,null),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.b9bafb3e.chunk.js.map