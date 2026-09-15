import {test} from '../fixtures/pagefixture'
import { EnvConfig } from '../utils/EnvConfig'

test('DashBoard page',async({dashboardPage,loginPage})=>{

await loginPage.navigationtoLogin();
  await loginPage.login( EnvConfig.username,
    EnvConfig.password);

    await dashboardPage.isTimeworkVisible();
    await dashboardPage.isDashboardDisplayed()
    await dashboardPage.getDashboardTitle();
    await dashboardPage.locationtextvalidation();
    await dashboardPage.myAction();
    await  dashboardPage.logout();
})