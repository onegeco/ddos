<script setup>
import Header from '../Components/Header.vue'
import Footer from '../Components/Footer.vue'
import { Link } from '@inertiajs/inertia-vue3';

const date = new Date()
const year = date.getFullYear()

</script>

<template>
   <div class="auth-page-wrapper">

        <!-- auth page content -->
        <div class="auth-page-content">
            <div class="container">
                
                <!-- end row -->

                <div class="row justify-content-center">
                    <slot />
                </div>
                <!-- end row -->
            </div>
            <!-- end container -->
        </div>
        <!-- end auth page content -->

        <!-- footer -->
        <footer class="footer">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="text-center">
                            <p class="mb-0 text-muted">
                                &copy; {{ year }} Ecommerce Store - All Rights Reserved
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
        <!-- end Footer -->
    </div>

</template>