import{j as n}from"./jsx-runtime-BrmTJfKN.js";import{d as t,m as j}from"./styled-components.browser.esm-szzrvHum.js";import{S as A,L as $,P as U,a as I,R as T}from"./icons-DrdSshJn.js";import{r as S}from"./iframe-X2VVNUcM.js";import"./preload-helper-D9Z9MdNV.js";const q=j`
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
`,N=t.div`
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
`,R=t.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
`,P=t.h2`
  font-size: 20px;
  font-weight: 700;
  color: #f0f0f0;
  display: flex;
  align-items: center;
  gap: 8px;
  margin: 0;

  svg {
    width: 24px;
    height: 24px;
  }

  @media (max-width: 768px) {
    font-size: 18px;
  }
`,B=t.button`
  color: #ff6b35;
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;
  transition: opacity 0.3s;

  &:hover {
    opacity: 0.8;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  svg {
    width: 16px;
    height: 16px;
  }
`,z=t.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 16px;
`,L=t.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #1a1a1a;
  border-radius: 8px;
  padding: 12px;
  border: 1px solid #303030;
`,M=t.div`
  display: flex;
  align-items: center;
  gap: 12px;
`,_=t.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: ${e=>e.$status==="running"?"#22c55e":"#ef4444"};
  animation: ${e=>e.$status==="running"?q:"none"} 2s
    ease-in-out infinite;
`,E=t.span`
  font-size: 14px;
  font-family: 'Courier New', monospace;
  color: #f0f0f0;

  @media (max-width: 768px) {
    font-size: 13px;
  }
`,O=t.div`
  display: flex;
  gap: 4px;
`,b=t.button`
  padding: 6px;
  background: none;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
  color: ${e=>e.$color||"#f0f0f0"};

  &:hover {
    background-color: #303030;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  svg {
    width: 24px;
    height: 24px;
  }
`,D=t.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 8px;

  @media (max-width: 768px) {
    gap: 6px;
  }
`,C=t.button`
  background-color: ${e=>e.$bgColor||"#666666"};
  color: #f0f0f0;
  border: none;
  border-radius: 8px;
  padding: 10px 8px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: opacity 0.3s;

  &:hover {
    opacity: 0.9;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  @media (max-width: 768px) {
    font-size: 12px;
    padding: 8px 6px;
  }
`,y=({containers:e,isPinUnlocked:r=!1,onStart:x,onStop:f,onRestart:c,onStartAll:h,onStopAll:l,onRestartAll:k,onUnlock:a,backgroundColor:o,disabled:s=!1,className:v})=>n.jsxs(N,{$backgroundColor:o,disabled:s,className:v,children:[n.jsxs(R,{children:[n.jsxs(P,{children:[n.jsx(A,{}),"Containers"]}),!r&&a&&n.jsx(B,{onClick:a,disabled:s,children:n.jsx($,{})})]}),n.jsx(z,{children:e.map((i,w)=>n.jsxs(L,{children:[n.jsxs(M,{children:[n.jsx(_,{$status:i.status}),n.jsx(E,{children:i.name})]}),r&&n.jsxs(O,{children:[n.jsx(b,{onClick:()=>x?.(i.name),disabled:s,$color:"#22c55e",title:"Start",children:n.jsx(U,{})}),n.jsx(b,{onClick:()=>f?.(i.name),disabled:s,$color:"#ef4444",title:"Stop",children:n.jsx(I,{})}),n.jsx(b,{onClick:()=>c?.(i.name),disabled:s,$color:"#3b82f6",title:"Restart",children:n.jsx(T,{})})]})]},w))}),r&&n.jsxs(D,{children:[n.jsx(C,{onClick:h,disabled:s,$bgColor:"#16a34a",children:"Start All"}),n.jsx(C,{onClick:k,disabled:s,$bgColor:"#2563eb",children:"Restart All"}),n.jsx(C,{onClick:l,disabled:s,$bgColor:"#dc2626",children:"Stop All"})]})]});y.__docgenInfo={description:"",methods:[],displayName:"ContainerManager",props:{containers:{required:!0,tsType:{name:"Array",elements:[{name:"Container"}],raw:"Container[]"},description:"Array of containers"},isPinUnlocked:{required:!1,tsType:{name:"boolean"},description:"Whether PIN is unlocked",defaultValue:{value:"false",computed:!1}},onStart:{required:!1,tsType:{name:"signature",type:"function",raw:"(containerName: string) => void",signature:{arguments:[{type:{name:"string"},name:"containerName"}],return:{name:"void"}}},description:"Callback to start a container"},onStop:{required:!1,tsType:{name:"signature",type:"function",raw:"(containerName: string) => void",signature:{arguments:[{type:{name:"string"},name:"containerName"}],return:{name:"void"}}},description:"Callback to stop a container"},onRestart:{required:!1,tsType:{name:"signature",type:"function",raw:"(containerName: string) => void",signature:{arguments:[{type:{name:"string"},name:"containerName"}],return:{name:"void"}}},description:"Callback to restart a container"},onStartAll:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback to start all containers"},onStopAll:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback to stop all containers"},onRestartAll:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback to restart all containers"},onUnlock:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback when unlock button is clicked"},backgroundColor:{required:!1,tsType:{name:"string"},description:"Background color"},disabled:{required:!1,tsType:{name:"boolean"},description:"Whether the component is disabled",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Optional className"}}};const J={title:"Components/ContainerManager",component:y,parameters:{layout:"padded",backgrounds:{default:"dark",values:[{name:"dark",value:"#1a1a1a"}]}},tags:["autodocs"]},g=[{name:"nginx",status:"running"},{name:"postgres",status:"running"},{name:"redis",status:"stopped"},{name:"api",status:"running"}],d={args:{containers:g,isPinUnlocked:!1}},p={args:{containers:g,isPinUnlocked:!0}},u={args:{containers:g,isPinUnlocked:!0,disabled:!0}},m={render:()=>{const[e,r]=S.useState(g),[x,f]=S.useState(!1),c=a=>{r(e.map(o=>o.name===a?{...o,status:"running"}:o))},h=a=>{r(e.map(o=>o.name===a?{...o,status:"stopped"}:o))},l=()=>{r(e.map(a=>({...a,status:"running"})))},k=()=>{r(e.map(a=>({...a,status:"stopped"})))};return n.jsx(y,{containers:e,isPinUnlocked:x,onStart:c,onStop:h,onRestart:c,onStartAll:l,onStopAll:k,onRestartAll:l,onUnlock:()=>f(!0)})}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    containers: sampleContainers,
    isPinUnlocked: false
  }
}`,...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    containers: sampleContainers,
    isPinUnlocked: true
  }
}`,...p.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    containers: sampleContainers,
    isPinUnlocked: true,
    disabled: true
  }
}`,...u.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [containers, setContainers] = useState(sampleContainers);
    const [isUnlocked, setIsUnlocked] = useState(false);
    const handleStart = (name: string) => {
      setContainers(containers.map(c => c.name === name ? {
        ...c,
        status: 'running' as const
      } : c));
    };
    const handleStop = (name: string) => {
      setContainers(containers.map(c => c.name === name ? {
        ...c,
        status: 'stopped' as const
      } : c));
    };
    const handleStartAll = () => {
      setContainers(containers.map(c => ({
        ...c,
        status: 'running' as const
      })));
    };
    const handleStopAll = () => {
      setContainers(containers.map(c => ({
        ...c,
        status: 'stopped' as const
      })));
    };
    return <ContainerManager containers={containers} isPinUnlocked={isUnlocked} onStart={handleStart} onStop={handleStop} onRestart={handleStart} onStartAll={handleStartAll} onStopAll={handleStopAll} onRestartAll={handleStartAll} onUnlock={() => setIsUnlocked(true)} />;
  }
}`,...m.parameters?.docs?.source}}};const K=["Locked","Unlocked","Disabled","Interactive"];export{u as Disabled,m as Interactive,d as Locked,p as Unlocked,K as __namedExportsOrder,J as default};
