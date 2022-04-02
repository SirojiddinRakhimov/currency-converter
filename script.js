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
    let flag_src = `https://countryflagsapi.com/png/${flag_code}`
    fromImg.src = flag_src
    from = e.target.value
    exchangeText.innerHTML = ''
})
dropList[1].addEventListener('change', (e) => {
    let flag_code = dropList[1].value.substring(0, 2)
    let flag_src = `https://countryflagsapi.com/png/${flag_code}`
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
//     console.log(data);
}


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
