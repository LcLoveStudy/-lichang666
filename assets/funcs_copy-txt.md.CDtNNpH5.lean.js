import{d as k,s as n,c as e,a1 as E,a2 as v,j as h,t as r,a3 as l,o as y,_ as g}from"./chunks/framework.BVmJasMg.js";const o=i=>new Promise((a,s)=>{try{navigator.clipboard.writeText(i),a(1)}catch{s("复制失败")}}),c=l(`<h1 id="copytxt" tabindex="-1" data-v-d76a619d>copyTxt <a class="header-anchor" href="#copytxt" aria-label="Permalink to &quot;copyTxt&quot;" data-v-d76a619d>​</a></h1><p data-v-d76a619d>将指定文本复制到剪贴板</p><h3 id="基础用法" tabindex="-1" data-v-d76a619d>基础用法 <a class="header-anchor" href="#基础用法" aria-label="Permalink to &quot;基础用法&quot;" data-v-d76a619d>​</a></h3><h4 id="参数" tabindex="-1" data-v-d76a619d>参数 <a class="header-anchor" href="#参数" aria-label="Permalink to &quot;参数&quot;" data-v-d76a619d>​</a></h4><p data-v-d76a619d>仅仅接受一个<code data-v-d76a619d>string</code>要复制的文本</p><h4 id="返回值" tabindex="-1" data-v-d76a619d>返回值 <a class="header-anchor" href="#返回值" aria-label="Permalink to &quot;返回值&quot;" data-v-d76a619d>​</a></h4><p data-v-d76a619d>返回一个<code data-v-d76a619d>Promise</code>对象</p><div class="language-ts vp-adaptive-theme" data-v-d76a619d><button title="Copy Code" class="copy" data-v-d76a619d></button><span class="lang" data-v-d76a619d>ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" data-v-d76a619d><code data-v-d76a619d><span class="line" data-v-d76a619d><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-d76a619d>import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-d76a619d> { copyTxt } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-d76a619d>from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-d76a619d> &#39;@lichang666/utils&#39;</span></span>
<span class="line" data-v-d76a619d></span>
<span class="line" data-v-d76a619d><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-d76a619d>copyTxt</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-d76a619d>(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-d76a619d>&#39;hello world&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-d76a619d>) </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;" data-v-d76a619d>// 复制文本</span></span></code></pre></div><h3 id="demo" tabindex="-1" data-v-d76a619d>demo <a class="header-anchor" href="#demo" aria-label="Permalink to &quot;demo&quot;" data-v-d76a619d>​</a></h3>`,9),F=l(`<div class="language-vue vp-adaptive-theme" data-v-d76a619d><button title="Copy Code" class="copy" data-v-d76a619d></button><span class="lang" data-v-d76a619d>vue</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" data-v-d76a619d><code data-v-d76a619d><span class="line" data-v-d76a619d><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-d76a619d>&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;" data-v-d76a619d>template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-d76a619d>&gt;</span></span>
<span class="line" data-v-d76a619d><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-d76a619d>  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;" data-v-d76a619d>input</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-d76a619d> v-model</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-d76a619d>=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-d76a619d>&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-d76a619d>inputValue</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-d76a619d>&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-d76a619d> placeholder</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-d76a619d>=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-d76a619d>&quot;请输入要复制的文本&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-d76a619d> /&gt;</span></span>
<span class="line" data-v-d76a619d><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-d76a619d>  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;" data-v-d76a619d>button</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-d76a619d> @</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-d76a619d>click</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-d76a619d>=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-d76a619d>&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-d76a619d>copyHandler</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-d76a619d>&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-d76a619d>&gt;{{ copyStatus }}&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;" data-v-d76a619d>button</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-d76a619d>&gt;</span></span>
<span class="line" data-v-d76a619d><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-d76a619d>&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;" data-v-d76a619d>template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-d76a619d>&gt;</span></span>
<span class="line" data-v-d76a619d></span>
<span class="line" data-v-d76a619d><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-d76a619d>&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;" data-v-d76a619d>script</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-d76a619d> setup</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-d76a619d> lang</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-d76a619d>=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-d76a619d>&quot;ts&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-d76a619d>&gt;</span></span>
<span class="line" data-v-d76a619d><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-d76a619d>  import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-d76a619d> { copyTxt } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-d76a619d>from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-d76a619d> &#39;@lichang666/utils&#39;</span></span>
<span class="line" data-v-d76a619d><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-d76a619d>  const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-d76a619d> copyStatus</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-d76a619d> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-d76a619d> ref</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-d76a619d>(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-d76a619d>&#39;复制&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-d76a619d>)</span></span>
<span class="line" data-v-d76a619d><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-d76a619d>  const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-d76a619d> inputValue</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-d76a619d> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-d76a619d> ref</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-d76a619d>(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-d76a619d>&#39;&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-d76a619d>)</span></span>
<span class="line" data-v-d76a619d><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-d76a619d>  const</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-d76a619d> copyHandler</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-d76a619d> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-d76a619d> () </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-d76a619d>=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-d76a619d> {</span></span>
<span class="line" data-v-d76a619d><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-d76a619d>    if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-d76a619d> (inputValue.value </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-d76a619d>===</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-d76a619d> &#39;&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-d76a619d>) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-d76a619d>return</span></span>
<span class="line" data-v-d76a619d><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-d76a619d>    copyTxt</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-d76a619d>(inputValue.value)</span></span>
<span class="line" data-v-d76a619d><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-d76a619d>      .</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-d76a619d>then</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-d76a619d>(() </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-d76a619d>=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-d76a619d> {</span></span>
<span class="line" data-v-d76a619d><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-d76a619d>        copyStatus.value </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-d76a619d>=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-d76a619d> &#39;已复制&#39;</span></span>
<span class="line" data-v-d76a619d><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-d76a619d>      })</span></span>
<span class="line" data-v-d76a619d><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-d76a619d>      .</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-d76a619d>catch</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-d76a619d>(() </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-d76a619d>=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-d76a619d> {</span></span>
<span class="line" data-v-d76a619d><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-d76a619d>        copyStatus.value </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-d76a619d>=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-d76a619d> &#39;复制失败&#39;</span></span>
<span class="line" data-v-d76a619d><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-d76a619d>      })</span></span>
<span class="line" data-v-d76a619d><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-d76a619d>      .</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-d76a619d>finally</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-d76a619d>(() </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-d76a619d>=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-d76a619d> {</span></span>
<span class="line" data-v-d76a619d><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-d76a619d>        setTimeout</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-d76a619d>(() </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-d76a619d>=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-d76a619d> {</span></span>
<span class="line" data-v-d76a619d><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-d76a619d>          copyStatus.value </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-d76a619d>=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-d76a619d> &#39;复制&#39;</span></span>
<span class="line" data-v-d76a619d><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-d76a619d>        }, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-d76a619d>1000</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-d76a619d>)</span></span>
<span class="line" data-v-d76a619d><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-d76a619d>      })</span></span>
<span class="line" data-v-d76a619d><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-d76a619d>  }</span></span>
<span class="line" data-v-d76a619d><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-d76a619d>&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;" data-v-d76a619d>script</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-d76a619d>&gt;</span></span></code></pre></div>`,1),D=JSON.parse('{"title":"copyTxt","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"funcs/copy-txt.md","filePath":"funcs/copy-txt.md"}'),u={name:"funcs/copy-txt.md"},C=k({...u,setup(i){const a=n("复制"),s=n(""),d=()=>{s.value!==""&&o(s.value).then(()=>{a.value="已复制"}).catch(()=>{a.value="复制失败"}).finally(()=>{setTimeout(()=>{a.value="复制"},1e3)})};return(m,t)=>(y(),e("div",null,[c,E(h("input",{"onUpdate:modelValue":t[0]||(t[0]=p=>s.value=p),class:"copy_demo_input",placeholder:"请输入要复制的文本"},null,512),[[v,s.value]]),h("button",{class:"base-btn",onClick:d},r(a.value),1),F]))}}),A=g(C,[["__scopeId","data-v-d76a619d"]]);export{D as __pageData,A as default};
