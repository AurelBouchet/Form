import { Component} from '@angular/core';
import { UserSettings } from '../data/user-settings';

@Component({
  selector: 'app-user-setting',
  templateUrl: './user-setting.component.html',
  styleUrls: ['./user-setting.component.scss']
})
export class UserSettingsForm {
  title ="Mon Formulaire";

  originalUserSettings: UserSettings = {
    name: 'Aurel',
    emailOffers: true,
    interfaceStyle: 'dark',
    subscriptionType: 'Annual',
    notes: "some notes..."
};

userSettings : UserSettings = {...this.originalUserSettings};
}
