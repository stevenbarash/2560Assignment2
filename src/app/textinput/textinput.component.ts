import { Component, OnInit, Input } from "@angular/core";
import LangOption from "../models/LangOption";
// import MatSelect from "@angular/material";

export interface Lang {
  value: string;
  viewValue: string;
}
@Component({
  selector: "app-textinput",
  templateUrl: "./textinput.component.html",
  styleUrls: ["./textinput.component.css"]
})
export class TextinputComponent implements OnInit {
  @Input() langOption: LangOption;

  constructor() {}

  ngOnInit() {}
  inputLang: String = "";
  outputLang: String = "";
  translation: String = "";
  langs: Lang[] = [
    { value: "af", viewValue: "Afrikaans" },
    { value: "am", viewValue: "Amharic" },
    { value: "ar", viewValue: "Arabic" },
    { value: "az", viewValue: "Azerbaijani" },
    { value: "ba", viewValue: "Bashkir" },
    { value: "be", viewValue: "Belarusian" },
    { value: "bg", viewValue: "Bulgarian" },
    { value: "bn", viewValue: "Bengali" },
    { value: "bs", viewValue: "Bosnian" },
    { value: "ca", viewValue: "Catalan" },
    { value: "ceb", viewValue: "Cebuano" },
    { value: "cs", viewValue: "Czech" },
    { value: "cy", viewValue: "Welsh" },
    { value: "da", viewValue: "Danish" },
    { value: "de", viewValue: "German" },
    { value: "el", viewValue: "Greek" },
    { value: "en", viewValue: "English" },
    { value: "eo", viewValue: "Esperanto" },
    { value: "es", viewValue: "Spanish" },
    { value: "et", viewValue: "Estonian" },
    { value: "eu", viewValue: "Basque" },
    { value: "fa", viewValue: "Persian" },
    { value: "fi", viewValue: "Finnish" },
    { value: "fr", viewValue: "French" },
    { value: "ga", viewValue: "Irish" },
    { value: "gd", viewValue: "Scottish Gaelic" },
    { value: "gl", viewValue: "Galician" },
    { value: "gu", viewValue: "Gujarati" },
    { value: "he", viewValue: "Hebrew" },
    { value: "hi", viewValue: "Hindi" },
    { value: "hr", viewValue: "Croatian" },
    { value: "ht", viewValue: "Haitian" },
    { value: "hu", viewValue: "Hungarian" },
    { value: "hy", viewValue: "Armenian" },
    { value: "id", viewValue: "Indonesian" },
    { value: "is", viewValue: "Icelandic" },
    { value: "it", viewValue: "Italian" },
    { value: "ja", viewValue: "Japanese" },
    { value: "jv", viewValue: "Javanese" },
    { value: "ka", viewValue: "Georgian" },
    { value: "kk", viewValue: "Kazakh" },
    { value: "km", viewValue: "Khmer" },
    { value: "kn", viewValue: "Kannada" },
    { value: "ko", viewValue: "Korean" },
    { value: "ky", viewValue: "Kyrgyz" },
    { value: "la", viewValue: "Latin" },
    { value: "lb", viewValue: "Luxembourgish" },
    { value: "lo", viewValue: "Lao" },
    { value: "lt", viewValue: "Lithuanian" },
    { value: "lv", viewValue: "Latvian" },
    { value: "mg", viewValue: "Malagasy" },
    { value: "mhr", viewValue: "Mari" },
    { value: "mi", viewValue: "Maori" },
    { value: "mk", viewValue: "Macedonian" },
    { value: "ml", viewValue: "Malayalam" },
    { value: "mn", viewValue: "Mongolian" },
    { value: "mr", viewValue: "Marathi" },
    { value: "mrj", viewValue: "Hill Mari" },
    { value: "ms", viewValue: "Malay" },
    { value: "mt", viewValue: "Maltese" },
    { value: "my", viewValue: "Burmese" },
    { value: "ne", viewValue: "Nepali" },
    { value: "nl", viewValue: "Dutch" },
    { value: "no", viewValue: "Norwegian" },
    { value: "pa", viewValue: "Punjabi" },
    { value: "pap", viewValue: "Papiamento" },
    { value: "pl", viewValue: "Polish" },
    { value: "pt", viewValue: "Portuguese" },
    { value: "ro", viewValue: "Romanian" },
    { value: "ru", viewValue: "Russian" },
    { value: "si", viewValue: "Sinhalese" },
    { value: "sk", viewValue: "Slovak" },
    { value: "sl", viewValue: "Slovenian" },
    { value: "sq", viewValue: "Albanian" },
    { value: "sr", viewValue: "Serbian" },
    { value: "su", viewValue: "Sundanese" },
    { value: "sv", viewValue: "Swedish" },
    { value: "sw", viewValue: "Swahili" },
    { value: "ta", viewValue: "Tamil" },
    { value: "te", viewValue: "Telugu" },
    { value: "tg", viewValue: "Tajik" },
    { value: "th", viewValue: "Thai" },
    { value: "tl", viewValue: "Tagalog" },
    { value: "tr", viewValue: "Turkish" },
    { value: "tt", viewValue: "Tatar" },
    { value: "udm", viewValue: "Udmurt" },
    { value: "uk", viewValue: "Ukrainian" },
    { value: "ur", viewValue: "Urdu" },
    { value: "uz", viewValue: "Uzbek" },
    { value: "vi", viewValue: "Vietnamese" },
    { value: "xh", viewValue: "Xhosa" },
    { value: "yi", viewValue: "Yiddish" },
    {
      value: "zh",
      viewValue: "Chinese"
    }
  ];
  wordToTranlate: String = "";

  onInputLangSelect(chosenLanguage) {
    // console.log(index);
    // // console.log(langList[index].value);
    this.inputLang = chosenLanguage;
    this.getTranslation(this.wordToTranlate);
  }
  onOutputLangSelect(chosenLanguage) {
    this.outputLang = chosenLanguage;
    this.getTranslation(this.wordToTranlate);
  }

  getTranslation(text) {
    this.wordToTranlate = text;
    var queryString =
      "https://translate.yandex.net/api/v1.5/tr.json/translate?lang=" +
      this.inputLang +
      "-" +
      this.outputLang +
      "&key=trnsl.1.1.20191021T220621Z.ebc69abebd3f4f15.c7e568f1fc83979cec942b7c46aa57f22cb36a9a&text=" +
      this.wordToTranlate;
    fetch(queryString)
      .then(res => {
        return res.json();
      })
      .then(data => (this.translation = data.text));
  }

  timeout: any = null;

  //only submit after 500ms have passed in order to prevent overloading the API
  onSubmit(text: String) {
    clearTimeout(this.timeout);
    this.timeout = setTimeout(() => {
      this.getTranslation(text);
    }, 500);
  }
}
