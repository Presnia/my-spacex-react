/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Main from '../Main/Main';
import useLaunches from '../useLaunches/useLaunches';
import YouTube from 'react-youtube';
import './details.css';

const Details = (props) => {

	const [launch, setLaunch] = useState(null);
	const { getLaunch } = useLaunches();

	useEffect(() => {
		setLaunch(getLaunch(props.match.params.id));
	}, [getLaunch, props.match.params.id]);

	const history = useHistory();
	console.log(getLaunch)

	if (!launch) return null;
	
	return (
  <>
		<Main name={launch.name} />
		<section className="details">
				<div className="container">
					<div className="details-row">
						<div className="details-image">
							<img src={launch.links.patch.small} alt={launch.name} />
						</div>
						<div className="details-content">
							<p className="details-description">{launch?.details}</p>
						</div>
						<YouTube className="details-youtube" videoId={launch.links.youtube_id} />
					</div>
				</div>
		<a onClick={history.goBack} className="button button-back">go back</a>
	</section>
	</>
)};

export default Details;