<script lang="ts">
  import Post from "$lib/components/Post.svelte";
  import data from "../../lib/data.json";
</script>

<div>
  <h1>Drafts</h1>
  <main>
    <div>
      {#each data as post (post.id)}
        {#if !post.published}
          <Post {post} />
        {/if}
      {/each}
    </div>
  </main>
</div>
