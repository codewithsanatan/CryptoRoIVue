<template>
    <section>
        <h1>TEST</h1>
        <GoogleLogin :clientId="client_id" />
        <!-- <GoogleLogin :callback="callback" :error="error" /> -->
    </section>
</template> 

<script>
import GoogleLogin from "vue3-google-login";

export default {
    data() {
        return {
            client_id:
                "91684719015-q699udlg7sh9vap98guq2sp5nt3taju2.apps.googleusercontent.com",
        };
    },
    methods: {
        callback() {
            console.log("callback");
        },
        error() {
            console.log('error');
        }
    },
    components: { GoogleLogin },
};
</script>