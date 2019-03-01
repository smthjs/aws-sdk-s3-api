const s3 = require('../config/s3');
 
module.exports.getListBuckets = (req, res) => {
	const { s3Client } = s3;
	
	s3Client.listBuckets({}, (err, data) => {
		if (err) {
			return res.status(500).json({error: `Error: ${err}`});
		}
		return res.json(data);
	});
};