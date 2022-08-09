const config = {
	appUrl: process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3001",
	payloadEndpoint: process.env.NEXT_PUBLIC_PAYLOAD_API_ENDPOINT || "http://localhost:3000/api",
	gaId: process.env.NEXT_PUBLIC_GA_ID || "DBPP07WY7F",
	environment: process.env.NODE_ENV || "development",
};

export default config;
