<script setup>
import AuthenticatedLayout from '@/Layouts/Authenticated.vue';
import { Head, useForm, Link } from '@inertiajs/inertia-vue3';
import Button from '@/Components/Button.vue';
import Input from '@/Components/Input.vue';
import Label from '@/Components/Label.vue';
import ValidationErrors from '@/Components/ValidationErrors.vue';
import { VueRecaptcha } from 'vue-recaptcha'
import { computed } from 'vue'
import { useToast } from "vue-toastification";

const siteKey = computed(() => '6LchQ48hAAAAAEsyZl3EQhkGFzWm-pMNSFvis-w2')
const toast = useToast();
</script>

<script>
export default {
   data() {
      return {
         form: {
            product_name: '',
            product_description: '',
            stocks: '',
            price: '',
            status: 'published',
            discount: 0,
            visibility: 'public',
            img: '',
            recaptcha: ''
         }
      }
   },

   methods: {
      async submit() {
         this.form.processing = true
         await axios.post(route('product.store'), this.form, {
            headers: {
               'Content-Type': 'multipart/form-data'
            }
            }).then((res) => {
               this.toast.success(res.data.message)
               this.form = {
                  product_description: '',
                  status: 'published',
                  discount: 0,
                  visibility: 'public',
                  product_name: '',
                  stocks: '',
                  price: '',
                  img: '',
                  recaptcha: ''
               }
               this.$refs.recaptcha.reset();
            }).catch((err) => {
               this.onCaptchaExpired()
               this.toast.error(err.response.data.message)
            })
               
         this.form.processing = false
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
   },
}
</script>
<template>

   <Head title="Create Product" />

   <AuthenticatedLayout>
      <div class="container-fluid">
         <!-- start page title -->
         <div class="row">
            <div class="col-12">
               <div class="page-title-box d-sm-flex align-items-center justify-content-between">
                  <h4 class="mb-sm-0">Create Product</h4>

                  <div class="page-title-right">
                     <ol class="breadcrumb m-0">
                        <li class="breadcrumb-item"><a href="javascript: void(0);">Ecommerce</a></li>
                        <li class="breadcrumb-item active">Create Product</li>
                     </ol>
                  </div>

               </div>
            </div>
         </div>
         <!-- end page title -->

         <form id="createproduct-form" autocomplete="off" class="needs-validation" novalidate @submit.prevent="submit">
            <div class="row">
               <div class="col-lg-8">
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
                                 <Input type="file" @input="form.img = $event.target.files[0]" class="form-control" required accept="image/png, image/gif, image/jpeg, image/jpg" />
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
                     <!-- end card body -->
                  </div>
                  <!-- end card -->
                  
                  
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
                     <Link :href="route('products')" class="btn btn-danger btn-lg w-md mx-2">Cancel</Link>
                  </div>
                  <!--div class="card">
                     <div class="card-header">
                        <h5 class="card-title mb-0">Product Categories</h5>
                     </div>
                     <div class="card-body">
                        <p class="text-muted mb-2">Select product category</p>
                        <select class="form-select" id="choices-category-input" name="choices-category-input"
                           data-choices data-choices-search-false v-model="form.category">
                           <option value="Appliances">Appliances</option>
                           <option value="Automotive Accessories">Automotive Accessories</option>
                           <option value="Electronics">Electronics</option>
                           <option value="Fashion">Fashion</option>
                           <option value="Furniture">Furniture</option>
                           <option value="Grocery">Grocery</option>
                           <option value="Kids">Kids</option>
                           <option value="Watches">Watches</option>
                        </select>
                     </div>
                     < end card body>
                  </div-->

               </div>
            </div>
            <!-- end row -->

         </form>

      </div>
   </AuthenticatedLayout>
</template>
