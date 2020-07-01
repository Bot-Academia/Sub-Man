<template>
    <div class="container">
        <div class="box">
            <div class="row">
                <div class="col-sm bill-box">
                    <h3><span class="name">Name: {{name}} </span> </h3>
                </div>
                <div class="col-sm bill-box">
                   <h3> <span class="time">Time:{{ timestamp }}</span></h3>
                </div>
            </div>

        </div>
        <br><br>
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
        <div class="sub">
            <h1>Subscriptions</h1>
            <hr>
            <br>

            <ul>
                <li v-for="name in dcount" :key="name.id">
                    <img
                        :src="require('../assets/' + name.image)"
                        class="img-thumbnail"
                /></li>
            </ul>
    </div>
    </div>
</template>

<script>
    import {mapGetters} from "vuex";

    export default {
        name: "dash",
        data(){
            return {
                timestamp: "",
                name: 'Vinayak Sharma',
                month: [],
                year: [],
                monthly: 0,
                yearly: 0
            };
        },
        created() {
            setInterval(this.getNow, 1000);
            for(let i=0;i<this.dcount.length;i++){
                if(this.dcount[i].sub=='Monthly'){
                    this.month.push(this.dcount[i]);
                }else{
                    this.year.push(this.dcount[i]);
                }
            }
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
        },
        methods: {
            getNow: function() {
                const today = new Date();
                const date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
                const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
                const dateTime = date +' '+ time;
                this.timestamp = dateTime;
            }
        },
    computed: mapGetters([
        'dcount'
    ])
    }
</script>

<style scoped>

.bill,.sub{
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
    .img-thumbnail{
        border: 3px solid white;
        margin: 10px 10px 10px 10px;
        height: 100px;
        width: 100px;
    }
ul li {
    display:inline;
}
    .box{
        background-color: rgba(34, 139, 230,0.5);
        border-radius: 15px;
        box-shadow: 10px 10px 54px -6px rgba(0, 0, 0, 0.75);
        text-align: center;
    }
</style>