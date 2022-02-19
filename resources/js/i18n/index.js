import Vue from 'vue';
import VueI18n from 'vue-i18n';
import en from './lang/en.json';
import id from './lang/id.json';
import cn from './lang/cn.json';
import sk from './lang/sk.json';

const messages = {
  en,
  id,
  cn,
  sk
}

Vue.use(VueI18n);

const i18n = new VueI18n({
    locale: config.language,
    messages,
    silentTranslationWarn: true,
});

export default i18n;
