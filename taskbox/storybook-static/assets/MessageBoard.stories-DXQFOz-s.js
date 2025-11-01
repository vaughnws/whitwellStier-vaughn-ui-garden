import{j as s}from"./jsx-runtime-BrmTJfKN.js";import{d as a}from"./styled-components.browser.esm-szzrvHum.js";import{M as v,b as k,c as S}from"./icons-DrdSshJn.js";import{r as b}from"./iframe-X2VVNUcM.js";import"./preload-helper-D9Z9MdNV.js";const j=a.div`
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
`,C=a.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
`,D=a.h2`
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
`,T=a.button`
  font-size: 14px;
  color: #ff6b35;
  background: none;
  border: none;
  cursor: pointer;
  transition: opacity 0.3s;

  &:hover {
    opacity: 0.8;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`,$=a.div`
  max-height: 256px;
  overflow-y: auto;
  background-color: #1a1a1a;
  border-radius: 8px;
  padding: 12px;
  margin-bottom: 16px;

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
`,O=a.div`
  display: flex;
  justify-content: ${e=>e.$isOwn?"flex-end":"flex-start"};
  margin-bottom: 12px;
  position: relative;

  &:hover .delete-button {
    opacity: 1;
  }
`,I=a.div`
  max-width: 85%;
`,A=a.div`
  font-size: 12px;
  color: #f0f0f0;
  opacity: 0.6;
  margin-bottom: 4px;
  text-align: ${e=>e.$isOwn?"right":"left"};
`,B=a.div`
  position: relative;
  padding: 12px 16px;
  border-radius: 8px;
  background-color: ${e=>e.$isOwn?"#ff6b35":"#272727"};
  color: #f0f0f0;
  border: 1px solid #303030;
  border-bottom-right-radius: ${e=>e.$isOwn?"0":"8px"};
  border-bottom-left-radius: ${e=>e.$isOwn?"8px":"0"};
  word-wrap: break-word;
  font-size: 14px;

  @media (max-width: 768px) {
    font-size: 13px;
    padding: 10px 14px;
  }
`,q=a.button`
  position: absolute;
  top: -8px;
  right: -8px;
  opacity: 0;
  transition: opacity 0.3s;
  background-color: #ef4444;
  color: white;
  border: none;
  border-radius: 50%;
  padding: 4px;
  cursor: pointer;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);

  &:hover {
    background-color: #dc2626;
  }

  svg {
    width: 12px;
    height: 12px;
  }
`,N=a.div`
  display: flex;
  gap: 8px;
`,U=a.input`
  flex: 1;
  background-color: #1a1a1a;
  border: 1px solid #303030;
  border-radius: 8px;
  padding: 12px 16px;
  color: #f0f0f0;
  font-size: 14px;
  transition: border-color 0.3s;

  &::placeholder {
    color: #f0f0f0;
    opacity: 0.4;
  }

  &:focus {
    outline: none;
    border-color: #ff6b35;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  @media (max-width: 768px) {
    font-size: 13px;
    padding: 10px 14px;
  }
`,z=a.button`
  background-color: #ff6b35;
  color: #f0f0f0;
  border: none;
  border-radius: 8px;
  padding: 12px 16px;
  cursor: pointer;
  transition: opacity 0.3s;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    opacity: 0.8;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  svg {
    width: 20px;
    height: 20px;
  }
