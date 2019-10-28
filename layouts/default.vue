<template>
  <div class="default">
    <header>
      <div class="wrap">
        <div class="header__left">
          <div class="header__logo">
            <a href="main">
              <img src="/logo.svg" alt />
            </a>

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
            <div class="header__city">
              <div @click="show = !show" class="city__selected">
                <span class="city__title">Москва</span>
                <i class="icon-arrow"></i>
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
            <button>Личный кабинет</button>
          </div>
        </div>
      </div>
    </header>
    <div class="content-wrapper">
      <nuxt />
    </div>
    <footer>
      <div class="wrap">
        <div class="footer__left">
          <div class="footer__logo">Нотариус РФ</div>
          <div class="footer__info">©2019.Нотариус рф. все Права защищены.</div>
          <!-- <div class="footer__dev">
            Разработано в
            <a href="#">7reasons.ru</a>
          </div>-->
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
          <div class="footer__phone">Звоните нам: +7 999 323 96 54</div>
        </div>
      </div>
    </footer>
  </div>
</template>

<style>
</style>
<script>
export default {
  data: () => ({
    show: false
  })
};
</script>