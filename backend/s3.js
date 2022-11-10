require('dotenv').config()
const aws = require("aws-sdk");
const fs = require('fs')

const bucket =process.env.AWS_BUCKET_NAME
const region =process.env.AWS_BUCKET_REGION
const accessKey=process.env.AWS_ACCESS_KEY
const secretKey=process.AWS_SECRET_ACCESS_KEY

const s3 = new aws.S3({
    region,
    accessKey,
    secretKey
})

// upload to bucket
function uploadFile(file) {
    const fileStream = fs.createReadStream(file.path)
  
    const uploadParams = {
      Bucket: bucketName,
      Body: fileStream,
      Key: file.filename
    }
  
    return s3.upload(uploadParams).promise()
}
exports.uploadFile = uploadFile

// download from bucket
function getFileStream(fileKey) {
    const downloadParams = {
      Key: fileKey,
      Bucket: bucketName
    }
  
    return s3.getObject(downloadParams).createReadStream()
}
exports.getFileStream = getFileStream
