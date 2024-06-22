// require('dotenv').config();
// const express = require('express');
// const cors = require('cors');
// const crypto = require('crypto');
// const axios = require('axios');
// const bodyParser = require('body-parser');

// const app = express();
// app.use(cors());
// app.use(bodyParser.json());

// const PORT = process.env.PORT || 5000;

// // Helper function to generate checksum
// const generateChecksum = (data, saltKey, saltIndex) => {
//   const hash = crypto.createHash('sha256').update(data).digest('hex');
//   return `${hash}###${saltIndex}`;
// };

// // Initiate Payment Route
// app.post('/initiatePayment', async (req, res) => {
//   try {
//     const { name, email, phone, amount } = req.body;
//     const transactionId = `TXN_${Date.now()}`;
//     const merchantId = process.env.NEXT_PUBLIC_MERCHANT_ID;
//     const saltKey = process.env.NEXT_PUBLIC_SALT_KEY;
//     const saltIndex = process.env.NEXT_PUBLIC_SALT_INDEX;

//     // Log received input for debugging
//     console.log('Received Input:', { name, email, phone, amount });

//     if (!merchantId || !saltKey || !saltIndex) {
//       throw new Error('Missing environment variables');
//     }

//     const payload = {
//       merchantId,
//       merchantTransactionId: transactionId,
//       merchantUserId: phone,
//       amount: amount * 100, // Amount in paise
//       redirectUrl: `http://localhost:3000/success`,
//       redirectMode: "REDIRECT",
//       callbackUrl: `http://localhost:5000/api/status/${transactionId}`,
//       mobileNumber: phone,
//       paymentInstrument: {
//         type: "PAY_PAGE",
//       },
//     };

//     const base64Payload = Buffer.from(JSON.stringify(payload)).toString('base64');
//     const checksumString = `${base64Payload}/pg/v1/pay${saltKey}`;
//     const checksum = generateChecksum(checksumString, saltKey, saltIndex);

//     // Log payload and checksum for debugging
//     console.log('Payload:', payload);
//     console.log('Checksum:', checksum);

//     const response = await axios.post(
//       "https://api.phonepe.com/apis/hermes/pg/v1/pay",
//       { request: base64Payload },
//       {
//         headers: {
//           "Content-Type": "application/json",
//           "X-VERIFY": checksum,
//         },
//       }
//     );

//     // Log the response from the PhonePe API
//     console.log('PhonePe API Response:', response.data);

//     if (response.data.success) {
//       const paymentUrl = response.data.data.instrumentResponse.redirectInfo.url;
//       res.status(200).json({ success: true, paymentUrl });
//     } else {
//       throw new Error(response.data.message || 'Payment initiation failed');
//     }
//   } catch (error) {
//     console.error("Error initiating payment:", error);
//     res.status(500).json({ success: false, message: error.message });
//   }
// });

// // Start the server
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });
