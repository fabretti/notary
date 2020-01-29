<template>
  <section class="results">
    <div class="wrap">
      <div class="results__section search-fixed">
        <div class="search">
          <div class="search-top">
            <div class="search-title">
              <span>Нотариусы на метро</span> Бульвар Адмирала Ушакова
            </div>
            <div class="search-icons">
              <img src="/mdi-map-marker.svg" alt />
              <img src="/mdi-comment-question.svg" alt />
            </div>
          </div>
          <form class="search-form">
            <div class="search-formDate">
              <input 
                @keyup.enter="reloadCompanies"
                v-model="searchString"
                id="srch" 
                placeholder="Имя нотариуса, метро, город МО" />
              <!-- <div @click="show = !show" class="search-date">
                <p>Вт, 24 сентября</p>
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
              </div>-->
              <CustomSelect
                :options="dateList"
                v-model="selectedDate"
              />
            </div>
            <button 
              class="search-btn"
              @click.prevent="reloadCompanies"
              >Найти</button>
          </form>

          <form class="search-form-mb">
            <div class="search-formDate">
              <input 
                v-model="searchString"
                id="srch" 
                placeholder="Бульвар Адмирала Ушакова" />
              <button class="search-btn">
                <img src="/bx-search.svg" alt />
              </button>
            </div>
            <div class="search-bottomMobile">
              <div @click="modalDate" class="search-date">
                <p>Расписание на все дни</p>
                <i class="icon-arrow"></i>
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
              <div class="filter" @click="modalFilter">
                <img src="/Filter.svg" alt />
              </div>
            </div>
          </form>
        </div>
      </div>
      <div class="results__section notarys">
        <div class="notarys-filter">
          <div class="checkbox">
            <input 
              v-model="isWeekendWork" 
              type="checkbox" 
              class="checkbox__input" 
              id="cb1" />
            <label for="cb1" class="label-style">Сб, вс.</label>
          </div>
          <div class="checkbox">
            <input 
              v-model="isFieldWork" 
              type="checkbox" 
              class="checkbox__input" 
              id="cb2" />
            <label for="cb2" class="label-style">Выезд</label>
          </div>
        </div>
        <div class="notary-list">
          <div v-for="(cp, index) in companies" :key="index" class="notary-card">
            <div class="card-left">
              <div class="card-avatar">
                <nuxt-link :to="'/page/' + cp.id">
                  <img class="notary-avatar" src="/ava.jpg" alt />
                </nuxt-link>
                <div class="card-rev">
                  <star :rating="cp.rating" />
                  <div class="rev">
                    <a href="#">{{ cp.voteQuantity }}</a>
                  </div>
                </div>
              </div>
              <div class="card-center">
                <div class="card-spec">{{ cp.typeOfWork }}</div>
                <div class="card-name">
                  <nuxt-link :to="'/page/' + cp.id">{{ cp.title }}</nuxt-link>
                </div>
                <div class="card-year">{{ cp.workExperience }}</div>
                <ul class="card-subway">
                  <li class="subway-item">
                    <span class="subway-color" :style="{ background: cp.districtColor }"></span>
                    {{ cp.districtTitle }}
                    <div class="subway-step">
                      <img src="/footstep.svg" />
                      {{ cp.districtDistance }}
                    </div>
                  </li>
                  <li class="subway-item">
                    <span class="subway-color" :style="{ background: cp.secondDistrictColor }"></span>
                    {{ cp.secondDistrictTitle }}
                    <div class="subway-step">
                      <img src="/footstep.svg" />
                      {{ cp.secondDistrictDistance }}
                    </div>
                  </li>
                  <li class="subway-item">
                    <span class="subway-color" :style="{ background: cp.thirdDistrictColor }"></span>
                    {{ cp.thirdDistrictTitle }}
                    <div class="subway-step">
                      <img src="/footstep.svg" />
                      {{ cp.thirdDistrictDistance }}
                    </div>
                  </li>
                </ul>
                <div class="card-adress">{{ cp.address }}</div>
              </div>
            </div>
            <dateTimePicker 
              @click="(date, time) => showModal(cp.id, date, time)"
              :week="cp && cp.workSettings && cp.workSettings.items ? cp.workSettings.items : []"
              :forbiddenTimes="cp && cp.calendar ? ({...cp.calendar}) : {}"
              :selectedDate="selectedDate"
              />
          </div>
        </div>
        <div class="pagination">
          <button
            :class="{active: currentPage - 1 > 0}"
            @click="handlePagination(currentPage - 1)"
            class="arrow__pag prev"
          >
            <img src="/arrowBack.svg" alt />
          </button>
          <button
            v-for="(p, i) in paginationList"
            :key="i"
            class="page__num"
            :class="{active: p == currentPage}"
            @click="handlePagination(p)"
          >{{ p }}</button>
          <button
            :class="{active: currentPage + 1 <= quantityPages}"
            @click="handlePagination(currentPage + 1)"
            class="arrow__pag next"
          >
            <img src="/arrowBack.svg" alt />
          </button>
        </div>
      </div>
      <div class="results__section map">
        <div class="container">
          <div class="map-title section-title">Все нотариусы на карте</div>
          <div id="map">
            <yandex-map :coords="coords" zoom="12">
              <ymap-marker marker-id="123" :coords="coords" :balloon-template="balloonTemplate" />
            </yandex-map>
          </div>
        </div>
      </div>
      <client-only>
        <modal class="modal modal-record" name="modalRecord" height="auto">
          <div class="modal-header">
            <h1>Запись на прием</h1>
          </div>
          <div class="modal-body notary-list">
            <div class="notary-card">
              <div class="card-left">
                <div class="card-avatar">
                  <a href="page">
                    <img class="notary-avatar" src="/ava.jpg" alt />
                  </a>
                  <div class="card-rev">
                    <star :rating="profile.rating" />
                    <div class="rev">
                      <a href="#">
                        {{ profile.voteQuantity }}
                        <span>отзывов</span>
                      </a>
                    </div>
                  </div>
                </div>
                <div class="card-center">
                  <div class="card-name">
                    <a href="page">{{ company.title }}</a>
                  </div>
                  <div class="card-rev">
                    <star :rating="profile.rating" />
                    <div class="rev">
                      <a href="#">
                        {{ profile.voteQuantity }}
                        <span>отзывов</span>
                      </a>
                    </div>
                  </div>
                  <ul class="card-subway">
                    <li class="subway-item">
                      <span class="subway-color" :style="{ background: company.districtColor }"></span>{{ company.districtTitle }}
                      <div class="subway-step">
                        <img src="/footstep.svg" /> {{ company.districtDistance }} м
                      </div>
                    </li>
                  </ul>
                  <div class="card-adress">{{ profile.address }}</div>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-center">
            <div class="form__record">
              <div class="form__box">
                <label for="vnd">
                  Вид нотариального действия
                  <span>*</span>
                </label>
                <div class="search-box">
                  <select v-model="notarialActTypeId">
                    <option value disabled="true">Выберите тип НД</option>
                    <option
                      v-for="(item, index) in notarialActTypes"
                      :key="index"
                      :value="item.id"
                    >{{ item.title }}</option>
                  </select>
                </div>
              </div>
              <div class="form__box">
                <label for="vnd">
                  Нотариальное действие
                  <span>*</span>
                </label>
                <div class="search-box">
                  <select 
                    v-model="notarialActId" 
                    :disabled="!notarialActTypeId"
                    >
                    <option value disabled="true">Вид действия</option>
                    <option
                      v-for="(item, index) in notarialActs"
                      :key="index"
                      :value="item.id"
                    >{{ item.title }}</option>
                  </select>
                </div>
              </div>
              <div class="form__box">
                <label for="vnd">
                  Дата и время приёма
                  <span>*</span>
                </label>
                <div class="search-box showTime" disabled>
                  <div class="time">{{ date + time | dateTimeFormat }}</div>
                </div>
              </div>
              <div class="form__box">
                <label for="vnd">
                  Ваше имя
                  <span>*</span>
                </label>
                <div class="input-box name">
                  <input type="text" placeholder="Ваше имя" v-model="customerFirstName" />
                </div>
              </div>
              <div class="form__box">
                <label for="vnd">
                  Телефон для подтверждения записи
                  <span>*</span>
                </label>
                <div class="input-box tel">
                  <input
                    class="u-full-width"
                    id="phone-number-ex"
                    type="text"
                    placeholder="+7 (___) ___-__-__"
                    v-mask="'+7 (###) ###-##-##'"
                    v-model="customerPhoneNumber"
                  />
                </div>
              </div>
              <div class="sms">
                <img src="/sms.svg" alt />
                <p>На этот номер вы получите SMS с кодом подтверждения и информацию о записи.</p>
              </div>
            </div>
          </div>
          <div class="modal-bottom">
            <button 
              class="modal-sign" 
              @click="createOrder"
              :disabled="loadingCreateOrder"
            >Записаться</button>
          </div>
          <div class="modal-close" @click="$modal.hide('modalRecord')"></div>
        </modal>
        <modal class="modal modal-sms modalBottom" name="modalSms" width="400px" height="auto">
          <div class="modal-header">
            <h1>Запись на прием</h1>
            <div class="under-header">Вам на телефон выслан код</div>
          </div>
          <div class="modal-body">
            <div class="form__box">
              <input type="text" placeholder="Введите код из СМС" />
            </div>
            <div class="sms-timer">
              <a href>Выслать СМС повторно</a>
              <p>3:00</p>
            </div>
          </div>
          <div class="modal-bottom">
            <button class="bottom-accept" @click="showThirdModal">Подтвердить</button>
            <p>
              Нажимая “Подтвердить”, я принимаю
              <a
                href="#"
              >условия пользовательского соглашения, положение о защите персональных данных</a> и даю свое согласие на
              <a href="#">обработку персональных данных.</a>
            </p>
          </div>
          <div class="modal-close" @click="$modal.hide('modalSms')"></div>
        </modal>
        <modal class="modal modal-accept" name="modalAccept" height="auto">
          <div class="modal-header">
            <h1>Запись на прием</h1>
          </div>
          <div class="modal-body notary-list">
            <div class="notary-card">
              <div class="card-left">
                <div class="card-avatar">
                  <img class="notary-avatar" src="/ava.jpg" alt />
                </div>
                <div class="card-center">
                  <div class="card-name">
                    <a href="page">Ложкин Валерий Александрович</a>
                  </div>
                  <div class="card-rev">
                    <star  />
                    <div class="rev">
                      <a href="#">
                        19
                        <span>отзывов</span>
                      </a>
                    </div>
                  </div>
                  <ul class="card-subway">
                    <li class="subway-item">
                      <span class="subway-color"></span>Авиамоторная
                      <div class="subway-step">
                        <img src="/footstep.svg" /> 323 м
                      </div>
                    </li>
                  </ul>
                  <div class="card-adress">г. Москва, ул. 2-я Кабельная, д.2, стр. 14</div>
                </div>
              </div>
            </div>
            <div class="modal-message">
              <p>
                Уважаемый/мая Маргарита!
                <br />
                <br />Вы записаны на прием
                <br />
                <span>в четверг 26-сен на 9:30</span>
                <br />
                <br />В течение 5 минут ожидайте СМС с подтверждением записи. Данные по записи (время, адрес, телефон) мы продублируем в сообщении.
                <br />
                <br />Рады помочь!
                <br />
                <br />Сервис Право - ID
              </p>
              <img src="/signature.svg" alt />
            </div>
          </div>
          <div class="modal-bottom">
            <button class="modal-bottomClose" @click="$modal.hide('modalAccept')">Закрыть</button>
          </div>
          <div class="modal-close" @click="$modal.hide('modalAccept')"></div>
        </modal>
        <modal class="modal modal-time" name="modalTime" height="auto">
          <div class="modal-header">
            <h1>Запись на прием</h1>
            <div class="modal-close" @click="$modal.hide('modalTime')"></div>
          </div>
          <div class="modal-body notary-list">
            <div class="notary-card">
              <div class="card-left">
                <div class="card-avatar">
                  <a href="page">
                    <img class="notary-avatar" src="/ava.jpg" alt />
                  </a>
                  <div class="card-rev">
                    <star :rating="profile.rating" />
                    <div class="rev">
                      <a href="#">
                        {{ profile.voteQuantity }}
                        <span>отзывов</span>
                      </a>
                    </div>
                  </div>
                </div>
                <div class="card-center">
                  <div class="card-name">
                    <a href="page">{{ company.title }}</a>
                  </div>
                  <div class="card-rev">
                    <star :rating="profile.rating" />
                    <div class="rev">
                      <a href="#">
                        {{ profile.voteQuantity }}
                        <span>отзывов</span>
                      </a>
                    </div>
                  </div>
                  <ul class="card-subway">
                    <li class="subway-item">
                      <span class="subway-color" :style="{ background: company.districtColor }"></span>{{ company.districtTitle }}
                      <div class="subway-step">
                        <img src="/footstep.svg" /> {{ company.districtDistance }} м
                      </div>
                    </li>
                  </ul>
                  <div class="card-adress">{{ profile.address }}</div>
                </div>
              </div>
            </div>
            <div class="card-right sign-date">
              <div class="slider-month">
                <carousel
                  :paginationEnabled="false"
                  :navigationEnabled="true"
                  :perPage="1"
                  navigationNextLabel="<i class='material-icons'><img src='/Polygon.svg'></i>"
                  navigationPrevLabel="<i class='material-icons'><img src='/PolygonL.svg'></i>"
                >
                  <slide>
                    <div>Октябрь</div>
                  </slide>
                  <slide>
                    <div>Ноябрь</div>
                  </slide>
                  <slide>
                    <div>Декабрь</div>
                  </slide>
                </carousel>
              </div>
              <div class="slider-days">
                <carousel
                  :paginationEnabled="false"
                  :navigationEnabled="true"
                  :perPageCustom="[[300, 3], [400, 4], [560, 6]]"
                  navigationNextLabel="<i class='material-icons'><img src='/Polygon.svg'></i>"
                  navigationPrevLabel="<i class='material-icons'><img src='/PolygonL.svg'></i>"
                >
                  <slide>
                    <div class="slider-btn btn-day active">
                      Вт
                      <br />24 окт
                    </div>
                  </slide>
                  <slide>
                    <div class="slider-btn btn-day disabled">
                      Вт
                      <br />24 окт
                    </div>
                  </slide>
                  <slide>
                    <div class="slider-btn btn-day default">
                      Вт
                      <br />24 окт
                    </div>
                  </slide>
                  <slide>
                    <div class="slider-btn btn-day default">
                      Вт
                      <br />24 окт
                    </div>
                  </slide>
                  <slide>
                    <div class="slider-btn btn-day default">
                      Вт
                      <br />24 окт
                    </div>
                  </slide>
                  <slide>
                    <div class="slider-btn btn-day default">
                      Вт
                      <br />24 окт
                    </div>
                  </slide>
                  <slide>
                    <div class="slider-btn btn-day default">
                      Вт
                      <br />24 окт
                    </div>
                  </slide>
                </carousel>
              </div>
              <div class="block-times">
                <ul>
                  <li>
                    <div class="slider-btn btn-time default">15:30</div>
                  </li>
                  <li>
                    <div class="slider-btn btn-time default">16:30</div>
                  </li>
                  <li>
                    <div class="slider-btn btn-time default">17:30</div>
                  </li>
                  <li>
                    <div class="slider-btn btn-time default">18:30</div>
                  </li>
                  <li>
                    <div class="slider-btn btn-time default">19:30</div>
                  </li>
                  <li>
                    <div class="slider-btn btn-time default">20:30</div>
                  </li>
                  <li>
                    <div class="slider-btn btn-time default">21:30</div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </modal>
        <modal
          class="modal modal-date modal-sms modalBottom"
          name="modalDate"
          width="400px"
          height="auto"
          >
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
              <label for="opt4" class="radio">
                <input type="radio" name="rdo" id="opt4" class="hidden" />
                <span class="label"></span>Расписание на все дни
              </label>
              <label class="chooseDate radio">
                <img src="/calendarGrey.svg" alt />
                <p>Выбрать другой день</p>
              </label>
            </div>
          </div>
          <div class="modal-bottom">
            <button class="bottom-accept" @click="$modal.hide('modalDate')">Закрыть</button>
          </div>
          <div class="modal-close" @click="$modal.hide('modalDate')"></div>
        </modal>
        <modal
          class="modal modal-filter modalBottom modal-date"
          name="modalFilter"
          width="400px"
          height="auto"
          >
          <div class="modal-header">
            <h1>Настройка поиска</h1>
            <div class="modal-close" @click="$modal.hide('modaFilter')"></div>
          </div>
          <div class="modal-body">
            <div class="radio-btn">
              <h2>Сортировка</h2>
              <label for="opt1" class="radio">
                <input type="radio" name="rdo" id="opt1" class="hidden" />
                <span class="label"></span>По рейтингу
              </label>
              <label for="opt2" class="radio">
                <input type="radio" name="rdo" id="opt2" class="hidden" />
                <span class="label"></span>Параметр
              </label>
              <h2>Прочее</h2>
              <label for="opt3" class="radio">
                <input type="radio" name="rdo" id="opt3" class="hidden" />
                <span class="label"></span>Нотариусы с выездом
              </label>
              <label for="opt4" class="radio">
                <input type="radio" name="rdo" id="opt4" class="hidden" />
                <span class="label"></span>Работают в выходные
              </label>
            </div>
          </div>
          <div class="modal-bottom">
            <button class="bottom-accept">Сохранить</button>
          </div>
        </modal>
      </client-only>
    </div>
  </section>
