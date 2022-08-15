<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">Alfatih</a>
            
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">   
                        <router-link class="nav-link" aria-current="page" to="/" exact>Home</router-link>
                    </li>

                     <li class="nav-item">   
                        <router-link class="nav-link" aria-current="page" :to="{ name: 'post.index' }" >Post</router-link>
                    </li>
                </ul>

                <ul class="navbar-nav mr-right mb-2 mb-lg-0">                    
                    <template v-if="!authenticated">
                        <li class="nav-item">   
                            <router-link class="nav-link" aria-current="page" :to="{ name: 'auth.login' }">Login</router-link>
                        </li>
                    </template>

                    <template v-else>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Wahyudi
                            </a>
                            <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                                <li><router-link class="dropdown-item" :to="{name: 'post.new'}">New Post</router-link></li>
                                <li><a class="dropdown-item" href="#">Another action</a></li>
                                <li><hr class="dropdown-divider"></li>
                                <li><a class="dropdown-item" href="#" @click.prevent="logout">logout</a></li>
                            </ul>
                        </li>
                    </template>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
    import { mapGetters, mapActions } from 'vuex'

    export default{
        computed: {
            ...mapGetters({
                authenticated : 'auth/authenticated',
                user : 'auth/user'
            })
        },

        methods: {
            ...mapActions({
                signout: 'auth/logout'
            }),

            async logout(){
               await this.signout()
               this.$router.replace('/login')
            }
        }
    }
</script>   