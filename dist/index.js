"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const commander_1 = require("commander");
const compute_1 = require("@spheron/compute");
const client = new compute_1.default({
    token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGlLZXkiOiJlZDc2N2ZjOTE1N2EyZmQ3YTdlMmYxZDFjYjhjODNjZGY2MDE3YWYyYzc1ZjgzZjYyZjhkZThlYmMzMGYzNTMzY2IwOTY3YjI1YTVkMmM2NTMyMzZjNmZhNjBjNWM0MWE4ZmVkYmIwYzA0MzI1NGQzOTgxZGQyOTNjYzQ5YmQxNSIsImlhdCI6MTY4OTQ4OTc0NSwiaXNzIjoid3d3LnNwaGVyb24ubmV0d29yayJ9.A6oAvNnorE5Opjy1oPiqLTY-xL7jc1AaW0U9nJzDVi4",
});
// Need to login first
commander_1.program
    .command("spheron-compute-get-instance <Instance>")
    .description("Get the instance details")
    .action((instanceID) => __awaiter(void 0, void 0, void 0, function* () {
    const instance = yield client.instance.get(instanceID);
    console.log(instance);
}));
// Need to login first
commander_1.program
    .command("spheron-compute-get-org")
    .description("Get the organization details")
    .action(() => __awaiter(void 0, void 0, void 0, function* () {
    console.log(client);
    const organization = yield client.organization.get();
    console.log(organization);
}));
// Compute Marketplace
commander_1.program
    .command("spheron-compute-getall-marketplaces")
    .description("Get all marketplace details")
    .action(() => __awaiter(void 0, void 0, void 0, function* () {
    const marketplaceApps = yield client.computeMarketplace.getAll();
    console.log(marketplaceApps);
}));
commander_1.program
    .command("spheron-compute-get-marketplace <marketplaceAppId>")
    .description("Get a marketplace app details by marketplace app ID")
    .action((marketplaceAppId) => __awaiter(void 0, void 0, void 0, function* () {
    const marketplaceApp = yield client.computeMarketplace.get(marketplaceAppId);
    console.log(marketplaceApp);
}));
commander_1.program
    .command("spheron-compute-get-marketplace-categories")
    .description("Get all marketplace categories")
    .action(() => __awaiter(void 0, void 0, void 0, function* () {
    const categories = yield client.computeMarketplace.getCategories();
    console.log(categories);
}));
// Compute Machine
commander_1.program
    .command("spheron-compute-get-compute-machines")
    .description("Used to get list of available compute machines.")
    .action(() => __awaiter(void 0, void 0, void 0, function* () {
    const computeMachines = yield client.computeMachine.get({
        skip: 0,
        limit: 10,
        search: "2Gi",
    });
    console.log(computeMachines);
}));
commander_1.program
    .command("spheron-compute-get-regions")
    .description("Used to get available regions.")
    .action(() => __awaiter(void 0, void 0, void 0, function* () {
    const regions = yield client.computeMachine.getRegions();
    console.log(regions);
}));
commander_1.program.parse(process.argv);