`,R=e=>{const r=new Date(e),d=new Date().getTime()-r.getTime(),t=Math.floor(d/6e4);return t<1?"just now":t<60?`${t}m ago`:t<1440?`${Math.floor(t/60)}h ago`:r.toLocaleDateString()+" "+r.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})},w=({messages:e,currentUsername:r,newMessage:i="",onMessageChange:d,onSendMessage:t,onDeleteMessage:c,onRefresh:l,backgroundColor:x,disabled:o=!1,className:y})=>{const M=n=>{n.key==="Enter"&&t&&!o&&t()};return s.jsxs(j,{$backgroundColor:x,disabled:o,className:y,children:[s.jsxs(C,{children:[s.jsxs(D,{children:[s.jsx(v,{}),"Message Board"]}),l&&s.jsx(T,{onClick:l,disabled:o,children:"Refresh"})]}),s.jsx($,{children:e.slice(-5).map(n=>{const h=n.username===r;return s.jsx(O,{$isOwn:h,children:s.jsxs(I,{children:[s.jsxs(A,{$isOwn:h,children:[n.username," • ",R(n.timestamp)]}),s.jsxs(B,{$isOwn:h,children:[n.text,c&&s.jsx(q,{className:"delete-button",onClick:()=>c(n.id),disabled:o,children:s.jsx(k,{})})]})]})},n.id)})}),s.jsxs(N,{children:[s.jsx(U,{type:"text",value:i,onChange:n=>d?.(n.target.value),onKeyPress:M,placeholder:"Type a message...",disabled:o}),s.jsx(z,{onClick:t,disabled:o||!i.trim(),children:s.jsx(S,{})})]})]})};w.__docgenInfo={description:"",methods:[],displayName:"MessageBoard",props:{messages:{required:!0,tsType:{name:"Array",elements:[{name:"Message"}],raw:"Message[]"},description:"Array of messages to display"},currentUsername:{required:!1,tsType:{name:"string"},description:"Current username"},newMessage:{required:!1,tsType:{name:"string"},description:"New message input value",defaultValue:{value:"''",computed:!1}},onMessageChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:"Callback when new message changes"},onSendMessage:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback when message is sent"},onDeleteMessage:{required:!1,tsType:{name:"signature",type:"function",raw:"(id: string | number) => void",signature:{arguments:[{type:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},name:"id"}],return:{name:"void"}}},description:"Callback when message is deleted"},onRefresh:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback when refresh is clicked"},backgroundColor:{required:!1,tsType:{name:"string"},description:"Background color"},disabled:{required:!1,tsType:{name:"boolean"},description:"Whether the component is disabled",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Optional className"}}};const L={title:"Components/MessageBoard",component:w,parameters:{layout:"padded",backgrounds:{default:"dark",values:[{name:"dark",value:"#1a1a1a"}]}},tags:["autodocs"]},f=[{id:1,username:"Alice",text:"Hey everyone! How are things going?",timestamp:new Date(Date.now()-3e5).toISOString()},{id:2,username:"Bob",text:"All systems are running smoothly!",timestamp:new Date(Date.now()-18e4).toISOString()},{id:3,username:"Charlie",text:"Just deployed the latest update",timestamp:new Date(Date.now()-6e4).toISOString()}],p={args:{messages:f,currentUsername:"Alice",newMessage:""}},g={args:{messages:f,currentUsername:"Alice",newMessage:"This is a test message"}},u={args:{messages:f,currentUsername:"Alice",disabled:!0}},m={render:()=>{const[e,r]=b.useState(f),[i,d]=b.useState(""),[t]=b.useState("Alice"),c=()=>{i.trim()&&(r([...e,{id:e.length+1,username:t,text:i,timestamp:new Date().toISOString()}]),d(""))},l=x=>{r(e.filter(o=>o.id!==x))};return s.jsx(w,{messages:e,currentUsername:t,newMessage:i,onMessageChange:d,onSendMessage:c,onDeleteMessage:l,onRefresh:()=>console.log("Refresh clicked")})}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    messages: sampleMessages,
    currentUsername: 'Alice',
    newMessage: ''
  }
}`,...p.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    messages: sampleMessages,
    currentUsername: 'Alice',
    newMessage: 'This is a test message'
  }
}`,...g.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    messages: sampleMessages,
    currentUsername: 'Alice',
    disabled: true
  }
}`,...u.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [messages, setMessages] = useState(sampleMessages);
    const [newMessage, setNewMessage] = useState('');
    const [username] = useState('Alice');
    const handleSend = () => {
      if (newMessage.trim()) {
        setMessages([...messages, {
          id: messages.length + 1,
          username,
          text: newMessage,
          timestamp: new Date().toISOString()
        }]);
        setNewMessage('');
      }
    };
    const handleDelete = (id: string | number) => {
      setMessages(messages.filter(m => m.id !== id));
    };
    return <MessageBoard messages={messages} currentUsername={username} newMessage={newMessage} onMessageChange={setNewMessage} onSendMessage={handleSend} onDeleteMessage={handleDelete} onRefresh={() => console.log('Refresh clicked')} />;
  }
}`,...m.parameters?.docs?.source}}};const P=["Default","WithNewMessage","Disabled","Interactive"];export{p as Default,u as Disabled,m as Interactive,g as WithNewMessage,P as __namedExportsOrder,L as default};
