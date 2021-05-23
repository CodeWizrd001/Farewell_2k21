<template>
    <div id="abs" class="circle">
        <b-card
            :title="title"
            img-src="https://picsum.photos/600/300/?image=25"
            img-alt="Image"
            img-top
            tag="article"
            class="mb-2"
        >
            <b-card-text>
                {{ text }}
            </b-card-text>

            <b-button href="#" variant="primary">
                Go somewhere
            </b-button>
        </b-card>
    </div>
</template>

<script>
export default {
  props: {
    title: String,
    text: String
  }
}
</script>

<style>
$startAngle: random(10) ;
$endAngle: random(10) ;

@keyframes rotation {
  0% {
    transform: rotate3d(0, -1, -0.6, 50deg);
  }
  25% {
    transform: rotate3d(0deg);
  }
  50% {
    transform: rotate3d(0, 1, 0.6, 50deg);
  }
  75% {
    transform: rotate3d(0deg);
  }
  100% {
    transform: rotate3d(0, -1, -0.6, 50deg);
  }
}

.circle {
  width: 16em;
  height: 16em;
  border-radius: 50%;
  background: linear-gradient(36deg, #272b66 42.34%, transparent 42.34%) 0 0;
  background-repeat: no-repeat;
  background-size: 50% 50%;
}

#abs
{
    position: absolute;
    display:flex;
    left:35%;
    animation:rotation 3s infinite linear;
}
</style>
