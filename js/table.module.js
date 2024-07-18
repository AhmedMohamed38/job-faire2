
let Instance;
export class Table {

    constructor() {

        if (Instance) {
            return Instance;
        }
        Instance = this
        this.table = document.getElementById('table');
        this.tableHead = document.getElementById('tableHead');
        this.tableBody = document.getElementById('tableBody');



    }
    updateBody(data) {
        this.tableBody.innerHTML = data.map((row, index) => {
            
            return `<tr>
            <td class="fs-5">${row.name}</td>
            <td class="fs-5">${row.amount}</td>
            <td  class="fs-5">
            <button data-id='${row.customer_id}' data-name='${row.name}' class="btn btn-primary viewbtn">View</button>
            </td></tr>`


        }).join("")

    }



}