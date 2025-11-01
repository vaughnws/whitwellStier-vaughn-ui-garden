import{j as p}from"./jsx-runtime-BrmTJfKN.js";import{d as g}from"./styled-components.browser.esm-szzrvHum.js";import"./iframe-X2VVNUcM.js";import"./preload-helper-D9Z9MdNV.js";const y=g.div`
  display: inline-block;
  background-color: ${e=>e.$backgroundColor||"transparent"};
  cursor: ${e=>e.disabled?"not-allowed":e.$clickable?"pointer":"default"};
  opacity: ${e=>e.disabled?.4:1};
  transition: all 0.3s ease;
  overflow: hidden;

  &:hover {
    opacity: ${e=>e.disabled?.4:e.$clickable?.8:1};
  }
`,$=g.img`
  display: block;
  width: ${e=>e.$width||"auto"};
  height: ${e=>e.$height||"auto"};
  max-width: 100%;
  border-radius: ${e=>e.$borderRadius||"0"};
  object-fit: ${e=>e.$objectFit||"cover"};
  filter: ${e=>e.disabled?"grayscale(100%)":"none"};
  transition: all 0.3s ease;

  /* Responsive */
  @media (max-width: 768px) {
    max-width: 100%;
    height: auto;
  }
`,m=({src:e,alt:u,width:h,height:b,backgroundColor:f,disabled:d=!1,borderRadius:x="0",objectFit:w="cover",className:k,onClick:l})=>{const v=()=>{!d&&l&&l()};return p.jsx(y,{disabled:d,$backgroundColor:f,$clickable:!!l,onClick:v,className:k,children:p.jsx($,{src:e,alt:u,$width:h,$height:b,$borderRadius:x,$objectFit:w,disabled:d})})};m.__docgenInfo={description:"",methods:[],displayName:"Img",props:{src:{required:!0,tsType:{name:"string"},description:"Image source URL"},alt:{required:!0,tsType:{name:"string"},description:"Alt text for the image"},width:{required:!1,tsType:{name:"string"},description:"Width of the image"},height:{required:!1,tsType:{name:"string"},description:"Height of the image"},backgroundColor:{required:!1,tsType:{name:"string"},description:"Background color (for container)"},disabled:{required:!1,tsType:{name:"boolean"},description:"Whether the image is disabled",defaultValue:{value:"false",computed:!1}},borderRadius:{required:!1,tsType:{name:"string"},description:"Border radius",defaultValue:{value:"'0'",computed:!1}},objectFit:{required:!1,tsType:{name:"union",raw:"'contain' | 'cover' | 'fill' | 'none' | 'scale-down'",elements:[{name:"literal",value:"'contain'"},{name:"literal",value:"'cover'"},{name:"literal",value:"'fill'"},{name:"literal",value:"'none'"},{name:"literal",value:"'scale-down'"}]},description:"Object fit property",defaultValue:{value:"'cover'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Optional className for additional styling"},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Optional click handler"}}};const T={title:"Components/Img",component:m,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{backgroundColor:{control:"color",description:"Background color of the image container"},disabled:{control:"boolean",description:"Disabled state of the image"},width:{control:"text",description:"Width of the image"},height:{control:"text",description:"Height of the image"},borderRadius:{control:"text",description:"Border radius of the image"},objectFit:{control:{type:"select"},options:["contain","cover","fill","none","scale-down"],description:"Object fit property"},onClick:{action:"clicked"}}},a="https://vaughnws.ca/aboutpic/vwithm.png",r={args:{src:a,alt:"Placeholder image",width:"300px",height:"200px",disabled:!1}},t={args:{src:a,alt:"Disabled image",width:"300px",height:"200px",disabled:!0}},o={args:{src:a,alt:"Rounded image",width:"200px",height:"200px",borderRadius:"16px"}},i={args:{src:a,alt:"Circle image",width:"200px",height:"200px",borderRadius:"50%",objectFit:"cover"}},s={args:{src:a,alt:"Image with background",width:"300px",height:"200px",backgroundColor:"#f0f0f0",borderRadius:"8px"}},n={args:{src:a,alt:"Clickable image",width:"300px",height:"200px",onClick:()=>alert("Image clicked!")}},c={args:{src:a,alt:"Responsive image",width:"100%",height:"auto"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    src: placeholderImage,
    alt: 'Placeholder image',
    width: '300px',
    height: '200px',
    disabled: false
  }
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    src: placeholderImage,
    alt: 'Disabled image',
    width: '300px',
    height: '200px',
    disabled: true
  }
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    src: placeholderImage,
    alt: 'Rounded image',
    width: '200px',
    height: '200px',
    borderRadius: '16px'
  }
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    src: placeholderImage,
    alt: 'Circle image',
    width: '200px',
    height: '200px',
    borderRadius: '50%',
    objectFit: 'cover'
  }
}`,...i.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    src: placeholderImage,
    alt: 'Image with background',
    width: '300px',
    height: '200px',
    backgroundColor: '#f0f0f0',
    borderRadius: '8px'
  }
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    src: placeholderImage,
    alt: 'Clickable image',
    width: '300px',
    height: '200px',
    onClick: () => alert('Image clicked!')
  }
}`,...n.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    src: placeholderImage,
    alt: 'Responsive image',
    width: '100%',
    height: 'auto'
  }
}`,...c.parameters?.docs?.source}}};const q=["Default","Disabled","Rounded","Circle","WithBackground","Clickable","Responsive"];export{i as Circle,n as Clickable,r as Default,t as Disabled,c as Responsive,o as Rounded,s as WithBackground,q as __namedExportsOrder,T as default};
