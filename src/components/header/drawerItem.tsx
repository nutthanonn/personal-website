import React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

interface ItemProps {
  name: string;
  path: string;
}

const Item: ItemProps[] = [
  {
    name: "Home Page",
    path: "/",
  },
  {
    name: "Covid19 Page",
    path: "/covid19",
  },
  {
    name: "Reading Page",
    path: "reading",
  },
  {
    name: "Search Page",
    path: "/search",
  },
];

const DrawerItem: React.FC = () => {
  const changePath = (path: string) => {
    window.location.href = path;
  };

  return (
    <Box>
      <List>
        {Item.map((item, index) => {
          return (
            <ListItem key={index} button onClick={() => changePath(item.path)}>
              <ListItemText primary={item.name} />
            </ListItem>
          );
        })}
      </List>
    </Box>
  );
};

export default DrawerItem;
