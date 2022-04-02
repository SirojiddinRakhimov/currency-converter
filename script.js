let country_list1 = {
    "AED": "AE",
    "AFN": "AF",
    "XCD": "AG",
    "ALL": "AL",
    "AMD": "AM",
    "ANG": "AN",
    "AOA": "AO",
    "AQD": "AQ",
    "ARS": "AR",
    "AUD": "AU",
    "AZN": "AZ",
    "BAM": "BA",
    "BBD": "BB",
    "BDT": "BD",
    "XOF": "BE",
    "BGN": "BG",
    "BHD": "BH",
    "BIF": "BI",
    "BMD": "BM",
    "BND": "BN",
    "BOB": "BO",
    "BRL": "BR",
    "BSD": "BS",
    "NOK": "BV",
    "BWP": "BW",
    "BYR": "BY",
    "BZD": "BZ",
    "CAD": "CA",
    "CDF": "CD",
    "XAF": "CF",
    "CHF": "CH",
    "CLP": "CL",
    "CNY": "CN",
    "COP": "CO",
    "CRC": "CR",
    "CUP": "CU",
    "CVE": "CV",
    "CYP": "CY",
    "CZK": "CZ",
    "DJF": "DJ",
    "DKK": "DK",
    "DOP": "DO",
    "DZD": "DZ",
    "ECS": "EC",
    "EEK": "EE",
    "EGP": "EG",
    "ETB": "ET",
    "EUR": "FR",
    "FJD": "FJ",
    "FKP": "FK",
    "GBP": "GB",
    "GEL": "GE",
    "GGP": "GG",
    "GHS": "GH",
    "GIP": "GI",
    "GMD": "GM",
    "GNF": "GN",
    "GTQ": "GT",
    "GYD": "GY",
    "HKD": "HK",
    "HNL": "HN",
    "HRK": "HR",
    "HTG": "HT",
    "HUF": "HU",
    "IDR": "ID",
    "ILS": "IL",
    "INR": "IN",
    "IQD": "IQ",
    "IRR": "IR",
    "ISK": "IS",
    "JMD": "JM",
    "JOD": "JO",
    "JPY": "JP",
    "KES": "KE",
    "KGS": "KG",
    "KHR": "KH",
    "KMF": "KM",
    "KPW": "KP",
    "KRW": "KR",
    "KWD": "KW",
    "KYD": "KY",
    "KZT": "KZ",
    "LAK": "LA",
    "LBP": "LB",
    "LKR": "LK",
    "LRD": "LR",
    "LSL": "LS",
    "LTL": "LT",
    "LVL": "LV",
    "LYD": "LY",
    "MAD": "MA",
    "MDL": "MD",
    "MGA": "MG",
    "MKD": "MK",
    "MMK": "MM",
    "MNT": "MN",
    "MOP": "MO",
    "MRO": "MR",
    "MTL": "MT",
    "MUR": "MU",
    "MVR": "MV",
    "MWK": "MW",
    "MXN": "MX",
    "MYR": "MY",
    "MZN": "MZ",
    "NAD": "NA",
    "XPF": "NC",
    "NGN": "NG",
    "NIO": "NI",
    "NPR": "NP",
    "NZD": "NZ",
    "OMR": "OM",
    "PAB": "PA",
    "PEN": "PE",
    "PGK": "PG",
    "PHP": "PH",
    "PKR": "PK",
    "PLN": "PL",
    "PYG": "PY",
    "QAR": "QA",
    "RON": "RO",
    "RSD": "RS",
    "RUB": "RU",
    "RWF": "RW",
    "SAR": "SA",
    "SBD": "SB",
    "SCR": "SC",
    "SDG": "SD",
    "SEK": "SE",
    "SGD": "SG",
    "SKK": "SK",
    "SLL": "SL",
    "SOS": "SO",
    "SRD": "SR",
    "STD": "ST",
    "SVC": "SV",
    "SYP": "SY",
    "SZL": "SZ",
    "THB": "TH",
    "TJS": "TJ",
    "TMT": "TM",
    "TND": "TN",
    "TOP": "TO",
    "TRY": "TR",
    "TTD": "TT",
    "TWD": "TW",
    "TZS": "TZ",
    "UAH": "UA",
    "UGX": "UG",
    "USD": "US",
    "UYU": "UY",
    "UZS": "UZ",
    "VEF": "VE",
    "VND": "VN",
    "VUV": "VU",
    "YER": "YE",
    "ZAR": "ZA",
    "ZMK": "ZM",
    "ZWD": "ZW"
}
let country_code = {
    "AE": "AED",
    "AF": "AFN",
    "AG": "XCD",
    "AL": "ALL",
    "AM": "AMD",
    "AN": "ANG",
    "AO": "AOA",
    "AQ": "AQD",
    "AR": "ARS",
    "AU": "AUD",
    "AZ": "AZN",
    "BA": "BAM",
    "BB": "BBD",
    "BD": "BDT",
    "BE": "XOF",
    "BG": "BGN",
    "BH": "BHD",
    "BI": "BIF",
    "BM": "BMD",
    "BN": "BND",
    "BO": "BOB",
    "BR": "BRL",
    "BS": "BSD",
    "BV": "NOK",
    "BW": "BWP",
    "BY": "BYR",
    "BZ": "BZD",
    "CA": "CAD",
    "CD": "CDF",
    "CF": "XAF",
    "CH": "CHF",
    "CL": "CLP",
    "CN": "CNY",
    "CO": "COP",
    "CR": "CRC",
    "CU": "CUP",
    "CV": "CVE",
    "CY": "CYP",
    "CZ": "CZK",
    "DJ": "DJF",
    "DK": "DKK",
    "DO": "DOP",
    "DZ": "DZD",
    "EC": "ECS",
    "EE": "EEK",
    "EG": "EGP",
    "ET": "ETB",
    "FR": "EUR",
    "FJ": "FJD",
    "FK": "FKP",
    "GB": "GBP",
    "GE": "GEL",
    "GG": "GGP",
    "GH": "GHS",
    "GI": "GIP",
    "GM": "GMD",
    "GN": "GNF",
    "GT": "GTQ",
    "GY": "GYD",
    "HK": "HKD",
    "HN": "HNL",
    "HR": "HRK",
    "HT": "HTG",
    "HU": "HUF",
    "ID": "IDR",
    "IL": "ILS",
    "IN": "INR",
    "IQ": "IQD",
    "IR": "IRR",
    "IS": "ISK",
    "JM": "JMD",
    "JO": "JOD",
    "JP": "JPY",
    "KE": "KES",
    "KG": "KGS",
    "KH": "KHR",
    "KM": "KMF",
    "KP": "KPW",
    "KR": "KRW",
    "KW": "KWD",
    "KY": "KYD",
    "KZ": "KZT",
    "LA": "LAK",
    "LB": "LBP",
    "LK": "LKR",
    "LR": "LRD",
    "LS": "LSL",
    "LT": "LTL",
    "LV": "LVL",
    "LY": "LYD",
    "MA": "MAD",
    "MD": "MDL",
    "MG": "MGA",
    "MK": "MKD",
    "MM": "MMK",
    "MN": "MNT",
    "MO": "MOP",
    "MR": "MRO",
    "MT": "MTL",
    "MU": "MUR",
    "MV": "MVR",
    "MW": "MWK",
    "MX": "MXN",
    "MY": "MYR",
    "MZ": "MZN",
    "NA": "NAD",
    "NC": "XPF",
    "NG": "NGN",
    "NI": "NIO",
    "NP": "NPR",
    "NZ": "NZD",
    "OM": "OMR",
    "PA": "PAB",
    "PE": "PEN",
    "PG": "PGK",
    "PH": "PHP",
    "PK": "PKR",
    "PL": "PLN",
    "PY": "PYG",
    "QA": "QAR",
    "RO": "RON",
    "RS": "RSD",
    "RU": "RUB",
    "RW": "RWF",
    "SA": "SAR",
    "SB": "SBD",
    "SC": "SCR",
    "SD": "SDG",
    "SE": "SEK",
    "SG": "SGD",
    "SK": "SKK",
    "SL": "SLL",
    "SO": "SOS",
    "SR": "SRD",
    "ST": "STD",
    "SV": "SVC",
    "SY": "SYP",
    "SZ": "SZL",
    "TH": "THB",
    "TJ": "TJS",
    "TM": "TMT",
    "TN": "TND",
    "TO": "TOP",
    "TR": "TRY",
    "TT": "TTD",
    "TW": "TWD",
    "TZ": "TZS",
    "UA": "UAH",
    "UG": "UGX",
    "US": "USD",
    "UY": "UYU",
    "UZ": "UZS",
    "VE": "VEF",
    "VN": "VND",
    "VU": "VUV",
    "YE": "YER",
    "ZA": "ZAR",
    "ZM": "ZMK",
    "ZW": "ZWD"
}

