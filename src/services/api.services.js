class ApiService {
  constructor(baseUrl) {
    this.url = baseUrl
  }

  async createPost(post) {
    try {
      const request = new Request(this.url + '/posts.json', {
        method: 'post',
        body: JSON.stringify(post)
      })
      return useRequest(request)
    } catch (error) {
      console.error(error)
    }
  }
  async fetchPosts() {
    try {
      const request = new Request(this.url + '/posts.json', {
        method: 'get'
      })
      return useRequest(request)
    } catch (error) {
      console.error(error)
    }
  }  
  async fetchPostsById(id) {
    try {
      const request = new Request(this.url + `/posts/${id}.json`, {
        method: 'get'
      })
      return useRequest(request)
    } catch (error) {
      console.error(error)
    }
  }
  async deletePostById(id) {
    try {
      console.log(id)
      const request = new Request(this.url + `/posts/${id}.json`, {
        method: 'delete'
      })
      return useRequest(request)
    } catch (error) {
      console.error(error)
    }
  }
}

async function useRequest(request) {
  const response = await fetch(request)
  return await response.json()
}

export const apiService = new ApiService('https://javascript-blog-abc1d.firebaseio.com/')