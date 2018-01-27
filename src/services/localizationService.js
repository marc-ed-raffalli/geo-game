import bg from '../locales/bg';
import ca from '../locales/ca';
import cs from '../locales/cs';
import da from '../locales/da';
import de from '../locales/de';
import en from '../locales/en';
import es from '../locales/es';
import fi from '../locales/fi';
import fr from '../locales/fr';
import ga from '../locales/ga';
import gl from '../locales/gl';
import hr from '../locales/hr';
import it from '../locales/it';
import ja from '../locales/ja';
import nl from '../locales/nl';
import nn from '../locales/nn';
import pl from '../locales/pl';
import pt from '../locales/pt';
import ru from '../locales/ru';
import zh from '../locales/zh';

export const uiLocales = {
  en,
  fr,
  // default all unset dictionary keys to english
  // TODO add async loading for translations
  bg: {...en, ...bg},
  ca: {...en, ...ca},
  cs: {...en, ...cs},
  da: {...en, ...da},
  de: {...en, ...de},
  es: {...en, ...es},
  fi: {...en, ...fi},
  ga: {...en, ...ga},
  gl: {...en, ...gl},
  hr: {...en, ...hr},
  it: {...en, ...it},
  ja: {...en, ...ja},
  nl: {...en, ...nl},
  nn: {...en, ...nn},
  pl: {...en, ...pl},
  pt: {...en, ...pt},
  ru: {...en, ...ru},
  zh: {...en, ...zh},
};

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

export const getTranslation = locale => uiLocales[locale];

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

  return fetch(`locales/${locale}/${continent}.json`)
    .then(response => response.json())
    .catch(function (ex) {
      console.error('parsing failed', ex);
    });
};

