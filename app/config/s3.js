const AWS = require('aws-sdk');

module.exports = {
    s3Client: new AWS.S3({
        accessKeyId: 'myAccessKey', // access key for your bucket
        secretAccessKey: 'myPublicKey', // secret key for your bucket
        region : 'myRegion', // for example 'ru-msk'
        endpoint: 'myEndpoint', // for example 'hb.bizmrg.com', it's mail.ru cloud area
    }),
    bucket: 'myBucket', // your bucket name
};