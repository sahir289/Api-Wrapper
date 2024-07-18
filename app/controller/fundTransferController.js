import { envHandler } from "../config/envConfig.js";
import { DefaultResponse } from "../helper/customResponse.js";
import { generateHash, generateHashPayout } from "../helper/hashCalculator.js";
import { CustomError } from "../middleware/errorHandler.js";
import fundTransferRepo from "../repository/fundTransferRepo.js";

class FundTransferController {
    async fundTransfer(req, res, next) {
        try {

            const data = {
                ...req?.body,
                api_key: envHandler.PAY_OUT_API_KEY
            }

            const generatedHash = generateHashPayout(data);
            const updateData = {
                ...data,
                hash: generatedHash,

            }

            const fundTransferRes = await fundTransferRepo.fundTransferRepo(updateData)
            if (fundTransferRes?.error) {
                throw new CustomError(fundTransferRes?.error?.code, fundTransferRes?.error?.message)
            }

            // Respond with a success message and the user data
            return DefaultResponse(
                res,
                200,
                "Fund Transfer Response get successfully",
                fundTransferRes
            );

        } catch (error) {
            next(error)
        }
    }

    async fundTransferStatus(req, res, next) {
        try {

            const data = {
                ...req?.body,
                api_key: envHandler.PAY_OUT_API_KEY
            }

            const generatedHash = generateHashPayout(data);
            const updateData = {
                ...data,
                hash: generatedHash,

            }

            const fundTransferResStatus = await fundTransferRepo.fundTransferStatusRepo(updateData)
            if (fundTransferResStatus?.error) {
                throw new CustomError(fundTransferResStatus?.error?.code, fundTransferResStatus?.error?.message)
            }

            // Respond with a success message and the user data
            return DefaultResponse(
                res,
                200,
                "Fund Transfer status get successfully",
                fundTransferResStatus
            );

        } catch (error) {
            next(error)
        }
    }

    async fundTransferGetBalance(req, res, next) {
        try {

            const data = {
                api_key: envHandler.PAY_OUT_API_KEY
            }

            const generatedHash = generateHashPayout(data);

            const updateData = {
                ...data,
                hash: generatedHash,

            }


            const fundTransferGetBalanceRes = await fundTransferRepo.fundTransferGetBalanceRepo(updateData)

            if (fundTransferGetBalanceRes?.error) {
                throw new CustomError(fundTransferGetBalanceRes?.error?.code, fundTransferGetBalanceRes?.error?.message)
            }

            // Respond with a success message and the user data
            return DefaultResponse(
                res,
                200,
                "Fund Transfer balance get successfully",
                fundTransferGetBalanceRes
            );

        } catch (error) {
            next(error)
        }
    }

    async fundTransferWhitelisting(req, res, next) {
        try {

            const data = {
                ...req?.body,
                api_key: envHandler.PAY_OUT_API_KEY
            }

            const generatedHash = generateHashPayout(data);
            const updateData = {
                ...data,
                hash: generatedHash,

            }

            const fundTransferWhitelistingRes = await fundTransferRepo.fundTransferWhitelistingRepo(updateData)
            if (fundTransferWhitelistingRes?.error) {
                throw new CustomError(fundTransferWhitelistingRes?.error?.code, fundTransferWhitelistingRes?.error?.message)
            }

            // Respond with a success message and the user data
            return DefaultResponse(
                res,
                200,
                "Account number whitelisted successfully",
                fundTransferWhitelistingRes
            );

        } catch (error) {
            next(error)
        }
    }

    async fundTransferWhitelistingTeam(req, res, next) {
        try {

            const data = {
                ...req?.body,
                api_key: envHandler.PAY_OUT_API_KEY
            }

            const generatedHash = generateHashPayout(data);
            const updateData = {
                ...data,
                hash: generatedHash,

            }

            const fundTransferWhitelistingTeamRes = await fundTransferRepo.fundTransferWhitelistingTeamRepo(updateData)
            if (fundTransferWhitelistingTeamRes?.error) {
                throw new CustomError(fundTransferWhitelistingTeamRes?.error?.code, fundTransferWhitelistingTeamRes?.error?.message)
            }

            // Respond with a success message and the user data
            return DefaultResponse(
                res,
                200,
                "Whitelisting team done successfully",
                fundTransferWhitelistingTeamRes
            );

        } catch (error) {
            next(error)
        }
    }

    async fundTransferGetStatement(req, res, next) {
        try {

            const data = {
                ...req?.body,
                api_key: envHandler.PAY_OUT_API_KEY
            }

            const generatedHash = generateHashPayout(data);
            const updateData = {
                ...data,
                hash: generatedHash,

            }

            const fundTransferGetStatementRes = await fundTransferRepo.fundTransferGetStatementRepo(updateData)
            if (fundTransferGetStatementRes?.error) {
                throw new CustomError(fundTransferGetStatementRes?.error?.code, fundTransferGetStatementRes?.error?.message)
            }

            // Respond with a success message and the user data
            return DefaultResponse(
                res,
                200,
                "Statement get successfully",
                fundTransferGetStatementRes
            );

        } catch (error) {
            next(error)
        }
    }
}

export default new FundTransferController()