import Profile from "../pages/Auth/Profile/Profile/Profile";
import Business from "../pages/NotAuth/Business/Business";
import Contacts from "../pages/NotAuth/Contacts/Contacts";
import Main from "../pages/NotAuth/Main/Main";
import OurStory from "../pages/NotAuth/OurStory/OurStory";
import Registration from "../pages/NotAuth/Registration/Registration";
import PersonalArea from "../pages/Auth/Profile/PersonalArea";
import RegisterSucces from "../pages/NotAuth/Registration/components/RegisterSucces/RegisterSucces";
import PartnerRegistration from "../pages/NotAuth/Registration/PartnerRegistration";

export const routes = [
    {
        name: 'main',
        privateUrl: false,
        component: <Main />,
        path: '/',
        exact: true,

    },

    {
        name: 'personal-area',
        component: <PersonalArea
            routes={
                [
                    {
                        name: 'profile',
                        privateUrl: true,
                        component: <Profile />,
                        path: 'profile',
                        exact: false,
                    },
                ]
            }
        />,
        path: 'personal-area/*',
        privateUrl: true,
        exact: false,
    },
    {
        name: 'RegisterSucces',
        privateUrl: true,
        component: <RegisterSucces />,
        path: '/RegisterSucces',
        exact: false,
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
    {
        name: 'registrationpartner',
        privateUrl: false,
        component: <PartnerRegistration />,
        path: '/registrationpartner',
        exact: true,
    },
    {
        name: 'profile',
        privateUrl: true,
        component: <Profile />,
        path: '/profile',
        exact: true,
    },
]