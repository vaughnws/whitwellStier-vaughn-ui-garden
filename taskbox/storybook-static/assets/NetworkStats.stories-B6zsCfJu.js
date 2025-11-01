import{j as r}from"./jsx-runtime-BrmTJfKN.js";import{d as a}from"./styled-components.browser.esm-szzrvHum.js";import{W as u}from"./icons-DrdSshJn.js";import"./iframe-X2VVNUcM.js";import"./preload-helper-D9Z9MdNV.js";const x=a.div`
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
`,g=a.h2`
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
`,b=a.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,h=a.div`
  background-color: #1a1a1a;
  border-radius: 8px;
  padding: 12px;
  border: 1px solid #303030;
`,w=a.div`
  font-size: 14px;
  font-weight: 600;
  color: #ff6b35;
  margin-bottom: 4px;

  @media (max-width: 768px) {
    font-size: 13px;
  }
`,k=a.div`
  font-size: 12px;
  color: #f0f0f0;
  opacity: 0.6;
  font-family: 'Courier New', monospace;
`,c=({interfaces:e,backgroundColor:p,disabled:f=!1,className:l})=>r.jsxs(x,{$backgroundColor:p,disabled:f,className:l,children:[r.jsxs(g,{children:[r.jsx(u,{}),"Network"]}),r.jsx(b,{children:e.map((i,m)=>r.jsxs(h,{children:[r.jsx(w,{children:i.interface}),r.jsx(k,{children:i.address})]},m))})]});c.__docgenInfo={description:"",methods:[],displayName:"NetworkStats",props:{interfaces:{required:!0,tsType:{name:"Array",elements:[{name:"NetworkInterface"}],raw:"NetworkInterface[]"},description:"Array of network interfaces"},backgroundColor:{required:!1,tsType:{name:"string"},description:"Background color"},disabled:{required:!1,tsType:{name:"boolean"},description:"Whether the component is disabled",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Optional className"}}};const v={title:"Components/NetworkStats",component:c,parameters:{layout:"padded",backgrounds:{default:"dark",values:[{name:"dark",value:"#1a1a1a"}]}},tags:["autodocs"]},d=[{interface:"eth0",address:"192.168.1.100"},{interface:"wlan0",address:"192.168.1.101"},{interface:"docker0",address:"172.17.0.1"}],s={args:{interfaces:d}},t={args:{interfaces:[{interface:"eth0",address:"192.168.1.100"}]}},n={args:{interfaces:[...d,{interface:"lo",address:"127.0.0.1"},{interface:"br0",address:"10.0.0.1"}]}},o={args:{interfaces:d,disabled:!0}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    interfaces: sampleInterfaces
  }
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    interfaces: [{
      interface: 'eth0',
      address: '192.168.1.100'
    }]
  }
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    interfaces: [...sampleInterfaces, {
      interface: 'lo',
      address: '127.0.0.1'
    }, {
      interface: 'br0',
      address: '10.0.0.1'
    }]
  }
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    interfaces: sampleInterfaces,
    disabled: true
  }
}`,...o.parameters?.docs?.source}}};const C=["Default","SingleInterface","ManyInterfaces","Disabled"];export{s as Default,o as Disabled,n as ManyInterfaces,t as SingleInterface,C as __namedExportsOrder,v as default};
