<template>
    <div class="container">
        <div class="sub">
            <h1>Chose your Service</h1>
            <hr>
            <br>

            <ul id="menu">
                <li v-for="(loop,index)  in subman.logos" :key="loop.id1">
                    <img
                            :src="require('../assets/' + loop.img)"
                            class="img-thumbnail"
                            @click="add(index)"
                    />
                </li>
            </ul>
        </div>
        <br><br>
        <div class="bill" v-if="display">
            <img
                    :src="require('../assets/' + subman.logos[saved].img)"
                    class="img-thumbnail"
                    @click="add(index)"
            />
            <span class="title">{{ subman.logos[saved].name }}</span>
            <hr>
            <ul>
                <li v-for="(plan,index) in  subman.logos[saved].plans" :key="plan.id">
                    <b-form-group :label='plan.plan'>
                        <b-form-radio v-model="selected" name="some-radios" :value="index">{{plan.cost}}</b-form-radio>
                    </b-form-group>
                </li>
            </ul>
            <button class="btn btn-primary" @click="submit">Submit</button>
        </div>
        <br><br>
        <div class="bill">
            <h1>Your Subscriptions</h1>
            <hr>
            <b-table striped hover :items="$store.state.active"></b-table>

        </div>
        <br><br>

    </div>
</template>

<script>
    import { service } from "../services.js";
    export default {
        name: "sub",
        mixins: [service],
        data(){
            return {
                monthly: 10,
                yearly: 120,
                display: false,
                saved: '',
                selected: '',
                subs: []
            };
        },
        methods: {
            add(index) {
                this.display=true;
                this.saved=index;
            },
            submit() {
                var name=this.subman.logos[this.saved].name;
                var cost=this.subman.logos[this.saved].plans[this.selected].cost;
                var plan=this.subman.logos[this.saved].plans[this.selected].plan;
                var sub = '';

                if(this.subman.logos[this.saved].plans[this.selected].type===1){
                     sub='Monthly';
                }else{
                     sub='Yearly';
                }
                var addition = {
                    name,cost,plan,sub
                };
                this.$store.state.active.push(addition)
                this.display=false;
            }
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
    .title{
        font-size: 34px;
        font-weight: 700;
    }
</style>