#!/usr/bin/bash
# Script for list all queues created

aws --endpoint-url=http://localhost:4567 sqs list-queues