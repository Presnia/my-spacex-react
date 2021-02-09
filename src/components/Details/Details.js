/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Main from '../Main/Main';
import useLaunches from '../Hooks/useLaunches';
import YouTube from 'react-youtube';
import './details.css';
import Aos from "aos";

const Details = (props) => {

	const [launch, setLaunch] = useState(null);
	const { getLaunch } = useLaunches();

	useEffect(() => {
		setLaunch(getLaunch(props.match.params.id));
	}, [getLaunch, props.match.params.id]);

	useEffect(() => {
		Aos.init({});
	},[]);

	const history = useHistory();

	if (!launch) return null;
	
	return (
  <>
		<Main name={launch.name} />
		<section className="details">
				<div className="container">
					<div className="details-row">
						<div className="details-image" data-aos="fade-up" data-oas-duration="2000">
							<img src={launch.links.patch.small} alt={launch.name} />
						</div>
						<div className="details-content" data-aos="fade-up" data-oas-duration="3000">
							<p className="details-description">{launch?.details}</p>
						</div>
						<div className="video-block" data-aos="fade-up" data-oas-duration="3000">
							<YouTube className="details-youtube" videoId={launch.links.youtube_id} />
						</div>
					</div>
				</div>
		<a onClick={history.goBack} className="button button-back" data-aos="flip-left" data-oas-duration="3000">Back</a>
	</section>
	</>
)};

export default Details;