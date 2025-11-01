import{j as o}from"./jsx-runtime-BrmTJfKN.js";import{d as x}from"./styled-components.browser.esm-szzrvHum.js";import{r as v}from"./iframe-X2VVNUcM.js";import"./preload-helper-D9Z9MdNV.js";const S=x.select`
  font-family: 'Open Sans', sans-serif;
  padding: 10px 14px;
  font-size: 14px;
  border: 1px solid #ddd;
  border-radius: 4px;
  cursor: ${e=>e.disabled?"not-allowed":"pointer"};
  transition: all 0.3s ease;
  width: 100%;
  min-width: 200px;

  background-color: ${e=>e.disabled?"#e0e0e0":e.$backgroundColor||"#ffffff"};
  color: ${e=>e.disabled?"#999999":e.$color||"#333333"};

  opacity: ${e=>e.disabled?.6:1};

  &:hover {
    border-color: ${e=>e.disabled?"#ddd":"#999"};
  }

  &:focus {
    outline: none;
    border-color: ${e=>e.disabled?"#ddd":"#1976d2"};
    box-shadow: ${e=>e.disabled?"none":"0 0 0 2px rgba(25, 118, 210, 0.2)"};
  }

  /* Responsive */
  @media (max-width: 768px) {
    padding: 8px 12px;
    font-size: 13px;
    min-width: 150px;
  }
`,p=({options:e,value:i,placeholder:c="Select an option",backgroundColor:f,color:g,disabled:u=!1,onChange:m,className:h})=>{const b=r=>{!u&&m&&m(r.target.value)};return o.jsxs(S,{value:i,onChange:b,disabled:u,$backgroundColor:f,$color:g,className:h,children:[c&&o.jsx("option",{value:"",disabled:!0,children:c}),e.map(r=>o.jsx("option",{value:r.value,children:r.label},r.value))]})};p.__docgenInfo={description:"",methods:[],displayName:"Dropdown",props:{options:{required:!0,tsType:{name:"Array",elements:[{name:"DropdownOption"}],raw:"DropdownOption[]"},description:"Array of options for the dropdown"},value:{required:!1,tsType:{name:"string"},description:"Currently selected value"},placeholder:{required:!1,tsType:{name:"string"},description:"Placeholder text when no option is selected",defaultValue:{value:"'Select an option'",computed:!1}},backgroundColor:{required:!1,tsType:{name:"string"},description:"Background color of the dropdown"},color:{required:!1,tsType:{name:"string"},description:"Text color"},disabled:{required:!1,tsType:{name:"boolean"},description:"Whether the dropdown is disabled",defaultValue:{value:"false",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:"Change handler"},className:{required:!1,tsType:{name:"string"},description:"Optional className for additional styling"}}};const T={title:"Components/Dropdown",component:p,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{backgroundColor:{control:"color",description:"Background color of the dropdown"},color:{control:"color",description:"Text color of the dropdown"},disabled:{control:"boolean",description:"Disabled state of the dropdown"},placeholder:{control:"text",description:"Placeholder text"},onChange:{action:"changed"}}},a=[{value:"option1",label:"Option 1"},{value:"option2",label:"Option 2"},{value:"option3",label:"Option 3"},{value:"option4",label:"Option 4"}],t={args:{options:a,placeholder:"Select an option",disabled:!1}},n={args:{options:a,placeholder:"Select an option",disabled:!0}},s={args:{options:a,value:"option2",disabled:!1}},l={args:{options:a,placeholder:"Choose one",backgroundColor:"#e3f2fd",color:"#1976d2"}},d={render:()=>{const[e,i]=v.useState("");return o.jsxs("div",{children:[o.jsx(p,{options:a,value:e,placeholder:"Select an option",onChange:i}),o.jsxs("p",{style:{marginTop:"20px"},children:["Selected: ",e||"None"]})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    options: sampleOptions,
    placeholder: 'Select an option',
    disabled: false
  }
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    options: sampleOptions,
    placeholder: 'Select an option',
    disabled: true
  }
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    options: sampleOptions,
    value: 'option2',
    disabled: false
  }
}`,...s.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    options: sampleOptions,
    placeholder: 'Choose one',
    backgroundColor: '#e3f2fd',
    color: '#1976d2'
  }
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [selectedValue, setSelectedValue] = useState('');
    return <div>
        <Dropdown options={sampleOptions} value={selectedValue} placeholder="Select an option" onChange={setSelectedValue} />
        <p style={{
        marginTop: '20px'
      }}>Selected: {selectedValue || 'None'}</p>
      </div>;
  }
}`,...d.parameters?.docs?.source}}};const D=["Default","Disabled","WithSelectedValue","CustomColors","Interactive"];export{l as CustomColors,t as Default,n as Disabled,d as Interactive,s as WithSelectedValue,D as __namedExportsOrder,T as default};
