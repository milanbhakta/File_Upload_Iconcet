(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,a){e.exports=a(42)},41:function(e,t,a){},42:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(11),s=a.n(l),c=a(4),m=a.n(c),i=a(12),o=a(2),u=function(e){var t=e.msg;return r.a.createElement("div",{className:"alert alert-info alert-dismissible fade show",role:"alert"},t,r.a.createElement("button",{type:"button",className:"close","data-dismiss":"alert","aria-label":"Close"},r.a.createElement("span",{"aria-hidden":"true"},"\xd7")))},p=function(e){var t=e.percentage;return r.a.createElement("div",{className:"progress"},r.a.createElement("div",{className:"progress-bar progress-bar-striped bg-success",role:"progressbar",style:{width:"".concat(t,"%")}},t,"%"))},d=a(13),f=a.n(d),b=function(){var e=Object(n.useState)(""),t=Object(o.a)(e,2),a=t[0],l=t[1],s=Object(n.useState)("Choose File"),c=Object(o.a)(s,2),d=c[0],b=c[1],E=Object(n.useState)({}),h=Object(o.a)(E,2),v=h[0],g=h[1],N=Object(n.useState)(""),w=Object(o.a)(N,2),j=w[0],y=w[1],O=Object(n.useState)(0),F=Object(o.a)(O,2),x=F[0],S=F[1],k=function(){var e=Object(i.a)(m.a.mark(function e(t){var n,r,l,s,c;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),(n=new FormData).append("file",a),e.prev=3,e.next=6,f.a.post("/upload",n,{headers:{"Content-Type":"multipart/form-data"},onUploadProgress:function(e){S(parseInt(Math.round(100*e.loaded/e.total))),setTimeout(function(){return S(0)},1e4)}});case 6:r=e.sent,l=r.data,s=l.fileName,c=l.filePath,g({fileName:s,filePath:c}),y("File Uploaded"),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(3),500===e.t0.response.status?y("There was a problem with the server"):y(e.t0.response.data.msg);case 15:case"end":return e.stop()}},e,null,[[3,12]])}));return function(t){return e.apply(this,arguments)}}();return r.a.createElement(n.Fragment,null,j?r.a.createElement(u,{msg:j}):null,r.a.createElement("form",{onSubmit:k,encType:"multipart/form-data"},r.a.createElement("div",{className:"custom-file mb-4"},r.a.createElement("input",{type:"file",className:"custom-file-input",id:"customFile",multiple:!0,onChange:function(e){l(e.target.files[0]),b(e.target.files[0].name)}}),r.a.createElement("label",{className:"custom-file-label",htmlFor:"customFile"},d)),r.a.createElement(p,{percentage:x}),r.a.createElement("input",{type:"submit",value:"Upload",className:"btn btn-primary btn-block mt-4"})),v?r.a.createElement("div",{className:"row mt-5"},r.a.createElement("div",{className:"col-md-6 m-auto"},r.a.createElement("h3",{className:"text-center"},v.fileName),r.a.createElement("img",{style:{width:"100%"},src:v.filePath,alt:""}))):null)},E=(a(41),function(){return r.a.createElement("div",{className:"container mt-4"},r.a.createElement("h4",{className:"display-4 text-center mb-4"},r.a.createElement("i",{className:"fab fa-react"})," React File Upload"),r.a.createElement(b,null))});s.a.render(r.a.createElement(E,null),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.acbb50c1.chunk.js.map