<template>
  <div>
    <h1>Lista de tarefas</h1>
  </div>

  <div class="flex-center mt-lg">
    <input v-model="taskModel" type="text" placeholder="Escreva aqui uma tarefa" class="width-500">
    <button class="bg-primary" @click="addTask">Adicionar tarefa</button>
  </div>

  <div class="mt-md">
      <!-- {{ todoList.length == 0 }} -->
      <div v-if="todoList.length == 0" class="text-center">
        Nenhuma tarefa criada :(
      </div>

      <ul v-else>
        <li v-for="(task, index) in todoList" :key="index" >
          
          <span :class="task.isCompleted && 'task-completed'">
            {{ index + 1 }}. {{ task.name }}
          </span>

          <button @click="handleStatusTask(task)" class="btn-sm bg-secondary" > Completar</button>
          <button @click="deleteTask(task)" class="btn-sm bg-negative" > Apagar tarefa</button>
        </li>
      </ul>

  </div>

</template>

<script setup>
import { ref } from 'vue';

const todoList = ref([])
const taskModel = ref('')

const addTask = () => {

  if(taskModel.value == ''){
    alert('Digite algum valor...')
    return
  }

  const task = {
    name: taskModel.value,
    isCompleted: false
  }

  todoList.value.push(task);
  taskModel.value = '';
}

const deleteTask = (task) => {
  const index = todoList.value.indexOf(task)
  if (index > -1) {
    todoList.value.splice(index, 1);
  }
}

const handleStatusTask = (search) => {
  const index = todoList.value.indexOf(search)

  const task = todoList.value[index];
  const value = task.isCompleted ? 0 : 1;
  task.isCompleted = value;
}

</script>

<style scoped>

.task-completed{
  text-decoration: line-through;
}

.width-500{
  width: 500px;
}

</style>
