<template>
    <div class="container">
       <div class="row">
           <div class="col-md-6">
                <div class="card mb-3" v-for="post in posts.data" :key="post.id">
                    <div class="card-header">{{ post.name }}</div>
                    
                    <div class="card-body">
                        {{ post.body }}
                        <div>
                            <router-link :to="{ name: 'post.show', params: {subjectSlug: post.subject.slug, postSlug: post.slug} }">
                                Read More 
                            </router-link>
                        </div>
                    </div>
                </div>

                <button class="btn btn-primary btn-sm" @click="loadMore" v-if="posts.hasMorePages">
                    <template v-if="loading">
                        Please Wait ...
                    </template>

                    <template v-else>
                        Load More
                    </template>
                </button>
           </div>
       </div>

    </div>
</template>

<script>
import axios from 'axios'

export default {
   data(){
       return{
           posts:[],
           perPage: 20,
           loading: false
       }
   },

   mounted(){
       this.fetchPosts()
   },

   methods: {
       async fetchPosts()
       {
           let response = await axios.get('/api/posts/', {
               params: { perPage: this.perPage }
           })
           this.loading = false
           this.posts = response.data
       },

       loadMore(){
           this.perPage += 20
           this.loading = true

           setTimeout(() => {
               this.fetchPosts()
           }, 1000);
       }
   }
}
</script>