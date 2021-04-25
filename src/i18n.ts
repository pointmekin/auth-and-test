import Vue from 'vue'
import VueI18n, { LocaleMessages } from 'vue-i18n'
Vue.use(VueI18n)


export function loadLocaleMessages (): LocaleMessages {
  const locales = require.context('./locales', true, /[A-Za-z0-9-_,\s]+\.json$/i)
  const messages: LocaleMessages = {}
  locales.keys().forEach(key => {
    const matched = key.match(/([A-Za-z0-9-_]+)\./i)
    if (matched && matched.length > 1) {
      const locale = matched[1]
      messages[locale] = locales(key)
    }
  })
  return messages
}

// export default new VueI18n({
//   locale: process.env.VUE_APP_I18N_LOCALE || 'en',
//   fallbackLocale: process.env.VUE_APP_I18N_FALLBACK_LOCALE || 'en',
//   messages: loadLocaleMessages()
// })

export const getLanguage = () => {
  return i18n.locale
}

export const setCookie = (name: string,value: string,days: number) => {
  let expires = "";
  if (days) {
      const date = new Date();
      date.setTime(date.getTime() + (days*24*60*60*1000));
      expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}
function getCookie(name: string) {
  const nameEQ = name + "=";
  const ca = document.cookie.split(';');
  for(let i=0;i < ca.length;i++) {
      let c = ca[i];
      while (c.charAt(0)==' ') c = c.substring(1,c.length);
      if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
  }
  return null;
}

export const setLanguage = (lang: string) => {
  setCookie("lang", lang, 999)
  i18n.locale = lang
}

export const i18n = new VueI18n({
  locale:  getCookie("lang") ===  'th' ? "th" : "en",
  fallbackLocale: getCookie("lang") ===  'th' ? "th" : "en",
  messages: loadLocaleMessages()
});