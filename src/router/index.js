import Vue from 'vue'
import Router from 'vue-router'
import Home from './../components/Home'
import Login from './../components/Login'
import Test from './../components/Test'    //方元测试elementui

Vue.use(Router)

//工作台
import WorkbenchIndex from './../components/workbench/Index'


//统计
import StatisticsIndex from './../components/statistics/Index'

import PurchaseType from './../components/statistics/purchaseType/Index'

import Accounting from './../components/statistics/purchaseType/accounting/Index'
import GeneralLedger from './../components/statistics/purchaseType/accounting/generalLedger/Index'
import MarginCallsView from './../components/statistics/purchaseType/accounting/marginCallsView/Index'

import EnterpriseAssets from './../components/statistics/purchaseType/enterpriseAssets/Index'

import OrderAtatistics from './../components/statistics/purchaseType/orderAtatistics/Index'
import OrderView from './../components/statistics/purchaseType/orderAtatistics/orderView/Index'
import OrderTypeView from './../components/statistics/purchaseType/orderAtatistics/orderTypeView/Index'

import InvoicesAtatistics from './../components/statistics/purchaseType/invoicesAtatistics/Index'
import EntryInvoice from './../components/statistics/purchaseType/invoicesAtatistics/entryInvoice/Index'
import SettleInvoice from './../components/statistics/purchaseType/invoicesAtatistics/settleInvoice/Index'


import PartnersAssets from './../components/statistics/partnersAssets/Index'

import Inventory from './../components/statistics/inventory/Index'
import WarehouseOverview from './../components/statistics/inventory/warehouseOverview/Index'
import WarehouseQuery from './../components/statistics/inventory/warehouseQuery/Index'
import RiseAndLoss from './../components/statistics/inventory/riseAndLoss/Index'



//后台账户管理
import backstageAccountIndex from './../components/backstageAccount/Index'
//账户
import Account from './../components/backstageAccount/account/Account'
import AddAccount from './../components/backstageAccount/account/AddAccount'
import DeliveryChoice from './../components/backstageAccount/account/DeliveryChoice'
import EditAccount from './../components/backstageAccount/account/EditAccount'
import CheckAccount from './../components/backstageAccount/account/CheckAccount'
//角色
import Role from './../components/backstageAccount/role/Role'
import AddRole from './../components/backstageAccount/role/addRole'
import RoleAuthority from './../components/backstageAccount/role/RoleAuthority'
import RoleAuthoritySee from './../components/backstageAccount/role/RoleAuthoritySee'

import WarehousePower from './../components/backstageAccount/warehousePower/Index'
import WarehousePowerView from './../components/backstageAccount/warehousePower/WarehouseView'
import WarehousePowerEdit from './../components/backstageAccount/warehousePower/WarehouseEdit'

import BusinessManageIndex from './../components/backstageAccount/Index'

import BusinessManageUsersIndex from './../components/backstageAccount/businessManage/users/Index'

import BusinessManageUsersList from './../components/backstageAccount/businessManage/users/list/Index'
import BusinessManageUsersAttri from './../components/backstageAccount/businessManage/users/attri/Index'
import BusinessManageUsersSign from './../components/backstageAccount/businessManage/users/sign/Index'
import BusinessManageUsersBank from './../components/backstageAccount/businessManage/users/bank/Index'
import BusinessManageUsersInvoices from './../components/backstageAccount/businessManage/users/invoices/Index'
import BusinessManageUsersAdmittance from './../components/backstageAccount/businessManage/users/admittance/Index'
import BusinessManageUsersInviteBids from './../components/backstageAccount/businessManage/users/inviteBids/Index'
import BusinessManageUsersIncorrupt from './../components/backstageAccount/businessManage/users/incorrupt/Index'

import BusinessManageTransportIndex from './../components/backstageAccount/businessManage/transport/Index'
import BusinessManageTransportCompany from './../components/backstageAccount/businessManage/transport/company/Index'
import BusinessManageTransportBank from './../components/backstageAccount/businessManage/transport/bank/Index'

import BusinessManagePortsIndex from './../components/backstageAccount/businessManage/ports/Index'
import BusinessManagePortsCompany from './../components/backstageAccount/businessManage/ports/company/Index'
import BusinessManagePortsBank from './../components/backstageAccount/businessManage/ports/bank/Index'

