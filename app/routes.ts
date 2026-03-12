import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [index("routes/home.tsx"),
    route("factspage","./factspage/factspage.tsx")
] satisfies RouteConfig;
