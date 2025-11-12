import { z, ZodParsedType } from 'zod';
import { ui, type LanguageCode, defaultLanguage } from './ui';

// Helper to get translations safely, falling back to default language or a generic message
function getErrorMessage(
  lang: LanguageCode,
  key: keyof (typeof ui)[LanguageCode]['zodErrors'],
  params?: Record<string, string | number>
): string {
  // Attempt to get the message from the current language, then fallback to the default language.
  let message: string = (ui[lang]?.zodErrors?.[key] ||
    ui[defaultLanguage].zodErrors[key] ||
    'Invalid input.') as string;

  if (params) {
    Object.keys(params).forEach((paramKey) => {
      message = message.replace(`{${paramKey}}`, String(params[paramKey]));
    });
  }
  return message;
}

const customErrorMap =
  (lang: LanguageCode): z.ZodErrorMap =>
    (issue, ctx) => {
      let message: string;

      switch (issue.code) {
        case z.ZodIssueCode.invalid_type:
          if (issue.received === ZodParsedType.undefined) {
            message = getErrorMessage(lang, 'invalid_type_received_undefined');
          } else {
            message = getErrorMessage(lang, 'invalid_type', {
              received: String(issue.received),
            });
          }
          break;
        case z.ZodIssueCode.invalid_string:
          if (issue.validation === 'email') {
            message = getErrorMessage(lang, 'invalid_string_email');
          } else if (issue.validation === 'url') {
            message = getErrorMessage(lang, 'invalid_string_url');
          } else if (issue.validation === 'uuid') {
            message = getErrorMessage(lang, 'invalid_string_uuid');
          } else {
            message = getErrorMessage(lang, 'invalid_type'); // Fallback to a generic invalid message
          }
          break;
        case z.ZodIssueCode.too_small:
          if (issue.type === 'string') {
            message = getErrorMessage(lang, 'too_small_string_minimum', {
              minimum: String(issue.minimum),
            });
          } else {
            // Handle other types if necessary, e.g., number, array
            message = ctx.defaultError;
          }
          break;
        case z.ZodIssueCode.too_big:
          if (issue.type === 'string') {
            message = getErrorMessage(lang, 'too_big_string_maximum', {
              maximum: String(issue.maximum),
            });
          } else {
            // Handle other types if necessary
            message = ctx.defaultError;
          }
          break;
        default:
          // For any other issue code, fallback to Zod's default error message
          message = ctx.defaultError;
      }

      return { message };
    };

export const setGlobalZodErrorMap = (lang: LanguageCode) => {
  z.setErrorMap(customErrorMap(lang));
};
