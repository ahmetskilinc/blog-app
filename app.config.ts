const config = {
	appUrl: process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3001",
	gaId: process.env.NEXT_PUBLIC_GA_ID || "UA-131212148-3",
	environment: process.env.NODE_ENV || "development",
};

export default config;
