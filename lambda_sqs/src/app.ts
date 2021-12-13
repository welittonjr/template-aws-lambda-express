import { Context, APIGatewayEvent } from 'aws-lambda'
import { Sqs } from './aws/sqs'
import * as dotenv from 'dotenv'

if (process.env.NODE_ENV === 'dev') {
  dotenv.config()
}

const sqs = new Sqs()

export async function handler(event: APIGatewayEvent, context: Context) {

  console.log('EVENT \n', event)
  console.log('Context \n', context)

  if (!event.body) {
    return {
      statusCode: 412,
      body: JSON.stringify({
        message: 'No body was found',
      }),
    }
  }

  let statusCode: number = 200
  let message: string

  try {
    const data = await sqs.sendMessage({
      MessageBody: {},
      QueueUrl: process.env.APP_QUEUE
    })
    message = data.MessageId

  } catch (error) {
    console.log(error)
    message = 'Fail Send Message'
    statusCode = 500
  }

  return {
    statusCode: statusCode,
    body: JSON.stringify({
      message,
    }),
  }

}