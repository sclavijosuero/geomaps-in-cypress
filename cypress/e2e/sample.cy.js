/// <reference types="cypress" />

describe('Map Suite', () => {

    beforeEach(() => {
        // Visit map page (centered in Portland, OR)
        cy.visit('https://geojson.io/#map=9.45/45.487/-122.6908')

        // Give the map some time to load (not recommended the use of
        // cy.wait(TIME), replace with a better approach depending on the case)
        cy.wait(2500)

        // Alias for map to reuse in all the tests
        cy.get('canvas.mapboxgl-canvas').as('map')
    })

    /**
     * NOTE: The map drawing tools expect clicks on the canvas in pixel coordinates,
     *       like a real user would do.
     */

    it('Draw Geometries', () => {
        // DRAW POINT

        // Enable tool to draw a point
        cy.get('button[title="Draw Point (m)"]').click()

        // Draw point
        cy.get('@map').realClick({ x: 150, y: 300 })
        

        // DRAW POLYLINE

        // Enable tool to draw a polyline 
        cy.get('button[title="Draw LineString (l)"]').click()

        // Draw polyline (500ms between clicks to see the interaction)
        cy.get('@map').realClick({ x: 350, y: 200 })
        cy.wait(500)
        cy.get('@map').realClick({ x: 500, y: 350 })
        cy.wait(500)
        cy.get('@map').realClick({ x: 350, y: 500 })

        
        // DRAW POLYGON

        // Enable tool to draw a polygon
        cy.get('button[title="Draw Polygon (p)"]').click()

        // Draw polygon (500ms between clicks to see the interaction)
        cy.get('@map').realClick({ x: 650, y: 200 })
        cy.wait(500)
        cy.get('@map').realClick({ x: 650, y: 500 })
        cy.wait(500)
        cy.get('@map').realClick({ x: 800, y: 500 })
        cy.wait(500)
        cy.get('@map').realClick({ x: 800, y: 200 })
        cy.wait(500)
        cy.get('@map').realClick({ x: 650, y: 200 })
    });
});

