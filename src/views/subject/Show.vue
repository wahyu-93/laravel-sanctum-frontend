<template>
    <div class="container">
        <h4>{{ subject.name }}</h4>
        <hr>
        <post-block :endpoint="url" />    
    </div>
</template>

<script>

import PostBlock from '@/components/posts/Block'
import axios from 'axios'

export default {
    components: {
        PostBlock
    },

    data(){
        return {
            subject: [],
            url: `api/posts/subjects/${this.$route.params.subjectSlug}`
        }
    },

    mounted(){
        this.fetchSubject()
    },

    methods: {
        async fetchSubject(){
            let { data } = await axios.get(this.url)
            this.subject = data.subject
        }
    }
}
</script>