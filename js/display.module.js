import { ApiReqs } from "./ApiReqs.module.js";
import { ChartControler } from "./ChartControler.module.js"
import { Helper } from "./Helper.module.js";
import { Table } from "./table.module.js"
let Instance;
export class Display {

    constructor() {
        if (Instance) return Instance
        Instance = this
        this.table = new Table
        this.chart = new ChartControler
        this.api = new ApiReqs
        this.helper = new Helper
        this.inputEvent()

    }
    onViewChart() {
        document.querySelectorAll(".viewbtn").forEach((btn) => {
            btn.addEventListener("click", (e) => {
                const id = e.target.dataset.id
                const name = e.target.dataset.name
                this.api.getTransactionsForCustomer(id).then(data => {
                    this.chart.updateData(data.map(row => row.date), name, data.map(row => row.amount))
                })
            })
        })
    }

    onViewTable(data) {
        this.table.updateBody(data)
        this.onViewChart()
    }
    inputEvent() {
        document.getElementById("Name").addEventListener("keyup", (e) => {
            if (e.key == 'Enter'){
                Promise.all([this.api.getTransactions(), this.api.getCustomers()]).then(([transactions, customers]) => {
            
                    const groupedT = this.helper.groupTransactionByCustomers(transactions)
                    const groupedC = this.helper.groupCustomersById(customers)
                    const data = this.helper.addCustomerName(groupedT,groupedC)
                    console.log(data)
                    this.onViewTable(data.filter((value) => value.name.toLowerCase().includes(e.target.value.toLowerCase())))
                })
                
            }
        })
    }




}