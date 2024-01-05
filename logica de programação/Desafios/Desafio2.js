


/* Se vitórias for menor do que 10 = Ferro
Se vitórias for entre 11 e 20 = Bronze
Se vitórias for entre 21 e 50 = Prata
Se vitórias for entre 51 e 80 = Ouro
Se vitórias for entre 81 e 90 = Diamante
Se vitórias for entre 91 e 100= Lendário
Se vitórias for maior ou igual a 101 = Imortal

## Saída

Ao final deve se exibir uma mensagem:
"O Herói tem de saldo de **{saldoVitorias}** está no nível de **{nivel}**"
 */
let nomeHeroi= `Jaspion`
let nivel=[`Ferro`,`Bronze`,`Prata`,`Ouro`,`Diamante`,`Lendário`,`Imortal`]
let vitorias = somarVitorias(146,10)// Parâmetros(vitórias,derrotas)
if (vitorias== 0 || vitorias<=10){
  console.log(`O Heroi de nome ${nomeHeroi} tem o saldo de ${vitorias} e está no nível ${nivel[0]}` );
}
      else if(vitorias>10 && vitorias <=20){
              console.log(`O Heroi de nome ${nomeHeroi} tem o saldo de ${vitorias} e está no nível ${nivel[1]}`)
      }
else if(vitorias > 20 && vitorias<=50){
  console.log(`O Heroi de nome ${nomeHeroi} tem o saldo de ${vitorias} e está no nível ${nivel[2]}`)
}
        else if(vitorias > 50 && vitorias<=80){
                console.log(`O Heroi de nome ${nomeHeroi} tem o saldo de ${vitorias} e está no nível ${nivel[3]}`)
        }
else if(vitorias >80 && vitorias<=90){
  console.log(`O Heroi de nome ${nomeHeroi} tem o saldo de ${vitorias} e está no nível ${nivel[4]}`)
}
        else if(vitorias >90 && vitorias<=100){
                console.log(`O Heroi de nome ${nomeHeroi} tem o saldo de ${vitorias} e está no nível ${nivel[5]}`)
        }
else if(vitorias >100){
  console.log(`O Heroi de nome ${nomeHeroi} tem o saldo de ${vitorias} e está no nível ${nivel[6]}`)
}
 
 
 function somarVitorias(vit,der){
   let soma = vit - der
   return soma
 }

