<template>
    <div class="container">
        <div class="row">
            <div class="col-md-6">Logo</div>
            <div class="col-md-6">
                <div class="card">
                    <div class="card-header">Login</div>
                    <div class="card-body">
                        <form method="POST" @submit.prevent="store">
                            <div class="form-group mb-3">
                                <label for="email">Email</label>
                                <input type="email" name="email" id="email" class="form-control" v-model="form.email">
                            </div>

                                <div class="form-group mb-3">
                                <label for="password">Password</label>
                                <input type="password" name="password" id="password" class="form-control" v-model="form.password">
                            </div>

                            <div class="form-group float-end">
                                <button class="btn btn-sm btn-primary" type="submit">Login</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import axios from 'axios'

export default {
    data(){
        return{
            form: {
                email: 'wahyu@gmail.com',
                password: 'wahyu1993'
            }
        }
    },
    
    methods:{
        async store(){
            await axios.get('sanctum/csrf-cookie')
            await axios.post('login', this.form)
            let user = await axios.get('api/user')
            
            console.log(user.data)
        }
    }
}
</script>
