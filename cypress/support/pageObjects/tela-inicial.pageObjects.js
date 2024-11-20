/**
 * será uma clase com diferentes metodos
 * manipulando dados ou realizando uma inserção
 *  
 */
//criando um elo para enchergar todos os elementos
const elem = require('../elements/tela-inicial.elements').ELEMENTS
const concluirItem = require('../elements/tela-inicial.elements').ITENS
const filtroitem = require('../elements/tela-inicial.elements').FILTROS


class telaInicial{
    inputText(dado){
        //dados chumbados
        // cy.get(elem.inputToDo).type("Luciano").type('{enter}')
        //forma dinamica
        cy.get(elem.inputToDo).type(dado).type('{enter}')
    }

    concluirItem(){
        cy.get(concluirItem.buttonConcluirItem)
        .first()
        .click()

    }

    filtrarItem(menu){
        cy.get(filtroitem.filtroTodo)
        .contains(menu)
        .and('be.visible')
        .click()

    }

    deletarItem(){
        cy.get(concluirItem.listaItens)
        .first()
        .find('button')
        .invoke('show')
        .click()
    }

    validarInput(texto){
        cy.get(elem.inputToDo)
        .should('have.attr', 'placeholder')
        .and('include',texto)


    }

    validarContador(numero){
        cy.get(filtroitem.contador)
        .find('strong')
        .contains(numero)

    }

    validarSizeToDo(numero){
        cy.get(concluirItem.validarListaItens)
        .should('have.length', numero)

    }




        
    }

    

//exportando essa função 
export default new telaInicial();