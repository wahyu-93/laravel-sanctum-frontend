<template>
  <div class="container">
    <div class="row">
        <div class="col-md-6">
          <div class="alert alert-success mt-2" v-if="message">{{ message }}</div>
            <div class="card">
                <div class="card-header">New Post</div>
                <form action="" method="POST" @submit.prevent="simpan">
                    <div class="card-body">
                      <div class="form-group mb-3">
                        <label for="name">Title</label>
                        <input type="text" v-model="posts.name" id="name" class="form-control">

                        <div class="text-danger mt-2" v-if="errors.name">
                          <span>{{ errors.name[0] }}</span>
                        </div>
                      </div>

                      <div class="form-group mb-3">
                        <label for="subject">Subject</label>
                        <select v-model="posts.subject" id="subject" class="form-control">
                          <option value="" selected>Pilih Subject</option>
                          <option v-for="subject in subjects"  :value="subject.id" :key="subject.id">{{ subject.name }}</option>
                        </select>

                        <div class="text-danger mt-2" v-if="errors.subject">
                          <span>{{ errors.subject[0] }}</span>
                        </div>
                      </div>

                      <div class="form-group mb-3">
                        <label for="body">Body</label>
                        <textarea v-model="posts.body" id="body" rows="5" class="form-control" placeholder="Write Your Story . . ."></textarea>

                        <div class="text-danger mt-2" v-if="errors.body">
                          <span>{{ errors.body[0] }}</span>
                        </div>
                      </div>
                    </div>

                    <div class="card-footer">
                        <input type="submit" value="Create" class="btn btn-primary bnt-sm" >
                    </div>
                </form>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data(){
    return {
      subjects: [],
      message: '',
      errors: [],
      posts:{
        name: '',
        subject: '',
        body: ''
      }
    }
  },

  mounted(){
    document.title = "New Post"
    this.fetchSubjects()
    this.message = ''
  },

  methods: {
    async simpan(){
      try {
        let response = await axios.post('api/posts/create', this.posts)
        this.message = response.data.message  
        this.errors = []
        this.posts.name = ''
        this.posts.subject = ''
        this.posts.body = ''
      } catch (e) {
        this.errors = e.response.data.errors
      }
    },

    async fetchSubjects(){
      let response = await axios.get('/api/posts/subjects')
      this.subjects = response.data
    }
  }
}
</script>
