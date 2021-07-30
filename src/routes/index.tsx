import { Route, Switch } from "react-router-dom";
import { pagePaths } from "../constants/pagePaths";
import { HomePage } from "../pages/HomePage";
import { QuizPage } from "../pages/QuizPage";
import { PageNotFound } from "../pages/PageNotFound";

export const Routes = () => {
  return (
    <Switch>
      <Route path={pagePaths.homePage} exact component={HomePage} />
      <Route path={pagePaths.quizPage} exact component={QuizPage} />
      <Route component={PageNotFound} />
    </Switch>
  );
};
