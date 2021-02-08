import React, {useEffect} from "react";
import './home.css';
import '../Welcome/welcome.css';
import Welcome from "../Welcome/welcome";
import logo from '../../logo.svg'
import background from "../../mainbg.jpg";
import Aos from "aos";
import 'aos/dist/aos.css';

const Home = ({ company }) => {

	useEffect(() => {
		Aos.init({});
	},[]);

	return (
		<main className="main" style={{
			backgroundImage: `url(${background})`,
			backgroundRepeat: 'no-repeat',
			backgroundSize: '100% 47%'}}>
			<div className="container">
				<hgroup className="title">
					<h1>
						<img className="logo-title" src={logo} alt={company.name}/>
					</h1>
					<h2 className="subtitle" data-aos="fade-in" data-aos-duration="1000">
						{company.summary}
					</h2>
				</hgroup>


				<div className="welcome" data-aos="fade-in" data-aos-duration="3000">
					<div className="text">{ Welcome() }</div>
				</div>


				<div className="row">

						<table data-aos="fade-up" data-aos-duration="2000" className="home_table home_table-manager">
							<caption className="home_table-title">
								Manager
							</caption>

							<thead>
							<tr>
								<td className="home_table-column table-column-left">CEO</td>
								<td className="home_table-column">{company.ceo}</td>
							</tr>
							<tr>
								<td className="home_table-column table-column-left">COO</td>
								<td className="home_table-column">{company.coo}</td>
							</tr>
							<tr>
								<td className="home_table-column table-column-left">CTO</td>
								<td className="home_table-column">{company.cto}</td>
							</tr>
							<tr>
								<td className="home_table-column table-column-left">CTO PROPULSION</td>
								<td className="home_table-column">{company.cto_propulsion}</td>
							</tr>
							</thead>
						</table>

						<table data-aos="fade-up" data-aos-duration="2000" className="home_table home_table-location">
							<caption className="home_table-title">
								Location
							</caption>
							<thead>
							<tr>
								<td className="home_table-column table-column-left">State</td>
								<td className="home_table-column">{company.headquarters.state}</td>
							</tr>
							<tr>
								<td className="home_table-column table-column-left">City</td>
								<td className="home_table-column">{company.headquarters.city}</td>
							</tr>
							<tr>
								<td className="home_table-column table-column-left">Address</td>
								<td className="home_table-column">{company.headquarters.address}</td>
							</tr>
							</thead>
						</table>

						<video data-aos="fade-up" data-aos-duration="2000" id="video" autoPlay loop muted className="responsive-video" width="100%" height="100%" preload="auto">
							<source type="video/mp4" src="https://www.spacex.com/media/mission_reusability.mp4"/>
							<source type="video/webm" src="https://www.spacex.com/media/mission_reusability.webm"/>
						</video>

				</div>

			</div>

		</main>
	);
}

export default Home;
