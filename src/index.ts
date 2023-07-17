import { program } from "commander";
import SpheronClient, {
  ComputeMachine,
  Instance,
  MarketplaceApp,
  Organization,
} from "@spheron/compute";
import { readFromJsonFile } from "./utils";
import configuration from "./configuration";



// Need to login first
program
  .command("spheron-compute-get-instance <Instance>")
  .description("Get the instance details")
  .action(async (instanceID: string) => {
    const jwtToken = await readFromJsonFile(
      "jwtToken",
      configuration.configFilePath
    );
    if (!jwtToken) {
      throw new Error("Authorization failed. Please execute login command first");
    }
    
    const client = new SpheronClient({
      token: jwtToken
    });
    const instance: Instance = await client.instance.get(instanceID);
    console.log(instance);
  });

// Need to login first
program
  .command("spheron-compute-get-org")
  .description("Get the organization details")
  .action(async () => {
    const jwtToken = await readFromJsonFile(
      "jwtToken",
      configuration.configFilePath
    );
    if (!jwtToken) {
      throw new Error("Authorization failed. Please execute login command first");
    }
    
    const client = new SpheronClient({
      token: jwtToken
    });
    console.log(client);
    const organization: Organization = await client.organization.get();
    console.log(organization);
  });

// Compute Marketplace
program
  .command("spheron-compute-getall-marketplaces")
  .description("Get all marketplace details")
  .action(async () => {
    const jwtToken = await readFromJsonFile(
      "jwtToken",
      configuration.configFilePath
    );
    if (!jwtToken) {
      throw new Error("Authorization failed. Please execute login command first");
    }
    
    const client = new SpheronClient({
      token: jwtToken
    });
    const marketplaceApps: MarketplaceApp[] =
      await client.computeMarketplace.getAll();
    console.log(marketplaceApps);
  });

program
  .command("spheron-compute-get-marketplace <marketplaceAppId>")
  .description("Get a marketplace app details by marketplace app ID")
  .action(async (marketplaceAppId: string) => {
    const jwtToken = await readFromJsonFile(
      "jwtToken",
      configuration.configFilePath
    );
    if (!jwtToken) {
      throw new Error("Authorization failed. Please execute login command first");
    }
    
    const client = new SpheronClient({
      token: jwtToken
    });
    const marketplaceApp: MarketplaceApp = await client.computeMarketplace.get(
      marketplaceAppId
    );
    console.log(marketplaceApp);
  });

program
  .command("spheron-compute-get-marketplace-categories")
  .description("Get all marketplace categories")
  .action(async () => {
    const jwtToken = await readFromJsonFile(
      "jwtToken",
      configuration.configFilePath
    );
    if (!jwtToken) {
      throw new Error("Authorization failed. Please execute login command first");
    }
    
    const client = new SpheronClient({
      token: jwtToken
    });
    const categories: string[] =
      await client.computeMarketplace.getCategories();
    console.log(categories);
  });

// Compute Machine - Needs Login
program
  .command("spheron-compute-get-compute-machines")
  .description("Used to get list of available compute machines.")
  .action(async () => {
    const jwtToken = await readFromJsonFile(
      "jwtToken",
      configuration.configFilePath
    );
    if (!jwtToken) {
      throw new Error("Authorization failed. Please execute login command first");
    }
    
    const client = new SpheronClient({
      token: jwtToken
    });
    console.log(client)
    const computeMachines: ComputeMachine[] = await client.computeMachine.get({
      skip: 0,
      limit: 10,
      search: "2Gi",
    });
    console.log(computeMachines);
  });

program
  .command("spheron-compute-get-regions")
  .description("Used to get available regions.")
  .action(async () => {
    const jwtToken = await readFromJsonFile(
      "jwtToken",
      configuration.configFilePath
    );
    if (!jwtToken) {
      throw new Error("Authorization failed. Please execute login command first");
    }
    
    const client = new SpheronClient({
      token: jwtToken
    });
    const regions: string[] = await client.computeMachine.getRegions();
    console.log(regions);
  });

program.parse(process.argv);
