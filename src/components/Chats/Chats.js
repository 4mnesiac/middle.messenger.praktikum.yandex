import Handlebars from 'handlebars';
import template from './Chats.tmpl';
import './chats.scss';
import avatar from '../../../static/avatar-placeholder.svg';
import getHeader from './parts/Header/Header';

export default () => {
    let compiled = Handlebars.compile(template);

    let data = {
        header: getHeader(),
        chats: [
            {
                chatName: 'Андрей',
                message: {
                    author: 'Андрей',
                    text: 'Йоу!'
                },
                avatar: avatar,
                unreadMessages: 1,
                time: '09:40'
            },
            {
                chatName: 'Киноклуб',
                message: {
                    author: 'Вы',
                    text: 'Можно или сегодня или завтра вечером.'
                },
                avatar: avatar,
                unreadMessages: 15,
                time: '13:45'
            },
            {
                chatName: 'Илья',
                message: {
                    author: 'Илья',
                    text: 'Друзья, у меня для вас особенный выпуск новостей!...'
                },
                avatar: avatar,
                unreadMessages: 1,
                time: '23:40'
            },
            {
                chatName: 'Киноклуб',
                message: {
                    author: 'Вы',
                    text: 'Можно или сегодня или завтра вечером.'
                },
                avatar: avatar,
                unreadMessages: null,
                time: '11:40'
            },
            {
                chatName: 'Киноклуб',
                message: {
                    author: 'Вы',
                    text: 'Можно или сегодня или завтра вечером.'
                },
                avatar: avatar,
                unreadMessages: null,
                time: '23:40'
            },
            {
                chatName: 'Киноклуб',
                message: {
                    author: 'Вы',
                    text: 'Можно или сегодня или завтра вечером.'
                },
                avatar: avatar,
                unreadMessages: null,
                time: '23:40'
            },
            {
                chatName: 'Киноклуб',
                message: {
                    author: 'Вы',
                    text: 'Можно или сегодня или завтра вечером.Можно или сегодня или завтра вечером.Можно или сегодня или завтра вечером.м.Можно или сегодня или завтра вечером.'
                },
                avatar: avatar,
                unreadMessages: null,
                time: '11:40'
            },
            {
                chatName: 'Киноклуб',
                message: {
                    author: 'Вы',
                    text: 'Можно или сегодня или завтра вечером.'
                },
                avatar: avatar,
                unreadMessages: 12,
                time: '10:40'
            },
            {
                chatName: 'Киноклуб',
                message: {
                    author: 'Вы',
                    text: 'Можно или сегодня или завтра вечером.'
                },
                avatar: avatar,
                unreadMessages: 111,
                time: '10:40'
            },
        ]
    };
   

    let html = compiled(data);
    return html;
};