import BusinessManageLaboratoryIndex from './../components/backstageAccount/businessManage/laboratory/Index'
import BusinessManageLaboratoryCompany from './../components/backstageAccount/businessManage/laboratory/company/Index'
import BusinessManageLaboratoryBank from './../components/backstageAccount/businessManage/laboratory/bank/Index'

import BusinessManageOthersIndex from './../components/backstageAccount/businessManage/others/Index'
import BusinessManageOthersCompany from './../components/backstageAccount/businessManage/others/company/Index'
import BusinessManageOthersBank from './../components/backstageAccount/businessManage/others/bank/Index'


//前台账户管理  frontAccounts
import FrontAccountsIndex from './../components/frontAccounts/Index'
import Users from './../components/frontAccounts/users/Users'
import Enterprise from './../components/frontAccounts/enterprise/Enterprise'
import Admittance from './../components/frontAccounts/admittance/Admittance'

//商品发布
import GoodsIndex from './../components/goods/Index'

import liftingWaterIndex from './../components/goods/liftingWater/Index'
import Release from './../components/goods/liftingWater/release/Index'
import ReleaseInquiry from './../components/goods/liftingWater/releaseInquiry/Index'
import HistoryInquiry from './../components/goods/liftingWater/historyInquiry/Index'

import Coal from './../components/goods/coal/Index'
import CloudPurchase from './../components/goods/cloudPurchase/Index'
import CloudSupply from './../components/goods/cloudSupply/Index'
import Price from './../components/goods/price/Index'
import Bidding from './../components/goods/bidding/Index'
import LockPrice from './../components/goods/lockPrice/Index'


//采购管理
import ProcurementIndex from './../components/procurement/Index'

import OrderIndex from './../components/procurement/order/Index'
import TotalOrder from './../components/procurement/order/totalOrder/Index'
import InviteBids from './../components/procurement/order/inviteBids/Index'
import PriceMonitor from './../components/procurement/order/priceMonitor/Index'

import SignManage from './../components/procurement/signManage/Index'

import WeighingIndex from './../components/procurement/weighing/Index'
import InboundInput from './../components/procurement/weighing/inboundInput/Index'
import InboundList from './../components/procurement/weighing/inboundList/Index'

import TestsIndex from './../components/procurement/tests/Index'
import TestsInput from './../components/procurement/tests/testsInput/Index'
import TestsList from './../components/procurement/tests/testsList/Index'

import RejectionIndex from './../components/procurement/rejection/Index'
import RejectionInput from './../components/procurement/rejection/rejectionInput/Index'
import RejectionList from './../components/procurement/rejection/rejectionList/Index'

import GoodsOwnershipIndex from './../components/procurement/goodsOwnership/Index'
import GoodsOwnershipInput from './../components/procurement/goodsOwnership/input/Index'
import GoodsOwnershipOrderList from './../components/procurement/goodsOwnership/orderList/Index'
import GoodsOwnershipBusinessList from './../components/procurement/goodsOwnership/businessList/Index'

import SettleManageIndex from './../components/procurement/settleManage/Index'
import SettleCreate from './../components/procurement/settleManage/settleCreate/Index'
import SettleList from './../components/procurement/settleManage/settleList/Index'


//款项管理
import MoneyIndex from './../components/money/Index'

import PaymentIndex from './../components/money/payment/Index'
import OrderPay from './../components/money/payment/orderPay/Index'
import CustomerPay from './../components/money/payment/customerPay/Index'

import Refunds from './../components/money/refunds/Index'
import OrderRefund from './../components/money/refunds/orderRefund/Index'
import CustomerRefund from './../components/money/refunds/customerRefund/Index'

import PartnersPayment from './../components/money/partnersPayment/Index'

import PartnersReceipts from './../components/money/partnersReceipts/Index'

import DepositManage from './../components/money/depositManage/Index'
import Dispose from './../components/money/depositManage/dispose/Index'
import DeductExpenses from './../components/money/depositManage/deductExpenses/Index'
import MarginCalls from './../components/money/depositManage/marginCalls/Index'

import PaymentBill from './../components/money/paymentBill/Index'

import Receivables from './../components/money/receivables/Index'

import AmortizeManage from './../components/money/amortizeManage/Index'
import ExpensesControl from './../components/money/amortizeManage/expensesControl/Index'
import ExpensesControlList from './../components/money/amortizeManage/list/Index'

//发票管理
import InvoicesIndex from './../components/invoices/Index'

