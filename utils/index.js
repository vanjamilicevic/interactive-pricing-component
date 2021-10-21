
/*

  Function that sets slider style:
  - Left part of the slider retains light blue color
  - Right part of the slider receives grey color

  It is done through JS as it requires concrete range value

*/
const styleSlider = () => {

  let slider = document.getElementById("slider")
  let value = (slider.value - slider.min) / (slider.max - slider.min) * 100
  slider.style.background = 'linear-gradient(to right, #A4F3EB 0%, #A4F3EB ' + value + '%, #ECF0FB ' + value + '%, #ECF0FB 100%)'
}

/* Styling slider on load */
window.onload = () => {
  styleSlider()
}

/* Re-styling slider while using it */
document.getElementById("slider").oninput = function() {
  styleSlider()
}

/*

  Following function updates:
  - Text 
  - Cost

  It is triggered when using slider or when monthly/yearly billing switch is clicked

  Text / Cost are:
  - 10K pageviews / $8 per month
  - 50K pageviews / $12 per month
  - 100K pageviews / $16 per month
  - 500k pageviews / $24 per month
  - 1M pageviews / $36 per month

  Where cost has 25% discount in case yearly subscription is set

*/
const updatePage = () => {

  let value = document.getElementById("slider").value
  let discount = document.getElementById("payment-switcher").getAttribute("type") === "yearly" ? true: false
  if (value >= 0 && value < 1) {

    const price = discount === false ? 8.00 : 8.00 * 0.75
    document.getElementById("cost").innerText = price.toFixed(2).toString()
    document.getElementById("page-views").innerText = "10K PAGEVIEWS"
  } 
  else if (value >= 1 && value < 2) {
    const price = discount === false ? 12.00 : 12.00 * 0.75
    document.getElementById("cost").innerText = price.toFixed(2).toString()
    document.getElementById("page-views").innerText = "50K PAGEVIEWS"
  } 
  else if (value >=2 && value < 3) {

    const price = discount === false ? 16.00 : 16.00 * 0.75
    document.getElementById("cost").innerText = price.toFixed(2).toString()
    document.getElementById("page-views").innerText = "100K PAGEVIEWS"
  }
  else if (value >=3 && value < 4) {

    const price = discount === false ? 24.00 : 24.00 * 0.75
    document.getElementById("cost").innerText = price.toFixed(2).toString()
    document.getElementById("page-views").innerText = "500K PAGEVIEWS"
  }
  else if (value >= 4) {

    const price = discount === false ? 36.00 : 36.00 * 0.75
    document.getElementById("cost").innerText = price.toFixed(2).toString()
    document.getElementById("page-views").innerText = "1M PAGEVIEWS"
  }
}

document.getElementById("slider").addEventListener("input", () => updatePage())

/*
  
  Updates when monthly/yearly switch is clicked

*/
document.getElementById("payment-switcher").addEventListener("click", () => {

  document.getElementById("monthly-billing").classList.toggle("billing-hidden")
  document.getElementById("yearly-billing").classList.toggle("billing-hidden")
  
  const currentPaymentType = document.getElementById("payment-switcher").getAttribute("type")
  if (currentPaymentType === "monthly")
    document.getElementById("payment-switcher").setAttribute("type", "yearly")
  else
    document.getElementById("payment-switcher").setAttribute("type", "monthly")
  
  updatePage()
})

