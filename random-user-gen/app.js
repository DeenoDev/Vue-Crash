const app = Vue.createApp({
    template: '<h1>{{firstName}}</h1>',
    data(){
        return{
            firstName: 'John'
        }
    }
})

app.mount('#app');