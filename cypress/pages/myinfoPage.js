const Chance = require('chance')
var chance = new Chance()

class MyInfoPage {

    selectorList(){
        const selectors = {
            firstNameField: "[name='firstName']",
            middleNameField: "[name='middleName']",
            lastNameField: "[name='lastName']",
            genericField: ".oxd-input",
            dateCloseButton: ".--close",
            submitButton: "[type='submit']",
            ColumButton: "[tabindex='0']",
            fifthItemColum: '.oxd-select-dropdown > :nth-child(4)',
            tirthItemColum: '.oxd-select-dropdown > :nth-child(2)',
            seventhItemColum: '.oxd-select-dropdown > :nth-child(6)',
            employeeImage: ".employee-image",
            addImageButton: "[type='file']",
            contactsDetailButton: "[href='/web/index.php/pim/contactDetails/empNumber/7']",
            employeeInformation: ".oxd-input",
            emergencyButton: "[href='/web/index.php/pim/viewEmergencyContacts/empNumber/7']",
            addButton: ".oxd-button",
            editButton: ".bi-pencil-fill",
            trashButton: ".bi-trash",
            selector: ".bi-check",
            confirmaOrCancelButton: ".orangehrm-button-margin",
            selectorIcon: ".oxd-checkbox-input-icon",
            deleteButton: ".oxd-button--label-danger",
            dependentsButton:"[href='/web/index.php/pim/viewDependents/empNumber/7']",
            immigrationButton:"[href='/web/index.php/pim/viewImmigration/empNumber/7']",
            visaSelect: ".--label-right",
            commentEmployee: "[placeholder='Type Comments here']",
            jobButton: "[href='/web/index.php/pim/viewJobDetails/empNumber/7']",
            jobswrappes: ".oxd-input-group__label-wrapper",
            jobinformations: ".oxd-select-text-input",
            jobespecif: ".input-container-filename",
            salaryButtom: "[href='/web/index.php/pim/viewSalaryList/empNumber/7']",
            table: ".oxd-padding-cell",
            reportToButton: "[href='/web/index.php/pim/viewReportToDetails/empNumber/7']",
            title: ".orangehrm-main-title",
            qualificationButton: "[href='/web/index.php/pim/viewQualifications/empNumber/7']",
            commentQualit: ".oxd-textarea",
            cancelButton: ".oxd-button--ghost",
            membershipButton: "[href='/web/index.php/pim/viewMemberships/empNumber/7']",
            errorMessage: ".oxd-input-field-error-message",

        }
        return selectors
    }

    fillPersonalDetail(firstName, middleName, lastName){
        cy.get(this.selectorList().title).eq(0).should('contain', 'Personal Details')
        cy.get(this.selectorList().firstNameField).clear().type(firstName)
        cy.get(this.selectorList().middleNameField).clear().type(middleName)
        cy.get(this.selectorList().lastNameField).clear().type(lastName)
    }

    fillEmployeeDetail(employeeId, otherId, licenseNumber, expireDate){
        cy.get(this.selectorList().genericField).eq(4).clear().type(employeeId)
        cy.get(this.selectorList().genericField).eq(5).clear().type(otherId)
        cy.get(this.selectorList().genericField).eq(6).clear().type(licenseNumber)
        cy.get(this.selectorList().employeeInformation).eq(7).clear().type(expireDate)
        cy.get(this.selectorList().dateCloseButton).click()

    }

    saveForm(){
        cy.get(this.selectorList().submitButton).eq(0).click()
        cy.get('body').should('contain', 'Successfully Updated')
        cy.get('.oxd-toast-close')
    }

    fillStatus(){
        cy.get(this.selectorList().ColumButton).eq(0).click({force: true})
        cy.get(this.selectorList().fifthItemColum).click()
        cy.get(this.selectorList().ColumButton).eq(1).click({force: true})
        cy.get(this.selectorList().tirthItemColum).click()
        cy.get(this.selectorList().ColumButton).eq(2).click({force: true})
        cy.get(this.selectorList().seventhItemColum).click()
    }

    profilePhoto(){
        cy.get(this.selectorList().employeeImage).click()
        cy.get(this.selectorList().title).eq(0).should('contain', 'Change Profile Picture')
        cy.get(this.selectorList().addImageButton).selectFile('bean.jpeg', {force: true})
        cy.get(this.selectorList().submitButton).click()
        cy.get('body').should('contain', 'Successfully Updated')
    }

    contactDetails(){
        cy.get(this.selectorList().contactsDetailButton).click()
        cy.get(this.selectorList().title).eq(0).should('contain', 'Contact Details')
        cy.get(this.selectorList().employeeInformation).eq(1).clear().type(chance.street())
        cy.get(this.selectorList().employeeInformation).eq(2).clear().type(chance.street())
        cy.get(this.selectorList().employeeInformation).eq(3).clear().type(chance.city())
        cy.get(this.selectorList().employeeInformation).eq(4).clear().type(chance.state({ full: true }))
        cy.get(this.selectorList().employeeInformation).eq(5).clear().type(chance.natural({ min: 1, max: 10 }))
        cy.get(this.selectorList().ColumButton).click()
        cy.get(':nth-child(31)').click()
        cy.get(this.selectorList().employeeInformation).eq(6).clear().type(chance.phone())
        cy.get(this.selectorList().employeeInformation).eq(7).clear().type(chance.phone({ formatted: false }))
        cy.get(this.selectorList().employeeInformation).eq(8).clear().type(chance.phone({ formatted: false }))
        cy.get(this.selectorList().employeeInformation).eq(9).clear().type(chance.email({domain: 'example.com'}))
        cy.get(this.selectorList().employeeInformation).eq(10).clear().type(chance.email({domain: 'example.com'}))
        cy.get(this.selectorList().submitButton).click()
        cy.get('body').should('contain', 'Successfully Updated')
        cy.get('.oxd-toast-close')
    }

    emergencyContact(){
        cy.get(this.selectorList().emergencyButton).click()
        cy.get(this.selectorList().title).eq(0).should('contain', 'Assigned Emergency Contacts')
        cy.get(this.selectorList().addButton).eq(0).click()
        cy.get(this.selectorList().employeeInformation).eq(1).clear().type(chance.name())
        cy.get(this.selectorList().employeeInformation).eq(2).clear().type('Uncle')
        cy.get(this.selectorList().employeeInformation).eq(3).clear().type(chance.phone())
        cy.get(this.selectorList().employeeInformation).eq(4).clear().type(chance.phone({ formatted: false }))
        cy.get(this.selectorList().employeeInformation).eq(5).clear().type(chance.phone({ formatted: false }))
        cy.get(this.selectorList().submitButton).click()
        cy.get('body').should('contain', 'Successfully Saved')
        cy.get('.oxd-toast-close')
    }

