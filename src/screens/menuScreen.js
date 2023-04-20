import  BaseScreen from "./baseScreen.js";

class MenuScreen extends BaseScreen {
    get menuButton() {return $('android=new UiSelector().resourceIdMatches(".*tab_icon").descriptionMatches(".*More Options.*")')}
    get menuRecyclerView() {return $('android=new UiSelector().resourceIdMatches(".*moreScreenRecyclerView")')}
    get scrollManuPage() { return $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollIntoView(new UiSelector().descriptionMatches(".*Legal button.*"))')}
    get myProfileCategory() {return $('android=new UiSelector().resourceIdMatches(".*content").textContains("My Profile")')}
    get propertyRulesCategory() {return $('android=new UiSelector().resourceIdMatches(".*content").textContains("Property Rules")')}
    get linkAccountCategory() {return $('android=new UiSelector().resourceIdMatches(".*content").textContains("Link to Account")')}
    get helpCategory() {return $('android=new UiSelector().resourceIdMatches(".*content").textContains("Help")')}
    get privacyLegalCategory() {return $('android=new UiSelector().resourceIdMatches(".*content").textContains("Privacy & Legal")')}
    
    async openMenuScreen() {
        await this.doTapOn(await this.menuButton);
    }

    async openPrivacyLegalScreen() {
        await this.doTapOn(await this.privacyLegalCategory);
    }
}

export default new MenuScreen();