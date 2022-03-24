import React from "react";
import Football from "./jumbo.jsx";
//include images into your bundle
import Apecoin from "./Football.jsx";
import Google from "./footer.jsx";
//create your first component
const Home = () => {
	let obj = {
		width: "50%",
		margin: "0 auto",
	};
	return (
		<div>
			<Football />
			<Apecoin />
			<div class="card-group" style={obj}>
				<div class="card">
					<img
						src="https://picsum.photos/200/300?random=1"
						class="card-img-top"
						alt="..."
					/>
					<div class="card-body">
						<h5 class="card-title">Card title</h5>
						<p class="card-text">
							This is a wider card with supporting text below as a
							natural lead-in to additional content. This content
							is a little bit longer.
						</p>
						<p class="card-text">
							<small class="text-muted">
								Last updated 3 mins ago
							</small>
						</p>
					</div>
				</div>
				<div class="card">
					<img
						src="https://picsum.photos/200/300?random=2"
						class="card-img-top"
						alt="..."
					/>
					<div class="card-body">
						<h5 class="card-title">Card title</h5>
						<p class="card-text">
							This is a wider card with supporting text below as a
							natural lead-in to additional content. This content
							is a little bit longer.
						</p>
						<p class="card-text">
							<small class="text-muted">
								Last updated 3 mins ago
							</small>
						</p>
					</div>
				</div>
				<div class="card">
					<img
						src="https://picsum.photos/200/300?random=3"
						class="card-img-top"
						alt="..."
					/>
					<div class="card-body">
						<h5 class="card-title">Card title</h5>
						<p class="card-text">
							This card has supporting text below as a natural
							lead-in to additional content.
						</p>
						<p class="card-text">
							<small class="text-muted">
								Last updated 3 mins ago
							</small>
						</p>
					</div>
				</div>
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
							even longer content than the first to show that
							equal height action.
						</p>
						<p class="card-text">
							<small class="text-muted">
								Last updated 3 mins ago
							</small>
						</p>
					</div>
				</div>
			</div>
			<Google />
		</div>
	);
};

export default Home;
