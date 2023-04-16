<template>
  <v-form @submit.prevent="submitForm">
    <v-data-table :headers="tableData.headers" :items="tableData.items">
      <template v-slot:[`item.day`]="{ item }">
        <strong>{{ item.day }}</strong>
      </template>
    </v-data-table>
    <v-container>
      <v-row>
        <v-col cols="12" md="6">
          <v-text-field v-model="formData.height" label="Height (in cm)" type="number" required></v-text-field>
        </v-col>
        <v-col cols="12" md="6">
          <v-text-field v-model="formData.weight" label="Weight (in kg)" type="number" required></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" md="6">
          <v-radio-group v-model="formData.gender" label="Gender" required>
            <v-radio value="male" label="Male"></v-radio>
            <v-radio value="female" label="Female"></v-radio>
          </v-radio-group>
        </v-col>
        <v-col cols="12" md="6">
          <v-select v-model="formData.exercise" :items="exerciseItems" label="Exercise Habits" required></v-select>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <v-btn type="submit" color="primary">Submit</v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>

<script>
const axios = require('axios');

export default {
  data: () => ({

    tableData: {
      headers: [
        { text: 'Day', value: 'day' },
        { text: 'Activity', value: 'activity' },
      ],
      items: [
        {
          day: 'Monday',
          activity: ''
        },
        {
          day: 'Tuesday',
          activity: ''
        },
        {
          day: 'Wednesday',
          activity: ''
        },
        {
          day: 'Thursday',
          activity: ''
        },
        {
          day: 'Friday',
          activity: ''
        },
        {
          day: 'Saturday',
          activity: ''
        },
        {
          day: 'Sunday',
          activity: ''
        },
      ],
    },
    formData: {
      height: null,
      weight: null,
      gender: null,
      exercise: null
    },
    exerciseItems: [
      'desk job all day',
      '30 minutes per day',
      '30-60 minutes per day',
      'over 60 minutes per day'
    ]

  }),

  methods: {
    async submitForm() {
      // 添加用户发送的消息到列表中 this.formData
      let reqText = `Please make an exercise plan according to the data below and return an object like {
      "headers": [
        { "text": "Day", "value": "day" },
        { "text": "Activity", "value": "activity" }
      ],
      "items": [
        { "day": "Monday", "activity": "Running for 30 minutes" },
        { "day": "Tuesday", "activity": "Resistance/weight training for 30 minutes" },
        { "day": "Wednesday", "activity": "Swimming for 30 minutes" },
        { "day": "Thursday", "activity": "Biking for 30 minutes" },
        { "day": "Friday", "activity": "Stretching/Yoga for 30 minutes" },
        { "day": "Saturday", "activity": "Jumping rope for 30 minutes" },
        { "day": "Sunday", "activity": "Interval Training for 30 minutes" }
      ]
    }, 
        height: ${this.formData.height} cm,
        weight: ${this.formData.weight} kg,
        gender: ${this.formData.gender},
        exercise: ${this.formData.exercise}`;
      // 发送消息到后端服务
      const response = await axios.post("http://10.0.0.193:3000/api/chat", {
        message: reqText,
      });

      const text = response.data;
      console.log(text)
      this.tableData = text;
    },

  },

}
</script>
