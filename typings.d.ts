interface Board {
  columns: Map<TypedColumn, Column>;
}

type TypedColumn = "todo" | "inProgress" | "done";

interface Column {
  id: TypedColumn;
  todos: todo[];
}

interface Todo extends Models.Document {
  $id: string;
  $createdAt: string;
  title: string;
  status: TypedColumn;
  image?: any;
}

interface Image {
  bucketId: string;
  fileId: string;
}
