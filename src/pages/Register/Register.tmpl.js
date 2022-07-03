// language=hbs

export default `
    <h1 class='login-title'>{{title}}</h1>
    <form class="form">
        <div class="form__input-container">
            <label class='label' for="email">Почта</label>
            <input class='input' type="email" id="email">
            <span class="input-error">{{validationError}}</span>
        </div>
        <div class="form__input-container">
            <label class='label' for="login">Логин</label>
            <input class='input' type="text" id="login">
            <span class="input-error">{{validationError}}</span>
        </div>
        <div class="form__input-container">
            <label class="label" for="first_name">Имя</label>
            <input class="input" type="text" id="first_name" name="first_name">
            <span class="input-error">{{validationError}}</span>
        </div>
        <div class="form__input-container">
            <label class="label" for="second_name">Фамилия</label>
            <input class="input" type="text" id="second_name" name="second_name">
            <span class="input-error">{{validationError}}</span>
        </div>
        <div class="form__input-container">
            <label class="label" for="phone">Телефон</label>
            <input class="input" type="tel" id="phone" name="phone">
            <span class="input-error">{{validationError}}</span>
        </div>
        <div class="form__input-container">
            <label class="label" for="password">Пароль</label>
            <input class="input" type="password" id="password" name="password">
            <span class="input-error">{{validationError}}</span>
        </div>
        <div class="form__input-container">
            <label class="label" for="passwordConfirm">Пароль (ещё раз)</label>
            <input class="input" type="password" id="passwordConfirm" name="passwordConfirm">
            <span class="input-error">{{validationError}}</span>
        </div>
        <div class="controls">
        {{> button }}
        <a href={{href}} class='link'>{{linkContent}}</a>
    </div>
    </form>
`;