export class AltaPrensaPO {
    private url: string;
    private altaPrensa_newUser_buttom: string;    

    constructor() {
        this.url = 'https://futbolveterano.herokuapp.com/es/admin/others';
        this.altaPrensa_newUser_buttom = '/html/body/div/div/section/section/a[1]';
    }

    public validatePage(): void {
        browser.$(this.altaPrensa_newUser_buttom).waitForExist();
    }

    public altaPrensaUrl(): string {
        return this.url;
    }

    public altaPrensaNewUserButtom(): WebdriverIO.Element {
        return browser.$(this.altaPrensa_newUser_buttom);
    }

}
