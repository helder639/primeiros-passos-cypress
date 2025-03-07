class DashBoardPage {


    selectorList (){
        const selectors = {
            sectionTitleTopBar: ".oxd-topbar-header-breadcrumb-module",
            dashboardGrid: ".orangehrm-dashboard-grid",//atributo mais especifico que o de cima
        }
        return selectors
    }

    checkDashboardPage(){
        cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
        cy.get(this.selectorList().dashboardGrid).should('be.visible')
    }
}
export default DashBoardPage