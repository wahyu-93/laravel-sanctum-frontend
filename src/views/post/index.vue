<template>
    <div class="container">
       <div class="row">
           <div class="col-md-6">
                <div class="card mb-3" v-for="post in posts" :key="post.id">
                    <div class="card-header">{{ post.name }}</div>
                    
                    <div class="card-body">
                        {{ post.body }}
                        <div>
                            <router-link to="adv">
                                Read More 
                            </router-link>
                        </div>
                    </div>
                </div>

                <button class="btn btn-primary btn-sm">Load Mode</button>
           </div>
       </div>

    </div>
</template>

<script>
import axios from 'axios'

export default {
   data(){
       return{
           posts:[]
       }
   },

   mounted(){
       this.fetchPosts()
   },

   methods: {
       async fetchPosts()
       {
           let response = await axios.get('/api/posts/')
           this.posts = response.data.data
       }
   }
}
</script>