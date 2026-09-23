import { QueryClient } from "@tanstack/react-query";
import { createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";

export const getRouter = () => {
  const queryClient = new QueryClient();

  const router = createRouter({
    routeTree,
    context: { queryClient },
    // ponytail: Pages serves under /wordpress_portfolio; dev serves at /.
    // Without this the client router mismatches on load -> "Invariant failed".
    basepath: import.meta.env.DEV ? "/" : "/wordpress_portfolio",
    scrollRestoration: true,
    defaultPreloadStaleTime: 0,
  });

  return router;
};
