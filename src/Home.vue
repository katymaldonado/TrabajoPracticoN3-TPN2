<template>
    <section>
        <h2>Trabajo Practico N° 3</h2>

        <div class="card">

            <div>
                <h5>Alumna:</h5>
                <p>Maldonado Garcia, Katherine</p>
            </div>

            <div>
                <h5>Profesor:</h5>
                <p> Sanchez, Daniel</p>
            </div>

            <div>
                <h5>Materia:</h5>
            <p>Taller de Nuevas Tecnologias 2</p>
            </div>

        </div>
    </section>
</template>

<script>
export default {
    name: 'Home',

}
</script>

<style scoped>
section{
    width: 60%;
text-align: center;
}
h5,p{
    display: inline;
    margin: 1%;
    
}
section div{
    display: flex;
    justify-content: center;
    margin: 2%;
    padding: 2%;
}
</style>