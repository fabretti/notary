<template>
  <div class="app_container">
    <header>
      <div class="black-list" :class="{'active': sidebarShow}" @click="sidebarShow = !sidebarShow"></div>
      <nav class="navbar">
        <div class="container-fluid pr-0 pl-0">
          <div class="navbar_submenu" @click="sidebarShow = !sidebarShow"></div>
          <div class="navbar_left">
            <span class="navbar_chat-back"></span>
            <nuxt-link to="/referal" class="navbar_left-friend">Пригласить друга</nuxt-link>
            <p>{{isMobile ? '' :  'Баланс: '}}<span>{{balance | humanFriendlyNumber}} ₽</span></p>
            <button to="#" class="navbar_left-refill" @click="handlePayment"> {{isMobile ? '' :  'Пополнить счет '}}<span>+₽</span></button>
            <nuxt-link to="request" class="navbar_left-req">Сознательный запрос</nuxt-link>
          </div>
          <ul class="navbar_right navbar-nav flex-row">
            <li class="nav-item">
              <!-- <nuxt-link to="#">
                <img class="block-notification" src="/alarm.svg" alt="">
                <span class="notification">3</span>
              </nuxt-link> -->
            </li>
            <li class="nav-item">
              <div
                class="profile nav_profile"
                @click="profileDropdownShow = !profileDropdownShow"
                >
                <img class="rounded-circle" :src="getImageUrl(mainImage)" alt="" width="60" height="60">
                <span>{{fullName}}</span>
              </div>
              <ul 
                class="dropdown-menu dropdown-profile"
                :class="{'show': profileDropdownShow}"
              >
                <li 
                  class="dropdown-item"
                  v-for="(item, index) in profileMenu"
                  :key="index"
                >
                  <nuxt-link 
                    :to="item.href"
                  >{{item.title}}</nuxt-link>
                </li>
                <li 
                  class="dropdown-item"
                  style="cursor: pointer;"
                  @click="logout"
                  ><p>Выход</p></li>
              </ul>
            </li>
          </ul>
        </div>
      </nav>
    </header>
    <aside :class="{'active': sidebarShow}">
      <div class="sidebar">
        <div class="sidebar_close" @click="sidebarShow = !sidebarShow" id="sidebar_close"><i class="fas fa-times"></i></div>
        <div class="logo"><nuxt-link to="/"><img src="/Logo.svg" alt=""></nuxt-link></div>
        <div class="sidebar__header">
          <p>Баланс: <span>{{balance | humanFriendlyNumber}} ₽</span></p>
          <div class="sidebar__header-btn">
            <button to="#" class="sidebar__header-refill" @click="handlePayment">Пополнить счет <span>+₽</span></button>
            <nuxt-link to="referal" class="sidebar__header-friend"></nuxt-link>
          </div>
        </div>
        <ul class="nav">
          <li 
            class="nav-item"
            v-for="(item, index) in mainMenu" :key="index"
            :class="{'active' : item.active}"
          >
            <nuxt-link v-if="!item.disabled" :to="item.href">{{item.title}}</nuxt-link>
            <nuxt-link v-else to="" class="disabled">{{item.title}}</nuxt-link>
          </li>
        </ul>
        <nuxt-link to="/request" class="navbar_left-req">Сознательный запрос</nuxt-link>
      </div>
      <div class="video_wrapper">
        <video src="/123.mp4" controls></video>
      </div>
    </aside>
    <main>
      <nuxt/>
    </main>
  </div>
</template>

