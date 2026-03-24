import { defineConfig } from "vitest/config";
import { describe, test } from "vitest";

const css = `
body {
  margin: 0;
}

.editor {
  display: flex;
  height: 100vh;
}

textarea {
  width: 50%;
  padding: 12px;
  border: none;
  outline: none;
  font-family: monospace;
}

iframe {
  width: 50%;
  border: none;
}
`

export default defineConfig({
    test: {
        environment: "happy-dom"
    }
})

describe("dd", () => {

    const editor = document.createElement("div")
    editor.className = "editor"

    const textarea = document.createElement("textarea")
    textarea.id = "html-input"

    const iframe = document.createElement("iframe")
    iframe.id = "preview"

    editor.append(textarea, iframe)

    const app = document.getElementById("app")
    app?.append(editor)

    const input = document.getElementById("html-input") as HTMLTextAreaElement
    const frame = document.getElementById("preview") as HTMLIFrameElement

    const head = document.createElement("head")
    const style = document.createElement("style")
    style.innerHTML = css
    head.append(style)

    test(() => {

        input.addEventListener("input", () => {
            const doc = frame.contentDocument!
            doc.open()
            doc.write(input.value)
            doc.close()
        })

    })
})
