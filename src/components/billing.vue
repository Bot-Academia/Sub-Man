<template>
    <div class="container">
        <div class="bill">
            <h1>Billing</h1>
            <hr>
            <div class="container">
                <div class="row">
                    <div class="col-sm bill-box">
                        Monthly
                        <hr>
                        <br>
                        Amount: Rs{{monthly}}
                        <br><br>
                    </div>
                    <div class="col-sm bill-box">
                        Yearly
                        <hr>
                        <br>
                        Amount: Rs{{yearly}}
                        <br><br>
                    </div>
                </div>
            </div>

        </div>
        <br><br>


            <div class="container">
                <div class="row">
                    <div class="col-sm bill-box box">
                        <h2>Monthly Plans</h2>
                        <hr>
                        <br>
                        <b-table striped hover :items="month"></b-table>
                        <br><br>
                    </div>
                    <div class="col-sm bill-box box">
                        <h2>Yearly Plans</h2>
                        <hr>
                        <br>
                        <b-table striped hover :items="year"></b-table>
                        <br><br>
                    </div>
                </div>
            </div>



    </div>
</template>

<script>
    export default {
        name: "billing",
        data(){
            return {
                monthly: 0,
                yearly: 0,
                month: [{
                    name: 'Netflix',
                    cost: 800
                },
                    {
                        name: 'Disney',
                        cost: 500
                    }],
                year: [{
                    name: 'Prime',
                    cost: 1000
                },{
                    name: 'youtube',
                    cost: 1200
                }]
            };
        },
        created() {
            for(let i=0;i<this.month.length;i++){
                this.monthly+=this.month[i].cost;
            }
            for(let i=0;i<this.year.length;i++){
                this.monthly+=this.year[i].cost/12;
            }
            for(let i=0;i<this.year.length;i++){
                this.yearly+=this.year[i].cost;
            }
            for(let i=0;i<this.month.length;i++){
                this.yearly+=this.month[i].cost*12;
            }
            this.yearly=this.yearly.toFixed(2);
            this.monthly=this.monthly.toFixed(2);
        }
    }
</script>

<style scoped>
    .bill{
        background-color: rgba(34, 139, 230,0.5);
        text-align: center;
        border-radius: 15px;
        box-shadow: 10px 10px 54px -6px rgba(0, 0, 0, 0.75);
    }
    h1{
        margin: 15px 5px 15px 5px;
    }
    .bill-box{
        margin: 20px 20px 20px 20px;
        background-color: rgba(34, 139, 230,0.7);
        font-size: 24px;
        font-weight: 700;
        border: 3px solid lightblue;
        border-radius: 10px;
    }
    hr{
        margin-bottom: 5px;
        margin-top: 5px;
        width: 100% !important;
        background: lightblue;
        height: 5px;
    }
    h2 {
        margin: 5px 5px 5px 5px;
        text-align: center;
        font-weight: 700;
    }
    .box{
        box-shadow: 10px 10px 54px -6px rgba(0, 0, 0, 0.75);
    }
</style>