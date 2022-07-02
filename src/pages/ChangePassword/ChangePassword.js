import Handlebars from 'handlebars';
import template from './changePassword.tmpl';
import '../../components/button';
import './changePassword.scss';
import '../../layouts/container/container';
import avatar from '../../../static/avatar-placeholder.svg';

export default () => {
    let compiled = Handlebars.compile(template);

    let data = {
        buttonText: 'Сохранить',
        imageSrc: avatar
    };

    let html = compiled(data);

    let compiledContainer = Handlebars.compile('{{> container }}');
    let htmlContainer = compiledContainer({ container: html })
    return htmlContainer;
};