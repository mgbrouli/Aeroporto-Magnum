export class Aviao {
  // Propriedades privadas (protegidas contra acessos diretos externos)
  #nome;
  #modelo;
  #autonomia;
  #tanque_combustivel_atual;
  #quantidade_assentos;
  #em_uso;

  constructor(
    nome = "",
    modelo = "",
    autonomia = 0,
    tanque_combustivel_atual = 0,
    quantidade_assentos = 0,
    em_uso = false
  ) {
    this.#nome = nome;
    this.#modelo = modelo;
    this.#autonomia = autonomia;
    this.#tanque_combustivel_atual = tanque_combustivel_atual;
    this.#quantidade_assentos = quantidade_assentos;
    this.#em_uso = em_uso;
  }

  // Getters e Setters para Nome
  get nome() {return this.#nome;}
  set nome(novoNome) {this.#nome = novoNome;}

  // Getters e Setters para Modelo
  get modelo() {return this.#modelo;}
  set modelo(novoModelo) {this.#modelo = novoModelo;}

  // Getters e Setters para Autonomia
  get autonomia() {return this.#autonomia;}
  set autonomia(novaAutonomia) {this.#autonomia = novaAutonomia;}

  // Getter para Tanque Atual (sem setter direto para forçar o uso de addCombustivel)
  get tanqueCombustivelAtual() {return this.#tanque_combustivel_atual;}

  // Getters e Setters para Em Uso
  get emUso() {return this.#em_uso;}
  set emUso(status) {this.#em_uso = status;}

  // Getters e Setters para Assentos
  get quantidadeAssentos() {return this.#quantidade_assentos;}

  set quantidadeAssentos(quantidade) {this.#quantidade_assentos = quantidade;}

  // Métodos com regras de negócio
  addCombustivel(quantidade) {
    if (this.#tanque_combustivel_atual + quantidade > this.#autonomia) {
      throw new Error("Não é possível sobrecarregar o tanque de combustível");
    }
    this.#tanque_combustivel_atual += quantidade;
  }

  consumirCombustivel(consumoPorHora) {
    if (this.#tanque_combustivel_atual - consumoPorHora < 0) {
      this.#tanque_combustivel_atual = 0;
      throw new Error("Alerta! O combustível acabou totalmente!");
    }
    this.#tanque_combustivel_atual -= consumoPorHora;
  }

  toString() {
    return `=== Avião: ${this.#nome} ===
Modelo: ${this.#modelo}
Autonomia Total: ${this.#autonomia}L
Tanque Atual: ${this.#tanque_combustivel_atual}L
Quantidade de Assentos: ${this.#quantidade_assentos}
Em Uso: ${this.#em_uso ? "Sim" : "Não"}`;
  }
}
