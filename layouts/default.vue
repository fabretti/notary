<template>
  <div class="default" v-bind:class="{ hidden: navOpen }">
    <header>
      <div class="wrap">
        <div class="header__left">
          <div class="header__logo">
            <nuxt-link to="/main">
              <img src="/logo.svg" alt />
            </nuxt-link>

            <div class="header__logo-title">
              <p>НОТАРИУС.РФ</p>
              <div class="header__counter">
                <strong>6 550</strong> нотариусов по РФ
              </div>
            </div>
          </div>
        </div>
        <div class="header__menu">
          <ul>
            <li>
              <a href="#">Нотариальные действия</a>
            </li>
            <li>
              <a href="#">Необходимые документы</a>
            </li>
            <li>
              <a href="#">Стоимость услуг</a>
            </li>
          </ul>
        </div>
        <div class="header__right">
          <div class="header__caption">
            <p>
              Нужна помощь?
              <strong>Звоните!</strong>
            </p>
          </div>
          <div class="header__phone">
            <a class="phone" href="#"></a>
            +7 999 323 96 54
          </div>
          <div class="header__select">
            <CustomSelect 
              :options="subjects" 
              v-model="selectedSubject"
            />
            <div 
              class="lk" 
              :class="{ open: open }" 
              @mouseover="open = true"
              @mouseleave="open = false"
              >
              <div class="lk__title" @click="modalEnter">Личный кабинет</div>
              <div class="custom__list" v-if="isAuth" :class="{ selectHide: !open }">
                <div class="item"><nuxt-link to="/profile">Мой профиль</nuxt-link></div>
                <div class="item"><nuxt-link to="/notes">Мои записи</nuxt-link></div>
                <div class="item" @click="logout">Выход</div>
              </div>
            </div>
          </div>
        </div>
        <div class="header__hum" @click="navOpen = !navOpen">
          <a href="#primary" class="menu-link" v-bind:class="{ active: navOpen }">
            <span class="line line-1"></span>
            <span class="line line-2"></span>
            <span class="line line-3"></span>
          </a>
        </div>
        <aside class="header__nav" v-bind:class="{ active: navOpen }">
          <div class="nav__main">
            <a href="#">
              <img src="/menu-home.svg" alt />
              Главная
            </a>
          </div>
          <div class="nav__city">
            <img src="/menu-map.svg" alt />
            <form>
              <select>
                <option>Москва</option>
                <option>Санкт-Петербург</option>
                <option>Волгоград</option>
                <option>Воронеж</option>
                <option>Екатеринбург</option>
                <option selected="selected">Ижевск</option>
              </select>
            </form>
          </div>
          <div class="nav__line"></div>
          <div class="nav__menu">
            <ul>
              <li>
                <a href="#">
                  <img src="/menu-account.svg" alt />
                  Нотариальные действия
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="/menu-file.svg" alt />
                  Необходимые документы
                </a>
              </li>
              <li>
                <a class="rub" href="#">
                  <img src="/menu-rub.svg" alt />
                  Стоимость услуг
                </a>
              </li>
            </ul>
          </div>
          <div v-if="isAuth" class="nav__enter">
            <a href="#" @click="logout">
              Выход
              <img src="/menu-login.svg" alt />
            </a>
          </div>
          <div v-else class="nav__enter">
            <a href="#" @click="modalEnter">
              Вход
              <img src="/menu-login.svg" alt />
            </a>
          </div>
        </aside>
      </div>
      <div class="black-list" @click="navOpen = !navOpen" v-bind:class="{ active: navOpen }"></div>
      <client-only>
        <modal class="modal modal-sms modal-enter" name="modalEnter" width="400px" height="auto">
          <div class="modal-header">
            <h1>Вход</h1>
            <div class="under-header">
              Введите номер, на него вы получите СМС с кодом подтверждения для
              входа
            </div>
          </div>
          <div class="modal-body">
            <div class="form__box">
              <input
                class="u-full-width"
                id="phone-number-ex"
                type="text"
                placeholder="+7 (___) ___-__-__"
                v-mask="'+7 (###) ###-##-##'"
                v-model="phoneNumber"
              />
            </div>
          </div>
          <div class="modal-bottom">
            <button class="bottom-accept" @click="login">Продолжить</button>
          </div>
          <div class="modal-close" @click="$modal.hide('modalEnter')"></div>
        </modal>
        <modal
          class="modal modal-sms modal-enterSms"
          name="modalEnterSms"
          width="400px"
          height="auto"
        >
          <div class="modal-header">
            <h1>Вход</h1>
            <div class="under-header">Вам на телефон выслан код</div>
          </div>
          <div class="modal-body">
            <div class="form__box">
              <input type="text" placeholder="Введите код из СМС" v-model="code" />
            </div>
            <div class="sms-timer">
              <a href>Выслать СМС повторно</a>
              <p>3:00</p>
            </div>
          </div>
          <div class="modal-bottom">
            <button class="bottom-accept" @click="sendCode">Войти</button>
          </div>
          <div class="modal-close" @click="$modal.hide('modalEnterSms')"></div>
        </modal>
        <modal class="modal modal-city" name="modalCity" height="auto">
          <div class="modal-header">
            <h1>Выбор региона</h1>
            <div class="under-header">Вам на телефон выслан код</div>
          </div>
          <div class="modal-body">
            <div class="header__city">
              <div @click="show = !show" class="city__selected">
                <span class="city__title">Москва</span>
                <i class="icon-arrow" :class="{ rotate: show }"></i>
              </div>
              <transition name="fade">
                <div v-if="show" class="city__list">
                  <ul>
                    <li class="selected">Москва</li>
                    <li>Санкт-Петербург</li>
                    <li>Новосибирск</li>
                    <li>Екатеринбург</li>
                    <li>Нижний Новгород</li>
                    <li>Казань</li>
                  </ul>
                </div>
              </transition>
            </div>
          </div>
          <div class="modal-bottom">
            <button class="bottom-accept">Войти</button>
          </div>
          <div class="modal-close" @click="$modal.hide('modalEnterSms')"></div>
        </modal>
      </client-only>
    </header>
    <div class="content-wrapper">
      <nuxt />
    </div>
    <footer>
      <div class="wrap">
        <div class="footer__left">
          <div class="footer__logo">Нотариус РФ</div>
          <div class="footer__info">©2019.Нотариус рф. все Права защищены.</div>
          <div class="footer__dev">
            Разработано в
            <a href="https://cornlab.ru">cornlab.ru</a>
          </div>
        </div>
        <div class="footer__navs">
          <div class="footer__nav">
            <ul class="footer__list">
              <li>
                <a href="#">Записаться к нотариусу на прием</a>
              </li>
              <li>
                <a href="#">Карта сайта</a>
              </li>
              <li>
                <a href="#">Справочная</a>
              </li>
            </ul>
          </div>
          <div class="footer__nav">
            <ul class="footer__list">
              <li>
                <a href="#">Личный кабинет</a>
              </li>
              <li>
                <a href="#">Вопросы и ответы</a>
              </li>
            </ul>
          </div>
        </div>
        <div class="footer__right">
          <div class="footer__mail">
            Пишите нам:
            <strong>
              <a href="#">contact@pravo-id.ru</a>
            </strong>
          </div>
          <div class="footer__phone">
            Звоните нам:
            <span>+7 999 323 96 54</span>
          </div>
        </div>
        <div class="footer__infoDev">
          <div class="footer__info">©2019.Нотариус рф. все Права защищены.</div>
          <div class="footer__dev">
            Разработано в
            <a href="https://cornlab.ru">cornlab.ru</a>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>
