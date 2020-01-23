<template>
    <div class="Question-Box-Container"> 
    <b-jumbotron>
        
    <template v-slot:lead>
      {{currentQuestion.question}}
    </template>

    <hr class="my-4">

    <p>
      List of answers
    </p>

    <b-button variant="primary" href="#">Submit</b-button>
    <b-button variant="success" href="#" @click="next">
        Next
    </b-button>

    </b-jumbotron>
    </div>
</template>

<script>
export default {
    props:{
        currentQuestion:Object,
        next:Function
    },
}
</script>