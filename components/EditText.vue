<template>
    <div>
        <div v-if="!editing">
            <span class='text' @click="enableEditing">{{value}}</span>
        </div>
        <div v-if="editing">
            <input v-model="tempValue" class="input"/>
            <button @click="disableEditing"> Cancel </button>
            <button @click="saveEdit"> Save </button>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return{
        value: 'John Smith',
        tempValue: null,
        editing: false
        }
    },
    methods: {
        enableEditing: function(){
            this.tempValue = this.value;
            this.editing = true;
        },
        disableEditing: function(){
            this.tempValue = null;
            this.editing = false;
        },
        saveEdit: function(){
            // However we want to save it to the database
            this.value = this.tempValue;
            this.disableEditing();
        }
    }
}
</script>