import IncomeIndex from './../components/invoices/income/Index'
import IncomeBusiness from './../components/invoices/income/business/Index'
import IncomeNonBusiness from './../components/invoices/income/nonBusiness/Index'
import IncomeNonBusinesslist from './../components/invoices/income/list/Index'


//基础设置
import BasicSettingIndex from './../components/basicSetting/Index'

import PlatformSettingIndex from './../components/basicSetting/platformSetting/Index'

import BaseInfoSetting from './../components/basicSetting/platformSetting/baseInfoSetting/Index'
import BusinessType from './../components/basicSetting/platformSetting/baseInfoSetting/businessType/Index'
import BusinessTypeList from './../components/basicSetting/platformSetting/baseInfoSetting/businessType/businessTypeList/Index'
import BusinessTypeAdd from './../components/basicSetting/platformSetting/baseInfoSetting/businessType/businessTypeList/Add'
import Standard from './../components/basicSetting/platformSetting/baseInfoSetting/standard/Index'
import Delivery from './../components/basicSetting/platformSetting/baseInfoSetting/delivery/Index'
import Ratio from './../components/basicSetting/platformSetting/baseInfoSetting/ratio/Index'
import CostType from './../components/basicSetting/platformSetting/baseInfoSetting/costType/Index'
import PortCost from './../components/basicSetting/platformSetting/baseInfoSetting/portCost/Index'
import ShippingCost from './../components/basicSetting/platformSetting/baseInfoSetting/shippingCost/Index'
import TestsCost from './../components/basicSetting/platformSetting/baseInfoSetting/testsCost/Index'
import OthersCost from './../components/basicSetting/platformSetting/baseInfoSetting/othersCost/Index'
import OrderCost from './../components/basicSetting/platformSetting/baseInfoSetting/orderCost/Index'

import CoalType from './../components/basicSetting/platformSetting/coalType/Index'
import CoalBrand from './../components/basicSetting/platformSetting/coalType/coalBrand/Index'
import Category from './../components/basicSetting/platformSetting/coalType/category/Index'
import CategoryValue from './../components/basicSetting/platformSetting/coalType/categoryValue/Index'
import JydCoal from './../components/basicSetting/platformSetting/coalType/jydCoal/Index'
import BrandRelease from './../components/basicSetting/platformSetting/coalType/brandRelease/Index'

import FeaturedFirst from './../components/basicSetting/platformSetting/featuredFirst/Index'
import CoalMall from './../components/basicSetting/platformSetting/featuredFirst/coalMall/Index'
import SupplyBidding from './../components/basicSetting/platformSetting/featuredFirst/supplyBidding/Index'

import WarehouseManage from './../components/basicSetting/platformSetting/warehouseManage/Index'
import WarehouseManageOperate from './../components/basicSetting/platformSetting/warehouseManage/operate/Index'

import ContractTemplate from './../components/basicSetting/platformSetting/contractTemplate/Index'
import ContractTemplateOperate from './../components/basicSetting/platformSetting/contractTemplate/operate/Index'

import MessageSetting from './../components/basicSetting/platformSetting/messageSetting/Index'
import AppMsg from './../components/basicSetting/platformSetting/messageSetting/appMsg/Index'
import addAppMsg from './../components/basicSetting/platformSetting/messageSetting/appMsg/AddAppMsg'

import ApprovalSetting from './../components/basicSetting/platformSetting/approvalSetting/Index'
import ProcessSetting from './../components/basicSetting/platformSetting/approvalSetting/processSetting/Index'
import ProcessView from './../components/basicSetting/platformSetting/approvalSetting/processView/Index'
  

import ContentCurationIndex from './../components/basicSetting/contentCuration/Index'

import Cms from './../components/basicSetting/contentCuration/cms/Index'

import OpenAndCloseIndex from './../components/basicSetting/contentCuration/openAndClose/Index'
import Trade from './../components/basicSetting/contentCuration/openAndClose/trade/Index'
import ValenceOfVertex from './../components/basicSetting/contentCuration/openAndClose/valenceOfVertex/Index'
import NoticeInfo from './../components/basicSetting/contentCuration/noticeInfo/Index'

