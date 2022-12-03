import classes from "./random-quotes-buttons.module.scss";
import Button from "@mui/material/Button";
import KeyboardReturnIcon from "@mui/icons-material/KeyboardReturn";
import { getRandomQuote } from "../../../api/quotesApi";
import { useNavigate } from "react-router-dom";
import { RandomQuoteProps } from "../../../types/types";

export const RandomQuotesButtons = ({
  setRandomQuote,
  setIsLoading,
  setError,
}: RandomQuoteProps) => {
  const navigate = useNavigate();

  const getNewRandomQuote = async () => {
    try {
      setIsLoading(true);
      const data = await getRandomQuote();
      setRandomQuote(data);
    } catch (e) {
      setError(true);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={classes.container}>
      <Button
        onClick={() => navigate("/quotes")}
        startIcon={<KeyboardReturnIcon />}
      >
        Back To Quote
      </Button>
      <Button onClick={getNewRandomQuote}>Generete Random Quote</Button>
    </div>
  );
};
