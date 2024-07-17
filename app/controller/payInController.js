import { envHandler } from "../config/envConfig.js";
import { DefaultResponse } from "../helper/customResponse.js";
import { generateHash } from "../helper/hashCalculator.js";
import { checkValidation } from "../helper/validationHelper.js";
import { CustomError } from "../middleware/errorHandler.js";
import payInRepo from "../repository/payInRepo.js"

class PayInController {
    async paymentRequest(req, res, next) {
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

    async paymentRequestUrl(req, res, next) {
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

    async expirePaymentRequest(req, res, next) {
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

            const expirePaymentReqRes = await payInRepo.expirePaymentRequest(updateData)
            if (expirePaymentReqRes?.error) {
                throw new CustomError(expirePaymentReqRes?.error?.code, expirePaymentReqRes?.error?.message)
            }

            // Respond with a success message and the user data
            return DefaultResponse(
                res,
                200,
                "Expire Payment Req done successfully",
                expirePaymentReqRes
            );

        } catch (error) {
            next(error)
        }
    }

    async paymentRequestIntent(req, res, next) {
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

            const paymentReqIntentRes = await payInRepo.paymentRequestIntent(updateData)
            if (paymentReqIntentRes?.error) {
                throw new CustomError(paymentReqIntentRes?.error?.code, paymentReqIntentRes?.error?.message)
            }

            // Respond with a success message and the user data
            return DefaultResponse(
                res,
                200,
                "Payment req Intent url get successfully",
                paymentReqIntentRes
            );

        } catch (error) {
            next(error)
        }
    }

