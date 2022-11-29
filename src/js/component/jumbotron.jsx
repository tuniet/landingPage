import React from "react";

//create your first component
const Jumbotron = () => {
	return (
      		<div className="container p-5 bg-light rounded-3">
        		<h1 className="display-5 fw-bold">A Warm Welcome!</h1>
        		<p className="col-md-8 fs-4">Lorem ipsum dolor sit amet. Et suscipit velit ut harum officiis ea tempora alias a repellendus ipsum. Sed deleniti earum aut distinctio quas At harum voluptatibus est dolorem dolorum.</p>
        		<button className="btn btn-primary btn-lg" type="button">Call to action!</button>
      		</div>
	);
};

export default Jumbotron;