
        
        let btn = document.getElementById('btn')
        let reiniciar = document.getElementById('btn2')
        
        btn.addEventListener('click',palpite)
        btn2.addEventListener('click',reinicio)

        let numeroAleatorio = Math.floor(Math.random()*100)
        let erro = 0
        let chance = 10
        let texto1 = 'Erros:'
        let texto2 = 'Chances restantes:'


        let dica = document.getElementById("dica");
        let chances = document.getElementById('chances')
        let erros = document.getElementById('erros')

 

        erros.innerHTML = `${texto1} ${erro}`
        chances.innerHTML = `${texto2} ${chance}`
        dica.innerHTML='É um numero entre 1 e 100. '

        function palpite(){
            let inNumero = document.getElementById('numero');
            let numero = Number(inNumero.value)
            
            if(numero == numeroAleatorio){
                dica.innerHTML=`Acertou!!! o numero é ${numeroAleatorio}`;
                reiniciar.removeAttribute('disabled')
                btn.disabled=true
            }else{
                erro++
                chance--

                if(numero > numeroAleatorio){
                    dica.innerHTML='O numero é MENORr'
                }else{
                    dica.innerHTML='O numero é MAIOR '
                }
            }

            erros.innerHTML = `${texto1} ${erro}`
            chances.innerHTML = `${texto2} ${chance}`

            if(chance == 0){
                dica.innerHTML='Você perdeu o numero era: '+ numeroAleatorio;
                reiniciar.removeAttribute('disabled')
                btn.disabled=true
            }   

        
           inNumero.value =''
           inNumero.focus()
        }
        

        function reinicio(){
        erro = 0
        chance = 10
        erros.innerHTML = `${texto1} ${erro}`
        chances.innerHTML = `${texto2} ${chance}`
        dica.innerHTML='É um numero entre 1 e 100 '
        numeroAleatorio = Math.floor(Math.random()*100)

        btn.removeAttribute('disabled')
        reiniciar.disabled=true

        
        }

        