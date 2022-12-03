import classes from "./App.module.scss";
import { QuotesPage } from "./pages/quotes-page/QuotesPage";
import { Routes, Route, Navigate } from "react-router-dom";
import { RandomQuotesPage } from "./pages/random-quotes-page/RandomQuotesPage";

function App() {
  return (
    <div className={classes.app}>
      <Routes>
        <Route path="*" element={<Navigate to="/quotes" />} />
        <Route path="/quotes" element={<QuotesPage />} />
        <Route path="/random-quote" element={<RandomQuotesPage />} />
      </Routes>
    </div>
  );
}

export default App;
