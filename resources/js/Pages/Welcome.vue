<script setup>
import { Head, Link } from '@inertiajs/inertia-vue3';
import { computed } from 'vue';
import { usePage } from '@inertiajs/inertia-vue3';
import Header from '@/Components/Header.vue'
import Footer from '@/Components/Footer.vue'

const props = defineProps(['products'])

const products = computed(() => usePage().props.value.products.data)
const links = computed(() => usePage().props.value.products.links)
</script>


<template>

    <Head title="Ecommerce Store" />
    <div class="layout-wrapper">

        <Header />
        <div class="pt-3">
            <!-- start wallet -->
            <section class="section">
                <div class="container">
                    <div class="row g-4 display-flex">
                        <div class="col-lg-3">
                            <div class="card border shadow-none">
                                <div class="card-body px-4">
                                    <ul class="navbar-nav" id="navbar-nav">
                                        <li class="menu-title fs-14"><span data-key="t-menu">Categories</span></li>
                                        <li class="nav-item">
                                            <a class="nav-link menu-link" href="javascript:void(0)">
                                                <i class="bx bx-plus"></i> <span data-key="t-dashboards">Women's
                                                    Fashion</span>
                                            </a>
                                        </li> <!-- end Dashboard Menu -->
                                        <li class="nav-item">
                                            <a class="nav-link menu-link" href="javascript:void(0)">
                                                <i class="bx bx-plus"></i> <span data-key="t-apps">Men's Fashion</span>
                                            </a>
                                        </li>

                                        <li class="nav-item">
                                            <a class="nav-link menu-link" href="javascript:void(0)">
                                                <i class="bx bx-plus"></i> <span data-key="t-layouts">Electronics</span>
                                            </a>
                                        </li> <!-- end Dashboard Menu -->

                                        <li class="nav-item">
                                            <a class="nav-link menu-link" href="javascript:void(0)">
                                                <i class="bx bx-plus"></i> <span data-key="t-pages">Outdoor and
                                                    Sports</span>
                                            </a>
                                        </li>

                                        <li class="nav-item">
                                            <a class="nav-link menu-link" href="javascript:void(0)">
                                                <i class="bx bx-plus"></i> <span data-key="t-landing">Beauty, Health and
                                                    Hair</span>
                                            </a>
                                        </li>

                                        <li class="nav-item">
                                            <a class="nav-link menu-link" href="javascript:void(0)">
                                                <i class="bx bx-plus"></i> <span data-key="t-base-ui">Food and
                                                    Cafe</span>
                                            </a>
                                        </li>

                                        <li class="nav-item">
                                            <a class="nav-link menu-link" href="javascript:void(0)">
                                                <i class="bx bx-plus"></i> <span data-key="t-widgets">Computer and
                                                    Telecoms</span>
                                            </a>
                                        </li>

                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-9">
                            <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                                <div class="carousel-indicators">
                                    <button type="button" data-bs-target="#carouselExampleIndicators"
                                        data-bs-slide-to="0" class="active" aria-current="true"
                                        aria-label="Slide 1"></button>
                                    <button type="button" data-bs-target="#carouselExampleIndicators"
                                        data-bs-slide-to="1" aria-label="Slide 2"></button>
                                    <button type="button" data-bs-target="#carouselExampleIndicators"
                                        data-bs-slide-to="2" aria-label="Slide 3"></button>
                                </div>
                                <div class="carousel-inner">
                                    <div class="carousel-item active" data-bs-interval="10000">
                                        <img src="/assets/images/landing/vivo.jpg"
                                            class="d-block w-100 img-fluid rounded-4" alt="...">
                                    </div>
                                    <div class="carousel-item" data-bs-interval="2000">
                                        <img src="/assets/images/landing/unilever.jpg"
                                            class="d-block w-100 img-fluid rounded-4" alt="...">
                                    </div>
                                    <div class="carousel-item">
                                        <img src="/assets/images/landing/intel.jpeg"
                                            class="d-block w-100 img-fluid rounded-4" alt="...">
                                    </div>
                                </div>
                                <button class="carousel-control-prev" type="button"
                                    data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span class="visually-hidden">Previous</span>
                                </button>
                                <button class="carousel-control-next" type="button"
                                    data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span class="visually-hidden">Next</span>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div class="row mt-4 justify-content-center">
                        <div class="col-lg-12">
                            <div class="d-flex align-items-center mb-3">
                                <h4 class="mb-0 fw-medium lh-base flex-grow-1">Top Deals | Holiday Mode </h4>
                            </div>
                        </div>
                    </div>
                    <div class="row gy-4">
                        <div class="col-lg-3" v-for="(p, index) in products" :key="index">
                            <div class="card explore-box card-animate border box">
                                <div class="card-body pb-0">
                                    <div class="explore-place-bid-img overflow-hidden rounded">
                                        <img :src="p.thumbnails" alt="" class="explore-img w-100">
                                        <div class="bg-overlay"></div>
                                    </div>
                                    <div class="mt-3">
                                        <h6 class="fs-15 mb-0">
                                            <Link href="#">{{ p.product_name }}</Link>
                                        </h6>
                                        <p class="fw-medium mb-0 mt-3 float-end text-muted"><small>{{ p.quantity }} items </small></p>
                                        <h5 class="text-success mt-3"><b class="">&#8358;</b> {{ p.price }} </h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-12">
                            <nav>
                                <ul class="pagination justify-content-center">
                                    <template v-for="(link, p) in links" :key="p">
                                        <template v-if="link.url === null">
                                            <li class="page-item disabled">
                                                <Link class="page-link" :href="link.url" v-html="link.label" />
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
                        </div>
                        <div class="col-12">
                            <div class="card">
                                <div class="card-body">
                                    <div class="d-flex">
                                        <div class="flex-shink-0">
                                            <img src="assets/images/products/drinks.jpg" alt=""
                                                class="img-fluid rounded-4" />
                                        </div>
                                        <div class="ms-3 flex-grow-1">
                                            <img src="assets/images/products/detergent.jpg" alt=""
                                                class="img-fluid rounded-4" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <!-- end wallet -->
        </div>

        <Footer />

    </div>
</template>

<style scoped>
</style>
