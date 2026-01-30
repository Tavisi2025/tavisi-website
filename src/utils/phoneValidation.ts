import { PhoneNumberUtil } from "google-libphonenumber";

export const isPhoneValid = (phone: string): boolean => {
  try {
    const phoneUtil = PhoneNumberUtil.getInstance();
    // checking validity for US region; modify as needed
    return phoneUtil.isValidNumber(phoneUtil.parseAndKeepRawInput(phone, 'US'));
  } catch {
    return false;
  }
};
