<script setup>
import AuthenticatedLayout from '@/Layouts/Authenticated.vue'
import { Head, useForm, Link } from '@inertiajs/inertia-vue3';
import { computed } from 'vue';
import { usePage } from '@inertiajs/inertia-vue3';

const props = defineProps(['product'])

const prod = computed(() => usePage().props.value.product)
</script>
<template>

   <Head title="View Product" />

   <AuthenticatedLayout>
   <div class="container-fluid">
                    <!-- start page title -->
                    <div class="row">
                        <div class="col-12">
                            <div class="page-title-box d-sm-flex align-items-center justify-content-between">
                                <h4 class="mb-sm-0">Product Details</h4>

                                <div class="page-title-right">
                                    <ol class="breadcrumb m-0">
                                        <li class="breadcrumb-item"><a href="javascript: void(0);">Ecommerce</a></li>
                                        <li class="breadcrumb-item active">Product Details</li>
                                    </ol>
                                </div>

                            </div>
                        </div>
                    </div>
                    <!-- end page title -->

                    <div class="row">
                        <div class="col-lg-12">
                            <div class="card">
                                <div class="card-body">
                                    <div class="row gx-lg-5">
                                        <div class="col-xl-4 col-md-8 mx-auto">
                                            <div class="product-img-slider sticky-side-div">
                                                <div class="swiper product-thumbnail-slider p-2 rounded bg-light">
                                                    <div class="swiper-wrapper">
                                                        <div class="swiper-slide">
                                                            <img :src="prod.thumbnails" alt="" class="img-fluid d-block" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <!-- end col -->

                                        <div class="col-xl-8">
                                            <div class="mt-xl-0 mt-5">
                                                <div class="d-flex">
                                                    <div class="flex-grow-1">
                                                        <h4>{{ prod.product_name }}</h4>
                                                    </div>
                                                </div>

                                                <div class="d-flex flex-wrap gap-2 align-items-center mt-3">
                                                    <div class="text-muted fs-16">
                                                        <span class="mdi mdi-star text-warning"></span>
                                                        <span class="mdi mdi-star text-warning"></span>
                                                        <span class="mdi mdi-star text-warning"></span>
                                                        <span class="mdi mdi-star text-warning"></span>
                                                        <span class="mdi mdi-star text-warning"></span>
                                                    </div>
                                                    <div class="text-muted">( 5.50k Customer Review )</div>
                                                </div>

                                                <div class="row g-2 mt-4">
                                                   <div class="col-lg-6 col-sm-6">
                                                      <div class="p-2 border border-dashed rounded">
                                                         <div class="d-flex align-items-center">
                                                            <div class="avatar-sm me-2">
                                                               <div class="avatar-title rounded bg-transparent text-success fs-24">
                                                                  <b class="">&#8358;</b>
                                                               </div>
                                                            </div>
                                                            <div class="flex-grow-1">
                                                               <p class="text-muted mb-1">Price :</p>
                                                               <h5 class="mb-0">&#8358;{{ prod.price }}</h5>
                                                            </div>
                                                         </div>
                                                      </div>
                                                   </div>
                                                   <div class="col-lg-6 col-sm-6">
                                                      <div class="p-2 border border-dashed rounded">
                                                         <div class="d-flex align-items-center">
                                                            <div class="avatar-sm me-2">
                                                               <div class="avatar-title rounded bg-transparent text-success fs-24">
                                                                  <i class="ri-stack-fill"></i>
                                                               </div>
                                                            </div>
                                                            <div class="flex-grow-1">
                                                               <p class="text-muted mb-1">Available Stocks :</p>
                                                                  <h5 class="mb-0">{{ prod.quantity }}</h5>
                                                               </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                   <div class="col-lg-6 col-sm-6">
                                                      <div class="p-2 border border-dashed rounded">
                                                         <div class="d-flex align-items-center">
                                                            <div class="avatar-sm me-2">
                                                               <div class="avatar-title rounded bg-transparent text-success fs-24">
                                                                  <b>%</b>
                                                               </div>
                                                            </div>
                                                            <div class="flex-grow-1">
                                                               <p class="text-muted mb-1">Discount :</p>
                                                                  <h5 class="mb-0">{{ prod.discount }}%</h5>
                                                               </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-lg-6 col-sm-6">
                                                      <div class="p-2 border border-dashed rounded">
                                                         <div class="d-flex align-items-center">
                                                            <div class="avatar-sm me-2">
                                                               <div class="avatar-title rounded bg-transparent text-success fs-24">
                                                                  <i class="ri-eye-fill"></i>
                                                               </div>
                                                            </div>
                                                            <div class="flex-grow-1">
                                                               <p class="text-muted mb-1">Visibility :</p>
                                                                  <h5 class="mb-0">{{ prod.visibility }}</h5>
                                                               </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-lg-6 col-sm-6">
                                                      <div class="p-2 border border-dashed rounded">
                                                         <div class="d-flex align-items-center">
                                                            <div class="avatar-sm me-2">
                                                               <div class="avatar-title rounded bg-transparent text-success fs-24">
                                                                  <i class="ri-eye-fill"></i>
                                                               </div>
                                                            </div>
                                                            <div class="flex-grow-1">
                                                               <p class="text-muted mb-1">Status :</p>
                                                                  <h5 class="mb-0">{{ prod.status }}</h5>
                                                               </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="mt-4 text-muted">
                                                    <h5 class="fs-14">Description :</h5>
                                                    <p v-html="prod.product_description" />
                                                </div>
                                                <div class="row">
                                                   <div class="col-12">
                                                      <div class="text-end mb-3">
                                                         <Link :href="`/account/product/edit/${ prod.id }`" class="btn btn-primary btn-lg w-md">
                                                            Edit
                                                         </Link>
                                                         <Link :href="`/account/products`" class="btn btn-danger btn-lg w-md mx-2">Back</Link>
                                                      </div>
                                                   </div>
                                                </div>
                                            </div>
                                        </div>
                                        <!-- end col -->
                                    </div>
                                    <!-- end row -->
                                </div>
                                <!-- end card body -->
                            </div>
                            <!-- end card -->
                        </div>
                        <!-- end col -->
                    </div>
                    <!-- end row -->

                </div>
                <!-- container-fluid -->
   </AuthenticatedLayout>
</template>