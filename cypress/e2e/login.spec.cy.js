import userData from '../fixtures/user-data.json'
import LoginPage from '../pages/loginPage.js'
import DashBoardPage from '../pages/dashboardPage.js'

const loginPage = new LoginPage()
const dashboardPage = new DashBoardPage()

describe('Fail Login Orange HRM Test', () => {

  it('User Info Update - Fail username and pasword', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithAnyUser(userData.userFail.username, userData.userFail.password)
    loginPage.checkAcessInvalid()
  })

  it('User Info Update - Fail only username', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithAnyUser(userData.userFail.username, userData.userSucess.password)
    loginPage.checkAcessInvalid()
  })

  it('User Info Update - Fail only password', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithAnyUser(userData.userSucess.username, userData.userFail.password)
    loginPage.checkAcessInvalid()
  })

})

describe('Sucess Login Orange HRM Test', () => {
  
  it('User Info Update - Sucess', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithAnyUser(userData.userSucess.username, userData.userSucess.password)
    dashboardPage.checkDashboardPage()
  })

})

describe('Required Inforamation Login', () => {
  
  it('Required username and password', () => {
    loginPage.accessLoginPage()
    loginPage.requiredAlert()
  })

})

describe('Login page links', () => {
  
  it('links', () => {
    loginPage.accessLoginPage()
    loginPage.checkLinkButtons()
  })

})

describe('Forgot the password ', () => {
  
  it('Reset the password', () => {
    loginPage.accessLoginPage()
    loginPage.resetPassword(userData.userSucess.username)
  })

  it('Cancel reset the password', () => {
    loginPage.accessLoginPage()
    loginPage.dontResetPasswors()
  })

})