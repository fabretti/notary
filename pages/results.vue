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
              <img src="mdi-map-marker.svg" alt />
              <img src="mdi-comment-question.svg" alt />
            </div>
          </div>
          <form class="search-form">
            <div class="search-formDate">
              <input id="srch" placeholder="Имя нотариуса, метро, город МО" />
              <div @click="show = !show" class="search-date">
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
              </div>
            </div>
            <button class="search-btn">Найти</button>
          </form>

          <form class="search-form mobile">
            <div class="search-formDate">
              <input id="srch" placeholder="Бульвар Адмирала Ушакова" />
              <button class="search-btn">Найти</button>
            </div>
            <div class="search-bottomMobile">
              <div @click="modalDate" class="search-date">
                <p>Расписание на все дни</p>
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
              <div class="filter" @click="modalFilter">
                <img src="Filter.svg" alt />
              </div>
            </div>
          </form>
        </div>
        
      </div>
      <div class="results__section notarys">
        <div class="notarys-filter">
          <div class="checkbox">
            <input type="checkbox" class="checkbox__input" id="cb1" />
            <label for="cb1" class="label-style">Сб, вс.</label>
          </div>
          <div class="checkbox">
            <input type="checkbox" class="checkbox__input" id="cb2" />
            <label for="cb2" class="label-style">Выезд</label>
          </div>
        </div>
        <div class="notary-list">
          <div class="notary-card">
            <div class="card-left">
              <div class="card-avatar">
                <a href="page"><img class="notary-avatar" src="/ava.jpg" alt /></a>
                <div class="card-rev">
                  <div class="notary-stars">
                    <div class="notary-star">
                      <img src="/starO.svg" alt />
                    </div>
                    <div class="notary-star">
                      <img src="/starO.svg" alt />
                    </div>
                    <div class="notary-star">
                      <img src="/starO.svg" alt />
                    </div>
                    <div class="notary-star">
                      <img src="/starO.svg" alt />
                    </div>
                    <div class="notary-star">
                      <img src="/starD.svg" alt />
                    </div>
                  </div>
                  <div class="rev">
                    <a href="#">19 <span>отзывов</span></a>
                  </div>
                </div>
              </div>
              <div class="card-center">
                <div class="card-spec">Нотариус</div>
                <div class="card-name">
                  <a href="page">Ложкин Валерий Александрович</a>
                </div>
                <div class="card-year">Стаж 8 лет</div>
                <ul class="card-subway">
                  <li class="subway-item">
                    <span class="subway-color"></span>Авиамоторная
                    <div class="subway-step">
                      <img src="/footstep.svg" /> 323 м
                    </div>
                  </li>
                  <li class="subway-item">
                    <span class="subway-color"></span>Парк победы
                    <div class="subway-step">
                      <img src="/footstep.svg" /> 323 м
                    </div>
                  </li>
                  <li class="subway-item">
                    <span class="subway-color"></span>Павелецкая
                    <div class="subway-step">
                      <img src="/footstep.svg" /> 323 м
                    </div>
                  </li>
                </ul>
                <div class="card-adress">г. Москва, ул. 2-я Кабельная, д.2, стр. 14</div>
              </div>
            </div>
            <div class="card-right">
              <p class="card-rightChoose">Выберите время для записи на <span>сегодня</span></p>
              <div class="slider-month">
                <swiper :options="swiperOption1">
                  <swiper-slide>Сентябрь</swiper-slide>
                  <swiper-slide>Октябрь</swiper-slide>
                  <swiper-slide>Ноябрь</swiper-slide>
                  <div class="swiper-button-prev" slot="button-prev"></div>
                  <div class="swiper-button-next" slot="button-next"></div>
                </swiper>
              </div>
              <div class="slider-days">
                <swiper :options="swiperOption2">
                  <swiper-slide>
                    <div class="slider-btn btn-day active">Вт, 24</div>
                  </swiper-slide>
                  <swiper-slide>
                    <div class="slider-btn btn-day disabled">Ср, 25</div>
                  </swiper-slide>
                  <swiper-slide>
                    <div class="slider-btn btn-day default">Чт, 26</div>
                  </swiper-slide>
                  <swiper-slide>
                    <div class="slider-btn btn-day default">Пт, 27</div>
                  </swiper-slide>
                  <swiper-slide>
                    <div class="slider-btn btn-day default">Сб, 28</div>
                  </swiper-slide>
                  <div class="swiper-button-prev" slot="button-prev"></div>
                  <div class="swiper-button-next" slot="button-next"></div>
                </swiper>
              </div>
              <div class="block-times">
                <ul>
                  <li>
                    <div class="slider-btn btn-time default" @click="showModal">15:30</div>
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
          <div class="notary-card">
            <div class="card-left">
              <div class="card-avatar">
                <a href="page"><img class="notary-avatar" src="/ava.jpg" alt /></a>
                <div class="card-rev">
                  <div class="notary-stars">
                    <div class="notary-star">
                      <img src="/starO.svg" alt />
                    </div>
                    <div class="notary-star">
                      <img src="/starO.svg" alt />
                    </div>
                    <div class="notary-star">
                      <img src="/starO.svg" alt />
                    </div>
                    <div class="notary-star">
                      <img src="/starO.svg" alt />
                    </div>
                    <div class="notary-star">
                      <img src="/starD.svg" alt />
                    </div>
                  </div>
                  <div class="rev">
                    <a href="#">19 <span>отзывов</span></a>
                  </div>
                </div>
              </div>
              <div class="card-center">
                <div class="card-spec">Нотариус</div>
                <div class="card-name">
                  <a href="page">Ложкин Валерий Александрович</a>
                </div>
                <div class="card-year">Стаж 8 лет</div>
                <ul class="card-subway">
                  <li class="subway-item">
                    <span class="subway-color"></span>Авиамоторная
                    <div class="subway-step">
                      <img src="/footstep.svg" /> 323 м
                    </div>
                  </li>
                  <li class="subway-item">
                    <span class="subway-color"></span>Парк победы
                    <div class="subway-step">
                      <img src="/footstep.svg" /> 323 м
                    </div>
                  </li>
                  <li class="subway-item">
                    <span class="subway-color"></span>Павелецкая
                    <div class="subway-step">
                      <img src="/footstep.svg" /> 323 м
                    </div>
                  </li>
                </ul>
                <div class="card-adress">г. Москва, ул. 2-я Кабельная, д.2, стр. 14</div>
              </div>
            </div>
            <div class="card-right">
              <div class="slider-month">
                <swiper :options="swiperOption1">
                  <swiper-slide>Сентябрь</swiper-slide>
                  <swiper-slide>Октябрь</swiper-slide>
                  <swiper-slide>Ноябрь</swiper-slide>
                  <div class="swiper-button-prev" slot="button-prev"></div>
                  <div class="swiper-button-next" slot="button-next"></div>
                </swiper>
              </div>
              <div class="slider-days">
                <swiper :options="swiperOption2">
                  <swiper-slide>
                    <div class="slider-btn btn-day active">Вт, 24</div>
                  </swiper-slide>
                  <swiper-slide>
                    <div class="slider-btn btn-day disabled">Ср, 25</div>
                  </swiper-slide>
                  <swiper-slide>
                    <div class="slider-btn btn-day default">Чт, 26</div>
                  </swiper-slide>
                  <swiper-slide>
                    <div class="slider-btn btn-day default">Пт, 27</div>
                  </swiper-slide>
                  <swiper-slide>
                    <div class="slider-btn btn-day default">Сб, 28</div>
                  </swiper-slide>
                  <div class="swiper-button-prev" slot="button-prev"></div>
                  <div class="swiper-button-next" slot="button-next"></div>
                </swiper>
              </div>
              <div class="block-times error">
                <img src="busy.svg" alt />
                <p>Сегодня занято, ближайшая запись на Чт, 26 сен</p>
              </div>
            </div>
          </div>
        </div>
        <div class="pagination">
          <button class="arrow__pag prev">
            <img src="arrowBack.svg" alt="">
          </button>
          <button class="page__num active">1</button>
          <button class="page__num">2</button>
          <button class="page__num">3</button>
          <button class="page__num">4</button>
          <button class="page__num">5</button>
          <button class="page__num">6</button>
          <button class="page__num dots">...</button>
          <button class="page__num">13</button>
          <button class="arrow__pag next active">
            <img src="arrowBack.svg" alt="">
          </button>
        </div>
      </div>
      <div class="result__section map">
      <div class="container">
        <div class="map-title section-title">Все нотариусы на карте</div>
        <div id="map">
        <yandex-map :coords="coords" zoom="12">
          <ymap-marker :coords="coords" marker-id="1" marker-type="placemark" />
          <ymap-marker :coords="coords" marker-id="2" marker-type="placemark" />
          <ymap-marker :coords="coords" marker-id="3" marker-type="placemark" />
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
                  <img class="notary-avatar" src="/ava.jpg" alt />
                </div>
                <div class="card-center">
                  <div class="card-name">
                    <a href="page">Ложкин Валерий Александрович</a>
                  </div>
                  <div class="card-underName">
                    <div class="notary-stars">
                      <div class="notary-star">
                        <img src="/starO.svg" alt />
                      </div>
                      <div class="notary-star">
                        <img src="/starO.svg" alt />
                      </div>
                      <div class="notary-star">
                        <img src="/starO.svg" alt />
                      </div>
                      <div class="notary-star">
                        <img src="/starO.svg" alt />
                      </div>
                      <div class="notary-star">
                        <img src="/starD.svg" alt />
                      </div>
                    </div>
                    <div class="rev">
                      <a href="#">19 отзывов</a>
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
            <div class="form__record">
              <div class="form__box">
                <label for="vnd">
                  Вид нотариального действия
                  <span>*</span>
                </label>
                <div class="search-box">
                  <select name id>
                    <option selected="true" disabled="disabled">Вид действия</option>
                    <option value>Действие 1</option>
                  </select>
                </div>
              </div>
              <div class="form__box">
                <label for="vnd">Нотариальное действие</label>
                <div class="search-box">
                  <select name id>
                    <option selected="true" disabled="disabled">Вид действия</option>
                    <option value>Действие 1</option>
                  </select>
                </div>
              </div>
              <div class="form__box">
                <label for="vnd">
                  Дата и время приёма
                  <span>*</span>
                </label>
                <div class="search-box" @click="showTimeModal">
                  <select name id>
                    <option selected="true" disabled="disabled">Вид действия</option>
                    <option value>аывавыа</option>
                  </select>
                </div>
              </div>
              <div class="form__box">
                <label for="vnd">
                  Ваше имя
                  <span>*</span>
                </label>
                <input type="text" placeholder="Ваше имя" />
              </div>
              <div class="form__box">
                <label for="vnd">
                  Телефон для подтверждения записи
                  <span>*</span>
                </label>
                <input
                  class="u-full-width"
                  id="phone-number-ex"
                  type="text"
                  placeholder="+7 (___) ___-__-__"
                  v-mask="'+7 (###) ###-##-##'"
                  v-model="models.phoneNumber"
                />
              </div>
              <div class="sms">
                <img src="sms.svg" alt />
                <p>На этот номер вы получите SMS с кодом подтверждения и информацию о записи.</p>
              </div>
            </div>
          </div>
          <div class="modal-bottom">
            <button class="modal-sign" @click="showSecondModal">Записаться</button>
          </div>
          <div class="modal-close" @click="$modal.hide('modalRecord')"></div>
        </modal>
        <modal class="modal modal-sms" name="modalSms" width="400px" height="auto">
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
                  <div class="card-underName">
                    <div class="notary-stars">
                      <div class="notary-star">
                        <img src="/starO.svg" alt />
                      </div>
                      <div class="notary-star">
                        <img src="/starO.svg" alt />
                      </div>
                      <div class="notary-star">
                        <img src="/starO.svg" alt />
                      </div>
                      <div class="notary-star">
                        <img src="/starO.svg" alt />
                      </div>
                      <div class="notary-star">
                        <img src="/starD.svg" alt />
                      </div>
                    </div>
                    <div class="rev">
                      <a href="#">19 отзывов</a>
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
              <img src="signature.svg" alt />
            </div>
          </div>
          <div class="modal-bottom">
            <button class="modal-bottomClose" @click="$modal.hide('modalAccept')">Закрыть</button>
          </div>
          <div class="modal-close" @click="$modal.hide('modalRecord')"></div>
        </modal>
        <modal class="modal modal-time" name="modalTime" height="auto">
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
                  <div class="card-underName">
                    <div class="notary-stars">
                      <div class="notary-star">
                        <img src="/starO.svg" alt />
                      </div>
                      <div class="notary-star">
                        <img src="/starO.svg" alt />
                      </div>
                      <div class="notary-star">
                        <img src="/starO.svg" alt />
                      </div>
                      <div class="notary-star">
                        <img src="/starO.svg" alt />
                      </div>
                      <div class="notary-star">
                        <img src="/starD.svg" alt />
                      </div>
                    </div>
                    <div class="rev">
                      <a href="#">19 отзывов</a>
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
            <div class="card-right sign-date">
              <div class="slider-month">
                <swiper :options="swiperOption1">
                  <swiper-slide>Сентябрь</swiper-slide>
                  <swiper-slide>Октябрь</swiper-slide>
                  <swiper-slide>Ноябрь</swiper-slide>
                  <div class="swiper-button-prev" slot="button-prev"></div>
                  <div class="swiper-button-next" slot="button-next"></div>
                </swiper>
              </div>
              <div class="slider-days">
                <swiper :options="swiperOptionSlider">
                  <swiper-slide>
                    <div class="slider-btn btn-day active">
                      Вт
                      <br />30 cен
                    </div>
                  </swiper-slide>
                  <swiper-slide>
                    <div class="slider-btn btn-day disabled">
                      Ср
                      <br />1 окт
                    </div>
                  </swiper-slide>
                  <swiper-slide>
                    <div class="slider-btn btn-day default">
                      Чт
                      <br />2 окт
                    </div>
                  </swiper-slide>
                  <swiper-slide>
                    <div class="slider-btn btn-day default">
                      Пт
                      <br />3 окт
                    </div>
                  </swiper-slide>
                  <swiper-slide>
                    <div class="slider-btn btn-day default">
                      Сб
                      <br />4 окт
                    </div>
                  </swiper-slide>
                  <swiper-slide>
                    <div class="slider-btn btn-day default">
                      Сб
                      <br />4 окт
                    </div>
                  </swiper-slide>
                  <swiper-slide>
                    <div class="slider-btn btn-day default">
                      Сб
                      <br />4 окт
                    </div>
                  </swiper-slide>
                  <div class="swiper-button-prev" slot="button-prev"></div>
                  <div class="swiper-button-next" slot="button-next"></div>
                </swiper>
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
        <modal class="modal modal-sms modalBottom modal-date" name="modalDate" width="400px" height="auto">
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
                <img src="calendarGrey.svg" alt="">
                <p>Выбрать другой день</p>
              </label>
            </div>
          </div>
          <div class="modal-bottom">
            <button class="bottom-accept" @click="$modal.hide('modalDate')">Закрыть</button>
          </div>
          <div class="modal-close" @click="$modal.hide('modalDate')"></div>
        </modal>
        <modal class="modal modal-sms modal-date modal-filter" name="modalFilter" width="400px" height="auto">
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
                <img src="calendarGrey.svg" alt="">
                <p>Выбрать другой день</p>
              </label>
            </div>
          </div>
          <div class="modal-bottom">
            <button class="bottom-accept" @click="$modal.hide('modalFilter')">Закрыть</button>
          </div>
          <div class="modal-close" @click="$modal.hide('modaFilter')"></div>
        </modal>
      </client-only>
    </div>
  </section>
