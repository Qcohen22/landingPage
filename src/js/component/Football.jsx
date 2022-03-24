import React from "react";

const Apecoin = () => {
	let obj = {
		width: "50%",
		margin: "0 auto",
	};
	let football = {
		marginTop: "2%",
	};
	return (
		<div style={football}>
			<div className="jumbotron bg-light" style={obj}>
				<h1 className="display-4">Hello, world!</h1>
				<p className="lead">
					This is a simple hero unit, a simple jumbotron-style
					component for calling extra attention to featured content or
					information.
				</p>
				<p>
					It uses utility classes for typography and spacing to space
					content out within the larger container.
				</p>
				<p className="lead">
					<a
						className="btn btn-primary btn-lg"
						href="#"
						role="button">
						Learn more
					</a>
				</p>
			</div>
		</div>
	);
};

export default Apecoin;
