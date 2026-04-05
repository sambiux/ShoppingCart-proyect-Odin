import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import ConfigRoutes from "./routes/configRoutes";
import { ProviderComponent } from "./context/providerComponent";

const router = createBrowserRouter(ConfigRoutes);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ProviderComponent>
      <RouterProvider router={router} />
    </ProviderComponent>
  </StrictMode>
);
