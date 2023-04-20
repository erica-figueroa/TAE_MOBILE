import BaseScreen from "./baseScreen.js";

class MapScreen extends BaseScreen {
    get mapContainer(){ return $('android=new UiSelector().resourceIdMatches(".*bottomSheetContainer")')};
    get mapButton() {return $('android=new UiSelector().resourceIdMatches(".*tab_icon").descriptionMatches(".*Map.*")')}
    get atractionTextButton() { return $('android=new UiSelector().descriptionMatches(".*Attractions, Category.*")')}
    get hotelTextButton() { return $('android=new UiSelector().descriptionMatches(".*Hotels, Category.*")')}
    get facilityTypeList() { return $('android=new UiSelector().resourceIdMatches(".*facilityTypeList")')}


    async doTapOnMapButton() {
        await this.doTapOn(await this.mapButton);
    }

    async doTapOnatractionTextButton() {
        await this.doTapOn(await this.atractionTextButton);
    }
}

export default new MapScreen();


