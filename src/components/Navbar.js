import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

import "../css/navbar.css";

/* export default class Navbar extends Component {
	constructor() {
		super();
		this.state = { showNav: false, bodyOverflow: false };
		this.showHideNav = this.showHideNav.bind(this);
		this.activeSecondList = this.activeSecondList.bind(this);
	}

	render() {}
} */

export default function Navbar() {
	const [responsiveNav, setResponsiveNav] = useState(false);
	const [bodyOverflow, setBodyOverflow] = useState(false);
	const [secondList, setSecondList] = useState(false);

	const [displayWidth, setDisplayWidth] = useState(window.innerWidth);
	const [displayHeight, setDisplayHeight] = useState(window.innerHeight);

	const changeDisplay = () => {
		setDisplayWidth(window.innerWidth);
		setDisplayHeight(window.innerHeight);
	};

	useEffect(() => {
		window.addEventListener("resize", changeDisplay);

		let secondnav = document.getElementById("second_nav");
		if (displayWidth < 900) {
			secondnav.classList.remove("show_secondary_list");
		} else {
			secondnav.classList.remove("responsive_secondary_list");
		}

		return () => {
			//Remueve el evento al desmontar la función
			window.removeEventListener("resize", changeDisplay);
		};
	});

	const showResponsiveNav = () => {
		setResponsiveNav(!responsiveNav);
		setBodyOverflow(!bodyOverflow);
		const bodyTag = document.getElementsByTagName("body")[0];
		bodyTag.style.overflowY = bodyOverflow ? null : "hidden";
	};

	const responsiveNavState = () => {
		return {
			transform: responsiveNav ? null : "translateX(-100em)",
		};
	};

	const activeSecondList = () => {
		setSecondList(!secondList);
		console.log("secondList " + secondList);
		let secondnav = document.getElementById("second_nav");
		if (responsiveNav === true) {
			secondnav.classList.toggle("responsive_secondary_list");
		} else {
			secondnav.classList.toggle("show_secondary_list");
		}
	};

	return (
		<nav id="navbar">
			{displayWidth}
			<div id="deploy-navbar-btn" onClick={showResponsiveNav}>
				<div className="line"></div>
				<div className="line"></div>
				<div className="line"></div>
			</div>
			<ul className="principal_list" style={responsiveNavState()}>
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
					<div onClick={activeSecondList}>
						<FontAwesomeIcon id="menu-arrow" className="fab-icon" icon={faChevronRight} />
						Institucional
					</div>
					<ul /* className={ulClassName} */ id="second_nav">
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
