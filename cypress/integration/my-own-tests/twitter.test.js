/// <reference types="cypress" />

describe('Basic Test', () => {

    beforeEach(() => {
        //cy.visit('https://twitter.com')
        cy.viewport(1280, 720)
    })

    it('trying to login :)', () => {

        cy.visit('https://twitter.com')
        cy.contains('Sign in').click()
        cy.contains('Use phone').click()
        cy.get('[name="session[username_or_email]"]').first().type('@username', { force: true })
        cy.get('[name= "session[password]"]').first().type('password', { force: true })

    })

    it('Follow Twitter', () => {

        cy.get('[data-testid="LoginForm_Login_Button"]').first().click()
        cy.get('[data-testid="SearchBox_Search_Input"]').type('Twitter')
        cy.get('[data-testid="SearchBox_Search_Input"]').type('{enter}')
        cy.get('[data-testid="615052631-follow"]').first().click()
        cy.contains('what’s happening?!').click({ force: true })

    })

    it('Send a DM', () => {

        /*
        cy.get('[data-testid="sendDMFromProfile"]').click('center')
        cy.wait(500)
        cy.get('[data-testid="dmComposerTextInput_label"]').first().click('center')
        cy.get('[data-testid="dmComposerTextInput_label"]').type('I love you\'re service')
        cy.get('[data-testid="dmComposerTextInput_label"]').type('{enter}')
        */
        cy.get('[data-testid="AppTabBar_DirectMessage_Link"]').first().click()
        cy.contains('New message').click()
        cy.get('[data-testid="searchPeople"]').type('savbs')
        cy.wait(1500)
        cy.get('[data-testid="TypeaheadUser"]').click('center')
        cy.wait(1500)
        cy.get('[data-testid="nextButton"]').click('center')
        cy.get('[data-testid="dmComposerTextInput_label"]').click('center')
        cy.get('[data-testid="dmComposerTextInput_label"]').type('Great')
        cy.wait(1500)
        cy.get('[data-testid="dmComposerTextInput_label"]').type('{enter}')
    })

})
