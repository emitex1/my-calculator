(this["webpackJsonpmy-calculator"]=this["webpackJsonpmy-calculator"]||[]).push([[0],{18:function(module,__webpack_exports__,__webpack_require__){"use strict";var _home_runner_work_my_calculator_my_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(7),_home_runner_work_my_calculator_my_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(15),react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__),_emotion_react__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(4),_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(1),_templateObject,_templateObject2,_templateObject3,_templateObject4,MyCalculator=function MyCalculator(){var _React$useState=react__WEBPACK_IMPORTED_MODULE_2___default.a.useState("0"),_React$useState2=Object(_home_runner_work_my_calculator_my_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.a)(_React$useState,2),curExpr=_React$useState2[0],setCurExpr=_React$useState2[1],_React$useState3=react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(!0),_React$useState4=Object(_home_runner_work_my_calculator_my_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.a)(_React$useState3,2),calculated=_React$useState4[0],setCalculated=_React$useState4[1],DEVIDE_SIGN="\xf7",MULTIPLY_SIGN="\xd7",endsWithOperator=/[+-/*]$/,lastNumHasDot=/\.\d*$/,replaceSigns=function(e){for(var t=e||"";t.indexOf("/")>=0;)t=t.replace("/",DEVIDE_SIGN);for(;t.indexOf("*")>=0;)t=t.replace("*",MULTIPLY_SIGN);return t},handleClear=function(e){setCurExpr("0")},handleNumbers=function(e){var t=e.target.value;console.log(curExpr,t,endsWithOperator.test(curExpr)),setCurExpr("0"===curExpr||calculated?t:curExpr+t),setCalculated(!1)},handleOperators=function(e){var t=e.target.value;if(console.log(curExpr,t,endsWithOperator.test(curExpr)),"-"!==t&&endsWithOperator.test(curExpr)){var n=curExpr.substr(0,curExpr.length-1);endsWithOperator.test(n)&&(n=n.substr(0,n.length-1)),setCurExpr(n+=t)}else setCurExpr(curExpr+t);setCalculated(!1)},handleDecimal=function(){lastNumHasDot.test(curExpr)||setCurExpr(curExpr+".")},handleCalculate=function handleCalculate(){var tempExpr=curExpr;if(endsWithOperator.test(curExpr)){var _tempExpr=curExpr.substr(0,curExpr.length-1);endsWithOperator.test(_tempExpr)&&(_tempExpr=_tempExpr.substr(0,_tempExpr.length-1)),setCurExpr(_tempExpr)}var answer=eval(tempExpr);setCurExpr(answer.toString()),setCalculated(!0)},styles={btn:[{width:"5rem",height:"5rem","--tw-bg-opacity":"1",backgroundColor:"rgba(221, 214, 254, var(--tw-bg-opacity))",borderWidth:"4px","--tw-border-opacity":"1",borderColor:"rgba(255, 255, 255, var(--tw-border-opacity))",borderRadius:"0.375rem","--tw-shadow":"inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)",boxShadow:"var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)",fontSize:"3rem",lineHeight:"1",cursor:"pointer",":hover":{"--tw-text-opacity":"1",color:"rgba(255, 255, 255, var(--tw-text-opacity))","--tw-bg-opacity":"1",backgroundColor:"rgba(196, 181, 253, var(--tw-bg-opacity))"},transitionProperty:"all",transitionTimingFunction:"cubic-bezier(0.4, 0, 0.2, 1)",transitionDuration:"700ms"},Object(_emotion_react__WEBPACK_IMPORTED_MODULE_3__.b)(_templateObject||(_templateObject=Object(_home_runner_work_my_calculator_my_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.a)(["box-shadow: inset 0px 0px 8px 2px rgb(98 34 112 / 10%);"])))]};return Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.c)(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.a,{children:[Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.b)("h1",{css:[{textAlign:"center",fontSize:"3.75rem",lineHeight:"1",animation:"pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite"},Object(_emotion_react__WEBPACK_IMPORTED_MODULE_3__.b)(_templateObject2||(_templateObject2=Object(_home_runner_work_my_calculator_my_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.a)(["font-family: digital-7"])))],children:"My Calculator"}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.c)("div",{id:"calculator",css:[{borderWidth:"0px",marginLeft:"auto",marginRight:"auto",padding:"0.25rem"},Object(_emotion_react__WEBPACK_IMPORTED_MODULE_3__.b)(_templateObject3||(_templateObject3=Object(_home_runner_work_my_calculator_my_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.a)(["width: 21rem"])))],children:[Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.b)("div",{css:[{width:"100%","--tw-bg-opacity":"1",backgroundColor:"rgba(255, 255, 255, var(--tw-bg-opacity))","--tw-text-opacity":"1",color:"rgba(55, 65, 81, var(--tw-text-opacity))",padding:"0.625rem",boxSizing:"border-box",fontSize:"3rem",lineHeight:"1",height:"5rem",display:"flex",justifyContent:"flex-end",alignItems:"center"},Object(_emotion_react__WEBPACK_IMPORTED_MODULE_3__.b)(_templateObject4||(_templateObject4=Object(_home_runner_work_my_calculator_my_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.a)(["font-family: digital-7"])))],id:"display",children:replaceSigns(curExpr)}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.c)("div",{id:"buttons",css:{display:"flex",justifyContent:"center",flexWrap:"wrap","--tw-bg-opacity":"1",backgroundColor:"rgba(255, 255, 255, var(--tw-bg-opacity))"},children:[Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.b)("button",{value:"C",css:[styles.btn,{width:"10rem","--tw-bg-opacity":"1",backgroundColor:"rgba(252, 165, 165, var(--tw-bg-opacity))"}],onClick:handleClear,children:"Clear"}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.b)("button",{value:"/",css:[styles.btn,{"--tw-bg-opacity":"1",backgroundColor:"rgba(199, 210, 254, var(--tw-bg-opacity))"}],onClick:handleOperators,children:DEVIDE_SIGN}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.b)("button",{value:"*",css:[styles.btn,{"--tw-bg-opacity":"1",backgroundColor:"rgba(199, 210, 254, var(--tw-bg-opacity))"}],onClick:handleOperators,children:MULTIPLY_SIGN}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.b)("button",{value:"7",css:styles.btn,onClick:handleNumbers,children:"7"}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.b)("button",{value:"8",css:styles.btn,onClick:handleNumbers,children:"8"}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.b)("button",{value:"9",css:styles.btn,onClick:handleNumbers,children:"9"}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.b)("button",{value:"-",css:[styles.btn,{"--tw-bg-opacity":"1",backgroundColor:"rgba(199, 210, 254, var(--tw-bg-opacity))"}],onClick:handleOperators,children:"-"}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.b)("button",{value:"4",css:styles.btn,onClick:handleNumbers,children:"4"}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.b)("button",{value:"5",css:styles.btn,onClick:handleNumbers,children:"5"}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.b)("button",{value:"6",css:styles.btn,onClick:handleNumbers,children:"6"}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.b)("button",{value:"+",css:[styles.btn,{"--tw-bg-opacity":"1",backgroundColor:"rgba(199, 210, 254, var(--tw-bg-opacity))"}],onClick:handleOperators,children:"+"}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.b)("button",{value:"1",css:styles.btn,onClick:handleNumbers,children:"1"}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.b)("button",{value:"2",css:styles.btn,onClick:handleNumbers,children:"2"}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.b)("button",{value:"3",css:styles.btn,onClick:handleNumbers,children:"3"}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.b)("button",{css:[styles.btn,{height:"10rem","--tw-bg-opacity":"1",backgroundColor:"rgba(209, 250, 229, var(--tw-bg-opacity))"}],onClick:handleCalculate,children:"="}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.b)("button",{value:"0",css:[styles.btn,{width:"10rem",marginTop:"-5rem",marginBottom:"-5rem",marginLeft:"-2.5rem",marginRight:"-2.5rem"}],onClick:handleNumbers,children:"0"}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.b)("button",{css:[styles.btn,{marginTop:"-5rem",marginBottom:"-5rem",marginLeft:"2.5rem",marginRight:"2.5rem"}],onClick:handleDecimal,children:"."})]})]}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.b)("h1",{css:[{textAlign:"center",fontSize:"1.125rem",lineHeight:"1.75rem","--tw-text-opacity":"1",color:"rgba(156, 163, 175, var(--tw-text-opacity))",cursor:"pointer",":hover":{animation:"ping 1s cubic-bezier(0, 0, 0.2, 1) infinite"}}],children:Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.b)("a",{href:"http://www.Armoun.com",target:"_blank",rel:"noreferrer",children:"Developed By: EmIT"})})]})};__webpack_exports__.a=MyCalculator},26:function(e,t,n){},27:function(e,t,n){"use strict";n.r(t);var r,_=n(7),a=n(4),o=n(0),i=n.n(o),c=n(17),l=n.n(c),s=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,28)).then((function(t){var n=t.getCLS,r=t.getFID,_=t.getFCP,a=t.getLCP,o=t.getTTFB;n(e),r(e),_(e),a(e),o(e)}))},b=n(18),u=(n(26),n(3)),p=function(){return Object(u.jsx)(a.a,{styles:Object(a.b)(r||(r=Object(_.a)(['*, ::before, ::after {\nbox-sizing: border-box;\nborder-width: 0;\nborder-style: solid;\n--tw-border-opacity: 1;\nborder-color: rgba(229, 231, 235, var(--tw-border-opacity));\n--tw-translate-x: 0;\n--tw-translate-y: 0;\n--tw-rotate: 0;\n--tw-skew-x: 0;\n--tw-skew-y: 0;\n--tw-scale-x: 1;\n--tw-scale-y: 1;\n--tw-transform: translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n--tw-ring-inset: var(--tw-empty,/*!*/ /*!*/);\n--tw-ring-offset-width: 0px;\n--tw-ring-offset-color: #fff;\n--tw-ring-color: rgba(59, 130, 246, 0.5);\n--tw-ring-offset-shadow: 0 0 #0000;\n--tw-ring-shadow: 0 0 #0000;\n--tw-shadow: 0 0 #0000;\n--tw-blur: var(--tw-empty,/*!*/ /*!*/);\n--tw-brightness: var(--tw-empty,/*!*/ /*!*/);\n--tw-contrast: var(--tw-empty,/*!*/ /*!*/);\n--tw-grayscale: var(--tw-empty,/*!*/ /*!*/);\n--tw-hue-rotate: var(--tw-empty,/*!*/ /*!*/);\n--tw-invert: var(--tw-empty,/*!*/ /*!*/);\n--tw-saturate: var(--tw-empty,/*!*/ /*!*/);\n--tw-sepia: var(--tw-empty,/*!*/ /*!*/);\n--tw-drop-shadow: var(--tw-empty,/*!*/ /*!*/);\n--tw-filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);\n--tw-backdrop-blur: var(--tw-empty,/*!*/ /*!*/);\n--tw-backdrop-brightness: var(--tw-empty,/*!*/ /*!*/);\n--tw-backdrop-contrast: var(--tw-empty,/*!*/ /*!*/);\n--tw-backdrop-grayscale: var(--tw-empty,/*!*/ /*!*/);\n--tw-backdrop-hue-rotate: var(--tw-empty,/*!*/ /*!*/);\n--tw-backdrop-invert: var(--tw-empty,/*!*/ /*!*/);\n--tw-backdrop-opacity: var(--tw-empty,/*!*/ /*!*/);\n--tw-backdrop-saturate: var(--tw-empty,/*!*/ /*!*/);\n--tw-backdrop-sepia: var(--tw-empty,/*!*/ /*!*/);\n--tw-backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);\n        }\nhtml {\nline-height: 1.5;\n-webkit-text-size-adjust: 100%;\n-moz-tab-size: 4;\ntab-size: 4;\nfont-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";\n        }\nbody {\nmargin: 0;\nfont-family: inherit;\nline-height: inherit;\n        }\nhr {\nheight: 0;\ncolor: inherit;\nborder-top-width: 1px;\n        }\nabbr[title] {\ntext-decoration: underline dotted;\n        }\nb, strong {\nfont-weight: bolder;\n        }\ncode, kbd, samp, pre {\nfont-family: ui-monospace, SFMono-Regular, Consolas, \'Liberation Mono\', Menlo, monospace;\nfont-size: 1em;\n        }\nsmall {\nfont-size: 80%;\n        }\nsub, sup {\nfont-size: 75%;\nline-height: 0;\nposition: relative;\nvertical-align: baseline;\n        }\nsub {\nbottom: -0.25em;\n        }\nsup {\ntop: -0.5em;\n        }\ntable {\ntext-indent: 0;\nborder-color: inherit;\nborder-collapse: collapse;\n        }\nbutton, input, optgroup, select, textarea {\nfont-family: inherit;\nfont-size: 100%;\nline-height: inherit;\nmargin: 0;\npadding: 0;\ncolor: inherit;\n        }\nbutton, select {\ntext-transform: none;\n        }\nbutton, [type=\'button\'], [type=\'reset\'], [type=\'submit\'] {\n-webkit-appearance: button;\n        }\n::-moz-focus-inner {\nborder-style: none;\npadding: 0;\n        }\n:-moz-focusring {\noutline: 1px dotted ButtonText;\n        }\n:-moz-ui-invalid {\nbox-shadow: none;\n        }\nlegend {\npadding: 0;\n        }\nprogress {\nvertical-align: baseline;\n        }\n::-webkit-inner-spin-button, ::-webkit-outer-spin-button {\nheight: auto;\n        }\n[type=\'search\'] {\n-webkit-appearance: textfield;\noutline-offset: -2px;\n        }\n::-webkit-search-decoration {\n-webkit-appearance: none;\n        }\n::-webkit-file-upload-button {\n-webkit-appearance: button;\nfont: inherit;\n        }\nsummary {\ndisplay: list-item;\n        }\nblockquote, dl, dd, h1, h2, h3, h4, h5, h6, hr, figure, p, pre {\nmargin: 0;\n        }\nbutton {\nbackground-color: transparent;\nbackground-image: none;\n        }\nfieldset {\nmargin: 0;\npadding: 0;\n        }\nol, ul {\nlist-style: none;\nmargin: 0;\npadding: 0;\n        }\nimg {\nborder-style: solid;\n        }\ntextarea {\nresize: vertical;\n        }\ninput::placeholder, textarea::placeholder {\ncolor: #9ca3af;\n        }\nbutton, [role="button"] {\ncursor: pointer;\n        }\nh1, h2, h3, h4, h5, h6 {\nfont-size: inherit;\nfont-weight: inherit;\n        }\na {\ncolor: inherit;\ntext-decoration: inherit;\n        }\npre, code, kbd, samp {\nfont-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;\n        }\nimg, svg, video, canvas, audio, iframe, embed, object {\ndisplay: block;\nvertical-align: middle;\n        }\nimg, video {\nmax-width: 100%;\nheight: auto;\n        }\n[hidden] {\ndisplay: none;\n        }\n@keyframes spin {\nto {\ntransform: rotate(360deg);\n        }\n        }\n@keyframes ping {\n75%, 100% {\ntransform: scale(2);\nopacity: 0;\n        }\n        }\n@keyframes pulse {\n50% {\nopacity: .5;\n        }\n        }\n@keyframes bounce {\n0%, 100% {\ntransform: translateY(-25%);\nanimation-timing-function: cubic-bezier(0.8,0,1,1);\n        }\n50% {\ntransform: none;\nanimation-timing-function: cubic-bezier(0,0,0.2,1);\n        }\n        }'])))})};l.a.render(Object(u.jsxs)(i.a.StrictMode,{children:[Object(u.jsx)(p,{}),Object(u.jsx)(b.a,{})]}),document.getElementById("root")),s()}},[[27,1,2]]]);
//# sourceMappingURL=main.b6e9bed7.chunk.js.map