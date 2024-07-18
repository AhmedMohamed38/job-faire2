
let Instance;
export class ApiReqs {
    constructor(){
        if(Instance)return Instance
        Instance = this;
        this.cache = {}
        this.host ="https://6694c0494bd61d8314c87470.mockapi.io/api/Data/"
        
    }
    async getCustomers(){
        if(this.cache.customers )return this.cache.customers
        const response = await fetch(`${this.host}customers`)
        const data = await response.json()
        this.cache.customers = data
        return data
    }
    async getTransactions(){
        if(this.cache.transactions )return this.cache.transactions
        const response = await fetch(`${this.host}transactions`)
        const data = await response.json()
        this.cache.transactions = data
        return data

    }
    async getCustomerById(id){
        if(this.cache[`customer_${id}`] )return this.cache[`customer_${id}`]
        const response = await fetch(`${this.host}customers?id=${id}`)
        const data = await response.json()
        this.cache[`customer_${id}`] = data
        return data
    }
    async getTransactionsForCustomer(customer_id){
        if(this.cache[`tc_${customer_id}`] )return this.cache[`tc_${customer_id}`]
        const response = await fetch(`${this.host}transactions?customer_id=${customer_id}`)
        const data = await response.json()
        this.cache[`tc_${customer_id}`] = data
        return data
    }

} 