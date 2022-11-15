<script setup>
import AuthenticatedLayout from '@/Layouts/Authenticated.vue';
import Button from '@/Components/Button.vue';
import Input from '@/Components/Input.vue';
import Label from '@/Components/Label.vue';
import ValidationErrors from '@/Components/ValidationErrors.vue';
import { computed } from 'vue';
import { Head, useForm, Link, usePage } from '@inertiajs/inertia-vue3';
import { VueRecaptcha } from 'vue-recaptcha'
import { useToast } from "vue-toastification";

const siteKey = computed(() => '6Lf_vAwjAAAAAO2pfIzKw1Fjxl6_kPCKeXiEoUpY')
const toast = useToast();

const props = defineProps(['product'])

const prod = computed(() => usePage().props.value.product)

</script>
<script>
export default {
   data() {
      return {
         form: {
            product_id: this.prod.id,
            product_name: this.prod.product_name,
            product_description: this.prod.product_description,
            stocks: this.prod.quantity,
            price: this.prod.price,
            status: this.prod.status,
            discount: this.prod.discount,
            visibility: this.prod.visibility,
            img: '',
            recaptcha: '',
            processing: false
         }
      }
   },

   methods: {
      async submit() {
         this.form.processing = true
         await axios.post(route('product.update'), this.form, {
            headers: {
               'Content-Type': 'multipart/form-data'
            }
            }).then((res) => {
               this.toast.success(res.data.message)
               this.form.processing = false
               this.$refs.form.reset()    
               this.$refs.recaptcha.reset();              
            }).catch((err) => {
               this.onCaptchaExpired()
               this.toast.error(err.response.data.message)
               this.form.processing = false
            })
      },

      onCaptchaExpired() {
         this.$refs.recaptcha.reset();
      },

      handleError() {
         // Do some validation
      },

      async handleSuccess(recaptchaToken) {
         this.form.recaptcha = recaptchaToken
      }
   }
}
</script>

<template>

   <Head title="Edit Product" />

   <AuthenticatedLayout>
      <div class="container-fluid">
         <div class="row">
            <div class="col-12">
               <div class="page-title-box d-sm-flex align-items-center justify-content-between">
                  <h4 class="mb-sm-0">Edit Product</h4>

                  <div class="page-title-right">
                     <ol class="breadcrumb m-0">
                        <li class="breadcrumb-item"><a href="javascript: void(0);">Ecommerce</a></li>
                        <li class="breadcrumb-item active">Edit Product</li>
                     </ol>
                  </div>

               </div>
            </div>
         </div>

         <form id="createproduct-form" autocomplete="off" class="needs-validation" novalidate @submit.prevent="submit">
            <div class="row">
               <div class="col-lg-8">
                  <ValidationErrors class="mb-4" />
                  <div class="card">
                     <div class="card-body">
                        <div class="mb-3">
                           <Label for="product-title-input" value="Product Name" class="form-label" />
                           <Input id="product-title-input" type="text" class="form-control" v-model="form.product_name"
                              required placeholder="Enter product title" />
                        </div>
                        <div class="mb-3">
                           <Label for="product-description" value="Product Description" class="form-label" />
                           <textarea rows="5" cols="" class="form-control" id="product-description"
                              placeholder="Enter product description" v-model="form.product_description"></textarea>
                        </div>
                        <div class="row">
                           <div class="col-lg-4 col-sm-6">
                              <div class="mb-3">
                                 <Label for="stocks-input" value="In Stock / Quantity" class="form-label" />
                                 <Input id="stocks-input" type="text" class="form-control" v-model="form.stocks" required placeholder="Total stocks" />
                              </div>
                           </div>
                           <div class="col-lg-4 col-sm-6">
                              <div class="mb-3">
                                 <Label for="product-price-input" value="Price" class="form-label" />
                                 <div class="input-group mb-3">
                                    <span class="input-group-text" id="product-price-addon">&#8358;</span>
                                    <Input id="product-price-input" type="text" class="form-control" v-model="form.price" required placeholder="Enter price" aria-label="Price"
                                       aria-describedby="product-price-addon" />
                                 </div>

                              </div>
                           </div>
                           <div class="col-lg-4 col-sm-6">
                              <div class="mb-3">
                                 <Label for="product-discount-input" value="Discount" class="form-label" />
                                 <div class="input-group mb-3">
                                    <span class="input-group-text" id="product-discount-addon">%</span>
                                    <Input id="product-discount-input" type="text" class="form-control" v-model="form.discount" required placeholder="Enter discount" aria-label="discount"
                                       aria-describedby="product-discount-addon" />
                                 </div>
                              </div>
                           </div>
                           <!-- end col -->
                        </div>
                     </div>
                  </div>
                  <!-- end card -->

                  <div class="card">
                     <div class="card-header">
                        <h5 class="card-title mb-0">Product Gallery</h5>
                     </div>
                     <div class="card-body">
                        <div class="mb-4">
                           <h5 class="fs-14 mb-1">Product Image</h5>
                           <p class="text-muted">Add Product main Image.</p>
                           <div class="text-center">
                                 <Input type="file" @input="form.img = $event.target.files[0]" class="form-control" required accept="image/png, image/gif, image/jpeg" />
                                 <progress v-if="form.progress" :value="form.progress.percentage" max="100">{{ form.progress.percentage }}%</progress>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>

               <div class="col-lg-4">

                  <div class="card">
                     <div class="card-header">
                        <h5 class="card-title mb-0">Publish</h5>
                     </div>
                     <div class="card-body">
                        <div class="mb-3">
                           <label for="choices-publish-status-input" class="form-label">Status</label>

                           <select class="form-select" id="choices-publish-status-input" data-choices
                              data-choices-search-false v-model="form.status">
                              <option value="published" selected>Published</option>
                              <option value="scheduled">Scheduled</option>
                              <option value="draft">Draft</option>
                           </select>
                        </div>
                        <div>
                           <label for="choices-publish-visibility-input" class="form-label">Visibility</label>
                           <select class="form-select" id="choices-publish-visibility-input" data-choices
                              data-choices-search-false v-model="form.visibility">
                              <option value="public" selected>Public</option>
                              <option value="hidden">Hidden</option>
                           </select>
                        </div>
                     </div>
                  </div>
                  
                  <div class="mb-3 text-center mx-auto">
                     <VueRecaptcha 
                        ref="recaptcha" 
                        :sitekey="siteKey" 
                        :loadRecaptchaScript="true"
                        @verify="handleSuccess" 
                        @error="handleError"/>
                  </div>
                  <div class="text-end mb-3">
                     <Button class="btn btn-primary btn-lg w-md" :class="{ 'opacity-25': form.processing }"
                        :disabled="form.processing">
                        Submit
                     </Button>
                     <Link :href="`/account/product/view/${ prod.id }`" class="btn btn-danger btn-lg w-md mx-2">Cancel</Link>
                  </div>
               </div>
            </div>
         </form>
      </div>
   </AuthenticatedLayout>
</template>
