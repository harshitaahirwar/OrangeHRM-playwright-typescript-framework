import {test} from '../fixtures/pagefixture'
import { EnvConfig } from '../utils/EnvConfig'

test('AdminPage',async({adminPage,loginPage})=>{

await loginPage.navigationtoLogin();
  await loginPage.login( EnvConfig.username,
    EnvConfig.password);

    
   await  adminPage.clickAdminMenu();
   await  adminPage.isadminVisible();
    await adminPage.clickUserManagement();
    await adminPage.clickUsers();
    await adminPage.clickAddButton();
   
   





})