(window.webpackJsonp=window.webpackJsonp||[]).push([[102],{665:function(t,a,o){"use strict";o.r(a);var e=o(1),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,o=t._self._c||a;return o("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[o("h1",{attrs:{id:"layout-布局"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#layout-布局"}},[t._v("#")]),t._v(" Layout 布局 "),o("Common-SourceCodeLink",{attrs:{comp:"layout"}})],1),t._v(" "),o("p",[t._v("组件概述")]),t._v(" "),o("ul",[o("li",[o("code",[t._v("Layout")]),t._v("：布局容器，其下可嵌套 "),o("code",[t._v("Header")]),t._v(" "),o("code",[t._v("Sider")]),t._v(" "),o("code",[t._v("Content")]),t._v(" "),o("code",[t._v("Footer")]),t._v(" 或 "),o("code",[t._v("Layout")]),t._v(" 本身，可以放在任何父容器中。")]),t._v(" "),o("li",[o("code",[t._v("Header")]),t._v("：顶部布局，自带默认样式，其下可嵌套任何元素，只能放在 "),o("code",[t._v("Layout")]),t._v(" 中。")]),t._v(" "),o("li",[o("code",[t._v("Sider")]),t._v("：侧边栏，自带默认样式及基本功能，其下可嵌套任何元素，只能放在 "),o("code",[t._v("Layout")]),t._v(" 中。")]),t._v(" "),o("li",[o("code",[t._v("Content")]),t._v("：内容部分，自带默认样式，其下可嵌套任何元素，只能放在 "),o("code",[t._v("Layout")]),t._v(" 中。")]),t._v(" "),o("li",[o("code",[t._v("Footer")]),t._v("：底部布局，自带默认样式，其下可嵌套任何元素，只能放在 "),o("code",[t._v("Layout")]),t._v(" 中。")])]),t._v(" "),o("blockquote",[o("p",[t._v("注意：采用 flex 布局实现，请注意浏览器兼容性问题。")])]),t._v(" "),o("h2",{attrs:{id:"基本常用布局"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#基本常用布局"}},[t._v("#")]),t._v(" 基本常用布局")]),t._v(" "),o("Common-Democode",[o("layout-demo1"),t._v(" "),o("highlight-code",{attrs:{slot:"codeText",lang:"vue"},slot:"codeText"},[o("div",{staticClass:"language- extra-class"},[o("pre",[o("code",[t._v('<template>\n  <div id="components-layout-demo-basic">\n    <a-layout style="height: 50vh;">\n      <a-layout-header>Header</a-layout-header>\n      <a-layout-content>Content</a-layout-content>\n      <a-layout-footer>Footer</a-layout-footer>\n    </a-layout>\n    <hr />\n    <a-layout>\n      <a-layout-header>Header</a-layout-header>\n      <a-layout>\n        <a-layout-sider>Sider</a-layout-sider>\n        <a-layout-content>Content</a-layout-content>\n      </a-layout>\n      <a-layout-footer>Footer</a-layout-footer>\n    </a-layout>\n    <hr />\n    <a-layout>\n      <a-layout-sider>Sider</a-layout-sider>\n      <a-layout>\n        <a-layout-header>Header</a-layout-header>\n        <a-layout-content>Content</a-layout-content>\n        <a-layout-footer>Footer</a-layout-footer>\n      </a-layout>\n    </a-layout>\n  </div>\n</template>\n<style>\n#components-layout-demo-basic {\n  text-align: center;\n}\n#components-layout-demo-basic .a-layout-header,\n#components-layout-demo-basic .a-layout-footer {\n  background: #7dbcea;\n  color: #fff;\n}\n#components-layout-demo-basic .a-layout-footer {\n  line-height: 1.5;\n}\n#components-layout-demo-basic .a-layout-sider {\n  background: #3ba0e9;\n  color: #fff;\n  line-height: 120px;\n}\n#components-layout-demo-basic .a-layout-content {\n  background: rgba(16, 142, 233, 1);\n  color: #fff;\n  min-height: 120px;\n  line-height: 120px;\n}\n#components-layout-demo-basic > .a-layout {\n  margin-bottom: 48px;\n}\n#components-layout-demo-basic > .a-layout:last-child {\n  margin: 0;\n}\n</style>\n')])])])])],1),t._v(" "),o("h2",{attrs:{id:"收缩-sidebar"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#收缩-sidebar"}},[t._v("#")]),t._v(" 收缩 sidebar")]),t._v(" "),o("Common-Democode",[o("layout-demo3"),t._v(" "),o("highlight-code",{attrs:{slot:"codeText",lang:"vue"},slot:"codeText"},[o("div",{staticClass:"language- extra-class"},[o("pre",[o("code",[t._v('<template>\n  <div id="components-layout-demo-collapsed">\n    <a-layout :collapsed="collapsed">\n      <a-layout-header>Header</a-layout-header>\n      <a-layout>\n        <a-layout-sider>Sider</a-layout-sider>\n        <a-layout-content>\n          <a-button @click="collapsed = !collapsed">Click Me</a-button>\n          Content\n        </a-layout-content>\n      </a-layout>\n      <a-layout-footer>Footer</a-layout-footer>\n    </a-layout>\n    <hr />\n    <a-layout :collapsed="collapsed">\n      <a-layout-sider>Sider</a-layout-sider>\n      <a-layout>\n        <a-layout-header>\n          <a-button @click="collapsed = !collapsed">Click Me</a-button>\n          Header\n        </a-layout-header>\n        <a-layout-content>\n          Content\n        </a-layout-content>\n        <a-layout-footer>Footer</a-layout-footer>\n      </a-layout>\n    </a-layout>\n  </div>\n</template>\n<script>\nexport default {\n  data () {\n    return {\n      collapsed: true,\n    }\n  }\n}\n<\/script>\n<style>\n#components-layout-demo-collapsed {\n  text-align: center;\n}\n#components-layout-demo-collapsed .a-layout-header,\n#components-layout-demo-collapsed .a-layout-footer {\n  background: #7dbcea;\n  color: #fff;\n}\n#components-layout-demo-collapsed .a-layout-footer {\n  line-height: 1.5;\n}\n#components-layout-demo-collapsed .a-layout-sider {\n  background: #3ba0e9;\n  color: #fff;\n  line-height: 120px;\n}\n#components-layout-demo-collapsed .a-layout-content {\n  background: rgba(16, 142, 233, 1);\n  color: #fff;\n  min-height: 120px;\n  line-height: 120px;\n}\n#components-layout-demo-collapsed > .a-layout {\n  margin-bottom: 48px;\n}\n#components-layout-demo-collapsed > .a-layout:last-child {\n  margin: 0;\n}\n</style>\n')])])])])],1),t._v(" "),o("h2",{attrs:{id:"api"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#api"}},[t._v("#")]),t._v(" API")]),t._v(" "),o("h3",{attrs:{id:"layout-sider"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#layout-sider"}},[t._v("#")]),t._v(" Layout Sider")]),t._v(" "),o("table",[o("thead",[o("tr",[o("th",{staticStyle:{"text-align":"left"}},[t._v("属性")]),t._v(" "),o("th",{staticStyle:{"text-align":"left"}},[t._v("说明")]),t._v(" "),o("th",{staticStyle:{"text-align":"left"}},[t._v("类型")]),t._v(" "),o("th",{staticStyle:{"text-align":"left"}},[t._v("默认值")])])]),t._v(" "),o("tbody",[o("tr",[o("td",{staticStyle:{"text-align":"left"}},[o("code",[t._v("collapsed")])]),t._v(" "),o("td",{staticStyle:{"text-align":"left"}},[t._v("当前收起状态")]),t._v(" "),o("td",{staticStyle:{"text-align":"left"}},[t._v("Boolean")]),t._v(" "),o("td",{staticStyle:{"text-align":"left"}},[t._v("-")])])])])],1)}),[],!1,null,null,null);a.default=n.exports}}]);