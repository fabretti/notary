<template>
  <section class="results">
    <div class="wrap">
      <div class="results__section search-fixed">
        <div class="search">
          <div class="search-title">Нотариусы на метро Бульвар Адмирала Ушакова</div>
          <form class="search-form">
            <input id="srch" placeholder="Имя нотариуса, метро, город МО" />
            <div class="search-date">
              Вт, 24 сентября
              <i></i>
              <div class="date-dropdown">
                <ul>
                  <li>Сегодня</li>
                  <li>Завтра, 26 сен</li>
                  <li>Пятница, 27 сен</li>
                </ul>
              </div>
            </div>
            <button class="search-btn">Найти</button>
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
        <div class="pagination"></div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  data: () => ({
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
      slidesPerView: "auto",
      slidesPerView: 5.3,
      slidesOffsetBefore: 25,
      slidesOffsetAfter: 25,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      }
    }
  })
};
</script>