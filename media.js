(function(){

  const form = document.querySelector("form")
  let nota1 = document.getElementById('nota1')
  let nota2 = document.getElementById('nota2')
  form.addEventListener('submit', enviarForm)
  form.addEventListener('reset',limparForm)
  
  function enviarForm(e){
    e.preventDefault()
    if(!nota1.value || !nota2.value || nota1.value < 0 || nota2.value < 0 || nota1.value > 10 || nota2.value > 10){
      alert('Preencha os campos');
    }else{
      let media = calcularMedia(Number(nota1.value), Number(nota2.value))
      console.log(media);
      mostrarResultado(media)
      situacaoMedia(media)
    }
  }
  
  function calcularMedia(num1, num2){
    return (num1 + num2) / 2
  }
  
  function mostrarResultado(media){
    let resultado = document.getElementById('res')
    resultado.value = media 
    
  }
  
  function situacaoMedia(media){
    let situcao = document.getElementById('situacao')
    if(media <= 4){
      situcao.value = 'Reprovado'
      situcao.classList.add('reprovado')
      situcao.classList.remove('recuperacao')
      situcao.classList.remove('aprovado')
    }else if(media < 7){
      situcao.value = 'Recuperação'
      situcao.classList.add('recuperacao')
      situcao.classList.remove('reprovado')
      situcao.classList.remove('aprovado')
    }else if(media >= 7){
      situcao.value = 'Aprovado'
      situcao.classList.add('aprovado')
      situcao.classList.remove('recuperacao')
      situcao.classList.remove('reprovado')
    }
    return
  }
  
  function limparForm(){
      let situcao = document.getElementById('situacao')
      situcao.classList.remove('aprovado','reprovado','recuperacao')
      nota1.value = '';
      nota2.value = '';
      nota1.focus()
  }
})()

























