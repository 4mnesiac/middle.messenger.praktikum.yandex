import Handlebars from 'handlebars';
import template from './ChatInput.tmpl';
import './ChatInput.scss';
import attachIcon from '../../../../../static/attach-icon.svg'
import sumbitIcon from '../../../../../static/submit-icon.svg'

export default () => {
    let compiled = Handlebars.compile(template);

    let data = {
       attachFile: attachIcon,
       sendMessage: sumbitIcon
    };
   

    let html = compiled(data);
    return html;
};