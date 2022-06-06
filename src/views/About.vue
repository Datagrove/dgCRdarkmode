<template>
    <div class="about">
        <div class="about-info">
            <h1>About Datagrove Costa Rica</h1>
            <div class="about-text">
                <p>We are a group of friends from different parts of the world dedicated to writing good software and working with good people. We don't just mean software that doesn't crash and doesn't invade people's privacy, although we love software that's reliable and trustworthy.</p>
                <br>
                <p>We mean software that <strong>is</strong> good because it <strong>does</strong> good.</p>
            </div>
        </div>

        <div class="bios-container">
            <div class="bios">
                <div class="bio-img">
                    <img src="/jh.jpeg" />
                </div>

                <div class="bio-text">
                    <h3><a href="https://twitter.com/imoldfella" target="_blank">Jim Hurd</a>, Programmer</h3>
                    <p>Wicked old programmer who learned on teletype machines and Radio Shack TRS-80 (Google it!). Still learning and still building code for the next generation. PL and Database nerd, crypto aficionado.</p>
                </div>
            </div>

            <div class="bios">
                <div class="bio-img">
                    <img src="/TDozier.jpeg" />
                </div>

                <div class="bio-text">
                    <h3><a href="https://twitter.com/datagrovecr" target="_blank">Tomás Dozier</a>, Costa Rica Country Director</h3>
                    <p>Director of EcoGuardianes, Educator</p>
                </div>
            </div>

            <div class="bios">
                <div class="bio-img">
                    <img src="/CDozier.jpeg" />
                </div>

                <div class="bio-text">
                    <h3><a href="https://twitter.com/datagrovecr" target="_blank">Chelsea Dozier</a>, San José Office Manager</h3>
                    <p>Educator</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'About',
    props: ['mode']
}
</script>

<style scoped>
.about {
    margin: 25px 150px 5px 150px;
    padding-bottom: 100px;
    /* min-width: 400px; */
}

.about-text {
    margin: 20px 0px 20px 0px;
    font-style: italic;
}
.bios-container {
    /* display: grid; */
    /* grid-template-columns: (5, 1fr); */
    /* grid-auto-rows: minmax(200px, auto); */
    /* background-color: aquamarine; */
    padding: 5px;
}

.bios {
    display: grid;
    grid-template-columns: 1fr 44fr;
    /* border: 1px solid black; */
    align-items: center;
    margin: 5px;
    /* background-color: coral; */
}

.bio-text {
    margin: 15px;
}

.bio-img > img {
    width: 200px;
    height: 200px;
    object-fit: cover;
    border-radius: 50%;
}

@media only screen and (max-width: 800px) {
    .about {
        margin: .5em;
        min-width: 340px;
    }

    .bios {
        display: inline;
    }

    .bio-text {
        max-width: 500px;
        min-width: 200px;
    }
}

</style>