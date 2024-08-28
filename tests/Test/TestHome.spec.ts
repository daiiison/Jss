import { test, expect } from '@playwright/test';
import {HomePage} from '../Pages/HomePage.js'

test('hotline home find footer', async ({page}) =>{
    const homePage = new HomePage(page);
    await homePage.navigateHome();
    const footer = await homePage.getFooter();
    await expect(footer).toBeVisible();
})

test('hotline home find theme toggle', async ({page}) =>{
    const homePage = new HomePage(page);
    await homePage.navigateHome();
    const toggle = await homePage.getThemeToggle();
    await toggle.click();
})

test('hotline home search', async ({page}) =>{
    const homePage = new HomePage(page);
    await homePage.navigateHome();
    const serchField = await homePage.getSearchField();
    await serchField.fill('Lenovo');
})