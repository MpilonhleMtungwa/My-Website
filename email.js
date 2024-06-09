document.addEventListener("DOMContentLoaded", function () {
  emailjs.init("xVxGIM4g4vWZVw_wT"); // EmailJS user ID

  document
    .getElementById("contactform")
    .addEventListener("submit", function (event) {
      event.preventDefault();

      emailjs.sendForm("service_vo68gju", "template_cqhyc9q", this).then(
        function () {
          alert("Email sent successfully!");
        },
        function (error) {
          alert("Failed to send email. Error: " + JSON.stringify(error));
        }
      );
    });
});
