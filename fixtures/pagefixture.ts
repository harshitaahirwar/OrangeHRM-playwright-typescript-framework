import {test as base} from '@playwright/test'

import { LoginPage } from '../pages/LoginPage'
import { DashBoardPage} from '../pages/DashBoardPage'

type PageFixture={

    loginPage:LoginPage;
    dashboardPage:DashBoardPage;
    
}

export const test=base.extend<PageFixture>({

   loginPage: async ({page},use)=>{
        const loginPage=new LoginPage(page)
         await use(loginPage);
    },

    dashboardPage:async ({page},use)=>{
        const dashboardPage=new DashBoardPage(page)
        await use(dashboardPage);
    }




})

export { expect } from '@playwright/test';