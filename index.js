document.addEventListener("DOMContentLoaded", function() {

const monthlyPrices = ["19.99", "24.99", "39.99"];
const annualPrices = ["199.99", "249.99", "399.99"];

function handleChange(prices) {

    const priceContainers = document.querySelectorAll(".change-price");
    priceContainers.forEach((priceContainer, index) => {
        priceContainer.innerHTML = prices[index];
    });
};

// || FOR CHECKBOX SWITCH     

// function setAttributes(el, attrs) {
//     for (let key in attrs) {
//         el.setAttribute(key, attrs[key]);
//     }
// }

// document.getElementById("switchInput").addEventListener("change", function() {
//     if (this.checked) {
//         handleChange(monthlyPrices);
//         setAttributes(this, {"aria-checked": "true", "aria-label": "Monthly pricing"});
//     } else {
//         handleChange(annualPrices);
//         setAttributes(this, {"aria-checked": "false", "aria-label": "Annual pricing"});
//     }
// });



// || FOR RADIO SWITCH

document.querySelectorAll(".switch-input").forEach((switchInput) => {
    switchInput.addEventListener("change", function() {
        if (this.value === "annual") {
            handleChange(annualPrices);
        } else if (this.value === "monthly") {
            handleChange(monthlyPrices);
        }
    });
});


});