    editEmergencyContacts(){
        cy.get(this.selectorList().editButton).eq(0).click()
        cy.wait(6000)
        cy.get(this.selectorList().employeeInformation).eq(3).clear().type(chance.phone())
        cy.get(this.selectorList().submitButton).click()
        cy.get('body').should('contain', 'Successfully Updated')
        cy.get('.oxd-toast-close') 
    }
    clickToDeleteEmergencyContacts(){
        cy.get(this.selectorList().trashButton).eq(1).click()
        cy.get(this.selectorList().confirmaOrCancelButton).eq(0).click()
        cy.get(this.selectorList().trashButton).eq(1).click()
        cy.get(this.selectorList().confirmaOrCancelButton).eq(1).click()
        cy.get('body').should('contain', 'Successfully Deleted')
        cy.get('.oxd-toast-close') 
    }
    selectToDeleteEmergencyContacts(){
        cy.get(this.selectorList().emergencyButton).click()
        cy.get(':nth-child(1) > .oxd-table-row > :nth-child(1) > .oxd-table-card-cell-checkbox > .oxd-checkbox-wrapper > label > .oxd-checkbox-input > .oxd-icon').click()
        cy.get(this.selectorList().deleteButton).click({force: true})
        cy.get(this.selectorList().confirmaOrCancelButton).eq(0).click()
        cy.get(this.selectorList().deleteButton).click({force: true})
        cy.get(this.selectorList().confirmaOrCancelButton).eq(1).click()
        cy.get('body').should('contain', 'Successfully Deleted')
        cy.get('.oxd-toast-close')
        cy.get(this.selectorList().addButton).eq(0).click()
        cy.get(this.selectorList().employeeInformation).eq(1).clear().type(chance.name())
        cy.get(this.selectorList().employeeInformation).eq(2).clear().type('Uncle')
        cy.get(this.selectorList().employeeInformation).eq(3).clear().type(chance.phone())
        cy.get(this.selectorList().employeeInformation).eq(4).clear().type(chance.phone({ formatted: false }))
        cy.get(this.selectorList().employeeInformation).eq(5).clear().type(chance.phone({ formatted: false }))
        cy.get(this.selectorList().submitButton).click()
        cy.get('body').should('contain', 'Successfully Saved')
        cy.get('.oxd-toast-close')
        cy.get(':nth-child(3) > .oxd-table > .oxd-table-header > .oxd-table-row > :nth-child(1) > .oxd-checkbox-wrapper > label > .oxd-checkbox-input > .oxd-icon').click()
        cy.get(this.selectorList().deleteButton).click({force: true})
        cy.get(this.selectorList().confirmaOrCancelButton).eq(0).click()
        cy.get(this.selectorList().deleteButton).click({force: true})
        cy.get(this.selectorList().confirmaOrCancelButton).eq(1).click()
        cy.get('body').should('contain', 'Successfully Deleted')
        cy.get('.oxd-toast-close')
    }
    dependentsWithBirthDay(){
        cy.get(this.selectorList().dependentsButton).click()
        cy.get(this.selectorList().title).eq(0).should('contain', 'Assigned Dependents')
        cy.get(this.selectorList().addButton).eq(0).click()
        cy.get(this.selectorList().employeeInformation).eq(1).clear().type(chance.name())
        cy.get(this.selectorList().ColumButton).click()
        cy.get('.oxd-select-dropdown > :nth-child(2)').click()
        cy.get(this.selectorList().employeeInformation).eq(2).click()
        cy.get('.--close').click()
        cy.get(this.selectorList().employeeInformation).eq(2).click()
        cy.get('.oxd-date-input-links > .--today').click()
        cy.get(this.selectorList().employeeInformation).eq(2).click()
        cy.get('.--clear').click()
        cy.get(this.selectorList().employeeInformation).eq(2).click()
        cy.get('.oxd-calendar-header > :nth-child(1) > .oxd-icon').click().click()
        cy.get(':nth-child(6) > .oxd-calendar-date').click()
        cy.get(this.selectorList().submitButton).click()
        cy.get('body').should('contain', 'Successfully Saved')
        cy.get('.oxd-toast-close')
    }

