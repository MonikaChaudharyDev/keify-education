import React from 'react'

const TutionClass = (props) => {
    return (
        <>
            <div className="col-xl-3 col-lg-4 col-md-4 col-sm-6">
							<div className="crs_cate_wrap style_2">
								<a href="grid-layout-with-sidebar.html" className="crs_cate_box">
									<div className="crs_cate_icon"><i className="fa fa-graduation-cap"></i></div>
									<div className="crs_cate_caption"><span>Class - {props.title}</span></div>
									<div className="crs_cate_count"><span>{props.totallecture} Lectures</span></div>
								</a>
							</div>
						</div>
        </>
    )
}

export default TutionClass
