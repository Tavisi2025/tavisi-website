import { PhoneNumberUtil } from "google-libphonenumber";

export const isPhoneValid = (phone: string): boolean => {
  try {
    const phoneUtil = PhoneNumberUtil.getInstance();
    return phoneUtil.isValidNumber(phoneUtil.parseAndKeepRawInput(phone, 'US'));
  } catch {
    return false;
  }
};
