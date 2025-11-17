describe('OPTIMAL SYSTEMS Formular Test', () => {
  it('testet Formulare auf der OPTIMAL SYSTEMS Website', () => {
    // ===========================================
    // KONFIGURATION UND SETUP
    // ===========================================
    
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
    
    // ===========================================
    // SEITEN-VALIDIERUNG
    // ===========================================
    
    // Warten bis die Seite vollständig geladen ist
    cy.get('body', { timeout: 15000 }).should('be.visible')
    cy.wait(1000)
    
    // Überprüfen, dass die Seite korrekt geladen wurde
    cy.title({ timeout: 10000 }).should('contain', 'OPTIMAL SYSTEMS')
    cy.url().should('eq', 'https://www.optimal-systems.de/')
    
    // Cookie-Dialog behandeln
    cy.get('button#CybotCookiebotDialogBodyLevelButtonLevelOptinAllowAll', { timeout: 10000 })
      .should('be.visible')
      .click()
    
    // Überprüfen, dass der Cookie-Dialog verschwunden ist
    cy.get('div#CybotCookiebotDialog', { timeout: 5000 }).should('not.be.visible')
    
    // ===========================================
    // FORMULAR-TESTS
    // ===========================================
    
    // Fenstergröße setzen
    cy.viewport(1710, 1069)

     // Test 1: DMS Dokumentenmanagementsystem
     testDigitalisierungSubmenu('DMS Dokumentenmanagementsystem')
    
    // Hier können spezifische Formular-Tests hinzugefügt werden
    // z.B. Kontaktformular, Newsletter-Anmeldung, etc.
    
    cy.log('Formular-Tests werden hier implementiert')
  })
  
  // ===========================================
  // HILFSFUNKTIONEN
  // ===========================================
  
  /**
   * Testet ein Untermenü-Element im Digitalisierung-Menü
   * @param {string} menuItemText - Der Text des Menü-Elements
   */
  function testDigitalisierungSubmenu(menuItemText) {
    // Hover über das "Digitalisierung" Menü-Element
    cy.get('a[role="button"][aria-controls="submenu-300"]')
      .contains('Digitalisierung', { timeout: 10000 })
      .should('exist')
      .then(($el) => {
        // Das Element und seine Eltern sichtbar machen
        cy.wrap($el).parent().invoke('css', 'visibility', 'visible')
        cy.wrap($el).parent().invoke('css', 'display', 'block')
        cy.wrap($el).parent().invoke('css', 'opacity', '1')
      })
      .should('be.visible')
      .trigger('mouseover')
    
    // Auf "Digitalisierung" klicken
    cy.contains('Digitalisierung').click()
    
    // Warten bis das Untermenü sichtbar wird und es dann sichtbar machen
    cy.get('#submenu-300', { timeout: 10000 })
      .should('exist')
      .invoke('css', 'display', 'block')
      .invoke('css', 'visibility', 'visible')
      .should('be.visible')
    
    // Auf das spezifische Menü-Element klicken
    cy.contains('a', menuItemText, { timeout: 10000 })
      .scrollIntoView()
      .should('be.visible')
      .then(($el) => {
        cy.wrap($el).click({ force: true })
      })
    
    // Seiteninhalt testen
    cy.contains('Ist ein DMS eine vordefinierte Lösung oder kann sie an mein Unternehmen angepasst werden?').scrollIntoView()
    cy.wait(1000)

    // ===========================================
    // FORMULAR-AUSFÜLLUNG
    // ===========================================
    
    // Scrollen um sicherzustellen, dass das Formular sichtbar ist
    cy.get('#nf-field-41-1').scrollIntoView()
    cy.wait(500)
    
    // Radio-Button auswählen (mit force: true da es von Navigation überdeckt wird)
    cy.get('#nf-field-41-1').check({ force: true })
    
    // Weitere Formularfelder ausfüllen
    cy.get('#nf-field-42').scrollIntoView().type('Thang')
    cy.get('#nf-field-43').scrollIntoView().type('Lam (0155 10611547)')
    cy.get('#nf-field-44').scrollIntoView().type('x0568162@gmail.com ')
    cy.get('#nf-field-45').scrollIntoView().type('Sehr geehrte Damen und Herren, Als SW Tester bringe ich praktische Erfahrung mit Tools wie Cypress, Playwright und Selenium mit und teste täglich Webanwendungen auf Performance, Funktionalität und Nutzerfreundlichkeit. Der Mix aus Technik, Design und Qualität reizt mich besonders, da ich gern Schnittstellen zwischen Entwicklung und Testing verbinde. Nun möchte ich meine Leidenschaft für präzises, modernes Frontend-Testing in Ihr Team einbringen und gemeinsam Produkte entwickeln, die nicht nur funktionieren, sondern begeistern.{enter}Viele Grüße{enter}Thang Lam')

    
    // Überprüfen, dass alle Felder korrekt ausgefüllt wurden
    //cy.get('#nf-field-41-1').should('be.checked')
    //cy.get('#nf-field-43').should('have.value', 'testNachname')
    //cy.get('#nf-field-44').should('have.value', 'testEmail@gmail.com')
    //cy.get('#nf-field-45').should('have.value', 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.')


  }
})
