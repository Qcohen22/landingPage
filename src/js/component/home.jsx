import React from "react";
import Football from "./jumbo.jsx";
//include images into your bundle
import Apecoin from "./Football.jsx";
import Google from "./footer.jsx";
import Card from "./card.jsx";
//create your first component
const Home = () => {
	let obj = {
		width: "60%",
		margin: "0 auto",
		marginLeft: "496px",
	};
	return (
		<div>
			<Football />
			<Apecoin />
			<div className="card-group" style={obj}>
				<Card />
				<Card />
				<Card />
				<Card />
			</div>
			<Google />
		</div>
	);
};

export default Home;
