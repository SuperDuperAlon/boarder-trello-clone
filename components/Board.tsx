"use client";

import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { useEffect } from "react";

function Board() {
  useEffect(() => {
    // getBoard()
  }, []);

  return (
    <DragDropContext>
      <Droppable droppableId="board" direction="horizontal" type="column">
        {(provided) => <div>{/* render all the columns */}</div>}
      </Droppable>
    </DragDropContext>
  );
}

export default Board;
