export default class PokemonDTO{
    constructor({ nome, tipo, altura, peso, url_imagem }) {
        this.nome = nome;
        this.tipo = tipo;
        this.altura = altura;
        this.peso = peso;
        this.url_imagem = url_imagem;
    }
}