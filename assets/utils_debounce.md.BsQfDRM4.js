import{d as k,s as h,c,a2 as r,a3 as v,j as d,k as e,t as E,a1 as p,o,_ as g}from"./chunks/framework.CByMklhK.js";const u=(n,s=500)=>{let a=null;return()=>{a&&clearTimeout(a),a=setTimeout(n,s)}},y=p(`<h1 id="debounce" tabindex="-1" data-v-3c882048>debounce <a class="header-anchor" href="#debounce" aria-label="Permalink to &quot;debounce&quot;" data-v-3c882048>​</a></h1><p data-v-3c882048>防抖函数</p><h3 id="基础用法" tabindex="-1" data-v-3c882048>基础用法 <a class="header-anchor" href="#基础用法" aria-label="Permalink to &quot;基础用法&quot;" data-v-3c882048>​</a></h3><h4 id="参数" tabindex="-1" data-v-3c882048>参数 <a class="header-anchor" href="#参数" aria-label="Permalink to &quot;参数&quot;" data-v-3c882048>​</a></h4><ol data-v-3c882048><li data-v-3c882048><code data-v-3c882048>func</code>: 需要防抖的函数</li><li data-v-3c882048><code data-v-3c882048>delay</code>: 延迟时间，单位为毫秒</li></ol><div class="language-ts vp-adaptive-theme" data-v-3c882048><button title="Copy Code" class="copy" data-v-3c882048></button><span class="lang" data-v-3c882048>ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" data-v-3c882048><code data-v-3c882048><span class="line" data-v-3c882048><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-3c882048>import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-3c882048> { debounce } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-3c882048>from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-3c882048> &#39;@lichang666/utils&#39;</span></span>
<span class="line" data-v-3c882048></span>
<span class="line" data-v-3c882048><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-3c882048>const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-3c882048> inputHandler</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-3c882048> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-3c882048> debounce</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-3c882048>(() </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-3c882048>=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-3c882048> {</span></span>
<span class="line" data-v-3c882048><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;" data-v-3c882048>  //do some things</span></span>
<span class="line" data-v-3c882048><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-3c882048>}, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-3c882048>1000</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-3c882048>)</span></span></code></pre></div><h3 id="demo" tabindex="-1" data-v-3c882048>demo <a class="header-anchor" href="#demo" aria-label="Permalink to &quot;demo&quot;" data-v-3c882048>​</a></h3>`,7),F=p(`<div class="language-vue vp-adaptive-theme" data-v-3c882048><button title="Copy Code" class="copy" data-v-3c882048></button><span class="lang" data-v-3c882048>vue</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" data-v-3c882048><code data-v-3c882048><span class="line" data-v-3c882048><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-3c882048>&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;" data-v-3c882048>input</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-3c882048> v-model</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-3c882048>=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-3c882048>&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-3c882048>inputValue</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-3c882048>&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-3c882048> @</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-3c882048>input</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-3c882048>=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-3c882048>&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-3c882048>inputHandler</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-3c882048>&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-3c882048> /&gt;</span></span>
<span class="line" data-v-3c882048><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-3c882048>&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;" data-v-3c882048>span</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-3c882048>&gt;输入值:{{ showValue }}&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;" data-v-3c882048>span</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-3c882048>&gt;</span></span>
<span class="line" data-v-3c882048></span>
<span class="line" data-v-3c882048><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-3c882048>&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;" data-v-3c882048>script</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-3c882048> lang</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-3c882048>=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-3c882048>&quot;ts&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-3c882048> setup</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-3c882048>&gt;</span></span>
<span class="line" data-v-3c882048><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-3c882048>  import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-3c882048> { debounce } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-3c882048>from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-3c882048> &#39;@lichang666/utils&#39;</span></span>
<span class="line" data-v-3c882048><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-3c882048>  import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-3c882048> { ref } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-3c882048>from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-3c882048> &#39;vue&#39;</span></span>
<span class="line" data-v-3c882048><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-3c882048>  const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-3c882048> inputValue</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-3c882048> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-3c882048> ref</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-3c882048>(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-3c882048>&#39;&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-3c882048>)</span></span>
<span class="line" data-v-3c882048><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-3c882048>  const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-3c882048> showValue</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-3c882048> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-3c882048> ref</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-3c882048>(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-3c882048>&#39;&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-3c882048>)</span></span>
<span class="line" data-v-3c882048><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-3c882048>  const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-3c882048> inputHandler</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-3c882048> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-3c882048> debounce</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-3c882048>(() </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-3c882048>=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-3c882048> {</span></span>
<span class="line" data-v-3c882048><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-3c882048>    showValue.value </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-3c882048>=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-3c882048> inputValue.value</span></span>
<span class="line" data-v-3c882048><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-3c882048>  }, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-3c882048>1000</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-3c882048>)</span></span>
<span class="line" data-v-3c882048><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-3c882048>&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;" data-v-3c882048>script</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-3c882048>&gt;</span></span></code></pre></div>`,1),D=JSON.parse('{"title":"debounce","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"utils/debounce.md","filePath":"utils/debounce.md"}'),m={name:"utils/debounce.md"},C=k({...m,setup(n){const s=h(""),a=h(""),l=u(()=>{a.value=s.value},1e3);return(b,i)=>(o(),c("div",null,[y,r(d("input",{"onUpdate:modelValue":i[0]||(i[0]=t=>s.value=t),onInput:i[1]||(i[1]=(...t)=>e(l)&&e(l)(...t)),placeholder:"输入1秒后才会显示",class:"copy_demo_input"},null,544),[[v,s.value]]),d("span",null,"输入值:"+E(a.value),1),F]))}}),A=g(C,[["__scopeId","data-v-3c882048"]]);export{D as __pageData,A as default};
