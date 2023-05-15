<template>
    <div>
        {{ personName }}
        {{ $store.getters.personName }}
        {{ $store.state.counterMod.count }}
        {{ $store.state.counterMod.postData }}
        <button type="button" @click="getPostDataFromApi('test1234')">Get Post Data Map</button>
        <button type="button" @click="increaseCount">Increment</button>
        <button type="button" @click="callApi">Get Post Data</button>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';


export default {
    name: 'Test State Component',
    data() {
        return {
            env_data: this.$apiUrl,
        }
    },
    computed: {
        ...mapGetters('counterMod', ['personName'])
    },
    methods: {
        ...mapActions('counterMod', ['getPostDataFromApi']),
        increaseCount() {
            this.$store.commit('increment');
        },
        callApi() {
            let ddd = "new Data";
            this.$store.dispatch('getPostDataFromApi', ddd);
        }
    },
    mounted() {
        console.log(this.env_data);
    }
}
</script>