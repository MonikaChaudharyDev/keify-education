import React from 'react';
import B9 from '../assets/img/b-9.png'
import { BrowserRouter as Router, Route, Link,NavLink } from 'react-router-dom';
function Login() {
  return (
    <div className = 'login'>
      <section>
				<div className="container">
					<div className="row justify-content-center">
					
						<div className="col-xl-7 col-lg-8 col-md-12 col-sm-12">
							<form>
								<div className="crs_log_wrap bx-shd-wrap">
									<div className="crs_log__thumb">
										<img src={B9} className="img-fluid" alt="" />
									</div>
									<div className="crs_log__caption">
										<div className="rcs_log_123">
											<div className="rcs_ico"><i className="fas fa-lock"></i></div>
										</div>
										
										<div className="rcs_log_124">
											<div className="Lpo09"><h4>Login Your Account</h4></div>
											<div className="form-group">
												<label>Email-Id/Mobile Number</label>
												<input type="text" className="form-control" placeholder="support@keify.com" />
											</div>
											<div className="form-group">
												<label>Password</label>
												<input type="text" className="form-control" placeholder="*******" />
											</div>
											<div class="form-group">
												<button type="button" className="btn full-width btn-md theme-bg text-white">Login</button>
											</div>
										</div>
									</div>
									<div className="crs_log__footer d-flex justify-content-between">
										<div className="fhg_45"><p className="musrt">Don't have account? <NavLink to="/signup" className="theme-cl">SignUp</NavLink></p></div>
										<div className="fhg_45"><p className="musrt"><NavLink to="/forgotpassword" className="text-danger">Forgot Password?</NavLink></p></div>
									</div>
								</div>
							</form>
						</div>

					</div>
				</div>
			</section>
    </div>
  )
}

export default Login
