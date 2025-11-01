import{j as a}from"./jsx-runtime-BrmTJfKN.js";import{d as n}from"./styled-components.browser.esm-szzrvHum.js";import"./iframe-X2VVNUcM.js";import"./preload-helper-D9Z9MdNV.js";const $=n.div`
  font-family: 'Open Sans', sans-serif;
  background-color: ${e=>e.disabled?"#f5f5f5":e.$backgroundColor||"#ffffff"};
  border: 1px solid ${e=>e.disabled?"#e0e0e0":"#ddd"};
  border-radius: 8px;
  overflow: hidden;
  cursor: ${e=>e.disabled?"not-allowed":e.$clickable?"pointer":"default"};
  opacity: ${e=>e.disabled?.6:1};
  transition: all 0.3s ease;
  width: ${e=>e.$width||"300px"};
  box-shadow: ${e=>e.disabled?"none":"0 2px 4px rgba(0, 0, 0, 0.1)"};

  &:hover {
    box-shadow: ${e=>e.disabled?"none":e.$clickable?"0 4px 8px rgba(0, 0, 0, 0.15)":"0 2px 4px rgba(0, 0, 0, 0.1)"};
    transform: ${e=>e.disabled?"none":e.$clickable?"translateY(-2px)":"none"};
  }

  /* Responsive */
  @media (max-width: 768px) {
    width: 100%;
    max-width: ${e=>e.$width||"300px"};
  }
`,S=n.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  filter: ${e=>e.disabled?"grayscale(100%)":"none"};
  transition: all 0.3s ease;
`,j=n.div`
  padding: 20px;

  @media (max-width: 768px) {
    padding: 16px;
  }
`,I=n.h3`
  font-size: 20px;
  font-weight: 700;
  color: ${e=>e.disabled?"#999999":e.$color||"#333333"};
  margin: 0 0 12px 0;

  @media (max-width: 768px) {
    font-size: 18px;
  }
`,v=n.p`
  font-size: 14px;
  line-height: 1.6;
  color: ${e=>e.disabled?"#999999":e.$color||"#666666"};
  margin: 0;

  @media (max-width: 768px) {
    font-size: 13px;
  }
`,u=({title:e,content:h,imageSrc:x,imageAlt:f="Card image",backgroundColor:C,color:b,disabled:r=!1,width:w,className:y,onClick:g,children:T})=>{const k=()=>{!r&&g&&g()};return a.jsxs($,{disabled:r,$backgroundColor:C,$clickable:!!g,$width:w,onClick:k,className:y,children:[x&&a.jsx(S,{src:x,alt:f,disabled:r}),a.jsxs(j,{children:[e&&a.jsx(I,{disabled:r,$color:b,children:e}),h&&a.jsx(v,{disabled:r,$color:b,children:h}),T]})]})};u.__docgenInfo={description:"",methods:[],displayName:"Card",props:{title:{required:!1,tsType:{name:"string"},description:"Card title"},content:{required:!1,tsType:{name:"string"},description:"Card content"},imageSrc:{required:!1,tsType:{name:"string"},description:"Image source URL"},imageAlt:{required:!1,tsType:{name:"string"},description:"Image alt text",defaultValue:{value:"'Card image'",computed:!1}},backgroundColor:{required:!1,tsType:{name:"string"},description:"Background color of the card"},color:{required:!1,tsType:{name:"string"},description:"Text color"},disabled:{required:!1,tsType:{name:"boolean"},description:"Whether the card is disabled",defaultValue:{value:"false",computed:!1}},width:{required:!1,tsType:{name:"string"},description:"Card width"},className:{required:!1,tsType:{name:"string"},description:"Optional className for additional styling"},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Optional click handler"},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Children components (for custom content)"}}};const R={title:"Components/Card",component:u,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{backgroundColor:{control:"color",description:"Background color of the card"},color:{control:"color",description:"Text color"},disabled:{control:"boolean",description:"Disabled state"},width:{control:"text",description:"Width of the card"},onClick:{action:"clicked"}}},t="https://vaughnws.ca/projects/drone.jpeg",o={args:{title:"Card Title",content:"This is the card content. It can contain any text or information you want to display.",imageSrc:t,imageAlt:"Placeholder image",disabled:!1}},i={args:{title:"Disabled Card",content:"This card is disabled and cannot be interacted with.",imageSrc:t,imageAlt:"Disabled card image",disabled:!0}},s={args:{title:"Card Without Image",content:"This card does not have an image, just title and content.",disabled:!1}},d={args:{title:"Custom Styled Card",content:"This card has custom background and text colors.",imageSrc:t,backgroundColor:"#e3f2fd",color:"#1976d2"}},c={args:{title:"Clickable Card",content:"Click this card to trigger an action.",imageSrc:t,onClick:()=>alert("Card clicked!")}},l={args:{title:"Wide Card",content:"This card has a custom width set to be wider than the default.",imageSrc:t,width:"500px"}},m={render:e=>a.jsx(u,{...e,children:a.jsxs("div",{style:{marginTop:"16px",paddingTop:"16px",borderTop:"1px solid #ddd"},children:[a.jsx("button",{style:{padding:"8px 16px",marginRight:"8px"},children:"Action 1"}),a.jsx("button",{style:{padding:"8px 16px"},children:"Action 2"})]})}),args:{title:"Card with Actions",content:"This card includes custom child components like buttons.",imageSrc:t}},p={args:{title:"Minimal Card",content:"A simple card with just the essentials."}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Card Title',
    content: 'This is the card content. It can contain any text or information you want to display.',
    imageSrc: placeholderImage,
    imageAlt: 'Placeholder image',
    disabled: false
  }
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Disabled Card',
    content: 'This card is disabled and cannot be interacted with.',
    imageSrc: placeholderImage,
    imageAlt: 'Disabled card image',
    disabled: true
  }
}`,...i.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Card Without Image',
    content: 'This card does not have an image, just title and content.',
    disabled: false
  }
}`,...s.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Custom Styled Card',
    content: 'This card has custom background and text colors.',
    imageSrc: placeholderImage,
    backgroundColor: '#e3f2fd',
    color: '#1976d2'
  }
}`,...d.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Clickable Card',
    content: 'Click this card to trigger an action.',
    imageSrc: placeholderImage,
    onClick: () => alert('Card clicked!')
  }
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Wide Card',
    content: 'This card has a custom width set to be wider than the default.',
    imageSrc: placeholderImage,
    width: '500px'
  }
}`,...l.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: args => <Card {...args}>
      <div style={{
      marginTop: '16px',
      paddingTop: '16px',
      borderTop: '1px solid #ddd'
    }}>
        <button style={{
        padding: '8px 16px',
        marginRight: '8px'
      }}>
          Action 1
        </button>
        <button style={{
        padding: '8px 16px'
      }}>Action 2</button>
      </div>
    </Card>,
  args: {
    title: 'Card with Actions',
    content: 'This card includes custom child components like buttons.',
    imageSrc: placeholderImage
  }
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Minimal Card',
    content: 'A simple card with just the essentials.'
  }
}`,...p.parameters?.docs?.source}}};const N=["Default","Disabled","WithoutImage","CustomColors","Clickable","Wide","WithCustomChildren","MinimalCard"];export{c as Clickable,d as CustomColors,o as Default,i as Disabled,p as MinimalCard,l as Wide,m as WithCustomChildren,s as WithoutImage,N as __namedExportsOrder,R as default};
