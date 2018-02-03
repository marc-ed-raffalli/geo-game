import en from '../locales/ui/en';

export const supportedGameLocales = Object.freeze([
  {code: 'en', name: 'English'},
  {code: 'fr', name: 'français'},
  {code: 'pl', name: 'polski'},
  {code: 'it', name: 'italiano'},
  {code: 'de', name: 'Deutsch'},
  {code: 'es', name: 'español'},
  {code: 'pt', name: 'português'},
  {code: 'ga', name: 'Gaeilge'},
  {code: 'bg', name: 'български'},
  {code: 'ca', name: 'català'},
  {code: 'cs', name: 'čeština'},
  {code: 'da', name: 'dansk'},
  {code: 'fi', name: 'suomi'},
  {code: 'gl', name: 'galego'},
  {code: 'hr', name: 'hrvatski'},
  {code: 'ja', name: '日本語'},
  {code: 'nl', name: 'Nederlands'},
  {code: 'nn', name: 'nynorsk'},
  {code: 'ru', name: 'русский'},
  {code: 'zh', name: '中文'},
]);

export const supportedGameLocalesByCode = Object.freeze(
  supportedGameLocales.reduce((res, locale) => ({...res, [locale.code]: locale.name}), {})
);

export const isLocaleSupported = locale => supportedGameLocalesByCode[locale] !== undefined;

export const getTranslation = locale =>
  import(`../locales/ui/${locale}`)
    .then(translations => ({
      ...en, // need default keys to english as not all dictionaries are complete
      ...translations
    }));

export const getBestMatchingLocale = () => {
  const defaultLocale = 'en';

  if (!window.navigator) {
    return defaultLocale;
  }

  const browserLocales = navigator.languages !== undefined ? navigator.languages : [navigator.language];

  for (let i = 0, l = browserLocales.length; i < l; i++) {
    const baseLocale = browserLocales[i].toLocaleLowerCase().split('-')[0];

    if (supportedGameLocalesByCode[baseLocale]) {
      return baseLocale;
    }
  }

  return defaultLocale;
};

export const fetchData = (locale, continent) => {
  if (!isLocaleSupported(locale)) {
    return Promise.reject('Locale not supported');
  }

  return import(`../locales/data/${locale}/${continent}`);
};

