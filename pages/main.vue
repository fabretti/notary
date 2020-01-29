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
            <input 
              @keydown.enter="toResults"
              v-model="searchString"
              id="srch" 
              placeholder="Имя нотариуса, метро, город МО" />
            <!-- <div @click="show = !show" class="search-date">
              <p>
                Вт, 24 сентября
                <i class="icon-arrow" :class="{ rotate: show }"></i>
              </p>
              <img @click="modalDate" src="calendar.svg" alt />
              <transition name="fade">
                <div v-if="show" class="date-dropdown">
                  <ul>
                    <li class="selected">Сегодня</li>
                    <li>Завтра, 26 сен</li>
                    <li>Пятница, 27 сен</li>
                    <li @click="showDate = !showDate">Выбрать другой день</li>
                  </ul>
                </div>
              </transition>
              <datepicker :language="ru" v-if="showDate"></datepicker>
            </div>-->
            <CustomSelect
              class="search-date"
              :options="dateList"
              v-model="selectedDate"
            />
            <img @click="modalDate" src="calendar.svg" alt />
          </div>
          <nuxt-link to="/results" class="search-btn">Найти</nuxt-link>
        </form>
      </div>
      <modal class="modal modal-sms modal-date" name="modalDate" width="400px" height="auto">
        <div class="modal-header">
          <h1>Расписание</h1>
        </div>
        <div class="modal-body">
          <div class="radio-btn">
            <label for="opt1" class="radio">
              <input type="radio" name="rdo" id="opt1" class="hidden" />
              <span class="label"></span>Сегодня, 24 октября
            </label>
            <label for="opt2" class="radio">
              <input type="radio" name="rdo" id="opt2" class="hidden" />
              <span class="label"></span>Завтра, 25 октября
            </label>
            <label for="opt3" class="radio">
              <input type="radio" name="rdo" id="opt3" class="hidden" />
              <span class="label"></span>Сб, 26 октября
            </label>
            <label for="opt4" class="radio" @click="modalCalendar">
              <input type="radio" name="rdo" id="opt4" class="hidden" />
              <span class="label"></span>Расписание на все дни
            </label>
          </div>
        </div>
        <div class="modal-bottom">
          <button class="bottom-accept" @click="$modal.hide('modalDate')">Закрыть</button>
        </div>
        <div class="modal-close" @click="$modal.hide('modalDate')"></div>
      </modal>
      <modal
        class="modal modal-sms modal-calendar"
        name="modalCalendar"
        width="400px"
        height="auto"
        >
        <div class="modal-body">
          <date-pick v-model="date" :hasInputElement="false" :months="months" :weekdays="weekdays"></date-pick>
          <p class="info">Онлайн запись доступна только на ближайшие две недели</p>
        </div>
        <div class="modal-bottom">
          <button class="bottom-accept" @click="$modal.hide('modalCalendar')">Назад</button>
        </div>
      </modal>
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
              <div class="sugg-info">Найти нотариуса поблизости</div>
            </div>
            <div class="sugg-box">
              <div class="sugg-img">
                <img src="/icon.booking.svg" alt />
              </div>
              <div class="sugg-info">Записаться на прием к нотариусу</div>
            </div>
            <div class="sugg-box">
              <div class="sugg-img">
                <img src="/icon.consulting.svg" alt />
              </div>
              <div class="sugg-info">Получить онлайн консультацию</div>
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
                Мы публикуем отзывы о нотариусе только от его клиентов,
                побывавших на приеме.
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
              <div class="note-info">
                Узнайте какие документы вам нужны для приема, цену или описание
                для любой нотариальной услуги.
              </div>
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
        <div class="accordion-item" @click="accordion1 = !accordion1">
          <div class="accordion-item-head" :class="{ active: accordion1 }">
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
            <p>
              Нотариальные услуги стоят столько-то и столько-то текст текст
              текст текст текст текст текст текст текст текст текст текст текст
              текст текст
            </p>
          </div>
        </div>

        <div class="accordion-item" @click="accordion2 = !accordion2">
          <div class="accordion-item-head" :class="{ active: accordion2 }">
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
            <p>
              Нотариальные услуги стоят столько-то и столько-то текст текст
              текст текст текст текст текст текст текст текст текст текст текст
              текст текст
            </p>
          </div>
        </div>

        <div class="accordion-item" @click="accordion3 = !accordion3">
          <div class="accordion-item-head" :class="{ active: accordion3 }">
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
            <p>
              Нотариальные услуги стоят столько-то и столько-то текст текст
              текст текст текст текст текст текст текст текст текст текст текст
              текст текст
            </p>
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
          <ul 
            v-for="(notarialAct, index) in notarialActs"
            :key="index"
            class="action-list">
            <li>
              <h3>{{ index }}</h3>
              <a 
                v-for="(act, subIndex) in notarialAct"
                :key="subIndex"
                href="#">{{ act.title }}</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="main__section map">
      <div class="container">
        <div class="map-title section-title">Все нотариусы на карте</div>
        <div id="map">
          <yandex-map 
            :coords="coords" 
            zoom="12">
            <ymap-marker 
              v-for="(mark, index) in marksMap"
              :key="index"
              :coords="[mark.lat, mark.lon]" 
              :marker-id="index"
              clusterName="1"
            >
            <template slot="balloon">
              <nuxt-link to="/page">{{ mark.title }}</nuxt-link>
            </template>
            </ymap-marker>
          </yandex-map>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import CustomSelect from "~/components/CustomSelect.vue";
