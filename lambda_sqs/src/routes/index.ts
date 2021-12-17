import { Router } from 'express'
import { Sqs } from '../aws/sqs'

const routes = Router()
const sqs = new Sqs()

routes.get('/alive', (_, response) => {
  return response.status(200).json({ message: "I\'m alive!" })
})

routes.post('/queue', async (_, response) => {
  let statusCode: number
  let message: string

  try {
    const data = await sqs.sendMessage({
      MessageBody: {
        msg: 'Test'
      },
      QueueUrl: process.env.APP_QUEUE
    })
    
    message = data.MessageId
    statusCode = 200
  } catch (err) {
    console.log(err)
    message = 'Fail Send Message'
    statusCode = 500
  }

  return  response.json({ message: message }).status(statusCode)
})

export default routes
