"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7211],{3905:(e,n,t)=>{t.d(n,{Zo:()=>h,kt:()=>u});var a=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=a.createContext({}),p=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},h=function(e){var n=p(e.components);return a.createElement(l.Provider,{value:n},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),c=p(t),d=o,u=c["".concat(l,".").concat(d)]||c[d]||m[d]||i;return t?a.createElement(u,r(r({ref:n},h),{},{components:t})):a.createElement(u,r({ref:n},h))}));function u(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,r=new Array(i);r[0]=d;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[c]="string"==typeof e?e:o,r[1]=s;for(var p=2;p<i;p++)r[p]=t[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},71294:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>h,contentTitle:()=>l,default:()=>u,frontMatter:()=>s,metadata:()=>p,toc:()=>c});var a=t(87462),o=t(63366),i=(t(67294),t(3905)),r=["components"],s={id:"build-hrmp-channels",title:"Opening HRMP Channels",sidebar_label:"Opening HRMP Channels",description:"Steps on how to open HRMP channels between parachains.",keywords:["HRMP","parachain","statemint","proposal","asset hub","statemine"],slug:"../build-hrmp-channels"},l=void 0,p={unversionedId:"build/build-hrmp-channels",id:"build/build-hrmp-channels",title:"Opening HRMP Channels",description:"Steps on how to open HRMP channels between parachains.",source:"@site/../docs/build/build-hrmp-channels.md",sourceDirName:"build",slug:"/build-hrmp-channels",permalink:"/docs/build-hrmp-channels",draft:!1,editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/build/build-hrmp-channels.md",tags:[],version:"current",lastUpdatedBy:"Filippo",lastUpdatedAt:1688395575,formattedLastUpdatedAt:"Jul 3, 2023",frontMatter:{id:"build-hrmp-channels",title:"Opening HRMP Channels",sidebar_label:"Opening HRMP Channels",description:"Steps on how to open HRMP channels between parachains.",keywords:["HRMP","parachain","statemint","proposal","asset hub","statemine"],slug:"../build-hrmp-channels"},sidebar:"docs",previous:{title:"SS58 Registry",permalink:"/docs/build-ss58-registry"},next:{title:"Integration Initiation",permalink:"/docs/build-integration"}},h={},c=[{value:"Opening HRMP channel: parachain to parachain",id:"opening-hrmp-channel-parachain-to-parachain",level:2},{value:"Opening HRMP Channels with System Parachains",id:"opening-hrmp-channels-with-system-parachains",level:2},{value:"Publication on Polkassembly for discussion and feedback",id:"publication-on-polkassembly-for-discussion-and-feedback",level:2},{value:"Example: Opening an HRMP Channel with the AssetHub",id:"example-opening-an-hrmp-channel-with-the-assethub",level:3},{value:"Preimage submission on democracy tab (Polkadot JS Apps)",id:"preimage-submission-on-democracy-tab-polkadot-js-apps",level:2},{value:"Vote by the community",id:"vote-by-the-community",level:2}],m={toc:c},d="wrapper";function u(e){var n=e.components,s=(0,o.Z)(e,r);return(0,i.kt)(d,(0,a.Z)({},m,s,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/learn-xcm#xcmp-lite-hrmp"},"HRMP")," has the same interface and functionality as\n",(0,i.kt)("a",{parentName:"p",href:"/docs/learn-xcm#xcmp-cross-chain-message-passing"},"XCMP")," but is much more demanding on\nresources since it passes all messages via the Relay Chain. When XCMP is implemented on Polkadot,\nHRMP is planned to be deprecated and phased out in favor of it."),(0,i.kt)("h2",{id:"opening-hrmp-channel-parachain-to-parachain"},"Opening HRMP channel: parachain to parachain"),(0,i.kt)("p",null,"To open a channel from one parachain to another that are not system chains on Polkadot, the\ngovernance of each parachain needs to declare its intent to open a channel on the Relay Chain, and\nthe second chain needs to accept and do the same."),(0,i.kt)("p",null,"In order to do this, the calls to be dispatched from both chains are:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"hrmp > hrmpInitOpenChannel(recipient, proposedMaxCapacity, proposedMaxMessageSize)"),": this call\ninitiates opening a channel from a parachain to a given recipient with given channel")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"hrmp > hrmpAcceptOpenChannel(sender)"),": accepting the channel open request from the given sender."))),(0,i.kt)("p",null,"Each parachain is to use its own governance process to execute this. The call will be executed on\nthe Relay Chain."),(0,i.kt)("h2",{id:"opening-hrmp-channels-with-system-parachains"},"Opening HRMP Channels with System Parachains"),(0,i.kt)("p",null,"Opening an HRMP channel with a system parachain requires a referendum. Like all other governance\nproposals, proposers should follow best practices like opening a discussion on\n",(0,i.kt)("a",{parentName:"p",href:"https://polkadot.polkassembly.io/"},"Polkassembly")," or ",(0,i.kt)("a",{parentName:"p",href:"https://polkadot.subsquare.io/"},"Subsquare")," and\nthen submitting the proposal on-chain."),(0,i.kt)("p",null,"Proposals should generally be a ",(0,i.kt)("inlineCode",{parentName:"p"},"batch_all")," call containing:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"A ",(0,i.kt)("inlineCode",{parentName:"li"},"force_transfer")," of the channel deposit from the Treasury to the System parachain's sovereign\naccount. Remember that a bi-direction channel is ",(0,i.kt)("em",{parentName:"li"},"two")," channels so will need double the amount."),(0,i.kt)("li",{parentName:"ol"},"A ",(0,i.kt)("inlineCode",{parentName:"li"},"force_open_hrmp_channel")," from your chain to the system chain."),(0,i.kt)("li",{parentName:"ol"},"A ",(0,i.kt)("inlineCode",{parentName:"li"},"force_open_hrmp_channel")," from the system chain to your chain.")),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"Please ensure that you use the new ",(0,i.kt)("inlineCode",{parentName:"p"},"force_open_hrmp_channel")," directly on the Relay Chain, rather\nthan the old two-phase channel request/accept method.")),(0,i.kt)("h2",{id:"publication-on-polkassembly-for-discussion-and-feedback"},"Publication on Polkassembly for discussion and feedback"),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"https://polkadot.polkassembly.io/discussions"},"discussions section of Polkassembly")," is the best\nplace to share the reasoning behind your proposal: make sure to log in with the proposer address (if\npossible) before publishing yours, and if you can do this also make sure the address has an on-chain\nidentity."),(0,i.kt)("h3",{id:"example-opening-an-hrmp-channel-with-the-assethub"},"Example: Opening an HRMP Channel with the AssetHub"),(0,i.kt)("p",null,"The following highlights the steps required to submit a proposal for opening an HRMP channel with\nthe AssetHub. Your submission should contain the following sections to be considered complete for\nthe community to review and ultimately vote on:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"A request on what the proposal aims to do (opening an HRMP channel with the AssetHub);")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"The use cases this channel will support for your chain;")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Technical details of the proposal, including proposal parameters and technical details of this\ncall (On Kusama, most proposals were designed as a batchAll calls):"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"A ",(0,i.kt)("inlineCode",{parentName:"li"},"forceTransfer")," of 20 DOT from the Treasury to AssetHub sovereign account."),(0,i.kt)("li",{parentName:"ul"},"A ",(0,i.kt)("inlineCode",{parentName:"li"},"forceOpenhrmpchannel")," from AssetHub (1,000) to ParaID."),(0,i.kt)("li",{parentName:"ul"},"A ",(0,i.kt)("inlineCode",{parentName:"li"},"forceOpenhrmpChannel")," from ParaID to AssetHub (1,000).")),(0,i.kt)("p",{parentName:"li"},"Please note that if governance decides to reduce the HRMP channel deposit on Polkadot to 0 DOT,\nthe first transaction should not be necessary (these guidelines will be updated accordingly).")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"The XCM message to the Asset Hub, which can be decoded on the network;")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"The call data to verify on\n",(0,i.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Frpc.polkadot.io#/extrinsics/decode"},"Polkadot JS Apps Decode"),"\ntab;")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"The preimage hash to include in the proposal's submission. Note that if the proposer is planning\nto\n",(0,i.kt)("a",{parentName:"p",href:"/docs/maintain-guides-polkadot-opengov#submitting-a-referendum-on-the-whitelisted-caller-track"},"submit a referendum on the Whitelisted Caller Track"),",\nthe preimage hash needs to be submitted to and whitelisted by the\n",(0,i.kt)("a",{parentName:"p",href:"/docs/learn-polkadot-opengov#the-technical-fellowship"},"Technical Fellowship"),"."))),(0,i.kt)("p",null,"Below is an example of how teams followed this process on Kusama, as a way to:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Proposal to open HRMP channel between Bifrost and the Asset Hub: the motion can be found\n",(0,i.kt)("a",{parentName:"li",href:"https://kusama.polkassembly.io/motion/418"},"here"),".")),(0,i.kt)("h2",{id:"preimage-submission-on-democracy-tab-polkadot-js-apps"},"Preimage submission on democracy tab (Polkadot JS Apps)"),(0,i.kt)("p",null,"Once the community has given enough feedback (we expect these proposal to be non controversial)\nplease submit the image on the discussion post in the\n",(0,i.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Frpc.polkadot.io#/democracy"},"Democracy"),' tab on\nPolkadot JS Apps, by using the "Submit Preimage" button:'),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"submit preimage",src:t(11275).Z,width:"1438",height:"582"})),(0,i.kt)("p",null,"On the pop up window, compose the preimage in the discussion post: making sure the proposal hash is\nthe same as in the post."),(0,i.kt)("h2",{id:"vote-by-the-community"},"Vote by the community"),(0,i.kt)("p",null,"After the community voting period, there will be an enactment period. In general, on Kusama these\nhave been defined in shorter terms than the voting periods. Again, it is very important you\nencourage the community to vote on this, highlighting the benefits for your chain, use cases enabled\nwith this submission, among other things. After the enactment period is over, both chains will\nauthorize the channel."))}u.isMDXComponent=!0},11275:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/submit-preimage-280c091d0ec2c4c7333258582e11cd94.png"}}]);