import ECommerceIndex from './../components/basicSetting/contentCuration/eCommerce/Index'
import Pithead from './../components/basicSetting/contentCuration/eCommerce/pithead/Index'
import Port from './../components/basicSetting/contentCuration/eCommerce/port/Index'
import CCIIndex from './../components/basicSetting/contentCuration/eCommerce/CCIIndex/Index'
import CCTDIndex from './../components/basicSetting/contentCuration/eCommerce/CCTDIndex/Index'
import BSPIIndex from './../components/basicSetting/contentCuration/eCommerce/BSPIIndex/Index'

import CarouselFigure from './../components/basicSetting/contentCuration/carouselFigure/Index'

import ActivityInfo from './../components/basicSetting/contentCuration/activityInfo/Index'

import AppIcons from './../components/basicSetting/contentCuration/appIcons/Index'


import AppBasicMaintenanceIndex from './../components/basicSetting/appBasicMaintenance/Index'
import AppScreen from './../components/basicSetting/appBasicMaintenance/appScreen/Index'
import AppVersion from './../components/basicSetting/appBasicMaintenance/appVersion/Index'


//sun
// import AppMessage from './../components/basicSetting/messageSetting/AppMessage'



//工作台
const workbench = {
	path: '/workbench',
	name: 'workbenchLink',
	component: WorkbenchIndex
} 

//统计
const statistics = {
	path: '/statistics',
	name: 'statisticsLink',
	component: StatisticsIndex,
	children: [
		{
			path: '/purchaseType',
			name: 'purchaseTypeLink',
			component: PurchaseType,
			children: [
				{      
					path: '/purchaseType/accounting',
					name: 'accountingLink',
					component: Accounting,
					children: [
						{      
							path: '/accounting/general',
							name: 'generalLedgerLink',
							component: GeneralLedger
						},
						{
							path: '/accounting/view',
							name: 'marginCallsViewLink',
							component: MarginCallsView
						}
					]
				},
				{
					path: '/purchaseType/assets',
					name: 'enterpriseAssetsLink',
					component: EnterpriseAssets
				},
				{
					path: '/purchaseType/order',
					name: 'orderAtatisticsLink',
					component: OrderAtatistics,
					children: [
						{      
							path: '/purchaseType/order/view',
							name: 'orderViewLink',
							component: OrderView
						},
						{
							path: '/purchaseType/order/typeView',
							name: 'orderTypeViewLink',
							component: OrderTypeView
						}
					]
				},
				{
					path: '/purchaseType/invoices',
					name: 'invoicesAtatisticsLink',
					component: InvoicesAtatistics,
					children: [
						{      
							path: '/purchaseType/invoices/entry',
							name: 'entryInvoiceLink',
							component: EntryInvoice
						},
						{
							path: '/purchaseType/invoices/settle',
							name: 'settleInvoiceLink',
							component: SettleInvoice
						}
					]
				}
			]
		},
		{      
			path: '/partnersAssets',
			name: 'partnersAssetsLink',
			component: PartnersAssets
		},
		{
			path: '/inventory',
			name: 'inventoryLink',
			component: Inventory,
			children: [
				{      
					path: '/inventory/ovewview',
					name: 'warehouseOverviewLink',
					component: WarehouseOverview
				},
				{
					path: '/inventory/query',
					name: 'warehouseQueryLink',
					component: WarehouseQuery
				},
				{
					path: '/inventory/riseAndLoss',
					name: 'riseAndLossLink',
					component: RiseAndLoss
				}
			]
		}
	]
} 

