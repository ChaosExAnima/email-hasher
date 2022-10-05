/// <reference types="vite/client" />

interface ImportMetaEnv {
	readonly VITE_SECRET: string;
	readonly VITE_DOMAINS: string;
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}
