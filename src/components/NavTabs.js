import React from "react";
import Nav from "react-bootstrap/Nav";
import "bootstrap/dist/css/bootstrap.min.css";

function NavTabs() {
	return (
<header>
	<div className="title">
		<h1>AMG 3000</h1>
	</div>
	<Nav className="justify-content-center">

			    <Nav.Item>
			      <Nav.Link href="/" className="custom-link">Home</Nav.Link>
			    </Nav.Item>
			    <Nav.Item>
			      <Nav.Link href="/new" className="custom-link">Create a New Meme</Nav.Link>
			    </Nav.Item>
			    <Nav.Item>
			      <Nav.Link href="/memes" className="custom-link">Gallery</Nav.Link>
			    </Nav.Item>

      </Nav>
	  </header>
	);
}

export default NavTabs;
