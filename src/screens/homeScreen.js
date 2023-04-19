import  BaseScreen from "./baseScreen.js";

class HomeScreen extends BaseScreen {
    get getMapButton(){ return $('android=new UiSelector().resourceIdMatches(".*tab_icon").descriptionContains("Map, Tab, 2of5")');}

    async doTapOnMapButton() {
        await this.doTapOn(await this.getMapButton);
    }
}

export default new HomeScreen();