</template>
<script>
import notaryCard from "~/components/notaryCard";
import CustomSelect from "~/components/CustomSelect.vue";
import star from "~/components/star";
import dateTimePicker from "~/components/dateTimePicker"
import moment from 'moment'
moment.locale('RU')

export default {
  components: {
    notaryCard,
    CustomSelect,
    star,
    dateTimePicker,
  },
  data: () => ({
    show: false,
    dynamicMask: "###.###.###/###",
    
    notarialActTypeId: "",
    notarialActId: "",
    customerFirstName: "",
    customerPhoneNumber: "",
    companyId: null,
    date: 1581530400,
    time: 57600,
    loadingCreateOrder: false,

    coords: [55.778328, 37.674699],
  }),
  computed: {
    notarialActTypes() {
      return this.$store.getters["notarialActTypes/getList"]
    },
    notarialActs() {
      return this.$store.getters["notarialActs/getList"]
    },
    companies() {
      return this.$store.getters["companies/getList"]
    },
    company() {
      return this.$store.getters["companies/getItem"]
    },
    profile() {
      return this.company && this.company.profile ? this.company.profile : {}
    },
    currentPage() {
      return this.$store.getters["companies/getCurrentPage"]
    },
    quantityPages() {
      return this.$store.getters["companies/getQuantityPages"]
    },
    paginationList() {
      let currentPage = this.currentPage,
        quantityPages = this.quantityPages;
      if (!currentPage || !quantityPages) {
        return {};
      }

      if (quantityPages <= 5) {
        return [...Array(quantityPages).keys()].reduce((r, i) => {
          r[i] = i + 1;
          return r;
        }, {});
      }

      const pag = {}

      const offsets = [-10, -1, 0, 1, 10]

      /**
       * first
       */
      pag[0] = 1;

      let p;
      /**
       * offsets
       */
      for (let offset of offsets) {
        p = currentPage + offset;
        if (p > 1 && p < quantityPages) {
          pag[p - 1] = p;
        }
      }
      /**
       * last
       */
      pag[quantityPages - 1] = quantityPages;

      return pag;
    },
    balloonTemplate() {
      return `
        <h1 class="red">Hi, everyone!</h1>
      `
    },
    searchString: {
      get() {
        return this.$store.getters['staticFilters/getSearchString']
      },
      set(value) {
        this.$store.commit('staticFilters/setSearchString', value)
      },
    },
    isWeekendWork: {
      get() {
        return this.$store.getters['staticFilters/getIsWeekendWork']
      },
      set(value) {
        this.$store.commit('staticFilters/setIsWeekendWork', value)
      },
    },
    isFieldWork: {
      get() {
        return this.$store.getters['staticFilters/getIsFieldWork']
      },
      set(value) {
        this.$store.commit('staticFilters/setIsFieldWork', value)
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
    staticFilters() {
      return this.$store.getters['staticFilters/all']
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
  mounted() {
    this.loadNotarialActTypes();
    let page = this.$route.params.page;
    if (page === undefined || page < 1) {
      page = 1;
    }
    this.loadCompanies(Number(page));
    console.log(123);
  },
  watch: {
    notarialActTypeId(value, old) {
      if (!value || value == old) {
        return;
      }
      this.notarialActId = "";
      this.loadNotarialActs(value);
    }
  },
  methods: {
    showModal(id, date, time) {
      this.companyId = id
      this.date = date
      this.time = time
      this.$store.dispatch('companies/loadItem', id)
      this.$modal.show("modalRecord")
    },
    showSecondModal() {
      this.$modal.show("modalSms");
    },
    showThirdModal() {
      this.$modal.show("modalAccept");
      this.$modal.hide("modalSms");
    },
    showTimeModal() {
      this.$modal.show("modalTime");
    },
    modalDate() {
      this.$modal.show("modalDate");
    },
    modalFilter() {
      this.$modal.show("modalFilter");
    },
    loadNotarialActTypes() {
      this.$store.dispatch("notarialActTypes/loadList");
    },
    loadNotarialActs(value) {
      this.$store.dispatch("notarialActs/loadList", value);
    },
    async createOrder() {
      if (this.loadingCreateOrder) {
        return
      }

      this.loadingCreateOrder = true

      let result = await this.$store.dispatch("orders/create", {
        notarialActTypeId: this.notarialActTypeId,
        notarialActId: this.notarialActId,
        customerFirstName: this.customerFirstName,
        customerPhoneNumber: this.customerPhoneNumber,
        companyId: this.companyId,
        date: this.date,
        time: this.time
      })

      this.loadingCreateOrder = false

      if (!result) {
        return
      }

      this.loadCompanies(this.currentPage)
      this.$modal.hide('modalRecord')
      this.notarialActTypeId = ''
      this.notarialActId = ''
      this.customerFirstName = ''
      this.customerPhoneNumber = ''
      this.companyId = null
      this.date = null
      this.time = null
    },
    loadCompanies(page) {
      this.$store.dispatch("companies/loadList", {page, ...this.staticFilters});
    },
    reloadCompanies() {
      this.loadCompanies(this.currentPage)
    },
    handlePagination(page) {
      if (page == this.currentPage || page < 1 || page > this.quantityPages) {
        return;
      }
      // this.$store.dispatch("companies/loadList", page);
      this.$router.push({ path: "/results/" + page });
    }
  }
};
</script>