//后台账户管理
const backstageAccount = {
	path: '/backstage/account',
	name: 'backstageAccount',
	//redirect: '/backstageAccount/business',
	component: backstageAccountIndex,
	children: [
		{
			path: '/backstage/account',
			name: 'accountLink',
			component: Account
		}, 
		{
			path: '/backstage/addAccount',
			name: 'addAccountLink',
			component: AddAccount
		},
		{
			path: '/backstage/DeliveryChoice',
			name: 'DeliveryChoiceLink',
			component: DeliveryChoice
		},
		{
			path: '/backstage/editAccount',
			name: 'editAccountLink',
			component: EditAccount
		},
		{
			path: '/backstage/checkAccount',
			name: 'checkAccountLink',
			component: CheckAccount
		},
		{
			path: '/backstage/role',
			name: "role",
			component: Role
		},
		{
			path: '/backstage/addRole',
			name: "addRole",
			component: AddRole
		},
		{
			path: '/backstage/RoleAuthority',
			name: "roleAuthority",
			component: RoleAuthority,
		},
		{
			path: '/backstage/RoleAuthoritySee',
			name: "roleAuthoritySee",
			component: RoleAuthoritySee,
		},
		{
			path: '/backstage/warehouse',
			name: "warehousePowerLink",
			component: WarehousePower
		},
		{
			path: '/backstage/warehouse/view',
			name: "warehousePowerViewLink",
			component: WarehousePowerView
		},
		{
			path: '/backstage/warehouse/edit',
			name: "warehousePowerEditLink",
			component: WarehousePowerEdit
		},
		{
			path: '/backstage/business',
			name: 'businessLink',
			component: BusinessManageIndex,
			children: [
				{
					path: '/backstage/business/users',
					name: 'businessUserLink',
					component: BusinessManageUsersIndex,
					children: [
						{
							path: '/business/users/list',
							name: 'userslistLink',
							component: BusinessManageUsersList,
						},
						{
							path: '/business/users/attri',
							name: 'usersattriLink',
							component: BusinessManageUsersAttri,
						},
						{
							path: '/business/users/sign',
							name: 'userssignLink',
							component: BusinessManageUsersSign,
						},
						{
							path: '/business/users/bank',
							name: 'usersbankLink',
							component: BusinessManageUsersBank,
						},
						{
							path: '/business/users/invoices',
							name: 'usersinvoicesLink',
							component: BusinessManageUsersInvoices,
						},
						{
							path: '/business/users/admittance',
							name: 'usersadmittanceLink',
							component: BusinessManageUsersAdmittance,
						},
						{
							path: '/business/users/inviteBids',
							name: 'usersinviteBidsLink',
							component: BusinessManageUsersInviteBids,
						},
						{
							path: '/business/users/incorrupt',
							name: 'usersincorruptLink',
							component: BusinessManageUsersIncorrupt,
						}
					]
				},
				{
					path: '/backstage/business/transport',
					name: 'transportLink',
					component: BusinessManageTransportIndex,
					children: [
						{
							path: '/business/transport/company',
							name: 'transportCompanyLink',
							component: BusinessManageTransportCompany,
						},
						{
							path: '/business/transport/bank',
							name: 'transportBankLink',
							component: BusinessManageTransportBank,
						}
					]
				},
				{
					path: '/backstage/business/ports',
					name: 'portsLink',
					component: BusinessManagePortsIndex,
					children: [
						{
							path: '/business/ports/company',
							name: 'portsCompanyLink',
							component: BusinessManagePortsCompany,
						},
						{
							path: '/business/ports/bank',
							name: 'portsBankLink',
							component: BusinessManagePortsBank,
						}
					]
				},
				{
					path: '/backstage/business/laboratory',
					name: 'laboratoryLink',
					component: BusinessManageLaboratoryIndex,
					children: [
						{
							path: '/business/laboratory/company',
							name: 'laboratoryCompanyLink',
							component: BusinessManageLaboratoryCompany,
						},
						{
							path: '/business/laboratory/bank',
							name: 'laboratoryBankLink',
							component: BusinessManageLaboratoryBank,
						}
					]
				},
				{
					path: '/backstage/business/others',
					name: 'othersLink',
					component: BusinessManageOthersIndex,
					children: [
						{
							path: '/business/others/company',
							name: 'othersCompanyLink',
							component: BusinessManageOthersCompany,
						},
						{
							path: '/business/others/bank',
							name: 'othersBankLink',
							component: BusinessManageOthersBank,
						}
					]
				}
			]
		}

	]
}
//前台账户管理
const frontAccounts = {
	path: '/frontAccounts',
	name: 'frontAccountsLink',
	component: FrontAccountsIndex,
	children: [
		{
			path: '/frontAccounts/users',
			name: 'usersLink',
			component: Users
		},
		{
			path: '/frontAccounts/enterprise',
			name: 'enterpriseLink',
			component: Enterprise
		},
		{
			path: '/frontAccounts/admittance',
			name: 'admittanceLink',
			component: Admittance
		}
	]
}

