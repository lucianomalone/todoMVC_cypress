import telaInicial from '../../support/pageObjects/tela-inicial.pageObjects'

describe('Concluir item', () => {

/**
 * dado -> BEFORE - ANTES DO PRIMEIRO TESTE
 * BEFORE EACH -> ANTES DE CADA TESTE
 */
beforeEach(()=>{
    cy.visit('/')    

    var todoItens = ["maça","banana","melão","cenoura","Abacate"]
    //para cada(for it)
    todoItens.forEach(function(item,indice,array){
        telaInicial.inputText(item)
    })
})

it ('Concluir item', () =>{
    telaInicial.concluirItem()
})





})
