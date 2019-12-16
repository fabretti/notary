<template>
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
                <carousel :paginationEnabled="false" :navigationEnabled="true" :perPage="1" navigationNextLabel="<i class='material-icons'><img src='/Polygon.svg'></i>"
                navigationPrevLabel="<i class='material-icons'><img src='/PolygonL.svg'></i>">
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
                <carousel :paginationEnabled="false" :navigationEnabled="true" :perPageCustom="[[400, 5], [500, 5], [590, 7], [781, 3.5], [1011, 4.5]]" navigationNextLabel="<i class='material-icons'><img src='/Polygon.svg'></i>"
                navigationPrevLabel="<i class='material-icons'><img src='/PolygonL.svg'></i>">
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
</template>
<script>
export default {
    methods: {
        showModal() {
        this.$modal.show("modalRecord");
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
    }
}
</script>