import HelloWorld from '../components/HelloWorld';
import form from '../components/form';
import table from '../components/table';

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
