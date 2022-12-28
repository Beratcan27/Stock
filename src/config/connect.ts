import dotenv from "dotenv";

dotenv.config();

const MONGO_DB_URL = String(process.env.MONGO_DB_URL);
const PORT = Number(process.env.PORT) || 3007;

export const connect = {
  mongo: {
    url: MONGO_DB_URL,
  },
  server: {
    port: PORT,
  },
};
