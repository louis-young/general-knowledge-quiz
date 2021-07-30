import { Route, Switch } from "react-router-dom";
import { pagePaths } from "../constants/pagePaths";
import { HomePage } from "../pages/HomePage";
import { PageNotFound } from "../pages/PageNotFound";

export const Routes = () => {
  return (
    <Switch>
      <Route path={pagePaths.homePage} exact component={HomePage} />
      <Route component={PageNotFound} />
    </Switch>
  );
};
