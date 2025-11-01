import{j as o}from"./jsx-runtime-BrmTJfKN.js";import{d as u}from"./styled-components.browser.esm-szzrvHum.js";import{r as C}from"./iframe-X2VVNUcM.js";import"./preload-helper-D9Z9MdNV.js";const g=u.label`
  display: inline-flex;
  align-items: center;
  cursor: ${e=>e.disabled?"not-allowed":"pointer"};
  font-family: 'Open Sans', sans-serif;
  font-size: 14px;
  user-select: none;
  opacity: ${e=>e.disabled?.6:1};
  transition: all 0.3s ease;

  @media (max-width: 768px) {
    font-size: 13px;
  }
`,y=u.input.attrs({type:"radio"})`
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
`,v=u.div`
  width: 20px;
  height: 20px;
  border: 2px solid
    ${e=>e.disabled?"#cccccc":e.$checked?e.$backgroundColor||"#1976d2":"#999999"};
  border-radius: 50%;
  margin-right: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  background-color: ${e=>e.disabled?"#f5f5f5":"#ffffff"};

  &::after {
    content: '';
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: ${e=>e.disabled?"#cccccc":e.$checked?e.$backgroundColor||"#1976d2":"transparent"};
    transition: all 0.3s ease;
  }

  ${g}:hover & {
    border-color: ${e=>e.disabled?"#cccccc":e.$backgroundColor?`${e.$backgroundColor}dd`:"#1565c0"};
  }
`,$=u.span`
  color: ${e=>e.disabled?"#999999":e.$color||"#333333"};
`,t=({label:e,value:a,name:h,checked:p=!1,backgroundColor:b,color:f,disabled:r=!1,onChange:m,className:k})=>{const x=()=>{!r&&m&&m(a)};return o.jsxs(g,{disabled:r,className:k,children:[o.jsx(y,{name:h,value:a,checked:p,disabled:r,onChange:x}),o.jsx(v,{$checked:p,disabled:r,$backgroundColor:b}),o.jsx($,{disabled:r,$color:f,children:e})]})};t.__docgenInfo={description:"",methods:[],displayName:"RadioButton",props:{label:{required:!0,tsType:{name:"string"},description:"Label text for the radio button"},value:{required:!0,tsType:{name:"string"},description:"Value of the radio button"},name:{required:!0,tsType:{name:"string"},description:"Name attribute for grouping radio buttons"},checked:{required:!1,tsType:{name:"boolean"},description:"Whether the radio button is checked",defaultValue:{value:"false",computed:!1}},backgroundColor:{required:!1,tsType:{name:"string"},description:"Background color when checked"},color:{required:!1,tsType:{name:"string"},description:"Text color"},disabled:{required:!1,tsType:{name:"boolean"},description:"Whether the radio button is disabled",defaultValue:{value:"false",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:"Change handler"},className:{required:!1,tsType:{name:"string"},description:"Optional className for additional styling"}}};const j={title:"Components/RadioButton",component:t,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{backgroundColor:{control:"color",description:"Background color when checked"},color:{control:"color",description:"Text color"},label:{control:"text",description:"Label text"},disabled:{control:"boolean",description:"Disabled state"},checked:{control:"boolean",description:"Checked state"},onChange:{action:"changed"}}},n={args:{label:"Radio Button",value:"option1",name:"radio-group",checked:!1,disabled:!1}},s={args:{label:"Checked Radio",value:"option1",name:"radio-group",checked:!0,disabled:!1}},d={args:{label:"Disabled Radio",value:"option1",name:"radio-group",checked:!1,disabled:!0}},i={args:{label:"Disabled Checked",value:"option1",name:"radio-group",checked:!0,disabled:!0}},c={args:{label:"Custom Color",value:"option1",name:"radio-group",checked:!0,backgroundColor:"#e91e63",color:"#e91e63"}},l={render:()=>{const[e,a]=C.useState("option1");return o.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"10px"},children:[o.jsx(t,{label:"Option 1",value:"option1",name:"demo-group",checked:e==="option1",onChange:a}),o.jsx(t,{label:"Option 2",value:"option2",name:"demo-group",checked:e==="option2",onChange:a}),o.jsx(t,{label:"Option 3",value:"option3",name:"demo-group",checked:e==="option3",onChange:a}),o.jsxs("p",{style:{marginTop:"10px"},children:["Selected: ",e]})]})}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Radio Button',
    value: 'option1',
    name: 'radio-group',
    checked: false,
    disabled: false
  }
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Checked Radio',
    value: 'option1',
    name: 'radio-group',
    checked: true,
    disabled: false
  }
}`,...s.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Disabled Radio',
    value: 'option1',
    name: 'radio-group',
    checked: false,
    disabled: true
  }
}`,...d.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Disabled Checked',
    value: 'option1',
    name: 'radio-group',
    checked: true,
    disabled: true
  }
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Custom Color',
    value: 'option1',
    name: 'radio-group',
    checked: true,
    backgroundColor: '#e91e63',
    color: '#e91e63'
  }
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [selected, setSelected] = useState('option1');
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '10px'
    }}>
        <RadioButton label="Option 1" value="option1" name="demo-group" checked={selected === 'option1'} onChange={setSelected} />
        <RadioButton label="Option 2" value="option2" name="demo-group" checked={selected === 'option2'} onChange={setSelected} />
        <RadioButton label="Option 3" value="option3" name="demo-group" checked={selected === 'option3'} onChange={setSelected} />
        <p style={{
        marginTop: '10px'
      }}>Selected: {selected}</p>
      </div>;
  }
}`,...l.parameters?.docs?.source}}};const B=["Default","Checked","Disabled","DisabledChecked","CustomColor","RadioGroup"];export{s as Checked,c as CustomColor,n as Default,d as Disabled,i as DisabledChecked,l as RadioGroup,B as __namedExportsOrder,j as default};
