<template>
    <div class="container">
        <div class="row">
            <div class="col-md-8">
                <h1>{{ post.name }}</h1>
                
                <div class="text-secondary">
                    <router-link to="abc">{{ post.subject.name }}</router-link> &middot;
                    {{ post.publish }} by {{post.author }}
                </div>

                <hr>

                <div class="mt-2">
                    {{ post.body }}
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
            post:{
                subject: []
            }
        }
    },

    mounted(){
        this.fetchPost()
    },

    methods:{
        request($key){
            return this.$route.params[$key]
        },

        async fetchPost(){
            let { data } = await axios.get(`api/posts/${this.request('subjectSlug')}/${this.request('postSlug')}`)
            this.post = data.data
            console.log(this.post)
        }
    }

}
</script>