import{_ as l,o as i,c as o,a as e,t as a,F as u,j as p,u as d,d as g}from"./index-DDx45gcQ.js";const m="/Portfolio/assets/GitHubLogo-DkTr3Tul.png",h={class:"project"},_={class:"image"},b=["src"],P={class:"description"},f={class:"links"},j=["href"],k={__name:"ProjectExample",props:{name:{type:String,required:!0},image:{type:String,required:!0},description:{type:String,required:!0},github:{type:String,required:!0}},setup(n){const s=n;return(r,t)=>(i(),o("div",h,[e("h2",null,a(s.name),1),e("div",_,[e("img",{src:s.image,alt:"Project Image"},null,8,b)]),e("p",P,a(s.description),1),e("div",f,[e("a",{href:s.github,target:"_blank",title:"GitHub project link"},t[0]||(t[0]=[e("img",{class:"icon",src:m,alt:"GitHub project link"},null,-1)]),8,j)]),t[1]||(t[1]=e("div",{style:{border:"1px solid black","margin-top":"1rem","margin-bottom":"1rem"}},null,-1))]))}},v=l(k,[["__scopeId","data-v-20927c20"]]),c=[{id:1,name:"Personal Portfolio",image:"src/assets/data/projects/PersonalPortfolio.png",description:"This website you're using right now! It is still a work in progress, but I'm happy with how it's turning out.",github:"https://github.com/C-Dog346/Portfolio"},{id:2,name:"PRCount",image:"src/assets/data/projects/PRCountPrint.png",description:"Counts the number of open PRs in a chosen repository via the GitHub API.",github:"https://github.com/C-Dog346/PRCount"},{id:3,name:"Islands Challenge",image:"src/assets/data/projects/IslandsProject.png",description:"This is a project that I made for the islands challenge issued to me during a job interview.",github:"https://github.com/C-Dog346/Islands-Challenge"}],y={class:"projects-view"},I={__name:"ProjectsView",setup(n){return console.log(c),(s,r)=>(i(),o("div",y,[r[0]||(r[0]=e("h1",null,"Projects",-1)),e("ul",null,[(i(!0),o(u,null,p(d(c),t=>(i(),o("li",{key:t.id},[g(v,{name:t.name,image:t.image,description:t.description,github:t.github},null,8,["name","image","description","github"])]))),128))])]))}},C=l(I,[["__scopeId","data-v-690c403e"]]);export{C as default};
