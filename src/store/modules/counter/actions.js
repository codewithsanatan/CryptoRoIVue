import axios from 'axios';

const actions = {
    getPostDataFromApi(context, ndata) {
        console.log(ndata);
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
        .then((res) => {
            context.commit('updatePostData', res.data)
        })
        .catch(err => console.log(err));
    }
}

export default actions;