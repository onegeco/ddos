<script setup>
import AuthenticatedLayout from '@/Layouts/Authenticated.vue'
import { Head, Link } from '@inertiajs/inertia-vue3'
import { computed } from 'vue';
import { usePage } from '@inertiajs/inertia-vue3';
import Pagination from '@/Components/Pagination.vue'

const props = defineProps(['products'])

const prods = computed(() => usePage().props.value.products.data)
const l = computed(() => usePage().props.value.products.links)

</script>
<template>

    <Head title="Products" />

    <AuthenticatedLayout>
        <div class="container-fluid">

            <!-- start page title -->
            <div class="row">
                <div class="col-12">
                    <div class="page-title-box d-sm-flex align-items-center justify-content-between">
                        <h4 class="mb-sm-0">Products</h4>

                        <div class="page-title-right">
                            <ol class="breadcrumb m-0">
                                <li class="breadcrumb-item"><a href="javascript: void(0);">Ecommerce</a></li>
                                <li class="breadcrumb-item active">Products</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
            <!-- end page title -->

            <div class="row">

                <div class="col-12">
                    <div>
                        <div class="card">
                            <div class="card-header border-0">
                                <div class="row g-4">
                                    <div class="col-sm-auto">
                                        <div>
                                        </div>
                                    </div>
                                    <div class="col-sm">
                                        <div class="d-flex justify-content-sm-end">
                                            <Link :href="route('product.create')" class="btn btn-primary"
                                                id="addproduct-btn"><i class="ri-add-line align-bottom me-1"></i> Add
                                            Product</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="card-header">
                                <div class="row align-items-center">
                                    <div class="col">
                                        <ul class="nav nav-tabs-custom card-header-tabs border-bottom-0" role="tablist">
                                            <li class="nav-item">
                                                <a class="nav-link active fw-semibold" data-bs-toggle="tab"
                                                    href="#productnav-all" role="tab">
                                                    All Products<span
                                                        class="badge badge-soft-danger align-middle rounded-pill ms-1"
                                                        :class="prods.length > 0 ? 'text-danger' : 'text-white'">{{
                                                                prods.length
                                                        }}</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="col-auto">
                                        <div id="selection-element">
                                            <div class="my-n1 d-flex align-items-center text-muted">
                                                Select <div id="select-content" class="text-body fw-semibold px-1">
                                                </div> Result <button type="button"
                                                    class="btn btn-link link-danger p-0 ms-3" data-bs-toggle="modal"
                                                    data-bs-target="#removeItemModal">Remove</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- end card header -->
                            <div class="card-body">

                                <div class="tab-content text-muted">
                                    <div class="tab-pane active" id="productnav-all" role="tabpanel"
                                        v-if="prods.length > 0">
                                        <div id="table-product-list-all" class="table-card gridjs-border-none">
                                            <div role="complementary" class="gridjs gridjs-container"
                                                style="width: 100%;">
                                                <div class="table-responsive" style="height: auto;">
                                                    <table class="table table-striped table-hover">
                                                        <thead>
                                                            <tr class="gridjs-tr">
                                                                <th class="gridjs-th text-muted w-50">
                                                                    <div class="gridjs-th-content">Product</div>
                                                                </th>
                                                                <th class="gridjs-th text-muted"
                                                                    tabindex="0" style="width: 101px;">
                                                                    <div class="gridjs-th-content">Price(&#8358;)</div>
                                                                </th>
                                                                <th data-column-id="rating"
                                                                    class="gridjs-th text-muted"
                                                                    tabindex="0" style="width: 105px;">
                                                                    <div class="gridjs-th-content">Status</div>
                                                                </th>
                                                                <th data-column-id="published"
                                                                    class="gridjs-th text-muted"
                                                                    tabindex="0" style="width: 220px;">
                                                                    <div class="gridjs-th-content">Visibility</div>
                                                                </th>
                                                                <th data-column-id="published"
                                                                    class="gridjs-th text-muted"
                                                                    tabindex="0" style="width: 220px;">
                                                                    <div class="gridjs-th-content">Creation Date</div>
                                                                </th>
                                                                <th data-column-id="action" class="gridjs-th text-muted"
                                                                    style="width: 80px;">
                                                                    <div class="gridjs-th-content">Action</div>
                                                                </th>
                                                            </tr>
                                                        </thead>
                                                        <tbody class="gridjs-tbody">
                                                            <tr class="gridjs-tr" v-for="(p, index) in prods" :key="index">
                                                                <td class="gridjs-td">
                                                                    <span>
                                                                        <div class="d-flex align-items-center">
                                                                            <div class="flex-shrink-0 me-3">
                                                                                <div class="avatar-sm bg-light rounded p-1">
                                                                                    <img :src="p.thumbnails" alt="" class="img-fluid d-block">
                                                                                </div>
                                                                            </div>
                                                                            <div class="flex-grow-1">
                                                                                <h5 class="fs-14 mb-1">
                                                                                    <Link :href="`/account/product/view/${ p.id }`" class="text-dark">{{ p.product_name }}</Link>
                                                                                </h5>
                                                                            </div>
                                                                        </div>
                                                                    </span>
                                                                </td>
                                                                <td class="gridjs-td"><span>&#8358;{{ p.price }}</span></td>
                                                                <td class="gridjs-td">{{ $filters.capitalize(p.status) }}</td>
                                                                <td class="gridjs-td">{{ $filters.capitalize(p.visibility) }}</td>
                                                                <td class="gridjs-td">
                                                                    <span>{{ $filters.formatDate(p.created_at) }}</span>
                                                                </td>
                                                                <td data-column-id="action" class="gridjs-td"><span>
                                                                        <div class="dropdown"><button
                                                                                class="btn btn-soft-secondary btn-sm dropdown"
                                                                                type="button" data-bs-toggle="dropdown"
                                                                                aria-expanded="false"><i
                                                                                    class="ri-more-fill"></i></button>
                                                                            <ul class="dropdown-menu dropdown-menu-end">
                                                                                <li><Link class="dropdown-item"
                                                                                        :href="`/account/product/view/${ p.id }`"><i
                                                                                            class="ri-eye-fill align-bottom me-2 text-muted"></i>
                                                                                        View</Link></li>
                                                                                <li><Link class="dropdown-item edit-list"
                                                                                        :href="`/account/product/edit/${ p.id }`"><i
                                                                                            class="ri-pencil-fill align-bottom me-2 text-muted"></i>
                                                                                        Edit</Link></li>
                                                                            </ul>
                                                                        </div>
                                                                    </span></td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                                <div class="">
                                                    <Pagination class="mt-6" :links="l" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="tab-pane" id="productnav-all" role="tabpanel" v-else>
                                        <div class="py-4 text-center">
                                            <lord-icon src="https://cdn.lordicon.com/msoeawqm.json" trigger="loop"
                                                colors="primary:#405189,secondary:#0ab39c"
                                                style="width:72px;height:72px">
                                            </lord-icon>
                                            <h5 class="mt-4">Sorry! No Result Found</h5>
                                        </div>
                                    </div>
                                    <!-- end tab pane -->
                                </div>
                                <!-- end tab content -->

                            </div>
                            <!-- end card body -->
                        </div>
                        <!-- end card -->
                    </div>
                </div>
                <!-- end col -->
            </div>
            <!-- end row -->

        </div>
    </AuthenticatedLayout>
</template>