<script>
export default {
  data: () => ({
    profileDropdownShow: false,
    sidebarShow: false,
    mainMenu: [
      {
        href: '/events',
        title: 'Мои события',
        active: false,
        disabled: false,
      },
      {
        href: '/schedule',
        title: 'Расписание событий',
        active: false,
        disabled: false,
      },
      {
        href: '/myMaterials',
        title: 'Мои материалы',
        active: false,
      },
      {
        href: '/materials',
        title: 'Материалы',
        active: false,
      },
      {
        href: '/chat',
        title: 'Чаты',
        active: false,
        disabled: true,
      },
      {
        href: '/partners',
        title: 'Партнеры',
        active: false,
      },
    ],
    profileMenu: [
      {
        title: 'Мой профиль',
        href: '/profile'
      },
      {
        title: 'Список рефералов',
        href: '/referal'
      },
      {
        title: 'Подписки',
        href: '/subPtion'
      },
      {
        title: 'Подписчики',
        href: '/subBers'
      },
      {
        title: 'Конфиденциальность',
        href: '/confid'
      },
      {
        title: 'Настройки',
        href: '/settings'
      },
    ],
    
  }),
  computed: {
    fullName() {
      return this.$store.getters['currentCustomer/fullName']
    },
    balance() {
      return this.$store.getters['currentCustomer/balance']
    },
    mainImage() {
      return this.$store.getters['currentCustomer/mainImage']
    },
    isMobile: {
      get: function() {
        return this.$store.getters['app/isMobile']
      },
      set: function(value) {
        this.$store.commit('app/setIsMobile', value)
      },
    },
  },
  created() {
    this.$store.dispatch('currentCustomer/loadData')
    this.activeMenuItem()
  },
  mounted() {
    this.resize()
    window.addEventListener('resize', this.resize)
  },
  watch: {
    '$route.path'() {
      this.sidebarShow = false
      this.profileDropdownShow = false
      this.activeMenuItem()
    },
  },
  methods: {
    getImageUrl(src) {
      if(!src) {
        return '/profile.jpg'
      }
      return `${process.env.apiUrl}files/${src}`
    },
    logout() {
      this.$store.dispatch('auth/logout');
    },
    async handlePayment() {

      let amount = prompt('Введите сумму, на которую желаете пополнить счёт')
      if(amount === null) {
        return
      }
      if(amount == 0) {
        alert('Введите корректную сумму')
        return
      }
      await this.$store.dispatch('payments/create', {amount})
    },
    resize() {
      let mobile = process.browser ? window.innerWidth <= 960 : false
      if(this.isMobile !== mobile) {
        this.isMobile = mobile
      }
    },
    activeMenuItem() {
      this.mainMenu = this.mainMenu.map( i => {
        i.active = (i.href === this.$route.path)
        return i
      })
    }
    
  },
  filters: {
    humanFriendlyNumber(n, numberSymbolsAfterComma = 0) {
      if (Number.isNaN(Number(n))) {
        return '-';
      }
      let [div, mod] = Number(n).toFixed(numberSymbolsAfterComma).toString().split('.', 2);
      if (!div && !mod) {
        return 0;
      }
      let num = div
        // reverse number
        .split('')
        .reverse()
        .join('')
        // add space between every 3 digit of number (beginning from the end)
        .match(/[\S\s]{1,3}/g)
        .join(' ')
        // reverse to original look
        .split('')
        .reverse()
        .join('');
      return Number.isNaN(Number(mod))
        ? num
        : `${num}.${mod}`
    }
  }
}
</script>
<style>
  main .content {
    overflow: hidden;
  }
  main .content h1 {
    width: 100%;
  }
  @media (max-width: 1500px) {
    aside ul.nav li {
      height: 70px;
    }
    aside ul.nav li a{
      line-height: 70px;
      font-size: 20px;
    }
    aside .logo {
      padding: 15px 35px
    }
    aside .sidebar__header {
      margin: 0px 24px 
    }
    main .content h1 {
      font-size: 28px;
      margin-top: 10px;
    }
    header nav {
    padding: 10px 20px !important;
    height: 90px;
    }
    main .devel .material_theme {
      padding: 16px 0px
    }
    aside .sidebar__header .sidebar__header-btn .sidebar__header-refill {
      height: 55px;
    }
  }
  @media (max-width: 1300px) {
    aside ul.nav li {
      height: 50px;
    }
    aside ul.nav li a{
      line-height: 50px;
      font-size: 16px;
    }
    aside .logo {
      padding: 10px 30px
    }
    aside .sidebar__header {
      margin: 0px 24px 
    }
    main .content h1 {
      font-size: 28px;
      margin-top: 0px;
    }
    header nav {
    padding: 10px 20px !important;
    height: 80px;
    }
    main .devel .material_theme {
      padding: 12px 0px
    }
    aside .sidebar__header .sidebar__header-btn .sidebar__header-refill {
      height: 50px;
    }
  }
  .video_wrapper {
    width: 100%;
    padding: 10px 15px 0px
  }
  .video_wrapper video {
    width: 100%;
    
  }
  * {
    font-family: 'Roboto', sans-serif;
  }
  .profile.nav_profile {
    cursor: pointer;
  }
  .sidebar__header-refill, .navbar_left-refill {
     border: 0px;
  }
  aside {
    transition: .4s;
    display: block;
  }
  aside ul.nav li a.disabled {
    opacity: 0.7;
  }
  aside ul.nav li:hover a.disabled{
    background-color: #fff;
    cursor:not-allowed;
    font-weight: 400;
  }
  aside ul.nav li:hover a.disabled::before{
    display: none;
  }
  main {
    min-height: 100vh;
    height: auto;
  }
  main .content {
    min-height: 100vh;
    height: auto;
  }
  header .navbar_left p {
    margin: 0 30px 0 10px;
  }
  main .subBers img, main .subPtion img, main .referal img {
    width: 60px;
    height: 60px;
    object-fit: cover;
  }
  main .profile .profile__left .profile__img {
    background-size: contain;
    transition: none;
  }
  main .profile .profile__left .social__list-item .social__list-item-content .social-icon {
    margin-right: 10px;
  }
  main .profile .profile__left .social__list-item .social-btn, main .profile .profile__left .social__list-item .social-btn.active {
    line-height: 38px;
  }
  
  main .content {
    padding-bottom: 10px;
  }
  @media (max-width: 720px) {
    header .navbar_right .profile img {
      height: 50px;
    }
    aside ul.nav li {
      height: 40px;
    }
    aside ul.nav li a {
      line-height: 40px;
    }
    main .subBers img, main .subPtion img, main .referal img {
      height: 50px;
      width: 50px;
      margin-right: 10px;
      margin-left: 10px;
    }
    header, main {
      width: 100vw;
    }
    .fas {
      font-size: 25px;
      font-weight: 600
    }
    aside .logo {
      padding: 5px 40px 10px
    }
    .logo img {
      width: 70%;
    }
    aside .navbar_left-req {
      height: 45px;
      line-height: 41px;
      margin: 7px 24px
    }
    aside .sidebar__header .sidebar__header-btn .sidebar__header-refill {
      height: 45px;
      line-height: 45px;
    }
    aside .sidebar__header .sidebar__header-btn .sidebar__header-friend {
      height: 45px;
    }
  }


  main .subBers .row, main .subPtion .row, main .referal .row {
    justify-content: space-between;
  }
  main .subBers ul li .profile img, main .subPtion ul li .profile img, main .referal ul li .profile img{
    flex-shrink: 0;
  }
  main .subBers ul li, main .subPtion ul li, main .referal ul li{
    width: calc(33.33% - 15px);
  }
  main .subBers ul li .profile, main .subPtion ul li .profile, main .referal ul li .profile {
    display: flex;
    align-items: center;
  }
  @media (max-width: 1200px) {
    main .subBers ul li, main .subPtion ul li, main .referal ul li{
      width: calc(50% - 10px);
    }
  }
  @media (max-width: 800px) {
    main .subBers ul li, main .subPtion ul li, main .referal ul li{
      width: 100%;
    }
  }
  @media (max-width: 720px) {
    main .subBers ul li, main .subPtion ul li, main .referal ul li{
      width: calc(50% - 10px);
    }
  }
  @media (max-width: 600px) {
    main .subBers ul li, main .subPtion ul li, main .referal ul li{
      width: 100%;
    }
  }
  @media (max-width: 800px) {
    header .navbar_left p {
      display: block !important;
      margin-right: 10px;
    }
    main .materials .title-case p {
      font-size: 18px;
    }
    main .content {
      padding-top: 80px;
    }
    header .navbar_left .navbar_left-refill {
    display: block !important;
    height: 40px;
    width: 60px;
    line-height: 40px
    }
    aside .sidebar__header p {
      display: none;
    }
	aside {
		overflow-y: scroll;
		transform: translateX(-100%);
	}
	header, main {
		width: 100%;
	}
	header nav {
		height: 70px;
		line-height: 70px;
		padding: 0 20px !important;
	}
	header .submenu_back {
		display: flex;
	}
	header .navbar_right .nav-item:first-child a {
		padding: 0;
	}
	header .navbar_right .nav-item:first-child .block-notification {
		height: 20px;
	}
	header .navbar_right .nav-item:first-child .notification {
		height: 15px;
		width: 15px;
		line-height: 15px;
		bottom: 20px;
	}
	main .content {
		padding: 80px 15px 10px;
  }
  main .materials .material_theme {
    padding-bottom: 5px;
  }
	main .content h1 {
    margin-top: 0;
    font-size: 24px;
	}
	.navbar_submenu {
		display: block !important;
	}
	.sidebar_close {
		display: block !important;
	}
	main .subBers ul li, main .subPtion ul li, main .referal ul li {
		margin-bottom: 16px !important;
	}
	body main .profile .profile__form .form__box, main .profile .profile__form body .form__box, body main .settings .settings__content .form__box, main .settings .settings__content body .form__box, body main .referal .referal__link, main .referal body .referal__link {
		margin-bottom: 16px;
		width: 100%;
	}
	main .chat .contacts .dialogs .profile_dialogs .dialog_content p, main .chat .contacts .dialogs .profile_dialogs .dialog_content .dialog_date, main .chat .chat_box .msg_history .received_msg p, main .chat .chat_box .msg_history .sent_msg p, main .chat .chat_box .msg_history .received_msg p, main .chat .chat_box .msg_history .sent_msg p  {
		font-size: 16px;
	}
	main .chat .chat_box .msg_history .incoming_msg .incoming_msg_img, main .chat .chat_box .msg_history .outgoing_msg .incoming_msg_img {
		display: inline-block;
	}
	main .chat .chat_box .msg_history .received_msg {
		padding-left: 22px;
	}
	main .chat .chat_box .msg_history .outgoing_msg .sent_msg {
		padding-right: 24px;
	}
	main .chat .chat_box .msg_history .incoming_msg {
		padding-right: 5px;
	}
	main .chat .chat_box .msg_history {
	    height: calc(100vh - 135px);
	}
	main .chat .contacts .dialogs {
		padding-top: 0;
	}
	main .chat {
		padding: 71px 15px 0 15px;
		padding-bottom: 0;
	}
	.hide {
		display: none !important;
	}
	main .devel h1 {
		margin-top: 0;
	}
	main .listPartner.content .listPartner_box-text .box_text {
		border-bottom: 0 !important;
	}
	main .listPartner .myMaterial_box .myMaterial_box-shadow .myMaterial_box-text .box_text
	main .materials .myMaterial_box .myMaterial_box-shadow .myMaterial_box-text .box_text {
		border-bottom: 1px solid #aaaaaa !important;
		padding-bottom: 12px !important;
	}
	main .materials .listMaterials_price {
		padding: 12px 0;
	}
	main .conf {
		padding-top: 0;
	}
	.online-conf {
		display: none;
	} 
	main .conf .video-conf .conf__upper {
		margin: 15px 0 15px 30px;
	}
	main .devel .devel__modal-container1 .devel__modal {
		height: 100%;
		width: 100%;
		margin-top: 28px;
		border-radius: 0;
	}
	main .devel__modal .modal-body {
		display: flex;
    	flex-direction: column;
	}
	main .devel__modal .modal-body .listMaterials_price {
		order: 2;
		border-top: 1px solid #dee2e6;
	}
	main .devel__modal .modal-body .listMaterials_text {
		padding-top: 24px;
	}
	main .devel__modal .modal-body .listMaterials_text h2 {
		font-size: 24px;
	}
	main .devel__modal .modal-body .listMaterials_text p {
		font-size: 16px;
		color: #aaaaaa;
	}
	main .devel__modal .modal_close {
		display: none;
	}
	main .devel__modal .navbar_chat-back {
		display: block;
	}
	main .devel__modal .modal-header .close {
		margin: 0;
		padding: 0;
	}
	main .confid .confid__content .confid__title {
		margin-bottom: 16px;
	}
	main .confid .confid__content .confid__subs {
		margin-top: 30px;
	}
	main .settings .settings__content .form__box {
		margin-right: 0 !important;
	}
	main .settings .settings__content .privacy__row .privacy__label, main .settings .settings__content .privacy__row .privacy__labeled {
		margin: 0;
	}
	main .settings .settings__content .privacy__row {
		width: 100%;
	}
	.request .fixed_video {
		display: block;
		position: inherit;
		margin-top: 100px;
	} 
	.fixed_video {
		display: none;
	}
	
}
</style>