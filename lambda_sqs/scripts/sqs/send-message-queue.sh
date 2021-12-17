QUEUE=$1
if [ -z "$QUEUE" ]
then
  QUEUE='http://localhost:4567/000000000000/test-queue'
else
  QUEUE=$(basename -- $QUEUE)
  QUEUE="http://localhost:4567/000000000000/${QUEUE}"
fi
MESSAGE=$2
if [ -z "$MESSAGE" ]
then
  MESSAGE=$(cat samples/sample.json)
fi
echo MESSAGE
echo "aws --endpoint-url=http://localhost:4567 sqs send-message --queue-url $QUEUE --message-body '$MESSAGE'"
aws --endpoint-url=http://localhost:4567 sqs send-message --queue-url $QUEUE --message-body "'$MESSAGE'"