import QuotesList from "../../components/list-of-quotes/QuotesList";
import Button from "@mui/material/Button";
import classes from "./quotes-page.module.scss";
import { useNavigate } from "react-router-dom";

export const QuotesPage = () => {
  const navigate = useNavigate();

  return (
    <div className={classes.container}>
      <QuotesList />
      <Button onClick={() => navigate("/random-quote")}>
        Generate Game Of Thrones Wisdom
      </Button>
    </div>
  );
};
