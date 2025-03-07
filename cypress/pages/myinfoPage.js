class MyInfoPage {

    selectorList(){
        const selectors = {
            firstNameField: "[name='firstName']",
            middleNameField: "[name='middleName']",
            lastNameField: "[name='lastName']",
            genericField: ".oxd-input",
            dateField: "[placeholder='yyyy-dd-mm']",
            dateCloseButton: ".--close",
            submitButton: "[type='submit']",
            ColumButton: "[tabindex='0']",
            fifthItemColum: '.oxd-select-dropdown > :nth-child(4)',
            tirthItemColum: '.oxd-select-dropdown > :nth-child(2)',
            seventhItemColum: '.oxd-select-dropdown > :nth-child(6)'
        }
        return selectors
    }

    Myinfo(){
        cy.get(this.selectorList().firstNameField).clear().type('FirstNameTest')
        cy.get(this.selectorList().middleNameField).clear().type('MiddleNameTest')
        cy.get(this.selectorList().lastNameField).clear().type('LastNameTest')
        cy.get(this.selectorList().firstNameField).clear().type('FirstNameTest')
        cy.get(this.selectorList().middleNameField).clear().type('MiddleNameTest')
        cy.get(this.selectorList().lastNameField).clear().type('LastNameTest')
        cy.get(this.selectorList.genericField).eq(4).clear().type('EmIdTest')
        cy.get(this.selectorList().genericField).eq(5).clear().type('123456')
        cy.get(this.selectorList().genericField).eq(6).clear().type('654321')
        cy.get(this.selectorList().dateField).eq(0).clear().type('2005-09-03')
        cy.get(this.selectorList().dateCloseButton).click()
        cy.get(this.selectorList().ColumButton).eq(0).click()//se coloar um {force: true} dentro do click(), o elemento é 'clicado' msm com outro o sobrepondo
        cy.get(this.selectorList().fifthItemColum).click()
        cy.get(this.selectorList().ColumButton).eq(1).click()
        cy.get(this.selectorList().tirthItemColum).click()
        cy.get(this.selectorList().ColumButton).eq(2).click()
        cy.get(this.selectorList().seventhItemColum).click()
        cy.get(this.selectorList().submitButton).eq(0).click()
        cy.get('body').should('contain', 'Successfully Updated')
        cy.get('.oxd-toast-close')
    }

}
export default MyInfoPage