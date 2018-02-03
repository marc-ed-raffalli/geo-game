# World Geography Game

Geography game to discover or refresh your geography in an easy and interactive way. 
Find the countries by name, capital or flag and learn much more about each country.

## Available languages

The game is currently available in 20 languages: 

- `bg`: Български
- `ca`: Català
- `cs`: Čeština
- `da`: Dansk
- `de`: Deutsch
- `en`: English
- `es`: Español
- `fi`: Suomi
- `fr`: Français
- `ga`: Gaeilge
- `gl`: Galego
- `hr`: Hrvatski
- `it`: Italiano
- `ja`: 日本語
- `nl`: Nederlands
- `nn`: Nynorsk
- `pl`: Polski
- `pt`: Português
- `ru`: Русский
- `zh`: 中文

The capitals names are all translated in English but not in other languages.   

**Contributions are welcome to reduce the gap!**

### Translations

The translated game data is formatted as follow:

```json
{
 "IE": {
    "name": "Ireland",
    "continent": "Europe",
    "locatedIn": [
      "Europe",
      "Northern Europe"
    ],
    "capital": "Dublin"
  }
}
``` 

#### Folder structure

All the translation files are located in `src/locales`.

- `src/locales/data` contains game data (country names, capitals, ...)
- `src/locales/ui` contains user interface data

#### Translation status

|    |            |              | Count |   % | Missing |
|----|------------|--------------|------:|----:|--------:|
| en | English    | country name |    51 |     |         |
|    |            | capital      |    50 |     |         |
| bg | Български  | country name |    51 | 100 |         |
|    |            | capital      |    33 |  66 |      17 |
| ca | Català     | country name |    51 | 100 |         |
|    |            | capital      |    33 |  66 |      17 |
| cs | Čeština    | country name |    51 | 100 |         |
|    |            | capital      |    33 |  66 |      17 |
| da | Dansk      | country name |    51 | 100 |         |
|    |            | capital      |    33 |  66 |      17 |
| de | Deutsch    | country name |    51 | 100 |         |
|    |            | capital      |    33 |  66 |      17 |
| es | Español    | country name |    51 | 100 |         |
|    |            | capital      |    33 |  66 |      17 |
| fi | Suomi      | country name |    51 | 100 |         |
|    |            | capital      |    33 |  66 |      17 |
| fr | Français   | country name |    51 | 100 |         |
|    |            | capital      |    33 |  66 |      17 |
| ga | Gaeilge    | country name |    51 | 100 |         |
|    |            | capital      |    33 |  66 |      17 |
| gl | Galego     | country name |    51 | 100 |         |
|    |            | capital      |    33 |  66 |      17 |
| hr | Hrvatski   | country name |    51 | 100 |         |
|    |            | capital      |    33 |  66 |      17 |
| it | Italiano   | country name |    51 | 100 |         |
|    |            | capital      |    33 |  66 |      17 |
| ja | 日本語      | country name |    51 | 100 |         |
|    |            | capital      |    33 |  66 |      17 |
| nl | Nederlands | country name |    51 | 100 |         |
|    |            | capital      |    33 |  66 |      17 |
| nn | Nynorsk    | country name |    51 | 100 |         |
|    |            | capital      |    33 |  66 |      17 |
| pl | Polski     | country name |    51 | 100 |         |
|    |            | capital      |    33 |  66 |      17 |
| pt | Português  | country name |    51 | 100 |         |
|    |            | capital      |    33 |  66 |      17 |
| ru | Русский    | country name |    51 | 100 |         |
|    |            | capital      |    33 |  66 |      17 |
| zh | 中文        | country name |   51 | 100 |         |
|    |            | capital      |    33 |  66 |      17 |


## References / Credits

- https://reacttraining.com/react-router/web/guides/philosophy
- https://getbootstrap.com/
- https://facebook.github.io/react/
- http://redux.js.org/
- https://ryandrewjohnson.github.io/react-localize-redux/
- https://gorangajic.github.io/react-icons/

- https://medium.com/@stowball/a-dummys-guide-to-redux-and-thunk-in-react-d8904a7005d3
- https://www.codementor.io/vkarpov/beginner-s-guide-to-redux-middleware-du107uyud
- https://commons.wikimedia.org/wiki/File:Continents.svg
- https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#github-pages
