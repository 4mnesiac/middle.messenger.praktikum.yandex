import Handlebars from 'handlebars';
import template from './Profile.tmpl';
import '../../components/Button';
import './Profile.scss';
import '../../layouts/Container/container';
import avatar from '../../../static/avatar-placeholder.svg';
import { HOME, CHANGE_PASSWORD, CHANGE_PROFILE } from '../../routes/routes';

export default () => {
    let compiled = Handlebars.compile(template);

    let data = {
        buttonText: 'Сохранить',
        imageSrc: avatar,
        profileName: 'Иван',
        changeProfileDataPath: CHANGE_PROFILE,
        changePasswordPath: CHANGE_PASSWORD,
        logoutPath: HOME
    };

    let html = compiled(data);

    let compiledContainer = Handlebars.compile('{{> container }}');
    let htmlContainer = compiledContainer({ container: html })
    return htmlContainer;
};