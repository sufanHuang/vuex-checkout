<template>
    <nav class="navbar narvar-default">
        <div  class="navbar-brand">
            <router-link to="/">
                <img src="../assets/logo.jpg" alt="grocery logo">
            </router-link>
        </div>

        <div class="navbar-text navbar-right">
            <router-link to="/" class="navbar-link" >
                Products
            </router-link>

            <div type='button' class="btn btn-default navbar-link" >
                <router-link to='/cart'>
                    <span class="icon">
                      <i class="fa fa-shopping-cart"></i>
                    </span>
                    <span>Checkout ({{itemsInCart}})</span>
                </router-link>
            </div>
        </div>
    </nav>
</template>

<script>
    import { mapGetters } from 'vuex'

    export default {
        computed: {
            itemsInCart(){
                let cart = this.$store.getters.cartProducts;
                return cart.reduce((accum, item) => accum + item.quantity, 0)
            }
        }
    }
</script>

<style>
    .navbar-brand img {
        max-height: 3rem;
    }

</style>
