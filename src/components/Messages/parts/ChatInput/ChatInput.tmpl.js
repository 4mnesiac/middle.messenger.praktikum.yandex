export default `
<section class="chat-input">
    <button class="chat-input__attach">
        <img src="{{attachFile}}" class="chat-input__attach-icon" alt="attach files icon">
    </button>
    <form class="chat-input__form">
        <input class="me-input chat-input__input" type="text" name="message"/>
    <button class="chat-input__send-message" type="submit">
        <img src="{{sendMessage}}" class="chat-input__send-message-icon" alt="send message icon">
    </button>
    </form>
</section>
`;