import{j as a}from"./jsx-runtime-BrmTJfKN.js";import{d as i,m as u}from"./styled-components.browser.esm-szzrvHum.js";const p=u`
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
`,m=i.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-basis: 80%;
  font-family: 'Open Sans', sans-serif;
  text-align: center;
  padding: 24px;
  border-radius: 8px;
  background-color: ${e=>e.$backgroundColor||"#1a1a1a"};
  border: 2px solid;
  transition: all 0.3s ease;
  opacity: ${e=>e.disabled?.6:1};
  cursor: ${e=>e.disabled?"not-allowed":"default"};

  @media (max-width: 768px) {
    padding: 20px;
  }
`,f=i.div`
  display: inline-block;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  margin-bottom: 12px;
  background-color: ${e=>{switch(e.$status){case"critical":return"#ef4444";case"warning":return"#eab308";case"healthy":default:return"#22c55e"}}};
  animation: ${e=>e.$showPulse?p:"none"} 2s ease-in-out
    infinite;

  @media (max-width: 768px) {
    width: 14px;
    height: 14px;
  }
`,h=i.div`
  font-size: 32px;
  font-weight: 700;
  text-transform: uppercase;
  margin-bottom: 8px;
  color: ${e=>{if(e.disabled)return"#999999";switch(e.$status){case"critical":return"#ef4444";case"warning":return"#eab308";case"healthy":default:return"#22c55e"}}};

  @media (max-width: 768px) {
    font-size: 24px;
  }
`,x=i.div`
  font-size: 14px;
  color: ${e=>e.disabled?"#999999":"#f0f0f0"};
  opacity: ${e=>e.disabled?1:.6};
  margin-top: 4px;

  @media (max-width: 768px) {
    font-size: 13px;
  }
`,g=(e,r)=>{if(r)return"#666666";switch(e){case"critical":return"#ef4444";case"warning":return"#eab308";case"healthy":default:return"#22c55e"}},y=({status:e,statusText:r,description:s,showPulse:n=!0,backgroundColor:o,disabled:t=!1,className:l})=>{const c=r||e,d=g(e,t);return a.jsxs(m,{$backgroundColor:o,disabled:t,className:l,style:{borderColor:d},children:[a.jsx(f,{$status:e,$showPulse:n&&!t}),a.jsx(h,{$status:e,disabled:t,children:c}),s&&a.jsx(x,{disabled:t,children:s})]})};y.__docgenInfo={description:"",methods:[],displayName:"Status",props:{status:{required:!0,tsType:{name:"union",raw:"'healthy' | 'warning' | 'critical'",elements:[{name:"literal",value:"'healthy'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'critical'"}]},description:"Health status (healthy, warning, or critical)"},statusText:{required:!1,tsType:{name:"string"},description:"Primary status text"},description:{required:!1,tsType:{name:"string"},description:"Secondary descriptive text"},showPulse:{required:!1,tsType:{name:"boolean"},description:"Whether to show animated pulse indicator",defaultValue:{value:"true",computed:!1}},backgroundColor:{required:!1,tsType:{name:"string"},description:"Background color override"},disabled:{required:!1,tsType:{name:"boolean"},description:"Whether the component is disabled",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Optional className for additional styling"}}};export{y as S};
