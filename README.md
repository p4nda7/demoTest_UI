# Cypress E2E Test Projekt für OPTIMAL SYSTEMS

Hallo Zusammen,

dieses Projekt enthält End-to-End (E2E) Tests für die OPTIMAL SYSTEMS Website (`https://www.optimal-systems.de/`). Die Tests werden mit Cypress ausgeführt und decken Navigation, Menü-Funktionalität und Formulare ab.

```bash
01_testNavbars.cy.js      # Navigationstests  
02_formularTest.cy.js     # Formular-Tests  
03_test_master.cy copy.js # Master  
```


## 📋 Inhaltsverzeichnis

- [Voraussetzungen](#voraussetzungen)
- [Installation](#installation)
- [Projektstruktur](#projektstruktur)
- [Verwendung](#verwendung)
- [Tests](#tests)
- [Konfiguration](#konfiguration)

## 🔧 Voraussetzungen

- Node.js (Version 14 oder höher empfohlen)
- npm o
- Cypress wird als Entwicklungsumgebung installiert

## 📦 Installation

1. **Repository klonen oder in das Projektverzeichnis wechseln:**
   ```bash
   cd cypress
   ```

2. **Abhängigkeiten installieren:**
   ```bash
   npm install
   npm install cypress --save-dev
   ```

   Dies installiert Cypress und alle erforderlichen Abhängigkeiten.

## 📁 Projektstruktur

```
cypress/
├── cypress/
│   ├── e2e/                          # Test-Dateien
│   │   ├── 01_testNavbars.cy.js      # Navigationstests
│   │   ├── 02_formularTest.cy.js     # Formular-Tests
│   │   └── 03_test_master.cy copy.js # Master-Test (Kopie)
│   ├── fixtures/                     # Test-Daten
│   │   ├── example.json
│   │   ├── profile.json
│   │   └── users.json
│   ├── screenshots/                  # Screenshots von fehlgeschlagenen Tests
│   ├── downloads/                    # Heruntergeladene Dateien
│   └── support/                      # Support-Dateien
│       ├── commands.js               # Benutzerdefinierte Cypress-Befehle
│       └── e2e.js                    # E2E-spezifische Konfiguration
├── cypress.config.js                 # Cypress-Hauptkonfiguration
├── package.json                      # Projekt-Metadaten und Skripte
└── README.md                         # Diese Datei
```

## 🚀 Verwendung

1. Projekt clonen

```bash
git clone git@github.com:p4nda7/demoTest_UI.git
```

2. Navigieren ins Verzeichnis im Terminal

```bash
cd demoTest_UI
```

3. Öffnen Sie die Cypress Test Runner UI, um Tests interaktiv auszuführen:

```bash
npx cypress open
```

4. Testing type auswählen

```bash
E2E Testing
```

5. Browser auswählen

```bash
Chrome / Electron / Firefox
```

6. Browsertest starten

```bash
Button: Start E2E Testing
```

Dies öffnet die Cypress Test Runner-Anwendung, in der Sie Tests auswählen und ausführen können.

### Tests in spezifischen Browsern ausführen

**Chrome:**
```bash
npm run cypress:run:chrome
```

**Firefox:**
```bash
npm run cypress:run:firefox
```

## 🧪 Tests

### 01_testNavbars.cy.js

Testet die Navigation und Menü-Funktionalität der OPTIMAL SYSTEMS Website. Der Test:

- Öffnet die Website und behandelt den Cookie-Dialog
- Testet verschiedene Untermenü-Elemente im "Digitalisierung"-Menü:
  - DMS Dokumentenmanagementsystem
  - Digitale Archivierung
  - Cloud
  - Digitale Personalakte
  - Alle Themen
  - Der Blog zur Digitalisierung
  - Collaboration Management
  - Elektronische Archivierung
  - E-Mail-Management
  - Posteingangsbearbeitung
  - Rechnungsbearbeitung
  - Dokumentenmanagement
  - Compliance Management
  - Alle Lösungen

### 02_formularTest.cy.js

Testet Formulare auf der OPTIMAL SYSTEMS Website. Der Test:

- Navigiert zu einer Seite mit einem Formular
- Füllt verschiedene Formularfelder aus:
  - Radio-Buttons
  - Textfelder (Vorname, Nachname)
  - E-Mail-Feld
  - Textbereich
- Validiert die Formular-Eingaben

### Test-Konfiguration

Die Tests verwenden folgende Konfiguration:

- **Standard-Timeout:** 15 Sekunden
- **Page-Load-Timeout:** 30 Sekunden
- **Viewport-Größe:** 1710 x 1069 Pixel
- **Browser:** Chrome (standardmäßig)
- **User-Agent:** Chrome auf macOS simuliert

## ⚙️ Konfiguration

Die Hauptkonfiguration befindet sich in `cypress.config.js`. Hier können Sie:

- Basis-URLs setzen
- Timeouts anpassen
- Browser-Präferenzen konfigurieren
- Screenshot-Einstellungen anpassen
- Weitere Cypress-Optionen konfigurieren

### Beispiel-Konfiguration

Die aktuelle Konfiguration ist minimal. Sie können sie erweitern:

```javascript
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.optimal-systems.de/',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    viewportWidth: 1710,
    viewportHeight: 1069,
    defaultCommandTimeout: 15000,
    pageLoadTimeout: 30000,
  },
});
```

## 📝 Hinweise

- Die Tests behandeln automatisch Cookie-Dialoge auf der Website
- Die Tests verwenden erhöhte Timeouts für langsamere Ladezeiten
- Screenshots werden automatisch bei fehlgeschlagenen Tests gespeichert
- Die Tests navigieren zu verschiedenen Seiten der OPTIMAL SYSTEMS Website

## 🔍 Troubleshooting

### Tests schlagen fehl wegen Timeout

- Erhöhen Sie die Timeout-Werte in der Test-Datei oder `cypress.config.js`
- Überprüfen Sie die Internetverbindung
- Stellen Sie sicher, dass die Website erreichbar ist

### Browser öffnet sich nicht

- Stellen Sie sicher, dass Cypress korrekt installiert ist: `npm install`
- Überprüfen Sie, ob der Browser installiert ist (Chrome, Firefox, etc.)

### Elemente werden nicht gefunden

- Überprüfen Sie, ob die Website-Struktur sich geändert hat
- Verwenden Sie `cypress:open` für einen interaktiven Debug-Modus
- Überprüfen Sie die Konsole auf Fehlermeldungen

## 📚 Weitere Ressourcen

- [Cypress Dokumentation](https://docs.cypress.io/)
- [Cypress Best Practices](https://docs.cypress.io/guides/references/best-practices)
- [Cypress API Referenz](https://docs.cypress.io/api/api/table-of-contents)
