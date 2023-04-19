export default class BaseScreen {

    async doTapOn(element) {
        await element.waitForDisplayed();
        await element.click();
    }
}