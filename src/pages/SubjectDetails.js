import React, { useState } from 'react';
import {videos} from '../data/videos';
import {reviews} from '../data/reviews';
import Video from '../component/Video';
import Reviews from '../component/Reviews';

function SubjectDetails() {
	
  const [data, setData] = useState(videos);

  return (
    <div className = 'subjectDetails'>
      {/* <!-- ============================ Page Title Start================================== --> */}
			<div className="ed_detail_head tabShdBox">
				<div className="container">
					<div className="row mt-4">
						<div className="col-lg-12 col-md-12">
							<div className="row setBoxShd">
								<div className="col-lg-3 col-md-12 col-sm-12">
									<div className="authi_125">
										<div className="crs_cates cl_3"><span>Tution</span></div>
											<div className="ed_header_caption">
												<h2 className="ed_title subjectTtl">Quantitative Aptitude</h2>
											</div>
										<div className="authi_125_thumb">
											<img src="https://via.placeholder.com/700x550" className="img-fluid rounded" alt="" />
										</div>
										<a href="#" className="klio_45"><div className="lklo_45"><i className="fas fa-play"></i></div><h6>Preview</h6></a>
									</div>
								</div>
							
								<div className="col-lg-9 col-md-12 col-sm-12">
									<div className="pt-3">
										<div className="containers">
											<div className="row justify-content-between">
											
												<div className="col-lg-8 col-md-12 order-lg-first">
													
													{/* <!-- All Info Show in Tab --> */}
													<div className="tab_box_info mt-4">
														<ul className="nav nav-pills mb-3 light" id="pills-tab" role="tablist">
															<li className="nav-item">
																<a className="nav-link active" id="overview-tab" data-toggle="pill" href="#overview" role="tab" aria-controls="overview" aria-selected="true">About</a>
															</li>
															<li className="nav-item">
																<a className="nav-link" id="curriculum-tab" data-toggle="pill" href="#curriculum" role="tab" aria-controls="curriculum" aria-selected="false">Syllabus</a>
															</li>
															<li className="nav-item">
																<a className="nav-link" id="instructors-tab" data-toggle="pill" href="#instructors" role="tab" aria-controls="instructors" aria-selected="false">Downloads</a>
															</li>
															<li className="nav-item">
																<a className="nav-link" id="reviews-tab" href="#reviewsSection">Reviews</a>
															</li>
															<li className="nav-item">
																<a className="nav-link" id="faq-tab" href="#faqSect-set">FAQ's</a>
															</li>
														</ul>
													
														<div className="tab-content" id="pills-tabContent">
															
															{/* <!-- Overview Detail --> */}
															<div className="tab-pane fade show active" id="overview" role="tabpanel" aria-labelledby="overview-tab">
																{/* <!-- Overview --> */}
																<div className="edu_wraper">
																	<h4 className="edu_title">Course Overview</h4>
																	<p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.</p>		
																	<p>Aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto. Sam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
																</div>
															</div>
															
															{/* <!-- Curriculum Detail --> */}
															<div className="tab-pane fade" id="curriculum" role="tabpanel" aria-labelledby="curriculum-tab">
																Syllabus
															</div>
															
															{/* <!-- Instructor Detail --> */}
															<div className="tab-pane fade" id="instructors" role="tabpanel" aria-labelledby="instructors-tab">
																Downloads
															</div>
															
															{/* <!-- Reviews Detail --> */}
															<div className="tab-pane fade" id="reviews">
																<a href="#reviewsSection">Reviews</a>
															</div>
															
															{/* <!-- FAQ Detail --> */}
															<div className="tab-pane fade" id="faq" role="tabpanel" aria-labelledby="faq-tab">
																FAQ
															</div>
														</div>
													</div>
													
												</div>
												
												<div className="col-lg-4 col-md-12 p-r-0">
													<div className="btnGroup">
														<button className="btn btnSetFor">
															<i className="fa fa-users"></i> Learn through Expert Faculties
														</button>
														<button className="btn btnSetFor">
															<i className="fa fa-lock"></i> Go all your own pace
														</button>
														<button className="btn btnSetFor">
															<i className="fa fa-check-circle"></i> User Friendly Interface
														</button>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* <!-- ============================ Page Title End ================================== --> */}
			{/* <!-- ============================ Free Videos ================================== --> */}
			<section className="freVdo pt-5">
				<div className="container">
				
					<div className="row">
						<div className="col-lg-7 col-md-8">
							<div className="sec-heading">
								<h4>Chapter-1: <span className="theme-cl">Name of Chapter</span></h4>
							</div>
						</div>
					</div>
					
					<div className="row justify-content-center mb-5">
						<div className="col-xl-12 col-lg-12 col-sm-12">
							<div className="vdo-slider space">
								<Video data = {data} />									
							</div>
						
						</div>
					</div>
					
					<div className="row">
						<div className="col-lg-7 col-md-8">
							<div className="sec-heading">
								<h4>Chapter-2: <span className="theme-cl">Name of Chapter</span></h4>
							</div>
						</div>
					</div>
					
					<div className="row justify-content-center  mb-5">
						<div className="col-xl-12 col-lg-12 col-sm-12">
							<div className="vdo-slider space">
								<Video data = {data} />													
							</div>
						</div>
					</div>
					
				</div>
			</section>
			{/* <!-- ============================ Students Reviews End ================================== --> */}
			
			{/* <!-- ============================ Review Start ================================== --> */}
			<section className="review-section gray" id="reviewsSection">
				<div className="row justify-content-center">
					<div className="col-lg-7 col-md-8">
						<div className="sec-heading center">
							<h2><span className="theme-cl">Reviews</span></h2>
						</div>
					</div>
				</div>
				<div className="container">
				{/* <!-- Reviews --> */}
					<div className="list-single-main-item fl-wrap">
						<div className="list-single-main-item-title fl-wrap">
							<h3>Reviews -  <span> 3 </span></h3>
						</div>
						<div className="reviews-comments-wrap">
							<Reviews reviews = {reviews} />
						</div>
					</div>
						
					<div className="edu_wraper" style={{padding: '2rem'}}>
						<h4 className="edu_title">Submit Reviews</h4>
						<div className="review-form-box form-submit">
							<form>
								<div className="row">
									
									<div className="col-lg-6 col-md-6 col-sm-12">
										<div className="form-group">
											<label>Name</label>
											<input className="form-control" type="text" placeholder="Your Name" />
										</div>
									</div>
									
									<div className="col-lg-6 col-md-6 col-sm-12">
										<div className="form-group">
											<label>Email</label>
											<input className="form-control" type="email" placeholder="Your Email" />
										</div>
									</div>
									
									<div className="col-lg-12 col-md-12 col-sm-12">
										<div className="form-group">
											<label>Review</label>
											<textarea className="form-control ht-140" placeholder="Review"></textarea>
										</div>
									</div>
									
									<div className="col-lg-12 col-md-12 col-sm-12">
										<div className="form-group">
											<button type="submit" className="btn theme-bg btn-md">Submit Review</button>
										</div>
									</div>
									
								</div>
							</form>
						</div>
					</div>
				</div>
			</section>
			
			{/* <!-- ============================ Review End ================================== --> */}
			
			
			
			{/* <!-- ============================ FAQ Start ================================== --> */}
			<section className="faq-section" id="faqSect-set">
				<div className="container">
					<div className="row justify-content-center">
						<div className="col-lg-7 col-md-8">
							<div className="sec-heading center">
								<h2>Frequently Asked <span className="theme-cl">Questions</span></h2>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
							</div>
						</div>
					</div>
					
					<div className="row justify-content-center">
						<div className="col-lg-12 col-md-12 col-sm-12">
							<div id="accordionExample" className="accordion">

								{/* <!-- Part 1 --> */}
								<div className="card">
								  <div id="headingOne" className="card-header bg-white shadow-sm border-0">
									<h6 className="mb-0 accordion_title"><a href="#" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" className="d-block position-relative text-dark collapsible-link py-2">Lorem ipsum dolor sit amet</a></h6>
								  </div>
								  <div id="collapseOne" aria-labelledby="headingOne" data-parent="#accordionExample" className="collapse show">
									<div className="card-body pl-3 pr-3 pt-0">
										<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
										<p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.</p>
									</div>
								  </div>
								</div>

								{/* <!-- Part 2 --> */}
								<div className="card">
								  <div id="headingTwo" className="card-header bg-white shadow-sm border-0">
									<h6 className="mb-0 accordion_title"><a href="#" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" className="d-block position-relative collapsed text-dark collapsible-link py-2">At vero eos et accusamus et iusto odio dignissimos</a></h6>
								  </div>
								  <div id="collapseTwo" aria-labelledby="headingTwo" data-parent="#accordionExample" className="collapse">
									<div className="card-body pl-3 pr-3 pt-0">
										<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
										<p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.</p>
									</div>
								  </div>
								</div>

								{/* <!-- Part 3 --> */}
								<div className="card">
								  <div id="headingThree" className="card-header bg-white shadow-sm border-0">
									<h6 className="mb-0 accordion_title"><a href="#" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" className="d-block position-relative collapsed text-dark collapsible-link py-2">consectetur adipiscing elit</a></h6>
								  </div>
								  <div id="collapseThree" aria-labelledby="headingThree" data-parent="#accordionExample" className="collapse">
									<div className="card-body pl-3 pr-3 pt-0">
										<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
										<p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.</p>
									</div>
								  </div>
								</div>
								
								{/* <!-- Part 04 --> */}
								<div className="card">
								  <div id="headingFour" className="card-header bg-white shadow-sm border-0">
									<h6 className="mb-0 accordion_title"><a href="#" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour" className="d-block position-relative collapsed text-dark collapsible-link py-2">How To Become Succes in Designing & Development?</a></h6>
								  </div>
								  <div id="collapseFour" aria-labelledby="headingFour" data-parent="#accordionExample" className="collapse">
									<div className="card-body pl-3 pr-3 pt-0">
										<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
										<p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.</p>
									</div>
								  </div>
								</div>

							</div>
						</div>
					</div>
				</div>
			</section>
			<div className="clearfix"></div>
			{/* <!-- ============================ FAQ End ================================== --> */}
    </div>
  )
}

export default SubjectDetails
