export function setupLayout() {

  document.body.innerHTML = `
    <div class="l-root">
      
      <header class="l-header">Header</header>

      <div class="l-body">
        <aside class="l-aside">Aside</aside>
        <main class="l-main">Main</main>
      </div>

      <footer class="l-footer">Footer</footer>

    </div>
  `

  const style = document.createElement("style")

  style.textContent = `
    body { margin: 0; font-family: sans-serif; }

    .l-root {
      display: flex;
      flex-direction: column;
      height: 100vh;
      background: #1e1f22;
      color: #eee;
    }

    .l-header, .l-footer {
      height: 50px;
      display: flex;
      align-items: center;
      padding: 0 16px;
      background: #2a2b30;
    }

    .l-body {
      flex: 1;
      display: flex;
    }

    .l-aside {
      width: 200px;
      background: #25262b;
      padding: 16px;
    }

    .l-main {
      flex: 1;
      padding: 16px;
    }
  `

  document.head.appendChild(style)
}



export function addMainButtons() {

  const main = document.querySelector(".l-main")
  if (!main) return

  const wrap = document.createElement("div")

  wrap.innerHTML = `
    <div class="m-tools">
      <button>추가</button>
      <button>삭제</button>
      <button>저장</button>
    </div>
  `

  main.prepend(wrap)

  const style = document.createElement("style")

  style.textContent = `
    .m-tools {
      display: flex;
      gap: 8px;
      margin-bottom: 12px;
    }

    .m-tools button {
      padding: 6px 12px;
      background: #2a2b30;
      color: #eee;
      border: 1px solid #333;
      border-radius: 6px;
      cursor: pointer;
    }

    .m-tools button:hover {
      background: #3a3b40;
    }
  `

  document.head.appendChild(style)
}