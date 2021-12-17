#!/usr/bin/bash
# Script for list all queues created

aws --endpoint-url=http://localhost:4567 sqs list-queues

if [ $? -eq 0 ]; then
  echo "There is no queue"
fi