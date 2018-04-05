import React from 'react'
import ContributeTablePage from './pages/ContributeTablePage';
import NotFoundPage from './pages/NotFoundPage';
import DetailsPage from './pages/DetailsPage';
import MemberManagerPage from './pages/MemberManagerPage';
import AddMemberPage from './pages/AddMemberPage';


const routes = [
    {
        path: '/',
        exact: true,
        main: () => <ContributeTablePage />
    },
    {
        path: '/details',
        exact: false,
        main: () => <DetailsPage />
    },
    {
        path: '/member',
        exact: false,
        main: () => <MemberManagerPage />
    },
    {
        path: '/actmem/add',
        exact: false,
        main: () => <AddMemberPage />
    },
    {
        path: '',
        exact: false,
        main: () => <NotFoundPage />
    },

];

export default routes