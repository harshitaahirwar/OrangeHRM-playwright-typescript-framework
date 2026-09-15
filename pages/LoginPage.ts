import{Page,Locator} from '@playwright/test'
import { BasePage } from './BasePage'

export class LoginPage extends BasePage{

private readonly username :Locator
private readonly password: Locator 
private readonly loginButton: Locator 
private readonly loginErrorMessage: Locator 



constructor(page:Page){
super(page)
this.username=page.getByPlaceholder('Username')
this.password=page.getByPlaceholder('Password')
this.loginButton=page.getByRole('button',{name:'Login'})
this.loginErrorMessage=page.locator('oxd-alert oxd-alert--error')
}



async login(username:string, password:string){
    await this.fill(this.username,username)
    await this.fill(this.password,password)
    await this.click(this.loginButton);
}


async getLoginErrorMessage():Promise<string>{
return await this.getText(this.loginErrorMessage)
}

async isLoginPannelVisible():Promise<boolean>{
return await this.loginButton.isVisible()
}

async navigationtoLogin():Promise<void>{
    return await this.goto('/web/index.php/auth/login')
}





}