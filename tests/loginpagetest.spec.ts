import {test,expect} from '../fixtures/pagefixture'
import { EnvConfig } from '../utils/EnvConfig';
test('Login OrangeHRM',async({ loginPage, dashboardPage})=>{


 
await loginPage.navigationtoLogin();
  await loginPage.login( EnvConfig.username,
    EnvConfig.password);

console.log("in login")

//await expect(page).toHaveURL(/dashboard/)

   dashboardPage.isDashboardDisplayed()
  

 const title= await dashboardPage.getDashboardTitle();
 console.log(title);
   dashboardPage.locationtextvalidation();

     const title1=  await dashboardPage.myAction();
     console.log(title1)
  await  dashboardPage.logout();


    

        
 

})

