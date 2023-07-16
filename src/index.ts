import { program } from "commander";
import SpheronClient, {
  ComputeMachine,
  Instance,
  MarketplaceApp,
  Organization,
} from "@spheron/compute";

const client = new SpheronClient({
  token:
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGlLZXkiOiJlZDc2N2ZjOTE1N2EyZmQ3YTdlMmYxZDFjYjhjODNjZGY2MDE3YWYyYzc1ZjgzZjYyZjhkZThlYmMzMGYzNTMzY2IwOTY3YjI1YTVkMmM2NTMyMzZjNmZhNjBjNWM0MWE4ZmVkYmIwYzA0MzI1NGQzOTgxZGQyOTNjYzQ5YmQxNSIsImlhdCI6MTY4OTQ4OTc0NSwiaXNzIjoid3d3LnNwaGVyb24ubmV0d29yayJ9.A6oAvNnorE5Opjy1oPiqLTY-xL7jc1AaW0U9nJzDVi4",
});

// Need to login first
program
  .command("spheron-compute-get-instance <Instance>")
  .description("Get the instance details")
  .action(async (instanceID: string) => {
    const instance: Instance = await client.instance.get(instanceID);
    console.log(instance);
  });

// Need to login first
program
  .command("spheron-compute-get-org")
  .description("Get the organization details")
  .action(async () => {
    console.log(client);
    const organization: Organization = await client.organization.get();
    console.log(organization);
  });

// Compute Marketplace
program
  .command("spheron-compute-getall-marketplaces")
  .description("Get all marketplace details")
  .action(async () => {
    const marketplaceApps: MarketplaceApp[] =
      await client.computeMarketplace.getAll();
    console.log(marketplaceApps);
  });

program
  .command("spheron-compute-get-marketplace <marketplaceAppId>")
  .description("Get a marketplace app details by marketplace app ID")
  .action(async (marketplaceAppId: string) => {
    const marketplaceApp: MarketplaceApp = await client.computeMarketplace.get(
      marketplaceAppId
    );
    console.log(marketplaceApp);
  });

program
  .command("spheron-compute-get-marketplace-categories")
  .description("Get all marketplace categories")
  .action(async () => {
    const categories: string[] =
      await client.computeMarketplace.getCategories();
    console.log(categories);
  });

// Compute Machine - Needs Login
program
  .command("spheron-compute-get-compute-machines")
  .description("Used to get list of available compute machines.")
  .action(async () => {
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
    const regions: string[] = await client.computeMachine.getRegions();
    console.log(regions);
  });

program.parse(process.argv);
