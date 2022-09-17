/// <reference types="react-scripts" />

declare global {
	namespace NodeJS {
		interface ProcessEnv {
			REACT_APP_SECRET: string;
			REACT_APP_DOMAINS: string;
		}
	}
}

export {};
