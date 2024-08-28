import { test, expect } from '@playwright/test';

class ComputerPage {

    constructor(page){
        this.page = page;
        }
        
    async navigateComputer(){
            await this.page.goto('https://hotline.ua/ua/computer/');
    }
    async getBreadcrumbs() {
        return await this.page.locator("(//div[@class='breadcrumbs__container'])[1]")
    }
    async getSidebar() {
        return await this.page.locator("//aside[@class='col-xs-12 col-lg-3']")
    }
    async getLaptopsContainer() {
        return await this.page.locator("//div[@id='noutbuki-pk']")
    }
}
export {ComputerPage};