<script>
import CustomSelect from "~/components/CustomSelect.vue";
export default {
  components: {
    CustomSelect
  },
  data: () => ({
    show: false,
    navOpen: false,
    open: false,
    phoneNumber: "",
    code: "",
  }),
  computed: {
    isAuth() {
      return this.$store.getters["auth/isAuth"];
    },
    subjects() {
      return this.$store.getters['subject/getList'].map(i => ({
        value: i.id,
        title: i.title,
      }))
    },
    selectedSubject: {
      get() {
        return this.$store.getters['subject/getSelectedSubject']
      },
      set(value) {
        this.$store.commit('subject/setSelectedSubject', value)
      }
    },
  },
  mounted() {
    this.$store.dispatch("auth/loadToken");
    this.loadSubjects();
  },
  methods: {
    modalEnter() {
      if (this.isAuth) {
        return
      }
      this.$modal.show("modalEnter");
    },
    modalEnterSms() {
      this.$modal.show("modalEnterSms");
      this.$modal.hide("modalEnter");
    },
    modalCity() {
      this.$modal.show("modalCity");
    },
    login() {
      this.$store
        .dispatch("auth/login", this.phoneNumber)
        .then(() => {
          this.modalEnterSms();
        })
        .catch(() => {});
    },
    sendCode() {
      this.$store
        .dispatch("auth/sendCode", this.code)
        .then(() => {
          this.$modal.hide("modalEnterSms");
        })
        .catch(() => {});
    },
    logout() {
      this.$store
        .dispatch("auth/logout", this.phoneNumber)
        .then(() => {})
        .catch(() => {});
    },
    loadSubjects() {
      this.$store.dispatch('subject/loadList')
    }
  }
};
</script>
