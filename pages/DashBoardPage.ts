import {Locator,Page} from '@playwright/test'
import { BasePage } from './BasePage'

export class DashBoardPage extends BasePage{


    private readonly dashboardTitle:Locator
    private readonly userDropdown:Locator
    private readonly distributionLocationtext:Locator
    private readonly logoutlink:Locator
    private readonly timeAtWork:Locator
    private readonly MyActions:Locator


    constructor(page:Page){
        super(page)
        this.dashboardTitle=page.getByRole('heading',{name:'Dashboard'});
        this.userDropdown=page.locator('.oxd-userdropdown-tab');
        this.distributionLocationtext=page.getByText('Employee Distribution by Location')
        this.logoutlink=page.getByRole('menuitem',{name:'Logout'})
        this.timeAtWork=page.getByText('Time at Work',{exact:true})
        this.MyActions=page.locator('.orangehrm-dashboard-widget-name').filter({hasText:'My Actions'})


    }

    async isTimeworkVisible():Promise<string>{
        return await this.getText(this.timeAtWork)
    }

    async myAction():Promise<string>{
        return await this.MyActions.innerText()
    }



    async isDashboardDisplayed():Promise<boolean>{
        return await this.dashboardTitle.isVisible();
    }

    async getDashboardTitle():Promise<string>{
        return await this.getText(this.dashboardTitle)
    }

    async locationtextvalidation():Promise<void>{
    const result= await this.distributionLocationtext.isVisible();
    console.log(result+"locations ")
      }

     async logout():Promise<void>{
        await this.click(this.userDropdown);
        await this.click(this.logoutlink);

     }



}