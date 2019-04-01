# aws-redis-nodejs

- Create a security group in the default VPC and add a TCP rule to allow incoming traffic on port 6379.
- (Optional but required) Relate the security group to the resource required consume Redis.
- Go to ElasticCache console and create a subnet group with the default VPC, AZ and subnet .
- Go to ElasticCache console and go to create a redis cluster
- In advanced settingd Select your Subnet Group and Security group created previously and click create.
- Wait for your cluster to be available and click on your cluster node.
- Copy the endpoint and the port, go to the source code and paste the information.
- Run npm install redis