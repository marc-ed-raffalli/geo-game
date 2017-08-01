import React from 'react';

import {locale} from '../constants';
import {areas} from '../services/countriesService';

import Header from '../components/start-screen/header/Header';
import AreaList from '../components/start-screen/area-list/AreaList';
import PageFooter from '../components/page-footer/PageFooter';

export default () => (
  <div className="container">
    <Header/>
    <AreaList items={areas}/>
    <PageFooter locale={locale}/>
  </div>
);
