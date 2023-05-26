<template>
     <div class="list-item-donghoNam">
        <div class="list-item-watch-donghoNam">
            <a href="#">
                <div class="discount">
                    <span>{{ product.discount }}</span>
                </div>
                <img :src="product.img" class="img"  alt="" />
                <i @click="handleAddCart(product)" class="fa fa-shopping-bag "></i>
                <div class="watch-detail-donghoNam">
                    <h6>{{ product.nameType }}</h6>
                    <h5>{{ product.nameItem }}</h5>
                    <h6><span>{{ product.price }} VND</span> {{ product.pricediscount }} VND</h6>
                </div>
            </a>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        product: {
            type: Object,
        },
    },
    methods: {
        handleAddCart(product) {
            this.$emit("handle-addcart", product);
        },
    },
}
</script>

<style>
 
</style>