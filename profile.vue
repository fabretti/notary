<template>
  <div class="content profile">
    <h1>Мой профиль</h1>
    <div class="profile-row row">
      <div class="profile__left">
        <div class="profile__img" :style="imageUrl">
          <imageLoader v-model="profile.mainImage" @input="updateProfileData"/>
        </div>
        <div class="profile__social">
          <ul class="social__list">
            <li class="social__list-item">
              <div class="social__list-item-content">
                <div class="social-icon icon-vk"></div>
                <input type="text" v-model="profile.snVK" v-if="profile.snVK == null">
                <a v-else target="_blank" :href="profile.snVKSrc">{{profile.snVK}}</a>
              </div>
                <button 
                  v-if="profile.snVK !== null" 
                  class="social-btn active" 
                  @click="$set(profile, 'snVK', null); updateProfileData()"
                >Отвязать</button>
                <button v-else class="social-btn" @click="updateProfileData">Привязать</button>
            </li>
            <li class="social__list-item">
              <div class="social__list-item-content">
                <div class="social-icon icon-fb"></div>
                <input type="text" v-model="profile.snFacebook" v-if="profile.snFacebook == null">
                <a v-else target="_blank" :href="profile.snFacebookSrc">{{profile.snFacebook}}</a>
              </div>
                <button 
                  v-if="profile.snFacebook !== null" 
                  class="social-btn active" 
                  @click="$set(profile, 'snFacebook', null); updateProfileData()"
                >Отвязать</button>
                <button v-else class="social-btn" @click="updateProfileData">Привязать</button>
            </li>
            <li class="social__list-item">
              <div class="social__list-item-content">
                <div class="social-icon icon-inst"></div>
                <input type="text" v-model="profile.snInstagram" v-if="profile.snInstagram == null">
                <a v-else target="_blank" :href="profile.snInstagramSrc">{{profile.snInstagram}}</a>
              </div>
                <button 
                  v-if="profile.snInstagram !== null" 
                  class="social-btn active" 
                  @click="$set(profile, 'snInstagram', null); updateProfileData()"
                >Отвязать</button>
                <button v-else class="social-btn" @click="updateProfileData">Привязать</button>
            </li>
            <li class="social__list-item">
              <div class="social__list-item-content">
                <div class="social-icon icon-yt"></div>
                <input type="text" v-model="profile.snYoutube" v-if="profile.snYoutube == null">
                <a v-else target="_blank" :href="profile.snYoutubeSrc">{{profile.snYoutube}}</a>
              </div>
                <button 
                  v-if="profile.snYoutube !== null" 
                  class="social-btn active" 
                  @click="$set(profile, 'snYoutube', null); updateProfileData()"
                >Отвязать</button>
                <button v-else class="social-btn" @click="updateProfileData">Привязать</button>
            </li>
          </ul>
        </div>
      </div>
      <div class="profile__form">
        <div class="profile__form-left">
          <form action="">
            <div class="form__box">
              <label for="name">Имя</label>
              <input type="text" name="name" v-model="profile.firstName">
            </div>
            <div class="form__box">
              <label for="surname">Фамилия</label>
              <input type="text" name="surname" v-model="profile.lastName">
            </div>
            <div class="form__box">
              <label for="aboutMe">Увлечения</label>
              <input type="text" name="aboutMe" v-model="profile.aboutMe">
            </div>
            <div class="form__box">
              <label for="birthDate">Дата рождения</label>
              <input type="date" name="birthDate" v-model="profile.birthDate">
            </div>
          </form>
        </div>
        <div class="profile__form-right">
          <form>
            <div class="form__box">
              <label for="statusString">Статус</label>
              <input type="text" name="statusString" v-model="profile.statusString">
            </div>
            <div class="form__box">
              <label for="working">Сфера деятельности</label>
              <input type="text" name="working" v-model="profile.fieldOfActivity">
            </div>
            <div class="form__box">
              <label for="country">Страна</label>
              <select name="country" v-model="profile.country">
                <option disabled value="">Выберите страну проживания</option>
                <option value="Россия">Россия</option>
                <option value="Украина">Украина</option>
                <option value="Беларусь">Беларусь</option>
              </select>
            </div>
            <div class="form__box">
              <label for="city">Город</label>
              <select 
                name="city" 
                v-model="profile.city"
              >
                <option disabled value="">Выберите город проживания</option>
                <option value="Москва">Москва</option>
                <option value="Киев">Киев</option>
                <option value="Минск">Минск</option>
              </select>
            </div>
          </form>
        </div>
        <button 
          type="button" 
          class="save-btn"
          @click="updateProfileData"
        >Сохранить</button>
      </div>
    </div>
  </div>
</template>
<script>
import imageLoader from '~/components/imageLoader'
export default {
  components: {
    imageLoader
  },
  data: () =>({
    imageUrl: ''
  }),
  computed: {
    profile() {
      return {...this.$store.getters['currentCustomer/profile']}
    }
  },
  watch: {
    profile() {
      this.imageUrl = this.getImageUrl()
    }
  },
  mounted() {
    this.imageUrl = this.getImageUrl()
  },
  methods: {
    getImageUrl() {
      let profile = this.profile,
          profileImage = profile.mainImage

      if(!profileImage) {
        return ''
      }
      return `background-image: url(${process.env.apiUrl}files/${profileImage})`
    },
    async updateProfileData() {
      await this.$store.dispatch('currentCustomer/updateProfileData', this.profile)
      this.imageUrl = this.getImageUrl()
    }
  },
}
</script>
 <style >
    main .profile .profile__left .social__list-item .social-btn {
      line-height: 38px;
      position: relative;
      z-index: 3;
    }
    main .profile .profile__left .social__list-item .social__list-item-content .social-icon {
      padding-right: 0;
    }
    main .profile .profile__left .social__list-item .social__list-item-content {
      justify-content: flex-start;
      position: relative;
      z-index: 2;
    }
    .social__list-item-content a {
      width: calc(100% - 34px);
    }
    main .profile .profile__left .social__list-item .social__list-item-content input {
      width: calc(100% - 34px);
    }
    main .profile .profile__left .social__list-item {
      overflow: hidden;
    }
    @media (max-width: 1200px) {
      main .profile .profile__left .profile__img {
        width: 290px;
        height: 290px;
      }
      main .profile .profile__left .profile__img .details .button {
        margin-top: 200px;
        height: 50px;
        line-height: 50px;
      }
    }
    @media (max-width: 720px) {
      .social__list-item-content a {
        position: absolute;
        z-index: 1;
        left: 34px;
      }
      header, main {
        width: 100vw;
      }
      main .profile .profile__left .social__list-item .social-btn {
        width: 90px;
      }
      main .profile .profile__form .save-btn {
        margin: 0px auto;
        height: 50px;
        line-height: 50px;
      }
      main .profile .profile__left .profile__social {
        padding: 0px 10px;
        overflow: hidden;
      }
      main .profile .profile__form {
        margin: 10px
      }
    }
    .fas {
      font-size: 25px;
      font-weight: 600
    }


      
 </style>