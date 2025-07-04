const selectedEl = document.querySelector(".selected");
const submitButtonEl = document.querySelector(".submit-button");
const rateButtonsEl = document.querySelectorAll(".rate-button");
const errorMsg = document.querySelector(".error-msg");
const ratingContainerEl = document.querySelector(".rating-container");
const thankContainerEl = document.querySelector(".thank-container");

console.log(thankContainerEl);


let ratingValue = null;


rateButtonsEl.forEach(function(rateButton) {
    rateButton.addEventListener("click", function() {
            
        ratingValue = rateButton.getAttribute("value");

        selectedEl.textContent = `You selected ${ratingValue} out of 5`;
        
        if(ratingValue) {
            errorMsg.textContent = "";
        }
    });
});


submitButtonEl.addEventListener("click", function(){
    if(ratingValue){
        ratingContainerEl.classList.add("hidden");
        thankContainerEl.classList.remove("hidden");
    } else {
        errorMsg.textContent = `Please select a rating before submitting`
    }
    
});
