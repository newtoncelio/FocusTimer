
import state from './state.js'
import * as el from './elements.js'
import * as timer from './timer.js'
import * as sounds from './sounds.js'

export function toggleRunning(){
  state.isRunning = document.documentElement.classList.toggle('running')

  timer.countdown()
}

export function reset() {
  state.isRunning = false
  document.documentElement.classList.remove('running')
  timer.updateDisplay()
}

export function increaseTimer() {
  let increaseMinutes = String(Number(el.minutes.textContent) + 5)

  increaseMinutes = increaseMinutes > 60 ? 60 : increaseMinutes

  let saveSeconds = el.seconds.textContent

  saveSeconds = el.minutes.textContent > 60 ? 0 : saveSeconds

  timer.updateDisplay(increaseMinutes, saveSeconds)

}

export function decreaseTimer() {
  let decreaseMinutes = String(Number(el.minutes.textContent) - 5)

  decreaseMinutes = decreaseMinutes < 0 ? 0 : decreaseMinutes

  let saveSeconds = el.seconds.textContent

  timer.updateDisplay(decreaseMinutes, saveSeconds)
  
}

export function forestSound() {
  state.isForestMute = document.querySelector('.ph-tree').classList.toggle('pressed')

  if(state.isForestMute) {
    sounds.forestSound.play()
    return
  }

  sounds.forestSound.pause()

}


export function rainSound() {
  state.isRainMute = document.querySelector('.ph-cloud-rain').classList.toggle('pressed')

  if(state.isRainMute) {
    sounds.rainSound.play()
    return
  }

  sounds.rainSound.pause()

}

export function fireplaceSound() {
  state.isFireplaceMute = document.querySelector('.ph-flame').classList.toggle('pressed')

  if(state.isFireplaceMute) {
    sounds.fireplaceSound.play()
    return
  }

  sounds.fireplaceSound.pause()

}

export function coffeeShopSound() {
  state.isCoffeeShopMute = document.querySelector('.ph-storefront').classList.toggle('pressed')

  if(state.isCoffeeShopMute) {
    sounds.coffeeShopSound.play()
    return
  }

  sounds.coffeeShopSound.pause()

}