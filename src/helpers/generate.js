import marked from 'marked'
import copy from 'copy-to-clipboard'

export function generate (markdown) {
  const withMarker = `${markdown}\n\n<!-- generated by Mand Mobile Issue Helper. DO NOT REMOVE -->`

  copy(withMarker)

  const renderer = new marked.Renderer({
    gfm: true,
    tables: true,
    breaks: false,
    pedantic: false,
    sanitize: true,
    smartLists: true,
    smartypants: false
  })

  // Extend linkRenderer to return links that open in a new tab
  const linkRenderer = renderer.link
  renderer.link = (href, title, text) => {
      const html = linkRenderer.call(renderer, href, title, text)
      return html.replace(/^<a /, '<a target="_blank" rel="nofollow" ')
  };

  return {
    markdown: withMarker,
    html: marked(markdown, { renderer })
  }
}