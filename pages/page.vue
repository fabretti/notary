<template>
  <section class="page results">
    <div class="wrap">
      <div class="search-fixed">
        <div class="search">
          <form class="search-form">
            <div class="search-formDate">
              <a href="results" class="back-btn">
                <img src="/arrowBack.svg" alt />
              </a>
              <input id="srch" placeholder="Имя нотариуса, метро, город МО" />
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
              </div> -->
              <CustomSelect :options="['Вт, 24 сентября', 'Сегодня', 'Завтра, 26 сен', 'Пятница, 27 сен']" />
            </div>
            <button class="search-btn">Найти</button>
          </form>
        </div>
      </div>
      <div class="container">
        <div class="center-container">
          <div class="left-container">
            <div class="notarys">
              <div class="notary-list">
                <div class="notary-card result-card">
                  <div class="card-left">
                    <div class="card-left-mb">
                      <div class="card-avatar">
                        <img class="notary-avatar" src="/ava.jpg" alt />
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
                      <div class="card-name-mb card-center ">
                        <div class="card-spec">Нотариус</div>
                        <div class="card-name">
                          <a href="#">Ложкин Валерий Александрович</a>
                        </div>
                        <div class="card-year">Стаж 8 лет</div>
                      </div>
                    </div>
                    <div class="card-center">
                      <div class="card-nameTitle">
                        <div class="card-spec">Нотариус</div>
                        <div class="card-name">
                          <a href="#">Ложкин Валерий Александрович</a>
                        </div>
                        <div class="card-year">Стаж 8 лет</div>
                      </div>
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
                      <div class="showMap">
                        <p>Как добраться?</p>
                      </div>
                    </div>
                  </div>
                  <div class="card-center-mb">
                    <div class="sign-map">
                      <h2>Запишитесь на прием</h2>
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
                            <div>24 октября</div>
                          </slide>
                          <slide>
                            <div>25 октября</div>
                          </slide>
                          <slide>
                            <div>26 октября</div>
                          </slide>
                        </carousel>
                      </div>
                      <div class="slider-days">
                        <carousel
                          :paginationEnabled="false"
                          :navigationEnabled="true"
                          :perPageCustom="[[320, 4], [520, 6], [620, 8], [750, 10]]"
                          navigationNextLabel="<i class='material-icons'><img src='/Polygon.svg'></i>"
                          navigationPrevLabel="<i class='material-icons'><img src='/PolygonL.svg'></i>"
                        >
                          <slide>
                            <div class="slider-btn btn-time active">16:00</div>
                          </slide>
                          <slide>
                            <div class="slider-btn btn-time disabled">16:30</div>
                          </slide>
                          <slide>
                            <div class="slider-btn btn-day default">17:00</div>
                          </slide>
                          <slide>
                            <div class="slider-btn btn-time default">17:30</div>
                          </slide>
                          <slide>
                            <div class="slider-btn btn-time default">18:00</div>
                          </slide>
                          <slide>
                            <div class="slider-btn btn-time default">18:30</div>
                          </slide>
                          <slide>
                            <div class="slider-btn btn-time default">19:00</div>
                          </slide>
                          <slide>
                            <div class="slider-btn btn-time default">18:00</div>
                          </slide>
                          <slide>
                            <div class="slider-btn btn-time default">18:30</div>
                          </slide>
                          <slide>
                            <div class="slider-btn btn-time default">19:00</div>
                          </slide>
                          <slide>
                            <div class="slider-btn btn-time default">18:00</div>
                          </slide>
                          <slide>
                            <div class="slider-btn btn-time default">18:30</div>
                          </slide>
                          <slide>
                            <div class="slider-btn btn-time default">19:00</div>
                          </slide>
                        </carousel>
                      </div>
                    </div>
                  </div>
                  <div class="card-bottom">
                    <div class="title-page">
                      <h2>Информация о нотариусе</h2>
                    </div>
                    <div class="info-notary">
                      <ul>
                        <li>
                          <p>
                            <span>Вид деятельности:</span> Нотариус, занимающийся частной практикой
                          </p>
                        </li>
                        <li>
                          <p>
                            <span>Нотариальный округ:</span> Московский городской нотариальный округ
                          </p>
                        </li>
                        <li>
                          <p>
                            <span>Субъект РФ:</span> г. Москва
                          </p>
                        </li>
                        <li>
                          <p>
                            <span>Палата:</span> Московская городская нотариальная палата (ID 2200510)
                          </p>
                        </li>
                        <li>
                          <p>
                            <span>Текущий статус:</span> Действующий
                          </p>
                        </li>
                        <li>
                          <p>
                            <span>Приказ:</span> 352-ч ст 05.10.1998
                          </p>
                        </li>
                        <li>
                          <p>
                            <span>Лицензия:</span> с 1995 года
                          </p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="page-reviews">
              <div class="title-page">
                <h2>Отзывы о нотариусе</h2>
              </div>
              <div class="tabs">
                  <a v-on:click="activetab=1" v-bind:class="[ activetab === 1 ? 'active' : '' ]">Отзывы</a>
                  <a v-on:click="activetab=2" v-bind:class="[ activetab === 2 ? 'active' : '' ]">О нотариусе</a>
              </div>
              <div class="content">
                  <div v-if="activetab === 1" class="tabcontent">
                      <div class="reviews-list">
                        <div class="review-item">
                          <div class="review-stars">
                            <div class="review-star">
                              <img src="/starO.svg" alt />
                            </div>
                            <div class="review-star">
                              <img src="/starO.svg" alt />
                            </div>
                            <div class="review-star">
                              <img src="/starO.svg" alt />
                            </div>
                            <div class="review-star">
                              <img src="/starD.svg" alt />
                            </div>
                            <div class="review-star">
                              <img src="/starD.svg" alt />
                            </div>
                            <p>Отлично</p>
                          </div>
                          <div class="review-text">
                            Lorem ipsum dolor sit, amet consectetur
                            adipisicing elit. Illo tempora dolor
                            magni veniam iste suscipit dolorem quasi
                            ad non officiis.
                          </div>
                          <div class="review-name">Кристина, 12 октября 2019</div>
                        </div>
                        <div class="review-item">
                          <div class="review-stars">
                            <div class="review-star">
                              <img src="/starO.svg" alt />
                            </div>
                            <div class="review-star">
                              <img src="/starO.svg" alt />
                            </div>
                            <div class="review-star">
                              <img src="/starO.svg" alt />
                            </div>
                            <div class="review-star">
                              <img src="/starD.svg" alt />
                            </div>
                            <div class="review-star">
                              <img src="/starD.svg" alt />
                            </div>
                            <p>Отлично</p>
                          </div>
                          <div class="review-text">
                            Lorem ipsum dolor sit, amet consectetur
                            adipisicing elit. Illo tempora dolor
                            magni veniam iste suscipit dolorem quasi
                            ad non officiis.
                          </div>
                          <div class="review-name">Кристина, 12 октября 2019</div>
                        </div>
                      </div>
                      <div class="reviews-btn">
                        <button class="show-btn">Показать еще 5 отзывов</button>
                        <button class="review-btn" @click="showReviewModal">Оставить отзыв</button>
                      </div>
                  </div>
                  <div v-if="activetab === 2" class="tabcontent">
                    <div class="notary-card result-card">
                      <div class="info-notary">
                        <ul>
                          <li>
                            <p>
                              <span>Вид деятельности:</span> Нотариус, занимающийся частной практикой
                            </p>
                          </li>
                          <li>
                            <p>
                              <span>Нотариальный округ:</span> Московский городской нотариальный округ
                            </p>
                          </li>
                          <li>
                            <p>
                              <span>Субъект РФ:</span> г. Москва
                            </p>
                          </li>
                          <li>
                            <p>
                              <span>Палата:</span> Московская городская нотариальная палата (ID 2200510)
                            </p>
                          </li>
                          <li>
                            <p>
                              <span>Текущий статус:</span> Действующий
                            </p>
                          </li>
                          <li>
                            <p>
                              <span>Приказ:</span> 352-ч ст 05.10.1998
                            </p>
                          </li>
                          <li>
                            <p>
                              <span>Лицензия:</span> с 1995 года
                            </p>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
              </div>
              <client-only>
                <modal class="modal modal-review" name="modalReview" height="auto">
                  <div class="modal-header">
                    <h1>Оставить отзыв</h1>
                  </div>
                  <div class="modal-body notary-list">
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
                          <div class="card-name">
                            <a href="page">Ложкин Валерий Александрович</a>
                          </div>
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
                  </div>
                  <div class="modal-center">
                    <div class="review-act">
                      <h2>Оцените качество работы</h2>
                      <fieldset>
                        <input type="radio" id="star5" name="rating" value="5" /><label for="star5" title="Outstanding">5 stars</label>
                        <input type="radio" id="star4" name="rating" value="4" /><label for="star4" title="Very Good">4 stars</label>
                        <input type="radio" id="star3" name="rating" value="3" /><label for="star3" title="Good">3 stars</label>
                        <input type="radio" id="star2" name="rating" value="2" /><label for="star2" title="Poor">2 stars</label>
                        <input type="radio" id="star1" name="rating" value="1" /><label for="star1" title="Very Poor">1 star</label>
                      </fieldset>
                    </div>
                    <div class="review-comment">
                      <h2>Напишите комментарий</h2>
                      <textarea name="comment" placeholder="Введите комментарий... "></textarea>
                    </div>
                  </div>
                  <div class="modal-bottom">
                    <button class="modal-sign">Оставить отзыв</button>
                  </div>
                  <div class="modal-close" @click="$modal.hide('modalReview')"></div>
                </modal>
              </client-only>
            </div>
          </div>

          <div class="right-container">
            <div class="sticky-sign">
              <div class="sign-map">
                <img src="/map.png" alt />
                <h2>Запишитесь на прием</h2>
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
                    :perPageCustom="[[400, 5], [500, 6], [590, 4], [1048, 5]]"
                    navigationNextLabel="<i class='material-icons'><img src='/Polygon.svg'></i>"
                    navigationPrevLabel="<i class='material-icons'><img src='/PolygonL.svg'></i>"
                  >
                    <slide>
                      <div class="slider-btn btn-day active">Вт, 24</div>
                    </slide>
                    <slide>
                      <div class="slider-btn btn-day disabled">Вт, 24</div>
                    </slide>
                    <slide>
                      <div class="slider-btn btn-day default">Вт, 24</div>
                    </slide>
                    <slide>
                      <div class="slider-btn btn-day default">Вт, 24</div>
                    </slide>
                    <slide>
                      <div class="slider-btn btn-day default">Вт, 24</div>
                    </slide>
                    <slide>
                      <div class="slider-btn btn-day default">Вт, 24</div>
                    </slide>
                    <slide>
                      <div class="slider-btn btn-day default">Вт, 24</div>
                    </slide>
                  </carousel>
                </div>
                <div class="fix__time">
                  <ul>
                    <li>
                      <div class="fix__time-btn">15:30</div>
                    </li>
                    <li>
                      <div class="fix__time-btn">16:30</div>
                    </li>
                    <li>
                      <div class="fix__time-btn none">—</div>
                    </li>
                    <li>
                      <div class="fix__time-btn none">—</div>
                    </li>
                    <li>
                      <div class="fix__time-btn">17:30</div>
                    </li>
                    <li>
                      <div class="fix__time-btn">18:30</div>
                    </li>
                    <li>
                      <div class="fix__time-btn">19:30</div>
                    </li>
                    <li>
                      <div class="fix__time-btn">20:30</div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="notarys-slider">
          <div class="title-page">
            <h2>Нотариусы района</h2>
          </div>
          <client-only>
            <carousel
              :paginationEnabled="false"
              :navigationEnabled="true"
              :perPageCustom="[[0, 1], [890, 2], [1120, 3]]"
              navigationNextLabel="<i class='material-icons'><img src='/Polygon.svg'></i>"
              navigationPrevLabel="<i class='material-icons'><img src='/PolygonL.svg'></i>"
            >
              <slide>
                <div class="notarys">
                  <div class="notary-list">
                    <div class="notary-card other-card">
                      <div class="card-left">
                        <div class="card-avatar">
                          <img class="notary-avatar" src="/ava.jpg" alt />
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
                        <div class="card-center">
                          <div class="card-spec">Нотариус</div>
                          <div class="card-name">
                            <a href="#">Ложкин Валерий Александрович</a>
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
                        </div>
                      </div>
                      <div class="card-bottom-mb">
                        <ul class="card-subway">
                          <li class="subway-item">
                            <span class="subway-color"></span>Авиамоторная
                          </li>
                          <li class="subway-item">
                            <span class="subway-color"></span>Парк победы
                          </li>
                          <li class="subway-item">
                            <span class="subway-color"></span>Павелецкая
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </slide>
              <slide>
                <div class="notarys">
                  <div class="notary-list">
                    <div class="notary-card other-card">
                      <div class="card-left">
                        <div class="card-avatar">
                          <img class="notary-avatar" src="/ava.jpg" alt />
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
                            <a href="#">Ложкин Валерий Александрович</a>
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
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </slide>
              <slide>
                <div class="notarys">
                  <div class="notary-list">
                    <div class="notary-card other-card">
                      <div class="card-left">
                        <div class="card-avatar">
                          <img class="notary-avatar" src="/ava.jpg" alt />
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
                            <a href="#">Ложкин Валерий Александрович</a>
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
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </slide>
              <slide>
                <div class="notarys">
                  <div class="notary-list">
                    <div class="notary-card other-card">
                      <div class="card-left">
                        <div class="card-avatar">
                          <img class="notary-avatar" src="/ava.jpg" alt />
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
                            <a href="#">Ложкин Валерий Александрович</a>
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
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </slide>
              <slide>Slide 5</slide>
              <slide>Slide 6</slide>
              <slide>Slide 7</slide>
            </carousel>
          </client-only>
          <!-- <div class="street-buttons">
            <div for="sp" class="street-prev">
              <img src="PolygonL.svg" alt="">
            </div>
            <div for="sn" class="street-next">
              <img src="Polygon.svg" alt="">
            </div>
          </div>-->
        </div>
        <div class="page-phone">
          <div class="page__left">
            <h1>Телефоны:</h1>
            <div class="page__left-num">
              <p>
                <img src="phone-page.svg" alt="phone" />+7 999 999 99 99
              </p>
              <p>
                <img src="phone-page.svg" alt="phone" />+7 999 999 99 99
              </p>
            </div>
          </div>
          <div class="page__right">
            <div class="page-arrows">
              <img src="PolygonPhone1.svg" alt />
              <img src="PolygonPhone2.svg" alt />
              <img src="PolygonPhone3.svg" alt />
              <img src="PolygonPhone4.svg" alt />
              <img src="PolygonPhone5.svg" alt />
            </div>
            <button class="page-phone__btn">Записаться онлайн</button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import CustomSelect from "~/components/CustomSelect.vue";
export default {
  components: {
    CustomSelect,
  },
  methods: {
    showReviewModal() {
      this.$modal.show("modalReview")
    },
  },
  data: () => ({
    show: false,
    activetab: 1,
  })
};
</script>