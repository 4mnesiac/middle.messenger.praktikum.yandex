// language=hbs

export default `
    <div class="chat-container">
    {{{header}}}
    <ul class='chats'>
        {{#each chats}}
            <li class='chat'>
                <img class='chat__avatar' src='{{this.avatar}}' alt="chat avatar"/>
                <div class='chat__message'>
                    <span class='chat__chat-name'>{{this.chatName}}</span>
                    <p class='chat__last-message'><span class="chat__last-author">{{this.message.author}}</span>: {{this.message.text}}</p>
                </div>
                <div class='chat__info'>
                    <span class="chat__time">{{time}}</span>
                    {{#if unreadMessages}}
                        <span class="chat__unread-count">{{unreadMessages}}</span>
                    {{/if}}
                </div>
            </li>
        {{/each}}
    </ul>
    </div>
`;