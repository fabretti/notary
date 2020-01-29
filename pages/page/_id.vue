<template>
  <section class="page results">
    <div class="wrap">
      <div class="search-fixed">
        <div class="search">
          <form class="search-form">
            <div class="search-formDate">
              <nuxt-link to="/results" class="back-btn">
                <img src="/arrowBack.svg" alt />
              </nuxt-link>
              <input id="srch" placeholder="Имя нотариуса, метро, город МО" />
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
                        <star :rating="profile.rating" />
                        <div class="rev">
                          <a href="#">{{ profile.voteQuantity }} отзывов</a>
                        </div>
                      </div>
                      <div class="card-name-mb card-center ">
                        <div class="card-spec">{{ profile.typeOfWork }}</div>
                        <div class="card-name">
                          <a href="#">{{ company.title }}</a>
                        </div>
                        <div class="card-year">{{ profile.workExperience }}</div>
                      </div>
                    </div>
                    <div class="card-center">
                      <div class="card-nameTitle">
                        <div class="card-spec">{{ profile.typeOfWork }}</div>
                        <div class="card-name">
                          <a href="#">{{ company.title }}</a>
                        </div>
                        <div class="card-year">{{ profile.workExperience }}</div>
                      </div>
                      <ul class="card-subway">
                        <li class="subway-item">
                          <span class="subway-color"></span>{{ profile.districtTitle }}
                          <div class="subway-step">
                            <img src="/footstep.svg" /> {{ company.districtDistance }} м
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
                      <div class="card-adress">{{ profile.address }}</div>
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
                            <span>Вид деятельности: </span>{{ profile.typeOfWork }}
                          </p>
                        </li>
                        <li>
                          <p>
                            <span>Нотариальный округ: </span>{{ profile.notarialArea}}
                          </p>
                        </li>
                        <li>
                          <p>
                            <span>Субъект РФ: </span>{{ profile.subjectTitle }}
                          </p>
                        </li>
                        <li>
                          <p>
                            <span>Палата: </span>{{ profile.notarialChamber }}
                          </p>
                        </li>
                        <li>
                          <p>
                            <span>Текущий статус: </span>{{ profile.statusString }}
                          </p>
                        </li>
                        <li>
                          <p>
                            <span>Приказ: </span>{{ profile.orderNumber }}
                          </p>
                        </li>
                        <li>
                          <p>
                            <span>Лицензия: </span>{{ profile.licenseNumber }}
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
                  <a @click="activetab=1" :class="[ activetab === 1 ? 'active' : '' ]">Отзывы</a>
                  <a @click="activetab=2" :class="[ activetab === 2 ? 'active' : '' ]">О нотариусе</a>
              </div>
              <div class="content">
                  <div v-if="activetab === 1" class="tabcontent">
                      <div class="reviews-list">
                        <div 
                          v-for="(rating, index) in ratings"
                          :key="index"
                          class="review-item"
                          >
                          <div class="review-stars">
                            <star :rating="rating.value" />
                          </div>
                          <div class="review-text">
                            {{ rating.description }}
                          </div>
                          <div class="review-name">{{ rating.customerFullName }}, {{ rating.createdAt | calendarFormat }}</div>
                        </div>
                      </div>
                      <div class="reviews-btn">
                        <button class="show-btn">Показать еще 5 отзывов</button>
                        <button 
                          class="review-btn" 
                          :disabled="disabledReview"
                          @click="showReviewModal"
                        >Оставить отзыв</button>
                      </div>
                  </div>
                  <div v-if="activetab === 2" class="tabcontent">
                    <div class="notary-card result-card">
                      <div class="info-notary">
                        <ul>
                          <li>
                            <p>
                              <span>Вид деятельности: </span>{{ profile.typeOfWork }}
                            </p>
                          </li>
                          <li>
                            <p>
                              <span>Нотариальный округ: </span>{{ profile.notarialArea}}
                            </p>
                          </li>
                          <li>
                            <p>
                              <span>Субъект РФ: </span>{{ profile.subjectTitle }}
                            </p>
                          </li>
                          <li>
                            <p>
                              <span>Палата: </span>{{ profile.notarialChamber }}
                            </p>
                          </li>
                          <li>
                            <p>
                              <span>Текущий статус: </span>{{ profile.statusString }}
                            </p>
                          </li>
                          <li>
                            <p>
                              <span>Приказ:</span>{{ profile.orderNumber }}
                            </p>
                          </li>
                          <li>
                            <p>
                              <span>Лицензия:</span>{{ profile.licenseNumber }}
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
                            <star :rating="company.rating" />
                            <div class="rev">
                              <a href="#">{{ profile.voteQuantity }} отзывов</a>
                            </div>
                          </div>
                        </div>
                        <div class="card-center">
                          <div class="card-name">
                            <a href="page">{{ company.title }}</a>
                          </div>
                          <div class="card-rev">
                            <star :rating="company.rating" />
                            <div class="rev">
                              <a href="#">{{ profile.voteQuantity }} отзывов</a>
                            </div>
                          </div>
                          <ul class="card-subway">
                            <li class="subway-item">
                              <span class="subway-color"></span>{{ profile.districtTitle }}
                              <div class="subway-step">
                                <img src="/footstep.svg" />{{ company.districtDistance }}
                              </div>
                            </li>
                          </ul>
                          <div class="card-adress">{{ profile.address }}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="modal-center">
                    <div class="review-act">
                      <h2>Оцените качество работы</h2>
                      <fieldset>
                        <input 
                          type="radio" 
                          id="star5" 
                          name="rating" 
                          :value="5"
                          v-model="rating"
                        />
                        <label for="star5" title="Outstanding"></label>
                        <input 
                          type="radio" 
                          id="star4" 
                          name="rating" 
                          :value="4"
                          v-model="rating"
                        />
                        <label for="star4" title="Very Good"></label>
                        <input 
                          type="radio" 
                          id="star3" 
                          name="rating" 
                          :value="3"
                          v-model="rating"
                        />
                        <label for="star3" title="Good"></label>
                        <input 
                          type="radio" 
                          id="star2" 
                          name="rating" 
                          :value="2"
                          v-model="rating"
                        />
                        <label for="star2" title="Poor"></label>
                        <input 
                          type="radio" 
                          id="star1" 
                          name="rating" 
                          :value="1"
                          v-model="rating"
                        />
                        <label for="star1" title="Very Poor"></label>
                      </fieldset>
                    </div>
                    <div class="review-comment">
                      <h2>Напишите комментарий</h2>
                      <textarea 
                        v-model="description"
                        name="comment"
                        placeholder="Введите комментарий... "
                      >
                      </textarea>
                    </div>
                  </div>
                  <div class="modal-bottom">
                    <button 
                      @click="sendReview()"
                      class="modal-sign"
                    >Оставить отзыв</button>
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
              <slide v-for="(company, index) in companies" :key="index">
                <div class="notarys">
                  <div class="notary-list">
                    <div class="notary-card other-card">
                      <div class="card-left">
                        <div class="card-avatar">
                          <img class="notary-avatar" src="/ava.jpg" alt />
                          <star :rating="company.rating" />
                          <div class="rev">
                            <a href="#">{{ company.voteQuantity }} отзывов</a>
                          </div>
                        </div>
                        <div class="card-center">
                          <div class="card-spec">Нотариус</div>
                          <div class="card-name">
                            <nuxt-link :to="'/page/' + company.id">{{ company.title }}</nuxt-link>
                          </div>
                          <div class="card-year">{{ company.workExperience }}</div>
                          <ul class="card-subway">
                            <li class="subway-item">
                              <span class="subway-color"></span>{{ company.districtTitle }}
                              <div class="subway-step">
                                <img src="/footstep.svg" /> {{ company.districtDistance }}
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div class="card-bottom-mb">
                        <ul class="card-subway">
                          <li class="subway-item">
                            <span class="subway-color"></span>{{ profile.districtTitle }}
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </slide>
            </carousel>
          </client-only>
        </div>
        <div class="page-phone">
          <div class="page__left">
            <h1>Телефоны:</h1>
            <div class="page__left-num">
              <p>
                <img src="/phone-page.svg" alt="phone" />+7 999 999 99 99
              </p>
              <p>
                <img src="/phone-page.svg" alt="phone" />+7 999 999 99 99
              </p>
            </div>
          </div>
          <div class="page__right">
            <div class="page-arrows">
              <img src="/PolygonPhone1.svg" alt />
              <img src="/PolygonPhone2.svg" alt />
              <img src="/PolygonPhone3.svg" alt />
              <img src="/PolygonPhone4.svg" alt />
              <img src="/PolygonPhone5.svg" alt />
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
import star from "~/components/star";
export default {
  components: {
    CustomSelect,
    star,
  },
  data: () => ({
    show: false,
    activetab: 1,
    rating: 0,
    description: '',
  }),
  computed: {
    company() {
      return this.$store.getters["companies/getItem"];
    },
    profile() {
      return this.company.profile || {}
    },
    ratings() {
      return this.company.ratings || []
    },
    disabledReview() {
      return Boolean(this.company.hasReview) || !this.$store.getters['auth/isAuth']
    },
    companies() {
      return this.$store.getters["companies/getList"];
    },
  },
  created() {
    let id = this.$route.params.id
    this.loadCompany(id)
  },
  watch: {
    company() {
      this.loadCompanies()
    }
  },
  methods: {
    showReviewModal() {
      this.$modal.show("modalReview")
    },
    loadCompany(id) {
      this.$store.dispatch("companies/loadItem", id);
    },
    async sendReview() {
      if (this.disabledReview) {
        return
      }

      let data = {
        id: this.$route.params.id, 
        rating: this.rating,
        description: this.description,
      }

      await this.$store.dispatch('companies/sendReview', data)
      this.$modal.hide("modalReview")
    },
    loadCompanies() {
      let districtId = this.company.districtId
      this.$store.dispatch("companies/loadList", {districtId});
    },
  },
};
</script>