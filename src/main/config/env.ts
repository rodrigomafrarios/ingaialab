export default {
	mongoUrl: process.env.MONGO_URL || 'mongodb://0.0.0.0:27017/app',
	port: 5000,
	user: 'ingaialab',
	password: 'ingailab_2020',
	mongoUrlProd: 'mongodb+srv://ingaialab:ingailab_2020@cluster0.eah1o.mongodb.net/app?retryWrites=true&w=majority'
}
