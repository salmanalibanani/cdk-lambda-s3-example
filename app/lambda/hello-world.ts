import { APIGatewayEvent, ProxyResult } from "aws-lambda";
import { S3 } from "aws-sdk";
import { PutObjectRequest } from "aws-sdk/clients/s3";
import { v4 as guid } from "uuid";

export const handler = async (event: APIGatewayEvent): Promise<ProxyResult> => {
  console.log("HelloWorld called with event:", event);

  const s3 = new S3();

  const putObjectRequest: PutObjectRequest = {
    Bucket: "hello-world-bucket",
    Key: "File-" + guid() + ".txt",
    Body: Buffer.from("Some text"),
  };

  try {
    let response = await s3.putObject(putObjectRequest).promise();
    console.log(`PutObject response: ${response}`);
  } catch (e) {
    console.log(`PutObject failed: ${e}`);
  }
  return {
    statusCode: 200,
    body: "Hello world!",
  };
};
