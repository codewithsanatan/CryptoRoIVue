<template>
    <div>
        <div class="thank-content">
            <div class="container">
                <div class="cont-text">
                    <div>
                        <!-- <img width="60" src="@/assets/images/message-100.png" alt=""> -->
                        <h3>Thanks for Submitting!</h3>
                        <p>Your message has been sent!</p>
                        <router-link to="/" class="primary-hover">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#ffffff"
                                class="bi bi-arrow-left me-2" viewBox="0 0 16 16">
                                <path fill-rule="evenodd"
                                    d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z" />
                            </svg>
                            Go Home
                        </router-link>
                        <!-- <a href="#" class="primary-hover">
                    </a> -->
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
export default {
    name: 'Register Page',
}
</script>