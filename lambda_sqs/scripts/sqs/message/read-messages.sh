QUEUE=$1
if [ -z "$QUEUE" ]
then
  echo 'Queue name must be informed'
  exit 1
else
  QUEUE=$(basename -- $QUEUE)
  QUEUE="http://localhost:4567/000000000000/${QUEUE}"
fi

echo "aws --endpoint-url=http://localhost:4567 sqs receive-message --queue-url $QUEUE"
aws --endpoint-url=http://localhost:4567 sqs receive-message --queue-url $QUEUE

if [ ! $? -eq 0 ]; then
    QUEUE="http://localhost:4566/000000000000/$QUEUE"
    echo "aws --endpoint-url=http://localhost:4567 sqs receive-message --queue-url $QUEUE"
    aws --endpoint-url=http://localhost:4567 sqs receive-message --queue-url $QUEUE
fi