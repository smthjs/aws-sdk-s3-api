# Rest api using amazon aws-sdk in s3 format

This api will help you understand how to use the aws-sdk. You will be able to upload files and browse directories of your cloud service. For example, the methods implemented in the project:

1. /api/buckets - all buckets for more information
2. /api/objects - get all files by bucket
3. /api/objects?prefix=rootFolder/childFolder - get all files by bucket and sub folder
4. /api/files/upload - uploading file into the root
5. /api/files/upload?prefix=rootFolder/childFolder - uploading file into the any sub folder

# How uploading file
<br/>
<img src="https://github.com/smthjs/aws-sdk-s3-api/blob/master/upload.png" />
<br/>

# So, start the installation
1. clone [repository](https://github.com/smthjs/aws-sdk-s3-api.git)
2. open this project in your favorite IDE
3. npm install
4. npm start
5. server will start on http://localhost:9001/
6. open a beer and enjoy
