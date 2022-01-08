import { APIGatewayEvent, ProxyResult } from "aws-lambda";

export const handler = async (event: APIGatewayEvent): Promise<ProxyResult> => {
  console.log("HelloWorld called with event:", event);
  return {
    statusCode: 200,
    body: "Hello world!",
  };
};
