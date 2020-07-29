import React from 'react';
import { TextInput, View, Text } from 'react-native';
import { Formik, Form, FormikHelpers } from 'formik';
import * as Yup from 'yup';

import { globalStyles } from '../styles/global';
import FlatButton from '../shared/FlatButton';

interface Props {
  addReview: (review: {
    title: string;
    rating: string;
    body: string;
    key: string;
  }) => void;
}

interface Values {
  title: string;
  body: string;
  rating: string;
  key: string;
}

const ReviewSchema = Yup.object({
  title: Yup.string().required().min(4),
  body: Yup.string().required().min(8),
  rating: Yup.string()
    .required()
    .test('is-num-1-5', 'Rating must be a number 1 - 5', val => {
      return parseInt(val) < 6 && parseInt(val) > 0;
    }),
});

const ReviewForm = (props: Props) => {
  const initialValues = {
    title: '',
    body: '',
    rating: '',
    key: '',
  };

  const onSubmit = (
    values: Values,
    { setSubmitting, resetForm }: FormikHelpers<Values>
  ) => {
    resetForm();
    props.addReview(values);
  };
  return (
    <View style={globalStyles.container}>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={ReviewSchema}
      >
        {formik => (
          <View>
            <TextInput
              style={globalStyles.input}
              placeholder='Review title'
              onChangeText={formik.handleChange('title')}
              value={formik.values.title}
              onBlur={formik.handleBlur('title')}
            />
            <Text style={globalStyles.errorText}>
              {formik.touched.title && formik.errors.title}
            </Text>
            <TextInput
              multiline
              style={globalStyles.input}
              placeholder='Review comment'
              onChangeText={formik.handleChange('body')}
              value={formik.values.body}
              onBlur={formik.handleBlur('body')}
            />
            <Text style={globalStyles.errorText}>
              {formik.touched.body && formik.errors.body}
            </Text>
            <TextInput
              style={globalStyles.input}
              placeholder='Rating from 1 to 5'
              onChangeText={formik.handleChange('rating')}
              value={formik.values.rating}
              keyboardType='numeric'
              onBlur={formik.handleBlur('rating')}
            />
            <Text style={globalStyles.errorText}>
              {formik.touched.rating && formik.errors.rating}
            </Text>
            <FlatButton text='submit' onPress={formik.handleSubmit} />
          </View>
        )}
      </Formik>
    </View>
  );
};

export default ReviewForm;