    dependentesWithNotBirthDay(){
        cy.get(this.selectorList().dependentsButton).click()
        cy.get(this.selectorList().addButton).eq(0).click()
        cy.get(this.selectorList().employeeInformation).eq(1).clear().type(chance.name())
        cy.get(this.selectorList().ColumButton).click()
        cy.get('.oxd-select-dropdown > :nth-child(3)').click()
        cy.get(this.selectorList().employeeInformation).eq(2).type('Cunhada')
        cy.get(this.selectorList().submitButton).click()
        cy.get('body').should('contain', 'Successfully Saved')
        cy.get('.oxd-toast-close')
    }
    editDependents(){
        cy.get(':nth-child(2) > .oxd-table-row > [style="flex: 0.5 1 0%;"] > .oxd-table-cell-actions > :nth-child(2)').click()//bug a ordem de novos adicionados n segue a fila
        cy.get(this.selectorList().employeeInformation).eq(2).click({force:true})
        cy.get('.oxd-calendar-selector-month-selected').click()
        cy.get('.oxd-calendar-dropdown > :nth-child(9)').click()
        cy.get('.oxd-calendar-selector-year-selected > .oxd-icon').click()
        cy.get(':nth-child(43)').click() //bug só é possivel mudar o ano e mes se mudar o dia.
        cy.get(':nth-child(6) > .oxd-calendar-date').click()
        cy.get(this.selectorList().submitButton).click()
        cy.get('body').should('contain', 'Successfully Updated')
        cy.get('.oxd-toast-close')
    }
    deletDependents(){
        cy.get(':nth-child(3) > .oxd-table > .oxd-table-header > .oxd-table-row > :nth-child(1) > .oxd-checkbox-wrapper > label > .oxd-checkbox-input > .oxd-icon').click()
        cy.get(this.selectorList().deleteButton).click({force: true})
        cy.get(this.selectorList().confirmaOrCancelButton).eq(0).click()
        cy.get(this.selectorList().deleteButton).click({force: true})
        cy.get(this.selectorList().confirmaOrCancelButton).eq(1).click()
        cy.get('body').should('contain', 'Successfully Deleted')
        cy.get('.oxd-toast-close')
    }
    immigrationPassaport(){
        cy.get(this.selectorList().immigrationButton).click()
        cy.get(this.selectorList().title).eq(0).should('contain', 'Assigned Immigration Records')
        cy.get(this.selectorList().addButton).eq(0).click()
        cy.get(this.selectorList().employeeInformation).eq(1).clear().type('36912')
        cy.get(this.selectorList().employeeInformation).eq(2).click()
        cy.get('.oxd-calendar-header > :nth-child(3) > .oxd-icon').click().click()
        cy.get(':nth-child(6) > .oxd-calendar-date').click()
        cy.get(this.selectorList().employeeInformation).eq(3).click()
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-date-wrapper > .oxd-date-input-calendar > .oxd-calendar-wrapper > .oxd-calendar-header > .oxd-calendar-selector > .oxd-calendar-selector-month > .oxd-calendar-selector-month-selected').click()
        cy.get('.oxd-calendar-dropdown > :nth-child(10)').click()
        cy.get('.oxd-calendar-selector-year-selected > .oxd-text').click()
        cy.get(':nth-child(52)').click()
        cy.get(':nth-child(12) > .oxd-calendar-date').click()
        cy.get(this.selectorList().employeeInformation).eq(4).type('Carteira')
        cy.get(this.selectorList().ColumButton).click()
        cy.get(':nth-child(31)').click()
        cy.get(this.selectorList().employeeInformation).eq(5).type('2026-12-03').click()
        cy.get(this.selectorList().submitButton).click()
        cy.get('body').should('contain', 'Successfully Saved')
        cy.get('.oxd-toast-close')
    }
    immigrationVisa(){
        cy.get(this.selectorList().immigrationButton).click()
        cy.get(this.selectorList().addButton).eq(0).click()
        cy.get(this.selectorList().visaSelect).eq(1).click()
        cy.get(this.selectorList().employeeInformation).eq(1).clear().type('12963')
        cy.get(this.selectorList().employeeInformation).eq(2).click()
        cy.get('.oxd-calendar-header > :nth-child(1) > .oxd-icon').click().click()
        cy.get(':nth-child(9) > .oxd-calendar-date').click()
        cy.get(this.selectorList().employeeInformation).eq(3).click()
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-date-wrapper > .oxd-date-input-calendar > .oxd-calendar-wrapper > .oxd-calendar-header > .oxd-calendar-selector > .oxd-calendar-selector-month > .oxd-calendar-selector-month-selected').click()
        cy.get('.oxd-calendar-dropdown > :nth-child(10)').click()
        cy.get('.oxd-calendar-selector-year-selected > .oxd-text').click()
        cy.get(':nth-child(51)').click()
        cy.get(':nth-child(12) > .oxd-calendar-date').click()
        cy.get(this.selectorList().employeeInformation).eq(4).type('Papel')
        cy.get(this.selectorList().ColumButton).click()
        cy.get(':nth-child(31)').click()
        cy.get(this.selectorList().employeeInformation).eq(5).type('2026-09-03').click()
        cy.get(this.selectorList().commentEmployee).type('Blablablablablablablablablablabla')
        cy.get(this.selectorList().submitButton).click()
        cy.get('body').should('contain', 'Successfully Saved')
        cy.get('.oxd-toast-close')
        
    }
    immigrationEdit(){
        cy.wait(6000)
        cy.get(this.selectorList().editButton).eq(0).click()
        cy.get(this.selectorList().visaSelect).eq(0).click()
        cy.wait(6000)
        cy.get(this.selectorList().submitButton).should('be.visible').click()
        cy.get('body').should('contain', 'Successfully Updated')
        cy.get('.oxd-toast-close')
    }
    immigrationDelete(){
        cy.get(':nth-child(2) > .oxd-table-row > :nth-child(7) > .oxd-table-cell-actions > :nth-child(1)').click()
        cy.wait(6000)
        cy.get(this.selectorList().confirmaOrCancelButton).eq(0).click()
        cy.get(':nth-child(2) > .oxd-table-row > :nth-child(7) > .oxd-table-cell-actions > :nth-child(1)').click()
        cy.get(this.selectorList().confirmaOrCancelButton).eq(1).click()
        cy.get('body').should('contain', 'Successfully Deleted')
        cy.get('.oxd-toast-close')
        cy.get(':nth-child(3) > .oxd-table > .oxd-table-header > .oxd-table-row > :nth-child(1) > .oxd-checkbox-wrapper > label > .oxd-checkbox-input > .oxd-icon').click()
        cy.get(this.selectorList().deleteButton).click({force: true})
        cy.get(this.selectorList().confirmaOrCancelButton).eq(0).click()
        cy.get(this.selectorList().deleteButton).click({force: true})
        cy.get(this.selectorList().confirmaOrCancelButton).eq(1).click()
        cy.get('body').should('contain', 'Successfully Deleted')
        cy.get('.oxd-toast-close') 
    }
    jobElements(){
        cy.get(this.selectorList().jobButton).click()
        cy.get(this.selectorList().title).eq(0).should('contain', 'Job Details')
        for(let i = 0; i < 7; i++){
            cy.get(this.selectorList().jobswrappes).eq(i).should('be.visible')
        }
        cy.get(this.selectorList().employeeInformation).should('be.visible')
        for(let i=0; i<5; i++){
            cy.get(this.selectorList().jobinformations).eq(i).should('be.visible')
        }
        cy.get(this.selectorList().jobespecif).should('be.visible')

        
    }
    salaryElementsNull(){
        cy.get(this.selectorList().salaryButtom).click()
        cy.get(this.selectorList().title).eq(0).should('contain', 'Assigned Salary Components')
        for(let i=0; i<12; i++){
            cy.get(this.selectorList().table).should('be.visible')
        }
    }
    reportToNull(){
        cy.get(this.selectorList().reportToButton).click()
        cy.get(this.selectorList().title).eq(0).should('contain', 'Report to')
        for(let i=0;i<11;i++){
            cy.get(this.selectorList().table).should('be.visible')
        }

    }
    qualificationWork(){
        cy.get(this.selectorList().qualificationButton).click()
        cy.get(this.selectorList().title).eq(0).should('contain', 'Qualifications')
        cy.get(this.selectorList().title).eq(1).should('contain', 'Work Experience')
        cy.get(this.selectorList().addButton).eq(0).click()
        cy.get(this.selectorList().employeeInformation).eq(1).type('Yoki')
        cy.get(this.selectorList().employeeInformation).eq(2).type('Farofeiro')
        cy.get(this.selectorList().employeeInformation).eq(3).type('2019-02-01')
        cy.get('.--close').click()
        cy.get(this.selectorList().employeeInformation).eq(4).type('2022-01-01')
        cy.get('.--close').click()
        cy.get(this.selectorList().commentQualit).clear().type('Me entupia de farofa')
        cy.get(this.selectorList().cancelButton).click()
        cy.get(this.selectorList().qualificationButton).click()
        cy.get(this.selectorList().title).eq(0).should('contain', 'Qualifications')
        cy.get(this.selectorList().addButton).eq(0).click()
        cy.get(this.selectorList().employeeInformation).eq(1).type('Yoki')
        cy.get(this.selectorList().employeeInformation).eq(2).type('Farofeiro')
        cy.get(this.selectorList().employeeInformation).eq(3).type('2019-02-01')
        cy.get('.--close').click()
        cy.get(this.selectorList().employeeInformation).eq(4).type('2022-01-01')
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-date-wrapper > .oxd-date-input-calendar > .oxd-calendar-wrapper > :nth-child(4) > .oxd-date-input-links > .--close').click()
        cy.get(this.selectorList().commentQualit).clear().type('Me entupia de farofa')
        cy.get(this.selectorList().submitButton).click()
        cy.get('body').should('contain', 'Successfully Saved')
        cy.get('.oxd-toast-close')
    }
    editQualitWork(){
        cy.get(':nth-child(2) > .orangehrm-container > .oxd-table > .oxd-table-body > :nth-child(1) > .oxd-table-row > [style="flex-basis: 10em;"] > .oxd-table-cell-actions > :nth-child(2)').click()
        cy.get(this.selectorList().commentQualit).clear().type('era uma delicia')
        cy.get(this.selectorList().submitButton).click()
        cy.get('body').should('contain', 'Successfully Updated')
        cy.get('.oxd-toast-close')
    }
    deleteQualitWork(){
        cy.get(':nth-child(2) > .orangehrm-container > .oxd-table > .oxd-table-body > :nth-child(1) > .oxd-table-row > [style="flex-basis: 10em;"] > .oxd-table-cell-actions > :nth-child(1)').click()
        cy.get(this.selectorList().confirmaOrCancelButton).eq(0).click()
        cy.get(this.selectorList().trashButton).eq(0).click()
        cy.get(this.selectorList().confirmaOrCancelButton).eq(1).click()
        cy.get('body').should('contain', 'Successfully Deleted')
        cy.get('.oxd-toast-close')
    }

