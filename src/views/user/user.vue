<script>
import { mapGetters } from 'vuex';

export default {
  name: 'user',
  data() {
    return {
      title: 'jsx-user'
    };
  },
  computed: {
    ...mapGetters('user', ['name'])
  },
  render() {
    return <h1>{this.name}</h1>;
  }
};
</script>
