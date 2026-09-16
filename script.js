/* =========================================
   SWIFTPAY TRUSTFIX
   APPLICATION LOGIC
   ========================================= */


/* =========================================
   SCREEN MANAGEMENT
   ========================================= */

function showScreen(screenId) {

    const screens =
        document.querySelectorAll(".screen");

    screens.forEach(function (screen) {

        screen.classList.remove("active");

    });


    const target =
        document.getElementById(screenId);

    if (target) {

        target.classList.add("active");

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }

}



/* =========================================
   LOGIN
   ========================================= */

const loginForm =
    document.getElementById("loginForm");


if (loginForm) {

    loginForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();


            const loginInput =
                document.getElementById(
                    "loginInput"
                );

            const passwordInput =
                document.getElementById(
                    "passwordInput"
                );


            const loginValue =
                loginInput.value.trim();

            const passwordValue =
                passwordInput.value.trim();


            if (
                loginValue === "" ||
                passwordValue === ""
            ) {

                alert(
                    "Please enter your login details."
                );

                return;

            }


            /*
             * Prototype only.
             *
             * This does NOT authenticate a
             * real user or connect to a bank.
             */

            showScreen("homeScreen");

        }
    );

}



/* =========================================
   SEND MONEY
   ========================================= */

const sendMoneyButton =
    document.getElementById(
        "sendMoneyButton"
    );


const quickSend =
    document.getElementById(
        "quickSend"
    );


const navSend =
    document.getElementById(
        "navSend"
    );


function openSendMoney() {

    alert(
        "Transaction screen will be connected in the next stage."
    );

}


if (sendMoneyButton) {

    sendMoneyButton.addEventListener(
        "click",
        openSendMoney
    );

}


if (quickSend) {

    quickSend.addEventListener(
        "click",
        openSendMoney
    );

}


if (navSend) {

    navSend.addEventListener(
        "click",
        openSendMoney
    );

}



/* =========================================
   BALANCE VISIBILITY
   ========================================= */

const balanceToggle =
    document.getElementById(
        "balanceToggle"
    );


const balanceAmount =
    document.getElementById(
        "balanceAmount"
    );


let balanceVisible = true;


if (balanceToggle) {

    balanceToggle.addEventListener(
        "click",
        function () {

            balanceVisible =
                !balanceVisible;


            if (balanceVisible) {

                balanceAmount.textContent =
                    "₦485,750.00";

                balanceToggle.textContent =
                    "◉";

                balanceToggle.setAttribute(
                    "aria-label",
                    "Hide balance"
                );

            } else {

                balanceAmount.textContent =
                    "₦••••••••";

                balanceToggle.textContent =
                    "○";

                balanceToggle.setAttribute(
                    "aria-label",
                    "Show balance"
                );

            }

        }
    );

}



/* =========================================
   LOGOUT
   ========================================= */

const logoutButton =
    document.getElementById(
        "logoutButton"
    );


if (logoutButton) {

    logoutButton.addEventListener(
        "click",
        function () {

            showScreen("loginScreen");

        }
    );

}



/* =========================================
   PROFILE
   ========================================= */

const profileButton =
    document.querySelector(
        ".profile-button"
    );


if (profileButton) {

    profileButton.addEventListener(
        "click",
        function () {

            alert(
                "Profile settings will be added in a future iteration."
            );

        }
    );

}



/* =========================================
   SECURITY STATUS
   ========================================= */

const statusInfo =
    document.querySelector(
        ".status-info"
    );


if (statusInfo) {

    statusInfo.addEventListener(
        "click",
        function () {

            alert(
                "SwiftPay uses security monitoring and privacy controls to help protect your account."
            );

        }
    );

}



/* =========================================
   APPLICATION STATUS
   ========================================= */

console.log(
    "SwiftPay TrustFix dashboard loaded successfully."
);