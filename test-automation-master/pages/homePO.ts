export class HomePO {
    private home_title_label: string;
    private home_email_input: string;
    private home_email_password: string;
    private home_email_login: string;
    private url: string;

    constructor() {
        this.url = 'https://futbolveterano.herokuapp.com/es/admins/sign_in';
        //this.home_title_label = '#StickyContainer > div.ui.fluid.container > div.main-content > div > h1';
        this.home_email_input =  '#admin_email';
        this.home_email_password = '#admin_password';
        this.home_email_login = '//*[@name="commit"]';
    }

    public validatePage(): void {
        //browser.$(this.home_title_label).waitForExist();
        browser.$(this.home_email_input).waitForExist();
        browser.$(this.home_email_password).waitForExist();
        browser.$(this.home_email_login).waitForExist();
    }

    public homeUrl(): string {
        return this.url;
    }

    public homeTitleLabel(): WebdriverIO.Element {
        return browser.$(this.home_title_label);
    }

    public homeEmailInput(): WebdriverIO.Element {
        return browser.$(this.home_email_input);
    }

    public homeEmailPass(): WebdriverIO.Element {
        return browser.$(this.home_email_password);
    }

    public homeEmailLogin(): WebdriverIO.Element {
        return browser.$(this.home_email_login);
    }

}
