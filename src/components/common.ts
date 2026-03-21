export function createIconButton(textContent: string) {
    const button = document.createElement("button")
    button.className = "icon-btn"

    const span = document.createElement("span")
    span.className = "material-icons"
    span.textContent = textContent

    button.append(span)
    return button
}
