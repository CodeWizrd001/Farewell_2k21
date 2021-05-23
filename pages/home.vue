<template>
    <div class="container" id='bg'>
        <div id="bg">
            <Confession
                v-for="confession in confessions"
                :key="confession.id"
                :title="confession.title"
                :text="confession.text"
            />
            .<br>
            .<br>
            .<br>
            .<br>
            .<br>
            .<br>
            .<br>
            .<br>
            .<br>
            .<br>
            .<br>
            .<br>
            .<br>
            .<br>
            .<br>
            .<br>
            .<br>
            .<br>
            .<br>
            .<br>
            .<br>
            .<br>
            .<br>
            .<br>
            .<br>
            .<br>
            .<br>
            .<br>
            .<br>
            .<br>
            .<br>
            .<br>
            .<br>
            .<br>
            .<br>
            .<br>
            .<br>
            .<br>
            .<br>
            .<br>
            .<br>
            .<br>
        </div>
    </div>
</template>

<script>
import Confession from '@/components/Confession'
export default {
  components: {
    Confession
  },
  asyncData() {

  },
  data() {
    return {
      confessions: [
        {
          id: 0,
          title: 'Hello',
          text: 'World'
        },
        {
          id: 1,
          title: 'Hello1',
          text: 'World1'
        },
        {
          id: 2,
          title: 'Hello2',
          text: 'World2'
        },
        {
          id: 3,
          title: 'Hello3',
          text: 'World3'
        },
        {
          id: 4,
          title: 'Hello4',
          text: 'World4'
        }
      ]
    }
  }
}
</script>

<style>

#bg
{
    background-color:black;
    color:black;
}
</style>
