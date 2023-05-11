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
                    <!-- <div>
                        <GoogleLogin :callback="callback" :error="error" />
                    </div> -->
                    <!-- <h1>GOOGLE</h1>
                    <GoogleLogin :callback="callback" :error="error" /> -->
                    <!-- <TestCmp /> -->
                    <GoogleLoginCmp />
                </div>
            </div>
        </div>
    </div>
</template>
<script>
// import Layout from '../Layout/Layout.vue'
import GoogleLoginCmp from "../components/GoogleLoginCmp.vue";
// import TestCmp from "../components/TestCmp.vue";

import GoogleLogin from "vue3-google-login";
export default {
    name: 'Login Page',
    components: {
        // Layout,
        // GoogleLogin,
        GoogleLoginCmp,
        // TestCmp,
    },
    data() {
        return {
            client_id: import.meta.env.VITE_GOOGLE_CLIENT_ID
        }
    },
    methods: {
        callback2() {
            console.log("callback");
        },
    },
    created() {
        console.log(this.client_id);
    },
}
</script>