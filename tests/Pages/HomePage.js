import { test, expect } from '@playwright/test';

class HomePage {

  constructor(page){
      this.page = page;
      }

  async navigateHome(){
          await this.page.goto('https://hotline.ua/');
  }
  async getSearchField() {
      return await this.page.locator("//input[@placeholder='Знайти товар, магазин, бренд']")
  }
  async getThemeToggle() {
      return await this.page.locator("//span[@class='toggle__button toggle__button--left']")
  }
  async getFooter() {
      return await this.page.locator("//footer[@class='footer default-layout__footer']\n")
  }
}
export {HomePage};