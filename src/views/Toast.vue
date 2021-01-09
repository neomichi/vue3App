<template>
    <div>
        <div class='custom-toast' style='display:none'>I did something!</div>
            <button>Do something!</button>
    </div>
</template>

<script>
export default {
    
}

$('button').click(function () {
    $('.toast').stop().fadeIn(400).delay(3000).fadeOut(500); //fade out after 3 seconds
});

$('.toast').stop().fadeIn(400).delay(3000).fadeOut(500);
</script>


<style lang="scss">

.custom-toast {
    width:200px;
    height:20px;
    height:auto;
    position:absolute;
    left:50%;
    margin-left:-100px;
    bottom:10px;
    background-color: #35bc7a;
    color: #F0F0F0;
    font-family: Calibri;
    font-size: 20px;
    padding:10px;
    text-align:center;
    border-radius: 7px;
    -webkit-box-shadow: 0px 0px 24px -1px rgba(56, 56, 56, 1);
    -moz-box-shadow: 0px 0px 24px -1px rgba(56, 56, 56, 1);
    box-shadow: 0px 0px 24px -1px rgba(56, 56, 56, 1);
}
</style>
