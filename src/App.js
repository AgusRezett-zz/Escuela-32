import React, { Component } from "react";
import ReactPlayer from "react-player";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faChevronLeft } from "@fortawesome/free-solid-svg-icons";

import Header from "./components/Header";
import Navbar from "./components/Navbar";

import demovideo from "./assets/demo.mp4";
import career from "./assets/mechanic.png";

import "./css/index.css";

export default class App extends Component {
	status = {
		responsiveMask: false,
	};

	render() {
		return (
			<div className="second-root">
				<Navbar />
				<Header />
				<div id="responsive-mask" />
				<section className="demo-section">
					<ReactPlayer id="demo-video" url={demovideo} width="fit-content" height={undefined} playing muted loop />
					<div className="demo-mask"></div>
					<div className="wave-bottom wave5" />
					<div className="demo-content">
						<h1>VISITÁ NUESTRA INSTITUCIÓN </h1>
						<a href="https://youtu.be/Fo5au0qPlIo" target="black">
							CLIC ACÁ
						</a>
					</div>
				</section>
				<section className="speciality-section">
					<div className="wave-top wave5" />
					<div className="speciality-content"></div>
					<div className="speciality-illustration">
						<h2>
							Estudiá como
							<br />
							Técnico<span> en automotriz</span>
						</h2>
						<div className="speciality-selector">
							<div className="arrow" id="arrow-switch-left">
								<FontAwesomeIcon icon={faChevronLeft} />
							</div>
							<img className="illustration" src={career} alt="" />
							<div className="arrow" id="arrow-switch-right">
								<FontAwesomeIcon icon={faChevronRight} />
							</div>
						</div>
						<div className="btn-container">
							<div className="btn concerns">Incumbencias</div>
							<div className="btn syllabus">Plan de estudios</div>
						</div>
					</div>
				</section>
			</div>
		);
	}
}
