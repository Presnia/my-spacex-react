import React from "react";
import './home.css';
import '../Welcome/welcome.css';
import Welcome from "../Welcome/welcome";
import logo from '../../logo.svg'
import background from "../../mainbg.jpg";
import styled, { keyframes } from 'styled-components';
import { fadeInUp } from 'react-animations';


const Home = ({ company }) => {

	const bounceAnimation = keyframes`${fadeInUp}`;
	const FadeInUpDiv = styled.div`animation: 1s ${bounceAnimation};`;
	const FadeInUpDiv2 = styled.div`animation: 2s ${bounceAnimation};`;

	const welCome = Welcome();

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
					<h2 className="subtitle">
						{company.summary}
					</h2>
				</hgroup>

				<div className="welcome">
					<div className="text">Neo, sooner or later you're going to realize..</div>
				</div>

				<div className="row">
					<FadeInUpDiv>
						<table className="home_table home_table-manager">
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
					</FadeInUpDiv>

					<FadeInUpDiv2>
						<table className="home_table home_table-location">
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
					</FadeInUpDiv2>

					<FadeInUpDiv2>
						<video id="video" autoPlay loop muted className="responsive-video" width="100%" height="100%" preload="auto">
							<source type="video/mp4" src="https://www.spacex.com/media/mission_reusability.mp4"/>
							<source type="video/webm" src="https://www.spacex.com/media/mission_reusability.webm"/>
						</video>
					</FadeInUpDiv2>
				</div>

			</div>

		</main>
	);
}

export default Home;
