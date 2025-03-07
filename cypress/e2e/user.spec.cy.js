import userData from '../fixtures/user-data.json'
import LoginPage from '../pages/loginPage.js'
import DashBoardPage from '../pages/dashboardPage.js'
import MenuPage from '../pages/menuPage.js'
import MyInfoPage from '../pages/myinfoPage.js'

const Chance = require('chance')
var chance = new Chance()
const loginPage = new LoginPage()
const dashboardPage = new DashBoardPage()
const menuPage = new MenuPage()
const myinfoPage = new MyInfoPage

describe('Orange HRM Test', () => {

  const selectorList = {
  }


  it('User Info Update - Success', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithAnyUser(userData.userSucess.username, userData.userSucess.password)
    dashboardPage.checkDashboardPage()
    menuPage.accessMyInfo()
    myinfoPage.fillPersonalDetail(chance.first(), 'de Lima', chance.last())
    myinfoPage.fillEmployeeDetail(chance.natural({ min: 1, max: 10 }), chance.natural({ min: 1, max: 30 }), chance.natural({ min: 1, max: 30 }), '2025-20-02')
    myinfoPage.fillStatus()
    myinfoPage.saveForm()
    
   
  })
})