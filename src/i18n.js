import i18n from 'i18n-js';
import * as RNLocalize from 'react-native-localize';

import en from './locales/en.json';
import es from './locales/es.json';

const locales = {
  en,
  es,
};

const fallback = { languageTag: 'en', isRTL: false };
const { languageTag } = RNLocalize.findBestAvailableLanguage(Object.keys(locales)) || fallback;

i18n.translations = { [languageTag]: locales[languageTag] };
i18n.locale = languageTag;

export default i18n;
