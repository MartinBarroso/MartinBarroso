import { expect } from 'chai';
import { Given, Then, When } from 'cucumber';
import { AltaPrensaPO } from '../pages/altaPrensaPO';
import { NewUserPO } from '../pages/newUserPO';
import faker from 'faker';

const newUser: NewUserPO = new NewUserPO();
const prensa: AltaPrensaPO = new AltaPrensaPO();

When(/^se ingresa a formulario de carga de nuevo usuario$/, () => {
    newUser.validatePage();
});

When(/^se completa campo de nombre con un Nombre aleatorio$/, () => {
    newUser.newUserNameInput().setValue(faker.random.number(9999));
});

When(/^se completa campo de apellido con un Apellido aleatorio$/, () => {
    newUser.newUserLastNameInput().setValue(faker.random.number(9999));
});

When(/^se completa campo de DNI con un DNI aleatorio$/, () => {
    newUser.newUserDNIInput().setValue(faker.random.number(9999));
});

When(/^se completa campo de Email con un correo aleatorio$/, () => {
    newUser.newUserEmailInput().setValue(faker.random.number(9999));
});

When(/^se presiona boton de Crear$/, () => {
    newUser.newUserCrearButtom().click();
});