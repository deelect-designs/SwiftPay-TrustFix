/* =========================================
   SWIFTPAY TRUSTFIX
   APPLICATION LOGIC
   STAGE 7
   ========================================= */


/* =========================================
   SCREEN MANAGEMENT
   ========================================= */

function showScreen(screenId) {

    const screens = document.querySelectorAll(".screen");

    screens.forEach(function (screen) {
        screen.classList.remove("active");
    });

    const target = document.getElementById(screenId);

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
                document.getElementById("loginInput");

            const passwordInput =
                document.getElementById("passwordInput");

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
             * This does NOT authenticate a real
             * financial account.
             */

            showScreen("homeScreen");
        }
    );
}


/* =========================================
   SEND MONEY
   ========================================= */

const sendMoneyButton =
    document.getElementById("sendMoneyButton");

const quickSend =
    document.getElementById("quickSend");

const navSend =
    document.getElementById("navSend");


function openSendMoney() {

    showScreen("transactionScreen");
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
   RETURN TO HOME
   ========================================= */

const backToHomeButton =
    document.getElementById("backToHomeButton");

const cancelTransferButton =
    document.getElementById("cancelTransferButton");


if (backToHomeButton) {

    backToHomeButton.addEventListener(
        "click",
        function () {

            showScreen("homeScreen");
        }
    );
}


if (cancelTransferButton) {

    cancelTransferButton.addEventListener(
        "click",
        function () {

            showScreen("homeScreen");
        }
    );
}


/* =========================================
   CONFIRM TRANSFER
   ========================================= */

const confirmTransferButton =
    document.getElementById(
        "confirmTransferButton"
    );


if (confirmTransferButton) {

    confirmTransferButton.addEventListener(
        "click",
        function () {

            /*
             * Prototype simulation.
             *
             * In a real fintech application this
             * action would require backend
             * authentication and transaction
             * authorization.
             */

            confirmTransferButton.disabled = true;

            confirmTransferButton.textContent =
                "Processing...";

            setTimeout(
                function () {

                    confirmTransferButton.disabled =
                        false;

                    confirmTransferButton.textContent =
                        "Confirm Transfer";

                    showScreen("successScreen");

                },
                900
            );
        }
    );
}


/* =========================================
   SUCCESS → HOME
   ========================================= */

const successHomeButton =
    document.getElementById(
        "successHomeButton"
    );


if (successHomeButton) {

    successHomeButton.addEventListener(
        "click",
        function () {

            showScreen("homeScreen");
        }
    );
}


/* =========================================
   NEW TRANSFER
   ========================================= */

const newTransferButton =
    document.getElementById(
        "newTransferButton"
    );


if (newTransferButton) {

    newTransferButton.addEventListener(
        "click",
        function () {

            showScreen("transactionScreen");
        }
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
    document.getElementById(
        "profileButton"
    );


if (profileButton) {

    profileButton.addEventListener(
        "click",
        function () {

            alert(
                "Profile settings are part of a future iteration."
            );
        }
    );
}


/* =========================================
   SECURITY INFORMATION
   ========================================= */

const statusInfo =
    document.getElementById(
        "statusInfo"
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
   FORGOT PASSWORD
   ========================================= */

const forgotPasswordButton =
    document.getElementById(
        "forgotPasswordButton"
    );


if (forgotPasswordButton) {

    forgotPasswordButton.addEventListener(
        "click",
        function () {

            alert(
                "Password recovery would begin here in the production application."
            );
        }
    );
}


/* =========================================
   OTHER DASHBOARD ACTIONS
   ========================================= */

const addMoneyButton =
    document.getElementById(
        "addMoneyButton"
    );

const quickReceive =
    document.getElementById(
        "quickReceive"
    );

const quickBills =
    document.getElementById(
        "quickBills"
    );

const quickHistory =
    document.getElementById(
        "quickHistory"
    );

const viewAllButton =
    document.getElementById(
        "viewAllButton"
    );

const securitySettingsButton =
    document.getElementById(
        "securitySettingsButton"
    );

const navActivity =
    document.getElementById(
        "navActivity"
    );

const navProfile =
    document.getElementById(
        "navProfile"
    );


if (addMoneyButton) {

    addMoneyButton.addEventListener(
        "click",
        function () {

            alert(
                "Add Money functionality will be added in a future iteration."
            );
        }
    );
}


if (quickReceive) {

    quickReceive.addEventListener(
        "click",
        function () {

            alert(
                "Receive Money functionality will be added in a future iteration."
            );
        }
    );
}


if (quickBills) {

    quickBills.addEventListener(
        "click",
        function () {

            alert(
                "Bills functionality will be added in a future iteration."
            );
        }
    );
}


if (quickHistory) {

    quickHistory.addEventListener(
        "click",
        function () {

            alert(
                "Transaction history will be added in a future iteration."
            );
        }
    );
}


if (viewAllButton) {

    viewAllButton.addEventListener(
        "click",
        function () {

            alert(
                "Full transaction history will be added in a future iteration."
            );
        }
    );
}


if (securitySettingsButton) {

    securitySettingsButton.addEventListener(
        "click",
        function () {

            alert(
                "Security settings would allow users to manage login protection, privacy controls and transaction security."
            );
        }
    );
}


if (navActivity) {

    navActivity.addEventListener(
        "click",
        function () {

            alert(
                "Activity history will be added in a future iteration."
            );
        }
    );
}


if (navProfile) {

    navProfile.addEventListener(
        "click",
        function () {

            alert(
                "Profile settings are part of a future iteration."
            );
        }
    );
}


/* =========================================
   APPLICATION STATUS
   ========================================= */

console.log(
    "SwiftPay TrustFix Stage 7 loaded successfully."
);