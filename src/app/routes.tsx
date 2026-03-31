import { createBrowserRouter } from "react-router";
import { Root } from "./Root";
import { HomePage } from "./pages/HomePage";
import { AboutPage } from "./pages/AboutPage";
import { WhatWeDoPage } from "./pages/WhatWeDoPage";
import { PlatformPage } from "./pages/PlatformPage";
import { StandardsPage } from "./pages/StandardsPage";
import { GlobalOperationsPage } from "./pages/GlobalOperationsPage";
import { NetworkPage } from "./pages/NetworkPage";
import { TradeSupplyPage } from "./pages/TradeSupplyPage";
import { PartnershipsPage } from "./pages/PartnershipsPage";
import { ContactPage } from "./pages/ContactPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: HomePage },
      { path: "about", Component: AboutPage },
      { path: "what-we-do", Component: WhatWeDoPage },
      { path: "platform", Component: PlatformPage },
      { path: "standards", Component: StandardsPage },
      { path: "global-operations", Component: GlobalOperationsPage },
      { path: "network", Component: NetworkPage },
      { path: "trade-supply", Component: TradeSupplyPage },
      { path: "partnerships", Component: PartnershipsPage },
      { path: "contact", Component: ContactPage },
    ],
  },
]);
