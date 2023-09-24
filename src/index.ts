import dotenv from "dotenv";
import { getConnection } from "./utils/mongoconnection";
dotenv.config();

/*
 to run the program, run `npm run dev` in your terminal

 when you save your changes, the program will automatically restart
 
 to stop the program, press `ctrl + c` in your terminal
*/

async function main() {
  console.log("Welcome :3");
  // we already establish the connection to MongoDB for you
  const client = await getConnection();

  // your code goes here!
}

main();
