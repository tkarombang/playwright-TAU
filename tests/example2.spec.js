const {test, expect} = require('@playwright/test')
const HomePage = require('../pages/home-page')
const TopMenu = require('../pages/top-menu-page')
// AAA
// POM (Page Object Model)
const URL = 'https://playwright.dev/'
let homepage
let topmenu
const introUrl = /.*intro/;

test.beforeEach(async ({page}) => {
  await page.goto(URL)
  homepage = new HomePage(page)
  topmenu = new TopMenu(page)
})

async function clickGetStarted(){
  // await page.getByRole('link', {name: 'Get started'}).click()
  await homepage.clickGetStartedButton()
}

test.describe('Playwright Website Test', () => {

  test('has title', async () => {
    // await expect(page).toHaveTitle(/Playwright/)
    await homepage.assertPageTitle()
  })
  
  test('get started link', async ({page}) => {
    await clickGetStarted(page)
    await homepage.goIntroUrl(introUrl)
  })
  
  test('Check Java page', async ({page}) => {
    await test.step('Act', async () => {
      await clickGetStarted(page)
      await topmenu.hoverBtnNodeJs()
      await topmenu.clickTextJava()
    })

    await test.step('Assert', async () => {
      await topmenu.assertPageUrl(introUrl)
      await topmenu.notVisibleTxtNodejs()
      await topmenu.visibleTxtJavaDesc()
    })
  })
})
