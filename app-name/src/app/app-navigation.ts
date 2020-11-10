import { getUserDetails } from '../app/shared/services/userdetails.service';
let menuItem = [];
const Department: string = getUserDetails('Department');
switch (Department) {
  case 'Admin':
    menuItem = [{
      text: 'Home',
      path: '/home',
      icon: 'home'
    },
    {
      text: 'Human Resources',
      icon: 'group',
      path: 'hrDash',
      items: [
        {
          text: 'Resource',
          path: 'hr/employee'
        },
        {
          text: 'Add Role',
          path: 'hr/role'
        },
        {
          text: 'Add Department',
          path: 'hr/department'
        }]
    },
    {
      text: 'Sales',
      icon: 'cart',
      path: 'saleDash',
      items: [
        {
          text: 'Buy Leads',
          path: 'sales/BuyLead'
        },
        {
          text: 'Sell Leads',
          path: 'sales/SellLead'
        },
        {
          text: 'Individual Registration',
          path: 'sales/Individual'
        },
        {
          text: 'Business Registration',
          path: 'sales/Business'
        },
        {
          text: 'Farmer Registration',
          path: 'sales/fregister'
        },
        {
          text: 'Trader Registration',
          path: 'sales/tregister'
        }
      ]
    },
    {
      text: 'Support',
      icon: 'comment',
      path: 'SupDash',
      items: [
        {
          text: 'New Ticket',
          path: 'sup/newTicket'
        },
        {
          text: 'Pending Tickets',
          path: 'sup/penTickets'
        },
        {
          text: 'Closed Tickets',
          path: 'sup/cloTickets'
        }
      ]
    },
    {
      text: 'Employee',
      icon: 'user',
      path: 'pages/employee-dashboard',
      items: [
        {
          text: 'Profile',
          path: '/profile'
        },
        {
          text: 'Request Leave',
          path: 'emp/leave'
        }
      ]
    },
    {
      text: 'Finance',
      icon: 'product',
      items: [{}]
    }];
    break;
  case 'Sales':
    menuItem = [{
      text: 'Home',
      path: '/home',
      icon: 'home'
    },
    {
      text: 'Sales',
      icon: 'cart',
      path: 'saleDash',
      items: [
        {
          text: 'Buy Leads',
          path: 'sales/BuyLead'
        },
        {
          text: 'Sell Leads',
          path: 'sales/SellLead'
        },
        {
          text: 'Individual Registration',
          path: 'sales/Individual'
        },
        {
          text: 'Business Registration',
          path: 'sales/Business'
        },
      ]
    },
    {
      text: 'Support',
      icon: 'comment',
      path: 'SupDash',
      items: [
        {
          text: 'New Ticket',
          path: 'sup/newTicket'
        },
        {
          text: 'Pending Tickets',
          path: 'sup/penTickets'
        },
        {
          text: 'Closed Tickets',
          path: 'sup/cloTickets'
        }
      ]
    },
    {
      text: 'Employee',
      icon: 'user',
      path: 'pages/employee-dashboard',
      items: [{
        text: 'Profile',
        path: '/profile'
      }]
    }];
    break;
  case 'Support':
    menuItem = [{
      text: 'Home',
      path: '/home',
      icon: 'home'
    },
    {
      text: 'Support',
      icon: 'comment',
      path: 'SupDash',
      items: [
        {
          text: 'New Ticket',
          path: 'sup/newTicket'
        },
        {
          text: 'Pending Tickets',
          path: 'sup/penTickets'
        },
        {
          text: 'Closed Tickets',
          path: 'sup/cloTickets'
        }
      ]
    },
    {
      text: 'Employee',
      icon: 'user',
      path: 'pages/employee-dashboard',
      items: [{
        text: 'Profile',
        path: '/profile'
      }]
    }];
    break;
  default:
    menuItem = [{
      text: 'Home',
      path: '/home',
      icon: 'home'
    },
    {
      text: 'Employee',
      icon: 'user',
      path: 'pages/employee-dashboard',
      items: [{
        text: 'Profile',
        path: '/profile'
      }]
    }];
    break;
}

export const navigation = menuItem;
/*

*/
