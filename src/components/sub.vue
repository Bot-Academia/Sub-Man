<template>
    <div class="container">
        <div class="sub">
            <h1>Chose your Service</h1>
            <hr>
            <br>

            <ul id="menu">
                <li v-for="name in logos" :key="name.id">
                    <img
                            :src="require('../assets/' + name)"
                            class="img-thumbnail"
                    /></li>
            </ul>
        </div>
        <br><br>
        <div class="bill">
            <h1>Your Subscriptions</h1>
            <hr>
            <b-table striped hover :items="subs"></b-table>

        </div>
        <br><br>
    </div>
</template>

<script>
    export default {
        name: "sub",
        data(){
            return {
                subs: [{
                    Service: 'Netflix',
                    Pack: '4-pack',
                    Plan: 'Monthly',
                    Cost: 800

                },
                    {
                        Service: 'Disney+',
                        Pack: '1-user',
                        Plan: 'Monthly',
                        Cost: 500
                }],
                logos: ["disney.jpg","hulu.png","netflix.jpg","prime.png"],
                monthly: 10,
                yearly: 120,
            };
        }
    }
</script>

<style scoped>
    .sub{
        background-color: rgba(34, 139, 230,0.5);
        text-align: center;
        border-radius: 15px;
        box-shadow: 10px 10px 54px -6px rgba(0, 0, 0, 0.75);
    }
    h1{
        margin: 15px 5px 15px 5px;
        text-align: center;
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
    ul#menu li {
        display:inline;
    }
    .bill{
        background-color: rgba(34, 139, 230,0.5);
        border-radius: 15px;
        box-shadow: 10px 10px 54px -6px rgba(0, 0, 0, 0.75);
    }
</style>