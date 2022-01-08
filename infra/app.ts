import { App } from "@aws-cdk/core";
import { CdkLambdaS3ExampleStack } from "./cdk-lambda-s3-example-stack";

const app = new App();
new CdkLambdaS3ExampleStack(app, "CdkLambdaS3ExampleStack", {});
