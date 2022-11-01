<script setup>
import { Link } from '@inertiajs/inertia-vue3';
    defineProps(['links']);
</script>

<template>
<nav v-if="links.length > 20">
  <ul class="pagination justify-content-center" >
      <template v-for="(link, p) in links" :key="p">
            <template v-if="link.url === null">
                <li class="page-item disabled"  >
                    <Link class="page-link" :href="link.url" v-html="link.label"/>
                </li>
            </template>
            <template v-else>
                <li class="page-item" :class="{ 'active': link.active }">
                    <Link class="page-link" :href="link.url" v-html="link.label" />
                </li>  
            </template>
    </template>  
  </ul>
</nav>
</template>