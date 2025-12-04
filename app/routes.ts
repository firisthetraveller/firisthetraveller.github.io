import {
    type RouteConfig,
    index,
    route
} from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    route("projects", "./routes/projects.jsx"),
    route("projects/:id", "./routes/projects/ProjectDetails.jsx")
] satisfies RouteConfig;
