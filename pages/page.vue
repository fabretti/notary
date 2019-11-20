<template>
  <section class="page results">
    <div class="wrap">
      <div class="search-fixed">
        <div class="search">
          <form class="search-form">
            <button class="back-btn">
              <img src="/arrowBack.svg" alt />
            </button>
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
                      <div class="card-adress">г. Москва, ул. 2-я Кабельная, д.2, стр. 14</div>
                    </div>
                  </div>
                  <div class="card-bottom">
                    <h2>Информация о нотариусе</h2>
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
              <h2>Отзывы о нотариусе</h2>
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
                <button class="review-btn">Оставить отзыв</button>
              </div>
            </div>
          </div>

          <div class="right-container">
            <div class="sticky-sign">
              <div class="sign-map">
                <img src="map.png" alt />
                <h2>Запишитесь на прием</h2>
              </div>
              <div class="card-right sign-date">
                <div class="slider-month">
                  <client-only>
                    <swiper :options="swiperOption1">
                      <swiper-slide>Сентябрь</swiper-slide>
                      <swiper-slide>Октябрь</swiper-slide>
                      <swiper-slide>Ноябрь</swiper-slide>
                      <div class="swiper-button-prev" slot="button-prev"></div>
                      <div class="swiper-button-next" slot="button-next"></div>
                    </swiper>
                  </client-only>
                </div>
                <div class="slider-days">
                  <client-only>
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
                      <swiper-slide>
                        <div class="slider-btn btn-day default">Сб, 28</div>
                      </swiper-slide>
                      <div class="swiper-button-prev" slot="button-prev"></div>
                      <div class="swiper-button-next" slot="button-next"></div>
                    </swiper>
                  </client-only>
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
          </div>
        </div>
        <div class="notarys-slider">
          <h2>Нотариусы района</h2>
          <client-only>
            <swiper :options="swiperOption3">
              <swiper-slide>
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
                    </div>
                  </div>
                </div>
              </swiper-slide>
              <swiper-slide>
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
                    </div>
                  </div>
                </div>
              </swiper-slide>
              <swiper-slide>
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
                    </div>
                  </div>
                </div>
              </swiper-slide>
              <swiper-slide>Slide 4</swiper-slide>
              <swiper-slide>Slide 5</swiper-slide>
              <swiper-slide>Slide 6</swiper-slide>
              <swiper-slide>Slide 7</swiper-slide>
              <div class="swiper-button-prev" id="sp" slot="button-prev"></div>
              <div class="swiper-button-next" id="sn" slot="button-next"></div>
            </swiper>
          </client-only>
          <!-- <div class="street-buttons">
            <div for="sp" class="street-prev">
              <img src="PolygonL.svg" alt="">
            </div>
            <div for="sn" class="street-next">
              <img src="Polygon.svg" alt="">
            </div>
          </div> -->
        </div>
        <div class="page-phone">
          <div class="page__left">
            <h1>Телефон:</h1>
            <p><img src="phone-page.svg" alt="phone">+7 999 999 99 99</p>
            <p><img src="phone-page.svg" alt="phone">+7 999 999 99 99</p>
          </div>
          <div class="page__right">
            <div class="page-arrows">
              <img src="PolygonPhone1.svg" alt="">
              <img src="PolygonPhone2.svg" alt="">
              <img src="PolygonPhone3.svg" alt="">
              <img src="PolygonPhone4.svg" alt="">
              <img src="PolygonPhone5.svg" alt="">
            </div>
            <button class="page-phone__btn">Записаться онлайн</button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  data: () => ({
    show: false,
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
      slidesPerView: 5,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      }
    },
    swiperOption3: {
      slidesPerView: 3,
      spaceBetween: 30,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      }
    }
  })
};
</script>