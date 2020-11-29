module.exports = {
	mongodbMemoryServerOptions: {
		mongodbMemoryServer:{
			version: 'latest'
		},
		instance: {
			dbName: 'jest'
		},
		binary: {
			version: '3.6.3',
			skipMD5:true
		},
		autoStart: false
	}
}