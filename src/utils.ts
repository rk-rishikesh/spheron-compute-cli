import fs from "fs";

export async function readFromJsonFile(
  key: string,
  path: string
): Promise<any> {
  let config: any = {};
  try {
    const fileContents = await fs.promises.readFile(path, "utf-8");
    config = JSON.parse(fileContents);
  } catch (err) {
    console.error("Error reading Spheron config file:", err.message);
    return undefined;
  }
  return config[key];
}



