import { onMounted, onUpdated } from 'vue'
import hljs from 'highlight.js'

export default function useHighlight(refElement) {
  const highlightCode = () => {
    if (refElement.value) {
      const blocks = refElement.value.querySelectorAll('pre code')
      blocks.forEach((block) => {
        hljs.highlightBlock(block)
      })
    }
  }

  onMounted(highlightCode)
  onUpdated(highlightCode)
}
