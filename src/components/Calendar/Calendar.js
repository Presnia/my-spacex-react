/* eslint-disable jsx-a11y/anchor-has-content */
import React, {useEffect} from 'react';
import Main from '../Main/Main';
import { Link } from 'react-router-dom';
import useLaunches from '../useLaunches/useLaunches';
import './calendar.css';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Calendar = () => {

	const { data } = useLaunches();

	useEffect(() => {
		Aos.init({duration: 3000});
	},[]);
	
	return (
		<>
			<Main name='SpaceX Calendar' />
			<section className="calendar">
			<div className="container">
				<ul className="calendar-list">
				{
					data.map(item => (
          <li className="calendar-item" key={item.id} data-aos="fade-up">
							<article className="launches">
								<div className="launches-image">
									<img src={item.links.patch.small} alt="project picture" />
								</div>
								<div className="launches-content">
									<h2 className="launches-title">{item.name}</h2>
									<Link to={`/details/${item.id}`} className="button launches-details">Подробнее</Link>
								</div>
							</article>
					</li>
					))
				}
				
				</ul>
			</div>
		</section>
		</>
)
};

export default Calendar;