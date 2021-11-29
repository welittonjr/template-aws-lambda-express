#!/usr/bin/bash
# Script for list all queues created

aws --endpoint-url=http://localhost:4566 sqs list-queues