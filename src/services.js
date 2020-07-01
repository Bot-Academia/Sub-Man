export const service = {
    data(){
        return {
            subman: {
                logos: [
                    {
                        img:"netflix.jpg",
                        name: 'Netflix',
                        plans: [{
                            plan: 'Mobile',
                            cost: 199,
                            type: 1
                        },{
                            plan: 'Basic',
                            cost: 499,
                            type: 1
                        },{
                            plan: 'Standard',
                            cost: 649,
                            type: 1
                        },{
                            plan: 'Premium',
                            cost: 799,
                            type: 1
                        }],
                    },
                    {
                        img:"disney.jpg",
                        name: 'Disney+',
                        plans: [{
                            plan: 'Premium Year',
                            cost: 1499,
                            type: 2
                        },{
                            plan: 'Premium month',
                            cost: 299,
                            type: 1
                        },{
                            plan: 'Hotstar VIP',
                            cost: 399,
                            type: 2
                        }],
                    },
                    {
                        img:"zee5.jpeg",
                        name: 'Zee5',
                        plans: [{
                            plan: 'Year',
                            cost: 999,
                            type: 2
                        },{
                            plan: 'Month',
                            cost: 99,
                            type: 1
                        }],
                    },
                    {
                        img:"prime.png",
                        name: 'Amazon Prime',
                        plans: [{
                            plan: 'Prime Year',
                            cost: 999,
                            type: 2
                        },{
                            plan: 'Prime month',
                            cost: 129,
                            type: 1
                        }],
                    }],
                subs: [

                ],
            }
        };
    }
};