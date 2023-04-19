import BaseScreen from "./baseScreen.js";

class MapScreen extends BaseScreen {
    get getMapContainer(){ return $('new UiSelector().resourceIdMatches(".*bottomSheetContainer")')};
}

export default new MapScreen();