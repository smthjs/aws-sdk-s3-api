const s3 = require('../config/s3');
 
module.exports.getListObjects = (req, res) => {
	const { prefix } = req.query;
	const { s3Client, bucket } = s3;
	
	// 'prefix' is an optional parameter required to get files from the desired directory
	const params = {
		Bucket: bucket,
		Prefix: prefix,
	};

	s3Client.listObjects(params, (err, data) => {
		if (err) {
			return res.status(500).json({error: `Error: ${err}`});
		}

		return res.json(data);
	});
};