import classes from "./random-quote.module.scss";

export const RandomQuote = ({ sentence, name }: {sentence: string, name: string}) => {
  return (
    <>
      <div className={classes.container}>
        <h1>{`#${Math.floor(Math.random() * 30) + 1}`}</h1>
        <p>{sentence}</p>
        <h3>{name}</h3>
      </div>
    </>
  );
};
