import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

import "../css/navbar.css";

export default class Navbar extends Component {
	constructor() {
		super();
		this.state = { showNav: false, bodyOverflow: false };
		this.showHideNav = this.showHideNav.bind(this);
	}

	showHideNav() {
		this.setState({ showNav: !this.state.showNav });
		this.setState({ bodyOverflow: !this.state.bodyOverflow });
		const bodyTag = document.getElementsByTagName("body")[0];
		bodyTag.style.overflowY = this.state.bodyOverflow ? null : "hidden";
	}

	responsiveNavState() {
		return {
			transform: this.state.showNav ? null : "translateX(-1000em)",
		};
	}

	render() {
		return (
			<nav id="navbar">
				<div id="deploy-navbar-btn" onClick={this.showHideNav}>
					<div className="line"></div>
					<div className="line"></div>
					<div className="line"></div>
				</div>
				<ul className="principal_list" style={this.responsiveNavState()}>
					<li>
						<a href="algo.html">Inicio</a>
					</li>
					<li>
						<a href="algo.html">Preguntas Frecuentes</a>
					</li>
					<li>
						<a href="algo.html">Novedades</a>
					</li>
					<li>
						<a href="algo.html">
							<FontAwesomeIcon id="menu-arrow" className="fab-icon" icon={faChevronRight} />
							Institucional
						</a>
						<ul className="secondary_list">
							<li>
								<a href="algo.html">Inscripciones</a>
							</li>
							<li>
								<a href="algo.html">Galeria de imagenes</a>
							</li>
							<li>
								<a href="algo.html">Información Academica</a>
							</li>
							<li>
								<a href="algo.html">Infraestructura</a>
							</li>
						</ul>
					</li>
					<li>
						<a href="algo.html">Contacto</a>
					</li>
					<li>
						<a href="algo.html">Aula Virtual</a>
					</li>
				</ul>
			</nav>
		);
	}
}
