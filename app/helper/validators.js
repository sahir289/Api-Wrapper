import validator from 'express-validator'
const { body } = validator

export const validateVendor = [
    body('vendor_code').notEmpty().withMessage('Vendor code is required'),
    body('vendor_name')
        .notEmpty().withMessage('Vendor name is required')
        .matches(/^[A-Za-z0-9\s]+$/).withMessage('Vendor name may only contain letters, numbers, and spaces'),
    body('vendor_contact_email').isEmail().withMessage('Vendor contact email must be a valid email'),
    body('vendor_contact_num').notEmpty().withMessage('Vendor contact number is required'),

    // If upi_id is not present, validate the other fields
    body('upi_id').custom((value, { req }) => {
        if (!value) {
            if (!req.body.account_name) throw new Error('Account name is required if UPI ID is not provided');
            if (!req.body.account_number) throw new Error('Account number is required if UPI ID is not provided');
            if (!req.body.ifsc_code) throw new Error('IFSC code is required if UPI ID is not provided');
            if (!req.body.bank_name) throw new Error('Bank name is required if UPI ID is not provided');
            if (!req.body.bank_branch) throw new Error('Bank branch is required if UPI ID is not provided');
        }
        return true;
    }),
    body('account_name').optional({ checkFalsy: true }).notEmpty().withMessage('Account name is required'),
    body('account_number').optional({ checkFalsy: true }).notEmpty().withMessage('Account number is required'),
    body('ifsc_code').optional({ checkFalsy: true }).notEmpty().withMessage('IFSC code is required'),
    body('bank_name').optional({ checkFalsy: true }).notEmpty().withMessage('Bank name is required'),
    body('bank_branch').optional({ checkFalsy: true }).notEmpty().withMessage('Bank branch is required'),


];

export const validateModifyVendor = [
    body('vendor_code').notEmpty().withMessage('Vendor code is required'),
    body('vendor_name')
        .notEmpty().withMessage('Vendor name is required')
        .matches(/^[A-Za-z0-9\s]+$/).withMessage('Vendor name may only contain letters, numbers, and spaces'),
    body('account_id').notEmpty().withMessage('Vendor account id is required'),
]

export const validateVendorAccount = [
    body('vendor_code').notEmpty().withMessage('Vendor code is required'),
    body('default_account')
    .notEmpty().withMessage('Default account is required')
    .matches(/^[yn]$/i).withMessage('Default account must be either "y" or "n"'),

    // If upi_id is not present, validate the other fields
    body('upi_id').custom((value, { req }) => {
        if (!value) {
            if (!req.body.account_name) throw new Error('Account name is required if UPI ID is not provided');
            if (!req.body.account_number) throw new Error('Account number is required if UPI ID is not provided');
            if (!req.body.ifsc_code) throw new Error('IFSC code is required if UPI ID is not provided');
            if (!req.body.bank_name) throw new Error('Bank name is required if UPI ID is not provided');
            if (!req.body.bank_branch) throw new Error('Bank branch is required if UPI ID is not provided');
        }
        return true;
    }),
    body('account_name').optional({ checkFalsy: true }).notEmpty().withMessage('Account name is required'),
    body('account_number').optional({ checkFalsy: true }).notEmpty().withMessage('Account number is required'),
    body('ifsc_code').optional({ checkFalsy: true }).notEmpty().withMessage('IFSC code is required'),
    body('bank_name').optional({ checkFalsy: true }).notEmpty().withMessage('Bank name is required'),
    body('bank_branch').optional({ checkFalsy: true }).notEmpty().withMessage('Bank branch is required'),


];

export const validateGetSettlements=[
    body('bank_reference').notEmpty().withMessage('Bank reference is required'),
]

export const validateGetSettlementsDetails=[
    body('order_id').notEmpty().withMessage('Order id is required'),
]

export const validateReqChallanUrl=[
    body('name').notEmpty().withMessage('Name is required'),
    body('mobile').notEmpty().withMessage('Mobile is required'),
    body('email').notEmpty().isEmail().withMessage('Email is required'),
    body('amount').notEmpty().withMessage('Amount is required'),
    body('purpose').notEmpty().withMessage('Purpose is required'),
]