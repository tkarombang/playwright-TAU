const {Page, expect} = require('@playwright/test')

class HomePage{
  //Variable
  page;
  getStartedButton;
  title

  //Constructor
  constructor(page){
    this.page = page
    this.getStartedButton = page.getByRole('link', { name: 'Get started' })
    this.title = /Playwright/
  }
  //Methods
  async clickGetStartedButton(){
    await this.getStartedButton.click()
  }
  async assertPageTitle(){
    await expect(this.page).toHaveTitle(this.title)
  }
  async goIntroUrl(introUrl){
    await expect(this.page).toHaveURL(introUrl)
  }

}

// class HomePage{
//   constructor(page){
//     this.page = page
//   }
//   get getStartedButton(){
//     return this.page.getByRole('link', {name: 'Get started'})
//   }

//   async clickGetStartedButton(){
//     await this.getStartedButton.click()
//   }
// }

module.exports = HomePage