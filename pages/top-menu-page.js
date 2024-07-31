const {Page, expect} = require('@playwright/test')
class TopMenu{
  //variable
  nodeJsBtn
  textJava
  textNode
  nodeDescription = 'Installing Playwright'
  javaDescription = `Playwright is distributed as a set of Maven modules. The easiest way to use it is to add one dependency to your project's pom.xml as described below. If you're not familiar with Maven please refer to its documentation.`
  
  //Constructor
  constructor(page){
    this.page = page
    this.nodeJsBtn = page.getByRole('button', {name: 'Node.js'})
    this.textJava = page.getByText('Java', {exact: true})
    this.textNode =  page.getByText(this.nodeDescription, {exact: true})
  }

  //methods
  async hoverBtnNodeJs(){
    await this.nodeJsBtn.hover()
  }
  async clickTextJava(){
    await this.textJava.first().click()
  }
  async assertPageUrl(introUrl){
    await expect(this.page).toHaveURL(introUrl)
  }
  async notVisibleTxtNodejs(){
    await expect(this.textNode).not.toBeVisible()
  }
  async visibleTxtJavaDesc(){
    await expect(this.page.getByText(this.javaDescription)).toBeVisible()
  }


}

module.exports = TopMenu