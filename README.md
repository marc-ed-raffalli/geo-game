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

The translated names of the country names and capitals is coming from:
- [mledoze/countries](https://github.com/mledoze/countries)
- [unicode-cldr](https://github.com/unicode-cldr)

#### Folder structure

All the translation files are located in `src/locales`.

- `src/locales/data` contains game data (country names, capitals, ...)
- `src/locales/ui` contains user interface data

#### Translation status

##### Africa

|    |            |              | Count |   % | Missing |
|----|------------|--------------|------:|----:|--------:|
| en | English    | country name |    60 |     |         |
|    |            | capital      |    58 |     |         |
| bg | Български  | country name |    60 | 100 |         |
|    |            | capital      |    40 |  69 |      18 |
| ca | Català     | country name |    60 | 100 |         |
|    |            | capital      |    40 |  69 |      18 |
| cs | Čeština    | country name |    60 | 100 |         |
|    |            | capital      |    40 |  69 |      18 |
| da | Dansk      | country name |    60 | 100 |         |
|    |            | capital      |    40 |  69 |      18 |
| de | Deutsch    | country name |    60 | 100 |         |
|    |            | capital      |    40 |  69 |      18 |
| es | Español    | country name |    60 | 100 |         |
|    |            | capital      |    40 |  69 |      18 |
| fi | Suomi      | country name |    60 | 100 |         |
|    |            | capital      |    40 |  69 |      18 |
| fr | Français   | country name |    60 | 100 |         |
|    |            | capital      |    40 |  69 |      18 |
| ga | Gaeilge    | country name |    60 | 100 |         |
|    |            | capital      |    40 |  69 |      18 |
| gl | Galego     | country name |    60 | 100 |         |
|    |            | capital      |    40 |  69 |      18 |
| hr | Hrvatski   | country name |    60 | 100 |         |
|    |            | capital      |    40 |  69 |      18 |
| it | Italiano   | country name |    60 | 100 |         |
|    |            | capital      |    40 |  69 |      18 |
| ja | 日本語      | country name |    60 | 100 |         |
|    |            | capital      |    40 |  69 |      18 |
| nl | Nederlands | country name |    60 | 100 |         |
|    |            | capital      |    40 |  69 |      18 |
| nn | Nynorsk    | country name |    60 | 100 |         |
|    |            | capital      |    40 |  69 |      18 |
| pl | Polski     | country name |    60 | 100 |         |
|    |            | capital      |    40 |  69 |      18 |
| pt | Português  | country name |    60 | 100 |         |
|    |            | capital      |    40 |  69 |      18 |
| ru | Русский    | country name |    60 | 100 |         |
|    |            | capital      |    40 |  69 |      18 |
| zh | 中文        | country name |   60 | 100  |         |
|    |            | capital      |    40 |  69 |      18 |


##### Asia

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
| zh | 中文        | country name |    51 | 100 |         |
|    |            | capital      |    33 |  66 |      17 |


##### Europe

|    |            |              | Count |   % | Missing |
|----|------------|--------------|------:|----:|--------:|
| en | English    | country name |    52 |     |         |
|    |            | capital      |    52 |     |         |
| bg | Български  | country name |    52 | 100 |         |
|    |            | capital      |    39 |  75 |      13 |
| ca | Català     | country name |    52 | 100 |         |
|    |            | capital      |    39 |  75 |      13 |
| cs | Čeština    | country name |    52 | 100 |         |
|    |            | capital      |    39 |  75 |      13 |
| da | Dansk      | country name |    52 | 100 |         |
|    |            | capital      |    39 |  75 |      13 |
| de | Deutsch    | country name |    52 | 100 |         |
|    |            | capital      |    39 |  75 |      13 |
| es | Español    | country name |    52 | 100 |         |
|    |            | capital      |    39 |  75 |      13 |
| fi | Suomi      | country name |    52 | 100 |         |
|    |            | capital      |    39 |  75 |      13 |
| fr | Français   | country name |    52 | 100 |         |
|    |            | capital      |    39 |  75 |      13 |
| ga | Gaeilge    | country name |    52 | 100 |         |
|    |            | capital      |    39 |  75 |      13 |
| gl | Galego     | country name |    52 | 100 |         |
|    |            | capital      |    39 |  75 |      13 |
| hr | Hrvatski   | country name |    52 | 100 |         |
|    |            | capital      |    39 |  75 |      13 |
| it | Italiano   | country name |    52 | 100 |         |
|    |            | capital      |    39 |  75 |      13 |
| ja | 日本語      | country name |    52 | 100 |         |
|    |            | capital      |    39 |  75 |      13 |
| nl | Nederlands | country name |    52 | 100 |         |
|    |            | capital      |    39 |  75 |      13 |
| nn | Nynorsk    | country name |    52 | 100 |         |
|    |            | capital      |    39 |  75 |      13 |
| pl | Polski     | country name |    52 | 100 |         |
|    |            | capital      |    39 |  75 |      13 |
| pt | Português  | country name |    52 | 100 |         |
|    |            | capital      |    39 |  75 |      13 |
| ru | Русский    | country name |    52 | 100 |         |
|    |            | capital      |    39 |  75 |      13 |
| zh | 中文        | country name |    52 | 100 |         |
|    |            | capital      |    39 |  75 |      13 |


##### North America

|    |            |              | Count |   % | Missing |
|----|------------|--------------|------:|----:|--------:|
| en | English    | country name |    41 |     |         |
|    |            | capital      |    40 |     |         |
| bg | Български  | country name |    41 | 100 |         |
|    |            | capital      |    11 |  28 |      29 |
| ca | Català     | country name |    41 | 100 |         |
|    |            | capital      |    11 |  28 |      29 |
| cs | Čeština    | country name |    41 | 100 |         |
|    |            | capital      |    11 |  28 |      29 |
| da | Dansk      | country name |    41 | 100 |         |
|    |            | capital      |    11 |  28 |      29 |
| de | Deutsch    | country name |    41 | 100 |         |
|    |            | capital      |    11 |  28 |      29 |
| es | Español    | country name |    41 | 100 |         |
|    |            | capital      |    11 |  28 |      29 |
| fi | Suomi      | country name |    41 | 100 |         |
|    |            | capital      |    11 |  28 |      29 |
| fr | Français   | country name |    41 | 100 |         |
|    |            | capital      |    11 |  28 |      29 |
| ga | Gaeilge    | country name |    41 | 100 |         |
|    |            | capital      |    11 |  28 |      29 |
| gl | Galego     | country name |    41 | 100 |         |
|    |            | capital      |    11 |  28 |      29 |
| hr | Hrvatski   | country name |    41 | 100 |         |
|    |            | capital      |    11 |  28 |      29 |
| it | Italiano   | country name |    41 | 100 |         |
|    |            | capital      |    11 |  28 |      29 |
| ja | 日本語      | country name |    41 | 100 |         |
|    |            | capital      |    11 |  28 |      29 |
| nl | Nederlands | country name |    41 | 100 |         |
|    |            | capital      |    11 |  28 |      29 |
| nn | Nynorsk    | country name |    41 | 100 |         |
|    |            | capital      |    11 |  28 |      29 |
| pl | Polski     | country name |    41 | 100 |         |
|    |            | capital      |    11 |  28 |      29 |
| pt | Português  | country name |    41 | 100 |         |
|    |            | capital      |    11 |  28 |      29 |
| ru | Русский    | country name |    41 | 100 |         |
|    |            | capital      |    11 |  28 |      29 |
| zh | 中文        | country name |    41 | 100 |         |
|    |            | capital      |    11 |  28 |      29 |


##### Oceania

|    |            |              | Count |   % | Missing |
|----|------------|--------------|------:|----:|--------:|
| en | English    | country name |    25 |     |         |
|    |            | capital      |    25 |     |         |
| bg | Български  | country name |    25 | 100 |         |
|    |            | capital      |     7 |  28 |      18 |
| ca | Català     | country name |    25 | 100 |         |
|    |            | capital      |     7 |  28 |      18 |
| cs | Čeština    | country name |    25 | 100 |         |
|    |            | capital      |     7 |  28 |      18 |
| da | Dansk      | country name |    25 | 100 |         |
|    |            | capital      |     7 |  28 |      18 |
| de | Deutsch    | country name |    25 | 100 |         |
|    |            | capital      |     7 |  28 |      18 |
| es | Español    | country name |    25 | 100 |         |
|    |            | capital      |     7 |  28 |      18 |
| fi | Suomi      | country name |    25 | 100 |         |
|    |            | capital      |     7 |  28 |      18 |
| fr | Français   | country name |    25 | 100 |         |
|    |            | capital      |     7 |  28 |      18 |
| ga | Gaeilge    | country name |    25 | 100 |         |
|    |            | capital      |     7 |  28 |      18 |
| gl | Galego     | country name |    25 | 100 |         |
|    |            | capital      |     7 |  28 |      18 |
| hr | Hrvatski   | country name |    25 | 100 |         |
|    |            | capital      |     7 |  28 |      18 |
| it | Italiano   | country name |    25 | 100 |         |
|    |            | capital      |     7 |  28 |      18 |
| ja | 日本語      | country name |    25 | 100 |         |
|    |            | capital      |     7 |  28 |      18 |
| nl | Nederlands | country name |    25 | 100 |         |
|    |            | capital      |     7 |  28 |      18 |
| nn | Nynorsk    | country name |    25 | 100 |         |
|    |            | capital      |     7 |  28 |      18 |
| pl | Polski     | country name |    25 | 100 |         |
|    |            | capital      |     7 |  28 |      18 |
| pt | Português  | country name |    25 | 100 |         |
|    |            | capital      |     7 |  28 |      18 |
| ru | Русский    | country name |    25 | 100 |         |
|    |            | capital      |     7 |  28 |      18 |
| zh | 中文        | country name |    25 | 100 |         |
|    |            | capital      |     7 |  28 |      18 |


##### South America

|    |            |              | Count |   % | Missing |
|----|------------|--------------|------:|----:|--------:|
| en | English    | country name |    14 |     |         |
|    |            | capital      |    14 |     |         |
| bg | Български  | country name |    14 | 100 |         |
|    |            | capital      |     9 |  64 |       5 |
| ca | Català     | country name |    14 | 100 |         |
|    |            | capital      |     9 |  64 |       5 |
| cs | Čeština    | country name |    14 | 100 |         |
|    |            | capital      |     9 |  64 |       5 |
| da | Dansk      | country name |    14 | 100 |         |
|    |            | capital      |     9 |  64 |       5 |
| de | Deutsch    | country name |    14 | 100 |         |
|    |            | capital      |     9 |  64 |       5 |
| es | Español    | country name |    14 | 100 |         |
|    |            | capital      |     9 |  64 |       5 |
| fi | Suomi      | country name |    14 | 100 |         |
|    |            | capital      |     9 |  64 |       5 |
| fr | Français   | country name |    14 | 100 |         |
|    |            | capital      |     9 |  64 |       5 |
| ga | Gaeilge    | country name |    14 | 100 |         |
|    |            | capital      |     9 |  64 |       5 |
| gl | Galego     | country name |    14 | 100 |         |
|    |            | capital      |     9 |  64 |       5 |
| hr | Hrvatski   | country name |    14 | 100 |         |
|    |            | capital      |     9 |  64 |       5 |
| it | Italiano   | country name |    14 | 100 |         |
|    |            | capital      |     9 |  64 |       5 |
| ja | 日本語      | country name |    14 | 100 |         |
|    |            | capital      |     9 |  64 |       5 |
| nl | Nederlands | country name |    14 | 100 |         |
|    |            | capital      |     9 |  64 |       5 |
| nn | Nynorsk    | country name |    14 | 100 |         |
|    |            | capital      |     9 |  64 |       5 |
| pl | Polski     | country name |    14 | 100 |         |
|    |            | capital      |     9 |  64 |       5 |
| pt | Português  | country name |    14 | 100 |         |
|    |            | capital      |     9 |  64 |       5 |
| ru | Русский    | country name |    14 | 100 |         |
|    |            | capital      |     9 |  64 |       5 |
| zh | 中文        | country name |    14 | 100 |         |
|    |            | capital      |     9 |  64 |       5 |


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
