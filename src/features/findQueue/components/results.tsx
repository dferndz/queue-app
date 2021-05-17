import React from "react";
import { List, ListItem } from "@material-ui/core";

import { Queue } from "../types";

type SearchProps = {
  data: Queue[];
  onSelect: (id: string) => void;
};

const SearchResults = ({ data, onSelect }: SearchProps) => {
  return (
    <List component="nav">
      {data.map((q: Queue, index: number) => (
        <ListItem onClick={() => onSelect(q.id)} key={index} button>
          {`${q.id} - ${q.school}`}
        </ListItem>
      ))}
    </List>
  );
};

export default SearchResults;
