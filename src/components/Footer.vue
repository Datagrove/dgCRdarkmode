<template>
  <footer>
    
    <div class="footer">
        <h3>Datagrove Costa Rica</h3>
        <div class="footer-imgs">
          <a href="https://twitter.com/datagrovecr" target="_blank"><img src="/twitter_dkgrn.png" id="dk-twitter"></a>
          <a href="https://twitter.com/datagrovecr" target="_blank"><img src="/twitter_olive.png" id="olive-twitter" /></a>
        </div>
    </div>

  </footer>
</template>

<style scoped>

.footer {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 5px 25px 5px 25px;
    /* border: .5px solid black; */
    background: #C3C3C3;
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 75px;
}

.dark .footer {
  background: #15202B;
}

#olive-twitter {
  display: none;
}

.dark #olive-twitter {
  display: flex;
}

.dark #dk-twitter {
  display: none;
}

/* @media only screen and (max-width: 799px) {
  #olive-twitter {
    display: flex;
  }
} */

</style>