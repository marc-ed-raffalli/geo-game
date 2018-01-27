import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getActiveLanguage, getTranslate} from 'react-localize-redux';

import {footerItems, locale} from '../constants';
import {supportedGameLocales} from '../services/localizationService';
import {areas} from '../services/countriesService';

import Header from '../components/start-screen/header/Header';
import AreaList from '../components/start-screen/area-list/AreaList';
import PageFooter from '../components/page-footer/PageFooter';
import LocaleSelect from '../components/start-screen/locale-select/LocaleSelect';

class StartScreen extends Component {

  render() {
    const {selectedLocale, translate} = this.props,
      localizedModes = {
        countryName: translate('modes.country-name'),
        capital: translate('modes.capital'),
        flag: translate('modes.flag')
      },
      localizedAreas = areas.map(area => ({id: area, label: translate(`continents.${area}`)}));

    return (
      <div className="container">
        <Header
          title={translate('header.title')}
          sub-title={translate('header.sub-title')}
          description={translate('header.description')}>
          <LocaleSelect locales={supportedGameLocales} selectedLocale={selectedLocale}/>
        </Header>
        <AreaList items={localizedAreas} modes={localizedModes} selectedLocale={selectedLocale}/>
        <PageFooter locale={locale} items={footerItems.map(item => ({
          text: item.text || translate(`footer.${item.id}`),
          url: item.url
        }))}/>
      </div>
    );
  }

}

const mapStateToProps = state => ({
  translate: getTranslate(state.locale),
  selectedLocale: getActiveLanguage(state.locale).code
});

export default connect(
  mapStateToProps
)(StartScreen);
