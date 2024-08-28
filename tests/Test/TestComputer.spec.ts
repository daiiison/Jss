import { test, expect } from '@playwright/test';
import {ComputerPage} from '../Pages/ComputerPage.js'

test('hotline find breadcrumbs', async ({page}) =>{
    const computerPage = new ComputerPage(page);
    await computerPage.navigateComputer();
    const breadcrumbs = await computerPage.getBreadcrumbs();
    await expect(breadcrumbs).toBeVisible();
})

test('hotline find sidebar', async ({page}) =>{
    const computerPage = new ComputerPage(page);
    await computerPage.navigateComputer();
    const sidebar = await computerPage.getSidebar();
    await expect(sidebar).toBeVisible();
})

test('hotline find laptops section', async ({page}) =>{
    const computerPage = new ComputerPage(page);
    await computerPage.navigateComputer();
    const laptopsContainer = await computerPage.getLaptopsContainer();
    await expect(laptopsContainer).toBeVisible();
})