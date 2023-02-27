<script lang="ts">
  import Post from "$lib/components/Post.svelte";
  import Data from "../../lib/data.json";
</script>

<div>
  <h1>Drafts</h1>
  <main>
    <div>
      {#each Data as post (post.id)}
        {#if !post.published}
          <Post {post} />
        {/if}
      {/each}
    </div>
  </main>
</div>
