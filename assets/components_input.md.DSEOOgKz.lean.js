import{L as f}from"./chunks/lc-input.C-1fJlhx.js";import{d as C,a5 as L,a3 as hs,a6 as ks,s as F,h as p,o as e,c as d,r as _,e as E,j as r,b as m,J as A,k as t,P as rs,F as ds,t as os,a7 as N,a8 as j,I as n,w as g,a as O,a4 as B}from"./chunks/framework.j5SZ8Edx.js";import{_ as v,L as Es,i as x}from"./chunks/search.vue_vue_type_script_setup_true_lang.D71y2P8T.js";const U="\\ud800-\\udfff",cs="\\u0300-\\u036f",us="\\ufe20-\\ufe2f",gs="\\u20d0-\\u20ff",ys="\\u1ab0-\\u1aff",Fs="\\u1dc0-\\u1dff",fs=cs+us+gs+ys+Fs,ms="\\ufe0e\\ufe0f",vs=`[${U}]`,q=`[${fs}]`,D="\\ud83c[\\udffb-\\udfff]",Cs=`(?:${q}|${D})`,J=`[^${U}]`,Y="(?:\\ud83c[\\udde6-\\uddff]){2}",T="[\\ud800-\\udbff][\\udc00-\\udfff]",Bs="\\u200d",W=`${Cs}?`,Z=`[${ms}]?`,bs=`(?:${Bs}(?:${[J,Y,T].join("|")})${Z+W})*`,_s=Z+W+bs,ws=`${J}${q}?`,As=`(?:${[ws,q,Y,T,vs].join("|")})`,H=RegExp(`${D}(?=${D})|${As+_s}`,"g"),Ds=o=>{let i=H.lastIndex=0;for(;H.test(o);)++i;return i},xs={placeholder:{type:String,default:"请输入内容"},type:{type:String,default:"text"},search:{type:Boolean,default:!1},suffixIcon:{type:Object},prefixIcon:{type:Object},loading:{type:Boolean,default:!1},clearable:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},showPassword:{type:Boolean,default:!0},readonly:{type:Boolean,default:!1},maxlength:{type:[Number,String],default:void 0},showCount:{type:Boolean,default:!1},resize:{type:String,default:"vertical"},rows:{type:Number,default:2},cols:{type:Number,default:20},autofocus:{type:Boolean,default:!1},autocomplete:{type:String,default:!1}},qs={key:0,class:"lc-input__repend"},$s={class:"lc-input__wrapper"},Vs={key:0,class:"lc-input__prefix"},Is={key:1,class:"lc-input__suffix"},Ss={key:0,class:"lc-input__count"},Ms={key:1,class:"lc-input__append"},zs=C({__name:"input",props:L(xs,{modelValue:{type:String,required:!0},modelModifiers:{}}),emits:L(["input","blur","focus","clear","search"],["update:modelValue"]),setup(o,{expose:i,emit:u}){const s=o,y=u,l=hs(),h=ks(o,"modelValue"),k=F(),G=()=>{k.value&&k.value.blur()},$=()=>{k.value&&k.value.focus()},K=p(()=>s.type!=="textarea"?"input":"textarea"),Q=p(()=>S.value||I.value||z.value||P.value||s.suffixIcon||l.suffix),X=p(()=>s.prefixIcon||l.prefix),V=p(()=>s.type==="text"&&s.search&&!l.append),ss=p(()=>V.value||l.append),is=p(()=>l.repend),w=p(()=>s.disabled?"#ccc":"#666"),I=p(()=>s.clearable&&!s.disabled&&!s.readonly&&s.type==="text"),S=p(()=>s.showCount&&s.maxlength&&!s.clearable&&s.type!=="password"),as=p(()=>`${Ds(h.value)} / ${s.maxlength}`),ts=p(()=>s.type==="textarea"?s.resize:"none"),b=F(!1),M=()=>{!k.value||s.disabled||s.readonly||(k.value.type=k.value.type==="password"?"text":"password",b.value=!b.value)},z=p(()=>s.type==="password"&&b.value&&s.showPassword),P=p(()=>s.type==="password"&&!b.value&&s.showPassword),R=()=>{k.value&&(h.value=k.value.value,y("input",h.value))},ns=()=>{!k.value||s.disabled||s.readonly||(k.value.value="",R(),y("clear"))},ls=a=>y("blur",a),es=a=>y("focus",a),ps=()=>y("search");return i({blur:G,focus:$}),(a,ni)=>(e(),d("div",{class:"lc-input",onClick:$},[is.value?(e(),d("div",qs,[_(a.$slots,"repend")])):E("",!0),r("div",$s,[X.value?(e(),d("div",Vs,[a.prefixIcon?(e(),m(A(a.prefixIcon),{key:0})):t(l).prefix?_(a.$slots,"prefix",{key:1}):E("",!0)])):E("",!0),(e(),m(A(K.value),{ref_key:"inputRef",ref:k,style:rs({resize:ts.value}),class:"lc-input__inner",value:h.value,placeholder:a.placeholder,type:a.type,disabled:a.disabled||a.loading,readonly:a.readonly,autofocus:a.autofocus,autocomplete:a.autocomplete,maxlength:a.maxlength,rows:s.type==="textarea"?a.rows:void 0,cols:s.type==="textarea"?a.cols:void 0,onInput:R,onBlur:ls,onFocus:es},null,40,["style","value","placeholder","type","disabled","readonly","autofocus","autocomplete","maxlength","rows","cols"])),Q.value?(e(),d("div",Is,[a.suffixIcon?(e(),m(A(a.suffixIcon),{key:0})):t(l).suffix?_(a.$slots,"suffix",{key:1}):(e(),d(ds,{key:2},[S.value?(e(),d("div",Ss,os(as.value),1)):E("",!0),I.value?(e(),m(t(Ls),{key:1,class:"lc-input__clear",color:w.value,onClick:ns},null,8,["color"])):E("",!0),N(n(t(Os),{class:"lc-input__pass",onClick:M,color:w.value},null,8,["color"]),[[j,z.value]]),N(n(t(Ws),{class:"lc-input__pass",onClick:M,color:w.value},null,8,["color"]),[[j,P.value]])],64))])):E("",!0)]),ss.value?(e(),d("div",Ms,[V.value?(e(),m(t(Es),{key:0,disabled:a.disabled,loading:a.loading,onClick:ps,icon:t(v)},null,8,["disabled","loading","icon"])):E("",!0),_(a.$slots,"append")])):E("",!0)]))}}),c=zs,Ps=["width","height"],Rs=["fill"],Ls=C({__name:"close-full",props:x,setup(o){return(i,u)=>(e(),d("svg",{t:"1724666590026",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg",class:"lc-icon",width:i.size,height:i.size,preserveAspectRatio:"xMidYMid meet"},[r("path",{d:"M1024 512c0 282.7776-229.2224 512-512 512S0 794.7776 0 512 229.2224 0 512 0s512 229.2224 512 512z m-372.736-194.9184L512 456.3456l-139.264-139.264A39.424 39.424 0 0 0 317.0816 372.736L456.3456 512l-139.264 139.264a39.424 39.424 0 1 0 55.6544 55.6544l139.264-139.264 139.264 139.264a39.424 39.424 0 1 0 55.6544-55.6544L567.6544 512l139.264-139.264a39.424 39.424 0 0 0-55.6544-55.6544z","p-id":"4266",fill:i.color},null,8,Rs)],8,Ps))}}),Ns=["width","height"],js=["stroke"],Hs=["stroke"],Os=C({__name:"view",props:x,setup(o){return(i,u)=>(e(),d("svg",{t:"1724666590026",viewBox:"0 0 16 16",version:"1.1",xmlns:"http://www.w3.org/2000/svg",class:"lc-icon",width:i.size,height:i.size,preserveAspectRatio:"xMidYMid meet"},[r("ellipse",{cx:"8",cy:"8",rx:"7",ry:"5",stroke:i.color,"stroke-width":"1",fill:"none"},null,8,js),r("circle",{cx:"8",cy:"8",r:"2.5",stroke:i.color,"stroke-width":"1",fill:"none"},null,8,Hs)],8,Ns))}}),Us=["width","height"],Js=["stroke"],Ys=["stroke"],Ts=["stroke"],Ws=C({__name:"hide",props:x,setup(o){return(i,u)=>(e(),d("svg",{t:"1724666590026",viewBox:"0 0 16 16",version:"1.1",xmlns:"http://www.w3.org/2000/svg",class:"lc-icon",width:i.size,height:i.size,preserveAspectRatio:"xMidYMid meet"},[r("ellipse",{cx:"8",cy:"8",rx:"7",ry:"5",stroke:i.color,"stroke-width":"1",fill:"none"},null,8,Js),r("circle",{cx:"8",cy:"8",r:"2.5",stroke:i.color,"stroke-width":"1",fill:"none"},null,8,Ys),r("path",{d:"M14 2 L2 14",stroke:i.color,"stroke-width":"1",fill:"none"},null,8,Ts)],8,Us))}}),Zs=r("h1",{id:"input-输入框",tabindex:"-1"},[O("Input 输入框 "),r("a",{class:"header-anchor",href:"#input-输入框","aria-label":'Permalink to "Input 输入框"'},"​")],-1),Gs=r("p",null,"通过鼠标或键盘输入字符",-1),Ks=r("h2",{id:"基本用法",tabindex:"-1"},[O("基本用法 "),r("a",{class:"header-anchor",href:"#基本用法","aria-label":'Permalink to "基本用法"'},"​")],-1),Qs=B(`<div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">lc-input</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> v-model</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">baseValue</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> setup</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> lang</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;ts&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { LcInput } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;@lichang666/design-vue&#39;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> baseValue</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ref</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><h2 id="禁用状态" tabindex="-1">禁用状态 <a class="header-anchor" href="#禁用状态" aria-label="Permalink to &quot;禁用状态&quot;">​</a></h2><p>通过 <code>disabled</code> 属性指定是否禁用 input 组件</p>`,3),Xs=B(`<div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">lc-input</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> v-model</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">baseValue</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> disabled</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> setup</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> lang</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;ts&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { LcInput } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;@lichang666/design-vue&#39;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> baseValue</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ref</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><h2 id="一键清空" tabindex="-1">一键清空 <a class="header-anchor" href="#一键清空" aria-label="Permalink to &quot;一键清空&quot;">​</a></h2><p>使用 <code>clearable</code> 属性即可得到一个可一键清空的输入框</p>`,3),si=B(`<div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">lc-input</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> v-model</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">clearValue</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> clearable</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> setup</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> lang</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;ts&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { LcInput } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;@lichang666/design-vue&#39;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> clearValue</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ref</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><h2 id="密码框" tabindex="-1">密码框 <a class="header-anchor" href="#密码框" aria-label="Permalink to &quot;密码框&quot;">​</a></h2><p>使用 <code>show-password</code> 属性即可得到一个可切换显示隐藏的密码框,默认开启切换</p>`,3),ii=B(`<div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">lc-input</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> v-model</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">password</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> type</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;password&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> setup</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> lang</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;ts&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { LcInput } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;@lichang666/design-vue&#39;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> password</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ref</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><h2 id="带图标的输入框" tabindex="-1">带图标的输入框 <a class="header-anchor" href="#带图标的输入框" aria-label="Permalink to &quot;带图标的输入框&quot;">​</a></h2><p>带有图标标记输入类型</p><p>要在输入框中添加图标，你可以简单地使用 <code>prefix-icon</code> 和 <code>suffix-icon</code> 属性。 另外， <code>prefix</code> 和 <code>suffix</code> 命名的插槽也能正常工作。</p>`,4),ai=B(`<div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">lc-input</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> :</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">prefix-icon</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">SearchIcon</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">lc-input</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> v-model</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">iconValue</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> :</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">suffix-icon</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">SearchIcon</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">lc-input</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> v-model</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">iconValue</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> #</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">prefix</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">SearchIcon</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">lc-input</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">lc-input</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> v-model</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">iconValue</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> #</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">suffix</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">SearchIcon</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">lc-input</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> setup</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> lang</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;ts&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { LcInput, SearchIcon } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;@lichang666/design-vue&#39;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> iconValue</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ref</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div>`,1),hi=JSON.parse('{"title":"Input 输入框","description":"","frontmatter":{},"headers":[],"relativePath":"components/input.md","filePath":"components/input.md"}'),ti={name:"components/input.md"},ki=C({...ti,setup(o){const i=F(""),u=F(""),s=F("");return F(""),(y,l)=>(e(),d("div",null,[Zs,Gs,Ks,n(t(f),{style:{width:"100%"}},{default:g(()=>[n(t(c),{modelValue:i.value,"onUpdate:modelValue":l[0]||(l[0]=h=>i.value=h)},null,8,["modelValue"])]),_:1}),Qs,n(t(f),{style:{width:"100%"}},{default:g(()=>[n(t(c),{modelValue:i.value,"onUpdate:modelValue":l[1]||(l[1]=h=>i.value=h),disabled:""},null,8,["modelValue"])]),_:1}),Xs,n(t(f),{style:{width:"100%"}},{default:g(()=>[n(t(c),{modelValue:u.value,"onUpdate:modelValue":l[2]||(l[2]=h=>u.value=h),clearable:""},null,8,["modelValue"])]),_:1}),si,n(t(f),{style:{width:"100%"}},{default:g(()=>[n(t(c),{modelValue:s.value,"onUpdate:modelValue":l[3]||(l[3]=h=>s.value=h),type:"password"},null,8,["modelValue"])]),_:1}),ii,n(t(f),{style:{width:"100%",display:"flex","flex-wrap":"wrap","justify-content":"space-around"}},{default:g(()=>[n(t(c),{"prefix-icon":t(v)},null,8,["prefix-icon"]),n(t(c),{"suffix-icon":t(v)},null,8,["suffix-icon"]),n(t(c),{style:{"margin-top":"20px"}},{prefix:g(()=>[n(t(v))]),_:1}),n(t(c),{style:{"margin-top":"20px"}},{suffix:g(()=>[n(t(v))]),_:1})]),_:1}),ai]))}});export{hi as __pageData,ki as default};
