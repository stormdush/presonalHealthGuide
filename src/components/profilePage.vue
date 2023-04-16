<template>
    <v-container>
        <!-- info -->
        <v-card>
            <v-card-title>Information Panel</v-card-title>
            <v-card-text>
              <v-row>
                <v-col cols="12">
                  <v-card>
                    <v-card-text>
                    </v-card-text>
                  </v-card>
                </v-col>
                <v-col cols="12">
                  <v-card>
                    <v-card-text>
                      <v-text-field label="Text Input"></v-text-field>
                    </v-card-text>
                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn color="primary" icon>
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
export default {
    data: () => ({
        message: '',
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
    methods: {
        sendMessage() {
            // 发送消息
            this.message = '';
        },
    },
};
</script>
  