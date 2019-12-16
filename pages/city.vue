<template>
    <section class="city__section">
        <div class="header__city">
            <div @click="show = !show" class="city__selected">
                <span class="city__title">Москва</span>
                <i class="icon-arrow" :class="{ rotate: show }"></i>
            </div>
            <transition name="fade">
                <div v-if="show" class="city__list">
                    <ul>
                    <li class="selected">Москва</li>
                    <li>Санкт-Петербург</li>
                    <li>Новосибирск</li>
                    <li>Екатеринбург</li>
                    <li>Нижний Новгород</li>
                    <li>Казань</li>
                    </ul>
                </div>
            </transition>
        </div>
    </section>
</template>
<script>
export default {
  data: () => ({
    show: false,
  }),
};
</script>