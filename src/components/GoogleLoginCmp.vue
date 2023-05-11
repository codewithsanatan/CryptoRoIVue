<script setup>
const callback = (response) => {
    // This callback will be triggered when the user selects or login to
    // his Google account from the popup
    console.log("Handle the response", response);
};
const error = (err) => {
    // This callback will be triggered when the user selects or login to
    // his Google account from the popup
    console.log("Handle the error", err);
};
</script>

<template>
    <h1>GOOGLE</h1>
    <GoogleLogin :callback="callback" :error="error" />
</template>

