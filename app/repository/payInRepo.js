import axios from "axios"
import { envHandler } from "../config/envConfig.js";
import { CustomError } from "../middleware/errorHandler.js";

class PayInRepo {
    async paymentRequest(data) {
        const url = envHandler.PAYMENT_REQUEST_URL;
        try {
            const resp = await axios.post(url, data)
            return resp.data
        } catch (error) {
            throw new CustomError(error)
        }
    }

    async paymentRequestUrl(data) {
        const url = envHandler.PAYMENT_REQUESTURL_URL;
        try {
            const resp = await axios.post(url, data)
            return resp.data
        } catch (error) {
            throw new CustomError(error)
        }
    }

    async expirePaymentRequest(data) {
        const url = envHandler.EXPIRE_PAYMENT_REQUEST_URL;
        try {
            const resp = await axios.post(url, data)
            return resp.data
        } catch (error) {
            throw new CustomError(error)
        }
    }

    async paymentRequestIntent(data) {
        const url = envHandler.PAYMENT_REQUEST_INTENT_URL;
        try {
            const resp = await axios.post(url, data)
            return resp.data
        } catch (error) {
            throw new CustomError(error)
        }
    }

    async paymentStatus(data) {
        const url = envHandler.PAYMENT_STATUS_URL;
        try {
            const resp = await axios.post(url, data)
            return resp.data
        } catch (error) {
            throw new CustomError(error)
        }
    }

    async refund(data) {
        const url = envHandler.REFUND_URL;
        try {
            const resp = await axios.post(url, data)
            return resp.data
        } catch (error) {
            throw new CustomError(error)
        }
    }

    async refundStatus(data) {
        const url = envHandler.REFUND_STATUS_URL;
        try {
            const resp = await axios.post(url, data)
            return resp.data
        } catch (error) {
            throw new CustomError(error)
        }
    }

    // not working properly
    async splitSettlementReq(data) {
        const url = envHandler.SPLIT_SETTLEMENT_REQ_URL;
        try {
            const resp = await axios.post(url, data)
            return resp.data
        } catch (error) {
            throw new CustomError(error)
        }
    }

    async addVendor(data) {
        const url = envHandler.ADD_VENDOR_URL;
        try {
            const resp = await axios.post(url, data)
            return resp.data
        } catch (error) {
            throw new CustomError(error)
        }
    }

    async modifyVendor(data) {
        const url = envHandler.MODIFY_VENDOR_URL;
        try {
            const resp = await axios.post(url, data)
            return resp.data
        } catch (error) {
            throw new CustomError(error)
        }
    }

    async addVendorAccount(data) {
        const url = envHandler.ADD_VENDOR_ACCOUNT;
        try {
            const resp = await axios.post(url, data)
            return resp.data
        } catch (error) {
            throw new CustomError(error)
        }
    }

    // error
    async deleteVendor(data) {
        const url = envHandler.DELETE_VENDOR;
        try {
            const resp = await axios.post(url, data)
            return resp.data
        } catch (error) {
            throw new CustomError(error)
        }
    }

    // error
    async vendorStatus(data) {
        const url = envHandler.VENDOR_STATUS;
        try {
            const resp = await axios.post(url, data)
            return resp.data
        } catch (error) {
            throw new CustomError(error)
        }
    }

    async getSettlements(data) {
        const url = envHandler.GET_SETTLEMENTS;
        try {
            const resp = await axios.post(url, data)
            return resp.data
        } catch (error) {
            throw new CustomError(error)
        }
    }

    async getSettlementsDetails(data) {
        const url = envHandler.GET_SETTLEMENTS_DETAIL;
        try {
            const resp = await axios.post(url, data)
            return resp.data
        } catch (error) {
            throw new CustomError(error)
        }
    }

    async reqChallan(data) {
        const url = envHandler.REQ_CHALLAN;
        try {
            const resp = await axios.post(url, data)
            return resp.data
        } catch (error) {
            throw new CustomError(error)
        }
    }

    async reqChallanUrl(data) {
        const url = envHandler.REQ_CHALLAN_URL;
        try {
            const resp = await axios.post(url, data)
            return resp.data
        } catch (error) {
            throw new CustomError(error)
        }
    }

    async seamlessPaymentReq(data) {
        const url = envHandler.SEAMLESS_PAYMENT_REQUEST;
        try {
            const resp = await axios.post(url, data)
            return resp.data
        } catch (error) {
            throw new CustomError(error)
        }
    }
}

export default new PayInRepo()