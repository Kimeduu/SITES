let menuu = document.querySelectorAll('.options')
 function selector(){
        menuu.forEach((item)=>    
       item.classList.remove('ativo')
 )
 this.classList.add('ativo')
}

menuu.forEach((item)=>
   item.addEventListener('click', selector)
  )
