"use strict";(self.webpackChunkgwoc_open_source=self.webpackChunkgwoc_open_source||[]).push([[8695],{3905:function(e,t,o){o.d(t,{Zo:function(){return u},kt:function(){return m}});var n=o(7294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(o),m=r,h=p["".concat(l,".").concat(m)]||p[m]||d[m]||a;return o?n.createElement(h,i(i({ref:t},u),{},{components:o})):n.createElement(h,i({ref:t},u))}));function m(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,i=new Array(a);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<a;c++)i[c]=o[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}p.displayName="MDXCreateElement"},8289:function(e,t,o){o.r(t),o.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return u},default:function(){return p}});var n=o(7462),r=o(3366),a=(o(7294),o(3905)),i=["components"],s={sidebar_position:18},l="Language Server Protocol",c={unversionedId:"Popular_Projects/6.17_Language_Server_Protocol",id:"Popular_Projects/6.17_Language_Server_Protocol",isDocsHomePage:!1,title:"Language Server Protocol",description:"For an Editor supporting features like code auto-completion, go-to definition and ,any other intelligent function is a challenging and time consuming task, because it requires writing a domain model which includes a scanner, parser, and many more. Language Server Protocol is a new technology used by many Open Source Editors. It enables autocompletion, goto-definition and other intelligent code functions to be offloaded to a dedicated server for the language currently being written.",source:"@site/docs/Popular_Projects/6.17_Language_Server_Protocol.md",sourceDirName:"Popular_Projects",slug:"/Popular_Projects/6.17_Language_Server_Protocol",permalink:"/docs/Popular_Projects/6.17_Language_Server_Protocol",tags:[],version:"current",sidebarPosition:18,frontMatter:{sidebar_position:18},sidebar:"tutorialSidebar",previous:{title:"About NEXT.js",permalink:"/docs/Popular_Projects/6.16_Next.js"},next:{title:"FastAPI",permalink:"/docs/Popular_Projects/6.18_fastAPI"}},u=[{value:"Origin of LSP",id:"origin-of-lsp",children:[],level:2},{value:"How does it work",id:"how-does-it-work",children:[],level:2},{value:"Is Language Server the Solution?",id:"is-language-server-the-solution",children:[],level:2},{value:"Conclusion",id:"conclusion",children:[],level:2}],d={toc:u};function p(e){var t=e.components,o=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"language-server-protocol"},"Language Server Protocol"),(0,a.kt)("p",null,"For an Editor supporting features like code auto-completion, go-to definition and ,any other intelligent function is a challenging and time consuming task, because it requires writing a domain model which includes a scanner, parser, and many more. Language Server Protocol is a new technology used by many Open Source Editors. It enables autocompletion, goto-definition and other intelligent code functions to be offloaded to a dedicated server for the language currently being written."),(0,a.kt)("h2",{id:"origin-of-lsp"},"Origin of LSP"),(0,a.kt)("p",null,"Language Server Protocol was developed by Microsoft for Microsoft Visual Studio Code. Visual Studio Code's debut has had such a profound impact on the developer ecosystem that there is no turning back. Later on it is adopted by many companies, In 2016 Microsoft, Red Hat, and Codenvy have announced a collaboration to standardise the protocol's specification. Its specification is hosted and developed on GitHub."),(0,a.kt)("h2",{id:"how-does-it-work"},"How does it work"),(0,a.kt)("p",null,"A language server runs library in its own process and use inter-process communication to communicate, A protocol is made up of the messages that are transmitted back and forth over JSON-RPC.Communication between tool and language server works like,"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"The User opens a file in the tool"),": When the tool detects that a document is open, it sends a notification to the language server. The truth about the contents of the document is now preserved in memory by the tool rather than on the file system."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"The user makes edits"),": The language server updates the semantic information of the programme after the tool alerts the server about the document modification. As a result, the language server analyses the data and tells the tool of any mistakes or warnings that have been found."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},'The user executes "Go to Definition" on a symbol in the editor'),": The tool makes a request to the server with two parameters: (1) the document URI and (2) the text location where the Go to Definition request was made. The document URI and the location of the symbol definition inside the document are returned by the server."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"The user closes the file"),": The tool sends a notification to the language server, alerting it that the document is no longer in memory and that the current contents are up to date on the file system.")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/54666019/135633569-85c788f3-e944-4869-9841-38d3c035e2ac.png",alt:"lsp-flow-diagram"})),(0,a.kt)("h2",{id:"is-language-server-the-solution"},"Is Language Server the Solution?"),(0,a.kt)("p",null,"When we came to considering IDE tool support, we discovered that creating tools/plugins for each of the IDEs was a time-consuming effort. Then we came upon this fantastic Language Server Protocol solution. Language Server Protocol requires two parties to comply with the protocol specification: a client and a server implementation. The server implementation exposes IDE features such as auto-completion, document symbols, and go to definition. Any Language Server client can easily embed the server implementation, and all clients behave in the same way during each operation. So the answer is YES to to use the Language Server Protocol for your Language and for your client."),(0,a.kt)("h2",{id:"conclusion"},"Conclusion"),(0,a.kt)("p",null,"We have studied the LSP and how it brought the change in the world of IDE's to make them more convenient and easy to use for development, Below are some main points discussed above:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"LSP allows you to share a set of IDE features across several IDEs/tools."),(0,a.kt)("li",{parentName:"ul"},"Maintain consistency by LSP across diverse tooling environments by using the same capability behaviour."),(0,a.kt)("li",{parentName:"ul"},"There's no need to implement the same feature for each client."),(0,a.kt)("li",{parentName:"ul"},"Maintaining a single server implementation rather than multiple ones for different clients.")))}p.isMDXComponent=!0}}]);