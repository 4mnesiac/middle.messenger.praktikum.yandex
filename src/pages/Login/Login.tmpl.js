// language=hbs

export default `
    <h1 class='login-title'>{{title}}</h1>
    <form class="form">
        <div class="form__input-container">
        <label class='label' for="login">Логин</label>
        <input class='input' type="text" id="login">
        <span class="input-error">{{validationError}}</span>
        </div>
        <div class="form__input-container">
            <label class='label' for="password">Пароль</label>
            <input class='input' type="password" id="password">
            <span class="input-error">{{validationError}}</span>
        </div>
    </form>
    <div class="controls">
        {{> button }}
        <a href={{href}} class='link_theme_secondary'>{{linkContent}}</a>
    </div>
`;
