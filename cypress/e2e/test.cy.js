describe('OPTIMAL SYSTEMS Website Test', () => {
  it('öffnet die OPTIMAL SYSTEMS Website mit Chrome', () => {
    // Timeout erhöhen für langsamere Ladezeiten
    Cypress.config('defaultCommandTimeout', 15000)
    Cypress.config('pageLoadTimeout', 30000)
    
    // Chrome Browser explizit setzen und OPTIMAL SYSTEMS Website öffnen
    cy.visit('https://www.optimal-systems.de/', {
      timeout: 30000,
      onBeforeLoad: (win) => {
        // Browser-Informationen setzen
        Object.defineProperty(win.navigator, 'userAgent', {
          value: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
        })
      }
    })
    
    // Warten bis die Seite vollständig geladen ist
    cy.get('body', { timeout: 15000 }).should('be.visible')
    
    // Warten bis der Inhalt geladen ist
    cy.wait(3000)
    
    // Überprüfen, dass die Seite korrekt geladen wurde
    cy.title({ timeout: 10000 }).should('contain', 'OPTIMAL SYSTEMS')
    cy.url().should('eq', 'https://www.optimal-systems.de/')
    
    // Auf den Cookie-Button klicken
    cy.get('button#CybotCookiebotDialogBodyLevelButtonLevelOptinAllowAll', { timeout: 10000 })
      .should('be.visible')
      .click()
    
    // Überprüfen, dass der Cookie-Dialog verschwunden ist
    cy.get('div#CybotCookiebotDialog', { timeout: 5000 }).should('not.be.visible')
    
    // Überprüfen, dass die Hauptseite sichtbar ist
    cy.get('body').should('contain.text', 'OPTIMAL SYSTEMS')
    
    // Hover über das "Digitalisierung" Menü-Element
    // Zuerst das Menü-Element finden und sichtbar machen
    cy.get('a[role="button"][aria-controls="submenu-300"]').contains('Digitalisierung', { timeout: 10000 })
      .should('exist')
      .then(($el) => {
        // Das Element und seine Eltern sichtbar machen
        cy.wrap($el).parent().invoke('css', 'visibility', 'visible')
        cy.wrap($el).parent().invoke('css', 'display', 'block')
        cy.wrap($el).parent().invoke('css', 'opacity', '1')
      })
      .should('be.visible')
      .trigger('mouseover')
    
    // Test-Schritte aus dem Java Selenium-Code übersetzt:
    
    // 1. Fenstergröße setzen (1710x1069)
    cy.viewport(1710, 1069)
    
    // 2. Auf "Digitalisierung" klicken
    cy.contains('Digitalisierung').click()
    
    // 3. Warten bis das Untermenü sichtbar wird und es dann sichtbar machen
    cy.get('#submenu-300', { timeout: 10000 })
      .should('exist')
      .invoke('css', 'display', 'block')
      .invoke('css', 'visibility', 'visible')
      .should('be.visible')
    

      
// 4. Auf "DMS Dokumentenmanagementsystem" klicken
/* The original get selector might not work correctly with pseudo-selectors like :contains() in Cypress.
   Instead, use cy.contains() to search for the text directly and then locate the link to click on it. */

// Start of Selection
cy.contains('a', 'DMS Dokumentenmanagementsystem', { timeout: 10000 })
  .scrollIntoView()
  .should('be.visible')
  .click()

 // scroll to the bottom of the page
 cy.scrollTo('bottom')

  // Warten bis der Inhalt geladen ist
  cy.wait(3000)

  // scroll to the bottom of the page
 cy.scrollTo('top')

 // Hover über das "Digitalisierung" Menü-Element
    // Zuerst das Menü-Element finden und sichtbar machen
    cy.get('a[role="button"][aria-controls="submenu-300"]').contains('Digitalisierung', { timeout: 10000 })
      .should('exist')
      .then(($el) => {
        // Das Element und seine Eltern sichtbar machen
        cy.wrap($el).parent().invoke('css', 'visibility', 'visible')
        cy.wrap($el).parent().invoke('css', 'display', 'block')
        cy.wrap($el).parent().invoke('css', 'opacity', '1')
      })
      .should('be.visible')
      .trigger('mouseover')
    
    
    // 1. Fenstergröße setzen (1710x1069)
    cy.viewport(1710, 1069)
    
    // 2. Auf "Digitalisierung" klicken
    cy.contains('Digitalisierung').click()
    
    // 3. Warten bis das Untermenü sichtbar wird und es dann sichtbar machen
    cy.get('#submenu-300', { timeout: 10000 })
      .should('exist')
      .invoke('css', 'display', 'block')
      .invoke('css', 'visibility', 'visible')
      .should('be.visible')


    cy.contains('a', 'Digitale Archivierung', { timeout: 10000 })
      .scrollIntoView()
      .should('be.visible')
      .then(($el) => {
        cy.wrap($el).click({ force: true })
      })

      // scroll to the bottom of the page
        cy.scrollTo('bottom')

        // Warten bis der Inhalt geladen ist
        cy.wait(3000)

        // scroll to the bottom of the page
        cy.scrollTo('top')

    
  })
})