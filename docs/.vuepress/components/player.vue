<template>
    
  <div class="player-container">
    
    <!-- <video width="560" height="240" controls> -->
         <video  controls>
        <source :src="file" type="video/mp4">
        Your browser does not support the video tag.
    </video> 

  </div>

</template>

<script>


export default {
    props : ['file'],
    
}
</script>