    async paymentStatus(req, res, next) {
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

            const paymentStatusRes = await payInRepo.paymentStatus(updateData)
            if (paymentStatusRes?.error) {
                throw new CustomError(paymentStatusRes?.error?.code, paymentStatusRes?.error?.message)
            }

            // Respond with a success message and the user data
            return DefaultResponse(
                res,
                200,
                "Payment status get successfully",
                paymentStatusRes
            );

        } catch (error) {
            next(error)
        }
    }

    async refund(req, res, next) {
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

            const refundRes = await payInRepo.refund(updateData)
            if (refundRes?.error) {
                throw new CustomError(refundRes?.error?.code, refundRes?.error?.message)
            }

            // Respond with a success message and the user data
            return DefaultResponse(
                res,
                200,
                "Refund response get successfully",
                refundRes
            );

        } catch (error) {
            next(error)
        }
    }

    async refundStatus(req, res, next) {
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

            const refundStatusRes = await payInRepo.refundStatus(updateData)
            if (refundStatusRes?.error) {
                throw new CustomError(refundStatusRes?.error?.code, refundStatusRes?.error?.message)
            }

            // Respond with a success message and the user data
            return DefaultResponse(
                res,
                200,
                "Refund status get successfully",
                refundStatusRes
            );

        } catch (error) {
            next(error)
        }
    }

    async splitSettlementReq(req, res, next) {
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

            const splitSettlementReqRes = await payInRepo.splitSettlementReq(updateData)
            if (splitSettlementReqRes?.error) {
                throw new CustomError(splitSettlementReqRes?.error?.code, splitSettlementReqRes?.error?.message)
            }

            // Respond with a success message and the user data
            return DefaultResponse(
                res,
                200,
                "Split Settlement done successfully",
                splitSettlementReqRes
            );

        } catch (error) {
            next(error)
        }
    }

    async addVendor(req, res, next) {
        try {
            checkValidation(req);
            const data = {
                ...req?.body,
                api_key: envHandler.PAY_IN_API_KEY
            }

            const generatedHash = generateHash(data);
            console.log("🚀 ~ PayInController ~ addVendor ~ generatedHash:", generatedHash)

            const updateData = {
                ...data,
                hash: generatedHash,
            }
            console.log("🚀 ~ PayInController ~ addVendor ~ updateData:", updateData)

            const addVendorRes = await payInRepo.addVendor(updateData)
            if (addVendorRes?.error) {
                throw new CustomError(addVendorRes?.error?.code, addVendorRes?.error?.message)
            }

            // Respond with a success message and the user data
            return DefaultResponse(
                res,
                201,
                "Vendor added successfully",
                addVendorRes
            );

        } catch (error) {
            next(error)
        }
    }

    async modifyVendor(req, res, next) {
        try {
            checkValidation(req);
            const data = {
                ...req?.body,
                api_key: envHandler.PAY_IN_API_KEY
            }

            const generatedHash = generateHash(data);

            const updateData = {
                ...data,
                hash: generatedHash,

            }

            const modifyVendorRes = await payInRepo.modifyVendor(updateData)
            if (modifyVendorRes?.error) {
                throw new CustomError(modifyVendorRes?.error?.code, modifyVendorRes?.error?.message)
            }

            // Respond with a success message and the user data
            return DefaultResponse(
                res,
                201,
                "Vendor modified successfully",
                modifyVendorRes
            );

        } catch (error) {
            next(error)
        }
    }

    async addVendorAccount(req, res, next) {
        try {
            checkValidation(req);
            const data = {
                ...req?.body,
                api_key: envHandler.PAY_IN_API_KEY
            }

            const generatedHash = generateHash(data);

            const updateData = {
                ...data,
                hash: generatedHash,

            }

            const addVendorAccountRes = await payInRepo.addVendorAccount(updateData)
            if (addVendorAccountRes?.error) {
                throw new CustomError(addVendorAccountRes?.error?.code, addVendorAccountRes?.error?.message)
            }

            // Respond with a success message and the user data
            return DefaultResponse(
                res,
                200,
                "Vendor account added successfully",
                addVendorAccountRes
            );

        } catch (error) {
            next(error)
        }
    }

    async deleteVendor(req, res, next) {
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

            const deleteVendorRes = await payInRepo.deleteVendor(updateData)
            if (deleteVendorRes?.error) {
                throw new CustomError(deleteVendorRes?.error?.code, deleteVendorRes?.error?.message)
            }

            // Respond with a success message and the user data
            return DefaultResponse(
                res,
                201,
                "Vendor deleted successfully",
                deleteVendorRes
            );

        } catch (error) {
            next(error)
        }
    }

    async vendorStatus(req, res, next) {
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

            const vendorStatusRes = await payInRepo.vendorStatus(updateData)
            if (vendorStatusRes?.error) {
                throw new CustomError(vendorStatusRes?.error?.code, vendorStatusRes?.error?.message)
            }

            // Respond with a success message and the user data
            return DefaultResponse(
                res,
                200,
                "Vendor status get successfully",
                vendorStatusRes
            );

        } catch (error) {
            next(error)
        }
    }

    async getSettlements(req, res, next) {
        try {
            checkValidation(req)
            const data = {
                ...req?.body,
                api_key: envHandler.PAY_IN_API_KEY
            }

            const generatedHash = generateHash(data);

            const updateData = {
                ...data,
                hash: generatedHash,

            }

            const getSettlementsRes = await payInRepo.getSettlements(updateData)
            if (getSettlementsRes?.error) {
                throw new CustomError(getSettlementsRes?.error?.code, getSettlementsRes?.error?.message)
            }

            // Respond with a success message and the user data
            return DefaultResponse(
                res,
                200,
                "Settlement get successfully",
                getSettlementsRes
            );

        } catch (error) {
            next(error)
        }
    }

    async getSettlementsDetails(req, res, next) {
        try {
            checkValidation(req)
            const data = {
                ...req?.body,
                api_key: envHandler.PAY_IN_API_KEY
            }

            const generatedHash = generateHash(data);

            const updateData = {
                ...data,
                hash: generatedHash,

            }

            const getSettlementsDetailsRes = await payInRepo.getSettlementsDetails(updateData)
            if (getSettlementsDetailsRes?.error) {
                throw new CustomError(getSettlementsDetailsRes?.error?.code, getSettlementsDetailsRes?.error?.message)
            }

            // Respond with a success message and the user data
            return DefaultResponse(
                res,
                200,
                "Settlement Details get successfully",
                getSettlementsDetailsRes
            );

        } catch (error) {
            next(error)
        }
    }

    async reqChallan(req, res, next) {
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

            const reqChallanRes = await payInRepo.reqChallan(updateData)
            if (reqChallanRes?.error) {
                throw new CustomError(reqChallanRes?.error?.code, reqChallanRes?.error?.message)
            }

            // Respond with a success message and the user data
            return DefaultResponse(
                res,
                200,
                "Challan get successfully",
                reqChallanRes
            );

        } catch (error) {
            next(error)
        }
    }

    async reqChallanUrl(req, res, next) {
        try {
            checkValidation(req)
            const data = {
                ...req?.body,
                api_key: envHandler.PAY_IN_API_KEY
            }

            const generatedHash = generateHash(data);

            const updateData = {
                ...data,
                hash: generatedHash,

            }

            const reqChallanUrlRes = await payInRepo.reqChallanUrl(updateData)
            if (reqChallanUrlRes?.error) {
                throw new CustomError(reqChallanUrlRes?.error?.code, reqChallanUrlRes?.error?.message)
            }

            // Respond with a success message and the user data
            return DefaultResponse(
                res,
                200,
                "Challan url get successfully",
                reqChallanUrlRes
            );

        } catch (error) {
            next(error)
        }
    }

    async seamlessPaymentReq(req, res, next) {
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

            const seamlessPaymentReqRes = await payInRepo.seamlessPaymentReq(updateData)
            if (seamlessPaymentReqRes?.error) {
                throw new CustomError(seamlessPaymentReqRes?.error?.code, seamlessPaymentReqRes?.error?.message)
            }

            // Respond with a success message and the user data
            return DefaultResponse(
                res,
                200,
                "Seamless payment request get successfully",
                seamlessPaymentReqRes
            );

        } catch (error) {
            next(error)
        }
    }
}

export default new PayInController()