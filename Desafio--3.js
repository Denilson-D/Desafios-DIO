class Heroi {
    constructor(nomeHeroi,idadeHeroi,tipoHeroi)
    {
    this.nomeHeroi = nomeHeroi;
    this.idadeHeroi = idadeHeroi;
    this.tipoHeroi = tipoHeroi;}

    mostrarAtaque(){
        let Ataque= ['Magia','Espada','Artes Marciais','Shuriken'];

        if(this.tipoHeroi == 'Mago'){
            console.log(` O ${this.tipoHeroi} atacou usando ${Ataque[0]}!`)
        }else if(this.tipoHeroi == 'Guerreiro'){
            console.log(` O ${this.tipoHeroi} atacou usando ${Ataque[1]}!`)
        }else if(this.tipoHeroi == 'Monje'){
            console.log(`O ${this.tipoHeroi} atacou usando ${Ataque[2]}!`)
        }else if(this.tipoHeroi == 'Ninja'){
            console.log(`O ${this.tipoHeroi} atacou usando ${Ataque[3]}!`)
        }
    }
}
let IdHeroi = new Heroi('Petrick','36 anos','Ninja')
IdHeroi.mostrarAtaque()