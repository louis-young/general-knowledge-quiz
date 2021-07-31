import { Route, Switch } from "react-router-dom";
import { pagePaths } from "../constants/pagePaths";
import { HomePage } from "../pages/HomePage";
import { QuizPage } from "../pages/QuizPage";
import { ResultsPage } from "../pages/ResultsPage";
import { PageNotFound } from "../pages/PageNotFound";

export const Routes = () => {
  return (
    <Switch>
      <Route path={pagePaths.homePage} exact component={HomePage} />
      <Route path={pagePaths.quizPage} exact component={QuizPage} />
      <Route path={pagePaths.resultsPage} exact component={ResultsPage} />
      <Route component={PageNotFound} />
    </Switch>
  );
};
