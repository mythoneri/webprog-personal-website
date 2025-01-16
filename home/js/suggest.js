// This is my vue for suggestions and feedback

const suggest = Vue.createApp({
    data() {
      return {
        guestName: '',
        guestSuggest: '',
        Suggestions: []  
      };
    },
    methods: {
      addSuggest() {
       
        const newSuggestion = {
          id: this.Suggestions.length + 1, 
          name: this.guestName,
          message: this.guestSuggest
        };
        this.Suggestions.push(newSuggestion); 
        this.guestName = '';
        this.guestSuggest = '';
      }
    }
  });


suggest.mount('#suggestions');
