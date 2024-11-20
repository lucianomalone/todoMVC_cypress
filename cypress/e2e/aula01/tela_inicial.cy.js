/**
 * Feature -> describe(dscrição)
 * background -> contexto ou beforeEach
 * caso de teste -> it
 */
//Importando a classe
import telaInicial from '../../support/pageObjects/tela-inicial.pageObjects'

describe('Acessar a pagina do todoMVC', () => {
  it('Abrir o site', () => {
    cy.visit('https://todomvc.com/examples/javascript-es5/dist/')
    telaInicial.inputText()
  })
})