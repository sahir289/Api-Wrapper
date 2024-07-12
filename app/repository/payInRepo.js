import axios from "axios"
import { envHandler } from "../config/envConfig.js";
import { CustomError } from "../middleware/errorHandler.js";

class PayInRepo{
    async paymentRequest(data){
        const url = envHandler.PAYMENT_REQUEST_URL;
        try {
            const resp = await axios.post(url, data)
            return resp.data
        } catch (error) {
            throw new CustomError(error)
        }
    }

    async paymentRequestUrl(data){
        const url = envHandler.PAYMENT_REQUESTURL_URL;
        try {
            const resp = await axios.post(url, data)
            return resp.data
        } catch (error) {
            throw new CustomError(error)
        }
    }

    async expirePaymentRequestUrl(data){
        const url = envHandler.EXPIRE_PAYMENT_REQUEST_URL;
        try {
            const resp = await axios.post(url, data)
            return resp.data
        } catch (error) {
            throw new CustomError(error)
        }
    }

    async paymentRequestIntentUrl(data){
        const url = envHandler.PAYMENT_REQUEST_INTENT_URL;
        try {
            const resp = await axios.post(url, data)
            return resp.data
        } catch (error) {
            throw new CustomError(error)
        }
    }
}

export default new PayInRepo()