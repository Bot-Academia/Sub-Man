<template>
    <div class="container">
        <div class="sub">
            <h1>Chose your Service</h1>
            <p>Click on the icon of streaming service and select your plan</p>
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
                        <b-form-radio v-model="selected" name="some-radios" :value="index">Cost: {{plan.cost}}</b-form-radio>
                    </b-form-group>
                </li>
            </ul>
            <div class="submit1">
                <button class="btn btn-primary" @click="submit">Submit</button>
            </div>

        </div>
        <br><br>
        <div class="bill">
            <h1>Your Subscriptions</h1>
            <hr>

            <b-table striped hover :items="$store.state.active" :fields="fields">
            </b-table>

        </div>
        <br><br>
        <div class="sub">
            <h1>Manage existing subscriptions</h1>
            <p>Click on the icon of subscription to remove it</p>
            <hr>
            <br>

            <ul>
                <li v-for="(name,index) in dcount" :key="name.id">
                    <img
                            :src="require('../assets/' + name.image)"
                            class="img-thumbnail"
                            @click="remove(index)"
                    /></li>
            </ul>
        </div>
    </div>
</template>

<script>
    import {mapGetters} from "vuex";
    import { service } from "../services.js";
    import axios from "axios";
    export default {
        name: "sub",
        mixins: [service],
        data(){
            return {
                fields:  [
                    {key: 'name'},
                    {key: 'cost', sortable: true},
                    {key: 'plan'},
                    {key: 'sub'},
        ],
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
                var image = this.subman.logos[this.saved].img;
                if(this.subman.logos[this.saved].plans[this.selected].type===1){
                     sub='Monthly';
                }else{
                     sub='Yearly';
                }
                var addition = {
                    name,cost,plan,sub,image
                };
                this.$store.state.active.push(addition)
                this.display=false;
                this.update();
            },
            remove(item) {
                this.$store.state.active.splice(item,1)
                this.update();
            },
            update(){
                let key=this.$route.params.id;
                axios.put(`https://sub-man-d4cdc-default-rtdb.firebaseio.com/user/${key}/active.json`,this.$store.state.active);
            }
        },
        computed: mapGetters([
            'dcount'
        ])
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
    ul li {
        display:inline;
    }
    .bill{
        background-color: rgba(34, 139, 230,0.5);
        border-radius: 15px;
        padding: 10px 10px 10px 10px;
        font-size: 24px;
        box-shadow: 10px 10px 54px -6px rgba(0, 0, 0, 0.75);
    }
    .title{
        font-size: 34px;
        font-weight: 700;
    }
    .submit1{
        text-align: center;
    }
</style>
