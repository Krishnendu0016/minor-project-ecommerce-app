import React from 'react'
import Meta from '../com/Meta'
import BreadCrumb from '../com/BreadCrumb'
import { Link,useNavigate } from 'react-router-dom'
import Container from '../com/Container'
import CustomInput from '../com/CustomInput'
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useDispatch, useSelector } from 'react-redux'
import { registerUser } from '../features/user/userSlice'

const signUpSchema = yup.object({
  firstname: yup.string().defined("First Name is Required"),
  lastname: yup.string().required("Last Name is Required"),
  email: yup.string().required("Email is Required").email("Email should be valid"),
  mobile: yup.string().required("Mobile No is Required"),
  password: yup.string().required("Password is Required")
});

const Signup = () => {
  const authState=useSelector(state=>state.auth)
  const navigate=useNavigate()
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      firstname: '',
      lastname: '',
      email: '',
      mobile: '',
      password: ''
    },
    validationSchema: signUpSchema,
    onSubmit: values => {
      dispatch(registerUser(values));
      navigate('/login')
    },
  });

  return (
    <>
      <Meta title={"Sign Up"} />
      <BreadCrumb title="Sign Up" />
      <Container class1="login-wrapper py-5 home-wapper-2">
        <div className="row">
          <div className="col-12">
            <div className="auth-card">
              <h3 className="text-center mb-3">Sign Up</h3>
              <form action="" onSubmit={formik.handleSubmit} className="d-flex flex-column gap-15">
                <CustomInput 
                  type="text" 
                  name="firstname" 
                  placeholder="First Name" 
                  value={formik.values.firstname} 
                  onChange={formik.handleChange("firstname")}
                  onBlur={formik.handleBlur("firstname")}
                />
                <div className="error">
                  {formik.touched.firstname && formik.errors.firstname}
                </div>
                <CustomInput 
                  type="text" 
                  name="lastname" 
                  placeholder="Last Name" 
                  value={formik.values.lastname} 
                  onChange={formik.handleChange("lastname")}
                  onBlur={formik.handleBlur("lastname")}
                />
                <div className="error">
                  {formik.touched.lastname && formik.errors.lastname}
                </div>
                <CustomInput 
                  type="email" 
                  name="email" 
                  placeholder="Email" 
                  value={formik.values.email} 
                  onChange={formik.handleChange("email")}
                  onBlur={formik.handleBlur("email")}
                />
                <div className="error">
                  {formik.touched.email && formik.errors.email}
                </div>
                <CustomInput 
                  type="tel" 
                  name="mobile" 
                  placeholder="Mobile Number" 
                  value={formik.values.mobile} 
                  onChange={formik.handleChange("mobile")}
                  onBlur={formik.handleBlur("mobile")}
                />
                <div className="error">
                  {formik.touched.mobile && formik.errors.mobile}
                </div>
                <CustomInput 
                  type="password" 
                  name="password" 
                  placeholder="Password" 
                  value={formik.values.password} 
                  onChange={formik.handleChange("password")}
                  onBlur={formik.handleBlur("password")}
                />
                <div className="error">
                  {formik.touched.password && formik.errors.password}
                </div>
                <div>
                  <div className=" mt-3 d-flex justify-content-center gap-15 align-items-center">
                    <button className="button border-0">SignUp</button>
                  </div>

                </div>
              </form>
            </div>
          </div>
        </div>
      </Container>

    </>
  )
}

export default Signup