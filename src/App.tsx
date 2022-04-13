import React, { Component, Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { PageLoader, NotFound } from "./components/Common";
import { ROUTES } from "./common/constants";
import MainLayout from "./layouts";
import Dashboard from "./components/Dashboard";
import "./styles/styles.scss"; // global styles

const CharacterView = React.lazy(() => import("./components/CharacterView"));
const FavouriteView = React.lazy(() => import("./components/FavouriteView"));

class App extends Component {
  render() {
    return (
      <Router>
        <Suspense fallback={<PageLoader />}>
          <MainLayout>
            <Switch>
              <Route exact path={ROUTES.APP_ROOT} component={Dashboard} />
              <Route exact path={ROUTES.CHARACTER} component={CharacterView} />
              <Route exact path={ROUTES.FAVOURITES} component={FavouriteView} />
              <Route component={NotFound} />
            </Switch>
          </MainLayout>
        </Suspense>
      </Router>
    );
  }
}

export default App;
