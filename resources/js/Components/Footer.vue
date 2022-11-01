<script setup>

const date = new Date()
const year = date.getFullYear();
</script>

<template>
    <footer class="custom-footer bg-dark py-4 position-relative">
        <div class="container">
            <div class="row">
                <div class="col-12 text-center">
                    <div>
                        <span>&copy; {{ year }}</span> <span class="fs-27 fw-medium text-danger">Ecommerce Store</span> - All Rights Reserved
                    </div>
                </div>

            </div>
        </div>
        </footer>
</template>
