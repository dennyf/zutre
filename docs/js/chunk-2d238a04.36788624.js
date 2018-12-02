(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d238a04"],{ffd2:function(t,o,s){"use strict";s.r(o);var c=function(){var t=this,o=t.$createElement,s=t._self._c||o;return s("z-container",[s("z-breadcrumbs",{attrs:{items:[{name:"Home",link:{name:"home"}},{name:"Layout"},{name:"Flexbox grid",link:{name:"docsFlexbox"}}]}}),s("h4",[t._v("Flexbox grid")]),s("p",[t._v("Layout includes flexbox based responsive grid system with 12 columns.")]),s("p",[t._v("\n        Components: \n        "),s("code",[t._v("<z-container>")]),t._v(","),s("code",[t._v("<z-columns>")]),t._v(","),s("code",[t._v("<z-column>")])]),s("z-divider"),s("z-columns",[s("z-column",{attrs:{size:1}},[s("div",{staticClass:"bg-primary text-secondary docs-block"},[t._v(" ")])]),s("z-column",{attrs:{size:1}},[s("div",{staticClass:"bg-primary text-secondary docs-block"},[t._v(" ")])]),s("z-column",{attrs:{size:1}},[s("div",{staticClass:"bg-primary text-secondary docs-block"},[t._v(" ")])]),s("z-column",{attrs:{size:1}},[s("div",{staticClass:"bg-primary text-secondary docs-block"},[t._v(" ")])]),s("z-column",{attrs:{size:1}},[s("div",{staticClass:"bg-primary text-secondary docs-block"},[t._v(" ")])]),s("z-column",{attrs:{size:1}},[s("div",{staticClass:"bg-primary text-secondary docs-block"},[t._v(" ")])]),s("z-column",{attrs:{size:1}},[s("div",{staticClass:"bg-primary text-secondary docs-block"},[t._v(" ")])]),s("z-column",{attrs:{size:1}},[s("div",{staticClass:"bg-primary text-secondary docs-block"},[t._v(" ")])]),s("z-column",{attrs:{size:1}},[s("div",{staticClass:"bg-primary text-secondary docs-block"},[t._v(" ")])]),s("z-column",{attrs:{size:1}},[s("div",{staticClass:"bg-primary text-secondary docs-block"},[t._v(" ")])]),s("z-column",{attrs:{size:1}},[s("div",{staticClass:"bg-primary text-secondary docs-block"},[t._v(" ")])]),s("z-column",{attrs:{size:1}},[s("div",{staticClass:"bg-primary text-secondary docs-block"},[t._v(" ")])])],1),s("z-columns",[s("z-column",{attrs:{size:12}},[s("div",{staticClass:"bg-gray docs-block"},[t._v("col-12 (100%)")])])],1),s("z-columns",[s("z-column",{attrs:{size:9}},[s("div",{staticClass:"bg-gray docs-block"},[t._v("col-9 (75%)")])])],1),s("z-columns",[s("z-column",{attrs:{size:6}},[s("div",{staticClass:"bg-gray docs-block"},[t._v("col-6 (50%)")])])],1),s("z-columns",[s("z-column",{attrs:{size:3}},[s("div",{staticClass:"bg-gray docs-block"},[t._v("col-3 (25%)")])])],1),s("z-code",{attrs:{lang:"Vue"}},[t._v('\nimport { ZContainer, ZColumns, ZColumn } from \'zutre\'\n\n<z-container>\n  <z-columns>\n    <z-column :size="12">col-12</z-column>  \n    <z-column :size="9">col-9</z-column>  \n    <z-column :size="6">col-6</z-column>  \n    <z-column :size="3">col-3</z-column>\n  </z-columns>\n</z-container>\n      ')]),s("h4",[t._v("Gapless grid")]),s("z-columns",{attrs:{gapless:""}},[s("z-column",{attrs:{size:6}},[s("div",{staticClass:"bg-primary text-secondary docs-block"},[t._v("col-6 (gapless)")])]),s("z-column",{attrs:{size:6}},[s("div",{staticClass:"bg-primary text-secondary docs-block"},[t._v("col-6 (gapless)")])])],1),s("z-code",{attrs:{lang:"Vue"}},[t._v('\nimport { ZContainer, ZColumns, ZColumn } from \'zutre\'\n\n<z-container gapless>\n  <z-columns>\n    <z-column :size="6">col-6 (gapless)</z-column>  \n    <z-column :size="6">col-6 (gapless)</z-column>  \n  </z-columns>\n</z-container>\n      ')]),s("p",[t._v("By default, "),s("a",{attrs:{href:"https://picturepan2.github.io/spectre/layout/grid.html",target:"_blank"}},[t._v("Spectre grid")]),t._v(" has multi-line flexbox enabled. You can set "),s("code",[t._v("oneline")]),t._v(" property to "),s("code",[t._v("true")]),t._v(" to make all its child columns positioned in the same single row.\n\n      "),s("z-columns",{attrs:{oneline:""}},[s("z-column",{attrs:{size:6}},[s("div",{staticClass:"bg-primary text-secondary docs-block"},[t._v("col-6")])]),s("z-column",{attrs:{size:6}},[s("div",{staticClass:"bg-primary text-secondary docs-block"},[t._v("col-6")])]),s("z-column",{attrs:{size:6}},[s("div",{staticClass:"bg-primary text-secondary docs-block"},[t._v("col-6")])])],1),s("z-code",{attrs:{lang:"Vue"}},[t._v('\nimport { ZContainer, ZColumns, ZColumn } from \'zutre\'\n\n<z-container oneline>\n  <z-columns>\n    <z-column :size="6">col-6</z-column>\n    <z-column :size="6">col-6</z-column>\n    <z-column :size="6">col-6</z-column>\n  </z-columns>\n</z-container>\n      ')])],1),s("h4",[t._v("Grid offset")]),s("p",[t._v("\n        The Flexbox grid provides margin auto utilities to set offset. There are properties: "),s("code",[t._v("mxAuto")]),t._v(", \n        "),s("code",[t._v("mlAuto")]),t._v(" and "),s("code",[t._v("mrAuto")]),t._v(" to set margins between columns without using empty columns.\n      ")]),s("z-columns",[s("z-column",{attrs:{size:2}},[s("div",{staticClass:"bg-primary text-secondary docs-block"},[t._v("col-2")])]),s("z-column",{attrs:{size:4,mxAuto:""}},[s("div",{staticClass:"bg-primary text-secondary docs-block"},[t._v("col-4 mxAuto")])])],1),s("z-columns",[s("z-column",{attrs:{size:2}},[s("div",{staticClass:"bg-primary text-secondary docs-block"},[t._v("col-2")])]),s("z-column",{attrs:{size:4,mlAuto:""}},[s("div",{staticClass:"bg-primary text-secondary docs-block"},[t._v("col-4 mlAuto")])])],1),s("z-columns",[s("z-column",{attrs:{size:4,mlAuto:""}},[s("div",{staticClass:"bg-primary text-secondary docs-block"},[t._v("col-4 mlAuto")])]),s("z-column",{attrs:{size:2}},[s("div",{staticClass:"bg-primary text-secondary docs-block"},[t._v("col-2")])])],1),s("z-columns",[s("z-column",{attrs:{size:4,mxAuto:""}},[s("div",{staticClass:"bg-primary text-secondary docs-block"},[t._v("col-4 mxAuto")])]),s("z-column",{attrs:{size:2}},[s("div",{staticClass:"bg-primary text-secondary docs-block"},[t._v("col-2")])])],1),s("z-columns",[s("z-column",{attrs:{size:4,mrAuto:""}},[s("div",{staticClass:"bg-primary text-secondary docs-block"},[t._v("col-4 mrAuto")])]),s("z-column",{attrs:{size:2}},[s("div",{staticClass:"bg-primary text-secondary docs-block"},[t._v("col-2")])])],1),s("z-columns",[s("z-column",{attrs:{size:4,mxAuto:""}},[s("div",{staticClass:"bg-primary text-secondary docs-block"},[t._v("col-4 mxAuto")])])],1),s("z-code",{attrs:{lang:"Vue"}},[t._v('\nimport { ZContainer, ZColumns, ZColumn } from \'zutre\'\n\n<z-container>\n  <z-columns>\n    <z-column :size="4" mrAuto>col-4 mrAuto</z-column>\n    <z-column :size="2">col-2</z-column>\n  </z-columns>\n</z-container>\n      ')]),s("z-divider",{attrs:{content:"API"}}),s("h4",[t._v("API")]),s("h5",[t._v("Columns "),s("code",[t._v("<z-columns />")])]),s("z-table",[s("z-thead",[s("z-th",[t._v("Name")]),s("z-th",[t._v("Description")]),s("z-th",[t._v("Type")]),s("z-th",[t._v("Values")]),s("z-th",[t._v("Default")])],1),s("z-tbody",[s("z-tr",[s("z-td",[s("code",[t._v("gapless")])]),s("z-td",[t._v("\n              set "),s("code",[t._v("true")]),t._v(" to have gapless columns\n            ")]),s("z-td",[t._v("Boolean")]),s("z-td",[s("code",[t._v("true")]),t._v("/"),s("code",[t._v("false")])]),s("z-td",[t._v("false")])],1),s("z-tr",[s("z-td",[s("code",[t._v("oneline")])]),s("z-td",[t._v("\n              set "),s("code",[t._v("true")]),t._v(" to have make all child columns positioned in the same single row\n            ")]),s("z-td",[t._v("Boolean")]),s("z-td",[s("code",[t._v("true")]),t._v("/"),s("code",[t._v("false")])]),s("z-td",[t._v("false")])],1)],1)],1),s("br"),s("h5",[t._v("Column "),s("code",[t._v("<z-column />")])]),s("z-table",[s("z-thead",[s("z-th",[t._v("Name")]),s("z-th",[t._v("Description")]),s("z-th",[t._v("Type")]),s("z-th",[t._v("Values")]),s("z-th",[t._v("Default")])],1),s("z-tbody",[s("z-tr",[s("z-td",[s("code",[t._v("size")])]),s("z-td",[t._v("\n              column size\n            ")]),s("z-td",[t._v("Number")]),s("z-td",[s("code",[t._v("1")]),t._v(" to "),s("code",[t._v("12")])]),s("z-td",[t._v("---")])],1),s("z-tr",[s("z-td",[s("code",[t._v("mxAuto")])]),s("z-td",[t._v("set margins between columns without using empty columns\n            ")]),s("z-td",[t._v("Boolean")]),s("z-td",[s("code",[t._v("true")]),t._v(" / "),s("code",[t._v("false")])]),s("z-td",[t._v("false")])],1),s("z-tr",[s("z-td",[s("code",[t._v("mlAuto")])]),s("z-td",[t._v("set margins between columns without using empty columns\n            ")]),s("z-td",[t._v("Boolean")]),s("z-td",[s("code",[t._v("true")]),t._v(" / "),s("code",[t._v("false")])]),s("z-td",[t._v("false")])],1),s("z-tr",[s("z-td",[s("code",[t._v("mrAuto")])]),s("z-td",[t._v("set margins between columns without using empty columns\n            ")]),s("z-td",[t._v("Boolean")]),s("z-td",[s("code",[t._v("true")]),t._v(" / "),s("code",[t._v("false")])]),s("z-td",[t._v("false")])],1)],1)],1)],1)},e=[],n=(s("cadf"),s("551c"),s("097d"),s("2af9")),l={name:"DocsFlexbox",components:{ZContainer:n["o"],ZBreadcrumbs:n["a"],ZCode:n["l"],ZColumns:n["n"],ZColumn:n["m"],ZDivider:n["p"],ZTable:n["x"],ZThead:n["B"],ZTbody:n["y"],ZTh:n["A"],ZTr:n["J"],ZTd:n["z"]}},a=l,i=s("2877"),r=Object(i["a"])(a,c,e,!1,null,null,null);r.options.__file="DocsFlexbox.vue";o["default"]=r.exports}}]);
//# sourceMappingURL=chunk-2d238a04.36788624.js.map