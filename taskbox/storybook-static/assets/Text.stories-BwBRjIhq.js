import{j as x}from"./jsx-runtime-BrmTJfKN.js";import{d as b}from"./styled-components.browser.esm-szzrvHum.js";import"./iframe-X2VVNUcM.js";import"./preload-helper-D9Z9MdNV.js";const h=b.p`
  font-family: 'Open Sans', sans-serif;
  cursor: ${e=>e.disabled?"not-allowed":"default"};
  transition: all 0.3s ease;
  margin: 0;

  /* Size variants */
  font-size: ${e=>{switch(e.$size){case"small":return"12px";case"large":return"18px";default:return"14px"}}};

  /* Text alignment */
  text-align: ${e=>e.$align||"left"};

  /* Font weight */
  font-weight: ${e=>e.$weight==="bold"?"700":"400"};

  /* Colors */
  background-color: ${e=>e.disabled?"#f5f5f5":e.$backgroundColor||"transparent"};
  color: ${e=>e.disabled?"#999999":e.$color||"#333333"};

  opacity: ${e=>e.disabled?.6:1};

  padding: 4px;
  border-radius: 4px;

  /* Responsive */
  @media (max-width: 768px) {
    font-size: ${e=>{switch(e.$size){case"small":return"11px";case"large":return"16px";default:return"13px"}}};
  }
`,i=({content:e,backgroundColor:c,color:d,disabled:m=!1,size:u="medium",align:p="left",weight:g="normal",className:f})=>x.jsx(h,{$backgroundColor:c,$color:d,disabled:m,$size:u,$align:p,$weight:g,className:f,children:e});i.__docgenInfo={description:"",methods:[],displayName:"Text",props:{content:{required:!0,tsType:{name:"string"},description:"The text content"},backgroundColor:{required:!1,tsType:{name:"string"},description:"Background color of the text container"},color:{required:!1,tsType:{name:"string"},description:"Text color"},disabled:{required:!1,tsType:{name:"boolean"},description:"Whether the text is disabled",defaultValue:{value:"false",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:"Size of the text",defaultValue:{value:"'medium'",computed:!1}},align:{required:!1,tsType:{name:"union",raw:"'left' | 'center' | 'right'",elements:[{name:"literal",value:"'left'"},{name:"literal",value:"'center'"},{name:"literal",value:"'right'"}]},description:"Text alignment",defaultValue:{value:"'left'",computed:!1}},weight:{required:!1,tsType:{name:"union",raw:"'normal' | 'bold'",elements:[{name:"literal",value:"'normal'"},{name:"literal",value:"'bold'"}]},description:"Font weight",defaultValue:{value:"'normal'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Optional className for additional styling"}}};const z={title:"Components/Text",component:i,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{backgroundColor:{control:"color",description:"Background color of the text"},color:{control:"color",description:"Text color"},content:{control:"text",description:"Text content"},disabled:{control:"boolean",description:"Disabled state of the text"},size:{control:{type:"select"},options:["small","medium","large"],description:"Size of the text"},align:{control:{type:"select"},options:["left","center","right"],description:"Text alignment"},weight:{control:{type:"select"},options:["normal","bold"],description:"Font weight"}}},t={args:{content:"This is some text content",disabled:!1,size:"medium",align:"left",weight:"normal"}},r={args:{content:"This text is disabled",disabled:!0,size:"medium"}},a={args:{content:"Small text",size:"small"}},o={args:{content:"Large text",size:"large"}},n={args:{content:"Bold text",weight:"bold"}},s={args:{content:"Centered text",align:"center"}},l={args:{content:"Text with colored background",backgroundColor:"#ffeb3b",color:"#000000"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    content: 'This is some text content',
    disabled: false,
    size: 'medium',
    align: 'left',
    weight: 'normal'
  }
}`,...t.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    content: 'This text is disabled',
    disabled: true,
    size: 'medium'
  }
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    content: 'Small text',
    size: 'small'
  }
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    content: 'Large text',
    size: 'large'
  }
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    content: 'Bold text',
    weight: 'bold'
  }
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    content: 'Centered text',
    align: 'center'
  }
}`,...s.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    content: 'Text with colored background',
    backgroundColor: '#ffeb3b',
    color: '#000000'
  }
}`,...l.parameters?.docs?.source}}};const S=["Default","Disabled","Small","Large","Bold","Centered","ColoredBackground"];export{n as Bold,s as Centered,l as ColoredBackground,t as Default,r as Disabled,o as Large,a as Small,S as __namedExportsOrder,z as default};
