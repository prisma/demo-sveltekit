<script lang="ts">
  import type { PageData } from "./$types";

  export let data: PageData;
  const { post } = data;
</script>

<div class="page">
  <main>
    <h2>{post.title}</h2>
    <p>{post.author?.name ? `By ${post.author.name}` : "Unknown author"}</p>
    <div>
      {@html post.content}
    </div>
    <form method="post" class="actions">
      {#if !post.published}
        <button formaction="?/publishPost">Publish</button>
      {/if}
      <button formaction="?/deletePost">Delete</button>
    </form>
  </main>
</div>

<style>
  .page {
    background: white;
    padding: 2rem;
  }

  .actions {
    margin-top: 2rem;
  }

  button {
    background: #ececec;
    border: 0;
    border-radius: 0.125rem;
    padding: 1rem 2rem;
  }

  button + button {
    margin-left: 1rem;
  }
</style>
