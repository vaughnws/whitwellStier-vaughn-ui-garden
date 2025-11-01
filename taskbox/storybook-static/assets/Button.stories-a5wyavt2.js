import{j as p}from"./jsx-runtime-BrmTJfKN.js";import{d as f}from"./styled-components.browser.esm-szzrvHum.js";import"./iframe-X2VVNUcM.js";import"./preload-helper-D9Z9MdNV.js";const b=f.button`
  font-family: 'Open Sans', sans-serif;
  font-weight: 700;
  border: none;
  border-radius: 8px;
  cursor: ${e=>e.disabled?"not-allowed":"pointer"};
  display: inline-block;
  line-height: 1;
  transition: all 0.3s ease;

  /* Size variants */
  padding: ${e=>{switch(e.$size){case"small":return"8px 16px";case"large":return"16px 32px";default:return"12px 24px"}}};

  font-size: ${e=>{switch(e.$size){case"small":return"12px";case"large":return"18px";default:return"14px"}}};

  /* Colors */
  background-color: ${e=>e.disabled?"#cccccc":e.$backgroundColor||"#e25a16ff"};
  color: ${e=>e.disabled?"#666666":e.$color||"#ffffff"};

  opacity: ${e=>e.disabled?.6:1};

  &:hover {
    background-color: ${e=>e.disabled?"#cccccc":e.$backgroundColor?`${e.$backgroundColor}dd`:"#c33100ff"};
  }

  &:active {
    transform: ${e=>e.disabled?"none":"scale(0.98)"};
  }

  /* Responsive */
  @media (max-width: 768px) {
    padding: ${e=>{switch(e.$size){case"small":return"6px 12px";case"large":return"14px 28px";default:return"10px 20px"}}};

    font-size: ${e=>{switch(e.$size){case"small":return"11px";case"large":return"16px";default:return"13px"}}};
  }
`,l=({label:e,backgroundColor:i,color:c,disabled:n=!1,onClick:d,size:u="medium",className:m})=>p.jsx(b,{type:"button",$backgroundColor:i,$color:c,disabled:n,onClick:n?void 0:d,$size:u,className:m,children:e});l.__docgenInfo={description:"",methods:[],displayName:"Button",props:{label:{required:!0,tsType:{name:"string"},description:"The text content of the button"},backgroundColor:{required:!1,tsType:{name:"string"},description:"Background color of the button"},color:{required:!1,tsType:{name:"string"},description:"Text color of the button"},disabled:{required:!1,tsType:{name:"boolean"},description:"Whether the button is disabled",defaultValue:{value:"false",computed:!1}},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Optional click handler"},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:"Size of the button",defaultValue:{value:"'medium'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Optional className for additional styling"}}};const $={title:"Components/Button",component:l,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{backgroundColor:{control:"color",description:"Background color of the button"},color:{control:"color",description:"Text color of the button"},label:{control:"text",description:"Button text content"},disabled:{control:"boolean",description:"Disabled state of the button"},size:{control:{type:"select"},options:["small","medium","large"],description:"Size of the button"},onClick:{action:"clicked"}}},o={args:{label:"Button",backgroundColor:"#ec5a00ff",color:"#ffffff",disabled:!1,size:"medium"}},r={args:{label:"Disabled Button",disabled:!0,size:"medium"}},a={args:{label:"Small Button",size:"small"}},t={args:{label:"Large Button",size:"large"}},s={args:{label:"Custom Button",backgroundColor:"#e91e63",color:"#ffffff",size:"medium"}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Button',
    backgroundColor: '#ec5a00ff',
    color: '#ffffff',
    disabled: false,
    size: 'medium'
  }
}`,...o.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Disabled Button',
    disabled: true,
    size: 'medium'
  }
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Small Button',
    size: 'small'
  }
}`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Large Button',
    size: 'large'
  }
}`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Custom Button',
    backgroundColor: '#e91e63',
    color: '#ffffff',
    size: 'medium'
  }
}`,...s.parameters?.docs?.source}}};const C=["Default","Disabled","Small","Large","CustomColors"];export{s as CustomColors,o as Default,r as Disabled,t as Large,a as Small,C as __namedExportsOrder,$ as default};
