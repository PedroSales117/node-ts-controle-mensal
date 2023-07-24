import { Mongoose, connect, ConnectOptions } from "mongoose";

const database_options: ConnectOptions = {
  dbName: "monthly-control",
  serverSelectionTimeoutMS: 30000,
};

export async function connect_database(host: string): Promise<Mongoose> {
  console.info("Connecting to database...");
  return await connect(host, database_options).then((database_result) => {
    console.log("Connected to database!");
    return database_result;
  });
}
