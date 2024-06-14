const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');
const crypto = require('crypto');
const app = express();

app.use(bodyParser.json());

const PHONEPE_BASE_URL = 'https://api.phonepe.com/apis/hermes/pg/v1/pay';
const MERCHANT_ID = 'M22AIVFDYYJCQ';
const SALT_KEY = '099eb0cd-02cf-4e2a-8aca-3e6c6aff0399';
const SALT_INDEX = '1';

// Function to generate checksum
function generateChecksum(base64Payload, endpoint, saltKey, saltIndex) {
    const checksumString = `${base64Payload}${endpoint}${saltKey}`;
    const hash = crypto.createHash('sha256').update(checksumString).digest('hex');
    return `${hash}###${saltIndex}`;
}

// Endpoint for initiating payment
app.post('/initiatePayment', async (req, res) => {
    try {
        const { name, email, phone, address, amount } = req.body;
        
        // Create the payload
        const payload = {
            merchantId: MERCHANT_ID,
            merchantTransactionId: `TXN_${new Date().getTime()}`,
            merchantUserId: phone,
            amount: amount * 100, // Convert amount to paise
            redirectUrl: 'http://127.0.0.1/payment.html',
            redirectMode: 'REDIRECT',
            callbackUrl: 'http://127.0.0.1/paymentCallback',
            mobileNumber: phone,
            paymentInstrument: {
                type: 'PAY_PAGE'
            }
        };

        // Convert payload to base64
        const base64Payload = Buffer.from(JSON.stringify(payload)).toString('base64');
        // Generate checksum
        const checksum = generateChecksum(base64Payload, '/pg/v1/pay', SALT_KEY, SALT_INDEX);

        // Configure request to PhonePe
        const config = {
            headers: {
                'Content-Type': 'application/json',
                'X-VERIFY': checksum
            },
        };

        // Send request to PhonePe
        const response = await axios.post(PHONEPE_BASE_URL, { request: base64Payload }, config);
        if (response.data.success) {
            res.json({
                success: true,
                paymentUrl: response.data.data.instrumentResponse.redirectInfo.url
            });
        } else {
            res.status(400).json({
                success: false,
                message: response.data.message || 'Failed to initiate payment'
            });
        }
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message || 'An error occurred while processing the payment.'
        });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://127.0.0.1:${PORT}`);
});
