
<!-- pタグの中にdivを入れることはNG。-->
<!-- サーバー側では以下のように変換される -->
<!-- <a class="Invalid A tag" href="https://www.google.com/">
  Hello
</a>
<div>
  <a class="Invalid A tag" href="https://www.google.com/">
  </a>
  <a href="https://www.youtube.com/">
    World
  </a>
</div> -->


<template>
		<a
  class="Invalid A tag"
  href="https://www.google.com/"
	>
		Hello
		<div>
			<a href="https://www.youtube.com/">
				World
			</a>
		</div>
	</a>
	<p class="Invalid P tag">
		<div>Bye World!!!!</div>
	</p>
</template>

<script setup></script>