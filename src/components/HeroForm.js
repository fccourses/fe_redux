import { Formik, Form, Field } from 'formik';
import { connect } from 'react-redux';
import * as HeroActionCreators from '../actions/heroCreators';

const HeroForm = props => {
  const { createHeroAction } = props;
  const onSubmit = (values, formikBag) => {
    createHeroAction(values);
    formikBag.resetForm();
  };
  
  return (
    <Formik
      onSubmit={onSubmit}
      initialValues={{
        nickname: '',
        realName: '',
        originDescription: '',
        catchPhrase: '',
      }}
    >
      <Form>
        <Field name='nickname' placeholder='nickname' />
        <Field name='realName' placeholder='realName' />
        <Field name='originDescription' placeholder='originDescription' />
        <Field name='catchPhrase' placeholder='catchPhrase' />
        <button type='submit'>Create Hero</button>
      </Form>
    </Formik>
  );
};

const mapDispatchToProps = dispatch => ({
  createHeroAction: values =>
    dispatch(HeroActionCreators.createHeroRequest(values)),
});

export default connect(null, mapDispatchToProps)(HeroForm);
