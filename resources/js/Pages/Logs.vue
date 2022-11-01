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
   { data: 'status'},
   { data: 'reason'},
   { data: 'code'},
   { data: 'ip'},
   { data: 'request_url'},
   { data: 'created_at'}
]

const options = {
      "ordering": false
   }

</script>

<script>
export default {
   data() {
      return {
         chartOptions: {plotOptions: {
              bar: {
                horizontal: false,
                columnWidth: '55%',
                endingShape: 'rounded'
              },
            },
        chart: {
          id: "vuechart-example",
          stacked: true,
        },
        xaxis: {
          categories: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        },
      },
      series: [
         
         {
            name: 'Success - 200',
            data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
          }, {
            name: 'Failed - Recaptcha Blocked (422)',
            data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
          }, {
            name: 'Failed - Rate Limit Blocked (429)',
            data: [35, 41, 36, 26, 45, 48, 52, 53, 41]
          }
      ],
      }
   },
   computed: {
      'all_logs.status': function() {
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

                    <!--div class="row">
                        <div class="col">
                           <div class="h-100">
                              <div class="card card-animate">
                                 <div class="card-body">
                                       <apexchart
                                       type="bar"
                                       :options="chartOptions"
                                       :series="series"
                                    ></apexchart>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div-->

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
