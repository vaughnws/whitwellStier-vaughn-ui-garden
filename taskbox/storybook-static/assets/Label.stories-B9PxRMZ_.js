import{j as p}from"./jsx-runtime-BrmTJfKN.js";import{d as f}from"./styled-components.browser.esm-szzrvHum.js";import"./iframe-X2VVNUcM.js";import"./preload-helper-D9Z9MdNV.js";const b=f.label`
  font-family: 'Open Sans', sans-serif;
  font-weight: 600;
  display: inline-block;
  cursor: ${e=>e.disabled?"not-allowed":"default"};
  transition: all 0.3s ease;

  /* Size variants */
  font-size: ${e=>{switch(e.$size){case"small":return"12px";case"large":return"18px";default:return"14px"}}};

  padding: ${e=>{switch(e.$size){case"small":return"4px 8px";case"large":return"8px 16px";default:return"6px 12px"}}};

  /* Colors */
  background-color: ${e=>e.disabled?"#e0e0e0":e.$backgroundColor||"transparent"};
  color: ${e=>e.disabled?"#999999":e.$color||"#333333"};

  opacity: ${e=>e.disabled?.6:1};

  border-radius: 4px;

  /* Responsive */
  @media (max-width: 768px) {
    font-size: ${e=>{switch(e.$size){case"small":return"11px";case"large":return"16px";default:return"13px"}}};
  }
`,l=({text:e,htmlFor:n,backgroundColor:i,color:d,disabled:c=!1,size:m="medium",className:u})=>p.jsx(b,{htmlFor:n,$backgroundColor:i,$color:d,disabled:c,$size:m,className:u,children:e});l.__docgenInfo={description:"",methods:[],displayName:"Label",props:{text:{required:!0,tsType:{name:"string"},description:"The text content of the label"},htmlFor:{required:!1,tsType:{name:"string"},description:"HTML for attribute (links to input id)"},backgroundColor:{required:!1,tsType:{name:"string"},description:"Background color of the label"},color:{required:!1,tsType:{name:"string"},description:"Text color of the label"},disabled:{required:!1,tsType:{name:"boolean"},description:"Whether the label is disabled",defaultValue:{value:"false",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:"Size of the label",defaultValue:{value:"'medium'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Optional className for additional styling"}}};const L={title:"Components/Label",component:l,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{backgroundColor:{control:"color",description:"Background color of the label"},color:{control:"color",description:"Text color of the label"},text:{control:"text",description:"Label text content"},disabled:{control:"boolean",description:"Disabled state of the label"},size:{control:{type:"select"},options:["small","medium","large"],description:"Size of the label"}}},a={args:{text:"Label",disabled:!1,size:"medium"}},r={args:{text:"Disabled Label",disabled:!0,size:"medium"}},s={args:{text:"Small Label",size:"small"}},t={args:{text:"Large Label",size:"large"}},o={args:{text:"Colored Label",backgroundColor:"#4caf50",color:"#ffffff",size:"medium"}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    text: 'Label',
    disabled: false,
    size: 'medium'
  }
}`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    text: 'Disabled Label',
    disabled: true,
    size: 'medium'
  }
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    text: 'Small Label',
    size: 'small'
  }
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    text: 'Large Label',
    size: 'large'
  }
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    text: 'Colored Label',
    backgroundColor: '#4caf50',
    color: '#ffffff',
    size: 'medium'
  }
}`,...o.parameters?.docs?.source}}};const y=["Default","Disabled","Small","Large","WithBackground"];export{a as Default,r as Disabled,t as Large,s as Small,o as WithBackground,y as __namedExportsOrder,L as default};
