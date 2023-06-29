import AppLayout from 'layout/app-layout';
import React, { useState } from 'react';
import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Text,
  Box,
  Spinner,
  FormErrorMessage,
  Switch,
  NumberInputStepper,
  NumberDecrementStepper,
  NumberInputField,
  NumberIncrementStepper,
  NumberInput,
} from '@chakra-ui/react';
import { useFormik, FormikHelpers } from 'formik';
import * as yup from 'yup';
import DatePicker from 'react-datepicker';
import { FiEdit3 } from 'react-icons/fi';
import { useRouter } from 'next/router';
import { createComment } from 'apiSdk/comments';
import { Error } from 'components/error';
import { commentValidationSchema } from 'validationSchema/comments';
import { AsyncSelect } from 'components/async-select';
import { ArrayFormField } from 'components/array-form-field';
import { AccessOperationEnum, AccessServiceEnum, withAuthorization } from '@roq/nextjs';
import { UserInterface } from 'interfaces/user';
import { OrganizationInterface } from 'interfaces/organization';
import { getUsers } from 'apiSdk/users';
import { getOrganizations } from 'apiSdk/organizations';
import { CommentInterface } from 'interfaces/comment';

function CommentCreatePage() {
  const router = useRouter();
  const [error, setError] = useState(null);

  const handleSubmit = async (values: CommentInterface, { resetForm }: FormikHelpers<any>) => {
    setError(null);
    try {
      await createComment(values);
      resetForm();
      router.push('/comments');
    } catch (error) {
      setError(error);
    }
  };

  const formik = useFormik<CommentInterface>({
    initialValues: {
      text: '',
      image: '',
      video: '',
      user_id: (router.query.user_id as string) ?? null,
      organization_id: (router.query.organization_id as string) ?? null,
    },
    validationSchema: commentValidationSchema,
    onSubmit: handleSubmit,
    enableReinitialize: true,
    validateOnChange: false,
    validateOnBlur: false,
  });

  return (
    <AppLayout>
      <Box bg="white" p={4} rounded="md" shadow="md">
        <Box mb={4}>
          <Text as="h1" fontSize="2xl" fontWeight="bold">
            Create Comment
          </Text>
        </Box>
        {error && (
          <Box mb={4}>
            <Error error={error} />
          </Box>
        )}
        <form onSubmit={formik.handleSubmit}>
          <FormControl id="text" mb="4" isInvalid={!!formik.errors?.text}>
            <FormLabel>Text</FormLabel>
            <Input type="text" name="text" value={formik.values?.text} onChange={formik.handleChange} />
            {formik.errors.text && <FormErrorMessage>{formik.errors?.text}</FormErrorMessage>}
          </FormControl>
          <FormControl id="image" mb="4" isInvalid={!!formik.errors?.image}>
            <FormLabel>Image</FormLabel>
            <Input type="text" name="image" value={formik.values?.image} onChange={formik.handleChange} />
            {formik.errors.image && <FormErrorMessage>{formik.errors?.image}</FormErrorMessage>}
          </FormControl>
          <FormControl id="video" mb="4" isInvalid={!!formik.errors?.video}>
            <FormLabel>Video</FormLabel>
            <Input type="text" name="video" value={formik.values?.video} onChange={formik.handleChange} />
            {formik.errors.video && <FormErrorMessage>{formik.errors?.video}</FormErrorMessage>}
          </FormControl>
          <AsyncSelect<UserInterface>
            formik={formik}
            name={'user_id'}
            label={'Select User'}
            placeholder={'Select User'}
            fetcher={getUsers}
            renderOption={(record) => (
              <option key={record.id} value={record.id}>
                {record?.email}
              </option>
            )}
          />
          <AsyncSelect<OrganizationInterface>
            formik={formik}
            name={'organization_id'}
            label={'Select Organization'}
            placeholder={'Select Organization'}
            fetcher={getOrganizations}
            renderOption={(record) => (
              <option key={record.id} value={record.id}>
                {record?.name}
              </option>
            )}
          />
          <Button isDisabled={formik?.isSubmitting} colorScheme="blue" type="submit" mr="4">
            Submit
          </Button>
        </form>
      </Box>
    </AppLayout>
  );
}

export default withAuthorization({
  service: AccessServiceEnum.PROJECT,
  entity: 'comment',
  operation: AccessOperationEnum.CREATE,
})(CommentCreatePage);
