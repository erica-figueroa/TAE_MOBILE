export default class BaseScreen {

    async doTapOn(element) {
        await element.waitForDisplayed();
        await element.click();
    }
    async doTapOnCustom(element) {
        await element.waitForDisplayed({ timeout: 40000 });
        await element.click();
    }
}