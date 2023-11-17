import DefaultTheme from 'vitepress/theme';
import './styles/theme.less';
import './styles/demo.less';
import RouterLink from '../stubs/RouterLink.vue';
import DemoWrapper from '../stubs/DemoWrapper.vue';
// import { createI18n } from 'vue-i18n';

// const enableI18n = false;

const modules = import.meta.globEager('../components/**/*.vue');
const components = [];

for (const path in modules) {
  const component = modules[path].default;
  const split = path.split('/');
  component.name = `${split[2]}-${split[3].replace('.vue', '')}`;
  components.push(modules[path].default);
}

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    // if (enableI18n) {
    //   const i18n = createI18n({
    //     locale: 'zh', // set locale
    //     fallbackLocale: 'en', // set fallback locale
    //     messages: {
    //       en: {
    //         message: {
    //           hello: 'hello world',
    //         },
    //         ...en,
    //       },
    //       zh: {
    //         message: {
    //           hello: 'こんにちは、世界',
    //         },
    //         ...zh,
    //       },
    //     },
    //   });
    //   app.use(i18n);
    // }
    // app.use(vancedvue);
    // register example components
    components.forEach((component) => {
      app.component(component.name, component);
    });

    app.component('RouterLink', RouterLink);
    app.component('DemoWrapper', DemoWrapper);
  },
};
