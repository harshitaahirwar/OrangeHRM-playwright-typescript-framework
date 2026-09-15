import {test as base} from '@playwright/test'

import { LoginPage } from '../pages/LoginPage'
import { DashBoardPage} from '../pages/DashBoardPage'
import { AdminPage } from '../pages/AdminPage'

type PageFixture={

    loginPage:LoginPage;
    dashboardPage:DashBoardPage;
    adminPage:AdminPage;

}

export const test=base.extend<PageFixture>({

   loginPage: async ({page},use)=>{
        const loginPage=new LoginPage(page)
         await use(loginPage);
    },

    dashboardPage:async ({page},use)=>{
        const dashboardPage=new DashBoardPage(page)
        await use(dashboardPage);
    },

    adminPage:async({page},use)=>{
        const adminPage=new AdminPage(page)
        await use(adminPage);
    }




})

export { expect } from '@playwright/test';