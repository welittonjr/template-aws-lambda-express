
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
Execute the command bellow for create the queue
```bash
# lambda_sqs is name the queue that's you wish use
$ ./scripts/sqs/create-queue.sh lambda_sqs
```
Execute the command bellow for list all the queues
```bash
$ ./script/sqs/list-queues.sh
```