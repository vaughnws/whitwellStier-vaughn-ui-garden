import{j as a}from"./jsx-runtime-BrmTJfKN.js";import{d as o}from"./styled-components.browser.esm-szzrvHum.js";import"./iframe-X2VVNUcM.js";import"./preload-helper-D9Z9MdNV.js";const C=o.div`
  position: relative;
  width: 100%;
  height: ${e=>e.$height||"400px"};
  overflow: hidden;
  cursor: ${e=>e.disabled?"not-allowed":e.$clickable?"pointer":"default"};
  opacity: ${e=>e.disabled?.5:1};
  transition: all 0.3s ease;

  &:hover {
    opacity: ${e=>e.disabled?.5:e.$clickable?.9:1};
  }

  @media (max-width: 768px) {
    height: ${e=>e.$height?`calc(${e.$height} * 0.7)`:"280px"};
  }
`,$=o.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: ${e=>e.disabled?"grayscale(100%)":"none"};
  transition: all 0.3s ease;
`,H=o.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${e=>e.$backgroundColor||"rgba(0, 0, 0, 0.4)"};
  opacity: ${e=>e.$overlayOpacity??1};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
`,O=o.h1`
  font-family: 'Open Sans', sans-serif;
  font-size: 48px;
  font-weight: 700;
  color: ${e=>e.disabled?"#cccccc":e.$color||"#ffffff"};
  margin: 0 0 16px 0;
  text-align: center;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);

  @media (max-width: 768px) {
    font-size: 32px;
  }
`,w=o.p`
  font-family: 'Open Sans', sans-serif;
  font-size: 20px;
  font-weight: 400;
  color: ${e=>e.disabled?"#cccccc":e.$color||"#ffffff"};
  margin: 0;
  text-align: center;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);

  @media (max-width: 768px) {
    font-size: 16px;
  }
`,f=({src:e,alt:x,title:h,subtitle:g,height:b="400px",backgroundColor:y,color:u,disabled:r=!1,overlayOpacity:v,className:k,onClick:m})=>{const T=()=>{!r&&m&&m()};return a.jsxs(C,{$height:b,disabled:r,$clickable:!!m,onClick:T,className:k,children:[a.jsx($,{src:e,alt:x,disabled:r}),(h||g)&&a.jsxs(H,{$backgroundColor:y,$overlayOpacity:v,children:[h&&a.jsx(O,{$color:u,disabled:r,children:h}),g&&a.jsx(w,{$color:u,disabled:r,children:g})]})]})};f.__docgenInfo={description:"",methods:[],displayName:"HeroImage",props:{src:{required:!0,tsType:{name:"string"},description:"Image source URL"},alt:{required:!0,tsType:{name:"string"},description:"Alt text for the image"},title:{required:!1,tsType:{name:"string"},description:"Hero title text"},subtitle:{required:!1,tsType:{name:"string"},description:"Hero subtitle text"},height:{required:!1,tsType:{name:"string"},description:"Height of the hero image",defaultValue:{value:"'400px'",computed:!1}},backgroundColor:{required:!1,tsType:{name:"string"},description:"Background color overlay"},color:{required:!1,tsType:{name:"string"},description:"Text color for title and subtitle"},disabled:{required:!1,tsType:{name:"boolean"},description:"Whether the hero is disabled",defaultValue:{value:"false",computed:!1}},overlayOpacity:{required:!1,tsType:{name:"number"},description:"Overlay opacity (0-1)"},className:{required:!1,tsType:{name:"string"},description:"Optional className for additional styling"},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Optional click handler"}}};const j={title:"Components/HeroImage",component:f,parameters:{layout:"fullscreen"},tags:["autodocs"],argTypes:{backgroundColor:{control:"color",description:"Background color overlay"},color:{control:"color",description:"Text color for title and subtitle"},disabled:{control:"boolean",description:"Disabled state"},height:{control:"text",description:"Height of the hero image"},overlayOpacity:{control:{type:"range",min:0,max:1,step:.1},description:"Overlay opacity"},onClick:{action:"clicked"}}},t="https://vaughnws.ca/aboutpic/vaughn.png",i={args:{src:t,alt:"Hero image",title:"Welcome to My Site",subtitle:"Discover my handsome face",height:"400px",disabled:!1}},s={args:{src:t,alt:"Disabled hero",title:"Disabled Hero",subtitle:"This hero is disabled",height:"400px",disabled:!0}},l={args:{src:t,alt:"Hero without text",height:"400px"}},c={args:{src:t,alt:"Custom colored hero",title:"Custom Styled Hero",subtitle:"With custom colors",backgroundColor:"rgba(25, 118, 210, 0.7)",color:"#ffffff",height:"400px"}},n={args:{src:t,alt:"Light overlay hero",title:"Light Overlay",subtitle:"With reduced opacity",overlayOpacity:.3,height:"400px"}},d={args:{src:t,alt:"Tall hero",title:"Tall Hero Section",subtitle:"Extra height because why not",height:"600px"}},p={args:{src:t,alt:"Clickable hero",title:"Click Me!",subtitle:"This hero is clickable",height:"400px",onClick:()=>alert("Hero clicked!")}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    src: placeholderImage,
    alt: 'Hero image',
    title: 'Welcome to My Site',
    subtitle: 'Discover my handsome face',
    height: '400px',
    disabled: false
  }
}`,...i.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    src: placeholderImage,
    alt: 'Disabled hero',
    title: 'Disabled Hero',
    subtitle: 'This hero is disabled',
    height: '400px',
    disabled: true
  }
}`,...s.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    src: placeholderImage,
    alt: 'Hero without text',
    height: '400px'
  }
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    src: placeholderImage,
    alt: 'Custom colored hero',
    title: 'Custom Styled Hero',
    subtitle: 'With custom colors',
    backgroundColor: 'rgba(25, 118, 210, 0.7)',
    color: '#ffffff',
    height: '400px'
  }
}`,...c.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    src: placeholderImage,
    alt: 'Light overlay hero',
    title: 'Light Overlay',
    subtitle: 'With reduced opacity',
    overlayOpacity: 0.3,
    height: '400px'
  }
}`,...n.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    src: placeholderImage,
    alt: 'Tall hero',
    title: 'Tall Hero Section',
    subtitle: 'Extra height because why not',
    height: '600px'
  }
}`,...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    src: placeholderImage,
    alt: 'Clickable hero',
    title: 'Click Me!',
    subtitle: 'This hero is clickable',
    height: '400px',
    onClick: () => alert('Hero clicked!')
  }
}`,...p.parameters?.docs?.source}}};const L=["Default","Disabled","NoText","CustomColors","LightOverlay","Tall","Clickable"];export{p as Clickable,c as CustomColors,i as Default,s as Disabled,n as LightOverlay,l as NoText,d as Tall,L as __namedExportsOrder,j as default};
