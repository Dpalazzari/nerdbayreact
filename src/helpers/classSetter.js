function classSetter(bool, btn){
  (bool) 
    ? btn.target.classList.add('clicked-status-button') 
    : btn.target.classList.remove('clicked-status-button')
}

export default classSetter;