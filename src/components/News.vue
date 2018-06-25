<template>
    <b-container>
            <p class="compressed-title">Para ficar por dentro das noticias, curta nossa página no Facebook!</p>
                <center>
                    <div class="fb-page" data-href="https://www.facebook.com/pg/focuscursinho" data-tabs="timeline" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true"><blockquote cite="https://www.facebook.com/pg/focuscursinho" class="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/pg/focuscursinho">Focus Cursinho</a></blockquote></div>
                </center>
    </b-container>
</template>

<script>
export default {
    mounted() {
        (function(d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) return;
            js = d.createElement(s); js.id = id;
            js.src = 'https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.0';
            fjs.parentNode.insertBefore(js, fjs);
            }(document, 'script', 'facebook-jssdk'));
    }
}
    

</script>

<style lang='scss'>
@import '../custom-bootstrap.scss';
.compressed-title{
    font-size: 20px;
    padding: 0 40px 0 40px;
    margin: 20px 0 20px 0;
    text-align: center;
}

@media (max-width: 800px){
    .compressed-title{
        padding: 0 10px 0 10px;
    }
}
</style>
