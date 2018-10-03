import Vue from 'vue';
import backgrounds from '../data/backgrounds'
import plots from '../data/plots'
import races from '../data/races'
import monsters from '../data/bestiary'

export const Store = new Vue({
 data() {
     return {
        backgrounds,
        plots,
        races,
        monsters
     };
 }
});