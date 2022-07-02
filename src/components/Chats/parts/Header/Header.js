import Handlebars from 'handlebars';
import template from './header.tmpl';
import './header.scss';
import { PROFILE } from '../../../../routes/routes';

export default () => {
    let compiled = Handlebars.compile(template);

    let data = {
        link: 'Профиль',
        href: PROFILE
    };
   

    let html = compiled(data);
    return html;
};