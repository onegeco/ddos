<script setup>
import Button from '@/Components/Button.vue'
import AuthLayout from '@/Layouts/Auth.vue'
import Input from '@/Components/Input.vue'
import Label from '@/Components/Label.vue'
import ValidationErrors from '@/Components/ValidationErrors.vue'
import { Head, Link, useForm } from '@inertiajs/inertia-vue3'
import { VueRecaptcha } from 'vue-recaptcha'
import { computed } from 'vue'
import { useToast } from "vue-toastification";

const siteKey = computed(() => '6LcfKw0jAAAAAGNrTEUGAYq-qWjcO9motYKJQF1k')
const toast = useToast();
</script>

<script>
export default {
    data() {
        return {
            form: {
                email: '',
                password: '',
                remember: false,
                recaptcha: '',
                processing: false
            }
        }
    },

    methods: {
        async submit() {
            this.form.processing = true
            this.$refs.recaptcha.reset();

            await axios.post(route('login'), this.form)
                .then((res) => {
                    //this.toast.success(res.data.message)
                    this.$swal({
                        title: 'Success',
                        text: res.data.message,
                        icon: 'success'
                    })
                    //window.location.reload()
                    this.$inertia.visit('/account/dashboard')
                })
                .catch((err) => {
                    this.form.processing = false
                    this.onCaptchaExpired()
                    this.$swal({
                        title: 'Error',
                        text: err.response.data.message,
                        icon: 'error'
                    })
            })
        },

        onCaptchaExpired() {
            this.$refs.recaptcha.reset();
        },

        handleError() {
            // Do some validation
        },

        handleSuccess(recaptchaToken) {
            this.form.recaptcha = recaptchaToken
        }
    }
}
</script>
<template>
    <AuthLayout>

        <Head title="Sign in" />
        <div class="row mt-5">
            <div class="col-lg-12">
                <div class="text-center mt-sm-5">
                    <div>
                        <Link :href="route('home')" class="d-inline-block auth-logo">
                            <span class="fs-22 fw-medium">Ecommerce Store</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>

        <div class="col-md-8 col-lg-6 col-xl-5">
            <div class="card mt-4">

                <div class="card-body p-4">
                    <div class="text-center mt-2">
                        <h5 class="text-primary">Sign In</h5>
                    </div>
                    <div class="p-2 mt-4">
                        <form class="needs-validation" novalidate @submit.prevent="submit">
                            <ValidationErrors class="mb-4" />
                            <div class="mb-3">
                                <Label for="email" value="Email" class="form-label" /> <span
                                    class="text-danger">*</span>
                                <Input id="email" type="email" class="form-control form-control-lg" v-model="form.email"
                                    required placeholder="Enter email address" />
                            </div>

                            <div class="mb-3">
                                <Label for="password-input" value="Password" class="form-label" /> <span
                                    class="text-danger">*</span>
                                <div class="position-relative auth-pass-inputgroup">
                                    <Input id="password-input" type="password"
                                        class="form-control pe-5 password-input form-control-lg" onpaste="return false"
                                        placeholder="Enter password" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                                        v-model="form.password" required aria-describedby="passwordInput"
                                        autocomplete="new-password" />
                                </div>
                            </div>
                            <div class="mb-3 text-center mx-auto">
                                <VueRecaptcha
                                    ref="recaptcha" 
                                    :sitekey="siteKey" 
                                    :loadRecaptchaScript="true"
                                    @verify="handleSuccess" 
                                    @error="handleError" />
                            </div>

                            <div class="mt-4">
                                <Button class="btn btn-primary btn-lg w-100" :class="{ 'opacity-25': form.processing }"
                                    :disabled="form.processing">
                                    Sign In
                                </Button>
                            </div>
                        </form>

                    </div>
                </div>
                <!-- end card body -->
            </div>
            <!-- end card -->

            <div class="mt-4 text-center">
                <p class="mb-0">Don't have an account ?
                    <Link :href="route('register')" class="fw-semibold text-primary text-decoration-underline"> Sign Up
                    </Link> <span class="px-2">&bullet;</span>
                    <Link :href="route('home')" class="fw-semibold text-primary text-decoration-underline"> Back to home
                    </Link>
                </p>
            </div>
        </div>
    </AuthLayout>
</template>
