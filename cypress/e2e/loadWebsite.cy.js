// describe('admin demo of nopcommerce', () => {
//   it('Login page test', () => {
//     const menulist=[
//       'Dashboard',
//       'Catalog',
//       'Sales',
//       'Customers',
//       'Promotions',
//       'Content management',
//       'Configuration',
//       'System',
//       'Reports',
//       'Help'

//     ]
//     cy.viewport(1920,1080)
//     cy.visit('https://admin-demo.nopcommerce.com/login')
//     cy.get('#Email').clear().type('admin@yourstore.com')
//     cy.get('#Password').clear().type('admin')
//     cy.get('.button-1').click()

//     cy.get("ul[class*='nav-pills']>li>a>p").as('menulist')

//     cy.get('@menulist').each((item,index,list)=>{
//       expect(
//         Cypress.$(item).text().trim()
//       ).eq(menulist[index])
//     })

//     cy.get('@menulist').each((item,index,list)=>{
//       if(index>1){
//         cy.get(item).click()
//         cy.get("li[class*='menu-open']>ul>li").as('submenulist')
//       }
//     })

//   })
// })


describe('test suite',()=>{
  it('basic',()=>{
    cy.visit('https://demo.nopcommerce.com/')
    cy.get('#small-searchterms').type('Apple MacBook Pro 13-inch')
    cy.get('[type=submit').click()
    cy.get(".product-box-add-to-cart-button[type='button']").click()
    cy.get('#product_enteredQuantity_4').clear().type('2')
    cy.get('#add-to-cart-button-4').click()
    cy.wait(4000)
    cy.get('.cart-label').click()
    cy.get('.product-unit-price').contains('$1,800.00')
  })
})