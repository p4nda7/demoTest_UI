describe('OPTIMAL SYSTEMS Website Test', () => {
  it('öffnet die OPTIMAL SYSTEMS Website mit Chrome', () => {
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
    
    // Überprüfen, dass die Hauptseite sichtbar ist
    cy.get('body').should('contain.text', 'OPTIMAL SYSTEMS')
    
    // ===========================================
    // NAVIGATIONSTESTS - DIGITALISIERUNG MENÜ
    // ===========================================
    
    // Fenstergröße setzen
    cy.viewport(1710, 1069)
    
    // Test 1: DMS Dokumentenmanagementsystem
    testDigitalisierungSubmenu('DMS Dokumentenmanagementsystem')
    
    // Test 2: Digitale Archivierung
    testDigitalisierungSubmenu('Digitale Archivierung')
    
    // Test 3: Cloud
    testDigitalisierungSubmenu('Cloud')
    
    // Test 4: Digitale Personalakte
    testDigitalisierungSubmenu('Digitale Personalakte')
    
    // Test 5: Alle Themen
    testDigitalisierungSubmenu('Alle Themen')
    
    // Test 6: Der Blog zur Digitalisierung
    testDigitalisierungSubmenu('Der Blog zur Digitalisierung')
    
    // Test 7: Business Process Management
    testDigitalisierungSubmenu('Collaboration Management')

    // Test 8: Elektronische Archivierung
    testDigitalisierungSubmenu('Elektronische Archivierung')

    // Test 9: E-Mail-Management
    testDigitalisierungSubmenu('E-Mail-Management')

    // Test 10: Posteingangsbearbeitung
    testDigitalisierungSubmenu('Posteingangsbearbeitung')

    // Test 11: Rechnungsbearbeitung
    testDigitalisierungSubmenu('Rechnungsbearbeitung')

  
     // Test 12: Dokumentenmanagement
     testDigitalisierungSubmenu('Dokumentenmanagement')
    
     // Test 13: Compliance Management
     testDigitalisierungSubmenu('Compliance Management')
    
     // Test 14: Alle Lösungen
     testDigitalisierungSubmenu('Alle Lösungen')
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
    cy.scrollTo('bottom')
    cy.wait(1000)
    cy.scrollTo('top')

    
  }
})