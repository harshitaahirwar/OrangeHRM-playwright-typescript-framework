import {Locator, Page} from "@playwright/test";
import { BasePage } from "./BasePage";

export class AdminPage extends BasePage{

  private readonly adminMenu:Locator
  private readonly userManagement:Locator
  private readonly users:Locator
   private readonly addButton:Locator
  // private readonly searchButton:Locator
  constructor(page:Page){
    super(page)
    this.adminMenu=page.locator('.oxd-sidepanel-body').getByRole('link',{name:'Admin'});
    this.userManagement=page.locator('.oxd-topbar-body-nav').getByText('User Management',{exact:true});
  this.users=page.locator('.oxd-dropdown-menu').getByText('Users',{exact:true})
this.addButton=page.getByRole('button',{name:'Add'})


  }


  async isadminVisible():Promise<boolean>{
    return await this.adminMenu.isVisible();
  }

  async clickAdminMenu():Promise<void>{
    await this.adminMenu.click();
  }

  async clickUserManagement():Promise<void>{
    await this.userManagement.click();
  }

async clickUsers():Promise<void>{
    await this.users.click()
}

async clickAddButton():Promise<void>{
  await this.addButton.click(); 

}




 }

