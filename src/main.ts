import Crypto from "crypto-js";

let email = "";
let domain = "";

const emailInput = document.getElementById("email") as HTMLInputElement;
const domainInput = document.getElementById("domain") as HTMLSelectElement;
const resultElement = document.querySelector("h2") as HTMLHeadingElement;

setup();

function setup() {
	emailInput.addEventListener("keydown", checkEmail);
	emailInput.addEventListener("keyup", updateEmail);
	domainInput.addEventListener("change", updateDomain);

	const domains = import.meta.env.VITE_DOMAINS.split(",");
	console.log(domains, import.meta.env);

	for (const d of domains) {
		const option = new Option();
		option.value = d;
		option.textContent = d;
		domainInput.add(option);
		if (!domain) {
			domainInput.value = d;
			updateDomain();
		}
	}
	updateResult();
}

function cleanEmail(input: string) {
	return input.toLowerCase().replaceAll(/\W/g, "");
}

function checkEmail(event: KeyboardEvent) {
	if (/\W/.test(event.key)) {
		event.preventDefault();
		return false;
	}
}

function updateEmail() {
	const newEmail = cleanEmail(emailInput.value);
	if (newEmail !== email) {
		email = newEmail;
	}
	emailInput.value = email;

	updateResult();
}

function updateDomain() {
	domain = domainInput.value;
	updateResult();
}

function updateResult() {
	const hash = Crypto.MD5(`foo:${email}`).toString().slice(0, 8);
	resultElement.textContent = `${email || "domain"}.${hash}@${domain}`;
}
