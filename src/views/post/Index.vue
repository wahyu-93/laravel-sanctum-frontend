<template>
    <div class="container">
        <post-block endpoint="api/posts"  />
    </div>
</template>

<script>

import PostBlock from '@/components/posts/Block'

export default {
    components: {
        PostBlock
    }
}
</script>