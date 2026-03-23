// const root = document.getElementById("app")!
// const modal = new ModalRoot(root)

function bootstrap() {

    const body = document.body

    const app = document.createElement("app")
    body.append(app)

    app.innerHTML  = `
    <button>dd</button>
    <template id="layout-default">
    <div class="l-root">
        <header class="l-header" data-slot="header">

            <div class="l-body">
                <nav class="l-nav" data-slot="nav"></nav>

                <main class="l-main" data-slot="main"></main>

                <aside class="l-aside" data-slot="aside"></aside>

                <footer class="l-footer" data-slot="footer"></footer>
            </div>

        </header>
    </div>
</template>`

    // const button = document.createElement("button")
    // button.textContent = "모달"
    // app.replaceChildren(button)

}

bootstrap()