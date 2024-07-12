import express from 'express';
import fundTransferController from '../controller/fundTransferController.js';

const fundTransferRouter = express()

fundTransferRouter.post('/fundtransfer',  fundTransferController.fundTransfer)

fundTransferRouter.post('/fundtransfer-status',  fundTransferController.fundTransferStatus)

fundTransferRouter.post('/fundtransfer-balance',  fundTransferController.fundTransferGetBalance)

fundTransferRouter.post('/fundtransfer-whitelisting',  fundTransferController.fundTransferWhitelisting)

fundTransferRouter.post('/fundtransfer-whitelisting-team',  fundTransferController.fundTransferWhitelistingTeam)

fundTransferRouter.post('/fundtransfer-get-statement',  fundTransferController.fundTransferGetStatement)


export default fundTransferRouter;