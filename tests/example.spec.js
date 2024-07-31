// 1. open the page
// 2. Click at Get Started
// 3. Mouse over the language dropdown
// 4. Click at Java
// 5. Check the URL
// 6. Check the text "Installing Playwright" is not bein dslayed
// 7. Check the Text below is displayed

// Playwright is distributed as a set of Maven modules. The easiest way to use it is to add one dependency to your project's pom.xml as described below. If you're not familiar with Maven please refer to its documentation.
const { test, expect } = require("@playwright/test");

test('has title', async () => {
  await page.goto('https://playwright.dev')
  await expect(page).toHaveTitle(/Playwright/)
})

test('get started link', async () => {
  await page.goto('https://playwright.dev')
  await page.getByRole('link', {name: 'Get started'}).click()
  await expect(page).toHaveURL(/.*intro/)
})

test('Check Java page', async ({page}) => {
  await page.goto('https://playwright.dev')
  await page.getByRole('link', {name: 'Get started'}).click()
  await page.getByRole('button', {name: 'Node.js'}).hover()
  await page.getByText('Java', { exact: true }).first().click()

  await expect(page).toHaveURL('https://playwright.dev/java/docs/intro')
  await expect(page.getByText('Installing Playwright', {exact: true})).not.toBeVisible();

  const javaDescription = `Playwright is distributed as a set of Maven modules. The easiest way to use it is to add one dependency to your project's pom.xml as described below. If you're not familiar with Maven please refer to its documentation.`

  await expect(page.getByText(javaDescription)).toBeVisible()
})
