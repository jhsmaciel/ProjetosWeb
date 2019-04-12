class Despesa {
    constructor(ano,mes,dia,tipo,descricao,valor){
        this.ano = ano
        this.mes = mes
        this.dia = dia
        this.tipo = tipo 
        this.descricao = descricao 
        this.valor = valor
    }
    checkData(){
        for (let i in this){
            if(this[i] == "" || this[i] == undefined || this[i] == null ){
                return false
            }
        }
        return true
    }
}

class Database {

    constructor() {
        let id = localStorage.getItem('id')
        if(id === null ){
            localStorage.setItem('id',0)
        }
    }

    getNextId(){
        let nextId = localStorage.getItem('id')
        console.log(nextId)
        
        return ++nextId
    }

    saveInStorage(des){
        let id = this.getNextId()
        localStorage.setItem(id,JSON.stringify(des))
        localStorage.setItem('id',id)
    }
}

let bd = new Database();

function cadDespesa(){

    let ano = document.getElementById('ano')
    let mes = document.getElementById('mes')
    let dia = document.getElementById('dia')
    let tipo = document.getElementById('tipo')
    let desc = document.getElementById('descricao')
    let valor = document.getElementById('valor')

    let despesa = new Despesa(
            ano.value,
            mes.value,
            dia.value,
            tipo.value,
            desc.value,
            valor.value
        )
    if(despesa.checkData()){
        console.log("Dados válidos")
    } else {
        alert("Dados inválidos")
    }
}