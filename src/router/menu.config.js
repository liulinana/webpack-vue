import HelloWorld from '../pages/HelloWorld';
import form from '../pages/form';
import table from '../pages/table';

const menu =[
   {
        path: '/',
        name: 'Hello',
        component: HelloWorld
    },{
        path: '/form',
        name: 'form',
        component: form
    },{
        path: '/table',
        name: 'table',
        component: table
    }
];

export default menu;
