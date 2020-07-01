<template>
    <div class="footer" id="footers">
        <a href="https://github.com/vinayaksh42/Sub-Man" id="logo"
        ><i class="fa fa-github" aria-hidden="true"></i
        ></a>
        <p>
            Sub-Man (FinTech)
        </p>
        <p>
            Developed by <a href="https://github.com/codetheorem">Hrishikesh</a> |
            <a href="https://github.com/vinayaksh42">Vinayak</a>
        </p>
    </div>
</template>

<script>
    export default {
        name: "appfooter",
    };
</script>

<style scoped>
    #logo {
        font-size: 30px;
    }
    a {
        margin-bottom: 0;
        color: white;
    }
    .footer {
        font-family: "Poppins", sans-serif;
        font-size: large;
        position: fixed;
        width: 100%;
        bottom: 0;
        background-color: #228be6;
        color: white;
        text-align: center;
        margin-bottom: 0;
    }
    p {
        margin-bottom: 0;
        font-size: larger;
    }
</style>