// language=hbs

export default `
    <div class="profile-info">
        <img class="profile-avatar" src='{{{imageSrc}}}' name="avatar">
        <h2 class="profile-heading">{{profileName}}</h2>
    </div>
    <div class="profile">
        <label class="profile__label" for="email">
            Почта
            <span class="profile__input">pochta@yandex.ru</span>
        </label>
        <label class="profile__label" for="login">
            Логин
            <span class="profile__input">ivanivanov</span>
        </label>
        <label class="profile__label" for="first_name">
            Имя
            <span class="profile__input">Иван</span>
        </label>
        <label class="profile__label" for="second_name">
            Фамилия
            <span class="profile__input">Иванов</span>
        </label>
        <label class="profile__label" for="display_name">
            Имя в чате
            <span class="profile__input">Иван</span>
        </label>
        <label class="profile__label" for="phone">
            Телефон
            <span class="profile__input">+7 (909) 967 30 30</span>
        </label>
    </div>
    <div class="profile__nav">
        <a href={{changeProfileDataPath}} class="profile__link link">Изменить данные</a>
        <a href={{changePasswordPath}} class="profile__link link">Изменить пароль</a>
        <a href={{logoutPath}} class="profile__link profile__link_type_logout">Выйти</a>
    </div>
`;
