import classes from "./random-quotes-buttons.module.scss";
import Button from "@mui/material/Button";
import KeyboardReturnIcon from "@mui/icons-material/KeyboardReturn";
import { getQuotes } from "../../../api/quotesApi";
import { useNavigate } from "react-router-dom";

export const RandomQuotesButtons = ({ setRandomQuote, setError }: any) => {

  const navigate = useNavigate()
  return (
    <div className={classes.container}>
      <Button onClick ={() => navigate("/quotes")} startIcon={<KeyboardReturnIcon />}>Back To Quote</Button>
      <Button onClick={() => getQuotes(1).then(setRandomQuote)}>
        Generete Random Quote
      </Button>
    </div>
  );
};
