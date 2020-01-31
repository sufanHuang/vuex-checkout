<template>
    <nav class="nav">
        <div class="nav-left">
            <router-link to="/" class="nav-item">
                <img src="../assets/logo.jpg" alt="grocery logo">
            </router-link>
        </div>

        <span class="nav-toggle">
	    <span></span>
	    <span></span>
	    <span></span>
	  </span>

        <div class="nav-right nav-menu">
            <router-link to="/" class="nav-item is-tab" exact-active-class="is-active">
                Products
            </router-link>

            <div class="nav-item is-tab" >
                <div class="field is-grouped">
                    <router-link to='/cart' class="button is-success">
	            <span class="icon">
	              <i class="fa fa-shopping-cart"></i>
	            </span>
                        <span>Checkout ({{itemsInCart}})</span>
                    </router-link>
                </div>
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
    .nav {
        height: auto;
        margin-bottom: 2rem;
    }

    .nav-item img {
        max-height: 8rem;
    }

</style>
