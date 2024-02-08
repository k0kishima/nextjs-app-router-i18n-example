export const defaultLanguage = 'ja';
export const availableLanguages = [defaultLanguage, 'en'];
export const namespaces = ['translation', 'home'];

export function getOptions(lng = defaultLanguage) {
  return {
    lng,
    defaultNS: defaultLanguage,
    fallbackLng: defaultLanguage,
    fallbackNS: namespaces[0],
    ns: namespaces,
    supportedLngs: availableLanguages,
  };
}
