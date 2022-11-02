function DigaMeuNome(nome){
 console.log('antes do callback')

 nome()

 console.log('depois do callback')
}

DigaMeuNome(
  () => {
  console.log("isto é o callback")
  } 
)