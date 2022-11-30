"use strict";(globalThis["webpackChunkastral"]=globalThis["webpackChunkastral"]||[]).push([[6],{18534:(e,t,o)=>{o.r(t),o.d(t,{default:()=>we});var s=o(59835),n=o(61957);const i=["href"],a={id:"layout-container",ripple:!1},l={id:"left-drawer",class:"flex justify-end"},r={id:"middle-page"},c={key:0,id:"post-entry",unelevated:"",class:"gt-xs flex column align-self relative-position"},d=(0,s._)("div",{id:"bottom-drawer-placeholder"},null,-1),u={id:"right-drawer",class:"flex justify-start"},p={key:0,id:"bottom-message-entry",unelevated:"",class:"flex column align-self relative-position q-px-md"},m={key:1,id:"bottom-post-entry-top-border"},g={key:2,id:"bottom-post-entry",unelevated:"",class:"flex column align-self relative-position q-px-md"},h=(0,s.Uk)(" click to collapse/expand or drag to move "),y=(0,s.Uk)("forward"),f=(0,s.Uk)("scroll to top"),w=(0,s.Uk)("back");function k(e,t,o,k,b,v){const q=(0,s.up)("TheUserMenu"),P=(0,s.up)("router-view"),C=(0,s.up)("q-page-container"),M=(0,s.up)("q-btn"),$=(0,s.up)("BasePostEntry"),_=(0,s.up)("TheSearchMenu"),Z=(0,s.up)("q-page-sticky"),z=(0,s.up)("q-tooltip"),E=(0,s.up)("q-icon"),S=(0,s.up)("q-fab"),W=(0,s.up)("q-layout"),x=(0,s.Q2)("touch-pan");return(0,s.wg)(),(0,s.j4)(W,null,{default:(0,s.w5)((()=>[e.updatingFont?(0,s.kq)("",!0):((0,s.wg)(),(0,s.iD)("link",{key:0,id:"font-link",rel:"stylesheet",href:`https://fonts.googleapis.com/css2?family=${e.googleFontsName}`,crossorigin:""},null,8,i)),(0,s._)("div",a,[(0,s._)("div",l,[(0,s.Wm)(q,{"item-mode":e.$q.screen.width<1023,"show-compact-mode-items":e.$q.screen.width<700,posting:e.postEntryOpen,onTogglePostEntry:e.togglePostEntry,onScrollToRect:e.scrollToRect},null,8,["item-mode","show-compact-mode-items","posting","onTogglePostEntry","onScrollToRect"])]),(0,s._)("div",r,[(0,s.Wm)(C,{ref:"pageContainer"},{default:(0,s.w5)((()=>[(0,s.Wm)(P,null,{default:(0,s.w5)((({Component:t})=>[((0,s.wg)(),(0,s.j4)(s.Ob,null,[((0,s.wg)(),(0,s.j4)((0,s.LL)(t),{key:e.$route.path,onScrollToRect:e.scrollToRect,onReplyEvent:e.setReplyEvent,onUpdateFont:e.updateFont},null,40,["onScrollToRect","onReplyEvent","onUpdateFont"]))],1024))])),_:1})])),_:1},512),e.$q.screen.width>=600&&e.postEntryOpen?((0,s.wg)(),(0,s.iD)("div",c,[(0,s.Wm)(M,{icon:"close",flat:"",dense:"",onClick:e.togglePostEntry,class:"self-end",style:{position:"absolute",top:"0",right:"0","z-index":"1"}},null,8,["onClick"]),(0,s.Wm)($,{event:e.replyEvent,onClearEvent:t[0]||(t[0]=t=>e.replyEvent=null),onSent:e.togglePostEntry,class:"q-px-md q-pt-sm"},null,8,["event","onSent"])])):(0,s.kq)("",!0),d]),(0,s._)("div",u,[(0,s.Wm)(_)])]),e.$q.screen.width<600?((0,s.wg)(),(0,s.j4)(Z,{key:1,onClick:(0,n.iM)(e.resizePostEntryPlaceholder,["stop"]),id:"bottom-drawer",position:"bottom",class:"z-top xs lt-sm"},{default:(0,s.w5)((()=>[e.messageMode?((0,s.wg)(),(0,s.iD)("div",p,[(0,s.Wm)($,{event:e.replyEvent,"message-mode":e.messageMode,onClearEvent:t[1]||(t[1]=t=>e.replyEvent=null),onSent:t[2]||(t[2]=t=>e.replyEvent=null),onResized:e.resizePostEntryPlaceholder,"auto-focus":!1},null,8,["event","message-mode","onResized"])])):(0,s.kq)("",!0),e.messageMode?((0,s.wg)(),(0,s.iD)("div",m)):(0,s.kq)("",!0),e.postEntryOpen?((0,s.wg)(),(0,s.iD)("div",g,[(0,s.Wm)($,{onSent:e.togglePostEntry,onResized:e.resizePostEntryPlaceholder,"auto-focus":!1},null,8,["onSent","onResized"])])):(0,s.kq)("",!0),(0,s.Wm)(q,{id:"bottom-menu","compact-mode":!0,posting:e.postEntryOpen,onTogglePostEntry:e.togglePostEntry},null,8,["posting","onTogglePostEntry"])])),_:1},8,["onClick"])):(0,s.kq)("",!0),(0,s.Wm)(Z,{position:"top-right",offset:e.fabPos,id:"navagation-buttons"},{default:(0,s.w5)((()=>[(0,s.wy)(((0,s.wg)(),(0,s.j4)(S,{direction:"left",color:"accent",class:"no-margin no-padding z-top","model-value":!0,persistent:"",flat:"",padding:"xs",disable:e.draggingFab},{tooltip:(0,s.w5)((()=>[(0,s.Wm)(z,null,{default:(0,s.w5)((()=>[h])),_:1})])),icon:(0,s.w5)((()=>[(0,s.Wm)(E,{name:"drag_indicator"})])),"active-icon":(0,s.w5)((()=>[(0,s.Wm)(E,{name:"drag_indicator"})])),default:(0,s.w5)((()=>[(0,s.Wm)(M,{onClick:(0,n.iM)(e.forward,["stop"]),color:"primary",unelevated:"",round:"",outline:"",icon:"keyboard_arrow_right",disable:e.draggingFab},{default:(0,s.w5)((()=>[(0,s.Wm)(z,null,{default:(0,s.w5)((()=>[y])),_:1})])),_:1},8,["onClick","disable"]),(0,s.Wm)(M,{onClick:(0,n.iM)(e.scrollToTop,["stop"]),color:"primary",unelevated:"",round:"",outline:"",icon:"keyboard_double_arrow_up",disable:e.draggingFab||"inbox"===e.$route.name||"messages"===e.$route.name},{default:(0,s.w5)((()=>[(0,s.Wm)(z,null,{default:(0,s.w5)((()=>[f])),_:1})])),_:1},8,["onClick","disable"]),(0,s.Wm)(M,{onClick:(0,n.iM)(e.back,["stop"]),color:"primary",unelevated:"",round:"",outline:"",icon:"keyboard_arrow_left",disable:e.draggingFab},{default:(0,s.w5)((()=>[(0,s.Wm)(z,null,{default:(0,s.w5)((()=>[w])),_:1})])),_:1},8,["onClick","disable"])])),_:1},8,["disable"])),[[x,e.moveFab,void 0,{prevent:!0,mouse:!0}]])])),_:1},8,["offset"])])),_:1})}o(40702),o(18964);var b=o(43701),v=o(19302),q=o(63703),P=o(34136),C=o(86970);const M={key:1,style:{"min-height":"1rem"}},$={key:2,avatar:"",class:"q-mx-auto no-padding relative-position"},_={key:2,style:{"min-height":"1rem"}};function Z(e,t,o,n,i,a){const l=(0,s.up)("BaseUserCard"),r=(0,s.up)("BaseUserAvatar"),c=(0,s.up)("q-item"),d=(0,s.up)("q-item-section"),u=(0,s.up)("q-icon"),p=(0,s.up)("q-badge"),m=(0,s.up)("BaseButtonPost"),g=(0,s.up)("BaseButtonSetUser"),h=(0,s.up)("q-list");return(0,s.wg)(),(0,s.j4)(h,{class:(0,C.C_)(e.compactMode?"flex row no-wrap justify-around items-center full-width":"text-right"),dense:e.compactMode},{default:(0,s.w5)((()=>[e.$store.state.keys.pub?((0,s.wg)(),(0,s.j4)(c,{key:0,class:(0,C.C_)(["col no-padding flex items-center",e.compactMode?"justify-center":"justify-end"]),clickable:"",onClick:t[0]||(t[0]=t=>e.toProfile(e.$store.state.keys.pub))},{default:(0,s.w5)((()=>[e.compactMode?(0,s.kq)("",!0):((0,s.wg)(),(0,s.j4)(l,{key:0,pubkey:e.$store.state.keys.pub,"align-right":!0,wrap:!0,class:"gt-sm"},null,8,["pubkey"])),e.compactMode?(0,s.kq)("",!0):((0,s.wg)(),(0,s.j4)(r,{key:1,pubkey:e.$store.state.keys.pub,"align-right":!0,"show-verified":!0,size:"lg",class:"q-mr-sm lt-md"},null,8,["pubkey"])),e.$store.state.keys.pub&&e.compactMode?((0,s.wg)(),(0,s.j4)(r,{key:2,pubkey:e.$store.state.keys.pub,"align-right":!0,size:"1.5rem"},null,8,["pubkey"])):(0,s.kq)("",!0)])),_:1},8,["class"])):(0,s.kq)("",!0),e.compactMode?(0,s.kq)("",!0):((0,s.wg)(),(0,s.iD)("div",M)),((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(e.filteredUserMenuItems,(t=>((0,s.wg)(),(0,s.j4)(c,{clickable:"",class:(0,C.C_)(["menu-item",(e.$route.path.split("/")[1]===t.match?"menu-item-active text-accent ":"")+(e.compactMode?"no-margin no-padding col":"self-end q-px-none")]),dense:e.compactMode,style:(0,C.j5)(e.compactMode?"":"min-height: 2.75rem;"),active:e.$route.name===t.title,"active-class":"",onClick:o=>e.handleClick(o,t),key:t.title},{default:(0,s.w5)((()=>[e.compactMode?(0,s.kq)("",!0):((0,s.wg)(),(0,s.j4)(d,{key:0,class:"gt-sm text-uppercase",style:{"font-size":"1rem"}},{default:(0,s.w5)((()=>[(0,s._)("div",null,(0,C.zw)(e.$t(t.title)),1)])),_:2},1024)),t.icon&&!e.compactMode?((0,s.wg)(),(0,s.j4)(d,{key:1,avatar:"",class:"relative-position no-padding",style:{"min-width":"2.5rem"}},{default:(0,s.w5)((()=>[(0,s.Wm)(u,{outline:"",name:t.icon},null,8,["name"]),"notifications"===t.title&&e.$store.state.unreadNotifications?((0,s.wg)(),(0,s.j4)(p,{key:0,color:"secondary",floating:"",class:"q-mr-md text-bold",outline:""},{default:(0,s.w5)((()=>[(0,s.Uk)((0,C.zw)(e.$store.state.unreadNotifications),1)])),_:1})):(0,s.kq)("",!0),"messages"===t.title&&e.$store.getters.unreadChats?((0,s.wg)(),(0,s.j4)(p,{key:1,color:"secondary",floating:"",class:"q-mr-md text-bold",outline:""},{default:(0,s.w5)((()=>[(0,s.Uk)((0,C.zw)(e.$store.getters.unreadChats),1)])),_:1})):(0,s.kq)("",!0)])),_:2},1024)):(0,s.kq)("",!0),t.icon&&e.compactMode?((0,s.wg)(),(0,s.iD)("div",$,[(0,s.Wm)(u,{name:t.icon,size:"sm"},null,8,["name"]),t.badge&&e.$store.getters[t.badge]?((0,s.wg)(),(0,s.j4)(p,{key:0,color:"secondary",floating:"",rounded:"",style:{"margin-top":".2rem","margin-left":".1rem"}})):(0,s.kq)("",!0)])):(0,s.kq)("",!0)])),_:2},1032,["dense","style","active","onClick","class"])))),128)),e.compactMode?(0,s.kq)("",!0):((0,s.wg)(),(0,s.iD)("div",_)),(0,s._)("div",{color:"primary",class:(0,C.C_)(["flex",e.compactMode?"col justify-center":"q-my-md justify-end"])},[e.$store.state.keys.pub?((0,s.wg)(),(0,s.j4)(m,{key:0,"is-open":e.posting,verbose:!0,onOpen:t[1]||(t[1]=t=>e.$emit("toggle-post-entry")),outline:!e.compactMode,flat:e.compactMode,color:"primary",size:e.compactMode?"sm":"lg",class:(0,C.C_)(e.compactMode?"":"q-px-sm")},null,8,["is-open","outline","flat","size","class"])):(0,s.kq)("",!0),e.$store.state.keys.pub?(0,s.kq)("",!0):((0,s.wg)(),(0,s.j4)(g,{key:1,to:{path:"/"},verbose:!0,outline:!e.compactMode,flat:e.compactMode,color:"primary",size:e.compactMode?"sm":"lg",class:(0,C.C_)(e.compactMode?"":"q-px-sm")},null,8,["outline","flat","size","class"]))],2)])),_:1},8,["class","dense"])}var z=o(18933),E=o(36345);const S={key:0,class:"gt-sm",style:{"font-size":"1rem","font-weight":"700","letter-spacing":".05rem"}},W={key:0},x={key:1};function B(e,t,o,n,i,a){const l=(0,s.up)("q-icon"),r=(0,s.up)("q-btn");return(0,s.wg)(),(0,s.j4)(r,{unelevated:"",clickable:"",size:e.buttonSize,class:"button-post",dense:"",onClick:t[0]||(t[0]=t=>e.$emit("open"))},{default:(0,s.w5)((()=>[e.verbose?((0,s.wg)(),(0,s.iD)("div",S,[e.isOpen?(0,s.kq)("",!0):((0,s.wg)(),(0,s.iD)("span",W," "+(0,C.zw)(e.$t("post"))+" ",1)),e.isOpen?((0,s.wg)(),(0,s.iD)("span",x," "+(0,C.zw)(e.$t("close"))+" ",1)):(0,s.kq)("",!0)])):(0,s.kq)("",!0),(0,s.Wm)(l,{name:e.isOpen?"close":"chat_bubble_outline",class:(0,C.C_)(e.verbose?"":"flip-horizontal"),color:e.isOpen?"":"primary",size:e.buttonSize},null,8,["name","class","color","size"])])),_:1},8,["size"])}const j=(0,s.aZ)({name:"BaseButtonPost",emits:["open"],props:{isOpen:{type:Boolean,required:!0},buttonSize:{type:String,required:!1,default:"sm"},verbose:{type:Boolean,default:!1}}});var T=o(11639),F=o(24455),Q=o(22857),U=o(69984),O=o.n(U);const D=(0,T.Z)(j,[["render",B]]),R=D;O()(j,"components",{QBtn:F.Z,QIcon:Q.Z});const I={key:0,class:"gt-sm",style:{"font-size":"1rem","font-weight":"700","letter-spacing":".05rem"}};function L(e,t,o,n,i,a){const l=(0,s.up)("q-icon"),r=(0,s.up)("q-btn");return(0,s.wg)(),(0,s.j4)(r,{unelevated:"",clickable:"",size:e.buttonSize,class:"button-set-user",dense:""},{default:(0,s.w5)((()=>[e.verbose?((0,s.wg)(),(0,s.iD)("div",I,[(0,s._)("span",null," "+(0,C.zw)(e.$t("setUser"))+" ",1)])):(0,s.kq)("",!0),(0,s.Wm)(l,{name:"login",color:"primary",size:e.buttonSize},null,8,["size"])])),_:1},8,["size"])}const N=(0,s.aZ)({name:"BaseButtonSetUser",props:{buttonSize:{type:String,required:!1,default:"sm"},verbose:{type:Boolean,default:!1}}}),H=(0,T.Z)(N,[["render",L]]),K=H;O()(N,"components",{QBtn:F.Z,QIcon:Q.Z});const V=(0,s.aZ)({name:"TheUserMenu",mixins:[z.Z],emits:["toggle-post-entry","scroll-to-rect"],props:{iconMode:{type:Boolean,default:!1},compactMode:{type:Boolean,default:!1},showCompactModeItems:{type:Boolean,default:!1},posting:{type:Boolean,required:!0}},data(){return{userMenuItems:[{title:"feed",icon:"newspaper",to:"/feed",match:"feed"},{title:"notifications",badge:"unreadNotifications",icon:"notifications",to:"/notifications",match:"notifications"},{title:"messages",badge:"unreadChats",icon:"mail_lock",to:"/messages/inbox",match:"messages"},{title:"settings",icon:"settings",to:"/settings",match:"settings"},{title:"follow",icon:"search",to:"/follow",match:"follow",compactMenuOnly:!0}]}},components:{BaseUserCard:E.Z,BaseButtonPost:R,BaseButtonSetUser:K},computed:{filteredUserMenuItems(){return this.$store.state.keys.pub?this.compactMode||this.showCompactModeItems?this.userMenuItems:this.userMenuItems.filter((e=>!e.compactMenuOnly)):this.userMenuItems.filter((e=>"feed"===e.title))}},methods:{handleClick(e,t){"feed"===t.title&&"feed"===this.$route.name?(e.preventDefault(),this.$emit("scroll-to-rect",{top:0})):this.$router.push(t.to)}}});var Y=o(13246),A=o(490),G=o(50926),J=o(76749),X=o(20990),ee=o(87743),te=o(44458),oe=o(62146);const se=(0,T.Z)(V,[["render",Z],["__scopeId","data-v-68237588"]]),ne=se;O()(V,"components",{QList:Y.Z,QItem:A.Z,QSeparator:G.Z,QItemSection:J.Z,QIcon:Q.Z,QBadge:X.Z,QDialog:ee.Z,QCard:te.Z,QBtn:F.Z}),O()(V,"directives",{ClosePopup:oe.Z});var ie=o(64581),ae=o(57674),le=o(52729);const{getVerticalScrollPosition:re,setVerticalScrollPosition:ce}=b.ZP,de=(0,s.aZ)({name:"MainLayout",components:{TheUserMenu:ne,TheSearchMenu:ie.Z},setup(){const e=(0,v.Z)();return e},data(){return{middlePagePos:{},fabPos:[0,10],draggingFab:!1,broadcastChannel:new BroadcastChannel("astral"),activeWindow:!1,timeout:null,hasLaunched:!1,postEntryOpen:!1,replyEvent:null,googleFontsName:"",updatingFont:!0}},computed:{scrollingContainer(){var e;return this.$q.screen.width<600?window:null===(e=this.$refs.pageContainer)||void 0===e?void 0:e.$el},messageMode(){return"messages"===this.$route.name?this.replyEvent?"reply":"message":null}},created(){this.loadPreferences()},mounted(){var e;this.broadcastChannel.onmessage=e=>{let{type:t}=e.data;"active"===t&&this.activeWindow?this.deactivateWindow():"closing"===t&&this.timeout?clearTimeout(this.timeout):"done"===t&&this.activeWindow&&this.launch()},this.activateWindow(),document.addEventListener("visibilitychange",this.activateWindow()),window.onfocus=this.activateWindow,document.querySelector("#left-drawer").addEventListener("wheel",this.redirectScroll),this.$router.beforeEach(((e,t)=>{this.preserveScrollPos(e,t)})),this.$router.afterEach(((e,t)=>{this.restoreScrollPos(e,t)}));let t=null===(e=this.$refs.pageContainer)||void 0===e?void 0:e.$el.getBoundingClientRect();t&&(this.fabPos[0]=t.right-t.width),window.onbeforeunload=async()=>{await(0,P.jd)()},this.updatingFont=!1,this.resizePostEntryPlaceholder()},beforeUnmount(){document.querySelector("#left-drawer").removeEventListener("wheel",this.redirectScroll)},methods:{redirectScroll(e){let t=re(this.scrollingContainer);ce(this.scrollingContainer,t+e.deltaY)},preserveScrollPos(e,t){this.middlePagePos[t.fullPath]=re(this.scrollingContainer)},restoreScrollPos(e,t){this.middlePagePos[e.fullPath]?ce(this.scrollingContainer,this.middlePagePos[e.fullPath],500):this.scrollToTop()},scrollToTop(){ce(this.scrollingContainer,0,500)},back(){this.$router.go(-1)},forward(){this.$router.go(1)},moveFab(e){this.draggingFab=!0!==e.isFirst&&!0!==e.isFinal,this.fabPos=[this.fabPos[0]-e.delta.x,this.fabPos[1]+e.delta.y]},scrollToRect(e){let t=Math.max(e.top,0);ce(this.scrollingContainer,t,500)},async launch(){this.timeout=null,this.hasLaunched&&(0,P.Ol)(),this.$store.state.keys.pub?this.$store.dispatch("launch"):this.$store.dispatch("launchWithoutKey"),this.hasLaunched=!0},async activateWindow(){document.hidden||this.activeWindow||(this.activeWindow=!0,this.broadcastChannel.postMessage({type:"active"}),this.timeout||(this.timeout=setTimeout(this.launch,100)))},async deactivateWindow(){this.broadcastChannel.postMessage({type:"closing"}),this.activeWindow=!1,(0,P.og)()},togglePostEntry(){this.postEntryOpen=!this.postEntryOpen},setReplyEvent(e){this.replyEvent=e,console.log("event",e,this.replyEvent)},resizePostEntryPlaceholder(){setTimeout((()=>{var e;document.querySelector("#bottom-drawer-placeholder").style.minHeight=`${(null===(e=document.querySelector("#bottom-drawer"))||void 0===e?void 0:e.clientHeight)||0}px`}),1e3)},updateFont(e){this.updatingFont=!0,(0,ae.Z)("font",e),this.googleFontsName=e.replace(" ","+"),this.updatingFont=!1},lightOrDark(e){var t,o,s,n;return e.match(/^rgb/)?(e=e.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+(?:\.\d+)?))?\)$/),t=e[1],o=e[2],s=e[3]):(e=+("0x"+e.slice(1).replace(e.length<5&&/./g,"$&$&")),t=e>>16,o=e>>8&255,s=255&e),n=Math.sqrt(t*t*.299+o*o*.587+s*s*.114),n>127.5?"light":"dark"},loadPreferences(){let e=q.Z.getItem("config")||{},t=e.preferences;if(t){let e=t.color;if(e){let{primary:t,secondary:o,accent:s,background:n}=e;t&&(0,ae.Z)("primary",t),o&&(0,ae.Z)("secondary",o),s&&(0,ae.Z)("accent",s),n||(n=(0,le.Z)("background")||(0,le.Z)("dark")),(0,ae.Z)("background",n),this.$q.dark.set("dark"===this.lightOrDark(n))}let o=t.font||"Roboto";this.updateFont(o)}else{let e=(0,le.Z)("background")||(0,le.Z)("dark");(0,ae.Z)("background",e),this.$q.dark.set("dark"===this.lightOrDark(e));let t="Roboto";this.updateFont(t)}}}});var ue=o(77605),pe=o(12133),me=o(30627),ge=o(88830),he=o(46858),ye=o(2873);const fe=(0,T.Z)(de,[["render",k]]),we=fe;O()(de,"components",{QLayout:ue.Z,QPageContainer:pe.Z,QSeparator:G.Z,QBtn:F.Z,QPageSticky:me.Z,QFab:ge.Z,QTooltip:he.Z,QIcon:Q.Z}),O()(de,"directives",{TouchPan:ye.Z})}}]);