console.log("Loaded");
window.addEventListener('DOMContentLoaded',()=>{

  let content = document.querySelector('ion-content')
  window.iframe = document.createElement('iframe')
  iframe.width = window.innerWidth
  iframe.height = window.innerHeight-60
  content.appendChild(iframe)
  window.nav = document.createElement('nav')
  content.appendChild(nav)


  // Swipe Left
  window.pages = [
    'bitfun.co/dice',
    'moonbit.co.in',
    'moondoge.co.in',
    'moonliteco.in',
    'moondash.co.in/faucet',
    'moonbitcoin.cash/faucet',
    'bonusbitcoin.co/faucet',
    'coinpot.co/dashboard'
  ]
  window.icons = [
    'bitfun',
    'bit',
    'dogecoin',
    'litecoin',
    'dash',
    'bitcash',
    'bonusbit',
    'wallet'
  ]
  window.i = 0
  iframe.src = 'http://'+pages[i]
  nav.innerHTML = `
  <span onclick="javascript:prev()"><d><<d></span>
  <p></p>
  <span onclick="javascript:next()"><d>></d></span>
  `

  nav.addEventListener('click',()=>{
    iframe.src = 'http://'+pages[i]
  })

})
function prev() {
  i--
  if (i < 1) i += pages.length
  iframe.src = 'http://'+pages[(i+pages.length)%pages.length]
  nav.innerHTML = `
  <span onclick="javascript:prev()"><d><<d></span>
  <p></p>
  <span onclick="javascript:next()"><d>></d></span>
  `
  nav.style.backgroundImage = 'url("assets/imgs/'+icons[(i+pages.length)%pages.length]+'.png")'
}

function next() {
  i++
  iframe.src = 'http://'+pages[(i+pages.length)%pages.length]
  nav.innerHTML = `
  <span onclick="javascript:prev()"><d><<d></span>
  <p></p>
  <span onclick="javascript:next()"><d>></d></span>
  `
  nav.style.backgroundImage = 'url("assets/imgs/'+icons[(i+pages.length)%pages.length]+'.png")'
}
