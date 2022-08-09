<template>
  <div class="container">
    <div class="row">
        <div class="col-md-6">
            <div class="card">
                <div class="card-header">New Post</div>
                <form action="" method="POST" @submit.prevent="">
                    <div class="card-body">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit at ullam labore iure saepe eos dicta numquam? Perspiciatis, consequatur magnam ullam ad architecto itaque deleniti repellat, officiis laboriosam consequuntur iure!
                        Sequi libero corporis architecto ex dolor inventore similique vitae, mollitia distinctio quas, quos animi tenetur, quis ab. Deleniti dignissimos, commodi provident veniam nemo magnam quisquam, amet veritatis autem nisi porro.
                    </div>

                    <div class="card-footer">
                        <input type="submit" value="Create" class="btn btn-primary bnt-sm">
                    </div>
                </form>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'New',
  mounted(){
    document.title = "New Post"
  },
}
</script>
