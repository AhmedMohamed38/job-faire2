import { ApiReqs } from "./ApiReqs.module.js";
import { ChartControler } from "./ChartControler.module.js";
import { Display } from "./display.module.js";
import { Helper } from "./Helper.module.js";

export class Home {
    constructor() {
        this.chartInstance = new ChartControler
        this.Display = new Display
        this.api = new ApiReqs
        this.helper = new Helper
        this.init()
    }
    init() {
        Promise.all([this.api.getTransactions(), this.api.getCustomers()]).then(([transactions, customers]) => {
            
            const groupedT = this.helper.groupTransactionByCustomers(transactions)
            const groupedC = this.helper.groupCustomersById(customers)
            const data = this.helper.addCustomerName(groupedT,groupedC)
            this.Display.onViewTable(data)
                

        })
    }


}