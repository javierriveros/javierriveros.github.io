(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"3nLz":function(e,t,a){"use strict";a("t+fG")("fixed",(function(e){return function(){return e(this,"tt","","")}}))},"9eSz":function(e,t,a){"use strict";a("rzGZ"),a("Dq+y"),a("8npG"),a("YbXK"),a("eMsz"),a("zTTH"),a("3nLz");var n=a("TqRt");t.__esModule=!0,t.default=void 0;var i,r=n(a("PJYZ")),o=n(a("VbXa")),l=n(a("8OQS")),s=n(a("pVnL")),c=n(a("q1tI")),d=n(a("17x9")),u=function(e){var t=(0,s.default)({},e),a=t.resolutions,n=t.sizes,i=t.critical;return a&&(t.fixed=a,delete t.resolutions),n&&(t.fluid=n,delete t.sizes),i&&(t.loading="eager"),t.fluid&&(t.fluid=E([].concat(t.fluid))),t.fixed&&(t.fixed=E([].concat(t.fixed))),t},f=function(e){var t=e.media;return!!t&&(b&&!!window.matchMedia(t).matches)},m=function(e){var t=e.fluid,a=e.fixed;return p(t||a).src},p=function(e){if(b&&function(e){return!!e&&Array.isArray(e)&&e.some((function(e){return void 0!==e.media}))}(e)){var t=e.findIndex(f);if(-1!==t)return e[t];var a=e.findIndex((function(e){return void 0===e.media}));if(-1!==a)return e[a]}return e[0]},g=Object.create({}),h=function(e){var t=u(e),a=m(t);return g[a]||!1},y="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,b="undefined"!=typeof window,v=b&&window.IntersectionObserver,w=new WeakMap;function S(e){return e.map((function(e){var t=e.src,a=e.srcSet,n=e.srcSetWebp,i=e.media,r=e.sizes;return c.default.createElement(c.default.Fragment,{key:t},n&&c.default.createElement("source",{type:"image/webp",media:i,srcSet:n,sizes:r}),c.default.createElement("source",{media:i,srcSet:a,sizes:r}))}))}function E(e){var t=[],a=[];return e.forEach((function(e){return(e.media?t:a).push(e)})),[].concat(t,a)}function I(e){return e.map((function(e){var t=e.src,a=e.media,n=e.tracedSVG;return c.default.createElement("source",{key:t,media:a,srcSet:n})}))}function C(e){return e.map((function(e){var t=e.src,a=e.media,n=e.base64;return c.default.createElement("source",{key:t,media:a,srcSet:n})}))}function x(e,t){var a=e.srcSet,n=e.srcSetWebp,i=e.media,r=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(i?'media="'+i+'" ':"")+'srcset="'+(t?n:a)+'" '+(r?'sizes="'+r+'" ':"")+"/>"}var j=function(e,t){var a=(void 0===i&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=new window.IntersectionObserver((function(e){e.forEach((function(e){if(w.has(e.target)){var t=w.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(i.unobserve(e.target),w.delete(e.target),t())}}))}),{rootMargin:"200px"})),i);return a&&(a.observe(e),w.set(e,t)),function(){a.unobserve(e),w.delete(e)}},z=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",n=e.srcSet?'srcset="'+e.srcSet+'" ':"",i=e.title?'title="'+e.title+'" ':"",r=e.alt?'alt="'+e.alt+'" ':'alt="" ',o=e.width?'width="'+e.width+'" ':"",l=e.height?'height="'+e.height+'" ':"",s=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",c=e.loading?'loading="'+e.loading+'" ':"",d=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?x(e,!0):"")+x(e)})).join("")+"<img "+c+o+l+a+n+t+r+i+s+d+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},L=c.default.forwardRef((function(e,t){var a=e.src,n=e.imageVariants,i=e.generateSources,r=e.spreadProps,o=e.ariaHidden,l=c.default.createElement(N,(0,s.default)({ref:t,src:a},r,{ariaHidden:o}));return n.length>1?c.default.createElement("picture",null,i(n),l):l})),N=c.default.forwardRef((function(e,t){var a=e.sizes,n=e.srcSet,i=e.src,r=e.style,o=e.onLoad,d=e.onError,u=e.loading,f=e.draggable,m=e.ariaHidden,p=(0,l.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable","ariaHidden"]);return c.default.createElement("img",(0,s.default)({"aria-hidden":m,sizes:a,srcSet:n,src:i},p,{onLoad:o,onError:d,ref:t,loading:u,draggable:f,style:(0,s.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},r)}))}));N.propTypes={style:d.default.object,onError:d.default.func,onLoad:d.default.func};var k=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=b&&h(t),a.isCritical="eager"===t.loading||t.critical,a.addNoScript=!(a.isCritical&&!t.fadeIn),a.useIOSupport=!y&&v&&!a.isCritical&&!a.seenBefore;var n=a.isCritical||b&&(y||!a.useIOSupport);return a.state={isVisible:n,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn},a.imageRef=c.default.createRef(),a.placeholderRef=t.placeholderRef||c.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,r.default)(a)),a.handleRef=a.handleRef.bind((0,r.default)(a)),a}(0,o.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:h(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=j(e,(function(){var e=h(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){t.setState({imgLoaded:e,imgCached:!(!t.imageRef.current||!t.imageRef.current.currentSrc)})}))})))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),a=m(t),g[a]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,n=e.className,i=e.style,r=void 0===i?{}:i,o=e.imgStyle,l=void 0===o?{}:o,d=e.placeholderStyle,f=void 0===d?{}:d,m=e.placeholderClassName,g=e.fluid,h=e.fixed,y=e.backgroundColor,b=e.durationFadeIn,v=e.Tag,w=e.itemProp,E=e.loading,x=e.draggable,j=!1===this.state.fadeIn||this.state.imgLoaded,k=!0===this.state.fadeIn&&!this.state.imgCached,R=(0,s.default)({opacity:j?1:0,transition:k?"opacity "+b+"ms":"none"},l),_="boolean"==typeof y?"lightgray":y,P={transitionDelay:b+"ms"},A=(0,s.default)((0,s.default)((0,s.default)({opacity:this.state.imgLoaded?0:1},k&&P),l),f),O={title:t,alt:this.state.isVisible?"":a,style:A,className:m,itemProp:w};if(g){var V=g,T=p(g);return c.default.createElement(v,{className:(n||"")+" gatsby-image-wrapper",style:(0,s.default)({position:"relative",overflow:"hidden",maxWidth:T.maxWidth?T.maxWidth+"px":null,maxHeight:T.maxHeight?T.maxHeight+"px":null},r),ref:this.handleRef,key:"fluid-"+JSON.stringify(T.srcSet)},c.default.createElement(v,{"aria-hidden":!0,style:{width:"100%",paddingBottom:100/T.aspectRatio+"%"}}),_&&c.default.createElement(v,{"aria-hidden":!0,title:t,style:(0,s.default)({backgroundColor:_,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},k&&P)}),T.base64&&c.default.createElement(L,{ariaHidden:!0,ref:this.placeholderRef,src:T.base64,spreadProps:O,imageVariants:V,generateSources:C}),T.tracedSVG&&c.default.createElement(L,{ariaHidden:!0,ref:this.placeholderRef,src:T.tracedSVG,spreadProps:O,imageVariants:V,generateSources:I}),this.state.isVisible&&c.default.createElement("picture",null,S(V),c.default.createElement(N,{alt:a,title:t,sizes:T.sizes,src:T.src,crossOrigin:this.props.crossOrigin,srcSet:T.srcSet,style:R,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:w,loading:E,draggable:x})),this.addNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:z((0,s.default)((0,s.default)({alt:a,title:t,loading:E},T),{},{imageVariants:V}))}}))}if(h){var q=h,H=p(h),D=(0,s.default)({position:"relative",overflow:"hidden",display:"inline-block",width:H.width,height:H.height},r);return"inherit"===r.display&&delete D.display,c.default.createElement(v,{className:(n||"")+" gatsby-image-wrapper",style:D,ref:this.handleRef,key:"fixed-"+JSON.stringify(H.srcSet)},_&&c.default.createElement(v,{"aria-hidden":!0,title:t,style:(0,s.default)({backgroundColor:_,width:H.width,opacity:this.state.imgLoaded?0:1,height:H.height},k&&P)}),H.base64&&c.default.createElement(L,{ariaHidden:!0,ref:this.placeholderRef,src:H.base64,spreadProps:O,imageVariants:q,generateSources:C}),H.tracedSVG&&c.default.createElement(L,{ariaHidden:!0,ref:this.placeholderRef,src:H.tracedSVG,spreadProps:O,imageVariants:q,generateSources:I}),this.state.isVisible&&c.default.createElement("picture",null,S(q),c.default.createElement(N,{alt:a,title:t,width:H.width,height:H.height,sizes:H.sizes,src:H.src,crossOrigin:this.props.crossOrigin,srcSet:H.srcSet,style:R,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:w,loading:E,draggable:x})),this.addNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:z((0,s.default)((0,s.default)({alt:a,title:t,loading:E},H),{},{imageVariants:q}))}}))}return null},t}(c.default.Component);k.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var R=d.default.shape({width:d.default.number.isRequired,height:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string,media:d.default.string}),_=d.default.shape({aspectRatio:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,sizes:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string,media:d.default.string,maxWidth:d.default.number,maxHeight:d.default.number});k.propTypes={resolutions:R,sizes:_,fixed:d.default.oneOfType([R,d.default.arrayOf(R)]),fluid:d.default.oneOfType([_,d.default.arrayOf(_)]),fadeIn:d.default.bool,durationFadeIn:d.default.number,title:d.default.string,alt:d.default.string,className:d.default.oneOfType([d.default.string,d.default.object]),critical:d.default.bool,crossOrigin:d.default.oneOfType([d.default.string,d.default.bool]),style:d.default.object,imgStyle:d.default.object,placeholderStyle:d.default.object,placeholderClassName:d.default.string,backgroundColor:d.default.oneOfType([d.default.string,d.default.bool]),onLoad:d.default.func,onError:d.default.func,onStartLoad:d.default.func,Tag:d.default.string,itemProp:d.default.string,loading:d.default.oneOf(["auto","lazy","eager"]),draggable:d.default.bool};var P=k;t.default=P},L3FW:function(e){e.exports=JSON.parse('{"data":{"allExperienceJson":{"edges":[{"node":{"id":"experience-01","role":"Software Development Intern","responsibilities":"Provide support to the process of migrating Python 2 to Python 3 and Django 1 to Django 2 of Djangoplicity, which supports the operation of the European Southern Observatory.","company":"Enciso Systems","from":"May 2020","to":"Nov 2020"}},{"node":{"id":"experience-02","role":"Full Stack Developer","responsibilities":"Develop virtual training site for managing and selling video courses.","company":"Musell.co","from":"Jan 2020","to":"May 2020"}}]}}}')},MTnK:function(e){e.exports=JSON.parse('{"data":{"placeholderImage":{"childImageSharp":{"fluid":{"base64":"data:image/png;base64,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","aspectRatio":0.6696428571428571,"src":"/static/8ad4ee5f738e0f0be736244f76d10418/630fb/profile.png","srcSet":"/static/8ad4ee5f738e0f0be736244f76d10418/5db04/profile.png 75w,\\n/static/8ad4ee5f738e0f0be736244f76d10418/6d161/profile.png 150w,\\n/static/8ad4ee5f738e0f0be736244f76d10418/630fb/profile.png 300w,\\n/static/8ad4ee5f738e0f0be736244f76d10418/62b1f/profile.png 450w,\\n/static/8ad4ee5f738e0f0be736244f76d10418/2a4de/profile.png 600w,\\n/static/8ad4ee5f738e0f0be736244f76d10418/09ea4/profile.png 3621w","sizes":"(max-width: 300px) 100vw, 300px"}}}}}')},QeBL:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return H}));var n=a("q1tI"),i=a.n(n),r=a("H8eV"),o=a("vOnD"),l=a("MTnK"),s=a("9eSz"),c=a.n(s),d=function(){var e=l.data;return n.createElement(c.a,{fluid:e.placeholderImage.childImageSharp.fluid,style:{clipPath:"url(#svg-blob)",minWidth:"300px"}})},u=a("FgQ6"),f=o.c.section.withConfig({displayName:"hero__HeroStyles",componentId:"sc-1uituih-0"})(["display:flex;justify-content:space-between;flex-direction:column;align-items:center;padding:0;@media screen and (min-width:62em){flex-direction:row;}"]),m=o.c.article.withConfig({displayName:"hero__LeftContent",componentId:"sc-1uituih-1"})(["padding-right:1rem;padding-bottom:1rem;width:100%;@media screen and (min-width:62em){width:65%;}"]),p=o.c.aside.withConfig({displayName:"hero__RightContent",componentId:"sc-1uituih-2"})(["padding:0;width:35%;@media screen and (max-width:62em){display:none;}"]),g=o.c.h1.withConfig({displayName:"hero__Title",componentId:"sc-1uituih-3"})(["color:#fff;margin:0;font-size:2.5rem;@media screen and (min-width:62em){font-size:2.5rem;}"]),h=o.c.h2.withConfig({displayName:"hero__Subtitle",componentId:"sc-1uituih-4"})(["color:#fff;font-size:1.5rem;@media screen and (min-width:62em){font-size:2rem;}"]),y=o.c.p.withConfig({displayName:"hero__Description",componentId:"sc-1uituih-5"})(["color:#fff;line-height:1.5;font-size:1rem;@media screen and (min-width:62em){font-size:1.25rem;}"]);function b(){return n.createElement(u.c,null,n.createElement(f,null,n.createElement(m,null,n.createElement(g,null,"Hi! I","'","m Javier Riveros."),n.createElement(h,null,"I","'","m a web developer from Colombia 🇨🇴"),n.createElement(y,null,"I","'","m currently working as an intern at Enciso Systems company. I","'","ve been building modern web applications using Ruby on Rails and React for about +2 years. In my spare time, I like to learn new things and read books. I am currently finishing my systems engineering studies at Los Llanos university.")),n.createElement(p,null,n.createElement(d,null))))}var v=a("9Dj+"),w=a("hiuT"),S=a("YImG"),E=Object(o.c)(u.d).withConfig({displayName:"education__EducationStyles",componentId:"sc-1m8do9m-0"})([""]),I=o.c.div.withConfig({displayName:"education__EducationGrid",componentId:"sc-1m8do9m-1"})(["display:grid;grid-template-columns:repeat(auto-fill,minmax(300px,1fr));gap:1rem;align-items:start;"]);function C(){var e=w.data;return i.a.createElement(E,{second:!0},i.a.createElement(u.c,null,i.a.createElement(u.e,null,"Know about my education"),i.a.createElement(I,null,e.allEducationJson.edges.map((function(e){var t=e.node;return i.a.createElement(S.b,{node:t,key:t.slug})})))))}var x=a("L3FW"),j=o.c.article.withConfig({displayName:"experience-card__CardStyles",componentId:"sc-1aleahz-0"})(["background-color:#262734;padding:1rem 0;border-bottom:1px solid #3b3d48;"]),z=o.c.div.withConfig({displayName:"experience-card__Date",componentId:"sc-1aleahz-1"})(["color:#c8c8cc;font-size:0.85rem;"]),L=o.c.div.withConfig({displayName:"experience-card__Content",componentId:"sc-1aleahz-2"})(["padding:0.5rem 0;"]),N=o.c.h4.withConfig({displayName:"experience-card__Role",componentId:"sc-1aleahz-3"})(["margin:0;font-size:1.25rem;"]),k=o.c.p.withConfig({displayName:"experience-card__Responsibilities",componentId:"sc-1aleahz-4"})([""]),R=o.c.span.withConfig({displayName:"experience-card__Company",componentId:"sc-1aleahz-5"})(["color:#ffc25b;"]),_=function(e){var t=e.node;return i.a.createElement(j,null,i.a.createElement(z,null,t.from," • ",t.to),i.a.createElement(L,null,i.a.createElement(N,null,t.role),i.a.createElement(k,null,t.responsibilities),i.a.createElement(R,null,t.company)))},P=Object(o.c)(u.d).withConfig({displayName:"experience__ExperienceStyles",componentId:"sc-1k6bggd-0"})(["background-color:#262734;"]);function A(){var e=x.data;return i.a.createElement(P,null,i.a.createElement(u.c,null,i.a.createElement(u.e,null,"Work experience"),e.allExperienceJson.edges.map((function(e){var t=e.node;return i.a.createElement(_,{node:t,key:t.id})}))))}var O=a("dGCq"),V=a("o4MD"),T=Object(o.c)(u.d).withConfig({displayName:"projects-summary__ProjectsStyles",componentId:"tk9312-0"})([""]);function q(){var e=O.data;return i.a.createElement(T,null,i.a.createElement(u.c,null,i.a.createElement(u.e,null,"Some of the projects I've worked on"),e.allProjectsJson.edges.map((function(e){var t=e.node;return i.a.createElement(V.a,{node:t,key:t.id})})),i.a.createElement(u.b,null,i.a.createElement(u.a,{to:"/projects"},"View more"))))}function H(){return n.createElement(v.a,null,n.createElement(r.a,{title:"Home",meta:[{name:"keywords",content:"portfolio, gatsby, react, javascript"}]}),n.createElement(b,null),n.createElement(A,null),n.createElement(q,null),n.createElement(C,null))}},SGlo:function(e,t,a){"use strict";var n=a("rj/q"),i=a("N+BI").getWeak,r=a("1a8y"),o=a("BjK0"),l=a("xa9o"),s=a("yde8"),c=a("Wadk"),d=a("qDzq"),u=a("O1i0"),f=c(5),m=c(6),p=0,g=function(e){return e._l||(e._l=new h)},h=function(){this.a=[]},y=function(e,t){return f(e.a,(function(e){return e[0]===t}))};h.prototype={get:function(e){var t=y(this,e);if(t)return t[1]},has:function(e){return!!y(this,e)},set:function(e,t){var a=y(this,e);a?a[1]=t:this.a.push([e,t])},delete:function(e){var t=m(this.a,(function(t){return t[0]===e}));return~t&&this.a.splice(t,1),!!~t}},e.exports={getConstructor:function(e,t,a,r){var c=e((function(e,n){l(e,c,t,"_i"),e._t=t,e._i=p++,e._l=void 0,null!=n&&s(n,a,e[r],e)}));return n(c.prototype,{delete:function(e){if(!o(e))return!1;var a=i(e);return!0===a?g(u(this,t)).delete(e):a&&d(a,this._i)&&delete a[this._i]},has:function(e){if(!o(e))return!1;var a=i(e);return!0===a?g(u(this,t)).has(e):a&&d(a,this._i)}}),c},def:function(e,t,a){var n=i(r(t),!0);return!0===n?g(e).set(t,a):n[e._i]=a,e},ufstore:g}},YImG:function(e,t,a){"use strict";a.d(t,"b",(function(){return c})),a.d(t,"a",(function(){return f}));a("pJf4");var n=a("q1tI"),i=a.n(n),r=a("vOnD"),o=r.c.article.withConfig({displayName:"education-card__CardStyles",componentId:"qabkza-0"})([""]),l=r.c.p.withConfig({displayName:"education-card__NodeTitle",componentId:"qabkza-1"})(["font-size:1.3rem;margin-bottom:0;font-weight:600;"]),s=r.c.p.withConfig({displayName:"education-card__NodeDescription",componentId:"qabkza-2"})([""]),c=function(e){var t=e.node;return i.a.createElement(o,null,i.a.createElement(l,null,t.title),i.a.createElement(s,null,t.description),i.a.createElement("section",null,t.items.map((function(e){return i.a.createElement(g,{key:e.id,item:e})}))))},d=r.c.div.withConfig({displayName:"education-card__EducationItemStyles",componentId:"qabkza-3"})(["display:flex;justify-content:space-between;align-items:flex-start;padding:1rem 0;"]),u=r.c.h4.withConfig({displayName:"education-card__ItemTitle",componentId:"qabkza-4"})(["display:inline-block;margin:0 0 0.5rem;"]),f=r.c.div.withConfig({displayName:"education-card__Check",componentId:"qabkza-5"})(["display:flex;color:#17bdca;padding-right:0.5rem;height:100%;svg{width:20px;height:20px;}"]),m=r.c.div.withConfig({displayName:"education-card__Content",componentId:"qabkza-6"})(["width:100%;display:flex;flex-direction:column;"]),p=r.c.a.withConfig({displayName:"education-card__StyledLink",componentId:"qabkza-7"})(["color:#ffaf28;text-decoration:none;"]),g=function(e){var t=e.item;return i.a.createElement(d,null,i.a.createElement(f,null,i.a.createElement("svg",{fill:"currentColor",viewBox:"0 0 20 20"},i.a.createElement("path",{fillRule:"evenodd",d:"M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z",clipRule:"evenodd"}))),i.a.createElement(m,null,i.a.createElement(u,null,t.name),t.degree&&i.a.createElement("span",null,t.degree),t.url&&i.a.createElement(p,{href:t.url,target:"_blank",rel:"noreferrer nooopener"},"View more")))}},dGCq:function(e){e.exports=JSON.parse('{"data":{"allProjectsJson":{"edges":[{"node":{"id":"project-01","name":"Personal Portfolio","description":"My personal site for showing my projects and work experience","stack":"React.js, Gasby.js, styled-components","client":"Personal Project","goals":["Used GraphQL to request data.","Used styled-components for page styling."],"date":"2020-06-06"}},{"node":{"id":"project-02","name":"Medical RK","description":"Full-stack web app for making tests in hospitals and health institutions","stack":"Next.js, Ruby on Rails, JWT, TailwindCSS","client":"Personal Project","goals":["Implemented JWT for secure user authentication.","Used Test-Driven-Development as development methodology.","Used Next.js with TailwindCSS as frontend framework."],"date":"2020-05-05"}}]}}}')},eMsz:function(e,t,a){"use strict";var n,i=a("emib"),r=a("Wadk")(0),o=a("IYdN"),l=a("N+BI"),s=a("k5Iv"),c=a("SGlo"),d=a("BjK0"),u=a("O1i0"),f=a("O1i0"),m=!i.ActiveXObject&&"ActiveXObject"in i,p=l.getWeak,g=Object.isExtensible,h=c.ufstore,y=function(e){return function(){return e(this,arguments.length>0?arguments[0]:void 0)}},b={get:function(e){if(d(e)){var t=p(e);return!0===t?h(u(this,"WeakMap")).get(e):t?t[this._i]:void 0}},set:function(e,t){return c.def(u(this,"WeakMap"),e,t)}},v=e.exports=a("94Pd")("WeakMap",y,b,c,!0,!0);f&&m&&(s((n=c.getConstructor(y,"WeakMap")).prototype,b),l.NEED=!0,r(["delete","has","get","set"],(function(e){var t=v.prototype,a=t[e];o(t,e,(function(t,i){if(d(t)&&!g(t)){this._f||(this._f=new n);var r=this._f[e](t,i);return"set"==e?this:r}return a.call(this,t,i)}))})))},hiuT:function(e){e.exports=JSON.parse('{"data":{"allEducationJson":{"edges":[{"node":{"slug":"academic","title":"Academic Training","description":"Academic training, degrees of study and institutions I attended","items":[{"id":"academic-01","degree":"Systems engineering","name":"Los Llanos University","score":"3.6","url":null},{"id":"academic-02","degree":"Agricultural Production Technician","name":"SENA","score":"4.5","url":null}]}},{"node":{"slug":"online","title":"Online courses","description":"Finished courses in online education platforms","items":[{"id":"online-01","degree":null,"name":"Professional JavaScript course","score":"9","url":"https://codigofacilito.com/cursos/javascript-profesional"},{"id":"online-02","degree":null,"name":"Professional Java course","score":"9","url":"https://codigofacilito.com/cursos/java-profesional"},{"id":"online-03","degree":null,"name":"Create a personal site with Gatsby","score":"9","url":"https://codigofacilito.com/cursos/sitio-persional-gatsby"}]}},{"node":{"slug":"others","title":"Other","description":"Workshops, diplomas and conferences in which I\'ve participated","items":[{"id":"other-01","degree":"Open Technologies Conference at the University of Los Llanos.","name":"CTA Unillanos","score":null,"url":null},{"id":"other-02","degree":"Oracle conference to learn about modern technologies.","name":"Oracle Code Bogotá","score":null,"url":null}]}}]}}}')},o4MD:function(e,t,a){"use strict";a("pJf4");var n=a("q1tI"),i=a.n(n),r=a("vOnD"),o=a("YImG"),l=r.c.article.withConfig({displayName:"project-card__ProjectStyles",componentId:"sc-1s4tfxx-0"})(["background-color:#424657;padding:1.5rem;border-radius:0.25em;margin-top:1rem;"]),s=r.c.h4.withConfig({displayName:"project-card__ProjectTitle",componentId:"sc-1s4tfxx-1"})(["font-size:1.25rem;margin:0;"]),c=r.c.span.withConfig({displayName:"project-card__ProjectDate",componentId:"sc-1s4tfxx-2"})(["color:#c8c8cc;font-size:0.85rem;"]),d=r.c.p.withConfig({displayName:"project-card__ProjectDescription",componentId:"sc-1s4tfxx-3"})(["color:#ddddde;"]),u=r.c.span.withConfig({displayName:"project-card__ProjectClient",componentId:"sc-1s4tfxx-4"})(["color:#ffc25b;font-size:0.85rem;"]),f=r.c.span.withConfig({displayName:"project-card__ProjectStack",componentId:"sc-1s4tfxx-5"})(["color:#c8c8cc;font-size:0.85rem;"]),m=r.c.ul.withConfig({displayName:"project-card__ProjectGoals",componentId:"sc-1s4tfxx-6"})(["list-style:none;margin:0;padding:1rem 0 0 0;li{display:flex;align-items:start;margin:0.25rem 0 0 0;}"]),p=r.c.span.withConfig({displayName:"project-card__Dot",componentId:"sc-1s4tfxx-7"})(["color:#c8c8cc;margin:0 0.5rem;"]);t.a=function(e){var t=e.node;return i.a.createElement(l,null,i.a.createElement(s,null,t.name),i.a.createElement(c,null,t.date),i.a.createElement(d,null,t.description),i.a.createElement(u,null,t.client),i.a.createElement(p,null,"•"),i.a.createElement(f,null,t.stack),i.a.createElement(m,null,t.goals.map((function(e,t){return i.a.createElement("li",{key:t},i.a.createElement(o.a,null,i.a.createElement("svg",{fill:"currentColor",viewBox:"0 0 20 20"},i.a.createElement("path",{fillRule:"evenodd",d:"M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z",clipRule:"evenodd"}))),e)}))))}},"t+fG":function(e,t,a){var n=a("P8UN"),i=a("96qb"),r=a("ap2Z"),o=/"/g,l=function(e,t,a,n){var i=String(r(e)),l="<"+t;return""!==a&&(l+=" "+a+'="'+String(n).replace(o,"&quot;")+'"'),l+">"+i+"</"+t+">"};e.exports=function(e,t){var a={};a[e]=t(l),n(n.P+n.F*i((function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3})),"String",a)}},zTTH:function(e,t,a){"use strict";var n=a("P8UN"),i=a("Wadk")(6),r="findIndex",o=!0;r in[]&&Array(1)[r]((function(){o=!1})),n(n.P+n.F*o,"Array",{findIndex:function(e){return i(this,e,arguments.length>1?arguments[1]:void 0)}}),a("Dq1/")(r)}}]);
//# sourceMappingURL=component---src-pages-index-tsx-408726ffd2bbb36d7b6f.js.map