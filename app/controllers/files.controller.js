const s3 = require('../config/s3');
 
module.exports.doUpload = (req, res) => {
	
	const { file: {originalname, buffer}, body: {prefix}} = req;
	const { s3Client, bucket} = s3;

	// 'prefix' is an optional parameter needed to send the file to the desired directory
	const params = {
		Bucket: bucket,
		Key: prefix ? `${prefix}/${originalname}`: originalname,
		Body: buffer,
	};
	
	s3Client.upload(params, (err, data) => {
		if (err) {
			return res.status(500).json({error: `Error: ${err}`});
		}

		// File uploaded successfully
		return res.json(data);
	});
};