//商品发布
const goods = {
	path: '/goods',
	name: 'goodsLink',
	component: GoodsIndex,
	children: [
		{
			path: '/goods/liftingWater',
			name: 'liftingWaterLink',
			component: liftingWaterIndex,
			children: [
				{      
					path: '/goods/release',
					name: 'releaseLink',
					component: Release
				},
				{
					path: '/goods/releaseInquiry',
					name: 'releaseInquiryLink',
					component: ReleaseInquiry
				},
				{
					path: '/goods/historyInquiry',
					name: 'historyInquiryLink',
					component: HistoryInquiry
				}
			]
		},
		{
			path: '/goods/coal',
			name: 'coalLink',
			component: Coal
		},
		{
			path: '/goods/cloudPurchase',
			name: 'cloudPurchaseLink',
			component: CloudPurchase
		},
		{
			path: '/goods/cloudSupply',
			name: 'cloudSupplyLink',
			component: CloudSupply
		},
		{
			path: '/goods/price',
			name: 'priceLink',
			component: Price
		},
		{
			path: '/goods/bidding',
			name: 'biddingLink',
			component: Bidding
		},
		{
			path: '/goods/lockPrice',
			name: 'lockPriceLink',
			component: LockPrice
		}        
	]
} 

//采购管理
const procurement = {  
	path: '/procurement',
	name: 'procurementLink',
	component: ProcurementIndex,
	children: [
		{
			path: '/order',
			name: 'orderLink',
			component: OrderIndex,
			children: [
				{      
					path: '/order/totalOrder',
					name: 'totalOrderLink',
					component: TotalOrder
				},
				{
					path: '/order/inviteBids',
					name: 'inviteBidsLink',
					component: InviteBids
				},
				{
					path: '/order/priceMonitor',
					name: 'priceMonitorLink',
					component: PriceMonitor
				}
			]
		},
		{
			path: '/signManage',
			name: 'signManageLink',
			component: SignManage
		},
		{
			path: '/weighing',
			name: 'weighingLink',
			component: WeighingIndex,
			children: [
				{      
					path: '/weighing/input',
					name: 'inboundInputLink',
					component: InboundInput
				},
				{
					path: '/weighing/list',
					name: 'inboundListLink',
					component: InboundList
				}
			]
		},
		{
			path: '/tests',
			name: 'testsLink',
			component: TestsIndex,
			children: [
				{      
					path: '/tests/input',
					name: 'testsInputLink',
					component: TestsInput
				},
				{
					path: '/tests/list',
					name: 'estsListLink',
					component: TestsList
				}
			]
		},
		{
			path: '/rejection',
			name: 'rejectionLink',
			component: RejectionIndex,
			children: [
				{      
					path: '/rejection/input',
					name: 'rejectionInputLink',
					component: RejectionInput
				},
				{
					path: '/rejection/list',
					name: 'rejectionListLink',
					component: RejectionList
				}
			]
		},
		{
			path: '/ownership',
			name: 'ownershipLink',
			component: GoodsOwnershipIndex,
			children: [
				{      
					path: '/ownership/input',
					name: 'inputLink',
					component: GoodsOwnershipInput
				},
				{
					path: '/ownership/orderList',
					name: 'orderListLink',
					component: GoodsOwnershipOrderList
				},
				{
					path: '/ownership/businessList',
					name: 'goodsOwnershipBusinessListLink',
					component: GoodsOwnershipBusinessList
				}
			]
		},
		{
			path: '/settle',
			name: 'settleManageLink',
			component: SettleManageIndex,
			children: [
				{      
					path: '/settle/create',
					name: 'settleCreateLink',
					component: SettleCreate
				},
				{
					path: '/settle/list',
					name: 'settleListLink',
					component: SettleList
				}
			]
		}

	]
} 

