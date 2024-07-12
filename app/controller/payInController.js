import { envHandler } from "../config/envConfig.js";
import { DefaultResponse } from "../helper/customResponse.js";
import { generateHash } from "../helper/hashCalculator.js";
import { CustomError } from "../middleware/errorHandler.js";
import payInRepo from "../repository/payInRepo.js"

class PayInController{
    async paymentRequest(req,res,next){
        try {

            const data = {
              ...req?.body,
              api_key: envHandler.PAY_IN_API_KEY
            }

            const generatedHash = generateHash(data);
            
            const updateData = {
                ...data,
                hash: generatedHash,
               
            }

            const paymentReqRes = await payInRepo.paymentRequest(updateData)
            if (paymentReqRes?.error) {
                throw new CustomError(paymentReqRes?.error?.code, paymentReqRes?.error?.message)
            }

            // Respond with a success message and the user data
            return DefaultResponse(
                res,
                200,
                "Payment req done successfully",
                paymentReqRes
            );

        } catch (error) {
            next(error)
        }
    }

    async paymentRequestUrl(req,res,next){
        try {

            const data = {
              ...req?.body,
              api_key: envHandler.PAY_IN_API_KEY
            }

            const generatedHash = generateHash(data);
            
            const updateData = {
                ...data,
                hash: generatedHash,
               
            }

            const paymentReqUrlRes = await payInRepo.paymentRequestUrl(updateData)
            if (paymentReqUrlRes?.error) {
                throw new CustomError(paymentReqUrlRes?.error?.code, paymentReqUrlRes?.error?.message)
            }

            // Respond with a success message and the user data
            return DefaultResponse(
                res,
                200,
                "Payment Req url get successfully",
                paymentReqUrlRes
            );

        } catch (error) {
            next(error)
        }
    }

    async expirePaymentRequestUrl(req,res,next){
        try {

            const data = {
              ...req?.body,
              api_key: envHandler.PAY_IN_API_KEY
            }

            const generatedHash = generateHash(data);
            
            const updateData = {
                ...data,
                hash: generatedHash,
               
            }

            const expirePaymentReqUrlRes = await payInRepo.expirePaymentRequestUrl(updateData)
            if (expirePaymentReqUrlRes?.error) {
                throw new CustomError(expirePaymentReqUrlRes?.error?.code, expirePaymentReqUrlRes?.error?.message)
            }

            // Respond with a success message and the user data
            return DefaultResponse(
                res,
                200,
                "Expire Payment Req done successfully",
                expirePaymentReqUrlRes
            );

        } catch (error) {
            next(error)
        }
    }

    async paymentRequestIntentUrl(req,res,next){
        try {

            const data = {
              ...req?.body,
              api_key: envHandler.PAY_IN_API_KEY
            }

            const generatedHash = generateHash(data);
            
            const updateData = {
                ...data,
                hash: generatedHash,
               
            }

            const paymentReqIntentUrlRes = await payInRepo.paymentRequestIntentUrl(updateData)
            if (paymentReqIntentUrlRes?.error) {
                throw new CustomError(paymentReqIntentUrlRes?.error?.code, paymentReqIntentUrlRes?.error?.message)
            }

            // Respond with a success message and the user data
            return DefaultResponse(
                res,
                200,
                "Payment req Intent url get successfully",
                paymentReqIntentUrlRes
            );

        } catch (error) {
            next(error)
        }
    }
}

export default new PayInController()