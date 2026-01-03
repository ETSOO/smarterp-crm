import { IdentityTypeFlags } from "@etsoo/appscript";
import { CrmApp } from "../src";
import { Person } from "../src/utils/Person";
import { isLocalTest, TestApp } from "./app/TestApp";
import { PersonApi } from "../src/PersonApi";

const app = new TestApp();

// Make sure the app is initialized before running the tests
await new Promise((resolve) => setTimeout(resolve, 100));

await app.changeCulture(app.settings.cultures[0]);

const api = new PersonApi(app);

const crm = new CrmApp(app, app.api);
const utils = new Person(crm);

test("utils.getIdentityType tests", () => {
  // Contact label is defined in current app
  const contactType = utils.getIdentityType({
    name: "Garry",
    identityType: IdentityTypeFlags.None
  });
  expect(contactType).toBe("Contact");

  const userType = utils.getIdentityType({
    name: "Garry",
    identityType: IdentityTypeFlags.User
  });
  expect(userType).toBe("User");

  // Organization label is defined in core app
  const orgType = utils.getIdentityType({
    name: "ETSOO",
    identityType: IdentityTypeFlags.Org
  });
  expect(orgType).toBe("Org");

  const csType = utils.getIdentityType({
    name: "CustomerAndSupplier",
    identityType: IdentityTypeFlags.Customer | IdentityTypeFlags.Supplier
  });
  expect(csType).toBe("Customer, Supplier");
});

test("utils.getGender tests", () => {
  const male = utils.getGender("M");
  expect(male).toBe("男");

  const female = utils.getGender("F");
  expect(female).toBe("女");
});

if (isLocalTest) {
}
