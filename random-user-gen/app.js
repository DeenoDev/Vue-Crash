const app = Vue.createApp({
    data(){
        return{
            firstName: 'John',
            lastName: 'Doe',
            email: 'john@gmail.com',
            gender: 'male',
            picture: 'https://randomuser.me/api/portraits/men.jpg',
        }
    },
})

app.mount('#app');