
let Instance;
export class Helper {

    constructor() {
        if (Instance) {
            return Instance;
        }
        Instance = this;
        this.cache = {}


    }
    addCache(key, value) {
        this.cache[key] = value;
    }
    getCache(key) {
        return this.cache[key];
    }
    groupTransactionByCustomers(data) {
        return data.reduce((cumulative, curr, index) => {
            cumulative = {
                ...cumulative,
                [curr.customer_id]: {
                    customer_id: curr.customer_id,
                    amount: cumulative[curr.customer_id]?.amount ? cumulative[curr.customer_id].amount + curr.amount : curr.amount,
                }
            }
            return cumulative;
        }, {})

    }
    groupCustomersById(data) {
        return data.reduce((cumulative, curr, index) => {
            cumulative = {
                ...cumulative,
                [curr.id]: curr.name
            }
            return cumulative;
        }, {})
    }
    addCustomerName(transactions, customers) {
        return Object.entries(transactions).map(([key, value]) => {
            return {
                ...value,
                name: customers[key]?? "Deleted user"
            }
        })
    }
}