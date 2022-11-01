<script setup>

import { Link } from '@inertiajs/inertia-vue3';
import Header from '../Components/Header.vue'
import Footer from '../Components/Footer.vue'

</script>

<script>

export default {
    
}
</script>

<template>
<Header />
    <div class="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gray-100">
        <div class="w-full sm:max-w-md mt-6 px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg">
            <slot />
        </div>
    </div>
</template>
