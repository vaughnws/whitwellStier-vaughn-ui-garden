import{j as e}from"./jsx-runtime-BrmTJfKN.js";import{d as s}from"./styled-components.browser.esm-szzrvHum.js";import"./iframe-X2VVNUcM.js";import"./preload-helper-D9Z9MdNV.js";const C=s.table`
  font-family: 'Open Sans', sans-serif;
  border-collapse: collapse;
  width: 100%;
  background-color: ${l=>l.disabled?"#f5f5f5":l.$backgroundColor||"#ffffff"};
  opacity: ${l=>l.disabled?.6:1};
  cursor: ${l=>l.disabled?"not-allowed":"default"};
  border: 1px solid #ddd;
  transition: all 0.3s ease;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`,m=s.thead`
  background-color: ${l=>l.disabled?"#e0e0e0":l.$backgroundColor||"#f0f0f0"};
  color: ${l=>l.disabled?"#999999":l.$color||"#333333"};
  font-weight: bold;
`,p=s.tr`
  background-color: ${l=>l.disabled?"#f5f5f5":l.$backgroundColor||"#ffffff"};
  color: ${l=>l.disabled?"#999999":l.$color||"#333333"};
  border-bottom: 1px solid #ddd;

  &:hover {
    background-color: ${l=>l.disabled?"#f5f5f5":l.$backgroundColor?`${l.$backgroundColor}ee`:"#f9f9f9"};
  }
`,x=s.td`
  padding: 12px;
  text-align: left;
  background-color: ${l=>l.disabled?"#f5f5f5":l.$backgroundColor||"transparent"};
  color: ${l=>l.disabled?"#999999":l.$color||"#333333"};
  font-weight: ${l=>l.$isHeader?"bold":"normal"};

  @media (max-width: 768px) {
    padding: 8px;
  }
`,g=s.th`
  padding: 12px;
  text-align: left;
  background-color: ${l=>l.disabled?"#e0e0e0":l.$backgroundColor||"transparent"};
  color: ${l=>l.disabled?"#999999":l.$color||"#333333"};

  @media (max-width: 768px) {
    padding: 8px;
  }
`,j=s.tfoot`
  background-color: ${l=>l.disabled?"#e0e0e0":l.$backgroundColor||"#f0f0f0"};
  color: ${l=>l.disabled?"#999999":l.$color||"#333333"};
  font-weight: bold;
`,t=({backgroundColor:l,disabled:o=!1,className:d,children:n})=>e.jsx(C,{$backgroundColor:l,disabled:o,className:d,children:n}),i=({backgroundColor:l,color:o,disabled:d=!1,children:n})=>e.jsx(m,{$backgroundColor:l,$color:o,disabled:d,children:e.jsx("tr",{children:n})}),r=({backgroundColor:l,color:o,disabled:d=!1,children:n})=>e.jsx(p,{$backgroundColor:l,$color:o,disabled:d,children:n}),a=({backgroundColor:l,color:o,disabled:d=!1,isHeader:n=!1,children:f})=>n?e.jsx(g,{$backgroundColor:l,$color:o,disabled:d,children:f}):e.jsx(x,{$backgroundColor:l,$color:o,disabled:d,$isHeader:n,children:f}),h=({backgroundColor:l,color:o,disabled:d=!1,children:n})=>e.jsx(j,{$backgroundColor:l,$color:o,disabled:d,children:e.jsx("tr",{children:n})});t.__docgenInfo={description:"",methods:[],displayName:"Table",props:{backgroundColor:{required:!1,tsType:{name:"string"},description:"Background color of the table"},disabled:{required:!1,tsType:{name:"boolean"},description:"Whether the table is disabled",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Optional className for additional styling"},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Children components (TableHeader, TableRow, TableFooter)"}}};i.__docgenInfo={description:"",methods:[],displayName:"TableHeader",props:{backgroundColor:{required:!1,tsType:{name:"string"},description:"Background color of the header"},color:{required:!1,tsType:{name:"string"},description:"Text color"},disabled:{required:!1,tsType:{name:"boolean"},description:"Whether the header is disabled",defaultValue:{value:"false",computed:!1}},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Children components (TableCell)"}}};r.__docgenInfo={description:"",methods:[],displayName:"TableRow",props:{backgroundColor:{required:!1,tsType:{name:"string"},description:"Background color of the row"},color:{required:!1,tsType:{name:"string"},description:"Text color"},disabled:{required:!1,tsType:{name:"boolean"},description:"Whether the row is disabled",defaultValue:{value:"false",computed:!1}},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Children components (TableCell)"}}};a.__docgenInfo={description:"",methods:[],displayName:"TableCell",props:{backgroundColor:{required:!1,tsType:{name:"string"},description:"Background color of the cell"},color:{required:!1,tsType:{name:"string"},description:"Text color"},disabled:{required:!1,tsType:{name:"boolean"},description:"Whether the cell is disabled",defaultValue:{value:"false",computed:!1}},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Cell content"},isHeader:{required:!1,tsType:{name:"boolean"},description:"Is this a header cell",defaultValue:{value:"false",computed:!1}}}};h.__docgenInfo={description:"",methods:[],displayName:"TableFooter",props:{backgroundColor:{required:!1,tsType:{name:"string"},description:"Background color of the footer"},color:{required:!1,tsType:{name:"string"},description:"Text color"},disabled:{required:!1,tsType:{name:"boolean"},description:"Whether the footer is disabled",defaultValue:{value:"false",computed:!1}},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Children components (TableCell)"}}};const w={title:"Components/Table",component:t,parameters:{layout:"padded"},tags:["autodocs"]},c={render:l=>e.jsxs(t,{...l,children:[e.jsxs(i,{children:[e.jsx(a,{isHeader:!0,children:"Name"}),e.jsx(a,{isHeader:!0,children:"Age"}),e.jsx(a,{isHeader:!0,children:"Email"})]}),e.jsxs("tbody",{children:[e.jsxs(r,{children:[e.jsx(a,{children:"John Doe"}),e.jsx(a,{children:"30"}),e.jsx(a,{children:"john@example.com"})]}),e.jsxs(r,{children:[e.jsx(a,{children:"Jane Smith"}),e.jsx(a,{children:"25"}),e.jsx(a,{children:"jane@example.com"})]}),e.jsxs(r,{children:[e.jsx(a,{children:"Bob Johnson"}),e.jsx(a,{children:"35"}),e.jsx(a,{children:"bob@example.com"})]})]})]}),args:{disabled:!1}},b={render:l=>e.jsxs(t,{...l,children:[e.jsxs(i,{disabled:!0,children:[e.jsx(a,{isHeader:!0,children:"Name"}),e.jsx(a,{isHeader:!0,children:"Age"}),e.jsx(a,{isHeader:!0,children:"Email"})]}),e.jsxs("tbody",{children:[e.jsxs(r,{disabled:!0,children:[e.jsx(a,{children:"John Doe"}),e.jsx(a,{children:"30"}),e.jsx(a,{children:"john@example.com"})]}),e.jsxs(r,{disabled:!0,children:[e.jsx(a,{children:"Jane Smith"}),e.jsx(a,{children:"25"}),e.jsx(a,{children:"jane@example.com"})]})]})]}),args:{disabled:!0}},T={render:l=>e.jsxs(t,{...l,children:[e.jsxs(i,{children:[e.jsx(a,{isHeader:!0,children:"Product"}),e.jsx(a,{isHeader:!0,children:"Quantity"}),e.jsx(a,{isHeader:!0,children:"Price"})]}),e.jsxs("tbody",{children:[e.jsxs(r,{children:[e.jsx(a,{children:"Widget A"}),e.jsx(a,{children:"10"}),e.jsx(a,{children:"$100"})]}),e.jsxs(r,{children:[e.jsx(a,{children:"Widget B"}),e.jsx(a,{children:"5"}),e.jsx(a,{children:"$50"})]})]}),e.jsxs(h,{children:[e.jsx(a,{isHeader:!0,children:"Total"}),e.jsx(a,{isHeader:!0,children:"15"}),e.jsx(a,{isHeader:!0,children:"$150"})]})]}),args:{disabled:!1}},u={render:l=>e.jsxs(t,{...l,children:[e.jsxs(i,{backgroundColor:"#4caf50",color:"#ffffff",children:[e.jsx(a,{isHeader:!0,children:"Name"}),e.jsx(a,{isHeader:!0,children:"Status"})]}),e.jsxs("tbody",{children:[e.jsxs(r,{backgroundColor:"#e8f5e9",children:[e.jsx(a,{children:"Project A"}),e.jsx(a,{children:"Complete"})]}),e.jsxs(r,{backgroundColor:"#fff3e0",children:[e.jsx(a,{children:"Project B"}),e.jsx(a,{children:"In Progress"})]}),e.jsxs(r,{backgroundColor:"#ffebee",children:[e.jsx(a,{children:"Project C"}),e.jsx(a,{children:"Pending"})]})]})]}),args:{disabled:!1}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: args => <Table {...args}>
      <TableHeader>
        <TableCell isHeader>Name</TableCell>
        <TableCell isHeader>Age</TableCell>
        <TableCell isHeader>Email</TableCell>
      </TableHeader>
      <tbody>
        <TableRow>
          <TableCell>John Doe</TableCell>
          <TableCell>30</TableCell>
          <TableCell>john@example.com</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Jane Smith</TableCell>
          <TableCell>25</TableCell>
          <TableCell>jane@example.com</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Bob Johnson</TableCell>
          <TableCell>35</TableCell>
          <TableCell>bob@example.com</TableCell>
        </TableRow>
      </tbody>
    </Table>,
  args: {
    disabled: false
  }
}`,...c.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: args => <Table {...args}>
      <TableHeader disabled>
        <TableCell isHeader>Name</TableCell>
        <TableCell isHeader>Age</TableCell>
        <TableCell isHeader>Email</TableCell>
      </TableHeader>
      <tbody>
        <TableRow disabled>
          <TableCell>John Doe</TableCell>
          <TableCell>30</TableCell>
          <TableCell>john@example.com</TableCell>
        </TableRow>
        <TableRow disabled>
          <TableCell>Jane Smith</TableCell>
          <TableCell>25</TableCell>
          <TableCell>jane@example.com</TableCell>
        </TableRow>
      </tbody>
    </Table>,
  args: {
    disabled: true
  }
}`,...b.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: args => <Table {...args}>
      <TableHeader>
        <TableCell isHeader>Product</TableCell>
        <TableCell isHeader>Quantity</TableCell>
        <TableCell isHeader>Price</TableCell>
      </TableHeader>
      <tbody>
        <TableRow>
          <TableCell>Widget A</TableCell>
          <TableCell>10</TableCell>
          <TableCell>$100</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Widget B</TableCell>
          <TableCell>5</TableCell>
          <TableCell>$50</TableCell>
        </TableRow>
      </tbody>
      <TableFooter>
        <TableCell isHeader>Total</TableCell>
        <TableCell isHeader>15</TableCell>
        <TableCell isHeader>$150</TableCell>
      </TableFooter>
    </Table>,
  args: {
    disabled: false
  }
}`,...T.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: args => <Table {...args}>
      <TableHeader backgroundColor="#4caf50" color="#ffffff">
        <TableCell isHeader>Name</TableCell>
        <TableCell isHeader>Status</TableCell>
      </TableHeader>
      <tbody>
        <TableRow backgroundColor="#e8f5e9">
          <TableCell>Project A</TableCell>
          <TableCell>Complete</TableCell>
        </TableRow>
        <TableRow backgroundColor="#fff3e0">
          <TableCell>Project B</TableCell>
          <TableCell>In Progress</TableCell>
        </TableRow>
        <TableRow backgroundColor="#ffebee">
          <TableCell>Project C</TableCell>
          <TableCell>Pending</TableCell>
        </TableRow>
      </tbody>
    </Table>,
  args: {
    disabled: false
  }
}`,...u.parameters?.docs?.source}}};const k=["Default","Disabled","WithFooter","ColoredRows"];export{u as ColoredRows,c as Default,b as Disabled,T as WithFooter,k as __namedExportsOrder,w as default};
