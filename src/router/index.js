import { createRouter, createWebHistory } from 'vue-router'
import DashboardView from '../views/DashboardView.vue'
import DashboardView2 from '../views/DashboardView.vue'
import DriverView from '../views/DriverView.vue'
import LiveDriverView from '../views/LiveDriverView.vue'
import PayNotice from '../views/PayNotice.vue'
import indxView from '../views/indxView.vue'
import AssignedVehicleView from '../views/AssignedVehicleView.vue'
import CompleteCorporateRentalView from '../views/CompleteCorporateRentalView.vue'
import CorporateListView from '../views/CoporateListView.vue'
import CreatedBackatedRView from '../views/CreatedBackatedRView.vue'
import CreateCoporateRentalView from '../views/CreateCoporateRentalView.vue'
import RentalNotesVIew from '../views/RentalNotesVIew.vue'
import TransactionView from '../views/TransactionView.vue'
import UpdateCorporationView from '../views/UpdateCorporationView.vue'
import VehiclesView from '../views/VehiclesView.vue'
import VehicleTrackerView from '../views/VehicleTrackerView.vue'
import VehicleQrView from '../views/VehicleQrView.vue'
import VehiclesPpsrView from '../views/VehiclesPpsrView.vue'
import VehicleCReportView from '../views/VehicleCReportView.vue'
import MaintenanceListView from '../views/MaintenanceListView.vue'
import MaintenanceWorkView from '../views/MaintenanceWorkView.vue'
import TicketView from '@/views/TicketView.vue'
import AddTicket from '@/views/AddTicket.vue'
import InfragmentOutView from '@/views/InfragmentOutView.vue'
import InfragmentNomView from '@/views/InfragmentNomView.vue'
import InfragmentView from '@/views/InfragmentView.vue'
import TollNoticeView from '@/views/TollNoticeView.vue'
import OutInvoiceView from '@/views/OutInvoiceView.vue'
import StatementView from '@/views/StatementView.vue'
import ReportView from '@/views/ReportView.vue'
import AssetsListView from '@/views/AssetsListView.vue'
import AddAssetView from '@/views/AddAssetView.vue'
import ReservCalanderView from '@/views/ReservCalanderView.vue'
import MonthlyStatementView from '@/views/MonthlyStatementView.vue'
// import MonthlyStatementView from '@/views/'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'DashboardView',
      component: DashboardView
    },
    {
      path: '/dashboard',
      name: 'DashboardView2',
      component: DashboardView2
    },
    {
      path: '/driverdetail',
      name: 'DriverDetailView',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/DriverDetailView.vue')
    },
    {
      path: '/driver',
      name: 'DriverView',
      component: DriverView
    },
    {
      path: '/livedriver',
      name: 'LiveDriverView',
      component: LiveDriverView
    },

    {
      path: '/paynotice',
      name: 'PayNoticeView',
      component: PayNotice
    },
    {
      path: '/indx',
      name: 'indxView',
      component: indxView
    },
    {
      path: '/assignedvehicle',
      name: 'AssignedVehicleView',
      component: AssignedVehicleView
    },
    {
      path: '/completecorporaterental',
      name: 'CompleteCoeporateRentalView',
      component: CompleteCorporateRentalView
    },
    {
      path: '/coporatelist',
      name: 'CorporateListView',
      component: CorporateListView
    },
    {
      path: '/createdbackdated',
      name: 'CreatedBackatedRView',
      component: CreatedBackatedRView
    },
    {
      path: '/createcorporaterental',
      name: ' CreateCoporateRentalView',
      component: CreateCoporateRentalView
    },
    {
      path: '/rentalnotes',
      name: ' RentalNotesVIew',
      component: RentalNotesVIew
    },
    {
      path: '/transaction',
      name: ' TransactionView',
      component: TransactionView
    },
    {
      path: '/updatecorporation',
      name: 'UpdateCorporationView',
      component: UpdateCorporationView
    },
    {
      path: '/vehicle',
      name: 'VehivlesView',
      component: VehiclesView
    },
    {
      path: '/vehicletracker',
      name: 'VehivleTrackerView',
      component: VehicleTrackerView
    },
    {
      path: '/vehicleqr',
      name: 'VehivleQrView',
      component: VehicleQrView
    },
    {
      path: '/vehicleppsr',
      name: 'VehiclesPpsrView',
      component: VehiclesPpsrView
    },
    {
      path: '/vehiclecondtion',
      name: 'VehicleCReportView',
      component: VehicleCReportView
    },
    {
      path: '/maintenancelist',
      name: 'MaintenanceListView',
      component: MaintenanceListView
    },
    {
      path: '/maintenancework',
      name: 'MaintenanceWorkView',
      component: MaintenanceWorkView
    },
    {
      path: '/ticket',
      name: 'TicketView',
      component: TicketView
    },
    {
      path: '/addticket',
      name: 'AddTicket',
      component: AddTicket
    },
    {
      path: '/infragmentout',
      name: 'InfragmentOutView',
      component: InfragmentOutView
    },
    {
      path: '/infragmentnom',
      name: 'InfragmentNomView',
      component: InfragmentNomView
    },
    {
      path: '/infragment',
      name: 'InfragmentView',
      component: InfragmentView
    },
    {
      path: '/tollnotice',
      name: 'TollNoticeView',
      component: TollNoticeView
    },
    {
      path: '/outinvoice',
      name: 'OutInvoiceView',
      component: OutInvoiceView
    },
    {
      path: '/statement',
      name: 'StatementView',
      component: StatementView
    },
    {
      path: '/report',
      name: 'ReportView',
      component: ReportView
    },
    {
      path: '/assetlist',
      name: 'AssetsListView',
      component: AssetsListView
    },
    {
      path: '/addasset',
      name: 'AddAssetView',
      component: AddAssetView
    },
    {
      path: '/reservation',
      name: 'ReservCalanderView',
      component: ReservCalanderView
    },
    {
      path: '/monthlystatement',
      name: 'MonthlyStatementView',
      component: MonthlyStatementView
    }
  ]
})

export default router
