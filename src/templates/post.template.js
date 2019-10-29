export function renderPost(post, withButton) {
  const tag = post.type === 'news'
    ? `<li class="tag tag-blue tag-rounded">${post.type}</li>`
    : `<li class="tag tag-rounded">${post.type}</li>`

  const favorites = JSON.parse(localStorage.getItem('favorites')) || []
  const candidate = favorites.find(p => p.id === post.id)

  const button = candidate
    ? `<button class="button-round button-danger button-small" data-id="${post.id}" data-title="${post.title}">Delete bookmark</button>`
    : `<button class="button-round button-primary button-small" data-id="${post.id}" data-title="${post.title}">Bookmark</button>`

  return `
    <div class="panel">
      <div class="panel-head">
        <p class="panel-title"><a href="#"><i class="fa fa-trash-alt js-delete" data-id="${post.id}"></i></a> ${post.title}</p>
        <ul class="tags">
          ${tag}
        </ul>
      </div>
      <div class="panel-body">
        <p class="multi-line">${post.fulltext}</p>
      </div>
      <div class="panel-footer w-panel-footer">
        <small>${post.date}</small>
        ${withButton ? button : ''}
      </div>
    </div>
  `
}