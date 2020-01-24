<template>
    <div class="notary-stars">
        <div v-for="(i, k) in roundedRating" :key="k + 'o'" class="notary-star"><img src="/starO.svg" alt /></div>
        <div v-for="(i, k) in disRating" :key="k + 'd'" class="notary-star"><img src="/starD.svg" alt /></div>
    </div>
</template>
<script>
export default {
    props: {
        rating: null,
    },
    computed: {
        roundedRating() {
            if (!this.rating || Number.isNaN(Number(this.rating))) {
                return 0
            }
            return Math.round(this.rating, 0)
        },
        disRating() {
            return (5 - this.roundedRating)
        }
    }
}
</script>
<style lang="scss" scoped>
    .notary-stars {
        display: flex;
        justify-content: center;
        align-items: center;

        .notary-star:not(:last-child) {
        margin-right: 2px;
        }
    }
</style>