// Classe de abstração
function Personagem(nome, universo) {
    this.nome = nome;
    this.universo = universo;

    this.apresentacao = function () {
        console.log(`Eu sou ${this.nome} do universo ${this.universo}!`);
    }
}

// Função construtora Herói
function Heroi(nome, universo, habilidade) {
    Personagem.call(this, nome, universo);
    this.habilidade = habilidade;

    this.usarHabilidade = function () {
        console.log(`${this.nome} usa ${this.habilidade}!`);
    }
}

// Função construtora Vilão
function Vilao(nome, universo, planoMaligno) {
    Personagem.call(this, nome, universo);
    this.planoMaligno = planoMaligno;

    this.executarPlano = function () {
        console.log(`${this.nome} inicia seu plano maligno: ${this.planoMaligno}!`);
    }
}

// Criando seis instâncias (três heróis e três vilões)
const heroi1 = new Heroi('Homem-Aranha', 'Marvel', 'Sentido Aranha');
const heroi2 = new Heroi('Goku', 'Dragon Ball', 'Kamehameha');
const heroi3 = new Heroi('Mulher-Maravilha', 'DC', 'Força sobre-humana');

const vilao1 = new Vilao('Coringa', 'DC', 'Criar o caos em Gotham');
const vilao2 = new Vilao('Darth Vader', 'Star Wars', 'Dominar a galáxia');
const vilao3 = new Vilao('Thanos', 'Marvel', 'Reunir as Joias do Infinito para dizimar metade do universo');

heroi1.apresentacao();
heroi1.usarHabilidade();

heroi2.apresentacao();
heroi2.usarHabilidade();

heroi3.apresentacao();
heroi3.usarHabilidade();

vilao1.apresentacao();
vilao1.executarPlano();

vilao2.apresentacao();
vilao2.executarPlano();

vilao3.apresentacao();
vilao3.executarPlano();
