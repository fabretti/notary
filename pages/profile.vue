<template>
  <section class="profile">
    <div class="wrap">
      <h1 class="profile-title">Заполнение профиля</h1>
      <form action>
        <div class="form-box">
          <!-- <label for="name">Имя</label> -->
          <input type="text" name="name" placeholder="Имя" />
        </div>
        <div class="form-box">
          <!-- <label for="surname">Фамилия</label> -->
          <input type="text" name="surname" placeholder="Фамилия" />
        </div>
        <div class="form-box">
          <!-- <label for="email">E-mail</label> -->
          <input type="text" name="email" placeholder="E-mail" />
        </div>
        <div class="form-box">
          <!-- <label for="number">Телефон</label> -->
          <input
            type="tel"
            onkeypress="return event.charCode >= 48 && event.charCode <= 57"
            name="number"
            placeholder="+7 (___) ___-__-__"
          />
        </div>
        <div class="btn-profile">
          <button class="profile-save">Сохранить</button>
        </div>
      </form>
    </div>
  </section>
</template>