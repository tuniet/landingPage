import React from "react";

import Navbar from "./navbar.jsx";
import Jumbotron from "./jumbotron.jsx";
import Card from "./card.jsx";
import Footer from "./footer.jsx";

//create your first component
const Home = () => {
	return (
		<div>
			<div className="container-fluid p-0">
				<Navbar />
			</div>
			<div className="container">
				<Jumbotron />
				<div className="row g-4 p-5 row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4">
					<Card title="Card title" src="https://images.freeimages.com/images/large-previews/218/my-dog-cutter-1499799.jpg" description="Lorem ipsum dolor sit amet. Ut nobis ullam et voluptatem voluptates ex aperiam velit. Eos quas suscipit quo excepturi possimus sed provident dicta. Et temporibus blanditiis sit animi fugiat est delectus ipsum ut voluptatem eligendi hic libero unde et officia quia." button="Find out more!"/>
					<Card title="Card title 2" src="https://images.freeimages.com/images/large-previews/218/my-dog-cutter-1499799.jpg" description="Lorem ipsum dolor sit amet. Ut nobis ullam et voluptatem voluptates ex aperiam velit. Eos quas suscipit quo excepturi possimus sed provident dicta. Et temporibus blanditiis sit animi fugiat est delectus ipsum ut voluptatem eligendi hic libero unde et officia quia." button="Find out more!"/>
					<Card title="Card title 3" src="https://images.freeimages.com/images/large-previews/218/my-dog-cutter-1499799.jpg" description="Lorem ipsum dolor sit amet. Ut nobis ullam et voluptatem voluptates ex aperiam velit. Eos quas suscipit quo excepturi possimus sed provident dicta. Et temporibus blanditiis sit animi fugiat est delectus ipsum ut voluptatem eligendi hic libero unde et officia quia." button="Find out more!"/>
					<Card title="Card title 4" src="https://images.freeimages.com/images/large-previews/218/my-dog-cutter-1499799.jpg" description="Lorem ipsum dolor sit amet. Ut nobis ullam et voluptatem voluptates ex aperiam velit. Eos quas suscipit quo excepturi possimus sed provident dicta. Et temporibus blanditiis sit animi fugiat est delectus ipsum ut voluptatem eligendi hic libero unde et officia quia." button="Find out more!"/>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default Home;
