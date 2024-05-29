document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const formData = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value
    };

    fetch("https://formspree.io/f/mleqkqgo", { // Replace with your Formspree form ID
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => {
        if (data.ok) {
            document.getElementById("formMessages").style.display = "block";
            document.getElementById("formMessages").innerHTML = "Your message has been sent successfully.";
            document.getElementById("formMessages").className = "alert alert-success";
            document.getElementById("contactForm").reset();
        } else {
            throw new Error(data.error || "Unknown error occurred");
        }
    })
    .catch(error => {
        console.error("Error:", error);
        document.getElementById("formMessages").style.display = "block";
        document.getElementById("formMessages").innerHTML = `Sorry, there was a problem sending your message: ${error.message}`;
        document.getElementById("formMessages").className = "alert alert-danger";
    });
});
