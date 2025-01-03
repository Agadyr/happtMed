import { AiOutlineUnorderedList } from 'react-icons/ai';
import { CheckSquareOutlined, HeartOutlined, HistoryOutlined, LogoutOutlined, ReconciliationOutlined, ScheduleOutlined, UserOutlined, WechatWorkOutlined } from '@ant-design/icons';
import { privateRoutesMap, publicRoutesMap } from '../../shared/navigation';
import React from 'react';
import { MenuProps } from 'antd';
import { ItemType } from 'antd/es/menu/interface';
import { publicRoutes } from '../../app/navigation/publicRoutes';

type MenuItem = Required<MenuProps>['items'][number];

export const sidebarItems: MenuItem[] = [
  {
    key: 'Tech Support',
    type: 'group',
    label: ' Support',
    children: [
      {
        key: privateRoutesMap.support,
        type: 'item',
        label: 'AI Assistant',
        icon: <WechatWorkOutlined /> ,
      },
    ],
  }
  // {
  //   key: 'duty',
  //   type: 'group',
  //   label: 'Profile',
  //   children: [
  //     {
        // key: privateRoutesMap.home,
  //       type: 'item',
  //       label: 'My profile',
  //       icon: <AiOutlineUnorderedList />,
  //     },
  //     {
  //       key: privateRoutesMap.logout,
  //       type: 'item',
  //       label: 'Logout',
  //       icon:<LogoutOutlined />,
  //       onClick: () => {
  //         localStorage.removeItem('user');
  //         window.location.href = '/';
  //       }
  //     }
  //   ],
  // },
];

export const patientSidebarItems: MenuItem[] = [
  ...sidebarItems,
  {
    key: 'booking',
    type: 'group',
    label: 'Booking',
    children: [
      {
        key: privateRoutesMap.appointments,
        type: 'item',
        label: 'My Appointments',
        icon: <HistoryOutlined />,
      },
      {
        key: privateRoutesMap.appointment,
        type: 'item',
        label: 'Make Appointment',
        icon: <CheckSquareOutlined />,
      },
    ],
  },
  {
    key: 'history',
    type: 'group',
    label: 'History',
    children: [
      {
        key: privateRoutesMap.transactions,
        type: 'item',
        label: 'Transactions',
        icon: <ReconciliationOutlined />,
      },
      {
        key: privateRoutesMap.medhistory,
        type: 'item',
        label: 'Medical History',
        icon: <HeartOutlined />,
      },
    ],
  },
];

export const doctorSidebarItems: MenuItem[] = [
  ...sidebarItems,
  {
    key: 'schedule',
    type: 'group',
    label: 'Schedule',

    children: [
      {
        key: privateRoutesMap.schedule,
        type: 'item',
        label: 'Schedule',
        icon: <ScheduleOutlined />,
      },
    ],
  },

  {
    key: 'myapps',
    type: 'group',
    label: 'Appointments',
    children: [

      {
        key: privateRoutesMap.myapps,
        type: 'item',
        label: 'Appointments',
        icon: <ReconciliationOutlined /> ,
      },
    ],
  },


];

export const adminSidebarItems: MenuItem[] = [
  ...sidebarItems,
  {
    key: 'manage',
    type: 'group',
    label: 'Manage',


    children: [
      {
        key: privateRoutesMap.manage,
        type: 'item',
        label: 'Manage',
        icon: <UserOutlined />,
      },
    ],
  },
  {
    key: 'admininsertion',
    type: 'group',
    label: 'Adding User',
    children: [
      {
        key: privateRoutesMap.admininsertion,
        type: 'item',
        label: 'Register User',
        icon: <UserOutlined />,
      },
    ],
  },


];

export const collapsedSidebarItems = sidebarItems.reduce<ItemType[]>(
  (menu, group) => {
    if (group && group.type === 'group' && group.children) {
      return [...menu, ...group.children];
    }
    return menu;
  },
  []
);