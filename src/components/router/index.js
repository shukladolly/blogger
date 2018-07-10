import React from 'react';
import Dashboard from "../Dashboard/Dashboard";
import Reporting from "../Reporting/Reporting";
import Links from "../Links/Links";
import Performance from "../Performance/Performance";
import { Route, Switch } from 'react-router-dom';
import NotFound from '../not-found';

export const routeConfig = [{
    route: "/dashboard",
    component: Dashboard,
    key: "dashboard",
    icon:'bar-chart',
    label: "Dashboard"
}, {
    route: "/reporting",
    component: Reporting,
    key: "reporting",
    icon:'table',
    label: "Reporting"
}, {
    route: "/links",
    component: Links,
    key: "links",
    icon:'tachometer',
    label: "Links"
}, {
    route: "/performance",
    component: Performance,
    key: "performance",
    icon: "anchor",
    label: "Performance"
}];

export const Router = () => {
    const notFoundHandler = () => {
        return (<NotFound/>);
    };
    const getUrlParams = (paramString, key) => {
        const urlParams = new window.URLSearchParams(paramString);
        return urlParams.get(key);
    };
    const routesList = routeConfig.map((route) => {
        const MainComponent = route.component;
        return (
            <Route exact path={route.route} key={route.key} render={(routeProps) => {
                const tabUrlParam = getUrlParams(routeProps.location.search, 'tab');
                return <MainComponent history={routeProps.history}
                                      matchParams={routeProps.match.params}
                                      tabUrlParam={tabUrlParam}/>;
            }}/>
        );
    });
    return (
        <main className='content-section'>
            <Switch>
                {routesList}
                <Route render={() => {
                    return notFoundHandler();
                }}/>
            </Switch>
        </main>
    );
};