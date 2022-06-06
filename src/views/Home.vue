<template>
    <div class="home">
        <img src="../../public/logo_transparent.png"/>
        <h1>Better World Software</h1>
        <br>
        <h2><em>Software that is good - because it does good.</em></h2>
        <button @click="goToInternship" class="hire-btn">We are Hiring</button>
    
        <div class="col-text">
            <div class="col learn">
                <h3>Learn</h3>
                <p>Come learn with us. We are learning how to create the software that the world needs right now.</p>
            </div>

            <div class="col purpose">
                <h3>Purpose</h3>
                <p>We don't make games, we don't sell ads. We build software to create the world we want to live in.</p>
            </div>

            <div class="col community">
                <h3>Community</h3>
                <p>You will be surrounded by people who want to learn and want to serve, just like you!</p>
            </div>

        </div>
    
    
    
    </div>
</template>

<script>
export default {
    name: 'Home',
    methods: {
        goToInternship() {
            this.$router.push('/internship')
        }
    }
}
</script>

<style scoped>

/* .home > html, body {
    height: 100%;
} */
.home {
    display: flex;
    align-items: center;
    flex-direction: column;
    height: 100vh;
    margin: 25px 150px 5px 150px;
    padding-bottom: 100px;
    overflow: scroll;
    /* height: 700px; */
    /* background-color: purple; */
}

.home > img {
    border-radius: 50%;
}

.hire-btn {
    padding: 20px;
    margin: 25px;
    background-color: #195955;
    color: whitesmoke;
    border-radius: 12px;
    border: none;
    font-size: large;
    transition: transform .2s;
}

.dark .hire-btn {
    background-color: #588124;
}

.hire-btn:hover {
    transform: scale(1.05);
    /* box-shadow: 5px 5px 5px #588124; */
}

.col-text {
    display: flex;
    /* justify-content: space-between; */
    margin-top: 4em;
}

.col {
    flex-grow: 1;
    /* border: 1px solid black; */
    flex: 1 1 0px;
    margin: 0 1em 0 1em;
}
/* .col {
    padding: 5px;
    margin: 10px 20px 10px 20px;
} */

.col > p {
    margin-top: 15px;
    line-height: 25px;
}

@media only screen and (max-width: 799px) {
    .home {
        margin: .5em;
    }
    
    .col-text {
        display: inline;
    }

    .col {
        margin-bottom: 2em;
    }
}
</style>