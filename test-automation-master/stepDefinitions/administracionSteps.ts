import { expect } from 'chai';
import { Given, Then, When } from 'cucumber';
import { HomePO } from '../pages/homePO';
import { DashboardPO } from '../pages/dashboardPO';

const home : HomePO = new HomePO();
const dash: DashboardPO = new DashboardPO();

Given(/^se ingresa al sistema como administrador$/, () => {
    browser.url(home.homeUrl());
    home.validatePage();
});

Given(/^usuario logeado correctamente al sistema como administrador con el mail "(.*?)" y la contraseña "(.*?)"$/, (mail: string, password: string) => {
    browser.url(home.homeUrl());
    home.homeEmailInput().setValue(mail);
    home.homeEmailPass().setValue(password);
    home.homeEmailLogin().click();
    expect(browser.getUrl()).to.be.equal(dash.dashUrl());
});


When(/^se completa con mail "(.*?)"$/, (mail: string) => {
    home.homeEmailInput().setValue(mail);
});

When(/^el valor del campo mail es igual a "(.*?)"$/, (mail: string) => {
    expect(home.homeEmailInput().getValue()).to.be.equal(mail);
});

When(/^se completa con la contraseña "(.*?)"$/, (password: string) => {
    home.homeEmailPass().setValue(password);
});

Then(/^el usuario intenta ingresar a la aplicación$/, () => {
    home.homeEmailLogin().click();
});

Then(/^el usuario ingresa a la aplicación$/, () => {
    expect(browser.getUrl()).to.be.equal(dash.dashUrl());
});

Then(/^el usuario no ingresa a la aplicación$/, () => {
    expect(browser.getUrl()).to.be.equal(home.homeUrl());
});