import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { MainView } from "~client/components/sites/MainView";
import { Navigation } from "~client/components/Navigation";
import ChartPage from "~client/components/chart-view/ChartPage";
import { detailPage } from '../../components/oil-rigs/detailPage';
import { BrowserRouter } from 'react-router-dom';
import { ProgressBar } from '../../components/ProgressBar';
import { useSelector } from "react-redux";


export const Routes = () => {
  const getLoaderState = useSelector((state) => state.entities.sites.loading);
  return (
    <>
      <BrowserRouter>
        <Navigation />
        <Switch>
          <Route path='/' exact component={getLoaderState ? ProgressBar : MainView} />
          <Route path="/chart" component={ChartPage} />
          <Route path='/oil-rigs' component={getLoaderState ? ProgressBar : detailPage} />
          <Route component={MainView} />
        </Switch>
      </BrowserRouter>
    </>
  );
};
