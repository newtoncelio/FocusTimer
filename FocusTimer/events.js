import { timerControls } from "./elements.js"
import { soundControls } from "./elements.js"
import * as actions from "./actions.js"
import * as el from "./elements.js"
import state from './state.js'
import { updateDisplay } from "./timer.js"



export function registerControls(){
  timerControls.addEventListener('click', (event) => {
    const timerAction = event.target.dataset.action
    if(typeof actions[timerAction] != 'function') {
      return
    }
    actions[timerAction]()
  })

  soundControls.addEventListener('click', (event) => {
    const soundAction = event.target.dataset.action
    if(typeof actions[soundAction] != 'function') {
      return
    }
    actions[soundAction]()
  })
}

export function setMinutes(){

  el.minutes.addEventListener('click', (event) => {
    el.minutes.setAttribute('contenteditable', true)
    el.minutes.focus()
  })

  el.minutes.addEventListener('focus', (event) => {
    el.minutes.textContent = ""
  })

  el.minutes.onkeypress = (event) => /\d/.test(event.key)

  el.minutes.addEventListener('blur', (event) => {
  
  let time = event.currentTarget.textContent
  time = time > 60 ? 60 : time

  state.minutes = time
  state.seconds = 0

  updateDisplay()

  el.minutes.removeAttribute('contenteditable')}
)}
  
