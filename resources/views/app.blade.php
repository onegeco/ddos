<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" data-layout="vertical" data-topbar="dark" data-sidebar="default" data-sidebar-size="lg" data-sidebar-image="none" data-layout-mode="light" data-layout-width="fluid" data-layout-position="fixed" data-layout-style="detached"><head>    
<head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests">
        
        <title inertia>{{ config('app.name', 'Ecommerce Store') }}</title>

        <!-- Fonts -->
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap">
        
        <link href="/assets/css/icons.min.css" rel="stylesheet" type="text/css" />
        <link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/v/dt/dt-1.12.1/datatables.min.css"/>
        <!-- Scripts -->
        @routes
        @vite('resources/js/app.js')
        @inertiaHead
    </head>
    <body class="font-sans antialiased" data-bs-spy="scroll">
        @inertia

        <!-- js files -->
        <!-- Layout config Js -->
        <script src="/assets/libs/bootstrap/js/bootstrap.bundle.min.js"></script>
        <script src="/assets/libs/simplebar/simplebar.min.js"></script>
        <script src="/assets/js/layout.js"></script>
        <script src="/assets/libs/node-waves/waves.min.js"></script>
        <script src="/assets/libs/feather-icons/feather.min.js"></script>
        <script src="/assets/js/pages/plugins/lord-icon-2.1.0.js"></script>
        <script src="/assets/js/plugins.js"></script>

        <!--Swiper slider js-->
        <script src="/assets/libs/swiper/swiper-bundle.min.js"></script>
        <script src="/assets/libs/gridjs/gridjs.umd.js"></script>
        <script src="/assets/libs/dropzone/dropzone-min.js"></script>
        <script src="/assets/js/app.js"></script>
    </body>
</html>
