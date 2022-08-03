import { FC, useState } from "react";
import { FormControl, InputAdornment, OutlinedInput } from "@mui/material";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

import { MainContainer } from "./../containers";

export const Search: FC = () => {
  const [search, setSearch] = useState<string>("");

  return (
    <>
      <MainContainer>
        <form>
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
