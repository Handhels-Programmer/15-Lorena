document.addEventListener("DOMContentLoaded", function () {
    emailjs.init("TU_USER_ID"); // Reemplaza con tu User ID de EmailJS

    document.getElementById("confirmationForm").addEventListener("submit", function (event) {
        event.preventDefault();

        // Obtener valores del formulario
        const name = document.getElementById("name").value;
        const phone = document.getElementById("phone").value;
        const attendance = document.getElementById("attendance").value;

        // Enviar correo con EmailJS
        emailjs.send("TU_SERVICE_ID", "TU_TEMPLATE_ID", {
            name: name,
            phone: phone,
            attendance: attendance
        }).then(
            function (response) {
                alert("¡Tu asistencia ha sido confirmada!");
                document.getElementById("confirmationForm").reset();
            },
            function (error) {
                alert("Hubo un error al enviar tu confirmación. Inténtalo de nuevo.");
                console.error("Error:", error);
            }
        );
    });
});
