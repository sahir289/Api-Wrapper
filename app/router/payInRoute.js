import express from 'express';
import payInController from '../controller/payInController.js';
import { validateGetSettlements, validateGetSettlementsDetails, validateModifyVendor, validateReqChallanUrl, validateVendor, validateVendorAccount } from '../helper/validators.js';

const payInRouter = express()

payInRouter.post('/payment-request', payInController.paymentRequest)

payInRouter.post('/payment-request-url', payInController.paymentRequestUrl)

payInRouter.post('/expire-payment-request', payInController.expirePaymentRequest)

payInRouter.post('/payment-request-intent', payInController.paymentRequestIntent)

payInRouter.post('/payment-status', payInController.paymentStatus)

payInRouter.post('/refund', payInController.refund)

payInRouter.post('/refund-status', payInController.refundStatus)

payInRouter.post('/split-settlement-req', payInController.splitSettlementReq)

payInRouter.post('/add-vendor', validateVendor, payInController.addVendor)

payInRouter.post('/modify-vendor',validateModifyVendor, payInController.modifyVendor)

payInRouter.post('/add-vendor-account', validateVendorAccount, payInController.addVendorAccount)

payInRouter.post('/delete-vendor', payInController.deleteVendor)

payInRouter.post('/vendor-status', payInController.vendorStatus)

payInRouter.post('/get-settlements',validateGetSettlements, payInController.getSettlements)

payInRouter.post('/get-settlements-details',validateGetSettlementsDetails, payInController.getSettlementsDetails)

payInRouter.post('/req-challan', payInController.reqChallan)

payInRouter.post('/req-challan-url',validateReqChallanUrl, payInController.reqChallanUrl)

payInRouter.post('/seamless-payment', payInController.seamlessPaymentReq)

















export default payInRouter;