<script setup>
import { computed } from 'vue';
import { usePage } from '@inertiajs/inertia-vue3';

const errors = computed(() => usePage().props.value.errors);

const success = computed(() => usePage().props.value.status);

const hasErrors = computed(() => Object.keys(errors.value).length > 0);

</script>

<template>
    <div v-if="hasErrors">
        <div class="mt-3 bg-danger py-2 px-3 rounded text-sm text-white">
            <span>{{ errors[Object.keys(errors)[0]] }}</span>
        </div>
    </div>
    <div v-else-if="success">
        <div class="mt-3 bg-success py-2 px-3 rounded text-sm text-white">
            <span>{{ success }}</span>
        </div>
    </div>
</template>
