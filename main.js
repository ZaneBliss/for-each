import businesses from "./businesses.js"

const outEl = document.querySelector("#output")
outEl.innerHTML = "<h1>Active Businesses</h1>"

businesses.forEach(business => {
  outEl.innerHTML += `
    <h2>${business.companyName}</h2>
    <section>
      ${business.addressFullStreet}
    </section>
    <section>${business.addressCity}, ${business.addressStateCode} ${business.addressZipCode}</section>
  `
  outEl.innerHTML += "<hr/>"
});