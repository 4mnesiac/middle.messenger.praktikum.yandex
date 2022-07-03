import Handlebars from 'handlebars';
import template from './Header.tmpl';
import './Header.scss';
import messageMenuIcon from '../../../../../static/menu-icon.svg';
import avatar from '../../../../../static/avatar-placeholder.svg';

export default () => {
    let compiled = Handlebars.compile(template);

    let data = {
        avatar: avatar,
        username: 'Вадим',
        status: 'Онлайн',
        menuIcon: messageMenuIcon,
    };
   

    let html = compiled(data);
    return html;
};