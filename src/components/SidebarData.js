import React from "react";
import * as AiIcons from 'react-icons/ai';
import * as FaIcons from 'react-icons/fa';
import * as IoIcons from 'react-icons/io';

export const sideBarData = [

    {
        title:'Home',
        path: '/',
        icon: <AiIcons.AiFillHome />,
        clsName: 'nav-text'
    },
    {
        title:'Roles',
        path: '/roles',
        icon: <IoIcons.IoIosPaper />,
        clsName: 'nav-text'
    },
    {
        title:'Products',
        path: '/products',
        icon: <FaIcons.FaCartPlus />,
        clsName: 'nav-text'
    },
    {
        title:'Team',
        path: '/team',
        icon: <IoIcons.IoMdPeople/>,
        clsName: 'nav-text'
    },
    {
        title:'Users',
        path: '/user-list',
        icon: <FaIcons.FaUsers/>,
        clsName: 'nav-text'
    },
    {
        title:'Messages',
        path: '/messages',
        icon: <FaIcons.FaEnvelopeOpenText />,
        clsName: 'nav-text'
    },
    {
        title:'Support',
        path: '/support',
        icon: <IoIcons.IoMdHelpCircle />,
        clsName: 'nav-text'
    }
]