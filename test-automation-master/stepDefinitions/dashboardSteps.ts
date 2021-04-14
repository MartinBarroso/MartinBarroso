import { expect } from 'chai';
import { Given, Then, When } from 'cucumber';
import { DashboardPO } from '../pages/dashboardPO';

const dash: DashboardPO = new DashboardPO();

When(/^se muestra el dashboard$/, () => {
    dash.validatePage();
});

Then(/^se muestra el mensaje "(.*?)"$/, (message: string) => {
    expect(dash.dashMessageLabel().getText()).to.be.equal(message);
});

Then(/^se muestra un box con el texto "(.*?)"$/, (message: string) => {
    expect(dash.dashPlayerLabel().getText()).to.be.equal(message);
});

Then(/^se muestra el titulo "(.*?)"$/, (message: string) => {
    expect(dash.dashTitleLabel().getText()).to.be.equal(message);
});

Then(/^el usuario intenta cerrar la aplicación$/, () => {
    browser.$('/html/body/div/header/nav/div/ul/li/a/span').click();
    browser.$('/html/body/div/header/nav/div/ul/li/ul/li[2]/div/a').click();
});

Then(/^el usuario cierra sesion de la aplicación$/, () => {
    browser.url('https://futbolveterano.herokuapp.com/es/admins/sign_in');
    expect(browser.$('#admin_email').waitForExist({ timeout: 1000 }));
});