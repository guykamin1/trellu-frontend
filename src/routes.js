import { TrelluHome } from "./pages/TrelluHome";
import { TrelluWorkspace } from "./pages/TrelluWorkspace";
import { TrelluLogin } from "./pages/TrelluLogin";
import { TrelluBoard } from "./pages/TrelluBoard";

const routes = [
    {
        path: '/',
        component: TrelluHome,
    },
    {
        path: '/workspace',
        component: TrelluWorkspace,
    },
    {
        path: '/login',
        component: TrelluLogin,
    },
    {
        path: '/board/:id',
        component: TrelluBoard,
    }
]

export default routes;