import { test, expect } from '@playwright/test';
import {IPhonePage} from '../Pages/IPhonePage.js'

test('hotline IPhone find About product button', async ({page}) =>{
    const iPhonePage = new IPhonePage(page);
    await iPhonePage.navigateIphone();
    const aboutProduct = await iPhonePage.getAboutProdBtn();
    await expect(aboutProduct).toBeVisible();
})

test('hotline IPhone find Compare button', async ({page}) =>{
    const iPhonePage = new IPhonePage(page);
    await iPhonePage.navigateIphone();
    const compareBtn = await iPhonePage.getCompareBtn();
    await expect(compareBtn).toBeVisible();
})

test('hotline IPhone Add to personal list', async ({page}) =>{
    const iPhonePage = new IPhonePage(page);
    await iPhonePage.navigateIphone();
    const addToPersonalList = await iPhonePage.getPersonalListBtn();
    await addToPersonalList.click();
})