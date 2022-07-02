import Handlebars from 'handlebars';
import template from './Login.tmpl';
import '../../components/button';
// import '../../partials/buttonSecondary';
import './login.scss';
import '../../layouts/container/container';
import { REGISTER } from '../../routes/routes';

export default () => {
    let commpiled = Handlebars.compile(template);

    let data = {
        title: "Вход",
        buttonText: 'Войти',
        linkContent: 'Нет аккаунта?',
        href: REGISTER,
        validationError: ''
    };

    let html = commpiled(data);

    let compiledContainer = Handlebars.compile('{{> container }}');
    let htmlContainer = compiledContainer({ container: html })
    return htmlContainer;
};