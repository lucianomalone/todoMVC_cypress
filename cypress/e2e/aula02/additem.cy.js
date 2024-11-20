import telaInicial from '../../support/pageObjects/tela-inicial.pageObjects'

describe('Adicianr item no todoMVCA', () => {

/**
 * dado -> BEFORE - ANTES DO PRIMEIRO TESTE
 * BEFORE EACH -> ANTES DE CADA TESTE
 */
beforeEach(()=>{
    cy.visit('/')    
})

it('Adicionar um item na lista',() =>{
    telaInicial.inputText("dado1")  
   
})

it('Adicionar mais de um item na lista',() =>{
    //adicionando dados através de uma lista
    var todoItens = ["maça","banana","melão","cenoura","Abacate"]
    //para cada(for it)
    todoItens.forEach(function(item,indice,array){
        telaInicial.inputText(item)
    })
   
    
     
});




})
