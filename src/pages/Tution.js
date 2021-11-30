import React from 'react'
import TutionClass from '../component/TutionClass'

function Tution() {
  return (
    <div className = 'tution'>
      <section className="min">
				<div className="container">
				
					<div className="row justify-content-center">
						<div className="col-lg-7 col-md-8">
							<div className="sec-heading center">
								<h2>Explore <span className="theme-cl">Classes</span></h2>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
							</div>
						</div>
					</div>
					
					
					<div className="row justify-content-center">
						{/* <!-- Single Category --> */}
						<TutionClass title='X' totallecture={25}/>
						<TutionClass title='IX' totallecture={27}/>
						<TutionClass title='VIII' totallecture={23}/>
						<TutionClass title='VII' totallecture={25}/>
						<TutionClass title='VI' totallecture={22}/>
						<TutionClass title='XI' totallecture={27}/>
						<TutionClass title='XII' totallecture={22}/>
						<TutionClass title='V' totallecture={25}/>
					</div>
					
				</div>
			</section>
    </div>
  )
}

export default Tution
