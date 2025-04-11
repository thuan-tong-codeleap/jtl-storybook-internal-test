import{g as E,R as x}from"./index-DRjF_FHU.js";var P={exports:{}},q="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",z=q,I=z;function R(){}function C(){}C.resetWarningCache=R;var N=function(){function e(c,u,i,V,W,O){if(O!==I){var m=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw m.name="Invariant Violation",m}}e.isRequired=e;function r(){return e}var o={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:r,element:e,elementType:e,instanceOf:r,node:e,objectOf:r,oneOf:r,oneOfType:r,shape:r,exact:r,checkPropTypes:C,resetWarningCache:R};return o.PropTypes=o,o};P.exports=N();var F=P.exports;const t=E(F),l=({primary:e,backgroundColor:r,size:o,label:c,...u})=>{const i=e?"storybook-button--primary":"storybook-button--secondary";return x.createElement("button",{type:"button",className:["storybook-button",`storybook-button--${o}`,i].join(" "),style:r&&{backgroundColor:r},...u},c)};l.propTypes={primary:t.bool,backgroundColor:t.string,size:t.oneOf(["small","medium","large"]),label:t.string.isRequired,onClick:t.func};l.defaultProps={backgroundColor:null,primary:!1,size:"medium",onClick:void 0};l.__docgenInfo={description:"Basic Button component",methods:[],displayName:"Button",props:{backgroundColor:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"string"},required:!1},primary:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},size:{defaultValue:{value:"'medium'",computed:!1},description:"",type:{name:"enum",value:[{value:"'small'",computed:!1},{value:"'medium'",computed:!1},{value:"'large'",computed:!1}]},required:!1},onClick:{defaultValue:{value:"undefined",computed:!0},description:"",type:{name:"func"},required:!1},label:{description:"",type:{name:"string"},required:!0}}};const L={title:"Example/Button-Internal",component:l,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{backgroundColor:{control:"color"}}},a={args:{primary:!0,label:"Button"}},s={args:{label:"Button"}},n={args:{size:"large",label:"Button"}},p={args:{size:"small",label:"Button"}};var d,y,f;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    primary: true,
    label: 'Button'
  }
}`,...(f=(y=a.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};var g,b,T;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    label: 'Button'
  }
}`,...(T=(b=s.parameters)==null?void 0:b.docs)==null?void 0:T.source}}};var v,h,S;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    size: 'large',
    label: 'Button'
  }
}`,...(S=(h=n.parameters)==null?void 0:h.docs)==null?void 0:S.source}}};var B,_,k;p.parameters={...p.parameters,docs:{...(B=p.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    size: 'small',
    label: 'Button'
  }
}`,...(k=(_=p.parameters)==null?void 0:_.docs)==null?void 0:k.source}}};const w=["Primary","Secondary","Large","Small"];export{n as Large,a as Primary,s as Secondary,p as Small,w as __namedExportsOrder,L as default};
