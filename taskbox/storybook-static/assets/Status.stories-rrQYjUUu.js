import{j as s}from"./jsx-runtime-BrmTJfKN.js";import{S as u}from"./Status-jglr8y49.js";import"./iframe-X2VVNUcM.js";import"./preload-helper-D9Z9MdNV.js";import"./styled-components.browser.esm-szzrvHum.js";const h={title:"Components/Status",component:u,parameters:{layout:"centered",backgrounds:{default:"dark",values:[{name:"dark",value:"#1a1a1a"},{name:"light",value:"#ffffff"}]}},tags:["autodocs"],argTypes:{status:{control:{type:"select"},options:["healthy","warning","critical"],description:"Health status"},statusText:{control:"text",description:"Custom status text"},description:{control:"text",description:"Secondary description text"},showPulse:{control:"boolean",description:"Show pulse animation"},backgroundColor:{control:"color",description:"Background color"},disabled:{control:"boolean",description:"Disabled state"}}},e={args:{status:"healthy",description:"5/5 services running",showPulse:!0}},r={args:{status:"warning",description:"4/5 services running",showPulse:!0}},t={args:{status:"critical",description:"2/5 services running",showPulse:!0}},a={args:{status:"healthy",description:"5/5 services running",disabled:!0}},n={args:{status:"healthy",statusText:"All Systems Go",description:"Everything is working perfectly",showPulse:!0}},o={args:{status:"warning",description:"High CPU usage detected",showPulse:!1}},i={args:{status:"healthy",description:"5/5 services running",backgroundColor:"#2a2a2a",showPulse:!0}},c={render:()=>s.jsxs("div",{style:{display:"flex",gap:"20px",flexWrap:"wrap"},children:[s.jsx(u,{status:"healthy",description:"5/5 services running",showPulse:!0}),s.jsx(u,{status:"warning",description:"4/5 services running",showPulse:!0}),s.jsx(u,{status:"critical",description:"2/5 services running",showPulse:!0})]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    status: 'healthy',
    description: '5/5 services running',
    showPulse: true
  }
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    status: 'warning',
    description: '4/5 services running',
    showPulse: true
  }
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    status: 'critical',
    description: '2/5 services running',
    showPulse: true
  }
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    status: 'healthy',
    description: '5/5 services running',
    disabled: true
  }
}`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    status: 'healthy',
    statusText: 'All Systems Go',
    description: 'Everything is working perfectly',
    showPulse: true
  }
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    status: 'warning',
    description: 'High CPU usage detected',
    showPulse: false
  }
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    status: 'healthy',
    description: '5/5 services running',
    backgroundColor: '#2a2a2a',
    showPulse: true
  }
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '20px',
    flexWrap: 'wrap'
  }}>
      <Status status="healthy" description="5/5 services running" showPulse />
      <Status status="warning" description="4/5 services running" showPulse />
      <Status status="critical" description="2/5 services running" showPulse />
    </div>
}`,...c.parameters?.docs?.source}}};const w=["Healthy","Warning","Critical","Disabled","CustomText","NoPulse","CustomBackground","AllStatuses"];export{c as AllStatuses,t as Critical,i as CustomBackground,n as CustomText,a as Disabled,e as Healthy,o as NoPulse,r as Warning,w as __namedExportsOrder,h as default};
