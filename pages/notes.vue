<template>
  <section class="notes results">
    <div class="wrap">
      <div class="notes__section">
        <div class="search">
          <form class="search-form">
            <div class="search-formDate">
              <input id="srch" placeholder="Метро, город МО" />
              <button class="search-btn">Найти</button>
              <button class="search-btn">
                <img src="bx-search.svg" alt />
              </button>
            </div>
          </form>
        </div>
      </div>
      <div class="notes__section">
        <h2 class="notes-title">Мои записи</h2>
        <div class="notes-list">
          <div class="notarys">
            <div class="notary-list">
              <div
                v-for="(item, index) in orders"
                :key="index"
                class="notary-card result-card notes-card"
                :class="[{ active: true }, { done: false }]"
              >
                <div class="notary-top">
                  <div class="top-note">
                    <div class="note-date">
                      {{ item.timestamp | dateTimeFormat }}
                    </div>
                    <div class="note-status">
                      Запись подтверждена, ждем вас на прием
                    </div>
                  </div>
                  <div class="top-note__btn">
                    <button class="btn-left__action">Перенести прием</button>
                    <button 
                      class="btn-right__action" 
                      @click="modalCancelAccept(item)"
                      :disabled="loadingCancelOrder"
                      >
                      Отменить запись
                    </button>
                  </div>
                </div>
                <div class="card-left">
                  <div class="card-avatar">
                    <img class="notary-avatar" src="/ava.jpg" alt />
                    <div class="card-rev">
                      <star :rating="item.companyRating" />
                      <div class="rev">
                        <a href="#">
                          {{ item.companyVoteQuantity }}
                          <span>отзывов</span>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div class="card-center">
                    <div class="card-about">
                      <div class="card-spec">Нотариус</div>
                      <div class="card-name">
                        <a href="#">{{ item.companyTitle }}</a>
                      </div>
                      <div class="card-year">
                        Стаж {{ item.companyWorkExperience }}
                      </div>
                    </div>
                    <div class="card-location">
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
                      <div class="card-adress">{{ item.companyAddress }}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <client-only>
      <modal v-if="false"
        class="modal modal-sms modal-cancel modalBottom"
        name="modalCancel"
        width="400px"
        height="auto"
        >
        <div class="modal-header">
          <h1>Отмена записи</h1>
          <div class="under-header">
            Введите номер, на него вы получите СМС с кодом подтверждения для
            отмена записи
          </div>
        </div>
        <div class="modal-body">
          <div class="form__box">
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
        <div class="modal-bottom">
          <button class="bottom-accept" @click="modalCancelAccept">
            Продолжить
          </button>
        </div>
        <div class="modal-close" @click="$modal.hide('modalCancel')"></div>
      </modal>
      <modal
        class="modal modal-sms modal-cancelAccept modalBottom"
        name="modalCancelAccept"
        width="400px"
        height="auto"
        >
        <div class="modal-header">
          <img src="Error.svg" alt />
          <h1>Отмена записи</h1>
          <div class="under-header">
            Вы действительно хотите отменить запись у <b>{{ currentTitle }}</b>?
          </div>
        </div>
        <div class="modal-bottom">
          <button 
            class="bottom-accept"
            @click="cancelOrder"
            :disabled="loadingCancelOrder"
            >Да</button>
          <button 
            class="bottom-cancel" 
            @click="$modal.hide('modalCancelAccept')"
            >Нет</button>
        </div>
        <div
          class="modal-close"
          @click="$modal.hide('modalCancelAccept')"
        ></div>
      </modal>
    </client-only>
  </section>
</template>
<script>
import star from "~/components/star";
export default {
  components: {
    star
  },
  data: () => ({
    customerPhoneNumber: "",
    currentId: null,
    currentTitle: null,
    loadingCancelOrder: false,
  }),
  
  computed: {
    center() {
      return { lat: -23.4070511, lng: -51.9428867 };
    },
    orders() {
      return this.$store.getters["orders/getList"];
    },
  },
  mounted() {
    this.loadOrders();
  },
  methods: {
    modalCancel() {
      this.$modal.show("modalCancel");
    },
    modalCancelAccept({id, companyTitle}) {
      this.currentId = id
      this.currentTitle = companyTitle
      this.$modal.show("modalCancelAccept");
    },
    loadOrders() {
      this.$store.dispatch("orders/loadList");
    },
    async cancelOrder() {
      if (this.loadingCancelOrder) {
        return
      }
      this.loadingCancelOrder = true
      let result = await this.$store.dispatch('orders/delete', this.currentId)
      this.loadingCancelOrder = false
      if (!result) {
        return
      }
      this.loadOrders()
      this.$modal.hide('modalCancelAccept')
    },
  }
};
</script>
