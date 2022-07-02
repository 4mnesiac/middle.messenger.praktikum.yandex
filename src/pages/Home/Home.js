import Handlebars from 'handlebars';
import template from './Home.tmpl';
import './Home.scss';
import '../../layouts/Container/container'

import { 
    ERROR_404,
    ERROR_500,
    LOGIN, REGISTER,
    PROFILE,
    CHANGE_PASSWORD,
    MESSENGER,
} from '../../routes/routes';

export default () => {
    let compiled = Handlebars.compile(template);

    const links = [
        {
            href: ERROR_500,
            title: "500",
        },
        {
            href: ERROR_404,
            title: "404",
        },
        {
            href: LOGIN,
            title: "Вход",
        },
        {
            href: REGISTER,
            title: "Регистрация",
        },
        {
            href: PROFILE,
            title: "Профиль",
        },
        {
            href: CHANGE_PASSWORD,
            title: "Сменить пароль",
        },
        {
            href: MESSENGER,
            title: "Чаты",
        },
      ];

    let html = compiled(links);

    let compiledContainer = Handlebars.compile('{{> container }}');
    let htmlContainer = compiledContainer({ container: html });
    return htmlContainer;
};