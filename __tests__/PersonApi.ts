import { PersonApi } from "../src";
import { isLocalTest, TestApp } from "./app/TestApp";

const app = new TestApp();

await app.changeCulture(app.settings.cultures[0]);

const api = new PersonApi(app);

if (isLocalTest) {
}
