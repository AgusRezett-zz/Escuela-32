import React, { Component } from "react";

import "../css/header.css";
import logo from "../assets/logo.png";

export default class Header extends Component {
	render() {
		return (
			<header>
				<p id="header_name_pt1">ESCUELA TÉCNICA 32 D.E. 14</p>
				<img src={logo} alt="logo del colegio" />
				<p id="header_name_pt2">GRAL. JOSÉ DE SAN MARTÍN</p>
				<div className="wave wave1" />
				<div className="wave wave2" />
				<div className="wave wave3" />
				<div className="wave wave4" />
			</header>
		);
	}
}
