//app.js

new Vue({
  el: '#app',
  data: {
    playerHealth: 100,
    monsterHealth: 100,
    gameIsRunning: false,
    turns: []

  },
  methods: {
    startGame: function() {
        this.gameIsRunning = true;
        this.playerHealth = 100;
        this.monsterHealth = 100;
        this.turns = [];
    },
    attack: function() {
        this.gameIsRunning = true;
        var damage = this.calcDamage(9, 20);
        this.monsterHealth -= damage
        this.turns.unshift({
            isPlayer: true,
            text: "Alex hits monster for " + damage
        })
        if (this.monsterHealth <= 0) {
            alert('Alex won!');
            this.gameIsRunning = false;
            return;
        }
        damage = this.calcDamage(7, 22);
        this.playerHealth -= damage 
        this.turns.unshift({
            isPlayer: false,
            text: "Monster hits Alex for " + damage
        })
        if (this.playerHealth <= 0) {
            alert('Monster won!');
            this.gameIsRunning = false;
        }
        
    },
    calcDamage: function(min, max){
        return damage = Math.max(Math.floor(Math.random() * max) + 1, min);
    },
    specialAttack: function() {
        this.gameIsRunning = true;
        this.playerHealth = this.playerHealth - (100 * (Math.random)) ;
        this.monsterHealth = this.monsterHealth - (100 * (Math.random));
    },
    heal: function() {
        this.gameIsRunning = true;
        if (this.playerHealth <= 90) {
            this.playerHealth = this.playerHealth + 10; }
    },
    giveUp: function() {
        this.gameIsRunning = false;
        this.turns = [];
    }
  }
});
