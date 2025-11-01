import{j as a}from"./jsx-runtime-BrmTJfKN.js";import{d as s}from"./styled-components.browser.esm-szzrvHum.js";import{S as b}from"./icons-DrdSshJn.js";import"./iframe-X2VVNUcM.js";import"./preload-helper-D9Z9MdNV.js";const v=s.div`
  font-family: 'Open Sans', sans-serif;
  background-color: ${e=>e.$backgroundColor||"#272727"};
  border-radius: 12px;
  padding: 24px;
  border: 1px solid #303030;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
  opacity: ${e=>e.disabled?.6:1};
  cursor: ${e=>e.disabled?"not-allowed":"default"};

  @media (max-width: 768px) {
    padding: 20px;
  }
`,h=s.h2`
  font-size: 20px;
  font-weight: 700;
  color: #f0f0f0;
  display: flex;
  align-items: center;
  gap: 8px;
  margin: 0 0 16px 0;

  svg {
    width: 24px;
    height: 24px;
  }

  @media (max-width: 768px) {
    font-size: 18px;
  }
`,S=s.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 16px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 12px;
  }
`,k=s.a`
  background-color: #1a1a1a;
  border-radius: 8px;
  padding: 16px;
  border: 1px solid #303030;
  transition: all 0.3s ease;
  text-decoration: none;
  display: block;
  cursor: ${e=>e.disabled?"not-allowed":"pointer"};

  &:hover {
    background-color: ${e=>e.disabled?"#1a1a1a":"#303030"};
    transform: ${e=>e.disabled?"none":"scale(1.05)"};
    box-shadow: ${e=>e.disabled?"none":"0 8px 12px rgba(0, 0, 0, 0.4)"};
    border-color: ${e=>e.disabled?"#303030":"#ff6b35"};
  }

  @media (max-width: 768px) {
    padding: 14px;
  }
`,w=s.h3`
  font-weight: 600;
  color: #f0f0f0;
  font-size: 16px;
  margin: 0 0 4px 0;

  @media (max-width: 768px) {
    font-size: 15px;
  }
`,C=s.p`
  font-size: 14px;
  color: #f0f0f0;
  opacity: 0.6;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 13px;
  }
`,m=({services:e,backgroundColor:u,disabled:l=!1,className:x,onServiceClick:p})=>{const f=(r,d)=>{if(l){r.preventDefault();return}p&&(r.preventDefault(),p(d))};return a.jsxs(v,{$backgroundColor:u,disabled:l,className:x,children:[a.jsxs(h,{children:[a.jsx(b,{}),"Services"]}),a.jsx(S,{children:e.map((r,d)=>a.jsxs(k,{href:r.url,target:"_blank",rel:"noopener noreferrer",onClick:g=>f(g,r.url),disabled:l,children:[a.jsx(w,{children:r.name}),a.jsx(C,{children:r.subtitle})]},d))})]})};m.__docgenInfo={description:"",methods:[],displayName:"ServiceCard",props:{services:{required:!0,tsType:{name:"Array",elements:[{name:"Service"}],raw:"Service[]"},description:"Array of services"},backgroundColor:{required:!1,tsType:{name:"string"},description:"Background color"},disabled:{required:!1,tsType:{name:"boolean"},description:"Whether the component is disabled",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Optional className"},onServiceClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(url: string) => void",signature:{arguments:[{type:{name:"string"},name:"url"}],return:{name:"void"}}},description:"Callback when service is clicked"}}};const A={title:"Components/ServiceCard",component:m,parameters:{layout:"padded",backgrounds:{default:"dark",values:[{name:"dark",value:"#1a1a1a"}]}},tags:["autodocs"]},c=[{name:"Gitea",subtitle:"Git Repository & CI/CD",url:"https://git.example.com"},{name:"Code Server",subtitle:"VS Code in Browser",url:"https://code.example.com"},{name:"AI Assistant",subtitle:"Qwen2.5 Coding AI",url:"https://ai.example.com"},{name:"N8N",subtitle:"Workflow Automation",url:"https://n8n.example.com"},{name:"File Browser",subtitle:"File Management",url:"https://files.example.com"},{name:"Documentation",subtitle:"BookStack Wiki",url:"https://docs.example.com"}],i={args:{services:c}},o={args:{services:c.slice(0,3)}},t={args:{services:c,disabled:!0}},n={args:{services:c.slice(0,4),onServiceClick:e=>alert(`Clicked: ${e}`)}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    services: sampleServices
  }
}`,...i.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    services: sampleServices.slice(0, 3)
  }
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    services: sampleServices,
    disabled: true
  }
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    services: sampleServices.slice(0, 4),
    onServiceClick: (url: string) => alert(\`Clicked: \${url}\`)
  }
}`,...n.parameters?.docs?.source}}};const N=["Default","FewServices","Disabled","WithClickHandler"];export{i as Default,t as Disabled,o as FewServices,n as WithClickHandler,N as __namedExportsOrder,A as default};
