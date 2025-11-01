import{j as t}from"./jsx-runtime-BrmTJfKN.js";import{d as o}from"./styled-components.browser.esm-szzrvHum.js";import{C as b}from"./icons-DrdSshJn.js";import"./iframe-X2VVNUcM.js";import"./preload-helper-D9Z9MdNV.js";const h=o.div`
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
`,v=o.h2`
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
`,S=o.div`
  max-height: 256px;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: #1a1a1a;
  }

  &::-webkit-scrollbar-thumb {
    background: #303030;
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #404040;
  }
`,w=o.div`
  background-color: #1a1a1a;
  border-radius: 8px;
  padding: 12px;
  border: 1px solid #303030;
  margin-bottom: 8px;

  &:last-child {
    margin-bottom: 0;
  }
`,D=o.div`
  font-weight: 600;
  color: #f0f0f0;
  font-size: 14px;
  margin-bottom: 4px;

  @media (max-width: 768px) {
    font-size: 13px;
  }
`,y=o.div`
  font-size: 14px;
  color: #f0f0f0;
  opacity: 0.6;
  margin-top: 4px;

  @media (max-width: 768px) {
    font-size: 13px;
  }
`,k=o.div`
  font-size: 12px;
  color: #f0f0f0;
  opacity: 0.4;
  margin-top: 4px;
`,E=o.div`
  text-align: center;
  color: #f0f0f0;
  opacity: 0.6;
  padding: 32px 0;
  font-size: 14px;
`,T=e=>{const a=new Date(e),s=new Date,r=new Date(s);return r.setDate(r.getDate()+1),a.toDateString()===s.toDateString()?"Today "+a.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}):a.toDateString()===r.toDateString()?"Tomorrow "+a.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}):a.toLocaleDateString()+" "+a.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})},x=({events:e,backgroundColor:a,disabled:s=!1,className:r})=>t.jsxs(h,{$backgroundColor:a,disabled:s,className:r,children:[t.jsxs(v,{children:[t.jsx(b,{}),"Upcoming Classes"]}),t.jsx(S,{children:e.length>0?e.map((i,f)=>t.jsxs(w,{children:[t.jsx(D,{children:i.title}),t.jsx(y,{children:T(i.start)}),i.location&&t.jsx(k,{children:i.location})]},f)):t.jsx(E,{children:"No upcoming events"})})]});x.__docgenInfo={description:"",methods:[],displayName:"Calendar",props:{events:{required:!0,tsType:{name:"Array",elements:[{name:"CalendarEvent"}],raw:"CalendarEvent[]"},description:"Array of calendar events"},backgroundColor:{required:!1,tsType:{name:"string"},description:"Background color"},disabled:{required:!1,tsType:{name:"boolean"},description:"Whether the component is disabled",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Optional className"}}};const L={title:"Components/Calendar",component:x,parameters:{layout:"padded",backgrounds:{default:"dark",values:[{name:"dark",value:"#1a1a1a"}]}},tags:["autodocs"]},n=new Date,m=new Date(n);m.setDate(m.getDate()+1);const g=new Date(n);g.setDate(g.getDate()+7);const u=[{title:"Web Development 101",start:n.toISOString(),location:"Room 204"},{title:"React Advanced Patterns",start:m.toISOString(),location:"Online"},{title:"Database Design",start:g.toISOString(),location:"Lab 3"}],d={args:{events:u}},c={args:{events:[]}},l={args:{events:u,disabled:!0}},p={args:{events:[...u,{title:"TypeScript Workshop",start:new Date(n.getTime()+11520*60*1e3).toISOString(),location:"Room 105"},{title:"Node.js Fundamentals",start:new Date(n.getTime()+14400*60*1e3).toISOString()}]}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    events: sampleEvents
  }
}`,...d.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    events: []
  }
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    events: sampleEvents,
    disabled: true
  }
}`,...l.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    events: [...sampleEvents, {
      title: 'TypeScript Workshop',
      start: new Date(today.getTime() + 8 * 24 * 60 * 60 * 1000).toISOString(),
      location: 'Room 105'
    }, {
      title: 'Node.js Fundamentals',
      start: new Date(today.getTime() + 10 * 24 * 60 * 60 * 1000).toISOString()
    }]
  }
}`,...p.parameters?.docs?.source}}};const N=["Default","Empty","Disabled","ManyEvents"];export{d as Default,l as Disabled,c as Empty,p as ManyEvents,N as __namedExportsOrder,L as default};
