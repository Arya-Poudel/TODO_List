(this["webpackJsonptodo-app"]=this["webpackJsonptodo-app"]||[]).push([[0],{13:function(e,t,c){},14:function(e,t,c){},17:function(e,t,c){"use strict";c.r(t);var a=c(1),n=c.n(a),s=c(8),i=c.n(s),r=(c(13),c(7)),l=c(2),o=(c(14),c(3)),d=c.n(o),j=c(0),u=function(e){var t=e.addProject;return Object(j.jsx)("div",{className:"project-form",children:Object(j.jsxs)("form",{name:"form1",className:"project-form-wrapper",autoComplete:"off",onSubmit:function(e){e.preventDefault(),t({name:e.target.project_name.value,key:d()()}),document.form1.reset()},children:[Object(j.jsx)("label",{htmlFor:"project_name",children:"New Project: "}),Object(j.jsx)("input",{type:"text",name:"project_name",id:"project_name",placeholder:"Name",required:!0}),Object(j.jsx)("div",{className:"form-buttons",children:Object(j.jsx)("button",{className:"add-task-btn",type:"submit",children:"Add"})})]})})},p=function(e){var t=e.handleSubmit,c=e.closeForm,a=e.task,n=e.projects,s=e.projectToShow;return Object(j.jsx)("div",{children:Object(j.jsxs)("form",{className:"form-wrapper",autoComplete:"off",onSubmit:t,children:[Object(j.jsx)("label",{htmlFor:"name",className:"input-query",children:"Task Name*: "}),Object(j.jsx)("input",{type:"text",name:"name",id:"name",className:"input-fields",defaultValue:a.name,required:!0}),Object(j.jsx)("label",{htmlFor:"description",className:"input-query",children:"Description: "}),Object(j.jsx)("input",{type:"text",name:"description",id:"description",className:"input-fields",defaultValue:a.description}),Object(j.jsx)("label",{htmlFor:"duedate",className:"input-query",children:"Due Date: "}),Object(j.jsx)("input",{type:"date",name:"duedate",id:"duedate",className:"input-fields",defaultValue:a.duedate}),Object(j.jsxs)("div",{className:"input-query",children:["Priority:",Object(j.jsx)("br",{}),Object(j.jsx)("input",{type:"radio",id:"low",name:"priority",value:"low",defaultChecked:"low"===a.priority}),Object(j.jsx)("label",{htmlFor:"low",children:"Low"}),Object(j.jsx)("br",{}),Object(j.jsx)("input",{type:"radio",id:"high",name:"priority",value:"high",defaultChecked:"high"===a.priority}),Object(j.jsx)("label",{htmlFor:"female",children:"High"}),Object(j.jsx)("br",{}),Object(j.jsx)("input",{type:"radio",id:"neutral",name:"priority",value:"neutral",defaultChecked:"low"!==a.priority&&"high"!==a.priority}),Object(j.jsx)("label",{htmlFor:"neutral",children:"Neutral"})]}),Object(j.jsx)("label",{htmlFor:"in_project",className:"input-query",children:"Project: "}),Object(j.jsx)("select",{name:"in_project",id:"in_project",className:"input-field-select",defaultValue:s,children:n.map((function(e){return Object(j.jsxs)("option",{value:e.name,children:[e.name," "]},e.key)}))}),Object(j.jsxs)("div",{className:"form-buttons",children:[Object(j.jsx)("button",{className:"add-task-btn",type:"submit",children:a.name?"Save":"Add"}),Object(j.jsx)("button",{className:"close-form-btn",type:"button",onClick:c,children:"Close"})]})]})})},m=function(e){var t=e.task,c=e.deleteTask,n=e.editTask,s=e.projects,i=e.projectToShow,r=Object(a.useState)(!1),o=Object(l.a)(r,2),u=o[0],m=o[1],b=Object(a.useState)(!1),h=Object(l.a)(b,2),O=h[0],x=h[1];return Object(j.jsxs)(j.Fragment,{children:[i===t.in_project&&Object(j.jsxs)("div",{className:"Completed"===t.completed?"tasks completed":"tasks",children:[Object(j.jsxs)("div",{className:"task-title",children:[Object(j.jsxs)("div",{className:"priority-div",children:[Object(j.jsx)("div",{className:t.priority}),Object(j.jsx)("h2",{children:t.name})]}),Object(j.jsxs)("div",{className:"task-icons",children:[Object(j.jsx)("input",{type:"checkbox",style:{marginRight:"15px",cursor:"pointer"},onClick:function(){t.completed="Completed"===t.completed?"Not completed":"Completed",n(t.id,t)},defaultChecked:"Completed"===t.completed}),Object(j.jsx)("span",{className:"material-icons-outlined",onClick:function(){return c(t.id)},children:"delete"}),Object(j.jsx)("span",{className:"material-icons-outlined",onClick:function(){x(!0)},children:"edit"}),!u&&Object(j.jsx)("span",{className:"material-icons-outlined",onClick:function(){return m(!0)},children:"expand_more"}),u&&Object(j.jsx)("span",{className:"material-icons-outlined",onClick:function(){return m(!1)},children:"expand_less"})]})]}),u&&Object(j.jsxs)("div",{className:"task-desc",children:[Object(j.jsxs)("p",{children:[Object(j.jsx)("b",{children:"Description:"})," ",t.description]}),Object(j.jsxs)("p",{children:[Object(j.jsx)("b",{children:"Due-date:"})," ",t.duedate]}),Object(j.jsxs)("p",{children:[Object(j.jsx)("b",{children:"Priority:"})," ",t.priority]}),Object(j.jsx)("p",{children:Object(j.jsx)("b",{children:t.completed})}),Object(j.jsx)("p",{children:Object(j.jsxs)("b",{children:["Project: ",t.in_project]})})]})]}),O&&Object(j.jsx)(p,{handleSubmit:function(e){e.preventDefault();var c={id:d()(),name:e.target.name.value,description:e.target.description.value,duedate:e.target.duedate.value,priority:e.target.priority.value,completed:t.completed,in_project:e.target.in_project.value};x(!1),n(t.id,c)},closeForm:function(){x(!1)},task:t,projects:s,projectToShow:i})]})},b=function(e){var t=e.addTask,c=e.projects,n=e.projectToShow,s=Object(a.useState)(!1),i=Object(l.a)(s,2),r=i[0],o=i[1];return Object(j.jsxs)("div",{className:"home",children:[Object(j.jsx)("button",{className:"new-task-btn",onClick:function(){return o(!0)},children:"Add New Task"}),r&&Object(j.jsx)(p,{handleSubmit:function(e){e.preventDefault();var c={id:d()(),name:e.target.name.value,description:e.target.description.value,duedate:e.target.duedate.value,priority:e.target.priority.value,completed:"Not completed",in_project:e.target.in_project.value};o(!1),t(c)},closeForm:function(){o(!1)},task:{id:"",name:"",description:"",duedate:"",priority:""},projects:c,projectToShow:n})]})},h=function(e){var t=e.addProject,c=e.projects,n=e.addedTasks,s=e.deleteTask,i=e.editTask,r=e.addTask,o=Object(a.useState)(!0),d=Object(l.a)(o,2),p=d[0],h=d[1],O=Object(a.useState)("Default"),x=Object(l.a)(O,2),f=x[0],v=x[1],k=function(e){var t=e.target.textContent;v(t)};return Object(a.useEffect)((function(){h(!0)}),[c]),Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("div",{className:"top-nav",children:[Object(j.jsxs)("div",{className:"burger toggle",onClick:function(){var e=document.querySelector(".burger");document.querySelector(".nav-links").classList.toggle("nav-active"),e.classList.toggle("toggle")},children:[Object(j.jsx)("div",{className:"line1"}),Object(j.jsx)("div",{className:"line2"}),Object(j.jsx)("div",{className:"line3"})]}),Object(j.jsx)("h1",{children:"TODO LIST"}),Object(j.jsxs)("ul",{className:"nav-links nav-active",children:[Object(j.jsx)("li",{children:Object(j.jsx)(u,{addProject:t})}),Object(j.jsxs)("div",{className:"projects-show",children:[Object(j.jsx)("li",{children:"Projects"}),!p&&Object(j.jsx)("span",{className:"material-icons-outlined",onClick:function(){return h(!0)},children:"expand_more"}),p&&Object(j.jsx)("span",{className:"material-icons-outlined",onClick:function(){return h(!1)},children:"expand_less"})]}),Object(j.jsx)("div",{className:"projects",children:p&&c.map((function(e){return Object(j.jsx)("li",{onClick:k,children:e.name},e.key)}))})]})]}),Object(j.jsxs)("h2",{className:"project_to_show",children:[f," "]}),n.map((function(e){return Object(j.jsx)(m,{task:e,deleteTask:s,editTask:i,projects:c,projectToShow:f},e.id)})),Object(j.jsx)(b,{addTask:r,projects:c,projectToShow:f})]})};var O=function(){var e=Object(a.useState)([]),t=Object(l.a)(e,2),c=t[0],n=t[1],s=Object(a.useState)([{name:"Default",key:"default"}]),i=Object(l.a)(s,2),o=i[0],d=i[1];return Object(j.jsx)("div",{className:"App",children:Object(j.jsx)(h,{addProject:function(e){return d([].concat(Object(r.a)(o),[e]))},projects:o,addedTasks:c,deleteTask:function(e){return n(c.filter((function(t){return t.id!==e})))},editTask:function(e,t){return n(c.map((function(c){return c.id===e?t:c})))},addTask:function(e){return n([].concat(Object(r.a)(c),[e]))}})})};i.a.render(Object(j.jsx)(n.a.StrictMode,{children:Object(j.jsx)(O,{})}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.d4f8330d.chunk.js.map