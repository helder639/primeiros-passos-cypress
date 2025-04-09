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

describe('Orange HRM Sucess Test MyInfoPage', () => {

  it('User Info Update - Success', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithAnyUser(userData.userSucess.username, userData.userSucess.password)
    dashboardPage.checkDashboardPage()
    menuPage.accessMyInfo()
    myinfoPage.fillPersonalDetail(chance.first(), 'de Lima', chance.last())
    myinfoPage.fillEmployeeDetail(chance.natural({ min: 1, max: 10 }), chance.natural({ min: 1, max: 30 }), chance.natural({ min: 1, max: 30 }), '2025-10-02')
    myinfoPage.fillStatus()
    myinfoPage.saveForm()
  })

  it('User Photo  Update - Success', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithAnyUser(userData.userSucess.username, userData.userSucess.password)
    dashboardPage.checkDashboardPage()
    menuPage.accessMyInfo()
    myinfoPage.profilePhoto()
  })

  it('User Contact Info - Success', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithAnyUser(userData.userSucess.username, userData.userSucess.password)
    dashboardPage.checkDashboardPage()
    menuPage.accessMyInfo()
    myinfoPage.contactDetails()
  })

  it('User Emergency Contacts Info - Success', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithAnyUser(userData.userSucess.username, userData.userSucess.password)
    dashboardPage.checkDashboardPage()
    menuPage.accessMyInfo()
    myinfoPage.emergencyContact()
    myinfoPage.editEmergencyContacts()
    myinfoPage.emergencyContact()
    myinfoPage.clickToDeleteEmergencyContacts()
    myinfoPage.emergencyContact()
    myinfoPage.selectToDeleteEmergencyContacts()
  })

  it('User Dependents Info  - Success', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithAnyUser(userData.userSucess.username, userData.userSucess.password)
    dashboardPage.checkDashboardPage()
    menuPage.accessMyInfo()
    myinfoPage.dependentsWithBirthDay()
    myinfoPage.dependentesWithNotBirthDay()
    myinfoPage.editDependents()
    myinfoPage.deletDependents()
  })

  it('User Immigration Info  - Success', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithAnyUser(userData.userSucess.username, userData.userSucess.password)
    dashboardPage.checkDashboardPage()
    menuPage.accessMyInfo()
    myinfoPage.immigrationPassaport()
    myinfoPage.immigrationVisa()
    myinfoPage.immigrationEdit()
    myinfoPage.immigrationDelete()
    myinfoPage.immigrationVisa()
  })

  it('User Jobs Elements  - Sucess', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithAnyUser(userData.userSucess.username, userData.userSucess.password)
    dashboardPage.checkDashboardPage()
    menuPage.accessMyInfo()
    myinfoPage.jobElements()
    })

  it('User Salary Elements  - Sucess', () => {
  loginPage.accessLoginPage()
  loginPage.loginWithAnyUser(userData.userSucess.username, userData.userSucess.password)
  dashboardPage.checkDashboardPage()
  menuPage.accessMyInfo()
  myinfoPage.salaryElementsNull()
  })

  it('User Report to Elements  - Sucess', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithAnyUser(userData.userSucess.username, userData.userSucess.password)
    dashboardPage.checkDashboardPage()
    menuPage.accessMyInfo()
    myinfoPage.reportToNull()
    })

  it('User Qualifications Info  - Sucess', () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
      return false;
    })
    loginPage.accessLoginPage()
    loginPage.loginWithAnyUser(userData.userSucess.username, userData.userSucess.password)
    dashboardPage.checkDashboardPage()
    menuPage.accessMyInfo()
    myinfoPage.qualificationWork()
    myinfoPage.editQualitWork()
    myinfoPage.deleteQualitWork()
    //myinfoPage.qualificationEducation() a
    //myinfoPage.editQualiEducation()
    //myinfoPage.deleteQualiEducation() //vai haver erro por conta de um bug, nessa seção especifica não é possivel apgar nada criado ou ja existente
    myinfoPage.qualificationSkills()
    myinfoPage.editQualiSkills()
    myinfoPage.deletQualiSkills()
    myinfoPage.qualificationLanguages()
    myinfoPage.editQualiLanguages()
    myinfoPage.deleteQualiLanguages()
    myinfoPage.qualificationLicense()
    myinfoPage.editQualiLicense()
    myinfoPage.deleteQualiLicense()
  })

  it('User MemberShip Info  - Sucess', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithAnyUser(userData.userSucess.username, userData.userSucess.password)
    dashboardPage.checkDashboardPage()
    menuPage.accessMyInfo()
    myinfoPage.membership()
    myinfoPage.editMembership()
    myinfoPage.deleteMembership()   
  })

  it('User Attachments Info  - Sucess', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithAnyUser(userData.userSucess.username, userData.userSucess.password)
    dashboardPage.checkDashboardPage()
    menuPage.accessMyInfo()
    myinfoPage.attachments()
    myinfoPage.editAttachments()
    myinfoPage.deletAttachments()
  })
})

describe('Orange HRM Fail Test MyInfoPage', () => {
  
  it('User Info Update - Fail', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithAnyUser(userData.userSucess.username, userData.userSucess.password)
    dashboardPage.checkDashboardPage()
    menuPage.accessMyInfo()
    myinfoPage.failFillPersonalDetail()
    myinfoPage.failFillEmployeeDetail()
  })

  it('User Photo  Update - Fail', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithAnyUser(userData.userSucess.username, userData.userSucess.password)
    dashboardPage.checkDashboardPage()
    menuPage.accessMyInfo()
    myinfoPage.failProfilePhoto()
  })

  it('User Contact Info - Fail', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithAnyUser(userData.userSucess.username, userData.userSucess.password)
    dashboardPage.checkDashboardPage()
    menuPage.accessMyInfo()
    myinfoPage.failContactDetails()
    
  })

  it('User Emergency Contacts Info - Fail', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithAnyUser(userData.userSucess.username, userData.userSucess.password)
    dashboardPage.checkDashboardPage()
    menuPage.accessMyInfo()
    myinfoPage.failEmergencyContact()
  })

  it('User Dependents Info - Fail', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithAnyUser(userData.userSucess.username, userData.userSucess.password)
    dashboardPage.checkDashboardPage()
    menuPage.accessMyInfo()
    myinfoPage.failDependents()
  })

  it('User Immigration Info - Fail', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithAnyUser(userData.userSucess.username, userData.userSucess.password)
    dashboardPage.checkDashboardPage()
    menuPage.accessMyInfo()
    myinfoPage.failImmigration()
  })

  it('User Qualification Info - Fail', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithAnyUser(userData.userSucess.username, userData.userSucess.password)
    dashboardPage.checkDashboardPage()
    menuPage.accessMyInfo()
    myinfoPage.failQualificationWork()
    myinfoPage.failQualificationEducation()
    myinfoPage.failQualificationSkills()
    myinfoPage.failQualificationLanguages()
    myinfoPage.failQualificationLicense()
  })

  it('User Membership Info - Fail', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithAnyUser(userData.userSucess.username, userData.userSucess.password)
    dashboardPage.checkDashboardPage()
    menuPage.accessMyInfo()
    myinfoPage.failMembership()
  })

  it('User Attachments Info  - Fail', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithAnyUser(userData.userSucess.username, userData.userSucess.password)
    dashboardPage.checkDashboardPage()
    menuPage.accessMyInfo()
    myinfoPage.failAttachments()
  })

})

