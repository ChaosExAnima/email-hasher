import { ChangeEvent, useMemo, useState } from "react";
import Crypto from "crypto-js";
import "./App.css";

const domains = process.env.REACT_APP_DOMAINS.split(",");

export default function App() {
	const [email, setEmail] = useState("");
	const [domain, setDomain] = useState(domains.at(0) ?? "");

	const hash = useMemo(
		() =>
			Crypto.MD5(`${process.env.REACT_APP_SECRET}:${email}`)
				.toString()
				.slice(0, 8),
		[email],
	);

	const handleEmail = (event: ChangeEvent<HTMLInputElement>) =>
		setEmail(event.target.value.toLowerCase().replaceAll(/\W/g, ""));
	const handleDomain = (event: ChangeEvent<HTMLSelectElement>) =>
		setDomain(event.target.value);

	return (
		<main className="App">
			<div className="Input">
				<input
					type="text"
					onChange={handleEmail}
					placeholder="domain"
					value={email}
					autoFocus
				/>
				<select onChange={handleDomain} value={domain}>
					{domains.map((d) => (
						<option key={d}>{d}</option>
					))}
				</select>
			</div>

			<h2>{`${email || "domain"}.${hash}@${domain}`}</h2>
		</main>
	);
}
