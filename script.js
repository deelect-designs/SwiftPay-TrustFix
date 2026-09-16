/* =========================================
   SWIFTPAY TRUSTFIX
   LOGIN INTERACTION
   ========================================= */

const loginForm =
    document.getElementById("loginForm");


loginForm.addEventListener(
    "submit",
    function (event) {

        event.preventDefault();

        const loginInput =
            document.getElementById("loginInput");

        const passwordInput =
            document.getElementById("passwordInput");


        if (
            loginInput.value.trim() === "" ||
            passwordInput.value.trim() === ""
        ) {

            alert(
                "Please enter your login details."
            );

            return;

        }


        alert(
            "Login successful. Home dashboard will be connected next."
        );

    }
);


console.log(
    "SwiftPay TrustFix login screen loaded."
);