    qualificationEducation(){
        cy.get(this.selectorList().title).eq(2).should('contain', 'Education')
        cy.get(this.selectorList().addButton).eq(1).click()
        cy.get(this.selectorList().ColumButton).click()
        cy.get(':nth-child(5) > span').click()
        cy.get(this.selectorList().employeeInformation).eq(1).type('UTFPR')
        cy.get(this.selectorList().employeeInformation).eq(2).type('Farofa')
        cy.get(this.selectorList().employeeInformation).eq(3).type('4')
        cy.get(this.selectorList().employeeInformation).eq(4).type('88')
        cy.get(this.selectorList().employeeInformation).eq(5).type('2005-09-03')
        cy.get('.--close').click({force:true})
        cy.get(this.selectorList().employeeInformation).eq(6).type('2022-09-03')
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-date-wrapper > .oxd-date-input-calendar > .oxd-calendar-wrapper > :nth-child(4) > .oxd-date-input-links > .--close').click()
        cy.get(this.selectorList().submitButton).click()
        cy.get('body').should('contain', 'Successfully Saved')
        cy.get('.oxd-toast-close')
    }
    editQualiEducation(){
        cy.get(':nth-child(3) > .orangehrm-container > .oxd-table > .oxd-table-body > :nth-child(1) > .oxd-table-row > [style="flex-basis: 10em;"] > .oxd-table-cell-actions > :nth-child(2)').click()
        cy.wait(6000)
        cy.get(this.selectorList().employeeInformation).eq(4).clear().type('90')
        cy.get(this.selectorList().employeeInformation).eq(5).clear().type('2007-09-03')
        cy.get(this.selectorList().submitButton).should('be.visible').click()
        cy.get('body').should('contain', 'Successfully Updated')
        cy.get('.oxd-toast-close')
    }
    deleteQualiEducation(){ //Bug não possível apagar nada criado em Educacao
        cy.get(':nth-child(3) > .orangehrm-container > .oxd-table > .oxd-table-body > :nth-child(1) > .oxd-table-row > [style="flex-basis: 10em;"] > .oxd-table-cell-actions > :nth-child(1)').click()
        cy.get(this.selectorList().confirmaOrCancelButton).eq(0).click()
        cy.get(this.selectorList().trashButton).eq(1).click()
        cy.get(this.selectorList().confirmaOrCancelButton).eq(1).click()
        cy.get('body').should('contain', 'Successfully Deleted')
        cy.get('.oxd-toast-close')
        cy.get(':nth-child(3) > .orangehrm-container > .oxd-table > .oxd-table-header > .oxd-table-row > :nth-child(1) > .oxd-checkbox-wrapper > label').click({force:true})
        cy.wait(6000)
        cy.get(this.selectorList().deleteButton).click({force: true})
        cy.get(this.selectorList().confirmaOrCancelButton).eq(0).click()
        cy.get(this.selectorList().deleteButton).click({force: true})
        cy.get(this.selectorList().confirmaOrCancelButton).eq(1).click()
        cy.get('body').should('contain', 'Successfully Deleted')
        cy.get('.oxd-toast-close')
    }
    qualificationSkills(){
        cy.get(this.selectorList().title).eq(3).should('contain', 'Skills')
        cy.get(this.selectorList().addButton).eq(2).click()
        cy.get(this.selectorList().ColumButton).click({force:true})
        cy.get(':nth-child(7) > span').click()
        cy.get(this.selectorList().employeeInformation).eq(1).type('5')
        cy.get(this.selectorList().submitButton).click()
        cy.get('body').should('contain', 'Successfully Saved')
        cy.get('.oxd-toast-close')
    }
    editQualiSkills(){
        cy.get(':nth-child(4) > .orangehrm-container > .oxd-table > .oxd-table-body > :nth-child(1) > .oxd-table-row > [style="flex-basis: 10em;"] > .oxd-table-cell-actions > :nth-child(2)').click()
        cy.get(this.selectorList().commentQualit).type('tec tec tec')
        cy.get(this.selectorList().submitButton).should('be.visible').click({force:true})
        cy.get('body').should('contain', 'Successfully Updated')
        cy.get('.oxd-toast-close')
    }
    deletQualiSkills(){
            cy.get(this.selectorList().trashButton).eq(1).click({force:true})
            cy.get(this.selectorList().confirmaOrCancelButton).eq(1).click()
            cy.get('body').should('contain', 'Successfully Deleted')
            cy.get('.oxd-toast-close')
        
    }
    qualificationLanguages(){
        cy.get(this.selectorList().title).eq(4).should('contain', 'Languages')
        cy.get(this.selectorList().addButton).eq(3).click()
        cy.get(this.selectorList().ColumButton).eq(0).click()
        cy.get('.oxd-select-dropdown > :nth-child(4)').click()
        cy.get(this.selectorList().ColumButton).eq(1).click()
        cy.get('.oxd-select-dropdown > :nth-child(2)').click()
        cy.get(this.selectorList().ColumButton).eq(2).click()
        cy.get('.oxd-select-dropdown > :nth-child(4)').click()
        cy.get(this.selectorList().commentQualit).type("Eu manjo po")
        cy.get(this.selectorList().submitButton).click()
        cy.get('body').should('contain', 'Successfully Saved')
        cy.get('.oxd-toast-close')
    }
    editQualiLanguages(){
        cy.get(':nth-child(5) > .orangehrm-container > .oxd-table > .oxd-table-body > :nth-child(1) > .oxd-table-row > [style="flex-basis: 10em;"] > .oxd-table-cell-actions > :nth-child(2)').click()
        cy.wait(6000)
        cy.get(this.selectorList().ColumButton).eq(0).click()
        cy.get('.oxd-select-dropdown > :nth-child(2)').click()
        cy.get(this.selectorList().submitButton).should('be.visible').click()
        cy.get('body').should('contain', 'Successfully Updated')
        cy.get('.oxd-toast-close')
    }
    deleteQualiLanguages(){
        cy.get(this.selectorList().trashButton).eq(1).click({force:true})
        cy.get(this.selectorList().confirmaOrCancelButton).eq(1).click()
        cy.get('body').should('contain', 'Successfully Deleted')
        cy.get('.oxd-toast-close')
    }
    qualificationLicense(){
        cy.get(this.selectorList().title).eq(5).should('contain', 'License')
        cy.get(this.selectorList().addButton).eq(4).click()
        cy.get(this.selectorList().ColumButton).eq(0).click()
        cy.get(':nth-child(6) > span').click()
        cy.get(this.selectorList().employeeInformation).eq(1).type('3699')
        cy.get(this.selectorList().employeeInformation).eq(2).type('2020-09-06')
        cy.get(this.selectorList().employeeInformation).eq(3).type('2024-09-06')
        cy.get(this.selectorList().submitButton).click()
        cy.get('body').should('contain', 'Successfully Saved')
        cy.get('.oxd-toast-close')
    }
    editQualiLicense(){
        cy.get(':nth-child(6) > .orangehrm-container > .oxd-table > .oxd-table-body > .oxd-table-card > .oxd-table-row > [style="flex-basis: 10em;"] > .oxd-table-cell-actions > :nth-child(2)').click({force:true})
        cy.wait(6000)
        cy.get(this.selectorList().employeeInformation).eq(2).type('6699')
        cy.get(this.selectorList().submitButton).click()
        cy.get('body').should('contain', 'Successfully Updated')
        cy.get('.oxd-toast-close')
    }
    deleteQualiLicense(){
        cy.get(this.selectorList().trashButton).eq(1).click({force:true})
        cy.get(this.selectorList().confirmaOrCancelButton).eq(1).click()
        cy.get('body').should('contain', 'Successfully Deleted')
        cy.get('.oxd-toast-close')
    }
    membership(){
        cy.get(this.selectorList().membershipButton).click()
        cy.get(this.selectorList().title).eq(0).should('contain', 'Assigned Memberships')
        cy.get(this.selectorList().addButton).eq(0).click()
        cy.get(this.selectorList().ColumButton).eq(0).click()
        cy.get('.oxd-select-dropdown > :nth-child(5)').click()
        cy.get(this.selectorList().ColumButton).eq(1).click()
        cy.get('.oxd-select-dropdown > :nth-child(2)').click()
        cy.get(this.selectorList().employeeInformation).eq(1).type('12345')
        cy.get(this.selectorList().ColumButton).eq(2).click()
        cy.get(':nth-child(5) > span').click()
        cy.get(this.selectorList().employeeInformation).eq(2).type('2000-08-12')
        cy.get(this.selectorList().employeeInformation).eq(3).type('2020-08-12')
        cy.get(this.selectorList().submitButton).click({force:true})
        cy.get('body').should('contain', 'Successfully Saved')
        cy.get('.oxd-toast-close')
    }
    editMembership(){
        cy.get(this.selectorList().editButton).eq(0).click({force:true})
        cy.wait(5500)
        cy.get(this.selectorList().ColumButton).eq(2).click()
        cy.get(':nth-child(10) > span').click()
        cy.get(this.selectorList().ColumButton).eq(1).click()
        cy.get('.oxd-select-dropdown > :nth-child(1)').click()
        cy.get(this.selectorList().submitButton).click({force:true})
        cy.get('body').should('contain', 'Successfully Updated')
        cy.get('.oxd-toast-close')
    }
    deleteMembership(){
        cy.get(this.selectorList().membershipButton).click()
        cy.get(this.selectorList().selector).eq(1).click()
        cy.get(this.selectorList().deleteButton).should('be.visible').click()
        cy.get(this.selectorList().confirmaOrCancelButton).eq(1).click()
        cy.get('body').should('contain', 'Successfully Deleted')
        cy.get('.oxd-toast-close')
    }
    attachments(){
        cy.get(this.selectorList().membershipButton).click()
        cy.get(this.selectorList().title).eq(1).should('contain', 'Attachments')
        cy.get(this.selectorList().addButton).eq(1).click()
        cy.get(this.selectorList().addImageButton).selectFile('carro.jpeg', {force:true})
        cy.get(this.selectorList().submitButton).click()
        cy.get('body').should('contain', 'Successfully Saved')
        cy.get('.oxd-toast-close')
    }
    editAttachments(){
        cy.get(this.selectorList().membershipButton).click()
        cy.get(this.selectorList().editButton).eq(0).click()
        cy.get(this.selectorList().addImageButton).selectFile('urso.jpeg', {force:true})
        cy.get(this.selectorList().commentQualit).type('melhor amigo')
        cy.get(this.selectorList().submitButton).click()
        cy.get('body').should('contain', 'Successfully Updated')
        cy.get('.oxd-toast-close')
    }
    deletAttachments(){
        cy.get(this.selectorList().membershipButton).click()
        cy.get(this.selectorList().trashButton).eq(0).click()
        cy.get(this.selectorList().confirmaOrCancelButton).eq(1).click()
        cy.get('body').should('contain', 'Successfully Deleted')
        cy.get('.oxd-toast-close')
    }

