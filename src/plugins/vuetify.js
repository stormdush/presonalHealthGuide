import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import colors from 'vuetify/lib/util/colors'

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        dark: false,
        themes: {
            light: {
                primary: '#409eff',
                secondary: '#54a8ff',
                accent: '#9c27b0',
                error: '#f44336',
                warning: '#ff5722',
                info: '#607d8b',
                success: '#4caf50'
            },
            dark: {
                primary: colors.blue.darken1
            }
        }
    }
});
