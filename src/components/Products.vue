<template>
    <div class="container">
        <h1 class="title">All Products</h1>
        <p>{{length}} products</p>
        <div class="columns">
            <div class="column product-box" v-for="product in products" track-by="id">
                <img :src='product.img' alt="item">
                <p class="title is-5">{{ product.name.toUpperCase() }}</p>
                <p class="title is-4">${{ product.price }}</p>
                <i class="fa fa-cart-plus" @click="addToCart(product)"></i>
            </div>
        </div>

    </div>
</template>

<script>
    import { mapGetters, mapActions } from 'vuex'

    export default {
        name: 'app',
        computed: mapGetters({
            products: 'allProducts',
            length: 'getNumberOfProducts'
        }),
        methods: mapActions([
            'addToCart'
        ])
    }
</script>

<style scoped>
    img{
        width: 100px;
        height:auto
    }
    .product-box{
        padding:50px;
        border: darkslategray;
    }

</style>
