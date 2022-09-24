const app = Vue.createApp({
    template: ` <img :class="gender" v-bind:src="picture" /> 
                <h1>{{firstName}} {{lastName}}</h1> 
                <h3>Phone: {{phone}}</h3>
                <h3>Email: {{email}}</h3> 
                <button v-on:click="getUser()" :class="gender">Get Random User</button>`,
    data() {
        return {
            firstName: 'John',
            lastName: 'Doe',
            phone: '(545) 894-101-9511',
            email: 'john@gmail.com',
            gender: 'male',
            picture: 'https://randomuser.me/api/portraits/men/10.jpg'
        }
    },
    methods: {
        async getUser() {
            const res = await fetch('https://randomuser.me/api')
            const { results } = await res.json()

            this.firstName = results[0].name.first
            this.lastName = results[0].name.last
            this.phone = results[0].phone
            this.email = results[0].email
            this.gender = results[0].gender
            this.picture = results[0].picture.large
        }
    }
})

app.mount('#app')