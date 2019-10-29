import {Component} from '../core/component'
import {apiService} from '../services/api.services'
import {TransformService} from '../services/transform.service'
import {renderPost} from '../templates/post.template'

export class PostsComponent extends Component {
  constructor(id, {loader}) {
    super(id)
    this.loader = loader
  }

  init() {
    this.$el.addEventListener('click', buttonHandler.bind(this))
  }
  
  async onShow() {
    this.loader.show()
    const fbData = await apiService.fetchPosts()
    if(fbData) {
      const posts = TransformService.fbObjectToArray(fbData)
      const html = posts.map(post => renderPost(post, true))
      this.loader.hide()
      this.$el.insertAdjacentHTML('afterbegin', html.join(' '))
    } else {
      this.loader.hide()
      this.$el.insertAdjacentHTML('afterbegin', '<p>You have not added any posts yet</p>')
    }

  }

  onHide() {
    this.$el.innerHTML = ''
  }

}

async function buttonHandler(event) {
  const $el = event.target
  const id = $el.dataset.id
  const title = $el.dataset.title

  //delete post from database and bookmarks
  if($el.classList.contains('js-delete')) {
    event.preventDefault()
    let favorites = JSON.parse(localStorage.getItem('favorites')) || []
    const candidate = favorites.find(p => p.id === id)
    if(candidate) {
      favorites = favorites.filter(p => p.id !== id)
    }
    localStorage.setItem('favorites', JSON.stringify(favorites))
    await apiService.deletePostById(id)
    this.hide()
    this.show()
   }

  if(id && !$el.classList.contains('js-delete')) {
    let favorites = JSON.parse(localStorage.getItem('favorites')) || []
    const candidate = favorites.find(p => p.id === id)

    if(candidate) {
      //delete element
      $el.textContent = 'Bookmark'
      $el.classList.add('button-primary')
      $el.classList.remove('button-danger')
      favorites = favorites.filter(p => p.id !== id)
    } else {
      //add element
      $el.classList.remove('button-primary')
      $el.classList.add('button-danger')
      $el.textContent = 'Delete bookmark'
      favorites.push({id, title})
    }
    localStorage.setItem('favorites', JSON.stringify(favorites))
  }
}