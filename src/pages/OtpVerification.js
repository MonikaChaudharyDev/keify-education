import React from 'react';
import B9 from '../assets/img/b-9.png';
import { BrowserRouter as Router, Route, Link,NavLink } from 'react-router-dom';
function OtpVerification() {
  return (
    <div classname = 'OtpVerification'>
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
											<div className="Lpo09 mb-4"><h4>OTP Verification</h4></div>
											<h4 className="otpRecNo mb-4 text-center">Enter the OTP sent to ******4569</h4>
											<div className="form-group otpCenterColl text-center">
												<input type="text" className="form-control otpEnty" id="otpNo1"/>
												<input type="text" className="form-control otpEnty" id="otpNo2"/>
												<input type="text" className="form-control otpEnty" id="otpNo3"/>
												<input type="text" className="form-control otpEnty" id="otpNo4"/>
											</div>
											<div className="form-group mb-4">
												<h4 className="editPhNo mb-3">
													<a href="#">
														<i className="fas fa-pencil-alt"></i> Edit Phone Number
													</a>
												</h4>
												<input type="text" className="form-control enterPhNo" id="phNoEdit" style = {{display: 'none'}}/>
											</div>
											<div className="form-group">
												<button type="button" className="btn full-width btn-md theme-bg text-white">Verify & Continue</button>
											</div>
										</div>
									</div>
									<div className="crs_log__footer d-flex justify-content-between">
										<div className="fhg_45"><p className="musrt">Don't have account? <NavLink to="/signup" className="theme-cl">SignUp</NavLink></p></div>
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

export default OtpVerification