import DatePick from "vue-date-pick";
import moment from 'moment'
moment.locale('RU')
export default {
  components: {
    CustomSelect,
    DatePick,
  },
  props: {
    weekdays: {
      type: Array,
      default: () => ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"]
    },
    months: {
      type: Array,
      default: () => [
        "Январь",
        "Февраль",
        "Март",
        "Апрель",
        "Май",
        "Июнь",
        "Июль",
        "Август",
        "Сентябрь",
        "Октябрь",
        "Ноябрь",
        "Декабрь"
      ]
    }
  },
  data: () => ({
    show: false,
    showDate: false,
    accordion1: false,
    accordion2: false,
    accordion3: false,
    currentCompanyTitle: '',
    coords: [55.778328, 37.674699],
    date: "2019-02-12",
  }),
  computed: {
    notarialActs() {
      let acts = this.$store.getters['notarialActs/getList']
      
      return acts.reduce((reduce, item) => {
        let firstIndex = item.notarialActTypeTitle, 
            secondIndex = item.id

        if (!reduce[firstIndex]) {
          reduce[firstIndex] = {}
        }

        reduce[firstIndex][secondIndex] = item
        return reduce
      }, {})
    },
    marksMap() {
      return this.$store.getters['companies/getMap']
    },
    balloonTemplate() {
        return `
          <h1>${this.currentCompanyTitle}</h1>
        `
    },
    selectedSubject() {
      return this.$store.getters['subject/getSelectedSubject']
    },
    searchString: {
      get() {
        return this.$store.getters['staticFilters/getSearchString']
      },
      set(value) {
        this.$store.commit('staticFilters/setSearchString', value)
      },
    },
    selectedDate: {
      get() {
        return this.$store.getters['staticFilters/getSelectedDate']
      },
      set(value) {
        this.$store.commit('staticFilters/setSelectedDate', value)
      },
    },
    dateList() {
      let toUpperCaseFirst = i => i.length ? i[0].toUpperCase() + i.slice(1) : i
      let now = moment(moment().format('YYYY-MM-DD')).unix(),
        nextDay = now + 86400,
        nextNextDay = nextDay + 86400,
        nextDayTitle = moment.unix(nextDay).format('dddd, DD.MM'),
        nextNextDayTitle = moment.unix(nextNextDay).format('dddd, DD.MM')
      return [
        {value: now, title: 'Сегодня'}, 
        {value: nextDay, title: toUpperCaseFirst(nextDayTitle)}, 
        {value: nextNextDay , title: toUpperCaseFirst(nextNextDayTitle)}
      ]
    }
  },
  watch: {
    selectedSubject() {
      this.loadMarksMap()
    }
  },
  created() {
    this.loadNotarialActs()
    this.loadMarksMap()
  },
  methods: {
    // accordion(event) {
    //   // var matches = document.querySelectorAll(".accordion-item-head");
    //   // for (var i = 0; i < matches.length; i++) {
    //   //   matches[i].classList.remove("active");
    //   // }
    //   event.target.classList.toggle("active");
    // },
    modalDate() {
      this.$modal.show("modalDate");
    },
    modalCalendar() {
      this.$modal.show("modalCalendar");
    },
    handleMarkClick(mark) {
      console.log(mark)
    },
    loadNotarialActs() {
      this.$store.dispatch("notarialActs/loadList");
    },
    loadMarksMap() {
      this.$store.dispatch("companies/loadMap", {subjectId: this.selectedSubject});
    },
    toResults(e) {
      e.preventDefault();
      this.$router.push({path: '/results'})
    }
  },
};
</script>
