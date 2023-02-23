<script lang="ts">
  import Post from '$lib/components/Post.svelte'
  import Data from "../lib/data.json"

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
