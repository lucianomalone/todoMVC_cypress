import telaInicial from '../../support/pageObjects/tela-inicial.pageObjects'

describe('Regressivo TODO APP', () => {

    context('Validar a tela inicial', ()=>{
        beforeEach(()=>{
            cy.visit('/')    
        })
        it('Validar a area do label de input de dados', () => {
            telaInicial.validarInput("What needs to be done?")
            
        });

        
    })

    context('Validar a Acição de itens', ()=>{
        beforeEach(()=>{
            cy.visit('/')    
        })
        it('Adicionando itens ao todo', () => {
            var todoItens = ["maça","banana","melão","cenoura","Abacate"]
        //para cada(for it)
        todoItens.forEach(function(item,indice,array){
            telaInicial.inputText(item)
        })

        //validação validar quantidade de itens = 5
        telaInicial.validarContador(5)

            
        });
        

    })

    context('Validar a conclusão de itens', ()=>{
        beforeEach(()=>{
            cy.visit('/')    
        
            var todoItens = ["maça","banana","melão"]
            //para cada(for it)
            todoItens.forEach(function(item,indice,array){
                telaInicial.inputText(item)
            })
        })
        
        it ('Concluir item', () =>{
            telaInicial.concluirItem()
            telaInicial.validarContador(2)
            //telaInicial.validarSizeToDo(2)
        })

    })

    context('Validar filtro da aplicação', ()=>{
        beforeEach(()=>{
            cy.visit('/')    
        
            var todoItens = ["maça","banana","melão","cenoura","Abacate"]
            //para cada(for it)
            todoItens.forEach(function(item,indice,array){
                telaInicial.inputText(item)
            })
        
            telaInicial.concluirItem()
        })

        it('Validar lista de itens ATIVOS', () => {
            telaInicial.filtrarItem("Active")
            telaInicial.validarSizeToDo(2)
            
        });

        it('Validar lista de itens concluidos', () => {
            telaInicial.filtrarItem("Completed")
            telaInicial.validarSizeToDo(1)
            
        });
        
    })

    context('Validar a remoção dos itens', ()=>{
        beforeEach(()=>{
            cy.visit('/')    
        
            var todoItens = ["maça","banana","melão"]
            //para cada(for it)
            todoItens.forEach(function(item,indice,array){
                telaInicial.inputText(item)
            })
        
            
        })

        it ('Deletar itens Atvos', () =>{
            telaInicial.deletarItem()
            telaInicial.validarSizeToDo(2)
            
        })

    })









})