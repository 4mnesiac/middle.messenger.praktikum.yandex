import Handlebars from 'handlebars';
import template from './500.tmpl';
import './500.scss';
import '../../layouts/ErrorPageContainer/errorPageContainer';
import { HOME } from '../../routes/routes';

export default () => {
    let compiled = Handlebars.compile(template);

    let data = {
        status: '500',
        title: "Упс! Что-то пошло не так! :(",
        link: "Назад к чатам",
        href: HOME
    };

    let html = compiled(data);

    let compiledContainer = Handlebars.compile('{{> error-page-container }}');
    let htmlContainer = compiledContainer({ container: html })
    return htmlContainer;
};