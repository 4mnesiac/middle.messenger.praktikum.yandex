import Handlebars from 'handlebars';
import template from './404.tmpl';
import './404.scss';
import '../../layouts/ErrorPageContainer/errorPageContainer';
import { HOME } from '../../routes/routes';

export default () => {
    let compiled = Handlebars.compile(template);

    let data = {
        status: '404',
        title: "Тут ничего нет :(",
        link: "Назад к чатам",
        href: HOME
    };

    let html = compiled(data);

    let compiledContainer = Handlebars.compile('{{> error-page-container }}');
    let htmlContainer = compiledContainer({ container: html })
    return htmlContainer;
};