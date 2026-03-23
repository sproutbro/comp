
type EditorState = {
    sections: Section[]
    selectedId: string | null

}

type Section = {
    id: string
    type: "hero" | "text" | "image" | "form"
    data: any
}