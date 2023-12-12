let nomeHeroi = "Jack"
let nivelXP = ["Ferro","Bronze","Prata","Ouro","Platina","Ascendente","Imortal","Radiante"]
let pontosXP = 6500
     if( pontosXP<=1000){
           console.log("O herói de nome "+ nomeHeroi+ " está no nível de "+ nivelXP[0]);
        }  else if(pontosXP > 1000 && pontosXP<=2000){ 
                    console.log("O herói de nome "+ nomeHeroi+" está no nivel de "+nivelXP[1]);

                   }else if(pontosXP >2000 && pontosXP <=5000){
                            console.log("O herói de nome "+ nomeHeroi+" está no nível de "+nivelXP[2]);
                            }else if(pontosXP>6000 && pontosXP<=7000){
                                     console.log("O herói de nome "+nomeHeroi+" está no nivel de "+nivelXP[3]);
                                    }else if(pontosXP>7000 && pontosXP<=8000){
                                        console.log("O herói de nome "+nomeHeroi+" está no nível de "+nivelXP[4]);
                               }else if(pontosXP>8000 && pontosXP<=9000){
                                console.log("O herói de nome "+nomeHeroi+" está no nível de "+nivelXP[5]);
                       }else if(pontosXP>9000 && pontosXP<=10000){
                        console.log("O herói de nome "+nomeHeroi+" está no nível de "+nivelXP[6]);
               }else if(pontosXP>=10001){
                console.log("O heroi de nome "+nomeHeroi+" está no nível de "+nivelXP[7])
               }



/*Se XP for menor do que 1.000 = Ferro
Se XP for entre 1.001 e 2.000 = Bronze
Se XP for entre 2.001 e 5.000 = Prata
Se XP for entre 6.001 e 7.000 = Ouro
Se XP for entre 7.001 e 8.000 = Platina
Se XP for entre 8.001 e 9.000 = Ascendente
Se XP for entre 9.001 e 10.000= Imortal
Se XP for maior ou igual a 10.001 = Radiante

## Saída */