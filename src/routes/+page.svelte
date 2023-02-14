<script lang="ts">
  import Post from '$lib/components/Post.svelte'
  import type { PageData } from './$types'

  import data from "../lib/data.json"
</script>

<div>
  <h1>My Blog</h1>
  <main>
    <div>
      {#each data as post (post.id)}
        <Post {post} />
      {/each}
    </div>
  </main>
</div>
