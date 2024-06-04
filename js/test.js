function submitDonation() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const amount = document.getElementById('amount').value;
    const statusMessage = document.getElementById('statusMessage');

    if (name && email && amount) {
        console.log("Form submitted with: ", name, email, amount);

        fetch('https://www.cashfree.com/devstudio/preview/pg/webhooks/49396584', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                data: {
                    payment: {
                        payment_status: 'SUCCESS'
                    }
                },
                type: 'PAYMENT_SUCCESS_WEBHOOK'
            })
        })
        .then(response => {
            console.log('Response: ', response);
            if (response.ok) {
                return response.json();
            } else {
                throw new Error('Network response was not ok');
            }
        })
        .then(data => {
            statusMessage.textContent = 'Donation successful!';
            console.log('Success:', data);
        })
        .catch(error => {
            statusMessage.textContent = 'Error: ' + error;
            console.error('Error:', error);
        });
    } else {
        statusMessage.textContent = 'Please fill in all fields.';
    }
}
