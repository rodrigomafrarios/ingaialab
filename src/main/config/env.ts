export default {
	mongoUrl: process.env.MONGO_URL || 'mongodb://mongo:27017/app',
	port: 5000,
	baseURL: process.env.APP_URL || 'http://localhost:5000'
}
