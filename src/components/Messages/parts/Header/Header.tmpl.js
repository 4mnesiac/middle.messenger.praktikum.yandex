export default `
    <header class="me-header">
        <div class='me-header__user'>
            <img src="{{avatar}}" class="me-header__user-avatar" alt="user avatar">
            <div class="me-header__user-info">
                <span class="me-header__username">{{username}}</span>
                <span class="me-header__status">{{status}}</span>
            </div>
        </div>
        <button class="me-header__menu">
            <img src="{{menuIcon}}" class="me-header__menu-icon" alt="menu">
        </button>
    </header>
`;