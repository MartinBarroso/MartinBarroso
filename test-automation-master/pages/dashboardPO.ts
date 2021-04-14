export class DashboardPO {
    private url: string;
    private dash_title_label: string;
    private dash_msg_label: string;
    private dash_players_label: string;
    private dash_admin_buttom: string;
    private dash_prensa_buttom: string;

    constructor() {
        this.url = 'https://futbolveterano.herokuapp.com/?locale=es';
        this.dash_title_label = '/html/body/div/header/a';
        this.dash_msg_label = '/html/body/div/div/section/section/div[1]/div';
        this.dash_players_label = '/html/body/div/div/section/section/div[2]/div/div[1]/p';
        this.dash_admin_buttom = '/html/body/div/header/nav/div/ul/li/a/span';
        this.dash_prensa_buttom = '/html/body/div/aside/section/ul/li[10]/a';
    }

    public validatePage(): void {
        browser.$(this.dash_title_label).waitForExist();
        browser.$(this.dash_msg_label).waitForExist();
        browser.$(this.dash_players_label).waitForExist();
        browser.$(this.dash_admin_buttom).waitForExist();
    }

    public dashUrl(): string {
        return this.url;
    }

    public dashMessageLabel(): WebdriverIO.Element {
        return browser.$(this.dash_msg_label);
    }

    public dashPlayerLabel(): WebdriverIO.Element {
        return browser.$(this.dash_players_label);
    }

    public dashTitleLabel(): WebdriverIO.Element {
        return browser.$(this.dash_title_label);
    }

    public dashPrensaButtom(): WebdriverIO.Element {
        return browser.$(this.dash_prensa_buttom);
    }

}
