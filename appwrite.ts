import { Client, Account, ID, Databases, Storage } from "appwrite";

const client = new Client()
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID!);

const storage = new Storage(client);
const account = new Account(client);
const databases = new Databases(client);

export { client, account, databases, storage, ID };

// 647ae4109f06b078ebb6
