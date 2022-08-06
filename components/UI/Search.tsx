import { FC, useEffect, useState } from "react";
import { useSetRecoilState } from "recoil";
import {
  CircularProgress,
  FormControl,
  InputAdornment,
  OutlinedInput,
} from "@mui/material";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

import { bookListState } from "../../atoms";

import { getBookByQuery } from "../../services";

import { AnimationContainer, MainContainer } from "./../containers";
import { ErrorSearch } from "./Alerts";

export const Search: FC = () => {
  const [search, setSearch] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [timer, setTimer] = useState<any>(null);

  const setBookList = useSetRecoilState(bookListState);

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      setLoading((c) => !c);
      const books: any = await getBookByQuery(search);
      setLoading((c) => !c);

      setBookList((c) => ({
        books,
      }));

      setSearch("");
    } catch (error) {
      setLoading((c) => !c);
      setError("No se encontraron libros, intenta de nuevo");

      const time = setTimeout(() => {
        setError("");
      }, 4500);

      setTimer(time);
    }
  };

  useEffect(() => {
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <MainContainer>
        <AnimationContainer>
          <form onSubmit={handleSubmit}>
            <FormControl fullWidth>
              <OutlinedInput
                id="search"
                name="search"
                value={search}
                onChange={({ target }) => setSearch(target.value)}
                startAdornment={
                  <InputAdornment position="start">
                    <SearchOutlinedIcon fontSize="large" />
                  </InputAdornment>
                }
                endAdornment={
                  loading && (
                    <InputAdornment position="start">
                      <CircularProgress color="info" size={20} />
                    </InputAdornment>
                  )
                }
                disabled={loading ? true : false}
                placeholder="Buscar libro"
              />
              <ErrorSearch error={error} />
            </FormControl>
          </form>
        </AnimationContainer>
      </MainContainer>
    </>
  );
};
