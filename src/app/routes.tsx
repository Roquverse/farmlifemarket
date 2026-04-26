import { createBrowserRouter } from "react-router";
import { Root } from "./Root";
import { HomePage } from "./pages/HomePage";
import { AboutPage } from "./pages/AboutPage";
import { WhatWeDoPage } from "./pages/WhatWeDoPage";

import { QualityCompliancePage } from "./pages/QualityCompliance";
import { GlobalOperationsPage } from "./pages/GlobalOperationsPage";
import { NetworkPage } from "./pages/NetworkPage";
import { TradeSupplyPage } from "./pages/TradeSupplyPage";
import { LogisticsPage } from "./pages/LogisticsPage";
import { PartnershipsPage } from "./pages/PartnershipsPage";
import { ConnectPage } from "./pages/ConnectPage";
import { TrackingPage } from "./pages/TrackingPage";
import { ComingSoonPage } from "./pages/ComingSoonPage";
import { NotFoundPage } from "./pages/NotFoundPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: HomePage },
      { path: "about", Component: AboutPage },
      { path: "what-we-do", Component: WhatWeDoPage },

      { path: "quality-compliance", Component: QualityCompliancePage },
      { path: "global-operations", Component: GlobalOperationsPage },
      { path: "network", Component: NetworkPage },
      { path: "trade-supply", Component: TradeSupplyPage },
      { path: "logistics", Component: LogisticsPage },
      { path: "partnerships", Component: PartnershipsPage },
      { path: "connect", Component: ConnectPage },
      { path: "tracking", Component: TrackingPage },
      { path: "coming-soon", Component: ComingSoonPage },
      { path: "*", Component: NotFoundPage },
    ],
  },
]);
