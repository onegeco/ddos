<script setup>
import { Link } from '@inertiajs/inertia-vue3'
import Header from '../Components/Header.vue'
import Footer from '../Components/Footer.vue'

const date = new Date()
const year = date.getFullYear()

</script>

<script>
export default {
    created() {
        var scripts = [
            "/assets/js/app.js",
            "/assets/libs/simplebar/simplebar.min.js",
            "/assets/js/layout.js",
            "/assets/libs/node-waves/waves.min.js",
            "/assets/libs/feather-icons/feather.min.js",
            "https://cdn.lordicon.com/xdjxvujz.js",
            "/assets/libs/swiper/swiper-bundle.min.js"
        ];

        scripts.forEach(script => {
            let tag = document.createElement("script");
            tag.setAttribute("src", script);
            document.head.appendChild(tag);
        });
    }
}
</script>

<template>
    <div id="layout-wrapper">
<Header />
<!-- ========== App Menu ========== -->
        <div class="app-menu navbar-menu">
            <!-- LOGO -->
            <div class="navbar-brand-box">
                <Link :href="route('home')" class="logo logo-light">
                    <span class="logo-lg">
                        <span class="fs-22 fw-medium text-white">Ecommerce Store</span>
                     </span>
                  </Link>
                <button type="button" class="whitespace-nowrap btn btn-sm p-0 fs-20 header-item float-end btn-vertical-sm-hover" id="vertical-hover">
                    <i class="ri-record-circle-line"></i>
                </button>
            </div>

            <div id="scrollbar">
                <div class="container-fluid">

                    <div id="two-column-menu">
                    </div>
                    <ul class="navbar-nav" id="navbar-nav">
                        <li class="menu-title"><span data-key="t-menu">Menu</span></li>
                        <li class="nav-item">
                            <Link class="nav-link menu-link" :href="route('dashboard')">
                                <i class="ri-dashboard-2-line"></i> <span data-key="t-dashboards">Dashboard</span>
                            </Link>
                        </li> <!-- end Dashboard Menu -->
                        <li class="nav-item">
                            <Link class="nav-link menu-link" :href="route('products')">
                                <i class="ri-apps-2-line"></i> <span data-key="t-apps">Products</span>
                            </Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link menu-link" :href="route('logs')">
                                <i class="ri-file-paper-2-line"></i> <span data-key="t-logs">View Server Logs</span>
                            </Link>
                        </li>
                        <!--li class="menu-title"><i class="ri-more-fill"></i> <span data-key="t-pages">Account</span></li-->

                        <li class="nav-item">
                            <Link class="nav-link menu-link" :href="route('test.recaptcha')">
                                <i class="ri-pencil-line"></i> <span data-key="t-authentication">ReCaptcha Test Page</span>
                            </Link>
                        </li>

                        <li class="nav-item">
                            <Link class="nav-link menu-link" :href="route('test.rla')">
                                <i class="ri-quill-pen-line"></i> <span data-key="t-authentication">Rate Limiting Test Page</span>
                            </Link>
                        </li>

                        <!--li class="nav-item">
                            <Link class="nav-link menu-link" :href="route('logout')" method="post">
                                <i class="bx bx-log-out"></i> <span data-key="t-widgets">Logout</span>
                            </Link>
                        </li-->

                    </ul>
                </div>
                <!-- Sidebar -->
            </div>

            <div class="sidebar-background"></div>
        </div>
        <!-- Left Sidebar End -->
        <!-- Vertical Overlay-->
        <div class="vertical-overlay"></div>
    <div class="main-content">
        <div class="page-content">
            <slot />
        </div>

        <footer class="footer">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-sm-6">
                        {{ year }}
                    </div>
                    <div class="col-sm-6">
                        <div class="text-sm-end d-none d-sm-block">
                            Ecommerce Store - All Rights Reserved
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    </div>
</div>
</template>
