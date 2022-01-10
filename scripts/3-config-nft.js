import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const bundleDrop = sdk.getBundleDropModule(
  "0xa1e89D51c43DB58791Dc9227121C892bdC232BB0",
);

(async () => {
  try {
    await bundleDrop.createBatch([
      {
        name: "Adrian Paul Tabulado",
        description: "This NFT will give you access to SoccerDAO!",
        image: readFileSync("scripts/assets/adrian.jpg"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})()