
# Lambda_SQS

Execute the command bellow for start project
```bash
$ ./scripts/runenv.sh
```
or execute the command manually
```bash
$ docker-compose up -d
$ ln -sf env/develop.env .env
```
Execute the command bellow to create the queue
```bash
# lambda_sqs is name the queue that's you wish use
$ ./scripts/sqs/create-queue.sh lambda_sqs
```
Execute the command bellow to list all the queues
```bash
$ ./script/sqs/list-queues.sh
```
Execute the command bellow to send a message test to queue
```bash
# lambda_sqs is name the queue that's you wish use
$ ./scripts/sqs/message/send-message.sh lambda_sqs
```
Execute the command bellow to see messages the queue
```bash
# lambda_sqs is name the queue that's you wish use
$ ./scripts/sqs/message/read-messages.sh lambda_sqs
```