import { FC, useState } from "react";
import { useSetRecoilState } from "recoil";
import { FormControl, InputAdornment, OutlinedInput } from "@mui/material";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

import { bookListState } from "../../atoms";

import { getBookByQuery } from "../../services";

import { MainContainer } from "./../containers";

export const Search: FC = () => {
  const [search, setSearch] = useState<string>("");

  const setBookList = useSetRecoilState(bookListState);

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      const books: any = await getBookByQuery(search);

      setBookList((c) => ({
        books,
      }));

      setSearch("");
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <>
      <MainContainer>
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
              placeholder="Buscar libro"
            />
          </FormControl>
        </form>
      </MainContainer>
    </>
  );
};
