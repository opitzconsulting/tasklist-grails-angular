# Drehbuch zur Grails-und-Angular-Demo

## Ausgangsbasis

Leeres Git-Repository "tasklist"

## Schritt 1: Scaffolding mit Grails

    // Applikation anlegen
    grails create-app tasklist-backend

    // Applikations-Ordner öffnen
    cd tasklist-backend

    // Domänenobjekt anlegen
    grails create-domain-class Task

    // Domänenobjekt modellieren
    package tasklist.backend

    class Task {

        String title
        boolean done

        static constraints = {
            title nullable: false, blank: false
        }

    }

    // Controller anlegen
    grails create-scaffold-controller tasklist.backend.Task

    // Anwendung starten und präsentieren
    grails run-app

## Schritt 2: Client mit Angular ohne Backend

*   Gerüst für leere Lineman-Applikation ins Projekt-Verzeichnis kopieren
*   Client ohne Backend entwickeln

## Schritt 3: Grails-App um REST-Endpoints erweitern

*   ...

## Schritt 4: Angular-App um Backend-Kommunikation erweitern

*   `TaskResource` ergänzen
*   ...

## Schritt 5: Code zur "Embedded Angular-App" zeigen

*   Ablage-Ort der Ressourcen
*   ApplicationResources.groovy zeigen
*   tasks.gsp zeigen