    //Fail

    failFillPersonalDetail(){
        cy.get(this.selectorList().title).eq(0).should('contain', 'Personal Details')
        cy.get(this.selectorList().firstNameField).clear()
        cy.get(this.selectorList().middleNameField).clear()
        cy.get(this.selectorList().lastNameField).clear()
        cy.get(this.selectorList().errorMessage).eq(0).should('contain', 'Required')
        cy.get(this.selectorList().errorMessage).eq(1).should('contain', 'Required')
        cy.get(this.selectorList().firstNameField).clear().type('asdjfhasaskjhfasjfhhqskjfqpiwASDQdasa123')
        cy.get(this.selectorList().middleNameField).clear().type('asdjfhasaskjhfasjfhhqskjfqpiwASDQdasa123')
        cy.get(this.selectorList().lastNameField).clear().type('asdjfhasaskjhfasjfhhqskjfqpiwASDQdasa123')
        for(let i = 0; i < 3; i++){
            cy.get(this.selectorList().errorMessage).eq(i).should('contain', 'Should not exceed 30 characters')
        }
    }
    failFillEmployeeDetail(){
        cy.get(this.selectorList().genericField).eq(4).clear().type('ajksd1234817-1')
        cy.get(this.selectorList().genericField).eq(5).clear().type('7120947198412983471123481231235124')
        cy.get(this.selectorList().genericField).eq(6).clear().type('7120947198412983471123481231235124')
        cy.get(this.selectorList().employeeInformation).eq(7).clear().type('askljfaudhfaf')
        cy.get(this.selectorList().dateCloseButton).click()
        cy.get(this.selectorList().employeeInformation).eq(8).clear().type('aslkf8apsodfha')
        cy.get(this.selectorList().dateCloseButton).click()
        cy.get(this.selectorList().errorMessage).eq(3).should('contain', 'Should not exceed 10 characters')
        cy.get(this.selectorList().errorMessage).eq(4).should('contain', 'Should not exceed 30 characters')
        cy.get(this.selectorList().errorMessage).eq(5).should('contain', 'Should not exceed 30 characters')
        cy.get(this.selectorList().errorMessage).eq(6).should('contain', 'Should be a valid date in yyyy-dd-mm format')
        cy.get(this.selectorList().errorMessage).eq(6).should('contain', 'Should be a valid date in yyyy-dd-mm format')
        cy.get(this.selectorList().submitButton).eq(0).click({force:true})
        cy.get(this.selectorList().errorMessage).eq(3).should('contain', 'Should not exceed 10 characters')
    }
    failProfilePhoto(){
        cy.get(this.selectorList().employeeImage).click()
        cy.get(this.selectorList().title).eq(0).should('contain', 'Change Profile Picture')
        cy.get(this.selectorList().submitButton).click()
        cy.get(this.selectorList().errorMessage).should('contain', 'Required')
    }
    failContactDetails(){
        cy.get(this.selectorList().contactsDetailButton).click()
        cy.get(this.selectorList().title).eq(0).should('contain', 'Contact Details')
        cy.get(this.selectorList().employeeInformation).eq(1).clear().type('GDFalshffdaksjghfakjshfajklsdhfalkjsdfhaksjhfalsjkdhfaskldjhflaskh12908')
        cy.get(this.selectorList().employeeInformation).eq(2).clear().type('asdfgalksjhfaeshflkashdflkahsdlfkahsdflkahsdflkjashdfkjahfljashdfjashdf')
        cy.get(this.selectorList().employeeInformation).eq(3).clear().type('ksdfgalsfhaksghfaksjdhfaksjhfaksjdhfasjdfhasdjfhlasjfhalsdkjfhalsjkfhaaa')
        cy.get(this.selectorList().employeeInformation).eq(4).clear().type('ALSh913-sdofhafiancjásodirhjfjas~dfkjaapsduabsdkjfowiefhvbásdiufvbasdisewr')
        cy.get(this.selectorList().employeeInformation).eq(5).clear().type('asdfasd123v')
        for(let i=1;i<4;i++){
            cy.get(this.selectorList().errorMessage).eq(i).should('contain', 'Should not exceed 70 characters')
        }
        cy.get(this.selectorList().employeeInformation).eq(6).clear().type('adc')
        cy.get(this.selectorList().employeeInformation).eq(7).clear().type('def')
        cy.get(this.selectorList().employeeInformation).eq(8).clear().type('ghi')
        for(let i=6;i<8;i++){
            cy.get(this.selectorList().errorMessage).eq(i).should('contain', 'Allows numbers and only + - / ( )')
        }
        cy.get(this.selectorList().employeeInformation).eq(6).clear().type('12341234123412412341234125')
        cy.get(this.selectorList().employeeInformation).eq(7).clear().type('12341234123412412341234125')
        cy.get(this.selectorList().employeeInformation).eq(8).clear().type('12341234123412412341234125')
        for(let i=6;i<8;i++){
            cy.get(this.selectorList().errorMessage).eq(i).should('contain', 'Should not exceed 25 characters')
        }
        cy.get(this.selectorList().employeeInformation).eq(9).clear().type('alskfas#@askjasd')
        cy.get(this.selectorList().employeeInformation).eq(10).clear().type('alskfas#@askjasd')
        cy.get(this.selectorList().errorMessage).eq(8).should('contain', 'Expected format: admin@example.com')
        //cy.get(this.selectorList().errorMessage).eq(9).should('contain', 'Expected format: admin@example.com') bug a mensagem de erro some algo preencher o outro email
        cy.get(this.selectorList().employeeInformation).eq(9).clear().type('admin@example.com')
        cy.get(this.selectorList().employeeInformation).eq(10).clear().type('admin@example.com')
        cy.get(this.selectorList().errorMessage).eq(8).should('contain', 'Work Email and Other Email cannot be the same')
        cy.get(this.selectorList().submitButton).click()
        cy.get(this.selectorList().errorMessage).eq(8).should('contain', 'Work Email and Other Email cannot be the same')
        cy.get(this.selectorList().errorMessage).eq(9).should('contain', 'Work Email and Other Email cannot be the same')
    }
    failEmergencyContact(){
        cy.get(this.selectorList().emergencyButton).click()
        cy.get(this.selectorList().title).eq(0).should('contain', 'Assigned Emergency Contacts')
        cy.get(this.selectorList().addButton).eq(0).click()
        cy.get(this.selectorList().submitButton).click()
        cy.get(this.selectorList().errorMessage).eq(0).should('contain', 'Required')
        cy.get(this.selectorList().errorMessage).eq(1).should('contain', 'Required')
        cy.get(this.selectorList().errorMessage).eq(2).should('contain', 'At least one phone number is required')
        cy.get(this.selectorList().employeeInformation).eq(1).clear().type('skdjfhaskljfhaskljhfalksjfhasdkjfhalskjhflaskjdfhalskdjfhalksjdfhalkjsdhflaksjdfhalskjhfalskjdhfalk#3')
        cy.get(this.selectorList().employeeInformation).eq(2).clear().type('askdfhaslkjdfhaskjhfakjshdfakljshflakjshflaksjdhflakjshflakjshf293y4rsdhfasjdhfalksjdhfalskjdfhlaskass')
        cy.get(this.selectorList().errorMessage).eq(0).should('contain', 'Should not exceed 100 characters')
        cy.get(this.selectorList().errorMessage).eq(1).should('contain', 'Should not exceed 100 characters')
        cy.get(this.selectorList().employeeInformation).eq(3).clear().type('fds')
        cy.get(this.selectorList().employeeInformation).eq(4).clear().type('tmnr')
        cy.get(this.selectorList().employeeInformation).eq(5).clear().type('ppdh')
        for(let i=2;i<5;i++){
            cy.get(this.selectorList().errorMessage).eq(i).should('contain', 'Allows numbers and only + - / ( )')
        }
        cy.get(this.selectorList().employeeInformation).eq(3).clear().type('1234123412341234534123412341211')
        cy.get(this.selectorList().employeeInformation).eq(4).clear().type('8917290481273487123481264123413')
        cy.get(this.selectorList().employeeInformation).eq(5).clear().type('8917290481273487123481264123413')
        for(let i=2;i<5;i++){
            cy.get(this.selectorList().errorMessage).eq(i).should('contain', 'Should not exceed 30 characters')
        }
    }
    failDependents(){
        cy.get(this.selectorList().dependentsButton).click()
        cy.get(this.selectorList().title).eq(0).should('contain', 'Assigned Dependents')
        cy.get(this.selectorList().addButton).eq(0).click()
        cy.get(this.selectorList().submitButton).click()
        cy.get(this.selectorList().errorMessage).eq(0).should('contain', 'Required')
        cy.get(this.selectorList().errorMessage).eq(1).should('contain', 'Required')
        cy.get(this.selectorList().employeeInformation).eq(1).clear().type('jasdhklajhsdlfjkahskjfha123&&$LDJHAKJFAHKJASJDJDJDJDAPOFUHASJDHF9ERPSDOFHHVHASDJHFAPOUHAFLSDHFAÇLSDKF')
        cy.get(this.selectorList().errorMessage).eq(0).should('contain', 'Should not exceed 100 characters')
        cy.get(this.selectorList().ColumButton).click()
        cy.get('.oxd-select-dropdown > :nth-child(3)').click()
        cy.get(this.selectorList().submitButton).click()
        cy.get(this.selectorList().errorMessage).eq(1).should('contain', 'Required')
        cy.get(this.selectorList().employeeInformation).eq(2).type('123ASKDJHFASJKHFAIUHASJHFA9UFPAUSHDFPAUSYFPUAYSPUFHAPSDUFYASUDHFA9UYFPAUSUHVAUSYDFPASDYHPAIUYSDFAHSPD')
        cy.get(this.selectorList().errorMessage).eq(1).should('contain', 'Should not exceed 100 characters')
        cy.get(this.selectorList().employeeInformation).eq(3).type('agrsd')
        cy.get('.orangehrm-full-width-grid').eq(1).click()
        cy.get(this.selectorList().errorMessage).eq(2).should('contain', 'Should be a valid date in yyyy-dd-mm format')
    }
    failImmigration(){
        cy.get(this.selectorList().immigrationButton).click()
        cy.get(this.selectorList().title).eq(0).should('contain', 'Assigned Immigration Records')
        cy.get(this.selectorList().addButton).eq(0).click()
        cy.get(this.selectorList().submitButton).click()
        cy.get(this.selectorList().errorMessage).eq(0).should('contain', 'Required')
        cy.get(this.selectorList().employeeInformation).eq(1).type('123qwhsjaf123jqshdf23hfhfaq431j')
        cy.get(this.selectorList().employeeInformation).eq(2).type('a')
        cy.get(this.selectorList().employeeInformation).eq(3).type('b')
        cy.get(this.selectorList().employeeInformation).eq(4).type('asdsdasdfklajshfklajsgflkajshflkjahsflkjashfas')
        cy.get(this.selectorList().employeeInformation).eq(5).type('c')
        cy.get(this.selectorList().commentEmployee).type('asdlfiaskj df hal jkshdfakljhsdflkajhfkjahsldfjkhalksdjfhalksjhflakjshflaksjhdflkajshflasyhfiquyfjahsdfhaufhqjbdafjkhsldkjfhqoiuhflakjsdhflakjhfoqiwuhflaksjdhfalkjshflakjshflakjshflajshflajshfljahslfjkhasljkfhalskjfhq9pw8ashdgfasgdfkajhgsfkjahsgfqywdf')
        cy.get(this.selectorList().errorMessage).eq(0).should('contain','Should not exceed 30 characters')
        cy.get(this.selectorList().errorMessage).eq(1).should('contain','Should be a valid date in yyyy-dd-mm format')
        cy.get(this.selectorList().errorMessage).eq(2).should('contain','Should be a valid date in yyyy-dd-mm format')
        cy.get(this.selectorList().errorMessage).eq(3).should('contain','Should not exceed 30 characters')
        cy.get(this.selectorList().errorMessage).eq(4).should('contain','Should be a valid date in yyyy-dd-mm format')
        cy.get(this.selectorList().errorMessage).eq(5).should('contain','Should not exceed 250 characters')
        cy.get(this.selectorList().employeeInformation).eq(2).clear().type('2021-08-09')
        cy.get(this.selectorList().employeeInformation).eq(3).clear().type('2021-08-09')
        cy.get(this.selectorList().submitButton).click()
        cy.get(this.selectorList().errorMessage).eq(1).should('contain','Expiry date should be after issued date')
    }
    failQualificationWork(){
        cy.get(this.selectorList().qualificationButton).click()
        cy.get(this.selectorList().title).eq(0).should('contain', 'Qualifications')
        cy.get(this.selectorList().title).eq(1).should('contain', 'Work Experience')
        cy.get(this.selectorList().addButton).eq(0).click()
        cy.get(this.selectorList().submitButton).click()
        cy.get(this.selectorList().errorMessage).eq(0).should('contain', 'Required')
        cy.get(this.selectorList().errorMessage).eq(1).should('contain', 'Required')
        cy.get(this.selectorList().employeeInformation).eq(1).type('asdklhjfasjklhgfashigfkajshdgfkjahsgdfkjashdgfkjahsdgfjkashdfgkajshdfgkasjdhfgaksjdhfgaksjdhfgaksjhadf')
        cy.get(this.selectorList().employeeInformation).eq(2).type('oaisudga12348wftsdfuih0du8chcasduifyasdfhasiuf209uf9dfhgasduhfapsudyfapsodhfpasudhvapsudhfplwdhpasudd')
        cy.get(this.selectorList().employeeInformation).eq(3).type('a')
        cy.get(this.selectorList().employeeInformation).eq(4).type('a')
        cy.get(this.selectorList().submitButton).click()
        cy.get(this.selectorList().commentQualit).clear().type('ahlfakjshfoqiudhfpoaiusdhfakjshfqiwduhfalsjdhfqiuwhflaksjdhfalksjdhfqopiuwhfaklsjdhfalksdjfhqpiwuhfalksjdfhqoidhfalksjdhfalkjsdhfalkjshdflakjshdflkajshdflkjahsfuqiowyfoiuqwtyruiqwhfkjsbv,m\zxcbvlkajdfasd')
        cy.get(this.selectorList().errorMessage).eq(0).should('contain', 'Should not exceed 100 characters')
        cy.get(this.selectorList().errorMessage).eq(1).should('contain', 'Should not exceed 100 characters')
        cy.get(this.selectorList().errorMessage).eq(2).should('contain', 'Should be a valid date in yyyy-dd-mm format')
        cy.get(this.selectorList().errorMessage).eq(3).should('contain', 'Should be a valid date in yyyy-dd-mm format')
        cy.get(this.selectorList().errorMessage).eq(4).should('contain', 'Should not exceed 200 characters')
        cy.get(this.selectorList().employeeInformation).eq(3).clear().type('2025-08-04')
        cy.get(this.selectorList().employeeInformation).eq(4).clear().type('2024-08-04')
        cy.get(this.selectorList().submitButton).click()
        cy.get(this.selectorList().errorMessage).eq(2).should('contain', 'To date should be after from date')
    }
    failQualificationEducation(){
        cy.get(this.selectorList().qualificationButton).click()
        cy.get(this.selectorList().title).eq(2).should('contain', 'Education')
        cy.get(this.selectorList().addButton).eq(1).click()
        cy.get(this.selectorList().submitButton).click()
        cy.get(this.selectorList().errorMessage).eq(0).should('contain', 'Required')
        cy.get(this.selectorList().employeeInformation).eq(1).type('asdfa1234dsfaafakhsflahgslfkjahfjahkdjfhalkdjfhalskjdfhqoiufhlkjdfhasfh2uhf0p9asduhfalskjdfhqpwiuf0q9')
        cy.get(this.selectorList().employeeInformation).eq(2).type('faosudyfhuwh fjkhksjdbfas91283740198yrsduifgaosidgfaosidgfaklsjhdfqiuhpkasjdhfqiuhfalskdjfhqpidufhala')
        cy.get(this.selectorList().employeeInformation).eq(3).type('a')
        cy.get(this.selectorList().employeeInformation).eq(4).type('23412341asodhfasjgfhaosjdf')
        cy.get(this.selectorList().employeeInformation).eq(5).type('a')
        cy.get(this.selectorList().employeeInformation).eq(6).type('a')
        cy.get(this.selectorList().submitButton).click()
        cy.get(this.selectorList().errorMessage).eq(1).should('contain', 'Should not exceed 100 characters')
        cy.get(this.selectorList().errorMessage).eq(2).should('contain', 'Should not exceed 100 characters')
        cy.get(this.selectorList().errorMessage).eq(3).should('contain', 'Should be a number')
        cy.get(this.selectorList().errorMessage).eq(4).should('contain', 'Should not exceed 25 characters')
        cy.get(this.selectorList().errorMessage).eq(5).should('contain', 'Should be a valid date in yyyy-dd-mm format')
        cy.get(this.selectorList().errorMessage).eq(6).should('contain', 'Should be a valid date in yyyy-dd-mm format')
        cy.get(this.selectorList().employeeInformation).eq(3).type('19844')
        cy.get(this.selectorList().errorMessage).eq(3).should('contain', 'Should not exceed 4 characters')
        cy.get(this.selectorList().employeeInformation).eq(5).clear().type('2025-08-04')
        cy.get(this.selectorList().employeeInformation).eq(6).clear().type('2015-08-04')
        cy.get(this.selectorList().submitButton).click()
        cy.get(this.selectorList().errorMessage).eq(5).should('contain', 'End date should be after Start date')
    }
    failQualificationSkills(){
        cy.get(this.selectorList().qualificationButton).click()
        cy.get(this.selectorList().title).eq(3).should('contain', 'Skills')
        cy.get(this.selectorList().addButton).eq(2).click()
        cy.get(this.selectorList().submitButton).click()
        cy.get(this.selectorList().errorMessage).eq(0).should('contain', 'Required')
        cy.get(this.selectorList().employeeInformation).eq(1).type('a')
        cy.get(this.selectorList().errorMessage).eq(1).should('contain', 'Should be a number')
        cy.get(this.selectorList().employeeInformation).eq(1).clear().type('101')
        cy.get(this.selectorList().errorMessage).eq(1).should('contain', 'Should be less than 100')
        cy.get(this.selectorList().commentQualit).type('sdfas241%¨$#fasjkdfhaskjfhapsfhaslhfashfajkshfkljahslfkahsjfhpquytqiowurqiowurahjsváoishdjaxcmnvalasdf')
        cy.get(this.selectorList().errorMessage).eq(2).should('contain', 'Should not exceed 100 characters')
    }
    failQualificationLanguages(){
        cy.get(this.selectorList().qualificationButton).click()
        cy.get(this.selectorList().title).eq(4).should('contain', 'Languages')
        cy.get(this.selectorList().addButton).eq(3).click()
        cy.get(this.selectorList().submitButton).click()
        cy.get(this.selectorList().errorMessage).eq(0).should('contain', 'Required')
        cy.get(this.selectorList().errorMessage).eq(1).should('contain', 'Required')
        cy.get(this.selectorList().errorMessage).eq(2).should('contain', 'Required')
    }
    failQualificationLicense(){
        cy.get(this.selectorList().qualificationButton).click()
        cy.get(this.selectorList().title).eq(5).should('contain', 'License')
        cy.get(this.selectorList().addButton).eq(4).click()
        cy.get(this.selectorList().submitButton).click()
        cy.get(this.selectorList().errorMessage).eq(0).should('contain', 'Required')
        cy.get(this.selectorList().employeeInformation).eq(1).type('aasdfasdfqwersdfasdfasdfwfqwer123412341241234123414')
        cy.get(this.selectorList().errorMessage).eq(1).should('contain', 'Should not exceed 50 characters')
        cy.get(this.selectorList().employeeInformation).eq(2).type('a')
        cy.get(this.selectorList().employeeInformation).eq(3).type('a')
        cy.get(this.selectorList().submitButton).click()
        cy.get(this.selectorList().errorMessage).eq(2).should('contain', 'Should be a valid date in yyyy-dd-mm format')
        cy.get(this.selectorList().errorMessage).eq(3).should('contain', 'Should be a valid date in yyyy-dd-mm format')
        cy.get(this.selectorList().employeeInformation).eq(2).clear().type('2025-08-04')
        cy.get(this.selectorList().employeeInformation).eq(3).clear().type('2025-08-04')
        cy.get(this.selectorList().submitButton).click()
        cy.get(this.selectorList().errorMessage).eq(2).should('contain', 'Expiry date should be after issued date')
    }
    failMembership(){
        cy.get(this.selectorList().membershipButton).click()
        cy.get(this.selectorList().title).eq(0).should('contain', 'Assigned Memberships')
        cy.get(this.selectorList().addButton).eq(0).click()
        cy.get(this.selectorList().submitButton).click()
        cy.get(this.selectorList().errorMessage).eq(0).should('contain', 'Required')
        cy.get(this.selectorList().employeeInformation).eq(1).type('a')
        cy.get(this.selectorList().errorMessage).eq(1).should('contain', 'Should be a number')
        cy.get(this.selectorList().employeeInformation).eq(1).clear().type('1234123413')
        cy.get(this.selectorList().errorMessage).eq(1).should('contain', 'Should be less than 1,000,000,000')
        cy.get(this.selectorList().employeeInformation).eq(2).type('a')
        cy.get(this.selectorList().employeeInformation).eq(3).type('a')
        cy.get(this.selectorList().submitButton).click({force:true})
        cy.get(this.selectorList().errorMessage).eq(2).should('contain', 'Should be a valid date in yyyy-dd-mm format')
        cy.get(this.selectorList().errorMessage).eq(3).should('contain', 'Should be a valid date in yyyy-dd-mm format')
        cy.get(this.selectorList().employeeInformation).eq(2).clear().type('2025-08-04')
        cy.get(this.selectorList().employeeInformation).eq(3).clear().type('2025-08-04')
        cy.get(this.selectorList().submitButton).click({force:true})
        cy.get(this.selectorList().errorMessage).eq(2).should('contain', 'Renewal date should be after the commencing date')
    }
    failAttachments(){
        cy.get(this.selectorList().membershipButton).click()
        cy.get(this.selectorList().title).eq(1).should('contain', 'Attachments')
        cy.get(this.selectorList().addButton).eq(1).click()
        cy.get(this.selectorList().submitButton).click()
        cy.get(this.selectorList().errorMessage).eq(0).should('contain', 'Required')
        cy.get(this.selectorList().commentQualit).type('asodufaksjdhfakjshdfalkjshdflakjshdflakjshdfhqwueyrqpuweykajhsdkljfhasljfhquwhfalskjdfhqiuwhfalsudyfqpuwhfakldhfpauwehfqjhfpqiuhfallsdhfpqohdflaksdhfpqowjfpaosidhjf aposdjfaçlskhfpqowifhpasdhfqpoiwhfff')
        cy.get(this.selectorList().errorMessage).eq(1).should('contain', 'Should not exceed 200 characters')
    }
}
export default MyInfoPage