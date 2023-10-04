import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'menu-basic-demo',
  templateUrl: './app.component.html',
})
export class MenuBasicDemo implements OnInit {
  items: MenuItem[] | undefined;
  currentLanguage: string;

  constructor(public cdr: ChangeDetectorRef) {}

  ngOnInit() {
    this.items = [];
    const languages = [
      {
        value: 'de',
        translations: {
          de: 'Deutsch',
          en: 'German',
        },
      },
      {
        value: 'en',
        translations: {
          de: 'Englisch',
          en: 'English',
        },
      },
    ];
    for (const language of languages) {
      this.items.push({
        label: language.translations.de,
        command: async () => {
          console.log(language.value);
          this.currentLanguage = language.value;
          // this.cdr.detectChanges();
        },
      });
    }
  }
}
