<template>
    <div id="login">
        <h1>Please specify a user to continue</h1>
        <input type="text" name="username" v-model="input.username" placeholder="Username" />
        <button type="button" v-on:click="login()">Login</button>
    </div>
</template>

<script>
    export default {
        name: 'Login',
        data() {
            return {
                input: {
                    username: "",
                }
            }
        },
        methods: {
            login() {
                if(this.input.username != "") {
                        this.$emit("authenticated", true);
                        this.$router.replace({ name: "home" });
                    } else {
                        console.log("Please specify a username");
                    }
            }
        }
    }
</script>

<style scoped>
    #login {
        width: 500px;
        border: 1px solid #CCCCCC;
        background-color: #FFFFFF;
        margin: auto;
        margin-top: 200px;
        padding: 20px;
    }
</style>