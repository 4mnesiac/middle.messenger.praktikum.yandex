import Handlebars from 'handlebars';
import template from './Register.tmpl';
import '../../components/button';
import './Register.scss';
import '../../layouts/Container/container'
import { LOGIN } from '../../routes/routes';

export default () => {
    let compiled = Handlebars.compile(template);

    let data = {
        title: "Регистрация",
        buttonText: 'Зарегистрироваться',
        linkContent: 'Войти',
        href: LOGIN,
        validationError: ''
    };

    let html = compiled(data);

    let compiledContainer = Handlebars.compile('{{> container }}');
    let htmlContainer = compiledContainer({ container: html })
    return htmlContainer;
};