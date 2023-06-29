import * as yup from 'yup';

export const commentValidationSchema = yup.object().shape({
  text: yup.string(),
  image: yup.string(),
  video: yup.string(),
  user_id: yup.string().nullable(),
  organization_id: yup.string().nullable(),
});
