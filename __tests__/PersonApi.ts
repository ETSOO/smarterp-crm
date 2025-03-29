import { IdentityTypeFlags } from "@etsoo/appscript";
import { CrmApp, PersonApi } from "../src";
import { Person } from "../src/utils/Person";
import { isLocalTest, TestApp } from "./app/TestApp";

const app = new TestApp();

await app.changeCulture(app.settings.cultures[0]);

const api = new PersonApi(app);

const crm = new CrmApp(app, app.api);
const utils = new Person(crm);

test("utils.getIdentityType tests", () => {
  // Contact label is defined in current app
  const contactType = utils.getIdentityType({ isOrg: false });
  expect(contactType).toBe("联系人");

  // Organization label is defined in core app
  const orgType = utils.getIdentityType({ isOrg: true });
  expect(orgType).toBe("Organization");

  const csType = utils.getIdentityType({
    isOrg: false,
    identityType: IdentityTypeFlags.CustomerOrSupplier
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
