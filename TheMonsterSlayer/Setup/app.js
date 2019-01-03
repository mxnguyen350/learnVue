new Vue({
    el: "#app",
    data: {
        showMe: true,
        playerHealth: 100,
        monsterHealth: 100,
        playerDamageDelt: 0,
        amountHealed: 0,
        monsterDamageDelt: 0,
        attackLog: []
    },
    methods: {
        // upon winning, give an alert with an option to restart or keep the screen as is
        // use .push() to an array that will add the damage to the array, which then will be displayed to the log(list)
        startGame() {
            // Later, this should reset the health of each character to equal max
            if (
                this.playerHealth != 100 ||
                this.monsterHealth != 100 ||
                this.attackLog != []
            ) {
                this.playerHealth = 100;
                this.monsterHealth = 100;
                this.attackLog = [];
            }
            return this.showMe = false;
        },
        resetGame() {
            return this.showMe = !this.showMe;
        },
        attack() {
            // affect monster health at a certain rate
            this.playerDamageDelt = (Math.floor(Math.random() * 14) + 1);
            this.monsterHealth = this.monsterHealth - this.playerDamageDelt;
            this.attackLog.unshift(`The monster took ${this.playerDamageDelt} damage`);
            
            if (this.monsterHealth <= 0) {
                if (confirm('You won! New game?')) {
                    this.startGame()
                    return;
                } else {
                    return this.showMe = !this.showMe
                }
            }
            
            //damage yourself
            this.monsterDamageDelt = (Math.floor(Math.random() * 18) + 2);
            this.playerHealth = this.playerHealth - this.monsterDamageDelt;
            this.attackLog.unshift(`The player took ${this.monsterDamageDelt} damage`);
            
            if (this.playerHealth <= 0) {
                if (confirm('You lost! New game?')) {
                    this.startGame()
                    return;
                } else {
                    return this.showMe = !this.showMe
                }
            }
        },
        specialAttack() {
            // affect monster health at a higher rate
            this.playerDamageDelt = Math.max(Math.floor(Math.random() * 20) + 1, 7);
            this.monsterHealth = this.monsterHealth - this.playerDamageDelt;
            this.attackLog.unshift(`The monster took ${this.playerDamageDelt} damage`);
            
            if (this.monsterHealth <= 0) {
                if (confirm('You won! New game?')) {
                    this.startGame()
                    return;
                } else {
                    return this.showMe = !this.showMe
                }
            }
            
            //damage yourself
            this.monsterDamageDelt = Math.max(Math.floor(Math.random() * 19) + 1, 5);
            this.playerHealth = this.playerHealth - this.monsterDamageDelt;
            this.attackLog.unshift(`The player took ${this.monsterDamageDelt} damage`);
            
            if (this.playerHealth <= 0) {
                if (confirm('You lost! New game?')) {
                    this.startGame()
                    return;
                } else {
                    return this.showMe = !this.showMe
                }
            }
        },
        heal() {
            // do not affect monster health, heal yourself
            this.amountHealed = Math.max(Math.floor(Math.random() * 20) + 1, 7);
            this.playerHealth = this.playerHealth + this.amountHealed;
            this.attackLog.unshift(`The player healed himself for ${this.amountHealed}`);
            
            // then take damage
            this.monsterDamageDelt = (Math.floor(Math.random() * 19) + 1);
            this.playerHealth = this.playerHealth - this.monsterDamageDelt;
            this.attackLog.unshift(`The player took ${this.monsterDamageDelt} damage`);
            
            if (this.playerHealth > 100) {
                this.playerHealth = 100
            }
            if (this.playerHealth <= 0) {
                if (confirm('You lost! New game?')) {
                    this.startGame()
                    return;
                } else {
                    return this.showMe = !this.showMe
                }
            }
        }
    }
})