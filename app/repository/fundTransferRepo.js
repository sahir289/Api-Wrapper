import axios from "axios"
import { envHandler } from "../config/envConfig.js"
import { CustomError } from "../middleware/errorHandler.js";

class FundTransferRepo {
    async fundTransferRepo(data, next) {
        const url = envHandler.FUND_TRANSFER_URL;
        try {
            const resp = await axios.post(url, data)
            return resp.data
        } catch (error) {
            throw new CustomError(error)
        }

    }

    async fundTransferStatusRepo(data, next) {
        const url = envHandler.FUND_TRANSFER_STATUS_URL;
        try {
            const resp = await axios.post(url, data)
            return resp.data
        } catch (error) {
            throw new CustomError(error)
        }

    }

    async fundTransferGetBalanceRepo(data, next) {
        const url = envHandler.FUND_TRANSFER_GET_BALANCE_URL;
        try {
            const resp = await axios.post(url, data)
            return resp.data
        } catch (error) {
            throw new CustomError(error)
        }

    }


    async fundTransferWhitelistingRepo(data, next) {
        const url = envHandler.FUND_TRANSFER_WHITELISTING_URL;
        try {
            const resp = await axios.post(url, data)
            return resp.data
        } catch (error) {
            throw new CustomError(error)
        }

    }

    async fundTransferWhitelistingTeamRepo(data, next) {
        const url = envHandler.FUND_TRANSFER_WHITELISTING_TEAM_URL;
        try {
            const resp = await axios.post(url, data)
            return resp.data
        } catch (error) {
            throw new CustomError(error)
        }

    }

    async fundTransferGetStatementRepo(data, next) {
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