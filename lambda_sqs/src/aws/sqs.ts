import { SQS } from 'aws-sdk'

export class Sqs {

  sendMessage(params: any): Promise<Error | any> {

    const sqs = new SQS({
      region: process.env.APP_REGION_QUEUE
    });

    return new Promise((resolve, reject) => {
      sqs.sendMessage(params, (err, data) => {
        if (err) {
          reject(new Error('Fail Send Message' + err))
        } else {
          resolve(data)
        }
      })
    })

  }

}