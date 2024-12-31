import * as yup from 'yup';

export const requiredValidation = () =>
  yup.string().max(128, 'Extra length field').required('This field is required');
