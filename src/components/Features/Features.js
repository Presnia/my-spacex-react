import React, {useEffect, useState} from 'react';
import RelaxWrapper from 'react-rellax-wrapper';
import Main from '../Main/Main';
import useRockets from "../Hooks/useRockets";
import Aos from "aos";
import 'aos/dist/aos.css';
import './features.css';

const rocketImages = {
	'Falcon 1': 'falcon-1',
	'Falcon 9': 'falcon-9',
	'Falcon Heavy': 'falcon-heavy',
	'Starship': 'starship',
};

const Features = (props) => {

	const [rocket, setRocket] = useState([]);
	const { getRocket } = useRockets();

	useEffect(() => {
		setRocket(getRocket(props.id));
	}, [getRocket, props.id]);
	console.log(rocket)


	useEffect(() => {
		Aos.init({});
	},[]);

	const {
		  name,
			height,
			diameter,
			mass,
			payload_weights: payloadWeights,
			description
	} = props;

	  return (
			<>

				<Main rocket={name} data-aos="fade-up" data-aos-duration="3000"/>
				<section className="features">
					<h2 className="features-title" data-aos="fade-up" data-aos-duration="3000">
						{name} <br/>Overview
					</h2>
					<div className="overview">

						<table className="table">
							<caption className="table-title" data-aos="fade-up" data-aos-duration="3000">
								Size
							</caption>
							<thead data-aos="fade-up" data-aos-duration="3000">
								<tr>
									<td className="table-column">HEIGHT</td>
									<td className="table-column">{height.meters} m / {height.feet} ft</td>
								</tr>
								<tr>
									<td className="table-column">DIAMETER</td>
									<td className="table-column">{diameter.meters} m / {diameter.feet} ft</td>
								</tr>
								<tr>
									<td className="table-column">MASS</td>
									<td className="table-column">{mass.kg} kg / {mass.lb} lb</td>
								</tr>

								{payloadWeights.map((item) => (
									<tr key={item.id}>
										<td className="table-column">PAYLOAD TO {item.id.toUpperCase()}</td>
										<td className="table-column">{item.kg} kg / {item.lb} lb</td>
									</tr>
							))}

							</thead>
						</table>
						<RelaxWrapper speed={14}>
							<img
								src={`/img/${rocketImages[name]}.png`}
								alt="rocket"
								className="rocket"
							/>
						</RelaxWrapper>

						<article>
							<h3 className="features-subtitle" data-aos="fade-up" data-aos-duration="3000">DESCRIPTION</h3>
							<p className="features-text" data-aos="fade-up" data-aos-duration="3000">
								{description}
							</p>
						</article>
					</div>
				</section>

			</>
		)
	};

export default Features;