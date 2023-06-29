import * as yup from 'yup';

export const ratingValidationSchema = yup.object().shape({
  score: yup.number().integer().required(),
  user_id: yup.string().nullable(),
  organization_id: yup.string().nullable(),
});
