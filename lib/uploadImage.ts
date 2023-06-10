import { ID, storage } from "@/appwrite";

const uploadImage = async (file: File) => {
  if (!file) return;

  const fileUploaded = await storage.createFile(
    "647ae99b67e9fcd22ad9",
    ID.unique(),
    file
  );

  return fileUploaded;
};

export default uploadImage;