//款项管理
const payment = {
	path: '/money',
	name: 'moneyLink',
	component: MoneyIndex,
	children: [
		{
			path: '/payment',
			name: 'paymentLink',
			component: PaymentIndex,
			children: [
				{      
					path: '/payment/orderPay',
					name: 'orderPayLink',
					component: OrderPay
				},
				{
					path: '/payment/customerPay',
					name: 'customerPayLink',
					component: CustomerPay
				}
			]
		},
		{
			path: '/refunds',
			name: 'refundsLink',
			component: Refunds,
			children: [
				{      
					path: '/refunds/orderRefund',
					name: 'orderRefundLink',
					component: OrderRefund
				},
				{
					path: '/refunds/customerRefund',
					name: 'customerRefundLink',
					component: CustomerRefund
				}
			]
		},
		{
			path: '/partnersPayment',
			name: 'partnersPaymentLink',
			component: PartnersPayment
		},
		{
			path: '/partnersReceipts',
			name: 'partnersReceiptsLink',
			component: PartnersReceipts
		},
		{
			path: '/deposit',
			name: 'depositLink',
			component: DepositManage,
			children: [
				{      
					path: '/deposit/dispose',
					name: 'disposeLink',
					component: Dispose
				},
				{
					path: '/deposit/deductExpenses',
					name: 'deductExpensesLink',
					component: DeductExpenses
				},
				{
					path: '/deposit/marginCalls',
					name: 'marginCallsLink',
					component: MarginCalls
				}
			]
		},
		{
			path: '/paymentBill',
			name: 'paymentBillLink',
			component: PaymentBill
		},
		{
			path: '/receivables',
			name: 'receivablesLink',
			component: Receivables
		},
		{
			path: '/amortize',
			name: 'amortizeLink',
			component: AmortizeManage,
			children: [
				{      
					path: '/amortize/expensesControl',
					name: 'expensesControlLink',
					component: ExpensesControl
				},
				{
					path: '/amortize/list',
					name: 'expensesControlListLink',
					component: ExpensesControlList
				}
			]
		}
	]
} 

