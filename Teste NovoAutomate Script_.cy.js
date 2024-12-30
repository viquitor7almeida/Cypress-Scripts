describe('Automate - LoginSAP', function() {

  function forceGarbageCollection() {
    if (window && window.gc) {
      window.gc();
    }
    Cypress.config('defaultCommandTimeout', 120000);
  }

  function login(codLoja, password) {
    cy.visit('http://10.60.0.18/login');
    cy.get('#codlojasap').type(codLoja);
    cy.get('#password').type(password);
    cy.get('.text-white').click();
  }

  beforeEach(() => {
    forceGarbageCollection();
    // Realiza o login na F016 antes de cada teste
    login('login', 'password');
  });

  // Checa o login admin
  it('Login admin', function() {
    login('login', 'passworld');
  });

  // Checa o login padrão
  it('Login padrão', function() {
    login('login', 'password');
  });

  // Repassa a quantidade e os textos da coluna (freezados pelo comercial)
  it('Validações colunas', function() {
    cy.get('thead > tr > :nth-child(1)').should('be.visible').and('contain', 'Requisição SAP');
    cy.get('thead > tr > :nth-child(2)').should('be.visible').and('contain', 'Loja');
    cy.get('thead > tr > :nth-child(3)').should('be.visible').and('contain', 'Data Pedido');
    cy.get('thead > tr > :nth-child(4)').should('be.visible').and('contain', 'Data Entrega');
    cy.get('thead > tr > :nth-child(5)').should('be.visible').and('contain', 'Tipo Requisição');
    cy.get('thead > tr > :nth-child(6)').should('be.visible').and('contain', 'Status');
  });

  it('Pedido ZORG' , function(){
     // Fazendo pedido
     cy.wait(2000)
     cy.get('.bg-orange-600').click();
     cy.get('#input-13').click(); // Seleciona a seção
     cy.wait(2000);
     cy.get('.disabled\\:bg-gray-400').should('exist').click();

     // Verificação do primeiro botão com condicional para o segundo
     cy.wait(2000)
     cy.get('.bg-green-600').then($button => {
       if (!$button.is(':disabled')) {
         cy.wrap($button).click();

         // Só tenta o segundo botão se o primeiro estiver habilitado e clicado
         cy.wait(2000)
         cy.get('.border-b-2').then($secondButton => {
           if (!$secondButton.is(':disabled')) {
             cy.wrap($secondButton).click();
           } else {
             cy.log('Cache aplicado, botões desabilitados');
           }
         });
       } else {
         cy.log('Cache aplicado, botões desabilitados');
       }
      });
       
         cy.get('.bg-orange-600').should('exist').click();
         cy.wait(1000);
         cy.get('.ms-auto').should('exist').click();
         cy.wait(5000);
         cy.get('.ms-auto').should('exist').click();
       });

       it('Pedido ZFLV' , function(){
        // Fazendo pedido
        cy.wait(2000)
        cy.get('.bg-orange-600').click();
        cy.get('#input-12').click(); // Seleciona a seção
        cy.wait(2000);
        cy.get('.disabled\\:bg-gray-400').should('exist').click();
   
        // Verificação do primeiro botão com condicional para o segundo
        cy.wait(2000)
        cy.get('.bg-green-600').then($button => {
          if (!$button.is(':disabled')) {
            cy.wrap($button).click();
   
            // Só tenta o segundo botão se o primeiro estiver habilitado e clicado
            cy.wait(2000)
            cy.get('.border-b-2').then($secondButton => {
              if (!$secondButton.is(':disabled')) {
                cy.wrap($secondButton).click();
              } else {
                cy.log('Cache aplicado, botões desabilitados');
              }
            });
          } else {
            cy.log('Cache aplicado, botões desabilitados');
          }
         });
          
            cy.get('.bg-orange-600').should('exist').click();
            cy.wait(1000);
            cy.get('.ms-auto').should('exist').click();
            cy.wait(5000);
            cy.get('.ms-auto').should('exist').click();
          });

          it('Pedido ZCOG' , function(){
            // Fazendo pedido
            cy.wait(2000)
            cy.get('.bg-orange-600').click();
            cy.get('#input-14').click(); // Seleciona a seção
            cy.wait(2000);
            cy.get('.disabled\\:bg-gray-400').should('exist').click();
       
            // Verificação do primeiro botão com condicional para o segundo
            cy.wait(2000)
            cy.get('.bg-green-600').then($button => {
              if (!$button.is(':disabled')) {
                cy.wrap($button).click();
       
                // Só tenta o segundo botão se o primeiro estiver habilitado e clicado
                cy.wait(2000)
                cy.get('.border-b-2').then($secondButton => {
                  if (!$secondButton.is(':disabled')) {
                    cy.wrap($secondButton).click();
                  } else {
                    cy.log('Cache aplicado, botões desabilitados');
                  }
                });
              } else {
                cy.log('Cache aplicado, botões desabilitados');
              }
             });
              
                cy.get('.bg-orange-600').should('exist').click();
                cy.wait(1000);
                cy.get('.ms-auto').should('exist').click();
                cy.wait(5000);
                cy.get('.ms-auto').should('exist').click();
              });     
              
              it('Pedido ZVET' , function(){
                // Fazendo pedido
                cy.wait(2000)
                cy.get('.bg-orange-600').click();
                cy.get('#input-15').click(); // Seleciona a seção
                cy.wait(2000);
                cy.get('.disabled\\:bg-gray-400').should('exist').click();
           
                // Verificação do primeiro botão com condicional para o segundo
                cy.wait(2000)
                cy.get('.bg-green-600').then($button => {
                  if (!$button.is(':disabled')) {
                    cy.wrap($button).click();
           
                    // Só tenta o segundo botão se o primeiro estiver habilitado e clicado
                    cy.wait(2000)
                    cy.get('.border-b-2').then($secondButton => {
                      if (!$secondButton.is(':disabled')) {
                        cy.wrap($secondButton).click();
                      } else {
                        cy.log('Cache aplicado, botões desabilitados');
                      }
                    });
                  } else {
                    cy.log('Cache aplicado, botões desabilitados');
                  }
                 });
                  
                    cy.get('.bg-orange-600').should('exist').click();
                    cy.wait(1000);
                    cy.get('.ms-auto').should('exist').click();
                    cy.wait(5000);
                    cy.get('.ms-auto').should('exist').click();
                  });              
  
  
          // Checa se os pedidos zerados estão voltando da forma correta do SAP
          it('Pedido Zerado', function() {
            login('login', 'password');

            let TitleLoja;

            cy.get('.col-span-11 > .text-orange-600').then(($div) => {
              // Captura o texto da div
              TitleLoja = $div.text();

              // Recorta do título somente o login SAP e armazena em uma variável
              let LoginLoja = TitleLoja.replace(/AUTOMATE|DEV|[- ]/g, '').trim();

              // Printa o título da página e o login SAP da loja
              cy.log('NsapLoja: ' + TitleLoja);
              cy.log('LoginLoja: ' + LoginLoja);

              // Valida se o texto capturado está presente no elemento específico
              cy.get('.col-span-11 > .text-orange-600').should('contain', TitleLoja);
              cy.get('.col-span-11 > .text-orange-600').should('contain', LoginLoja);

              // Fazendo pedido
              cy.get('.bg-orange-600').click();
              cy.get('#input-14').click(); // Seleciona a seção
              cy.wait(2000);
              cy.get('.disabled\\:bg-gray-400').should('exist').click();

              // Verificação do primeiro botão com condicional para o segundo
              cy.wait(2000)
              cy.get('.bg-green-600').then($button => {
                if (!$button.is(':disabled')) {
                  cy.wrap($button).click();

                  // Só tenta o segundo botão se o primeiro estiver habilitado e clicado
                  cy.wait(2000)
                  cy.get('.border-b-2').then($secondButton => {
                    if (!$secondButton.is(':disabled')) {
                      cy.wrap($secondButton).click();
                    } else {
                      cy.log('Cache aplicado, botões desabilitados');
                    }
                  });
                } else {
                  cy.log('Cache aplicado, botões desabilitados');
                }
              });

              cy.get(':nth-child(24) > :nth-child(13) > .rounded-lg')
                .scrollIntoView()
                .should('be.visible')
                .and('not.be.disabled')
                .then(() => {
                  for (let div = 1; div <= 24; div++) {
                    cy.get(`:nth-child(${div}) > :nth-child(13) > .rounded-lg`).should('exist').click({ force: true }).clear().type('0'); // Alterando todos os itens para 0
                  }
                  cy.get('.bg-orange-600').click();
                  cy.wait(1000);
                  cy.get('.ms-auto').should('exist').click();
                  cy.wait(5000);
                  cy.get('.ms-auto').should('exist').click();
                  //cy.get('tbody > :nth-child(1) > :nth-child(1) > .text-orange-600').invoke('text').should('contain', LoginLoja);
                });
            });
          });

          it('Desvio Padrão', function() {
            // Fazendo pedido
            cy.wait(2000);
            cy.get('.bg-orange-600').click();
            cy.get('#input-15').click(); // Seleciona a seção
            cy.wait(2000);
            cy.get('.disabled\\:bg-gray-400').should('exist').click();
            cy.wait(2000);
            
            // Verificação do primeiro botão com condicional para o segundo
            cy.wait(2000);
            cy.get('.bg-green-600').then($button => {
              if (!$button.is(':disabled')) {
                cy.wrap($button).click();
          
                // Só tenta o segundo botão se o primeiro estiver habilitado e clicado
                cy.wait(2000);
                cy.get('.border-b-2').then($secondButton => {
                  if (!$secondButton.is(':disabled')) {
                    cy.wrap($secondButton).click();
                  } else {
                    cy.log('Cache aplicado, botões desabilitados');
                  }
                });
              } else {
                cy.log('Cache aplicado, botões desabilitados');
              }
            });
          
            // Inicializando uma variável para armazenar o nth-child encontrado
            let nthChildFound = null;
            let valueFound = null; // Variável para armazenar o valor encontrado
          
            // Verificação de todos os nth-child de 1 a 159
            for (let i = 1; i <= 159; i++) {
              cy.get(`:nth-child(${i}) > .dark\\:text-green-600`).then($el => {
                const value = parseFloat($el.text()); // Extrai o texto e converte para número
                if (!isNaN(value) && value > 5) { // Verifica se o valor é maior que 5
                  nthChildFound = i; // Armazena o nth-child encontrado
                  valueFound = value; // Armazena o valor encontrado
                  //cy.wrap($el).type('500'); // Digita '500' no elemento encontrado
                  cy.log(`Valor maior que 5 encontrado no nth-child(${nthChildFound}) e esse valor é (${valueFound})`);
                  return false; // Interrompe o loop após encontrar um valor válido
                }
              });
            }
          
            // Aguarda que o loop termine
            cy.wait(2000).then(() => {
              if (nthChildFound) {
                cy.log(`O primeiro valor maior que 5 foi encontrado no nth-child(${nthChildFound}) com o valor (${valueFound})`);
                // Aqui você pode fazer mais ações com nthChildFound, se necessário
              } else {
                cy.log('Nenhum valor maior que 5 encontrado.');
              }
            });
          
            cy.wait(2000);
            cy.get('.bg-orange-600').click(); // Envia o pedido
            cy.wait(1000);
            cy.get('.ms-auto').should('exist').click();
            cy.wait(5000);
            cy.get('.ms-auto').should('exist').click();
          });
        });   
