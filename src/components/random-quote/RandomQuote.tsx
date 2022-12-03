import classes from "./random-quote.module.scss";
import CircularProgress from "@mui/material/CircularProgress";

export const RandomQuote = ({
  sentence,
  name,
  isLoading,
}: {
  sentence: string;
  name: string;
  isLoading: boolean;
}) => {
  return (
    <>
      <div className={classes.container}>
        {isLoading ? (
          <CircularProgress />
        ) : (
          <>
            <h1>{`#${Math.floor(Math.random() * 30) + 1}`}</h1>
            <p>{sentence}</p>
            <h3>{name}</h3>
          </>
        )}
      </div>
    </>
  );
};
