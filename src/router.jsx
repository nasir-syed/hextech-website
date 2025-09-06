import { createBrowserRouter } from "react-router-dom";
import App from "./App";

import WebDevelopment from "./pages/services/WebDevelopment";
import AIAutomation from "./pages/services/AIAutomation";
import MobileDevelopment from "./pages/services/MobileDevelopment";
import NetworkingSecurity from "./pages/services/NetworkingSecurity";
import AIStudio from "./pages/services/AIStudio";


export const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/services/web-development", element: <WebDevelopment /> },
  { path: "/services/ai-automation", element: <AIAutomation /> },
  { path: "/services/mobile-development", element: <MobileDevelopment /> },
  { path: "/services/networking-security", element: <NetworkingSecurity /> },
  { path: "/services/ai-studio", element: <AIStudio /> },
]);
