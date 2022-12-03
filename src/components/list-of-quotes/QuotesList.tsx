import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import classes from "./quotes-list.module.scss";
import { QuoteWithNationality } from "../../types/types";
import { useState, useEffect } from "react";
import { getQuotesWithNationalities } from "./utils";
import CircularProgress from "@mui/material/CircularProgress";

export default function QuotesList() {
  const [quotes, setQuotes] = useState<QuoteWithNationality[]>([]);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const init = async () => {
      try {
        setIsLoading(true);
        const quotesWithNationalities = await getQuotesWithNationalities();
        setQuotes(quotesWithNationalities);
      } catch (e) {
        console.error(e);
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };

    void init();
  }, []);

  if (error) {
    return (
      <h1 style={{ color: "white" }}>
        Connection problem, please try again later
      </h1>
    );
  }

  return (
    <TableContainer
      className={classes.container}
      component={Paper}
      sx={{
        width: "100%",
        maxWidth: 800,
        borderRadius: "none",
        alignItems: isLoading ? "center" : "none",
      }}
    >
      {isLoading ? (
        <CircularProgress className={classes.spiner} />
      ) : (
        <Table
          sx={{ minWidth: 650, height: "100%", borderRadius: "none" }}
          aria-label="simple table"
        >
          <TableHead>
            <TableRow className={classes.mainRow}>
              <TableCell>ID</TableCell>
              <TableCell align="left">Quote</TableCell>
              <TableCell align="left">Name</TableCell>
              <TableCell align="left">Country ID</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {quotes.map((quote: QuoteWithNationality, index: number) => (
              <TableRow
                key={index}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="left">{index + 1}</TableCell>
                <TableCell align="left">{quote.sentence}</TableCell>
                <TableCell align="left">{quote.character.name}</TableCell>
                <TableCell align="left">
                  <img src={quote.countryImage} alt={quote.countryId} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
    </TableContainer>
  );
}
