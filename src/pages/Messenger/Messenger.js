import Handlebars from 'handlebars';
import template from './Messenger.tmpl';
import './Messenger.scss';
import getChats from '../../components/Chats/Chats';
import getMessages from '../../components/Messages/Messages';

export default () => {
    let compiled = Handlebars.compile(template);
   
    let data = {
        chats: getChats(),
        messages: getMessages(),
    };

    let html = compiled(data);
    return html;
};