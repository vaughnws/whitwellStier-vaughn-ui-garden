import{j as e}from"./jsx-runtime-BrmTJfKN.js";import{d as o}from"./styled-components.browser.esm-szzrvHum.js";import{S as k}from"./Status-jglr8y49.js";import{d as x,A as b,H as v,e as y}from"./icons-DrdSshJn.js";import"./iframe-X2VVNUcM.js";import"./preload-helper-D9Z9MdNV.js";const I=o.div`
  font-family: 'Open Sans', sans-serif;
  margin-bottom: 16px;
  opacity: ${r=>r.disabled?.6:1};
  cursor: ${r=>r.disabled?"not-allowed":"default"};
  transition: all 0.3s ease;

  &:last-child {
    margin-bottom: 0;
  }

  @media (max-width: 768px) {
    margin-bottom: 14px;
  }
`,S=o.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
`,T=o.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  font-weight: 600;
  color: ${r=>r.disabled?"#999999":"#f0f0f0"};

  svg {
    width: 16px;
    height: 16px;
  }

  @media (max-width: 768px) {
    font-size: 13px;

    svg {
      width: 14px;
      height: 14px;
    }
  }
`,$=o.div`
  font-size: 14px;
  font-weight: 700;
  color: ${r=>r.disabled?"#999999":"#f0f0f0"};

  @media (max-width: 768px) {
    font-size: 13px;
  }
`,D=o.div`
  width: 100%;
  height: 8px;
  background-color: ${r=>r.$backgroundColor||"#1a1a1a"};
  border-radius: 4px;
  overflow: hidden;
  position: relative;

  @media (max-width: 768px) {
    height: 6px;
  }
`,A=o.div`
  height: 100%;
  width: ${r=>Math.min(r.$value,100)}%;
  background-color: ${r=>r.$color};
  border-radius: 4px;
  transition: all 0.5s ease;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.06),
      transparent
    );
    animation: shimmer 4s infinite;
  }

  @keyframes shimmer {
    0%,
    100% {
      transform: translateX(100%);
    }
    50% {
      transform: translateX(-100%);
    }
  }
`,P=(r,s,g,f)=>f?"#666666":r>=g?"#ef4444":r>=s?"#eab308":"#22c55e",a=({label:r,value:s,warning:g=80,critical:f=90,icon:C,backgroundColor:j,disabled:n=!1,className:w})=>{const R=P(s,g,f,n),h=Math.min(Math.max(s,0),100);return e.jsxs(I,{disabled:n,className:w,children:[e.jsxs(S,{children:[e.jsxs(T,{disabled:n,children:[C,e.jsx("span",{children:r})]}),e.jsxs($,{disabled:n,children:[h.toFixed(0),"%"]})]}),e.jsx(D,{$backgroundColor:j,children:e.jsx(A,{$value:h,$color:R})})]})};a.__docgenInfo={description:"",methods:[],displayName:"Resources",props:{label:{required:!0,tsType:{name:"string"},description:"Label for the resource"},value:{required:!0,tsType:{name:"number"},description:"Current value (0-100)"},warning:{required:!1,tsType:{name:"number"},description:"Warning threshold percentage",defaultValue:{value:"80",computed:!1}},critical:{required:!1,tsType:{name:"number"},description:"Critical threshold percentage",defaultValue:{value:"90",computed:!1}},icon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Icon component or element"},backgroundColor:{required:!1,tsType:{name:"string"},description:"Background color override"},disabled:{required:!1,tsType:{name:"boolean"},description:"Whether the component is disabled",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Optional className for additional styling"}}};const M={title:"Components/Resources",component:a,parameters:{layout:"padded",backgrounds:{default:"dark",values:[{name:"dark",value:"#1a1a1a"},{name:"light",value:"#ffffff"}]}},tags:["autodocs"],argTypes:{label:{control:"text",description:"Resource label"},value:{control:{type:"range",min:0,max:100,step:1},description:"Current value (0-100)"},warning:{control:{type:"number",min:0,max:100},description:"Warning threshold"},critical:{control:{type:"number",min:0,max:100},description:"Critical threshold"},backgroundColor:{control:"color",description:"Background color"},disabled:{control:"boolean",description:"Disabled state"}}},t={args:{label:"CPU",value:45,icon:e.jsx(x,{})}},i={args:{label:"RAM",value:85,icon:e.jsx(b,{})}},l={args:{label:"Disk",value:95,icon:e.jsx(v,{})}},c={args:{label:"CPU",value:65,icon:e.jsx(x,{}),disabled:!0}},d={args:{label:"Temp",value:70,warning:65,critical:75,icon:e.jsx(y,{})}},p={args:{label:"Network",value:30}},u={args:{label:"Usage",value:100,icon:e.jsx(b,{})}},m={render:()=>e.jsxs("div",{style:{backgroundColor:"#272727",padding:"24px",borderRadius:"12px",border:"1px solid #303030",maxWidth:"400px"},children:[e.jsx("h2",{style:{fontSize:"20px",fontWeight:"bold",marginBottom:"20px",color:"#f0f0f0",display:"flex",alignItems:"center",justifyContent:"center",gap:"8px"},children:e.jsx(k,{status:"warning",description:"5/5 services running"})}),e.jsx(a,{label:"CPU",value:45,icon:e.jsx(x,{})}),e.jsx(a,{label:"RAM",value:72,icon:e.jsx(b,{})}),e.jsx(a,{label:"Disk",value:88,icon:e.jsx(v,{}),warning:85,critical:95}),e.jsx(a,{label:"Temp",value:65,icon:e.jsx(y,{}),warning:65,critical:75}),e.jsx("div",{style:{marginTop:"16px",fontSize:"14px",color:"#f0f0f0",opacity:.6,textAlign:"center",fontFamily:"Open Sans, sans-serif"},children:"Uptime: 5d 12h 34m"})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'CPU',
    value: 45,
    icon: <CpuIcon />
  }
}`,...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'RAM',
    value: 85,
    icon: <ActivityIcon />
  }
}`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Disk',
    value: 95,
    icon: <HardDriveIcon />
  }
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'CPU',
    value: 65,
    icon: <CpuIcon />,
    disabled: true
  }
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Temp',
    value: 70,
    warning: 65,
    critical: 75,
    icon: <ThermometerIcon />
  }
}`,...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Network',
    value: 30
  }
}`,...p.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Usage',
    value: 100,
    icon: <ActivityIcon />
  }
}`,...u.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    backgroundColor: '#272727',
    padding: '24px',
    borderRadius: '12px',
    border: '1px solid #303030',
    maxWidth: '400px'
  }}>
      <h2 style={{
      fontSize: '20px',
      fontWeight: 'bold',
      marginBottom: '20px',
      color: '#f0f0f0',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '8px'
    }}>
        <Status status="warning" description="5/5 services running" />
      </h2>
      <Resources label="CPU" value={45} icon={<CpuIcon />} />
      <Resources label="RAM" value={72} icon={<ActivityIcon />} />
      <Resources label="Disk" value={88} icon={<HardDriveIcon />} warning={85} critical={95} />
      <Resources label="Temp" value={65} icon={<ThermometerIcon />} warning={65} critical={75} />
      <div style={{
      marginTop: '16px',
      fontSize: '14px',
      color: '#f0f0f0',
      opacity: 0.6,
      textAlign: 'center',
      fontFamily: 'Open Sans, sans-serif'
    }}>
        Uptime: 5d 12h 34m
      </div>
    </div>
}`,...m.parameters?.docs?.source}}};const F=["Default","Warning","Critical","Disabled","CustomThresholds","NoIcon","FullBar","SystemResourcesPanel"];export{l as Critical,d as CustomThresholds,t as Default,c as Disabled,u as FullBar,p as NoIcon,m as SystemResourcesPanel,i as Warning,F as __namedExportsOrder,M as default};
