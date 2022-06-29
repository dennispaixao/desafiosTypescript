interface Pessoa {
    nome:string,
    idade:number,
    profissao:Profissao
}
enum Profissao{
    atriz,
    pedreiro,
    padeiro
}


//let pessoa1 = {};
//pessoa1.nome = "maria";
//pessoa1.idade = 29;
//pessoa1.profissao = "atriz"

const pessoa1:Pessoa ={
    nome:'maria',
    idade:29,
    profissao:Profissao.atriz

}

const pessoa2:Pessoa = {
    nome : "roberto",
    idade : 19,
    profissao : Profissao.padeiro
}

const pessoa3:Pessoa ={
    nome:'laura',
    idade:32,
    profissao:Profissao.atriz

}


const pessoa4:Pessoa ={
    nome:'carlos',
    idade:19,
    profissao:Profissao.padeiro

}
