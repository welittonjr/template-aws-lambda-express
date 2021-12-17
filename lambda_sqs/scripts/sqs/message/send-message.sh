QUEUE=$1
if [ -z "$QUEUE" ]
then
  echo 'Queue name must be informed'
  exit 1
else
  QUEUE=$(basename -- $QUEUE)
  QUEUE="http://localhost:4567/000000000000/${QUEUE}"
fi
MESSAGE=$2
if [ -z "$MESSAGE" ]
then
  MESSAGE=$(cat sample/localstack/sample.json)
fi

echo "aws --endpoint-url=http://localhost:4567 sqs send-message --queue-url $QUEUE --message-body '$MESSAGE'"
aws --endpoint-url=http://localhost:4567 sqs send-message --queue-url $QUEUE --message-body "'$MESSAGE'"