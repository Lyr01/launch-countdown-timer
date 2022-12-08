import { useEffect, useState } from "react";
import "./App.css";

import Facebook from "./images/icon-facebook.svg";
import Instagram from "./images/icon-instagram.svg";
import Pintarest from "./images/icon-pinterest.svg";

function App() {
	const [flip, setFlip] = useState(false);
	const [year, setYear] = useState(2022);
	const [days, setDays] = useState(0);
	const [hours, setHours] = useState(0);
	const [minutes, setMinutes] = useState(0);
	const [seconds, setSeconds] = useState(0);

	useEffect(() => {
		const target = new Date(`12/31/${year} 23:59:59`);

		const interval = setInterval(() => {
			const now = new Date();

			const difference = target.getTime() - now.getTime();

			const day = Math.floor(difference / (1000 * 60 * 60 * 24));
			const hour = Math.floor(
				(difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
			);
			const minute = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
			const second = Math.floor((difference % (1000 * 60)) / 1000);

			setDays(day);
			setHours(hour);
			setMinutes(minute);
			setSeconds(second);
			setFlip(!flip);

			if (day <= 0 && hour <= 0 && minute <= 0 && second <= 0) {
				setYear((prev) => prev + 1);
			}
		}, 1000);
	}, []);

	return (
		<main className="App">
			<div className="timer-wrapper">
				<h1 className="title">We're launching soon</h1>
				<div className="timer">
					<div className="timer-days">
						{days < 10 ? <span>0{days}</span> : <span>{days}</span>}
					</div>
					<p className="timer-days-text">days</p>
					<div className="timer-hours">
						{hours < 10 ? <span>0{hours}</span> : <span>{hours}</span>}
					</div>
					<p className="timer-hours-text">hours</p>
					<div className="timer-minutes">
						{minutes < 10 ? <span>0{minutes}</span> : <span>{minutes}</span>}
					</div>
					<p className="timer-minutes-text">minutes</p>
					<div className="timer-seconds">
						{seconds < 10 ? <span>0{seconds}</span> : <span>{seconds}</span>}
					</div>
					<p className="timer-seconds-text">seconds</p>
				</div>
				<div className="social">
					<img src={Facebook} alt="facebook" />
					<img src={Instagram} alt="instagram" />
					<img src={Pintarest} alt="pintarest" />
				</div>
			</div>

			{/* <div className="attribution">
				Challenge by{" "}
				<a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
					Frontend Mentor
				</a>
				. Coded by <a href="https://lyr01.github.io/">Hamza Khan</a>.
			</div> */}
		</main>
	);
}

export default App;
