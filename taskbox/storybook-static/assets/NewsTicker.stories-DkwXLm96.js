import{j as r}from"./jsx-runtime-BrmTJfKN.js";import{d as p,m as y}from"./styled-components.browser.esm-szzrvHum.js";import"./iframe-X2VVNUcM.js";import"./preload-helper-D9Z9MdNV.js";const N=y`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-50%);
  }
`,w=p.div`
  background-color: ${e=>e.$backgroundColor||"#ff6b35"};
  color: #f0f0f0;
  padding: 8px 0;
  overflow: hidden;
  position: relative;
  opacity: ${e=>e.disabled?.6:1};
  cursor: ${e=>e.disabled?"not-allowed":"default"};
`,g=p.div`
  display: flex;
  animation: ${N} ${e=>e.$speed}s linear infinite;
  width: fit-content;

  &:hover {
    animation-play-state: ${e=>e.disabled?"running":"paused"};
  }
`,h=p.a`
  font-family: 'Open Sans', sans-serif;
  display: inline-block;
  margin: 0 32px;
  white-space: nowrap;
  color: #f0f0f0;
  text-decoration: none;
  font-size: 14px;
  transition: opacity 0.3s;

  &:hover {
    text-decoration: underline;
    opacity: 0.9;
  }

  @media (max-width: 768px) {
    font-size: 13px;
    margin: 0 24px;
  }
`,S=p.strong`
  font-weight: 700;
  margin-right: 8px;
`,x=({news:e,backgroundColor:d,speed:m=120,disabled:s=!1,className:u})=>e.length===0?r.jsx(w,{$backgroundColor:d,disabled:s,className:u,children:r.jsx(g,{$speed:m,disabled:s,children:r.jsx(h,{children:"Loading tech news..."})})}):r.jsx(w,{$backgroundColor:d,disabled:s,className:u,children:r.jsx(g,{$speed:m,disabled:s,children:[...e,...e].map((f,k)=>r.jsxs(h,{href:f.link,target:"_blank",rel:"noopener noreferrer",onClick:b=>s&&b.preventDefault(),children:[r.jsx(S,{children:"TECH NEWS:"}),f.title]},k))})});x.__docgenInfo={description:"",methods:[],displayName:"NewsTicker",props:{news:{required:!0,tsType:{name:"Array",elements:[{name:"NewsItem"}],raw:"NewsItem[]"},description:"Array of news items"},backgroundColor:{required:!1,tsType:{name:"string"},description:"Background color"},speed:{required:!1,tsType:{name:"number"},description:"Animation speed in seconds",defaultValue:{value:"120",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"Whether the component is disabled",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Optional className"}}};const T={title:"Components/NewsTicker",component:x,parameters:{layout:"fullscreen"},tags:["autodocs"]},a=[{title:"New JavaScript Framework Released with Revolutionary Features",link:"https://example.com/news1"},{title:"AI Breakthrough: Model Achieves Human-Level Performance",link:"https://example.com/news2"},{title:"Quantum Computing Makes Major Advance in Error Correction",link:"https://example.com/news3"},{title:"Open Source Project Reaches 100K GitHub Stars",link:"https://example.com/news4"}],o={args:{news:a}},n={args:{news:a,speed:60}},t={args:{news:a,speed:180}},i={args:{news:a,backgroundColor:"#2563eb"}},c={args:{news:[]}},l={args:{news:a,disabled:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    news: sampleNews
  }
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    news: sampleNews,
    speed: 60
  }
}`,...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    news: sampleNews,
    speed: 180
  }
}`,...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    news: sampleNews,
    backgroundColor: '#2563eb'
  }
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    news: []
  }
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    news: sampleNews,
    disabled: true
  }
}`,...l.parameters?.docs?.source}}};const E=["Default","FastScroll","SlowScroll","CustomColor","Empty","Disabled"];export{i as CustomColor,o as Default,l as Disabled,c as Empty,n as FastScroll,t as SlowScroll,E as __namedExportsOrder,T as default};
