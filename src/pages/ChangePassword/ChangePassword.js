import Handlebars from 'handlebars';
import template from './ChangePassword.tmpl';
import '../../components/Button';
import './ChangePassword.scss';
import '../../layouts/Container/container';
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