describe('Integration test with visual testing', function() {
    it('Loads the homepage', function() {
      // Load the page or perform any other interactions with the app.
      cy.visit("https://testcafe.io");
  
      // Take a snapshot for visual diffing
      cy.percySnapshot();
    });
  });