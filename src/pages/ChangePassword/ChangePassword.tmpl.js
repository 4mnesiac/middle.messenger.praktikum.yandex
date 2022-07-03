// language=hbs

export default `
    <div class="profile-info">
        <img class="profile-avatar" src='{{{imageSrc}}}' name="avatar">
    </div>
    <div class="profile">
        <label class="profile__label" for="email">
            Старый пароль
            <input class="profile__input" type="password" id="oldPassword" name="oldPassword">
        </label>
        <label class="profile__label" for="login">
            Новый пароль
            <input class="profile__input" type="password" id="newPassword" name="newPassword">
        </label>
        <label class="profile__label" for="first_name">
            Повторите новый пароль
            <input class="profile__input" type="password" id="passwordConfirm" name="passwordConfirm">
        </label>
    </div>
    {{> button }}
`;
