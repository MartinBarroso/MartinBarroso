import { expect } from 'chai';
import { Given, Then, When } from 'cucumber';
import { AltaPrensaPO } from '../pages/altaPrensaPO';
import { DashboardPO } from '../pages/dashboardPO';

const dash: DashboardPO = new DashboardPO();
const prensa: AltaPrensaPO = new AltaPrensaPO();

Then(/^se accede a Prensa$/, () => {
    dash.dashPrensaButtom().click();
    prensa.validatePage();
});

Then(/^se intenta crear un nuevo usuario$/, () => {
    prensa.altaPrensaNewUserButtom().click();
});