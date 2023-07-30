/* eslint-disable no-irregular-whitespace */
export default `<h2 style="background:var(--background); color: var(--font-color); margin-bottom: 10px;">
<span style="color: var(--font-color); background:(--background); ">前言</span>
</h2>
<p style="background:var(--background); color: var(--font-color)">
<span style="line-height: 28px; color: var(--font-color)"
  >如何利用好本工具，轻松制作简历？</span
>
<a target="null" href="http://ai.bggg.tech/resume">此外，你也可以使用AI工具，免费获得简历修改建议。</a>
</p>

<h2 style="background:var(--background); color: var(--font-color); margin: 20px 0 10px 0;">
<span style="color: var(--font-color); background:(--background)">1. 选择模板</span>
</h2>
<p style="background:var(--background); color: var(--font-color)">
<span style="line-height: 28px"
  ><span style="color: var(--font-color); background:(--background)">网站自带多个模板，点击“简历制作”即可挑选，挑选合适的。后续会补充数据分析等不同领域的简历模板。
    挑选好后，就点“使用模板“，进入编辑页面
  </span
  >
</p>


<h2 style="background:var(--background); color: var(--font-color); margin: 20px 0 10px 0;">
<span style="color: var(--font-color); background:(--background)">2. 修改内容</span>
</h2>
<p style="background:var(--background); color: var(--font-color)">
<span style="line-height: 28px"
  ><span style="color: var(--font-color); background:(--background)">编辑区域分成左右两部分，左边是编辑区域，右边是效果预览。把你想改的内容，在左边对应文字部分做替换编辑即可。在右边能实时看到效果。
  </span
  >
</p>


<h2 style="background:var(--background); color: var(--font-color); margin: 20px 0 10px 0;">
<span style="color: var(--font-color); background:(--background)">3. 导出简历</span>
</h2>
<p style="background:var(--background); color: var(--font-color)">
<span style="line-height: 28px"
  ><span style="color: var(--font-color); background:(--background)">完成编辑后，在网页右上角，点击“打印机导出PDF”，即可导出PDF简历。如果你想后续再回来修改，可以点击导航栏中“导入/导出”的“导出MD”，把编辑文档导出，下次要用的时候直接导入MD即可。
  </span
  >
</p>



<h2 style="background:var(--background); color: var(--font-color); margin: 20px 0 10px 0;">
<span style="color: var(--font-color); background:(--background)">4. 进阶使用</span>
</h2>
<p style="background:var(--background); color: var(--font-color)">
<span style="line-height: 28px"
  ><span style="color: var(--font-color); background:(--background)">本工具是基于Markdown语法，生成简历。如果想自定义更多模板，可以自行搜索学习标准的Markdown语法。同时，参考下面的高级Markdown语法的使用。
  </span
  >
</p>



<h2 style="background:var(--background); color: var(--font-color); margin: 20px 0 10px 0;">
<span style="color: var(--font-color); background:(--background)">5. 弹性布局</span>
</h2>
<p style="background:var(--background); color: var(--font-color)">
<span style="line-height: 28px"
  ><span style="color: var(--font-color); background:(--background)">它会被渲染为带</span
  ><code
    style="
      font-family: 'Microsoft YaHei Mono', Menlo, Monaco, Consolas, 'Courier New', monospace;
      color: rgb(229, 61, 14);
    "
    >flex-layout</code
  ><span style="color: var(--font-color); background:(--background)">类名的弹性盒，而在</span
  ><code
    style="
      font-family: 'Microsoft YaHei Mono', Menlo, Monaco, Consolas, 'Courier New', monospace;
      color: rgb(229, 61, 14);
    "
    >:::</code
  ><span style="color: var(--font-color); background:(--background)"
    >中间的内容将会被渲染为一个弹性元素, 你可以使用它来构造多列布局，如下.</span
  ></span
>
</p>
<pre
lang=""
theme="dark"
class="tb-pre"
><div style="width:2.5em" class="tb-code-line-number-bg"></div><div class="tb-code-content"><div class="tb-code-line">::: start</div><div class="tb-code-line">content...</div><div class="tb-code-line">:::</div><div class="tb-code-line">content...</div><div class="tb-code-line">:::</div><div class="tb-code-line">content...</div><div class="tb-code-line">::: end</div></div><span class="tb-pre-lang"></span></pre>
<p style="background:var(--background); color: var(--font-color)">
<span style="line-height: 28px"
  ><span style="color: var(--font-color); background:(--background)">上面的&nbsp;</span
  ><code
    style="
      font-family: 'Microsoft YaHei Mono', Menlo, Monaco, Consolas, 'Courier New', monospace;
      color: rgb(229, 61, 14);
    "
    >Markdown</code
  ><span style="color: var(--font-color); background:(--background)">&nbsp;语法将会被转化为下面的&nbsp;</span
  ><code
    style="
      font-family: 'Microsoft YaHei Mono', Menlo, Monaco, Consolas, 'Courier New', monospace;
      color: rgb(229, 61, 14);
    "
    >HTML</code
  ><span style="color: var(--font-color); background:(--background)">&nbsp;代码.</span></span
>
</p>
<pre
lang="HTML"
theme="dark"
class="tb-pre"
><div style="width:2.5em" class="tb-code-line-number-bg"></div><div class="tb-code-content"><div class="tb-code-line">&lt;<span class="tb-hl-tag">div&nbsp;</span><span class="tb-hl-attr-name">class</span>="<span class="tb-hl-attr-value">flex-layout</span>"&gt;</div><div class="tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span class="tb-hl-tag">div&nbsp;</span><span class="tb-hl-attr-name">class</span>="<span class="tb-hl-attr-value">flex-layout-item</span>"&gt;content...&lt;/<span class="tb-hl-tag">div</span>&gt;</div><div class="tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span class="tb-hl-tag">div&nbsp;</span><span class="tb-hl-attr-name">class</span>="<span class="tb-hl-attr-value">flex-layout-item</span>"&gt;content...&lt;/<span class="tb-hl-tag">div</span>&gt;</div><div class="tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span class="tb-hl-tag">div&nbsp;</span><span class="tb-hl-attr-name">class</span>="<span class="tb-hl-attr-value">flex-layout-item</span>"&gt;content...&lt;/<span class="tb-hl-tag">div</span>&gt;</div><div class="tb-code-line">&lt;<span class="tb-hl-tag">div</span>&gt;</div></div><span class="tb-pre-lang">HTML</span></pre>


<h2 style="background:var(--background); color: var(--font-color); margin: 20px 0 10px 0;">
<span style="color: var(--font-color); background:(--background)">6. 个人信息布局</span>
</h2>
<p style="background:var(--background); color: var(--font-color)">
<span style="line-height: 28px"
  ><span style="color: var(--font-color); background:(--background)"
    >如果你想单独对简历头部的个人信息进行排版，那你可以考虑使用&nbsp;</span
  ><code
    style="
      font-family: 'Microsoft YaHei Mono', Menlo, Monaco, Consolas, 'Courier New', monospace;
      color: rgb(229, 61, 14);
    "
    >Head</code
  ><span style="color: var(--font-color); background:(--background)"
    >&nbsp;布局，针对性的对个人信息进行样式设置，和弹性布局差不多，你需要使用&nbsp;</span
  ><code
    style="
      font-family: 'Microsoft YaHei Mono', Menlo, Monaco, Consolas, 'Courier New', monospace;
      color: rgb(229, 61, 14);
    "
    >:::</code
  ><span style="color: var(--font-color); background:(--background)"
    >&nbsp;语法对其进行分割，并给出开始和结束标志.</span
  ></span
>
</p>
<pre
lang=""
theme="dark"
class="tb-pre"
><div style="width:2.5em" class="tb-code-line-number-bg"></div><div class="tb-code-content"><div class="tb-code-line">::: headStart</div><div class="tb-code-line">content....</div><div class="tb-code-line">::: headEnd</div></div><span class="tb-pre-lang"></span></pre>
<p style="background:var(--background); color: var(--font-color)">
<span style="line-height: 28px"
  ><span style="color: var(--font-color); background:(--background)">上面的&nbsp;</span
  ><code
    style="
      font-family: 'Microsoft YaHei Mono', Menlo, Monaco, Consolas, 'Courier New', monospace;
      color: rgb(229, 61, 14);
    "
    >Markdown</code
  ><span style="color: var(--font-color); background:(--background)">&nbsp;语法将会被转化为下面的&nbsp;</span
  ><code
    style="
      font-family: 'Microsoft YaHei Mono', Menlo, Monaco, Consolas, 'Courier New', monospace;
      color: rgb(229, 61, 14);
    "
    >HTML</code
  ><span style="color: var(--font-color); background:(--background)">&nbsp;代码.</span></span
>
</p>
<pre
lang="HTML"
theme="dark"
class="tb-pre"
><div style="width:2.5em" class="tb-code-line-number-bg"></div><div class="tb-code-content"><div class="tb-code-line">&lt;<span class="tb-hl-tag">div&nbsp;</span><span class="tb-hl-attr-name">class</span>="<span class="tb-hl-attr-value">head-layout</span>"&gt;</div><div class="tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;content....</div><div class="tb-code-line">&lt;<span class="tb-hl-tag">div</span>&gt;</div></div><span class="tb-pre-lang">HTML</span></pre>


<h2 style="background:var(--background); color: var(--font-color); margin: 20px 0 10px 0;">
<span style="color: var(--font-color); background:(--background)">7. 内置图标</span>
</h2>
<p style="background:var(--background); color: var(--font-color)">
<span style="line-height: 28px; color: var(--font-color)"
  >我也内置了一些图标，如果你想使用它，你可以通过以下语法使用，<strong>建议使用空格结尾</strong>.</span
>
</p>
<pre
lang=""
theme="dark"
class="tb-pre"
><div style="width:2.5em" class="tb-code-line-number-bg"></div><div class="tb-code-content"><div class="tb-code-line">icon:github&nbsp;</div></div><span class="tb-pre-lang"></span></pre>
<p style="background:var(--background); color: var(--font-color)">
<span style="line-height: 28px"
  ><span style="color: var(--font-color); background:(--background)">上面的&nbsp;</span
  ><code
    style="
      font-family: 'Microsoft YaHei Mono', Menlo, Monaco, Consolas, 'Courier New', monospace;
      color: rgb(229, 61, 14);
    "
    >Markdown</code
  ><span style="color: var(--font-color); background:(--background)">&nbsp;语法将会被转化为下面的&nbsp;</span
  ><code
    style="
      font-family: 'Microsoft YaHei Mono', Menlo, Monaco, Consolas, 'Courier New', monospace;
      color: rgb(229, 61, 14);
    "
    >HTML</code
  ><span style="color: var(--font-color); background:(--background)">&nbsp;代码.</span></span
>
</p>
<pre
lang="HTML"
theme="dark"
class="tb-pre"
><div style="width:2.5em" class="tb-code-line-number-bg"></div><div class="tb-code-content"><div class="tb-code-line">&lt;<span class="tb-hl-tag">i&nbsp;</span><span class="tb-hl-attr-name">class</span>="<span class="tb-hl-attr-value">iconfont icon-github</span>"&gt;&lt;/<span class="tb-hl-tag">i</span>&gt;</div></div><span class="tb-pre-lang">HTML</span></pre>
<h2 style="background:var(--background); color: var(--font-color); margin: 20px 0 10px 0;">
<span style="color: var(--font-color); background:(--background)">over</span>
</h2>
<p style="background:var(--background); color: var(--font-color)">
<span style="line-height: 28px"
  ><span style="color: var(--font-color); background:(--background)"
    >以上就是该简历所支持的一些特殊语法，其他的语法与 原生</span
  ><code
    style="
      font-family: 'Microsoft YaHei Mono', Menlo, Monaco, Consolas, 'Courier New', monospace;
      color: rgb(229, 61, 14);
    "
    >Markdown</code
  ><span style="color: var(--font-color); background:(--background)"
    >&nbsp;同步，<strong>如果你有不错的想法</strong>，可以向我提出，</span
  ><code
    style="
      font-family: 'Microsoft YaHei Mono', Menlo, Monaco, Consolas, 'Courier New', monospace;
      color: rgb(229, 61, 14);
    "
    >欢迎给这个项目提供不同的简历模板</code
  ><span style="color: var(--font-color); background:(--background)"
    >，感谢原作者的开发：&nbsp;<a target="null" href="https://github.com/acmenlei/markdown-resume-to-pdf"
      >仓库地址</a
    ></span
  ></span
>
</p>

`
