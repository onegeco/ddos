<script setup>
import AuthenticatedLayout from '@/Layouts/Authenticated.vue'
import { Head, Link } from '@inertiajs/inertia-vue3'
import { computed } from 'vue';
import { usePage } from '@inertiajs/inertia-vue3';
import DataTable from 'datatables.net-vue3'
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)
const props = defineProps(['all_logs'])

const columns = [
   { data: 'status' },
   { data: 'reason' },
   { data: 'code' },
   { data: 'ip' },
   { data: 'request_url' },
   { data: 'created_at' }
]

const options = {
   "ordering": false
}
</script>

<script>
export default {
   data() {
      return {
         chartOptions: {
            chart: {
              height: 350,
              type: 'area'
            },
            dataLabels: {
              enabled: false
            },
            /*stroke: {
              show: true,
              width: 2,
              colors: ['transparent']
            },*/
            stroke: {
              curve: 'smooth'
            },
            legend: {
              tooltipHoverFormatter: function(val, opts) {
                return val + ' - ' + opts.w.globals.series[opts.seriesIndex][opts.dataPointIndex] + ''
              }
            },
            markers: {
              size: 0,
              hover: {
                sizeOffset: 6
              }
            },
            xaxis: {
               categories: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
            },
            //fill: {
              // colors: ['#0047AB', '#3A5F0B', '#800000']
            //}
         },
         series: [ {
               name: 'Failed - Recaptcha Blocked',
               data: [20, 15, 30, 78, 12, 5, 39]
            },
            {
               name: 'Successful requests',
               data: [55, 13, 50, 16, 61, 58, 27]
            }, {
               name: 'Failed - Rate Limit Blocked',
               data: [25, 72, 20, 6, 27, 37, 34]
            }
         ],
      }
   },
   computed: {
      'all_logs.status': function () {
         return "worked"
      }
   }
}
</script>

<template>
<Head title="Server Logs" />

<AuthenticatedLayout>
   <div class="container-fluid">

      <!-- start page title -->
      <div class="row">
         <div class="col-12">
            <div class="page-title-box d-sm-flex align-items-center justify-content-between">
               <h4 class="mb-sm-0">Server Logs</h4>
      
               <div class="page-title-right">
                  <ol class="breadcrumb m-0">
                     <li class="breadcrumb-item"><a href="javascript: void(0);">Admin</a></li>
                     <li class="breadcrumb-item active">Server Logs</li>
                  </ol>
               </div>
            </div>
         </div>
      </div>
      <!-- end page title -->
      
      <div class="row">
         <div class="col">
            <div class="h-100">
               <div class="card card-animate">
                  <div class="card-body">
                     <h1 class="fs-4 text-dark">Data Visualization</h1>
                     <apexchart type="area" :options="chartOptions" :series="series"></apexchart>
                  </div>
               </div>
            </div>
         </div>
                     </div>
                     
                     <div class="row">
                        <div class="col">
                           <div class="h-100">
                              <div class="card card-animate">
                                 <div class="card-body">
                                    <DataTable class="table-auto" width="100%" :data="all_logs" :columns="columns" :options="options">
                                       <thead>
                                          <tr>
                                             <th>Status</th>
                                             <th>Reason</th>
                                             <th>Code</th>
                                             <th>Request IP</th>
                                             <th>Request URL</th>
                                             <th>Request Date/Time</th>
                                          </tr>
                                       </thead>
                                    </DataTable>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                     </div>
               </AuthenticatedLayout>

</template>
