describe('Automate - LoginSAP', function() {

    function forceGarbageCollection() {
      if (window && window.gc) {
        window.gc();
      }
      Cypress.config('defaultCommandTimeout', 120000);
    }
  
    describe('Pedido ZFLV', function () {
      const lojas = [
        ...Array.from({ length: 74 }, (_, i) => `f${String(i + 1).padStart(3, '0')}`), // f001 até f074
        ...Array.from({ length: 12 }, (_, i) => `n${String(i + 1).padStart(3, '0')}`)  // n001 até n012
      ];
    
      lojas.forEach((loja) => {
        it(`Testando para a loja ${loja}`, function () {
          login(`ADMIN.DS=${loja}`, 'passworld'); // Função de login com a loja atual
          cy.wait(2000); // Espera de 2 segundos
          cy.get('.bg-orange-600').click(); // Clica no botão laranja
          cy.get('#input-12').click(); // Seleciona a seção
        });
      });
    });
    
  });
  
