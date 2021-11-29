
# Lambda_SQS

Execute the command bellow for start project
```
$ ./scripts/runenv.sh
```
or execute the command manually
```
$ docker-compose up -d
$ ln -sf env/develop.env .env
```
Execute the command bellow for create the queue
```
# lambda_sqs is name the queue that's you wish use
$ ./scripts/sqs/create-queue.sh lambda_sqs
```
Execute the command bellow for list all the queues
```
$ ./script/sqs/list-queues.sh
```