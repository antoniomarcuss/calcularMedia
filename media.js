let form = document.querySelector('form')
let cxnota1 = document.getElementById('nota1')
let cxnota2 = document.getElementById('nota2')
let btnCalcular = document.getElementById('calcular')
let btnLimpar = document.getElementById('limpar')
let sit = document.getElementById('situacao')
btnCalcular.addEventListener('click', (e)=>{
   let nota1 = Number(cxnota1.value)
   let nota2 = Number(cxnota2.value)
   if(nota1 < 0 || nota1 > 10 || nota2 < 0 || nota2 > 10 || nota1 == "" || nota2 == ""){
    alert('Digite uma nota entre 0 e 10!')
   }else{
   let media = (nota1 + nota2) / 2
   let res = document.getElementById('res')
   res.value = media 
   console.log(media)
   if(media < 5){
    console.log('Reprovado')
    sit.value = 'Reprovado'
    sit.classList.add('reprovado')
    sit.classList.remove('recuperacao')
    sit.classList.remove('aprovado')
    
   }else if(media < 7){
    console.log('Recuperação')
    sit.value = 'Recuperação'   
    sit.classList.add('recuperacao')  
    sit.classList.remove('aprovado')  
    sit.classList.remove('reprovado')  
   }else if(media >=7 && media <= 10) {
    console.log( 'Aprovado')
    sit.value = 'Aprovado'
    sit.classList.add('aprovado')
    sit.classList.remove('reprovado')
    sit.classList.remove('recuperacao')
   }else {
    console.log('indefinida')
    sit.value = 'indefinida'
   }
   }
   
     e.preventDefault()
})

btnLimpar.addEventListener('click', ()=>{
    sit.classList.remove('aprovado')
    sit.classList.remove('reprovado')
    sit.classList.remove('recuperacao')
})



