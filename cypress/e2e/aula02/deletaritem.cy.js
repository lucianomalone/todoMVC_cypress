import telaInicial from '../../support/pageObjects/tela-inicial.pageObjects'

describe('Teste de delatar itens', () => {

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
/**
 * Clicar no filtro
 * o item deve ser exibido
 * o contador deve bater
 */
it ('Deletar itens Atvos', () =>{
    telaInicial.deletarItem()
    
    
})




})
