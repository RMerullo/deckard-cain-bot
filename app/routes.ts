import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [index("routes/App.tsx"),
    route("HomeScreen","./routes/HomeScreen.tsx"),
    route("RuneWordle","./routes/RuneWordle.tsx")
] satisfies RouteConfig;
