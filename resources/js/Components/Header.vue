<script setup>
import { Head, Link } from '@inertiajs/inertia-vue3'
</script>

<template>
   <header id="page-topbar">
      <div class="layout-width">
         <div class="navbar-header">
            <div class="d-flex">
               <!-- LOGO -->
               <div class="navbar-brand-box horizontal-logo">  
                  <Link :href="route('home')" class="logo logo-light">
                    <span class="logo-lg">
                        <span class="fs-22 fw-medium text-white">Ecommerce Store</span>
                     </span>
                  </Link>
               </div>
               <button type="button" class="btn btn-sm px-3 fs-16 header-item vertical-menu-btn topnav-hamburger"
                  id="topnav-hamburger-icon">
                  <span class="hamburger-icon">
                     <span></span>
                     <span></span>
                     <span></span>
                  </span>
               </button>
            </div>

            <div class="d-flex align-items-center">

               <div class="dropdown topbar-head-dropdown ms-2 header-item">
                  <div data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-haspopup="true" aria-expanded="false" class="cursor-pointer">
                     <button type="button" class="btn btn-icon btn-topbar pl-10" id="page-header-cart-dropdown" >
                        <i class='bx bx-cart fs-22'></i>
                        <span class="position-absolute topbar-badge cartitem-badge fs-10 translate-middle badge rounded-pill bg-info">0</span>
                     </button> 
                  </div>
                  <div class="dropdown-menu dropdown-menu-xl dropdown-menu-end p-0 dropdown-menu-cart"
                     aria-labelledby="page-header-cart-dropdown">
                     <div class="p-3 border-top-0 border-start-0 border-end-0 border-dashed border">
                        <div class="row align-items-center">
                           <div class="col">
                              <h6 class="m-0 fs-16 fw-semibold"> My Cart</h6>
                           </div>
                           <div class="col-auto">
                              <span class="badge badge-soft-warning fs-13"><span class="cartitem-badge">0</span>
                                 items</span>
                           </div>
                        </div>
                     </div>
                     <div data-simplebar style="max-height: 300px;">
                        <div class="p-2">
                           <div class="text-center empty-cart" id="empty-cart">
                              <div class="avatar-md mx-auto my-3">
                                 <div class="avatar-title bg-soft-info text-info fs-36 rounded-circle">
                                    <i class='bx bx-cart'></i>
                                 </div>
                              </div>
                              <h5 class="mb-3">Your Cart is Empty!</h5>
                              <Link :href="route('home')" class="btn btn-primary w-md mb-3">Shop Now</Link>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>

               <div v-if="$page.props.auth.user" class="dropdown ms-sm-3 header-item topbar-user">
                  <button type="button" class="btn" id="page-header-user-dropdown" data-bs-toggle="dropdown"
                     aria-haspopup="true" aria-expanded="false">
                     <span class="d-flex align-items-center">
                        <span class="text-start ms-xl-2">
                           <span class="d-none d-xl-inline-block ms-1 fw-medium user-name-text">{{ $page.props.auth.user.account.name }}</span>
                           <span class="d-none d-xl-block ms-1 fs-12 text-muted user-name-sub-text">{{ $page.props.auth.user.email }}</span>
                        </span>
                     </span>
                  </button>
                  <div class="dropdown-menu dropdown-menu-end">
                     <!-- item-->
                     <Link class="dropdown-item" :href="route('dashboard')"><i
                           class="ri-dashboard-2-line text-muted fs-16 align-middle me-1"></i> <span
                           class="align-middle">Dashboard</span></Link>
                     <!--Link class="dropdown-item" :href="route('profile')"><i
                           class="mdi mdi-account-circle text-muted fs-16 align-middle me-1"></i> <span
                           class="align-middle">Profile</span></Link-->
                     <div class="dropdown-divider"></div>
                     <Link class="dropdown-item" :href="route('logout')" method="post">
                        <i class="mdi mdi-logout text-muted fs-16 align-middle me-1"></i> 
                        <span class="align-middle" data-key="t-logout">Logout</span>
                     </Link>
                  </div>
               </div>
               <div class="header-item ms-1" v-else>
                  <Link :href="route('login')" class="btn btn-danger ms-sm-3 w-md ">
                    LOGIN
                  </Link>
                  <Link :href="route('register')" class="btn text-white ms-sm-3 w-md">
                    REGISTER
                  </Link>
               </div>
            </div>
         </div>
      </div>
   </header>
</template>