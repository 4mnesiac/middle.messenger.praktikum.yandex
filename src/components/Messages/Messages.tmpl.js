
// language=hbs

export default `
<div class="messages-container">
    {{{header}}}
    <div>
        <ul class='messages'>
            {{#each messages}}
                <li class='message message_type_{{#if this.author}}send{{else}}receive{{/if}}'>
                    <p class="message__text">{{this.text}}</p>
                    <div class="message__info">
                        {{#if this.author}}<img src="{{status}}" alt="read"/>{{/if}}
                        <time class="message__time">{{this.time}}</time>
                    </div>
                </li>
            {{/each}}
        </ul>
        {{{chatInput}}}
    </div>
</div>
`;