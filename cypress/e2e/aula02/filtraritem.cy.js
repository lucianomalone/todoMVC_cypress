import telaInicial from '../../support/pageObjects/tela-inicial.pageObjects'

describe('Validar os filtros da aplicação após adicição de itens', () => {

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

    telaInicial.concluirItem()
})
/**
 * Clicar no filtro
 * o item deve ser exibido
 * o contador deve bater
 */
it ('Filtrar itens Ativos', () =>{
    telaInicial.filtrarItem("Active")
    
    
})

it.skip ('Filtrar itens Concluidos', () =>{
    
})





})
