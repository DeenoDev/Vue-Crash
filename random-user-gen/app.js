const app = Vue.createApp({
    data(){
        return{
            firstName: 'John',
            lastName: 'Doe',
            email: 'john@gmail.com',
            gender: 'male',
            picture: 'https://randomuser.me/api/portraits/men/10.jpg',
        }
    },
    methods: {
        getUser(){
            this.firstName = 'Sam'
            this.lastName = 'Smith'
            this.email = 'sam@gmail.com'
            this.gender = 'female'
            this.picture = 'https://randomuser.me/api/portraits/female/10.jpg',
        },
    },
})

app.mount('#app');