import { Stack, Construct, StackProps } from "@aws-cdk/core";
import { HelloWorldApi } from "./api";

export class CdkLambdaS3ExampleStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    new HelloWorldApi(this, "HelloWorldApi", props);
  }
}
