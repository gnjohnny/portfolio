const App = () => {
    toggleMobileMenu();
};

document.addEventListener("DOMContentLoaded", App);

const toggleMobileMenu = () => {
    const openMenuBtn = document.getElementById("open-btn");
    const mobileMenu = document.getElementById("mobile-menu");

    const openMobileMenu = () => {
        mobileMenu.classList.toggle("hidden");
        mobileMenu.classList.toggle("flex");
    };

    openMenuBtn.addEventListener("click", openMobileMenu);

    const closeMobileMenuFromAnyWhere = () => {
        mobileMenu.classList.remove("flex");
        mobileMenu.classList.add("hidden");
    };

    mobileMenu.addEventListener("click", closeMobileMenuFromAnyWhere);
};

const handleSendMessage = (e) => {
    e.preventDefault();

    const email = document.getElementById("email").value.trim();
    const name = document.getElementById("name").value.trim();
    const message = document.getElementById("message").value.trim();

    const url = "http://localhost:5000/api/send/email";

    const details = {
        email,
        name,
        message,
    };

    if (!email || !message) {
        alert("All fields are required");
    }

    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(details),
    };

    try {
        const res = fetch(url, options).then((res) => {
            if (res.status === "pending") {
                const button = document.getElementById("submitBtn");
                button.innerText = "sending...";
            } else if (res.status === 200) {
                console.log("Message sent successfully");
                const button = document.getElementById("submitBtn");
                button.innerText = "Send";
                showSuccessMessage();
            } else {
                showFailureMessage()
            }
        });
    } catch (error) {
        console.error("An error occured", error.message);
    }
};

const form = document.getElementById("form");
form.addEventListener("submit", handleSendMessage);

const showSuccessMessage = () => {
    const successMessage = document.createElement("div");
    successMessage.innerHTML = `<p class="text-center text-white text-semibold">Message sent successfully</p>`;
    form.appendChild(successMessage);
    setTimeout(() => {
        form.removeChild(successMessage);
    }, 3000);
};
const showFailureMessage = () => {
    const successMessage = document.createElement("div");
    successMessage.innerHTML = `<p class="text-center text-red-800 text-semibold">Message not sent</p>`;
    form.appendChild(successMessage);
    setTimeout(() => {
        form.removeChild(successMessage);
    }, 3000);
};
