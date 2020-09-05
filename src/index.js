import VueClock from './VueClock.vue';

// Declare install function excuted by Vue.use()
export function install(Vue) {
  if (install.installed) {
    return;
  }
  install.installed = true;
  Vue.component('VueClock', VueClock);
}

const plugin = { install };

export default plugin;

let GlobalVue = null;

if (typeof window !== 'undefined') {
  GlobalVue = window.Vue;
} else if (typeof global !== 'undefined') {
  GlobalVue = global.Vue;
}

if (GlobalVue) {
  GlobalVue.use(plugin);
}
