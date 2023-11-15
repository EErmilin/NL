import Profile from "../pages/Auth/Profile/Profile/Profile";
import Business from "../pages/NotAuth/Business/Business";
import Contacts from "../pages/NotAuth/Contacts/Contacts";
import Main from "../pages/NotAuth/Main/Main";
import OurStory from "../pages/NotAuth/OurStory/OurStory";
import Registration from "../pages/NotAuth/Registration/Registration";
import PersonalArea from "../pages/Auth/Profile/PersonalArea";
import RegisterSucces from "../pages/NotAuth/Registration/components/RegisterSucces/RegisterSucces";
import PartnerRegistration from "../pages/NotAuth/Registration/PartnerRegistration";
import LoyaltyProgram from "../pages/NotAuth/LoyaltyProgram/LoyaltyProgram";
import PublicOffer from "../pages/NotAuth/PublicOffer/PublicOffer";
import { Products } from "../pages/NotAuth/Products/Products";
import Product from "../pages/NotAuth/Product/Product";
import PrivacyPolicy from "../pages/NotAuth/PrivacyPolicy/PrivacyPolicy";
import Cart from "../pages/NotAuth/Cart/Card";
import CartPage from "../pages/NotAuth/Cart/components/CartPage/CartPage";
import Order from "../pages/NotAuth/Cart/components/Order/Order";
import Receiving from "../pages/NotAuth/Cart/components/Receiving/Receiving";
import ReferalProgram from "../pages/Auth/Profile/ReferalProgram/ReferalProgram";
import Money from "../pages/Auth/Profile/Money/Money";
import Starter from "../pages/Auth/Starter/Starter";

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
                    {
                        name: 'money',
                        privateUrl: true,
                        component: <Money />,
                        path: 'money',
                        exact: false,
                    },
                    {
                        name: 'referal',
                        privateUrl: true,
                        component: <ReferalProgram />,
                        path: 'referal',
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
    {
        name: 'loyaltyprogram',
        privateUrl: false,
        component: <LoyaltyProgram />,
        path: '/loyaltyprogram',
        exact: true,
    },
    {
        name: 'publicoffer',
        privateUrl: false,
        component: <PublicOffer />,
        path: '/publicoffer',
        exact: true,
    },
    {
        name: 'publicoffer',
        privateUrl: false,
        component: <PublicOffer />,
        path: '/publicoffer',
        exact: true,
    },
    {
        name: 'products',
        privateUrl: false,
        component: <Products />,
        path: '/products/:id',
        exact: true,
    },
    {
        name: 'product',
        privateUrl: false,
        component: <Product />,
        path: '/product/:id',
        exact: true,
    },
    {
        name: 'privacypolicy',
        privateUrl: false,
        component: <PrivacyPolicy />,
        path: '/privacypolicy',
        exact: true,
    },
    {
        name: 'starter',
        privateUrl: false,
        component: <Starter />,
        path: '/products/31',
        exact: true,
    },

    {
        name: 'cart',
        component: <Cart
            routes={
                [
                    {
                        name: '',
                        privateUrl: false,
                        component: <CartPage />,
                        path: '/',
                        exact: true,
                    },
                    {
                        name: 'order',
                        privateUrl: false,
                        component: <Order />,
                        path: '/order',
                        exact: true,
                    },
                    {
                        name: 'receiving',
                        privateUrl: false,
                        component: <Receiving />,
                        path: '/receiving',
                        exact: true,
                    },
                ]
            }
        />,
        path: '/cart/*',
        privateUrl: false,
        exact: false,
    },

]