import React from 'react'
import Meta from '../com/Meta'
import BreadCrumb from '../com/BreadCrumb'
import { Link } from 'react-router-dom'
import Container from '../com/Container'
import CustomInput from '../com/CustomInput'
const Signup = () => {
  return (
    <>
      <Meta title={"Sign Up"} />
      <BreadCrumb title="Sign Up" />
      <Container class1="login-wrapper py-5 home-wapper-2">
        <div className="row">
          <div className="col-12">
            <div className="auth-card">
              <h3 className="text-center mb-3">Sign Up</h3>
              <form action="" className="d-flex flex-column gap-15">
                <CustomInput type="text" name="Name" placeholder="Name" />
                <CustomInput type="email" name="email" placeholder="Email" />
                <CustomInput type="tel" name="mobile" placeholder="Mobile Number"/>
                <CustomInput type="password" name="password" placeholder="Password" />
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