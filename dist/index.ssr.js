"use strict";Object.defineProperty(exports,"__esModule",{value:!0});function e(e){return(parseInt(e,10)>=10?"":"0")+e}function n(e,n,t,s,o,i,r,d,a,c){"boolean"!=typeof r&&(a=d,d=r,r=!1);const l="function"==typeof t?t.options:t;let u;if(e&&e.render&&(l.render=e.render,l.staticRenderFns=e.staticRenderFns,l._compiled=!0,o&&(l.functional=!0)),s&&(l._scopeId=s),i?(u=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),n&&n.call(this,a(e)),e&&e._registeredComponents&&e._registeredComponents.add(i)},l._ssrRegister=u):n&&(u=r?function(e){n.call(this,c(e,this.$root.$options.shadowRoot))}:function(e){n.call(this,d(e))}),u)if(l.functional){const e=l.render;l.render=function(n,t){return u.call(t),e(n,t)}}else{const e=l.beforeCreate;l.beforeCreate=e?[].concat(e,u):[u]}return t}function t(e){return e||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),e?("styles"in e||(e._styles=e._styles||{},Object.defineProperty(e,"styles",{enumerable:!0,get:()=>e._renderStyles(e._styles)}),e._renderStyles=e._renderStyles||s),(n,t)=>function(e,n,t){const s=n.media||"default",o=t._styles[s]||(t._styles[s]={ids:[],css:""});if(!o.ids.includes(e)){o.media=n.media,o.ids.push(e);let t=n.source;o.css+=t+"\n"}}(n,t,e)):()=>{}}function s(e){let n="";for(const t in e){const s=e[t];n+='<style data-vue-ssr-id="'+Array.from(s.ids).join(" ")+'"'+(s.media?' media="'+s.media+'"':"")+">"+s.css+"</style>"}return n}const o={props:{isHour:{type:Boolean,default:!0},isMinute:{type:Boolean,default:!0},isSecond:{type:Boolean,default:!0}},data:()=>({hours:0,minutes:0,seconds:0,hourtime:""}),mounted(){const e=window.setTimeout(this.updateDateTime,1e3);this.$on("hook:destroyed",(()=>window.clearTimeout(e)))},methods:{updateDateTime(){const n=new Date;this.hours=n.getHours(),this.minutes=e(n.getMinutes()),this.seconds=e(n.getSeconds()),this.hourtime=this.hours>=12?"PM":"AM",this.hours=this.hours%12||12,this.$options.timer=window.setTimeout(this.updateDateTime,1e3)}}};var i=function(){var e=this,n=e.$createElement,t=e._self._c||n;return""!=e.hourtime?t("div",{staticClass:"clock"},[e._ssrNode((e.isHour?'<div class="clock__hours" data-v-294d233e><span class="clock__hourtime" data-v-294d233e>'+e._ssrEscape(e._s(e.hourtime))+"</span> <span data-v-294d233e>"+e._ssrEscape(e._s(e.hours))+"</span></div>":"\x3c!----\x3e")+" "+(e.isMinute?'<div class="clock__minutes" data-v-294d233e>'+e._ssrEscape(e._s(e.minutes))+"</div>":"\x3c!----\x3e")+" "+(e.isSecond?'<div class="clock__seconds" data-v-294d233e>'+e._ssrEscape(e._s(e.seconds))+"</div>":"\x3c!----\x3e"))]):e._e()};i._withStripped=!0;const r=n({render:i,staticRenderFns:[]},(function(e){e&&e("data-v-294d233e_0",{source:"\n.clock[data-v-294d233e] {\n  background: #fff;\n  border: 0.3rem solid #fff;\n  border-radius: 0.5rem;\n  display: inline-block;\n  margin-bottom: 1em;\n}\n.clock__hours[data-v-294d233e],\n.clock__minutes[data-v-294d233e],\n.clock__seconds[data-v-294d233e] {\n  background: linear-gradient(to bottom, #26303b 50%, #2c3540 50%);\n  display: inline-block;\n  color: #fff;\n  font-family: 'Nunito', sans-serif;\n  font-size: 3rem;\n  font-weight: 300;\n  padding: 0.5rem 1rem;\n  text-align: center;\n  position: relative;\n}\n.clock__hours[data-v-294d233e] {\n  border-right: 0.15rem solid #fff;\n}\n.clock__minutes[data-v-294d233e] {\n  border-right: 0.15rem solid #fff;\n}\n.clock__hourtime[data-v-294d233e] {\n  font-size: 1rem;\n  position: absolute;\n  top: 2px;\n  left: 8px;\n}\n",map:{version:3,sources:["/Users/dangvanthanh/Code/Vue/vue-clock/src/VueClock.vue"],names:[],mappings:";AAwDA;EACA,gBAAA;EACA,yBAAA;EACA,qBAAA;EACA,qBAAA;EACA,kBAAA;AACA;AAEA;;;EAGA,gEAAA;EACA,qBAAA;EACA,WAAA;EACA,iCAAA;EACA,eAAA;EACA,gBAAA;EACA,oBAAA;EACA,kBAAA;EACA,kBAAA;AACA;AAEA;EACA,gCAAA;AACA;AAEA;EACA,gCAAA;AACA;AAEA;EACA,eAAA;EACA,kBAAA;EACA,QAAA;EACA,SAAA;AACA",file:"VueClock.vue",sourcesContent:['<template>\n  <div class="clock" v-if="hourtime != \'\'">\n    <div class="clock__hours" v-if="isHour">\n      <span class="clock__hourtime" v-text="hourtime"></span>\n      <span v-text="hours"></span>\n    </div>\n    <div class="clock__minutes" v-text="minutes" v-if="isMinute"></div>\n    <div class="clock__seconds" v-text="seconds" v-if="isSecond"></div>\n  </div>\n</template>\n\n<script>\nimport { SECOND, HOUR, getHourTime, getZeroPad } from \'./filters\';\n\nexport default {\n  props: {\n    isHour: {\n      type: Boolean,\n      default: true\n    },\n    isMinute: {\n      type: Boolean,\n      default: true\n    },\n    isSecond: {\n      type: Boolean,\n      default: true\n    }\n  },\n  data() {\n    return {\n      hours: 0,\n      minutes: 0,\n      seconds: 0,\n      hourtime: \'\',\n    };\n  },\n  mounted() {\n    const timer = window.setTimeout(this.updateDateTime, SECOND);\n    this.$on(\'hook:destroyed\', () => window.clearTimeout(timer))\n  },\n  methods: {\n    updateDateTime() {\n      const now = new Date();\n      this.hours = now.getHours();\n      this.minutes = getZeroPad(now.getMinutes());\n      this.seconds = getZeroPad(now.getSeconds());\n      this.hourtime = getHourTime(this.hours);\n      this.hours = this.hours % HOUR || HOUR;\n      this.$options.timer = window.setTimeout(this.updateDateTime, SECOND);\n    },\n  },\n};\n<\/script>\n\n<style scoped>\n.clock {\n  background: #fff;\n  border: 0.3rem solid #fff;\n  border-radius: 0.5rem;\n  display: inline-block;\n  margin-bottom: 1em;\n}\n\n.clock__hours,\n.clock__minutes,\n.clock__seconds {\n  background: linear-gradient(to bottom, #26303b 50%, #2c3540 50%);\n  display: inline-block;\n  color: #fff;\n  font-family: \'Nunito\', sans-serif;\n  font-size: 3rem;\n  font-weight: 300;\n  padding: 0.5rem 1rem;\n  text-align: center;\n  position: relative;\n}\n\n.clock__hours {\n  border-right: 0.15rem solid #fff;\n}\n\n.clock__minutes {\n  border-right: 0.15rem solid #fff;\n}\n\n.clock__hourtime {\n  font-size: 1rem;\n  position: absolute;\n  top: 2px;\n  left: 8px;\n}\n</style>\n']},media:void 0})}),o,"data-v-294d233e",false,"data-v-294d233e",!1,void 0,t,void 0),d=function(e){d.installed||(d.installed=!0,e.component("VueClock",r))},a={install:d};let c=null;"undefined"!=typeof window?c=window.Vue:"undefined"!=typeof global&&(c=global.Vue),c&&c.use(a),r.install=d,exports.default=r;