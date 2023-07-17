"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const commander_1 = require("commander");
const compute_1 = __importDefault(require("@spheron/compute"));
const utils_1 = require("./utils");
const configuration_1 = __importDefault(require("./configuration"));
commander_1.program
    .command("spheron-compute-get-instance <Instance>")
    .description("Get the instance details")
    .action(async (instanceID) => {
    const jwtToken = await (0, utils_1.readFromJsonFile)("jwtToken", configuration_1.default.configFilePath);
    if (!jwtToken) {
        throw new Error("Authorization failed. Please execute login command first");
    }
    const client = new compute_1.default({
        token: jwtToken
    });
    const instance = await client.instance.get(instanceID);
    console.log(instance);
});
commander_1.program
    .command("spheron-compute-get-org")
    .description("Get the organization details")
    .action(async () => {
    const jwtToken = await (0, utils_1.readFromJsonFile)("jwtToken", configuration_1.default.configFilePath);
    if (!jwtToken) {
        throw new Error("Authorization failed. Please execute login command first");
    }
    const client = new compute_1.default({
        token: jwtToken
    });
    console.log(client);
    const organization = await client.organization.get();
    console.log(organization);
});
commander_1.program
    .command("spheron-compute-getall-marketplaces")
    .description("Get all marketplace details")
    .action(async () => {
    const jwtToken = await (0, utils_1.readFromJsonFile)("jwtToken", configuration_1.default.configFilePath);
    if (!jwtToken) {
        throw new Error("Authorization failed. Please execute login command first");
    }
    const client = new compute_1.default({
        token: jwtToken
    });
    const marketplaceApps = await client.computeMarketplace.getAll();
    console.log(marketplaceApps);
});
commander_1.program
    .command("spheron-compute-get-marketplace <marketplaceAppId>")
    .description("Get a marketplace app details by marketplace app ID")
    .action(async (marketplaceAppId) => {
    const jwtToken = await (0, utils_1.readFromJsonFile)("jwtToken", configuration_1.default.configFilePath);
    if (!jwtToken) {
        throw new Error("Authorization failed. Please execute login command first");
    }
    const client = new compute_1.default({
        token: jwtToken
    });
    const marketplaceApp = await client.computeMarketplace.get(marketplaceAppId);
    console.log(marketplaceApp);
});
commander_1.program
    .command("spheron-compute-get-marketplace-categories")
    .description("Get all marketplace categories")
    .action(async () => {
    const jwtToken = await (0, utils_1.readFromJsonFile)("jwtToken", configuration_1.default.configFilePath);
    if (!jwtToken) {
        throw new Error("Authorization failed. Please execute login command first");
    }
    const client = new compute_1.default({
        token: jwtToken
    });
    const categories = await client.computeMarketplace.getCategories();
    console.log(categories);
});
commander_1.program
    .command("spheron-compute-get-compute-machines")
    .description("Used to get list of available compute machines.")
    .action(async () => {
    const jwtToken = await (0, utils_1.readFromJsonFile)("jwtToken", configuration_1.default.configFilePath);
    if (!jwtToken) {
        throw new Error("Authorization failed. Please execute login command first");
    }
    const client = new compute_1.default({
        token: jwtToken
    });
    console.log(client);
    const computeMachines = await client.computeMachine.get({
        skip: 0,
        limit: 10,
        search: "2Gi",
    });
    console.log(computeMachines);
});
commander_1.program
    .command("spheron-compute-get-regions")
    .description("Used to get available regions.")
    .action(async () => {
    const jwtToken = await (0, utils_1.readFromJsonFile)("jwtToken", configuration_1.default.configFilePath);
    if (!jwtToken) {
        throw new Error("Authorization failed. Please execute login command first");
    }
    const client = new compute_1.default({
        token: jwtToken
    });
    const regions = await client.computeMachine.getRegions();
    console.log(regions);
});
commander_1.program.parse(process.argv);
