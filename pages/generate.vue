<template>
    <div class="md-layout md-gutter">
        <md-card md-with-hover class="md-layout-item book">
            <md-card-header>
                <md-field class="md-layout-item md-size-20">
                    <label>Character Name</label>
                    <md-input v-model="charactername" type="character name"  class="md-title"></md-input>
                </md-field>
            </md-card-header>
            <md-card-content class="md-layout-item md-size-50">       
                    <div class="racial">
                        <span v-if="race"><i> {{ race.name }},  <span v-for="classes in character.classes" :key="classes.index">{{ classes.name }}</span></i></span> | <span>{{ character.alignment }}</span>
                    </div>

                    <div class="classes" v-for="classes in character.classes" :key="classes.index">
                        <span> <h5>{{ classes.name }}</h5> </span>
                        <!-- <div class="proficiency">
                            <div v-for="proficiencyGroup in classes.proficiency_choices" :key="proficiencyGroup.index">
                                <div v-for="proficiency in proficiencyGroup.from" :key="proficiency">
                                    {{ proficiency.name }}
                                </div>
                                <hr/>
                            </div>
                        </div> -->
                    </div>
                    
                    <Divider/>
                    <div class="ability-block">
                        <div class="ability-block__stat md-layout-item md-size-16"  v-for="stat in character.stats" :key="stat.index">
                            <div class="ability-block__heading">{{ stat.name }}</div>
                            <div class="ability-block__data">
                                <span class="ability-block__score">{{ stat.value }}</span>
                                <span class="ability-block__modifier">({{statModifier(stat.value)}})</span>
                            </div>
                        </div>
                    </div>
                    <Divider/>
                    
                    <!-- Proficiencies -->

                    <div v-if="background" class="background">
                        {{ background.name }}
                        <p>
                            {{ background.trait[3].text[0] }}
                        </p>
                    </div>
            </md-card-content>
        </md-card>
    </div>
</template>

<script>
import Divider from '~/components/Divider'
import EditText from '~/components/EditText'

export default {
    data() {
        return {
        character: this.getNPC(),
        skills: []
        }
    },
    computed: {
        race: function() {
            return this.character.race;
        },
        background: function() {
            return this.character.background;
        }
    },
    methods: {
        async getNPC() {
            const character = await this.$axios.$post('https://random-5e.herokuapp.com/generate/')
            return this.character = character
        },
        times (x){
            f => {
                if (x > 0) {
                    f()
                    times (x - 1) (f)
                }           
            }
        },
        randomList: function(rand){
            return rand.sort(function(){return 0.5 - Math.random()});
        },
        statModifier: function(stat){
            var bonus = Math.round((stat-10.5)/2); 
            if (bonus > 0) {
                return "+" + bonus 
            } else if (bonus <= 0){
                return bonus
            } 
        }
    },
    components: {
        Divider,
        EditText
    },
    updated() {
        let classSkills = [];
        function shuffle(a) {
                var j, x, i;
                for (i = a.length - 1; i > 0; i--) {
                    j = Math.floor(Math.random() * (i + 1));
                    x = a[i];
                    a[i] = a[j];
                    a[j] = x;
                }
                return a;
        }
        this.character.classes.forEach(function(thisClass){
            thisClass.proficiency_choices.forEach(function(proficiencyType){
                const n = proficiencyType.choose;   
                shuffle(proficiencyType.from);
                proficiencyType.from.splice(0, proficiencyType.length - n);
            })
        })
    },
}
</script>

<style>
.book{
    background: url(../assets/images/stat-block-top-texture.png),url(../assets/images/paper-texture.png);
    background-size: 100% auto;
    background-position: top center;
    background-repeat: no-repeat,repeat;
    position: relative;
    box-shadow: 0 0 5px #979AA4;
    border: 1px solid #d4d0ce;
    margin: 15px 0;
    font-family: "Scala Sans Offc",Roboto,Helvetica,sans-serif;
    font-size: 15px;
}

.book::before, .book::after {
    content: "";
    display: block;
    background: url(../assets/images/stat-bar-book.png) center;
    background-size: 100% 100%;
    height: 6px;
    position: absolute;
    left: -3px;
    right: -3px;
}

.md-title{
    font-family: "Alegreya", Roboto, Helvetica, sans-serif;
    color: #822000;
}

.heading{
    border-bottom: 1px solid #822000;
    color: #822000;
    font-size: 24px;
    font-weight: normal;
    font-family: "Scala Sans Sc Offc",Roboto,Helvetica,sans-serif;
    line-height: 1.4;
    margin-top: 20px;
    margin-bottom: 15px;
}

.ability-block {
    font-family: "Scala Sans Offc",Roboto,Helvetica,sans-serif;
    font-size: 14px;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-flex-wrap: wrap;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    color: #822000;
    margin: 0;
}

.ability-block__stat {
    width: 30%;
    padding: 5px 0;
    text-align: center;
}

.ability-block__heading {
    font-weight: bold;
}


</style>