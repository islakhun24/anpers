import { lazy } from 'react';
import Loadable from '../components/Loadable';
import MainLayout from '../layouts/MainLayout';

// project imports
// dashboard routing
const HomeViews = Loadable(lazy(() => import('../pages/Home')));
const ProductViews = Loadable(lazy(() => import('../pages/Product.js')));
const AboutViews = Loadable(lazy(() => import('../pages/About')));
const ServiceViews = Loadable(lazy(() => import('../pages/Service')));
const ContactUsViews = Loadable(lazy(() => import('../pages/ContactUs')));



const MainRoutes = {
    path: '/',
    element: <MainLayout />,
    children: [
        {
            path: '/',
            element: <HomeViews />
        },
        {
            path: '/product',
            element: <ProductViews />
        },
        {
            path: '/about',
            element: <AboutViews />
        },
        {
            path: '/service',
            element: <ServiceViews />
        },
        {
            path: '/contact-us',
            element: <ContactUsViews />
        }
    ]
};

export default MainRoutes;