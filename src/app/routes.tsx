import { createBrowserRouter } from "react-router";
import { Root } from "./Root";
import { HomePage } from "./pages/HomePage";
import { AboutPage } from "./pages/AboutPage";
import { WhatWeDoPage } from "./pages/WhatWeDoPage";

import { StandardsPage } from "./pages/StandardsPage";
import { GlobalOperationsPage } from "./pages/GlobalOperationsPage";
import { NetworkPage } from "./pages/NetworkPage";
import { TradeSupplyPage } from "./pages/TradeSupplyPage";
import { LogisticsPage } from "./pages/LogisticsPage";
import { PartnershipsPage } from "./pages/PartnershipsPage";
import { ContactPage } from "./pages/ContactPage";
import { TrackingPage } from "./pages/TrackingPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: HomePage },
      { path: "about", Component: AboutPage },
      { path: "what-we-do", Component: WhatWeDoPage },

      { path: "standards", Component: StandardsPage },
      { path: "global-operations", Component: GlobalOperationsPage },
      { path: "network", Component: NetworkPage },
      { path: "trade-supply", Component: TradeSupplyPage },
      { path: "logistics", Component: LogisticsPage },
      { path: "partnerships", Component: PartnershipsPage },
      { path: "contact", Component: ContactPage },
      { path: "tracking", Component: TrackingPage },
    ],
  },
]);
