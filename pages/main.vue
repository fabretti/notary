<template>
  <section id="app" class="main">
    <div class="main__section intro">
      <div class="search-title section-title">
        Найдите надежного нотариуса
        <br />и запишитесь на прием через
        <span>онлайн-запись</span>
      </div>
      <div class="search">
        <form class="search-form">
          <div class="search-formDate">
            <input id="srch" placeholder="Имя нотариуса, метро, город МО" />
            <div @click="show = !show" class="search-date">
              Вт, 24 сентября
              <i></i>
              <transition name="fade">
                <div v-if="show" class="date-dropdown">
                  <ul>
                    <li class="selected">Сегодня</li>
                    <li>Завтра, 26 сен</li>
                    <li>Пятница, 27 сен</li>
                  </ul>
                </div>
              </transition>
            </div>
          </div>
          <a href="results" class="search-btn">Найти</a>
        </form>
      </div>
      <div class="search-example">
        Например,
        <span>метро Авиамоторное</span>
      </div>

      <div class="sugg-new">
        <div class="sugg-title">На Нотариус РФ вы можете:</div>
        <div class="sugg-boxes">
          <div class="sugg-convert">
            <div class="sugg-box">
              <div class="sugg-img">
                <img src="/icon.location.svg" alt />
              </div>
              <div class="sugg-info">
                Найти нотариуса
                поблизости
              </div>
            </div>
            <div class="sugg-box">
              <div class="sugg-img">
                <img src="/icon.booking.svg" alt />
              </div>
              <div class="sugg-info">
                Записаться на
                прием к нотариусу
              </div>
            </div>
            <div class="sugg-box">
              <div class="sugg-img">
                <img src="/icon.consulting.svg" alt />
              </div>
              <div class="sugg-info">
                Получить онлайн
                консультацию
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="main__section benefits">
      <div class="container">
        <div class="benefits-title section-title">
          Пользователи выбирают
          <span>Нотариус РФ</span>
        </div>
        <div class="note-boxes">
          <div class="note-box">
            <div class="note-1">
              <div class="note-title">
                НАСТОЯЩИЕ ОТЗЫВЫ
                <div class="note-stars">
                  <div class="note-star">
                    <img src="/star.svg" alt />
                  </div>
                  <div class="note-star">
                    <img src="/star.svg" alt />
                  </div>
                  <div class="note-star">
                    <img src="/star.svg" alt />
                  </div>
                  <div class="note-star">
                    <img src="/star.svg" alt />
                  </div>
                  <div class="note-star">
                    <img src="/starD.svg" alt />
                  </div>
                </div>
              </div>
              <div class="note-info">
                Рейтинг нотариуса основан на проверенных отзывах его клиентов.
                Мы публикуем отзывы о нотариусе только от его клиентов, побывавших на приеме.
              </div>
            </div>
            <div class="note-2">
              <div class="note-title">ЗАПИСЬ В ЛЮБОЕ ВРЕМЯ</div>
              <div class="note-info">Записывайтесь на свободное время в два клика.</div>
              <div class="note-btn">
                <div class="btn-time btn-time-1">16:40</div>
                <div class="btn-time btn-time-2">17:40</div>
              </div>
            </div>
          </div>
          <div class="note-box">
            <div class="note-3">
              <div class="note-title">СПРАВОЧНАЯ</div>
              <div
                class="note-info"
              >Узнайте какие документы вам нужны для приема, цену или описание для любой нотариальной услуги.</div>
            </div>
            <div class="note-4">
              <div class="note-title">НОТАРИУСЫ РЯДОМ</div>
              <div class="note-info">Поиск нотариусов поблизости от вашего местоположения.</div>
              <div class="note-range">
                <div class="range-station">Парк победы</div>
                <div class="range-step">
                  <img src="/footstep.svg" /> 323 м
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="main__section faq">
      <div class="section-title">
        <div class="faq-title">Ответы на частые вопросы</div>
      </div>

      <div class="accordion" id="accordion">
        <div class="accordion-item" v-on:click="accordion">
          <div class="accordion-item-head">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                fill="#2d333d"
                d="M4 1.998h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2L13.904 18l-3.707 3.705a.994.994 0 0 1-.695.293L9.5 22H9a1 1 0 0 1-1-1v-3H4a2 2 0 0 1-2-2l.01-12.002c0-1.105.886-2 1.99-2zm8.185 3.5c-.882 0-1.595.182-2.136.545-.537.36-.827.941-.78 1.65h1.967c.008-.28.103-.49.282-.632.178-.142.401-.213.667-.213.33 0 .585.087.764.26.18.172.268.404.268.695 0 .28-.078.528-.233.742-.15.214-.36.394-.627.539-.516.315-.871.592-1.066.834-.195.242-.295.605-.299 1.086h2.016c0-.287.043-.514.13-.68.092-.17.266-.327.52-.472a3.04 3.04 0 0 0 1.127-.856c.298-.363.447-.76.447-1.193 0-.706-.271-1.267-.816-1.682-.54-.415-1.284-.623-2.23-.623h-.001zM11 12v2h2v-2h-2z"
              />
            </svg>
            <h3>Записаться на прием или прийти в порядке живой очереди?</h3>
            <i class="icon-arrow"></i>
          </div>
          <div class="accordion-item-body">
            <p>Нотариальные услуги стоят столько-то и столько-то текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст</p>
          </div>
        </div>

        <div class="accordion-item">
          <div class="accordion-item-head" v-on:click="accordion">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                fill="#2d333d"
                d="M4 1.998h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2L13.904 18l-3.707 3.705a.994.994 0 0 1-.695.293L9.5 22H9a1 1 0 0 1-1-1v-3H4a2 2 0 0 1-2-2l.01-12.002c0-1.105.886-2 1.99-2zm8.185 3.5c-.882 0-1.595.182-2.136.545-.537.36-.827.941-.78 1.65h1.967c.008-.28.103-.49.282-.632.178-.142.401-.213.667-.213.33 0 .585.087.764.26.18.172.268.404.268.695 0 .28-.078.528-.233.742-.15.214-.36.394-.627.539-.516.315-.871.592-1.066.834-.195.242-.295.605-.299 1.086h2.016c0-.287.043-.514.13-.68.092-.17.266-.327.52-.472a3.04 3.04 0 0 0 1.127-.856c.298-.363.447-.76.447-1.193 0-.706-.271-1.267-.816-1.682-.54-.415-1.284-.623-2.23-.623h-.001zM11 12v2h2v-2h-2z"
              />
            </svg>
            <h3>Как пользоваться справочной?</h3>
            <i class="icon-arrow"></i>
          </div>
          <div class="accordion-item-body">
            <p>Нотариальные услуги стоят столько-то и столько-то текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст</p>
          </div>
        </div>

        <div class="accordion-item">
          <div class="accordion-item-head" v-on:click="accordion">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                fill="#2d333d"
                d="M4 1.998h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2L13.904 18l-3.707 3.705a.994.994 0 0 1-.695.293L9.5 22H9a1 1 0 0 1-1-1v-3H4a2 2 0 0 1-2-2l.01-12.002c0-1.105.886-2 1.99-2zm8.185 3.5c-.882 0-1.595.182-2.136.545-.537.36-.827.941-.78 1.65h1.967c.008-.28.103-.49.282-.632.178-.142.401-.213.667-.213.33 0 .585.087.764.26.18.172.268.404.268.695 0 .28-.078.528-.233.742-.15.214-.36.394-.627.539-.516.315-.871.592-1.066.834-.195.242-.295.605-.299 1.086h2.016c0-.287.043-.514.13-.68.092-.17.266-.327.52-.472a3.04 3.04 0 0 0 1.127-.856c.298-.363.447-.76.447-1.193 0-.706-.271-1.267-.816-1.682-.54-.415-1.284-.623-2.23-.623h-.001zM11 12v2h2v-2h-2z"
              />
            </svg>
            <h3>Какие документы взять с собой при походе к нотариусу?</h3>
            <i class="icon-arrow"></i>
          </div>
          <div class="accordion-item-body">
            <p>Нотариальные услуги стоят столько-то и столько-то текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст</p>
          </div>
        </div>
      </div>
    </div>
    <!-- <div class="main__section calc">
      <div class="container">
        <div class="section-title">
          <div class="calc-title">Справочная</div>
          <div class="calc-text">Здесь вы можете узнать о ценах и необходимый перечень документов</div>
        </div>
        <div id="widgetApp" :style="'max-width:' +width">
          <div class="widget_body">
            <div class="form_group select_list">
              <label>
                <p>Выберите вид нотариального действия</p>
                <select name id v-model="selectedType">
                  <option value disabled selected hidden>Выберите один из вариантов</option>
                  <option
                    v-for="(option, index) in notarialActTypes"
                    :key="index"
                    :value="option.value"
                  >{{option.text}}</option>
                </select>
              </label>
            </div>
            <div class="form_group select_list">
              <label>
                <p>Выберите нотариальное действие {{ actTypeTitle }}</p>
                <select name id v-model="selectedAct">
                  <option value disabled selected hidden>Нотариальное действие</option>
                  <option
                    v-for="(option, index) in notarialActs"
                    :key="index"
                    :value="option.value"
                  >{{option.text}}</option>
                </select>
              </label>
            </div>

            <div v-if="currentSelectedAct && currentSelectedAct.reqForm" class="form_group radio">
              <p>Закон требует нотариальной формы?</p>
              <label>
                <input type="radio" name="radio_btn" value="1" v-model="picked" />Да
              </label>
              <label>
                <input type="radio" name="radio_btn" value="0" v-model="picked" />Нет
              </label>
            </div>
            <div
              v-if="(currentSelectedAct && !currentSelectedAct.reqForm && selectedAct !== '') || (currentSelectedAct && currentSelectedAct.reqForm && picked != '' && selectedAct !== '')"
              class="widget_info"
            >
              <p class="widget_info_title">3. О нотариальном действии</p>
              <div class="info_item">
                <div class="info_item_head" @click="expandedDescription = !expandedDescription">
                  <div class="info_head_title">Описание</div>
                </div>
                <div
                  class="info_item_body"
                  v-html="description"
                  :class="{'show': expandedDescription}"
                ></div>
              </div>
              <div class="info_item">
                <div class="info_item_head" @click="expandedDocuments = !expandedDocuments">
                  <div class="info_head_title">Документы</div>
                </div>
                <div class="info_item_body" v-html="documents" :class="{'show': expandedDocuments}"></div>
              </div>
              <div class="info_item">
                <div class="info_item_head" @click="expandedPrice = !expandedPrice">
                  <div class="info_head_title">Цена</div>
                </div>
                <div class="info_item_body" v-html="price" :class="{'show': expandedPrice}"></div>
              </div>
            </div>
            <div v-else class="widget_info">
              <p class="widget_info_title">3. О нотариальном действии</p>
              <div class="info_item">
                <div class="info_item_head" @click="expandedDescription = !expandedDescription">
                  <div class="info_head_title">Описание</div>
                </div>
                <div
                  class="info_item_body"
                  :class="{'show': expandedDescription}"
                >Выберите нотариальное действие</div>
              </div>
              <div class="info_item">
                <div class="info_item_head" @click="expandedDocuments = !expandedDocuments">
                  <div class="info_head_title">Документы</div>
                </div>
                <div
                  class="info_item_body"
                  :class="{'show': expandedDocuments}"
                >Выберите нотариальное действие</div>
              </div>
              <div class="info_item">
                <div class="info_item_head" @click="expandedPrice = !expandedPrice">
                  <div class="info_head_title">Цена</div>
                </div>
                <div
                  class="info_item_body"
                  :class="{'show': expandedPrice}"
                >Выберите нотариальное действие</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>-->
    <div class="main__section qq">
      <div class="container">
        <div class="qq-title section-title">Часто используемые запросы</div>
        <div class="qq-content">
          <ul class="qq-links">
            <li>
              <a href="#">
                Нотариусы, работающие в
                <span>выходные</span>
              </a>
            </li>
            <li>
              <a href="#">
                Нотариусы соверщающие
                <span>выезды</span> для нотариальных действий
              </a>
            </li>
          </ul>
          <ul class="qq-exit">
            <li>
              <a href="#">Выезд в СИЗО</a>
            </li>
            <li>
              <a href="#">Выезд в офис</a>
            </li>
            <li>
              <a href="#">Выезд в медучреждение</a>
            </li>
            <li>
              <a href="#">Выезд на дом</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="main__section action">
      <div class="container">
        <div class="action-title section-title">Нотариальные действия</div>
        <div class="action-content">
          <ul class="action-list">
            <li>
              <h3>Недвижимость</h3>
              <a href="#">Купля-продажа, дарение квартир и т.д.</a>
              <a href="#">Ипотека долей в общей собственности</a>
              <a href="#">Договора ренты и пожизненного чего-то</a>
              <a href="#">Материнский капитал</a>
            </li>
          </ul>
          <ul class="action-list">
            <li>
              <h3>Название секции</h3>
              <a href="#">Пример</a>
              <a href="#">Пример</a>
              <a href="#">Пример</a>
              <a href="#">Пример</a>
            </li>
          </ul>
          <ul class="action-list">
            <li>
              <h3>Название секции</h3>
              <a href="#">Пример</a>
              <a href="#">Пример</a>
              <a href="#">Пример</a>
              <a href="#">Пример</a>
            </li>
          </ul>
          <ul class="action-list">
            <li>
              <h3>Название секции</h3>
              <a href="#">Пример</a>
              <a href="#">Пример</a>
              <a href="#">Пример</a>
              <a href="#">Пример</a>
            </li>
          </ul>
          <ul class="action-list">
            <li>
              <h3>Название секции</h3>
              <a href="#">Пример</a>
              <a href="#">Пример</a>
              <a href="#">Пример</a>
              <a href="#">Пример</a>
            </li>
          </ul>
          <ul class="action-list">
            <li>
              <h3>Название секции</h3>
              <a href="#">Пример</a>
              <a href="#">Пример</a>
              <a href="#">Пример</a>
              <a href="#">Пример</a>
            </li>
          </ul>
          <ul class="action-list">
            <li>
              <h3>Недвижимость</h3>
              <a href="#">Купля-продажа, дарение квартир и т.д.</a>
              <a href="#">Ипотека долей в общей собственности</a>
              <a href="#">Договора ренты и пожизненного чего-то</a>
              <a href="#">Материнский капитал</a>
            </li>
          </ul>
          <ul class="action-list">
            <li>
              <h3>Название секции</h3>
              <a href="#">Пример</a>
              <a href="#">Пример</a>
              <a href="#">Пример</a>
              <a href="#">Пример</a>
            </li>
          </ul>
          <ul class="action-list">
            <li>
              <h3>Название секции</h3>
              <a href="#">Пример</a>
              <a href="#">Пример</a>
              <a href="#">Пример</a>
              <a href="#">Пример</a>
            </li>
          </ul>
          <ul class="action-list">
            <li>
              <h3>Название секции</h3>
              <a href="#">Пример</a>
              <a href="#">Пример</a>
              <a href="#">Пример</a>
              <a href="#">Пример</a>
            </li>
          </ul>
          <ul class="action-list">
            <li>
              <h3>Название секции</h3>
              <a href="#">Пример</a>
              <a href="#">Пример</a>
              <a href="#">Пример</a>
              <a href="#">Пример</a>
            </li>
          </ul>
          <ul class="action-list">
            <li>
              <h3>Название секции</h3>
              <a href="#">Пример</a>
              <a href="#">Пример</a>
              <a href="#">Пример</a>
              <a href="#">Пример</a>
            </li>
          </ul>
          <ul class="action-list">
            <li>
              <h3>Недвижимость</h3>
              <a href="#">Купля-продажа, дарение квартир и т.д.</a>
              <a href="#">Ипотека долей в общей собственности</a>
              <a href="#">Договора ренты и пожизненного чего-то</a>
              <a href="#">Материнский капитал</a>
            </li>
          </ul>
          <ul class="action-list">
            <li>
              <h3>Название секции</h3>
              <a href="#">Пример</a>
              <a href="#">Пример</a>
              <a href="#">Пример</a>
              <a href="#">Пример</a>
            </li>
          </ul>
          <ul class="action-list">
            <li>
              <h3>Название секции</h3>
              <a href="#">Пример</a>
              <a href="#">Пример</a>
              <a href="#">Пример</a>
              <a href="#">Пример</a>
            </li>
          </ul>
          <ul class="action-list">
            <li>
              <h3>Название секции</h3>
              <a href="#">Пример</a>
              <a href="#">Пример</a>
              <a href="#">Пример</a>
              <a href="#">Пример</a>
            </li>
          </ul>
          <ul class="action-list">
            <li>
              <h3>Название секции</h3>
              <a href="#">Пример</a>
              <a href="#">Пример</a>
              <a href="#">Пример</a>
              <a href="#">Пример</a>
            </li>
          </ul>
          <ul class="action-list">
            <li>
              <h3>Название секции</h3>
              <a href="#">Пример</a>
              <a href="#">Пример</a>
              <a href="#">Пример</a>
              <a href="#">Пример</a>
            </li>
          </ul>
          <ul class="action-list">
            <li>
              <h3>Недвижимость</h3>
              <a href="#">Купля-продажа, дарение квартир и т.д.</a>
              <a href="#">Ипотека долей в общей собственности</a>
              <a href="#">Договора ренты и пожизненного чего-то</a>
              <a href="#">Материнский капитал</a>
            </li>
          </ul>
          <ul class="action-list">
            <li>
              <h3>Название секции</h3>
              <a href="#">Пример</a>
              <a href="#">Пример</a>
              <a href="#">Пример</a>
              <a href="#">Пример</a>
            </li>
          </ul>
          <ul class="action-list">
            <li>
              <h3>Название секции</h3>
              <a href="#">Пример</a>
              <a href="#">Пример</a>
              <a href="#">Пример</a>
              <a href="#">Пример</a>
            </li>
          </ul>
          <ul class="action-list">
            <li>
              <h3>Название секции</h3>
              <a href="#">Пример</a>
              <a href="#">Пример</a>
              <a href="#">Пример</a>
              <a href="#">Пример</a>
            </li>
          </ul>
          <ul class="action-list">
            <li>
              <h3>Название секции</h3>
              <a href="#">Пример</a>
              <a href="#">Пример</a>
              <a href="#">Пример</a>
              <a href="#">Пример</a>
            </li>
          </ul>
          <ul class="action-list">
            <li>
              <h3>Название секции</h3>
              <a href="#">Пример</a>
              <a href="#">Пример</a>
              <a href="#">Пример</a>
              <a href="#">Пример</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="main__section map">
      <div class="container">
        <div class="map-title section-title">Все нотариусы на карте</div>
        <div class="map-img">
          <img src="/map.png" alt />
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  data: () => ({
    show: false
  }),
  methods: {
    accordion(event) {
      // var matches = document.querySelectorAll(".accordion-item-head");
      // for (var i = 0; i < matches.length; i++) {
      //   matches[i].classList.remove("active");
      // }
      event.target.classList.toggle("active");
    }
  }
};
</script>