import { Construct, StackProps } from "@aws-cdk/core";
import { Bucket } from "@aws-cdk/aws-s3";

export class HelloWorldBucket extends Construct {
  public Bucket: Bucket;

  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id);

    this.Bucket = new Bucket(this, id, {
      bucketName: `hello-world-bucket`,
    });
  }
}
