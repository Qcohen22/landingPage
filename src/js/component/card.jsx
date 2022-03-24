import React from "react";

const Card = (props) => {
	let win = { width: "20%" };

	return (
		<div class="card-group" style={win}>
			<div class="card">
				<img
					src="https://picsum.photos/200/300?random=4"
					class="card-img-top"
					alt="..."
				/>
				<div class="card-body">
					<h5 class="card-title">Card title</h5>
					<p class="card-text">
						This is a wider card with supporting text below as a
						natural lead-in to additional content. This card has
						even longer content than the first to show that equal
						height action.
					</p>
					<p class="card-text">
						<small class="text-muted">
							Last updated 3 mins ago
						</small>
					</p>
				</div>
			</div>
		</div>
	);
};

export default Card;
