import businesses from "./businesses.js";

const outEl = document.querySelector("#output");
outEl.innerHTML = "<h1>Active Businesses</h1>";

businesses.forEach((business) => {
    /* CALCULATE ORDER SUMMARY */
    let totalOrders = business.orders.reduce(
        (currentTotal, nextValue) => (currentTotal += nextValue),
        0
    );

    outEl.innerHTML += `
        <h2>
            ${business.companyName}
            ($${totalOrders})
        </h2>
        <section>
            ${business.addressFullStreet}
        </section>
        <section>
            ${business.addressCity},
            ${business.addressStateCode}
            ${business.addressZipCode}
        </section>
    `;
    outEl.innerHTML += "<hr/>";
});

// Array to contain all the New York businesses
outEl.innerHTML += "<h1>New York Businesses</h1>";
const newYorkBusinesses = businesses.filter((business) => {
    let inNewYork = false;

    if (business.addressStateCode === "NY") {
        inNewYork = true;
        outEl.innerHTML += `
        <h2>${business.companyName}</h2>
        <section>
        ${business.addressFullStreet}
        </section>
        <section>${business.addressCity}, ${business.addressStateCode} ${business.addressZipCode}</section>
        `;
        outEl.innerHTML += "<hr/>";
    }

    return inNewYork;
});

outEl.innerHTML += "<h1>Manufacturing Businesses</h1>";
const manufacturingBusinesses = businesses.filter((business) => {
    if (business.companyIndustry == "Manufacturing") {
        outEl.innerHTML += `
        <h2>${business.companyName}</h2>
        <section>
        ${business.addressFullStreet}
        </section>
        <section>${business.addressCity}, ${business.addressStateCode} ${business.addressZipCode}</section>
        `;
        outEl.innerHTML += "<hr/>";
    }
});

outEl.innerHTML += "<h1>Purchasing Agents</h1>";

/*
    Using map(), you extract the purchasing agent object
    from each business and store it in a new array
*/
const agents = businesses.map((business) => {
    let newAgent = {
        fullName: `${business.purchasingAgent.nameFirst} ${business.purchasingAgent.nameLast}`,
        company: business.companyName,
        phoneNumber: business.phoneWork,
    };
    return newAgent;
});

agents.forEach((agent) => {
    outEl.innerHTML += `
    <section>
    <h2>${agent.fullName}</h2>
    </section>
    <section>
    <h3>${agent.company}</h3>
    </section>
    <section>
    <p>${agent.phoneNumber}</p>
    </section>

    `;
    outEl.innerHTML += "<hr/>";
});

document
    .querySelector("#agentSearch")
    .addEventListener("keypress", (keyPressEvent) => {
        if (keyPressEvent.charCode === 13) {
            /* WHEN  USER PRESSES ENTER, FIND MATCHING BUSINESS */
            const agent = agents.find(
                (agent) =>
                    agent.fullName.includes(keyPressEvent.target.value) ||
                    agent.phoneNumber.includes(keyPressEvent.target.value) ||
                    agent.company.includes(keyPressEvent.target.value)
            );

            outEl.innerHTML = `
                <h2>
                ${agent.fullName}
                </h2>
                <section>
                <h3>${agent.company}</h3>
                <section>
                ${agent.phoneNumber}
                </section>
            `;
        }
    });

const monthlyRainfall = [23, 13, 27, 20, 20, 31, 33, 26, 19, 12, 14, 12, 10]

const totalRainfall = monthlyRainfall.reduce((accumulator, currentValue) => {
    return accumulator + currentValue
}, 0);

const words = ["The", "quick", "brown", "fox", "jumped", "over", "the", "lazy", "dog"]

const sentence = words.reduce((accumulator, currentValue) => {
    return `${accumulator} ${currentValue}`
})

console.log(sentence)
console.log(totalRainfall)