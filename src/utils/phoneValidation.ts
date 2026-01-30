// Uses google-libphonenumber for validation (PhoneNumberUtil.getInstance())
// eslint-disable-next-line @typescript-eslint/no-require-imports
const PhoneNumberUtil = require('google-libphonenumber').PhoneNumberUtil;

export const isPhoneValid = (phone: string): boolean => {
  try {
    const phoneUtil = PhoneNumberUtil.getInstance();
    return phoneUtil.isValidNumber(phoneUtil.parseAndKeepRawInput(phone, 'US'));
  } catch {
    return false;
  }
};
