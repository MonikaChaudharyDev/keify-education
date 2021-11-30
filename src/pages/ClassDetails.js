import React, { useState } from 'react';
import {videos} from '../data/videos';
import Video from '../component/Video';
import Cr3 from '../assets/img/cr-3.jpg';
import Subject from '../component/Subject';

function ClassDetails() {
	
  const [data, setData] = useState(videos);

  return (
    <div className = 'classDetails'>
      {/* <!-- ============================ Page Title Start================================== --> */}
			<div className="ed_detail_head">
				<div className="container">
					<div className="row mt-4">
						<div className="col-lg-8 col-md-12">
							<div className="row setBoxShd">
								<div className="col-lg-3 col-md-12 col-sm-12">
									<div className="authi_125">
										<div className="crs_cates cl_3"><span>Tution</span></div>
											<div className="ed_header_caption">
												<h2 className="ed_title">Class - X</h2>
											</div>
										<div className="authi_125_thumb">
											<img src="https://via.placeholder.com/700x550" className="img-fluid rounded" alt="" />
										</div>
										<a href="#" className="klio_45"><div className="lklo_45"><i className="fas fa-play"></i></div><h6>Preview</h6></a>
									</div>
								</div>
							
								<div className="col-lg-9 col-md-12 col-sm-12">
									<div className="dlkio_452">
										<div className="ed_detail_wrap">
											<h4 className="edu_title">Class Overview</h4>
											<div className="ed_header_short">
												<p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. <a href="#" class="theme-cl">Read More..</a>.</p>
											</div>
											
											<div className="ed_rate_info">
												<div className="star_info">
													<i className="fas fa-star filled"></i>
													<i className="fas fa-star filled"></i>
													<i className="fas fa-star filled"></i>
													<i className="fas fa-star filled"></i>
													<i className="fas fa-star"></i>
												</div>
												<div className="review_counter">
													<strong className="high">4.7</strong> 3572 Reviews
												</div>
											</div>
											
										</div>
									</div>
								</div>
							</div>
							{/* <!-- ============================ Course Detail ================================== --> */}
							<section className="pt-4 pb-0 courseDetails">
								<div className="container pl-0">
									<div className="row">
										<div className="col-lg-12 col-md-12 order-lg-first pl-0 pr-0">
											<h4 className="edu_title">Course Type</h4>
											{/* <!-- All Info Show in Tab --> */}
											<div className="tab_box_info mt-4">
												<ul className="nav nav-pills mb-3 light" id="pills-tab" role="tablist">
													<li className="nav-item">
														<a className="nav-link active" id="recordedLecture-tab" data-toggle="pill" href="#recordedLecture" role="tab" aria-controls="recordedLecture" aria-selected="true">Recorded Lecture</a>
													</li>
													<li className="nav-item">
														<a className="nav-link" id="pendrive-tab" data-toggle="pill" href="#pendrive" role="tab" aria-controls="pendrive" aria-selected="false">Pendrive</a>
													</li>
												</ul>
											
												<div className="tab-content" id="pills-tabContent">
													
													{/* <!-- recordedLecture Detail --> */}
													<div className="tab-pane fade show active" id="recordedLecture" role="tabpanel" aria-labelledby="recordedLecture-tab">
														{/* <!-- Overview --> */}
														<div className="edu_wraper">
															<h4 className="edu_title">Course Overview</h4>
															<p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.</p>		
															<p>Aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto. Sam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
														</div>
													</div>
													
													{/* <!-- pendrive Detail --> */}
													<div className="tab-pane fade" id="pendrive" role="tabpanel" aria-labelledby="pendrive-tab">
														{/* <!-- Overview --> */}
														<div className="edu_wraper">
															<h4 className="edu_title">Course Overview</h4>
															<p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.</p>		
															<p>Aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto. Sam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
									
								</div>
							</section>
							{/* <!-- ============================ Course Detail ================================== --> */}
						</div>
						<div className="col-lg-4 col-md-12 sideBarMe">
							<div className="ed_view_box style_2 border">
								<div className="ed_view_features">
									<div className="eld mb-1">
										<ul className="edu_list right ed_author">
											<li>
												Recorded Lectures:
												<strong className="theme-cl m-0">$149.00<span className="old_prc">$299.00</span></strong>
											</li>
											<li>
												<label className="subLbl">Choose your subscription:</label>
												<select className="form-control subPkg" id="">
													<option>12 Months <span className="saveTag">you save 75%</span></option>
													<option>12 Months <span className="saveTag">you save 75%</span></option>
													<option>12 Months <span className="saveTag">you save 75%</span></option>
													<option>12 Months <span className="saveTag">you save 75%</span></option>
												</select>
											</li>
											<li>GST:<strong>$76.1</strong></li>
											<li className="useCouponSet">Use SAVE05 and get 5% off. Limited period offer.</li>
										</ul>
									</div>
									<div className="eld mb-1">
										<ul className="edu_list right ed_author">
											<li>
												<b>Total Amount</b>:
												<strong className="theme-cl m-0">$499.00</strong>
											</li>
										</ul>
									</div>
									<div className="ed_view_link text-center">
										<a href="#" className="btn theme-light enroll-btn">Add to cart</a>
										<a href="#" className="btn theme-bg enroll-btn">Buy Now</a>
									</div>
								</div>
								
							</div>
							
						</div>
					</div>
				</div>
			</div>
			{/* <!-- ============================ Page Title End ================================== --> */}
			{/* <!-- ============================ Free Videos ================================== --> */}
			<section className="freVdo pt-5 gray">
				<div className="container">
				
					<div className="row justify-content-center">
						<div className="col-lg-7 col-md-8">
							<div className="sec-heading center">
								<h2>Free <span className="theme-cl">Videos</span></h2>
							</div>
						</div>
					</div>
					
					<div className="row justify-content-center">
						<div className="col-xl-12 col-lg-12 col-sm-12">
							<div className="vdo-slider space">
								<Video data = {data} />								
							</div>
						
						</div>
					</div>
					
				</div>
			</section>
			{/* <!-- ============================ Students Reviews End ================================== --> */}
			
			{/* <!-- ============================ Subject Start ================================== --> */}
			<section className="subjectSection">
				<div className="container">
					<div className="row justify-content-center">
						<div className="col-lg-7 col-md-8">
							<div className="sec-heading center">
								<h2>Subjects <span className="theme-cl">For You</span></h2>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
							</div>
						</div>
					</div>
					
					<div className="row justify-content-center">
						<Subject title='Quantitative aptitude' freenum={14} totalnum={80}/>
						<Subject title='Resoning' freenum={12}  totalnum={60}/>
						<Subject title='English'  freenum={16}  totalnum={75}/>
						<Subject  title='General awareness' freenum={15}  totalnum={65}/>
						
					
					</div>
					
					<div className="row justify-content-center">
						<div className="col-lg-7 col-md-8 mt-2">
							<div className="text-center"><a href="#" className="btn btn-md theme-bg-light theme-cl">Explore More Subjects</a></div>
						</div>
					</div>
					
				</div>
			</section>
    </div>
  )
}

export default ClassDetails
