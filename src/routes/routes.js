import Main from "../pages/NotAuth/Main/Main";

export const routes = [
    {
        name: 'main',
        privateUrl: false,
        component: <Main />,
        path: '/',
        exact: true,
        headerType: 1,
        footerType: 1,
    },
]