import React from 'react';
import Helmet from '../components/Helmet/Helmet';
import CommonSection from '../components/UI/common-section/CommonSection';
import { Container, Row, Col } from 'reactstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as yup from 'yup';

import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase/firebase-config';
import { useDispatch } from 'react-redux';
import { updateNotifyStatus } from '../store/auth/authSlice';

const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const schema = yup.object().shape({
    fullName: yup
      .string()
      .required('Please enter your full name!')
      .min(4, 'Please enter your full name at least four characters!')
      .max(30, 'Too long!'),
    email: yup
      .string()
      .required('Please enter your email!')
      .matches(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/, 'Please enter your email a valid!'),
    password: yup
      .string()
      .required('Please enter your password!')
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
        'Please enter your password at least eight characters includes one letter, one number and one special character!'
      ),
    confirmedPassword: yup
      .string()
      .required('Please retype your password!')
      .oneOf([yup.ref('password'), null], 'Passwords must match!'),
  });

  const formik = useFormik({
    initialValues: {
      fullName: '',
      email: '',
      password: '',
      confirmedPassword: '',
    },
    validationSchema: schema,
    onSubmit: async (values, { resetForm }) => {
      try {
        const user = await createUserWithEmailAndPassword(auth, values.email, values.password);
        console.log(user);
        dispatch(updateNotifyStatus('succeed'));
        navigate('/login');
      } catch (error) {
        resetForm();
        dispatch(updateNotifyStatus('failure'));
      }
    },
  });

  return (
    <Helmet title="Signup">
      <div className="content">
        <CommonSection title="Signup" />

        <section>
          <Container>
            <Row>
              <Col lg="6" md="6" sm="12" className="m-auto text-center">
                <form className="form mb-5" onSubmit={formik.handleSubmit}>
                  <div className="form__group">
                    <input
                      type="text"
                      placeholder="Full Name"
                      id="fullName"
                      name="fullName"
                      value={formik.values.fullName}
                      onChange={formik.handleChange}
                    />
                    {formik.errors.fullName && <p>{formik.errors.fullName}</p>}
                  </div>
                  <div className="form__group">
                    <input
                      type="email"
                      placeholder="Email"
                      id="email"
                      name="email"
                      value={formik.values.email}
                      onChange={formik.handleChange}
                    />
                    {formik.errors.email && <p>{formik.errors.email}</p>}
                  </div>
                  <div className="form__group">
                    <input
                      type="password"
                      placeholder="Password"
                      id="password"
                      name="password"
                      value={formik.values.password}
                      onChange={formik.handleChange}
                    />
                    {formik.errors.password && <p>{formik.errors.password}</p>}
                  </div>
                  <div className="form__group">
                    <input
                      type="password"
                      placeholder="Confirmed Password"
                      id="confirmedPassword"
                      name="confirmedPassword"
                      value={formik.values.confirmedPassword}
                      onChange={formik.handleChange}
                    />
                    {formik.errors.confirmedPassword && <p>{formik.errors.confirmedPassword}</p>}
                  </div>
                  <button type="submit" className="addTOCart__btn">
                    Sign Up
                  </button>
                </form>
                <Link to="/login">Already have an account? Login</Link>
              </Col>
            </Row>
          </Container>
        </section>
      </div>
    </Helmet>
  );
};

export default Register;
