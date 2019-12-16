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
            class="u-full-width"
            id="phone-number-ex"
            type="text"
            placeholder="+7 (___) ___-__-__"
            v-mask="'+7 (###) ###-##-##'"
            v-model="models.phoneNumber"
          />
        </div>
        <div class="btn-profile">
          <button class="profile-save">Сохранить</button>
        </div>
      </form>
    </div>
  </section>
</template>
<script>
export default {
  data: () => ({
    dynamicMask: "###.###.###/###",
    models: {
      phoneNumber: ""
    },
  })
};
</script>