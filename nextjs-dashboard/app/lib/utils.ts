import { Revenue } from './definitions';


export const validateName = (name:string) => {
  const latinRegex = /^[a-zA-ZÀ-ÿ\u00f1\u00d1\s]+$/;
  return latinRegex.test(name);
};

export const validateEmail = (email:string) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};