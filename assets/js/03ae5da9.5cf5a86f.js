"use strict";(self.webpackChunkgwoc_open_source=self.webpackChunkgwoc_open_source||[]).push([[9374],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return m}});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=r(e,["components","mdxType","originalType","parentName"]),h=p(a),m=o,d=h["".concat(s,".").concat(m)]||h[m]||c[m]||i;return a?n.createElement(d,l(l({ref:t},u),{},{components:a})):n.createElement(d,l({ref:t},u))}));function m(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=a.length,l=new Array(i);l[0]=h;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r.mdxType="string"==typeof e?e:o,l[1]=r;for(var p=2;p<i;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},4871:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return r},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return u},default:function(){return h}});var n=a(7462),o=a(3366),i=(a(7294),a(3905)),l=["components"],r={sidebar_position:4},s="PIP",p={unversionedId:"Popular_Projects/6.3_PIP",id:"Popular_Projects/6.3_PIP",isDocsHomePage:!1,title:"PIP",description:"What is PIP?",source:"@site/docs/Popular_Projects/6.3_PIP.md",sourceDirName:"Popular_Projects",slug:"/Popular_Projects/6.3_PIP",permalink:"/docs/Popular_Projects/6.3_PIP",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"NPM VS YARN",permalink:"/docs/Popular_Projects/6.2_npm_vs_yarn"},next:{title:"Visual Studio Code",permalink:"/docs/Popular_Projects/6.4_vscode"}},u=[{value:"<strong>What is PIP?</strong>",id:"what-is-pip",children:[],level:2},{value:"Python Packages: A Refresher",id:"python-packages-a-refresher",children:[],level:2},{value:"Installing Packages",id:"installing-packages",children:[],level:2},{value:"Using the requirements.txt File",id:"using-the-requirementstxt-file",children:[],level:2},{value:"Uninstalling Packages",id:"uninstalling-packages",children:[],level:2},{value:"Viewing All Installed Packages",id:"viewing-all-installed-packages",children:[],level:2},{value:"Viewing Details for an Installed Package",id:"viewing-details-for-an-installed-package",children:[],level:2},{value:"Freezing Package Versions",id:"freezing-package-versions",children:[],level:2},{value:"pip vs pip3",id:"pip-vs-pip3",children:[],level:2},{value:"<strong>Conclusion</strong>",id:"conclusion",children:[],level:2},{value:"<strong>External References</strong>",id:"external-references",children:[],level:2}],c={toc:u};function h(e){var t=e.components,a=(0,o.Z)(e,l);return(0,i.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"pip"},"PIP"),(0,i.kt)("p",{align:"center"},(0,i.kt)("img",{src:"https://github.com/GyaniRoman23/images/blob/main/What-is-PIP_Watermarked.png?raw=true",height:"250",width:"400"})),(0,i.kt)("h2",{id:"what-is-pip"},(0,i.kt)("strong",{parentName:"h2"},"What is PIP?")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"pip")," is the ",(0,i.kt)("a",{parentName:"p",href:"https://packaging.python.org/guides/tool-recommendations/"},"package installer")," for Python. You can use pip to install packages from the ",(0,i.kt)("a",{parentName:"p",href:"https://pypi.org/"},"Python Package Index")," and other indexes."),(0,i.kt)("h2",{id:"python-packages-a-refresher"},"Python Packages: A Refresher"),(0,i.kt)("p",null,"In a computer, files are not usually all stored in the same location. Every user follows a different structure for organizing files and folders for easy access. Similar files are usually grouped together, under a common directory, as they have a similar purpose. Instead of directories, however, libraries and methods are organized using what we call modules and packages. This is another method of file organization."),(0,i.kt)("p",null,"A Python module is a collection of methods and properties which share a common purpose. A package further groups similar modules together to present an independent ecosystem of code that can help solve a bigger problem. More often than not, projects require traditional algorithms to be followed to complete routine tasks like data sorting, searching, or data manipulation. Writing code for these use-cases inside your project can increase clutter, as the focus can shift from your business logic to your sorting and searching methods."),(0,i.kt)("p",null,"To address this problem, code for such regular activities is typically put as distinct modules, which helps to reduce clutter in the main project while also allowing for better testing and individual development. With package distribution platforms like the Python Package Index, these packages may subsequently be exported and made available to a large number of developers. Then you may use pip to install a package."),(0,i.kt)("h1",{id:"python-pip-tool"},(0,i.kt)("strong",{parentName:"h1"},"Python pip Tool")),(0,i.kt)("h2",{id:"installing-packages"},"Installing Packages"),(0,i.kt)("p",null,"The pip tool can be used to install packages available over the Python Package Index via the command line. pip comes preinstalled with most modern versions of Python. You need to put the name of the package that you wish to install in your project in the following syntax:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"pip install package_name\n")),(0,i.kt)("p",null,"As you can see, the above command is composed of three parts: "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"pip:")," Instructs the terminal to invoke the pip tool and pass the trailing tokens as arguments to it.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"install:")," Instructs the pip tool that a package needs to be installed.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"package_name:")," Denotes the name of the package that has to be installed."))),(0,i.kt)("p",null,"Here\u2019s how you can use this syntax to install the popular statistical library Numpy:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"pip install numpy\n")),(0,i.kt)("p",null,"If you have worked with npm, used for JavaScript development, the syntax is nearly the same:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"npm install package_name\n")),(0,i.kt)("p",null,"The tool looks for the package by name in the ",(0,i.kt)("a",{parentName:"p",href:"https://pypi.org/"},"PyPI")," (Python Package Index) and installs the package if it is available. "),(0,i.kt)("p",null,"You can also install multiple packages at once, using the following syntax:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"pip install package1 package2 package3 ...\n")),(0,i.kt)("p",null,"This is how you would use this syntax in a real-life scenario:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"pip install numpy pandas\n")),(0,i.kt)("h2",{id:"using-the-requirementstxt-file"},"Using the requirements.txt File"),(0,i.kt)("p",null,"The above method can get quite cumbersome if you have a long list of packages to install. pip offers a way of installing packages using a requirements.txt file. This is how a usual requirements.txt file looks:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"###### Packages that are not version-specific\nnumpy\npandas\nbeautiful-soup\n\n###### Packages that require certain versions to be installed\ndocopt == 0.6.1.            # When looking for the exact version\nkeyring >= 4.1.1.           # When looking for any version above the               \n                              specified one\nMopidy-Dirble ~= 1.1.       # When looking for a compatible release. \n                              Equivalent to >= 1.1or == 1.*\n")),(0,i.kt)("p",null,"And this is how the syntax of a pip call with a requirements.txt file looks like:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"pip install -r requirements.txt\n")),(0,i.kt)("h2",{id:"uninstalling-packages"},"Uninstalling Packages"),(0,i.kt)("p",null,"Many times, it is necessary to remove packages from your projects for maintenance or upgrading purposes. The pip tool can be used to remove packages from your project as well:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"pip uninstall package_name\n")),(0,i.kt)("p",null,"As you can see, the above command is composed of three tokens:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"pip:")," Instructs the terminal to invoke the pip tool and pass the trailing tokens as arguments to it.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"uninstall:")," Instructs the pip tool that an installed package needs to be removed.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"package_name:")," Denotes the name of the package that has to be removed."))),(0,i.kt)("p",null,"You can use the above syntax to uninstall any library, such as NumPy, like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"pip uninstall numpy\n")),(0,i.kt)("p",null,"Once again, this syntax is similar to that of npm\u2019s JavaScript package library:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"npm uninstall package_name\n")),(0,i.kt)("p",null,"For uninstalling multiple packages, you can follow this syntax:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"pip uninstall package1 package2 package3 ...\n")),(0,i.kt)("p",null,"This is how it would be used in a real-life scenario:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"pip uninstall numpy pandas\n")),(0,i.kt)("p",null,"You can also use the requirements.txt file to uninstall a list of packages at once:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"pip uninstall -r requirements.txt\n")),(0,i.kt)("h2",{id:"viewing-all-installed-packages"},"Viewing All Installed Packages"),(0,i.kt)("p",null,"Very often, you will need to view the list of packages that are installed in your project locally. Doing so helps you to identify if a package has been installed before, and helps you check if a certain version of a package is present in your project. The pip list command shows a list of all packages in your project. Here\u2019s how you can use the command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"pip list\n")),(0,i.kt)("p",null,"This will return an output similar to this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"docutils (0.10)\nJinja2 (2.7.2)\n# ...and so on\n")),(0,i.kt)("p",null,"Alternatively, you can pass an outdated option to retrieve a list of all packages with their current and latest available versions. This helps to identify which packages need to be updated. This is how the syntax looks like:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"pip list --outdated\n")),(0,i.kt)("p",null,"This is how a usual output would look like:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"docutils (Current 0.10 Latest: 0.11)\nSphinx (Current: 1.2.1 Latest 1.2.2)\n")),(0,i.kt)("h2",{id:"viewing-details-for-an-installed-package"},"Viewing Details for an Installed Package"),(0,i.kt)("p",null,"The pip show command helps you to view the details of an installed package in your Python project. It returns details like version, author, license, and dependencies for the said package. Its syntax is simple:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"pip show sphinx\n")),(0,i.kt)("p",null,"This is how a sample output would look like:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"Name: Sphinx\nVersion: 1.4.5\nSummary: Python documentation generator\nHome-page: http://sphinx-doc.org/\nAuthor: Georg Brandl\nAuthor-email: georg@python.org\nLicense: BSD\nLocation: /my/env/lib/python2.7/site-packages\nRequires: docutils, snowballstemmer, alabaster, Pygments, imagesize, Jinja2, babel, six\n")),(0,i.kt)("h2",{id:"freezing-package-versions"},"Freezing Package Versions"),(0,i.kt)("p",null,"An important feature that all package managers need to have is the ability to freeze packages to their set versions. This is important when the project is being developed on multiple systems, and the same version of packages is required across all of them to maintain the stability of the project."),(0,i.kt)("p",null,"While you can list out the installed packages with their versions with the list command, you will need to manually format them according to the requirements.txt file format that we saw earlier if you want to install these dependencies quickly on another system."),(0,i.kt)("p",null,"The pip freeze command does this for you without any hassle. It prints the list of installed packages in the requirements format, and you can combine it with the output redirection operator of the command line to save it to a file. This is how the complete syntax would look like:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"pip freeze > filename\n")),(0,i.kt)("p",null,"You can directly create a ready-to-go requirements.txt file by using this command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"pip freeze > requirements.txt\n")),(0,i.kt)("p",null,"Now you can put this requirements.txt file in the project in which you want to install these packages. We have already seen an example above on how to use such a file to install packages at once."),(0,i.kt)("h2",{id:"pip-vs-pip3"},"pip vs pip3"),(0,i.kt)("p",null,"Since Python 2 version 2.7.9 and Python 3 version 3.4, the standard Python installation includes a pip installation. However, when Python was upgraded from version 2 to 3, pip was also upgraded to pip3. When Python 3 was released, the old pip was replaced with a soft connection to the new pip3. This implies that you are actually invoking pip3 when you run the old pip on your command line with the new Python3 installed on your system."),(0,i.kt)("p",null,"If your system has both Python 2 and Python 3, the pip command will run the pip installer associated with your Python 2 installation, while the pip3 command will run the pip3 installer associated with your Python 3 installation. Both pip and pip3 have the same syntax; all you have to do is replace pip with pip3. Here's how to use pip3 to install NumPy:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"pip3 install numpy\n")),(0,i.kt)("p",null,"All other commands work similarly."),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"conclusion"},(0,i.kt)("strong",{parentName:"h2"},"Conclusion")),(0,i.kt)("p",null,"The Python pip tool contains a list of commands to help you manage your packages efficiently. install and uninstall commands can be used to add or remove packages easily. list and freeze can be used to view the list of installed packages in raw/formatted manner. show can be used to view all details of one package at once."),(0,i.kt)("p",null,"This tutorial discussed, with reference to syntax and examples, the basics of PyPI packages, and how to use them with the pip tool. Now you are ready to start using the official Python package manager like a Python pro!"),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"external-references"},(0,i.kt)("strong",{parentName:"h2"},"External References")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://pip.pypa.io/en/stable/"},"Official Documentation"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://www.datacamp.com/community/tutorials/pip-python-package-manager"},"Pip Python Package: A Definitive Guide"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://github.com/pypa/pip"},"Pip Github")))))}h.isMDXComponent=!0}}]);