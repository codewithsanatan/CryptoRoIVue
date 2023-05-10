<template>
    <div>
        <div class="thank-content">
            <div class="container">
                <div class="cont-text">
                    <div>
                        <h3>Welcome to Login Page</h3>
                        <p>Your message has been sent!</p>
                        <router-link to="/" class="primary-hover"> Go Home</router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
// import Layout from '../Layout/Layout.vue'
export default {
    name: 'Login Page',
    components: {
        // Layout,
    }
}
</script>