//发票管理
const invoices = {
	path: '/invoices',
	name: 'invoicesLink',
	component: InvoicesIndex,
	children: [
		{
			path: '/income',
			name: 'incomeLink',
			component: IncomeIndex,
			children: [
				{      
					path: '/income/business',
					name: 'incomeBusinessLink',
					component: IncomeBusiness
				},
				{
					path: '/income/nonBusiness',
					name: 'nonBusinessLink',
					component: IncomeNonBusiness
				},
				{
					path: '/income/list',
					name: 'incomeNonBusinesslistLink',
					component: IncomeNonBusinesslist
				}
			]
		}
	]
} 
//基础设置
const basicSetting = {
	path: '/basicSetting',
	name: 'basicSettingLink',
	component: BasicSettingIndex,
	children: [
		{
			path: '/platform',
			name: 'platformSettingLink',
			component: PlatformSettingIndex,
			children: [
				{      
					path: '/platform/baseInfo',
					name: 'baseInfoLink',
					component: BaseInfoSetting,
					children: [
						{      
							path: '/platform/baseInfo/businessType',
							name: 'businessTypeLink',
							component: BusinessType,
							children:[
								{
									path: '/platform/baseInfo/businessType/Index',
									name: 'BusinessTypeList',
									component: BusinessTypeList,
								},
								{
									path: '/platform/baseInfo/businessType/Add',
									name: 'BusinessTypeAdd',
									component: BusinessTypeAdd,
								}
							]
						},
						{
							path: '/platform/baseInfo/standard',
							name: 'standardLink',
							component: Standard
						},
						{
							path: '/platform/baseInfo/delivery',
							name: 'deliveryLink',
							component: Delivery
						},
						{
							path: '/platform/baseInfo/ratio',
							name: 'ratioLink',
							component: Ratio
						},
						{
							path: '/platform/baseInfo/costType',
							name: 'costTypeLink',
							component: CostType
						},
						{
							path: '/platform/baseInfo/portCost',
							name: 'portCostLink',
							component: PortCost
						},
						{
							path: '/platform/baseInfo/shippingCost',
							name: 'shippingCostLink',
							component: ShippingCost
						},
						{
							path: '/platform/baseInfo/testsCost',
							name: 'testsCostLink',
							component: TestsCost
						},
						{
							path: '/platform/baseInfo/othersCost',
							name: 'othersCostLink',
							component: OthersCost
						},
						{
							path: '/platform/baseInfo/orderCost',
							name: 'orderCostLink',
							component: OrderCost
						}
					]
				},                  
				{
					path: '/platform/coalType',
					name: 'coalTypeLink',
					component: CoalType,
					children: [
						{
							path: '/platform/coalType/coalBrand',
							name: 'coalBrandLink',
							component: CoalBrand
						},
						{
							path: '/platform/coalType/category',
							name: 'categoryLink',
							component: Category
						},
						{
							path: '/platform/coalType/categoryValue',
							name: 'categoryValueLink',
							component: CategoryValue
						},
						{
							path: '/platform/coalType/jydCoal',
							name: 'jydCoalLink',
							component: JydCoal
						},
						{
							path: '/platform/coalType/brandRelease',
							name: 'brandReleaseLink',
							component: BrandRelease
						}
					]
				},        
				{
					path: '/platform/featuredFirst',
					name: 'featuredFirstLink',
					component: FeaturedFirst,
					children: [
						{
							path: '/platform/featuredFirst/coalMall',
							name: 'coalMallLink',
							component: CoalMall
						},
						{
							path: '/platform/featuredFirst/supplyBidding',
							name: 'supplyBiddingLink',
							component: SupplyBidding
						}
					]
				},        
				{
					path: '/platform/warehouse',
					name: 'warehouseLink',
					component: WarehouseManage,
					children: [
						{
							path: '/platform/warehouse/operate',
							name: 'warehouseOperateLink',
							component: WarehouseManageOperate
						}
					]
				},        
				{
					path: '/platform/contract',
					name: 'contractLink',
					component: ContractTemplate,
					children: [
						{
							path: '/platform/contract/operate',
							name: 'contractOperateLink',
							component: ContractTemplateOperate
						}
					]
				},        
				{
					path: '/platform/message',
					name: 'messageLink',
					component: MessageSetting,
					children: [
						{
							path: '/platform/message/appMsg',
							name: 'appMsgLink',
							component: AppMsg
						},
						{
							path: '/platform/message/addAppMsg',
							name: 'addAppMsg',
							component: addAppMsg
						}
					]
				},        
				{
					path: '/platform/approval',
					name: 'approvalLink',
					component: ApprovalSetting,
					children: [
						{
							path: '/platform/approval/setting',
							name: 'asettingLink',
							component: ProcessSetting
						},
						{
							path: '/platform/approval/view',
							name: 'viewLink',
							component: ProcessSetting
						}
					]
				}
			]
		},
		{
			path: '/content',
			name: 'contentCurationLink',
			component: ContentCurationIndex,
			children: [
				{      
					path: '/content/cms',
					name: 'cmsLink',
					component: Cms
				},
				{
					path: '/content/openAndClose',
					name: 'openAndCloseLink',
					component: OpenAndCloseIndex,
					children: [
						{
							path: '/content/trade',
							name: 'tradeLink',
							component: Trade
						},
						{
							path: '/content/valenceOfVertex',
							name: 'valenceOfVertexLink',
							component: ValenceOfVertex
						}
					]
				},
				{
					path: '/content/noticeInfo',
					name: 'noticeInfoLink',
					component: NoticeInfo
				},
				{
					path: '/content/eCommerce',
					name: 'eCommerceLink',
					component: ECommerceIndex,
					children: [
						{
							path: '/content/eCommerce/pithead',
							name: 'pitheadLink',
							component: Pithead
						},
						{
							path: '/content/eCommerce/port',
							name: 'portLink',
							component: Port
						},
						{
							path: '/content/eCommerce/CCIIndex',
							name: 'CCIIndexLink',
							component: CCIIndex
						},
						{
							path: '/content/eCommerce/CCTDIndex',
							name: 'CCTDIndexLink',
							component: CCTDIndex
						},
						{
							path: '/content/eCommerce/BSPIIndex',
							name: 'BSPIIndexLink',
							component: BSPIIndex
						}
					]
				},
				{
					path: '/content/carouselFigure',
					name: 'carouselFigureLink',
					component: CarouselFigure
				},
				{
					path: '/content/activityInfo',
					name: 'activityInfoLink',
					component: ActivityInfo
				},
				{
					path: '/content/appIcons',
					name: 'appIconsLink',
					component: AppIcons
				},
				{
					path: '/content/list',
					name: 'nonBusinesslistLink',
					component: IncomeNonBusinesslist
				}
			]
		},
		{
			path: '/appBasic',
			name: 'appBasicMaintenanceLink',
			component: AppBasicMaintenanceIndex,
			children: [
				{      
					path: '/appBasic/appScreen',
					name: 'appScreenLink',
					component: AppScreen
				},
				{
					path: '/appBasic/appVersion',
					name: 'appVersionLink',
					component: AppVersion
				}
			]
		}
	]
} 

   
const test = {
	path: '/test',
	name: 'test',
	component: Test
}


const routes = [
	{
		path: '/',
		name: 'loginLink',
		component: Login
    },
	{
		path: '/home',
		name: 'homeLink',
		component: Home,
		children: [
			workbench,
			statistics,
			backstageAccount,
			frontAccounts,
			goods,
			procurement,
			payment,
			invoices,
			basicSetting,
			test			
		]
    },
    
]


export default new Router({
  mode: 'history',
  routes
})
