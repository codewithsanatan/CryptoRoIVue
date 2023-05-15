const mutations = {
    increment(state) {
        state.count++;
    },
    updatePostData(state, postData) {
        console.log('test - updatePostData');
        state.postData = postData;
    }
}

export default mutations;