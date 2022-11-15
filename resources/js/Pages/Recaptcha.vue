<script setup>
import { Head, Link, useForm, usePage } from '@inertiajs/inertia-vue3';
import Header from '@/Components/Header.vue'
import Footer from '@/Components/Footer.vue'
import Input from '@/Components/Input.vue'
import Button from '@/Components/Button.vue'
import Label from '@/Components/Label.vue'
import { computed } from 'vue';
import { VueRecaptcha } from 'vue-recaptcha'
import { useToast } from "vue-toastification";

const props = defineProps(['domain_url'])

const siteKey = computed(() => '6Lf_vAwjAAAAAO2pfIzKw1Fjxl6_kPCKeXiEoUpY')
const toast = useToast();
</script>

<script>
export default {
   data() {
      return {
         isfetching: false,
         responses: [],
         isdoneFetching: false,
         form: {
            domain_url: this.domain_url + '/api/',
            endpoint: 'all-products',
            packets: '',
            recaptcha: ''
         }
      }
   },

   methods: {

      async submit() {
         this.form.processing = true
         for(let a = 0; a < this.form.packets; a++) {
            await axios.post('/api/' + this.form.endpoint, this.form).then((res) => {
               let response = res.data
               this.responses.push(response)
            }).catch((err) => {
               if(err.response.status == 404) {
                  let response = {"message": "Api resource not found on this server", "status": 404}
                  this.responses.push(response)
                  a = this.form.packets
               }
               
               let response = {
                  message: err.response.data.message,
                  status: 422,
                  ip: 'blocked'
               }
               this.responses.push(response)
               this.isfetching = false
               this.isdoneFetching = true
            });
            
            if((a + 1) >= this.form.packets) {
               this.isdoneFetching = true
            }
            if(a <= this.form.packets) {
               this.isfetching = true
            }
         } 

         this.$refs.recaptcha.reset();
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

   mounted() {
      
      console.log('6Lf_vAwjAAAAAO2pfIzKw1Fjxl6_kPCKeXiEoUpY')
         const element = document.getElementById("code_view");
         element.scrollIntoView(false);
   },
}
</script>

<template>
   <Head title="Testing DDOS Attack" />
   <div class="layout-wrapper">
      <Header />
      <div class="auth-page-wrapper">
         <div class="auth-page-content">
            <div class="container">
               <div class="pt-5">
                  <div class="row mt-5">
                        <div class="col-lg-12">
                           <div class="mt-sm-5">
                              <div>
                                    <Link :href="route('test.recaptcha')" class="d-inline-block auth-logo">
                                    <span class="fs-22 fw-medium">Test HTTP flood attack | Approach 1: Google reCaptcha </span>
                                    </Link>
                              </div>
                           </div>
                           <div class="mt-3 fs-14">
                              <p>To reduce the action of BOTs on our server we have added google recaptcha challenge to requests on our server. 
                                 Each request made to our server requires a valid recaptcha token that expires after every request. Since we are stimulating a BOT action on our server only the first reqeust to our server is validated, any subsequent request made to our server gets regected due to invalid recaptcha and is logged on our system for admins. This way we can prevent the action of BOTs (HTTP flooding) on our server. </p>
                           </div>
                        </div>
                  </div>
                  <div class="row">
                     <div class="col-md-9 col-lg-6 col-xl-5">
                        <div class="card mt-4">
                           <div class="card-body p-md-4">
                                 <div class="p-2">
                                    <form class="needs-validation" @submit.prevent="submit">
                                       <div class="mb-4">
                                          <Label for="url" value="Request URL" class="form-label fs-16 text-muted" /> <span class="text-danger">*</span>
                                          <div class="input-group">
                                             <span class="input-group-text text-nowrap" id="basic-addon3" style="width: 15.4rem">{{ form.domain_url }}</span>
                                             <Input type="text" class="form-control form-control-lg" required id="url" v-model="form.endpoint" placeholder="all-products" aria-describedby="basic-addon3" />
                                          </div>
                                       </div>
                                       <div class="mb-4">
                                          <Label for="packets" value="Number of Requests/Packets to be sent" class="form-label fs-16 text-muted" /> <span class="text-danger">*</span>
                                          <div class="position-relative auth-pass-inputgroup">
                                             <Input id="packets" type="number" min="1" class="form-control form-control-lg" v-model="form.packets" required />
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

                                       <div class="row">
                                          <div class="col-md-6 mb-3">
                                             <Button class="fs-15 form-control form-control-lg" type="submit" :class="{ 'opacity-25': isfetching }"
                                                   :disabled="isfetching">
                                                   Initiate
                                             </Button>
                                          </div>
                                          <div class="col-md-6">
                                             <Button class="fs-15 bg-danger form-control form-control-lg" type="button" :class="{ 'opacity-25': !isfetching }"
                                                   :disabled="!isfetching" @click.prevent="responses = []; isfetching = false; form.packets = ''; isdoneFetching = false">
                                                   Reset Request
                                             </Button>
                                          </div>
                                       </div>
                                    </form>

                              </div>
                           </div>
                           <!-- end card body -->
                        </div>
                     </div>
                     <div class="col-md-9 col-lg-6 col-xl-7">
                        <div class="card bg-dark mt-4">
                           <div class="card-body p-4 overflow-auto">
                              <div class="fs-12 w-100  overflow-auto" id="code_view" style="height: 350px;">
                                 <div v-if="responses.length > 0">
                                    <div v-for="(r, index) in responses" :key="index" class="mb-2">
                                       <span class="text-white">[root ~ #{{ index + 1 }} $]</span> <span :class="r.status == 200 ? 'text-success' : 'text-danger'">{{r.message }}</span> <small class="text-muted text-xs">----</small> <span class="text-warning">["Status" => {{ r.status }}]</span> <span class="text-warning" v-if="r.ip">["Request IP Address" => {{ r.ip }}]</span>
                                    </div>
                                 </div>
                                 <div v-else>
                                    <span class="text-white">[root ~ $]</span> <span class="text-muted">click on Initiate button to start attack</span>
                                 </div>
                              </div>
                           </div>
                           <!-- end card body -->
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
</template>