<template>
  <section class="notes results">
    <div class="wrap">
      <h2 class="notes-title">Мои записи</h2>
      <div class="notes-list">
        <div class="notarys">
          <div class="notary-list">
            <div class="notary-card result-card notes-card active">
              <div class="notary-top">
                <div class="top-note">
                  <div class="note-date">1 октября 2019 в 15:00</div>
                  <div class="note-status">Запись подтверждена, ждем вас на прием</div>
                </div>
                <div class="top-note__btn">
                  <button class="btn-left__action">Перенести прием</button>
                  <button class="btn-right__action" @click="modalCancel">Отменить запись</button>
                </div>
              </div>
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
                  <div class="card-about">
                    <div class="card-spec">Нотариус</div>
                    <div class="card-name">
                      <a href="#">Ложкин Валерий Александрович</a>
                    </div>
                    <div class="card-year">Стаж 8 лет</div>
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
                    <div class="card-adress">г. Москва, ул. 2-я Кабельная, д.2, стр. 14</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="notary-card result-card notes-card done">
              <div class="notary-top">
                <div class="top-note">
                  <div class="note-date">1 октября 2019 в 15:00</div>
                  <div class="note-status">Запись подтверждена, ждем вас на прием</div>
                </div>
                <div class="top-note__btn">
                  <button class="btn-left__action">Перенести прием</button>
                  <button class="btn-right__action">Отменить запись</button>
                </div>
              </div>
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
                  <div class="card-about">
                    <div class="card-spec">Нотариус</div>
                    <div class="card-name">
                      <a href="#">Ложкин Валерий Александрович</a>
                    </div>
                    <div class="card-year">Стаж 8 лет</div>
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
                    <div class="card-adress">г. Москва, ул. 2-я Кабельная, д.2, стр. 14</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <client-only>
      <modal class="modal modal-sms modal-cancel" name="modalCancel" width="400px" height="auto">
        <div class="modal-header">
          <h1>Отмена записи</h1>
          <div
            class="under-header"
          >Введите номер, на него вы получите СМС с кодом подтверждения для отмена записи</div>
        </div>
        <div class="modal-body">
          <div class="form__box">
            <input type="text" placeholder="Введите ваш номер" />
          </div>
        </div>
        <div class="modal-bottom">
          <button class="bottom-accept" @click="modalCancelAccept">Продолжить</button>
        </div>
        <div class="modal-close" @click="$modal.hide('modalCancel')"></div>
      </modal>
      <modal
        class="modal modal-sms modal-cancelAccept"
        name="modalCancelAccept"
        width="400px"
        height="auto"
      >
        <div class="modal-header">
          <img src="Error.svg" alt />
          <h1>Отмена записи</h1>
          <div class="under-header">Вы действительно хотите отменить запись?</div>
        </div>
        <div class="modal-bottom">
          <button class="bottom-accept">Да</button>
          <button class="bottom-cancel">Нет</button>
        </div>
        <div class="modal-close" @click="$modal.hide('modalCancelAccept')"></div>
      </modal>
    </client-only>
    <v-map :center="center">
      <v-marker :position="center" />
    </v-map>
  </section>
</template>
<script>
export default {
  data: () => ({}),
  methods: {
    modalCancel() {
      this.$modal.show("modalCancel");
    },
    modalCancelAccept() {
      this.$modal.show("modalCancelAccept");
      this.$modal.hide("modalCancel");
    }
  },
  computed: {
    center() {
      return { lat: -23.4070511, lng: -51.9428867 };
    }
  }
};
</script>