<template>
    <div class="container">
        <h1 class="title">All Products</h1>
        <h5>{{length}} products</h5>
        <div class="products">
            <div class="card product" style="width:18rem" v-for="product in products" track-by="id">
                <img class='card-img-top' :src='product.img' alt="item">
                <h5 class="card-title">{{ product.name.toUpperCase() }}</h5>
                <h5 class="card-title">${{ product.price }}</h5>
                <button class="btn btn-success" @click="addToCart(product)">Add To Cart</button>
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
    h1{
        color: forestgreen;
    }

    h5{
        color: saddlebrown;

    }

    img{
        width: 15rem;
        height:15rem;
    }
    .products{
        display: flex;
        flex-flow: wrap;
        align-items: center;
        justify-content: center
    }

    .product{
        display:flex;
        flex-direction:column;
        margin:.5rem;
        padding:0.5rem;
        align-items: center;
        border-radius: 10px;
        background: white;
        box-shadow: -1px 2px 34px -13px rgba(0,0,0,0.75);
    }


</style>
