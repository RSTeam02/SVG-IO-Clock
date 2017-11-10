import {Controller} from '../msvc/controller.js';
import {SettingsLS} from '../msvc/settingsLS.js';

window.onload = function() {
    new Controller(new SettingsLS());    
}
