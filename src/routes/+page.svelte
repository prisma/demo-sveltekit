<script lang="ts">
  import Post from '$lib/components/Post.svelte'
  // import type { PageData } from './$types'
  import Data from "../lib/data.json"
  
  // data returned from +page.server.js


</script>

<div>
  <h1>My Blog</h1>
  <main>
    <div>
      {#each Data as post (post.id)}
        <Post {post} />
      {/each}
    </div>
  </main>
</div>
