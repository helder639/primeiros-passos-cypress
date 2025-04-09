class LoginPage{

    
    selectorList () {
        const selectors = {
            usernameField: "[name='username']",
            passwordField: "[name='password']",
            loginButton: "[type='submit']",
            wrongCredentialAlert: "[role='alert']",
            linksButtons: "[xmlns='http://www.w3.org/2000/svg']",
            orangeSiteButton: "[href='http://www.orangehrm.com']",
            forgotPassword: ".orangehrm-login-forgot-header",
            cancelResetPasswordButton: ".orangehrm-forgot-password-button--cancel",
            resetPasswordButton: ".orangehrm-forgot-password-button--reset",
            confirmResetPassword: ".orangehrm-forgot-password-title",
            loginPageLayout: ".orangehrm-login-slot-wrapper",
            requireMessage: ".oxd-input-field-error-message"
        }
        return selectors
    }

    accessLoginPage(){
        cy.visit('/auth/login')
    }
    
    loginWithAnyUser(username, password) {
        cy.get(this.selectorList().usernameField).type(username)
        cy.get(this.selectorList().passwordField).type(password)
        cy.get(this.selectorList().loginButton).click()
    }

    checkAcessInvalid(){
        cy.get(this.selectorList().wrongCredentialAlert)
    }

    checkLinkButtons(){
        for(let i = 0; i < 4; i++)
        cy.get(this.selectorList().linksButtons).eq(i).should('be.visible').and('not.have.attr', 'disable')
        cy.get(this.selectorList().orangeSiteButton).should('be.visible').and('not.have.attr', 'disable')
    }

    resetPassword(username){
        cy.get(this.selectorList().forgotPassword).click()
        cy.get(this.selectorList().usernameField).type(username)
        cy.get(this.selectorList().resetPasswordButton).click()
        cy.get(this.selectorList().confirmResetPassword).should('contain', 'Reset Password link sent successfully')
    }

    dontResetPasswors(){
        cy.get(this.selectorList().forgotPassword).click()
        cy.get(this.selectorList().cancelResetPasswordButton).click()
        cy.get(this.selectorList().loginPageLayout)
    }

    requiredAlert(){
        cy.get(this.selectorList().usernameField).type('erro').clear()
        cy.get(this.selectorList().passwordField).type('erro').clear()
        cy.get(this.selectorList().loginPageLayout).click()
        cy.get(this.selectorList().requireMessage).eq(0)
        cy.get(this.selectorList().requireMessage).eq(1)
    }
}

export default LoginPage