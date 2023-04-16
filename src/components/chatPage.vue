<template>
    <v-container>
        <!-- info -->
        <v-card>
            <v-card-title>Information Panel</v-card-title>
            <v-card-text>
                <v-row>
                    <v-list>
                        <v-list-item v-for="(message, index) in messages" :key="index">
                            <v-list-item-content>
                                <v-card :class="[message.from === 'user' ? 'ml-auto' : 'mr-auto']" class="mt-2">
                                    <v-card-text>{{ message.text }}</v-card-text>
                                </v-card>
                            </v-list-item-content>
                        </v-list-item>
                    </v-list>
                    <v-col cols="12">
                        <v-card>
                            <v-card-text>
                                <v-textarea label="Type your messages here" v-model=inputMessage></v-textarea>
                            </v-card-text>
                            <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn color="primary" icon @click="sendMessage">
                                    <v-icon>mdi-send</v-icon>
                                </v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-col>
                </v-row>
            </v-card-text>
        </v-card>
    </v-container>
</template>
  
<script>
const axios = require('axios');

export default {
    data: () => ({
        inputMessage: '',
        message: {
            form: 'bot',
            text: "Hello! I'm your virtual medical assistant. What can I help you with today?"
        },
        page: 1,
        itemsPerPage: 10,
        messages: [
            // 消息列表
        ],
    }),
    computed: {
        totalPages() {
            return Math.ceil(this.messages.length / this.itemsPerPage);
        },
        displayedMessages() {
            const startIndex = (this.page - 1) * this.itemsPerPage;
            const endIndex = startIndex + this.itemsPerPage;
            return this.messages.slice(startIndex, endIndex);
        },
    },
    mounted() {
        setTimeout(this.setDefault, 1000);
    },

    methods: {
        async sendMessage() {
            // 添加用户发送的消息到列表中
            this.messages.push({ from: "user", text: this.inputMessage });

            // 发送消息到后端服务
            const response = await axios.post("http://10.0.0.193:3000/api/chat", {
                message: this.inputMessage,
            });
            const text = response.data;
            // 添加ChatGPT的回复到列表中
            this.messages.push({ from: "bot", text: text });
            // 清空输入框
            this.inputMessage = "";
        },
        setDefault() {
            this.messages.push({ from: "bot", text: "Hello! I'm your virtual medical assistant. What can I help you with today?" });
            // const response = axios.post("http://10.0.0.193:3000/api/chat", {
            //     message: 'I want you to act as a virtual doctor. I will describe my symptoms and you will provide a diagnosis and treatment plan. You should only reply with your diagnosis and treatment plan, and remind me whether I should seek medical attention based on the severity of the symptoms.',
            // });
            // console.log(response.data);
        },
    },
};
</script>
<style>
.ml-auto {
    background-color: #ffcdd2;
    color: #d32f2f;
    border-radius: 5px;
    padding: 10px;
    margin-bottom: 10px;
    text-align: right;
}

.mr-auto {
    background-color: #f5f5f5;
    color: #333;
    border-radius: 5px;
    padding: 10px;
    margin-bottom: 10px;
    text-align: left;
}
</style>