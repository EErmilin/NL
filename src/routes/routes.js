import Business from "../pages/NotAuth/Business/Business";
import Contacts from "../pages/NotAuth/Contacts/Contacts";
import Main from "../pages/NotAuth/Main/Main";
import OurStory from "../pages/NotAuth/OurStory/OurStory";
import Registration from "../pages/NotAuth/Registration/Registration";

export const routes = [
    {
        name: 'main',
        privateUrl: false,
        component: <Main />,
        path: '/',
        exact: true,

    },
    {
        name: 'OurStory',
        privateUrl: false,
        component: <OurStory />,
        path: '/OurStory',
        exact: true,
    },
    {
        name: 'Business',
        privateUrl: false,
        component: <Business />,
        path: '/Business',
        exact: true,
    },
    {
        name: 'Contacts',
        privateUrl: false,
        component: <Contacts />,
        path: '/Contacts',
        exact: true,
    },
    {
        name: 'registration',
        privateUrl: false,
        component: <Registration />,
        path: '/registration',
        exact: true,
    },
]