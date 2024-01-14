import { Admin, Resource } from "react-admin";

import { dataProvider } from "../data";
import { i18nProvider } from "../i18n";

import products from "../pages/products";
import dashboard from "../pages/dashboard";
import Dashboard from "../pages/dashboard";

const App = () => (
  <Admin
    dataProvider={dataProvider}
    i18nProvider={i18nProvider}
    // dashboard={Dashboard}
  >
    <Resource name="products" options={{ label: "Produto" }} {...products} />
  </Admin>
);

export default App;
