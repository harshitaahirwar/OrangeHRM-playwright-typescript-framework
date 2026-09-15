import { Page, Locator } from "@playwright/test";

export class BasePage{

     protected readonly page:Page


     constructor(page:Page){

        this.page=page;
     }


     async goto(url:string):Promise<void>{
        await this.page.goto(url);
     }


     async click(locator:Locator):Promise<void>
     {
        await locator.click();
     }

     async fill(locator:Locator,value:string):Promise<void>{
        await locator.fill(value);
     }

     async getText(locator:Locator):Promise<string>{
        return await locator.innerText()
     }

     async isvisible(locator:Locator):Promise<boolean>{
        return await locator.isVisible()
     }


     async getTitle():Promise<string>{
        return this.page.title()
     }


     async waitForURl(url:string| RegExp): Promise<void>{
        await this.page.waitForURL(url)
     }


} 