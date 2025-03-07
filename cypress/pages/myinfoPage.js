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

    fillPersonalDetail(firstName, middleName, lastName){
        cy.get(this.selectorList().firstNameField).clear().type(firstName)
        cy.get(this.selectorList().middleNameField).clear().type(middleName)
        cy.get(this.selectorList().lastNameField).clear().type(lastName)
    }

    fillEmployeeDetail(employeeId, otherId, licenseNumber, expireDate){
        cy.get(this.selectorList().genericField).eq(4).clear().type(employeeId)
        cy.get(this.selectorList().genericField).eq(5).clear().type(otherId)
        cy.get(this.selectorList().genericField).eq(6).clear().type(licenseNumber)
        cy.get(this.selectorList().dateField).eq(0).clear().type(expireDate)
        cy.get(this.selectorList().dateCloseButton).click()
        
    }

    saveForm(){
        cy.get(this.selectorList().submitButton).eq(0).click()
        cy.get('body').should('contain', 'Successfully Updated')
        cy.get('.oxd-toast-close')
    }

    fillStatus(){
        cy.get(this.selectorList().ColumButton).eq(0).click({force: true})//se coloar um {force: true} dentro do click(), o elemento é 'clicado' msm com outro o sobrepondo
        cy.get(this.selectorList().fifthItemColum).click()
        cy.get(this.selectorList().ColumButton).eq(1).click({force: true})
        cy.get(this.selectorList().tirthItemColum).click()
        cy.get(this.selectorList().ColumButton).eq(2).click({force: true})
        cy.get(this.selectorList().seventhItemColum).click()
    }


}
export default MyInfoPage