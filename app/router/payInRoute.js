import express from 'express';
import payInController from '../controller/payInController.js';

const payInRouter = express()

payInRouter.post('/payment-request',payInController.paymentRequest )

payInRouter.post('/payment-request-url',payInController.paymentRequestUrl )

payInRouter.post('/expire-payment-request-url',payInController.expirePaymentRequestUrl )

payInRouter.post('/payment-request-intent-url',payInController.paymentRequestIntentUrl )



// payInRouter.post('/fundtransfer-whitelisting',  fundTransferController.fundTransferWhitelisting)

// payInRouter.post('/fundtransfer-whitelisting-team',  fundTransferController.fundTransferWhitelistingTeam)

// payInRouter.post('/fundtransfer-get-statement',  fundTransferController.fundTransferGetStatement)


export default payInRouter;