import * as aws from "@pulumi/aws";
 
const bucket = new aws.s3.Bucket("frontend-bucket");
 
export const bucketName = bucket.bucket;