const input = document.querySelector('.amount input')
const fromImg = document.querySelector('.from img')
const toImg = document.querySelector('.to img')
const btn = document.querySelector('.rate')
const exchangeIcon = document.querySelector('.icon')
const exchangeText = document.querySelector('.exchange-rate')
let dropList = document.querySelectorAll('.drop-list select')


let from = dropList[0].value;
let to = dropList[1].value;
let amount = input.value
input.addEventListener('input', () => amount = input.value)

dropList[0].addEventListener('change', (e) => {
    let flag_code = dropList[0].value.substring(0, 2)
    let flag_src = `http://www.geognos.com/api/en/countries/flag/${flag_code}.png`
    fromImg.src = flag_src
    from = e.target.value
    exchangeText.innerHTML = ''
})
dropList[1].addEventListener('change', (e) => {
    let flag_code = dropList[1].value.substring(0, 2)
    let flag_src = `http://www.geognos.com/api/en/countries/flag/${flag_code}.png`
    toImg.src = flag_src
    to = e.target.value
    exchangeText.innerHTML = ''
})

btn.addEventListener('click', rate)

async function rate() {
    btn.textContent = 'Exchanging rate...'
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Host': 'currency-converter18.p.rapidapi.com',
            'X-RapidAPI-Key': 'ab09dfc65amsh81772bf073b1795p17eca1jsnbf9d07fa61e7'
        }
    };
    const baseUrl = `https://currency-converter18.p.rapidapi.com/api/v1/convert?from=${from}&to=${to}&amount=${amount}`


    const res = await fetch(baseUrl, options)
    const data = await res.json()
    const convertedAmount = data.result.convertedAmount.toFixed(3)
    exchangeText.innerHTML = `${input.value} ${from} = ${convertedAmount} ${to}`
    btn.textContent = 'Get Exchange Rate'
    console.log(data);
}
// function loop() {
//     for (let i = 0; i < dropList.length; i++) {
//         for (currency_code in country_list1) {
//             let optionTag = `<option value="${currency_code}">${currency_code}</option>`
//             dropList[i].insertAdjacentHTML('beforeend', optionTag)
//         }
//     }
// }
// loop()
let deferredPrompt;
const addBtn = document.querySelector('.add-button');
// addBtn.style.display = 'none';

window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;
    // addBtn.style.display = 'block';

});
window.addEventListener("beforeinstallprompt", (e)=>{
    e.preventDefault()
    deferredPrompt = e
})
addBtn.addEventListener('click', (e) => {
    // addBtn.style.display = 'none';
    deferredPrompt.prompt();
    // Wait for the user to respond to the prompt
    deferredPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === 'accepted') {
            console.log('User accepted the A2HS prompt');
        } else {
            console.log('User dismissed the A2HS prompt');
        }
        deferredPrompt = null;
    });
});
window.addEventListener('appinstalled', (evt)=>{
    app.logEvent('a2hs', 'installed')
})