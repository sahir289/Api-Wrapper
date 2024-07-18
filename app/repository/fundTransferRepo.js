import axios from "axios"
import { envHandler } from "../config/envConfig.js"
import { CustomError } from "../middleware/errorHandler.js";

class FundTransferRepo {
    async fundTransferRepo(data) {
        console.log("🚀 ~ FundTransferRepo ~ fundTransferRepo ~ data:", data)
        const url = envHandler.FUND_TRANSFER_URL;
        console.log("🚀 ~ FundTransferRepo ~ fundTransferRepo ~ url:", url)
        try {
            const resp = await axios.post(url, data)
            console.log("🚀 ~ FundTransferRepo ~ fundTransferRepo ~ resp.data:", resp.data)
            return resp.data
        } catch (error) {
            throw new CustomError(error)
        }

    }

    async fundTransferStatusRepo(data) {
        const url = envHandler.FUND_TRANSFER_STATUS_URL;
        try {
            const resp = await axios.post(url, data)
            return resp.data
        } catch (error) {
            throw new CustomError(error)
        }

    }

    async fundTransferGetBalanceRepo(data) {
        const url = envHandler.FUND_TRANSFER_GET_BALANCE_URL;
        try {
            const resp = await axios.post(url, data)
            return resp.data
        } catch (error) {
            throw new CustomError(error)
        }

    }


    async fundTransferWhitelistingRepo(data) {
        const url = envHandler.FUND_TRANSFER_WHITELISTING_URL;
        try {
            const resp = await axios.post(url, data)
            return resp.data
        } catch (error) {
            throw new CustomError(error)
        }

    }

    async fundTransferWhitelistingTeamRepo(data) {
        const url = envHandler.FUND_TRANSFER_WHITELISTING_TEAM_URL;
        try {
            const resp = await axios.post(url, data)
            return resp.data
        } catch (error) {
            throw new CustomError(error)
        }

    }

    async fundTransferGetStatementRepo(data) {
        const url = envHandler.FUND_TRANSFER_GET_STATEMENT_URL;
        try {
            const resp = await axios.post(url, data)
            return resp.data
        } catch (error) {
            throw new CustomError(error)
        }

    }
}

export default new FundTransferRepo()