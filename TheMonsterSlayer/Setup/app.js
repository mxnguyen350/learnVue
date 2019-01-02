new Vue({
    el: "#app",
    data: {
        showMe: true,
        playerHealth: 100,
        monsterHealth: 100,
        playerDamageDelt: 0,
        monsterDamageDelt: 0
    },
    methods: {
        // upon winning, give an alert with an option to restart or keep the screen as is
        startGame() {
            // Later, this should reset the health of each character to equal max
            return this.showMe = !this.showMe;
        },
        resetGame() {
            return this.showMe = !this.showMe;
        },
        attack() {
            // affect monster health at a certain rate
            //damage yourself
        },
        specialAttack() {
            // affect monster health at a higher rate
            // damage yourself at the same rate as when you attack
        },
        heal() {
            // do not affect monster health, heal yourself
            // then take damage
        }
    }
})