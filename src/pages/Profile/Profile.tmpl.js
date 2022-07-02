// language=hbs

export default `
    <div class="profile-info">
        <img class="profile-avatar" src='{{{imageSrc}}}' name="avatar">
        <h2 class="profile-heading">{{profileName}}</h2>
    </div>
    <div class="profile">
        <label class="profile__label" for="email">
            Почта
            <input class="profile__input" name="email" type="email" id="email" value="pochta@yandex.ru">
        </label>
        <label class="profile__label" for="login">
            Логин
            <input class="profile__input" type="text" id="login" value="ivanivanov" name="login">
        </label>
        <label class="profile__label" for="first_name">
            Имя
            <input class="profile__input" type="text" id="first_name" value="Иван" name="first_name">
        </label>
        <label class="profile__label" for="second_name">
            Фамилия
            <input class="profile__input" type="text" id="second_name" value="Иванов" name="second_name">
        </label>
        <label class="profile__label" for="display_name">
            Имя в чате
            <input class="profile__input" type="text" id="display_name" value="Иван" name="display_name">
        </label>
        <label class="profile__label" for="phone">
            Телефон
            <input class="profile__input" type="tel" id="phone" value="+7 (909) 967 30 30" name="phone">
        </label>
    </div>
    <div class="profile__nav">
        <a href={{changeProfileDataPath}} class="profile__link link">Изменить данные</a>
        <a href={{changePasswordPath}} class="profile__link link">Изменить пароль</a>
        <a href={{logoutPath}} class="profile__link profile__link_type_logout">Выйти</a>
    </div>
`;
