import{j as s}from"./jsx-runtime-BrmTJfKN.js";import{d as o}from"./styled-components.browser.esm-szzrvHum.js";import{T as f}from"./icons-DrdSshJn.js";import"./iframe-X2VVNUcM.js";import"./preload-helper-D9Z9MdNV.js";const b=o.div`
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
`,h=o.h2`
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
`,w=o.div`
  background-color: #000000;
  border-radius: 8px;
  padding: 16px;
  font-family: 'Courier New', monospace;
  font-size: 12px;
  max-height: ${e=>e.$maxHeight||"192px"};
  overflow-y: auto;
  color: #f0f0f0;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: #000000;
  }

  &::-webkit-scrollbar-thumb {
    background: #303030;
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #404040;
  }

  @media (max-width: 768px) {
    font-size: 11px;
    padding: 14px;
  }
`,y=o.div`
  margin-bottom: 4px;
  line-height: 1.5;

  &:last-child {
    margin-bottom: 0;
  }
`,L=o.span`
  color: #ff6b35;
  font-weight: 600;
`,k=o.span`
  color: #f0f0f0;
  opacity: 0.8;
  margin-left: 8px;
`,p=({logs:e,backgroundColor:l,maxHeight:g,disabled:m=!1,className:u})=>s.jsxs(b,{$backgroundColor:l,disabled:m,className:u,children:[s.jsxs(h,{children:[s.jsx(f,{}),"Recent Activity"]}),s.jsx(w,{$maxHeight:g,children:e.map((d,x)=>s.jsxs(y,{children:[s.jsxs(L,{children:["[",d.container,"]"]}),s.jsx(k,{children:d.message})]},x))})]});p.__docgenInfo={description:"",methods:[],displayName:"LogsViewer",props:{logs:{required:!0,tsType:{name:"Array",elements:[{name:"LogEntry"}],raw:"LogEntry[]"},description:"Array of log entries"},backgroundColor:{required:!1,tsType:{name:"string"},description:"Background color"},maxHeight:{required:!1,tsType:{name:"string"},description:"Max height of logs container"},disabled:{required:!1,tsType:{name:"boolean"},description:"Whether the component is disabled",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Optional className"}}};const H={title:"Components/LogsViewer",component:p,parameters:{layout:"padded",backgrounds:{default:"dark",values:[{name:"dark",value:"#1a1a1a"}]}},tags:["autodocs"]},a=[{container:"nginx",message:"Server started on port 80"},{container:"postgres",message:"Database connection established"},{container:"redis",message:"Ready to accept connections"},{container:"api",message:"API server listening on port 3000"},{container:"worker",message:"Background job processing started"}],r={args:{logs:a}},t={args:{logs:a.slice(0,2)}},n={args:{logs:[...a,...a,...a]}},i={args:{logs:a,maxHeight:"300px"}},c={args:{logs:a,disabled:!0}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    logs: sampleLogs
  }
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    logs: sampleLogs.slice(0, 2)
  }
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    logs: [...sampleLogs, ...sampleLogs, ...sampleLogs]
  }
}`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    logs: sampleLogs,
    maxHeight: '300px'
  }
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    logs: sampleLogs,
    disabled: true
  }
}`,...c.parameters?.docs?.source}}};const S=["Default","FewLogs","ManyLogs","CustomHeight","Disabled"];export{i as CustomHeight,r as Default,c as Disabled,t as FewLogs,n as ManyLogs,S as __namedExportsOrder,H as default};