</template>
<script>
import AppLogo from "~/components/AppLogo.vue";
export default {
  methods: {
    showModal() {
      this.$modal.show("modalRecord");
    },
    showSecondModal() {
      this.$modal.show("modalSms");
      this.$modal.hide("modalRecord");
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
    }
  },
  data: () => ({
    show: false,
    dynamicMask: "###.###.###/###",
    models: {
      phoneNumber: ""
    },
    swiperOption1: {
      setTranslate: 130,
      slidesPerView: "auto",
      centeredSlides: true,
      autoResize: false,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      }
    },
    swiperOption2: {
      slidesPerView: 5.3,
      slidesOffsetBefore: 25,
      slidesOffsetAfter: 25,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      },
      breakpoints: {
        1010: {
          slidesPerView: 4.3
        },
        590: {
          slidesPerView: 6
        }
      }
    },
    swiperOptionSlider: {
      slidesPerView: 7,
      slidesOffsetBefore: 25,
      slidesOffsetAfter: 25,
      spaceBetween: 45
    },
    coords: [55.778328, 37.674699],
    placemarks: [
      {
        coords: [55.782800, 37.645904],
        properties: {
          balloonContentBody: "asdfd",
          balloonContentFooter: "1",
          balloonContentHeader: "1"
        },
        clusterName: "1",
        markerId: "1"
      },
    ]
  })
};
</script>