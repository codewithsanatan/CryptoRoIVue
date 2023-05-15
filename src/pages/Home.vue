<template>
    <Layout>
        <div style="text-align: center;">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Cryptocurrency_Logo.svg/3888px-Cryptocurrency_Logo.svg.png" alt="Crypto Invest" width="100" srcset="">
        </div>
        <TestState />
        <HelloWorld msg="Crypto Invest" />
    </Layout>
</template>
<script>
import Layout from '../Layout/Layout.vue'
import HelloWorld from '../components/HelloWorld.vue';
import TestState from '../components/TestState.vue';

export default {
    name: 'Home Page',
    components: {
        Layout,
        HelloWorld,
        TestState,
    },
    data() {
        return {
            env_data: this.$apiUrl,
        }
    },
    mounted() {
        console.log(this.env_data);
        console.log(import.meta.env.VITE_APP_API_URL);
        this.axios.get(this.$apiUrl)
            .then((res) => {
                console.log(res.data);
            })
            .catch(err => console.log(err));
    }
}
</script>