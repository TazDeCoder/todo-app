import React from "react";
import { AppBar, Toolbar } from "@mui/material";

import NewTodo from "./NewTodo";
import TodoButtonGroup from "./TodoButtonGroup";

import { Todo } from "../../models/index";

function TodoAppBar({
  isArchives,
  isAscending,
  onNewTodo,
  onToggleArchives,
  onToggleSort,
}: {
  isArchives: boolean;
  isAscending: boolean | null;
  onNewTodo: (newTodo: Todo) => void;
  onToggleArchives: () => void;
  onToggleSort: () => void;
}) {
  return (
    <AppBar
      sx={{ maxWidth: "45rem", mx: "auto" }}
      position="static"
      color="transparent"
    >
      <Toolbar
        sx={{
          flexFlow: {
            xs: "column wrap",
            sm: "row wrap",
          },
          justifyContent: "center",
        }}
      >
        <NewTodo isArchives={isArchives} onNewTodo={onNewTodo} />
        <TodoButtonGroup
          isArchives={isArchives}
          isAscending={isAscending}
          onToggleArchives={onToggleArchives}
          onToggleSort={onToggleSort}
        />
      </Toolbar>
    </AppBar>
  );
}

export default TodoAppBar;
