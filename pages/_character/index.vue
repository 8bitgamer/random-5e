<template>
    <div class="md-layout">
        <md-card class="md-layout-item md-size-25" v-for="character in characters" :key="character">
        <md-card-media>
            <img :src="character.image" alt="People">
        </md-card-media>

        <md-card-header>
            <div class="md-title">{{ character.name }}</div>
            <div class="md-subhead">Lvl {{ character.level }} | {{ character.race }} | {{ character.class }}</div>
        </md-card-header>

        <md-card-expand>
            <md-card-actions md-alignment="space-between">
            <div>
                <md-button><md-icon>assignment_ind</md-icon> View</md-button>
                <md-button><md-icon>edit</md-icon> Edit</md-button>
                <md-button><md-icon>file_copy</md-icon> Copy</md-button>
                <md-button><md-icon>delete</md-icon> Delete</md-button>
            </div>

            <md-card-expand-trigger>
                <md-button class="md-icon-button">
                <md-icon>keyboard_arrow_down</md-icon>
                </md-button>
            </md-card-expand-trigger>
            </md-card-actions>

            <md-card-expand-content>
            <md-card-content>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea, nostrum odio. Dolores, sed accusantium quasi non, voluptas eius illo quas, saepe voluptate pariatur in deleniti minus sint. Excepturi.
            </md-card-content>
            </md-card-expand-content>
        </md-card-expand>
        </md-card>       
    </div>
</template>


<script>

export default {
    data() {
        return {
            characters: [
                { name: 'Illiandra Treefire', race: "Elf", level: "1", class: "Wizard", image: "https://images.all-free-download.com/images/wallpapers_thum/dragon_fire_fantasy_girl_15654.jpg" },
                { name: 'Elminster', race: "Human", level: "21", class: "Wizard", image: "https://s-media-cache-ak0.pinimg.com/originals/08/23/4d/08234d552b93ee05de113f179e5b894c.jpg" },
                { name: 'Drizzt', race: "Elf (Drow)", level: "17", class: "Ranger", image: "https://i.kinja-img.com/gawker-media/image/upload/s--VQGMet-K--/c_fit,f_auto,fl_progressive,q_80,w_320/18hgmuin7qm1mjpg.jpg" },
                { name: 'Brendle', race: "gnome", level: "6", class: "Thief", image: "https://vignette.wikia.nocookie.net/warhammerfb/images/6/6d/Warhammer_fantasy_art_skaven_1440x900_51375.jpg" },
                { name: 'Twid', race: "Fremlin", level: "3", class: "Bard", image: "https://vignette.wikia.nocookie.net/fairytailfanon/images/f/fb/Fantasy-movies-with-magical-creatures-movie-77646416.jpg" },
                { name: 'Bort', race: "Dwarf", level: "2", class: "Barbarian", image: "http://4.bp.blogspot.com/-XDQJHeASlwU/TvBoIbkK3nI/AAAAAAAADkQ/LpNX4FeaD9I/s1600/Fantasy+wallpaper+hd+3.jpg" },
                { name: 'Grundle', race: "Troll", level: "5", class: "Fighter", image: "https://i.pinimg.com/originals/af/0f/10/af0f106aad32f228eaa8404bd03fba49.jpg" }
            ]
        }
    }
}
</script>