
import { test, expect } from '@playwright/test';

class IPhonePage {

    constructor(page){
        this.page = page;
        }

    async navigateIphone(){
            await this.page.goto("https://hotline.ua/ua/mobile-mobilnye-telefony-i-smartfony/apple-iphone-15-pro-max-256gb-black-titanium-mu773/");
    }
    async getCompareBtn() {
        return await this.page.locator("//button[contains(text(),'Порівняти')]")
    }
    async getAboutProdBtn() {
        return await this.page.locator("//b[contains(text(),'Про товар')]")
    }
    async getPersonalListBtn() {
        return await this.page.locator("//div[@title='Додати товар в особисті списки']\n")
    }
  }
  export {IPhonePage};