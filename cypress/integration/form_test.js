describe("Test for Sprint-Challenge-Lambda-Eats-starter", function () {
    beforeEach(function () {
        cy.visit("http://localhost:3000/pizza")
    });
    it("test to add text, select checkbox and submit buttom", function () {
        
        cy
            .get('input[name="name"]')
            .type("Priyanka")
            .should("have.value", "Priyanka")
        cy
            .get('textarea[name="specInstr"]')
            .type("some text")
            .should("have.value", "some text")
        cy
            .get('select[name="size"]')
            .select('Small')
            .should("have.value", "small")
        cy
            .get('[type=checkbox]')
            .check()
            .should("be.checked")
        cy
            .get('button[name="submit"]')
            .click()

       
    })



})