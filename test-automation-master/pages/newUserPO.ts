export class NewUserPO {
    private url: string;
    private newUser_name_input: string;
    private newUser_lastname_input: string;
    private newUser_dni_input: string;
    private newUser_email_input: string;
    private newUser_crear_buttom: string;
    

    constructor() {
        this.url = 'https://futbolveterano.herokuapp.com/es/admin/others/new';
        this.newUser_name_input = '#other_name';
        this.newUser_lastname_input = '#other_lastname';
        this.newUser_dni_input = '#other_dni';
        this.newUser_dni_input = '#other_dni';
        this.newUser_email_input = '#other_email';
        this.newUser_crear_buttom = '#new_other > div.form-actions > input';
    }

    public validatePage(): void {
        browser.$(this.newUser_name_input).waitForExist();
    }

    public newUserUrl(): string {
        return this.url;
    }

    public newUserNameInput(): WebdriverIO.Element {
        return browser.$(this.newUser_name_input);
    }

    public newUserLastNameInput(): WebdriverIO.Element {
        return browser.$(this.newUser_lastname_input);
    }

    public newUserDNIInput(): WebdriverIO.Element {
        return browser.$(this.newUser_dni_input);
    }

    public newUserEmailInput(): WebdriverIO.Element {
        return browser.$(this.newUser_email_input);
    }

    public newUserCrearButtom(): WebdriverIO.Element {
        return browser.$(this.newUser_crear_buttom);
    }

}
