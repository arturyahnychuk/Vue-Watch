const p=1e3,h=12;function b(e){return e>=12?"PM":"AM"}function m(e){return(parseInt(e,10)>=10?"":"0")+e}var E={data(){return{hours:0,minutes:0,seconds:0,hourtime:""}},mounted(){this.$options.timer=window.setTimeout(this.updateDateTime,p)},beforeDestroy(){window.clearTimeout(this.$options.timer)},methods:{updateDateTime(){const e=new Date();this.hours=e.getHours(),this.minutes=m(e.getMinutes()),this.seconds=m(e.getSeconds()),this.hourtime=b(this.hours),this.hours=this.hours%h||h,this.$options.timer=window.setTimeout(this.updateDateTime,p)}}};function R(e,s,o,u,C,d,r,_,l,w){typeof r!="boolean"&&(l=_,_=r,r=!1);const n=typeof o=="function"?o.options:o;e&&e.render&&(n.render=e.render,n.staticRenderFns=e.staticRenderFns,n._compiled=!0,C&&(n.functional=!0)),u&&(n._scopeId=u);let i;if(d?(i=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,!t&&typeof __VUE_SSR_CONTEXT__!="undefined"&&(t=__VUE_SSR_CONTEXT__),s&&s.call(this,l(t)),t&&t._registeredComponents&&t._registeredComponents.add(d)},n._ssrRegister=i):s&&(i=r?function(t){s.call(this,w(t,this.$root.$options.shadowRoot))}:function(t){s.call(this,_(t))}),i)if(n.functional){const t=n.render;n.render=function(y,f){return i.call(f),t(y,f)}}else{const t=n.beforeCreate;n.beforeCreate=t?[].concat(t,i):[i]}return o}const T=E;var v=function(){var e=this,s=e.$createElement,o=e._self._c||s;return e.hourtime!=""?o("div",{staticClass:"clock"},[e._ssrNode('<div class="clock__hours" data-v-6294754c><span class="clock__hourtime" data-v-6294754c>'+e._ssrEscape(e._s(e.hourtime))+"</span> <span data-v-6294754c>"+e._ssrEscape(e._s(e.hours))+'</span></div> <div class="clock__minutes" data-v-6294754c>'+e._ssrEscape(e._s(e.minutes))+'</div> <div class="clock__seconds" data-v-6294754c>'+e._ssrEscape(e._s(e.seconds))+"</div>")]):e._e()},$=[];v._withStripped=!0;const k=void 0,S="data-v-6294754c",V="data-v-6294754c",D=!1,g=R({render:v,staticRenderFns:$},k,T,S,D,V,!1,void 0,void 0,void 0);function c(e){if(c.installed)return;c.installed=!0,e.component("VueClock",g)}const j={install:c};let a=null;typeof window!="undefined"?a=window.Vue:typeof global!="undefined"&&(a=global.Vue),a&&a.use(j);export default g;export{c as install};
