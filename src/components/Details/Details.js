/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react';
import './details.css';

const Details = () => (
  <section class="details">
		<div class="container">
			<div class="details-row">
				<div class="details-image">
					<img src="https://images2.imgbox.com/3c/0e/T8iJcSN3_o.png" alt="" />
				</div>
				<div class="details-content">
					<p class="details-description">Engine failure at 33 seconds and loss of vehicle</p>
				</div>
			</div>
			<div>
				<iframe class="details-youtube" width="560" height="315" src="https://www.youtube.com/embed/dLQ2tZEH6G0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
			</div>
		</div>
		<a href="calendar.html" class="button button-back">go back</a>
	</section>
);

export default Details;