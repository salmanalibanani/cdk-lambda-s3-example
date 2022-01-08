import { Stack, Construct, StackProps } from "@aws-cdk/core";
import { HelloWorldApi } from "./api";
import { HelloWorldBucket } from "./hello-world-bucket";
export class CdkLambdaS3ExampleStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    // const bucket = new HelloWorldBucket(this, "HelloWorldBucket", props);
    // new HelloWorldApi(this, "HelloWorldApi", bucket, props);
    new HelloWorldApi(this, "HelloWorldApi", props);
  }
}
