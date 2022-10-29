import React from "react";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/common-section/CommonSection";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";

const Login = () => {
  const schema = yup.object().shape({
    email: yup
      .string()
      .required("Please enter your email!")
      .matches(
        /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
        "Please enter your email a valid!"
      ),
    password: yup
      .string()
      .required("Please enter your password!")
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
        "Please enter your password at least eight characters includes one letter, one number and one special character!"
      ),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: schema,
    onSubmit: (values) => {
      alert("You login success!");
    },
  });

  return (
    <Helmet title="Login">
      <div className="content">
        <CommonSection title="Login" />

        <section>
          <Container>
            <Row>
              <Col lg="6" md="6" sm="12" className="m-auto text-center">
                <form className="form mb-5" onSubmit={formik.handleSubmit}>
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
                  <button type="submit" className="addTOCart__btn">
                    Login
                  </button>
                </form>
                <Link to="/register">
                  Don't have an account? Create an account
                </Link>
              </Col>
            </Row>
          </Container>
        </section>
      </div>
    </Helmet>
  );
};

export default Login;
