<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
            <RouterLink class="navbar-brand" to="/home">Home</RouterLink>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                    <RouterLink class="nav-link active" aria-current="page" to="/formulario">Formulario</RouterLink>
                    <RouterLink class="nav-link" to="/lista-usuarios">Listado</RouterLink>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    name: 'Navegador',
    props: [],
    data() {
        return {
        }
    },
    methods: {

    },
    computed: {

    }
}
</script>

<style lang="scss" scoped></style>