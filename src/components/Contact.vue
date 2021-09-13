<template>
    <div>
  <table>
      <thead>My contact list</thead>
      <tbody>
          <tr>
              <th>Head1</th>
          </tr>
          <tr>
              <td>Value1</td>
          </tr>
      </tbody>
  </table>
  <button @click="add()">Add</button>
  <button @click="edit()">Edit</button>
  <button @click="del()">Delete</button>
  </div>
</template>

<script>
import {ContactBehaviourEdit,ContactBehaviourView} from '../behaviours/ContactBehaviour'
export default {
    name: 'Contact',
    data() {
        return {
            behaviour: ContactBehaviourEdit,
            action: 'Current action'
        }
    },
    props: {
        display_as: String
    },
    methods: {
        add() {
            this.behaviour.add()
        },
        edit() {
            // console.log(this.action)
            this.behaviour.edit()
        },
        del() {
            this.behaviour.delete()
        }
    },
    mounted() {
        console.log(`Mounted contact ${this.display_as}`)
        if (this.display_as === 'edit') {
            //console.log(this.action)
            this.behaviour = ContactBehaviourEdit
        } else if (this.display_as === 'view') {
            this.behaviour = ContactBehaviourView
        }
    }
}
</script>

<style>

</style>